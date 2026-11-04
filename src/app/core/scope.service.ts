import { Injectable, computed, inject, signal } from '@angular/core';
import { ApiService } from './api.service';
import { Filter, Masters, Thresholds } from './models';

/** Organization â†’ Business Unit â†’ Unit scope and the global analysis filters shared by every page. */
@Injectable({ providedIn: 'root' })
export class ScopeService {
  private api = inject(ApiService);
  readonly masters = signal<Masters | null>(null);
  readonly settings = signal<Record<string, string>>({});
  readonly filter = signal<Filter>({ bu: 'All', plant: 'All', cat: 'All', status: 'All', dept: 'All', q: '' });
  readonly version = signal(0);   // bump to make pages reload

  readonly thresholds = computed<Thresholds>(() => {
    const s = this.settings(); const n = (k: string, d: number) => Number(s[k] ?? d) || d;
    return { expiryDays: n('expiryDays', 180), agingDays: n('agingDays', 180), longLyingDays: n('longLyingDays', 365), nonMovingDays: n('nonMovingDays', 180),
      slowMovingDays: n('slowMovingDays', 90), consAgingDays: n('consAgingDays', 90), qualityHoldDays: n('qualityHoldDays', 30), highValue: n('highValue', 500000), fyStart: n('fyStart', 4) };
  });
  readonly level = computed(() => this.filter().plant !== 'All' ? 'unit' : this.filter().bu !== 'All' ? 'bu' : 'org');
  readonly activePlants = computed(() => (this.masters()?.plants ?? []).filter(p => p.active));
  readonly bus = computed(() => [...new Set(this.activePlants().map(p => p.buCode))]);

  load() {
    this.api.masters().subscribe(m => this.masters.set(m));
    this.api.settings().subscribe(s => this.settings.set(s));
  }
  unitsOf(bu: string): string[] { return this.activePlants().filter(p => p.buCode === bu).map(p => p.name); }
  set(patch: Partial<Filter>) { this.filter.update(f => ({ ...f, ...patch })); }
  goScope(bu: string, plant = 'All') { this.set({ bu, plant }); }
  refresh() { this.version.update(v => v + 1); }
  title(): string {
    const f = this.filter(), l = this.level();
    return l === 'org' ? (this.settings()['companyName'] || 'Unichem Laboratories Ltd.') : l === 'bu' ? `${f.bu} Business Unit` : `${f.plant} Unit`;
  }
  path(): string[] {
    const f = this.filter(); const p = ['Unichem'];
    if (f.bu !== 'All') p.push(f.bu); if (f.plant !== 'All') p.push(f.plant); return p;
  }
}
