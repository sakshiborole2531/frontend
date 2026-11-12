import { Injectable, computed, inject, signal } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { Filter, Masters, Thresholds } from './models';

/** Organization → Business Unit → Unit scope and the global analysis filters shared by every page. */
@Injectable({ providedIn: 'root' })
export class ScopeService {
  private api = inject(ApiService);
  private auth = inject(AuthService);
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

  /** All active masters in DB */
  readonly allActiveBusinessUnits = computed(() =>
    [...(this.masters()?.businessUnits ?? [])]
      .filter(b => b.active !== false && Boolean(b.code))
      .sort((a, b) => (a.sortOrder ?? 99) - (b.sortOrder ?? 99))
  );

  readonly allActivePlants = computed(() =>
    [...(this.masters()?.plants ?? [])]
      .filter(p => p.active !== false)
      .sort((a, b) => (a.sortOrder ?? 99) - (b.sortOrder ?? 99))
  );

  /**
   * Allowed Business Unit codes dynamically computed from logged-in user permissions.
   * If scopeAll is true (or admin), returns all active BU codes.
   * Otherwise returns only those permitted via scopeBus or plant associations via scopeUnits.
   */
  readonly allowedBus = computed<string[]>(() => {
    const me = this.auth.me();
    const allBus = [...new Set([
      ...this.allActiveBusinessUnits().map(b => b.code).filter(Boolean),
      ...this.allActivePlants().map(p => p.buCode).filter(Boolean)
    ])];

    if (!me || me.scopeAll || (me.role && me.role.toLowerCase() === 'admin')) {
      return allBus;
    }

    const allowed = new Set<string>();
    (me.scopeBus ?? []).forEach(b => { if (b) allowed.add(b); });

    // Also include BUs matching user's assigned scopeUnits/plants
    const plantMap = new Map<string, string>();
    this.allActivePlants().forEach(p => { if (p.name && p.buCode) plantMap.set(p.name, p.buCode); });
    (me.scopeUnits ?? []).forEach(u => {
      const bu = plantMap.get(u);
      if (bu) allowed.add(bu);
    });

    return allBus.filter(b => allowed.has(b));
  });

  /** Whether the user has organization-wide (all BU) access */
  readonly hasAllAccess = computed<boolean>(() => {
    const me = this.auth.me();
    if (!me) return true;
    if (me.scopeAll || (me.role && me.role.toLowerCase() === 'admin')) return true;
    const allBus = this.allActiveBusinessUnits().map(b => b.code).filter(Boolean);
    return allBus.length > 0 && this.allowedBus().length >= allBus.length;
  });

  /** Active plants permitted for current user */
  readonly activePlants = computed(() => {
    const me = this.auth.me();
    const plants = this.allActivePlants();
    if (!me || me.scopeAll || (me.role && me.role.toLowerCase() === 'admin')) {
      return plants;
    }
    const allowedBuSet = new Set(this.allowedBus());
    const allowedUnitSet = new Set(me.scopeUnits ?? []);
    return plants.filter(p => {
      if (!allowedBuSet.has(p.buCode)) return false;
      if (allowedUnitSet.size > 0 && !allowedUnitSet.has(p.name)) {
        // If user is restricted to specific units and whole BU is not in scopeBus
        if (!(me.scopeBus ?? []).includes(p.buCode)) return false;
      }
      return true;
    });
  });

  readonly activeBusinessUnits = computed(() => {
    const allowedBuSet = new Set(this.allowedBus());
    return this.allActiveBusinessUnits().filter(b => allowedBuSet.has(b.code));
  });

  /** Permitted Business Units list (used across sidebar, filter-bar, selectors) */
  readonly bus = computed<string[]>(() => this.allowedBus());

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
