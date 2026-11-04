import { Component, ViewChild, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ChartConfiguration } from 'chart.js';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { ScopeService } from '../../core/scope.service';
import { BUCKET_COLORS, CalcItem, SHORT } from '../../core/models';
import { fmtV, invStatus, pct, realFlags } from '../../core/format';
import { ChartDirective } from '../../shared/chart';
import { FilterBarComponent } from '../../shared/filter-bar.component';
import { RecordDialog, openActionForm } from '../../shared/dialogs';
import { UI } from '../../shared/ui';

/** Multilevel dashboard: Organization â†’ Business Unit â†’ Unit, organized by the operating philosophy. */
@Component({
  standalone: true, imports: [FormsModule, MatTableModule, MatSortModule, MatPaginatorModule, ChartDirective, FilterBarComponent, ...UI],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  api = inject(ApiService); scope = inject(ScopeService); auth = inject(AuthService); private dlg = inject(MatDialog); private router = inject(Router);
  d = signal<any>(null);
  items = signal<CalcItem[]>([]);
  loading = signal(true);
  regTab = signal('all');
  regQ = signal('');
  short = SHORT;
  fmtV = fmtV; pct = pct; invStatus = invStatus; realFlags = realFlags;

  cols = ['plant', 'code', 'name', 'matType', 'qty', 'uom', 'value', 'age', 'rsl', 'status', 'movement', 'fefo', 'prio'];
  ds = new MatTableDataSource<CalcItem>([]);
  @ViewChild(MatSort) set sort(s: MatSort) { if (s) this.ds.sort = s; }
  @ViewChild(MatPaginator) set pager(p: MatPaginator) { if (p) this.ds.paginator = p; }

  constructor() {
    this.ds.sortingDataAccessor = (x: any, k) => k === 'status' ? invStatus(x)[0] : k === 'fefo' ? this.fefo(x) : k === 'prio' ? x.score : x[k] ?? -1;
    effect(() => {
      const f = this.scope.filter(); this.scope.version();
      this.loading.set(true);
      this.api.dashboard(f).subscribe(r => { this.d.set(r); this.loading.set(false); this.applyReg(); });
      this.api.inventory(f).subscribe(r => { this.items.set(r); this.applyReg(); });
    }, { allowSignalWrites: true });
  }

  t() { return this.d()?.thresholds ?? this.scope.thresholds(); }
  tot() { return this.d()?.totals ?? {}; }
  fefo(x: CalcItem): string { return this.d()?.fefoStatus?.[x.id] ?? 'NA'; }
  pctT(v: number) { const t = this.tot().v; return t ? (v / t * 100).toFixed(1) + '%' : '0%'; }
  w(v: number, base: number) { return base ? v / base * 100 : 0; }
  maxOf(list: any[], k = 'v') { return Math.max(1, ...list.map(r => (r[k] ?? (r.u + r.q + r.b)) || 0)); }

  // ---- drill-down
  kid(k: any) {
    if (k.kind === 'bu') this.scope.goScope(k.key);
    else if (k.kind === 'unit') this.scope.goScope(this.scope.filter().bu, k.key);
  }
  up(i: number) { if (i === 0) this.scope.goScope('All'); else this.scope.goScope(this.scope.filter().bu); }
  go(link: string, q: Record<string, string> = {}) { this.router.navigate([link], { queryParams: q }); }
  alert(a: any) {
    const map: Record<string, [string, any]> = {
      expiry: ['/inventory/expiry', {}], blocked: ['/inventory/status', { st: 'Blocked' }], hvaged: ['/inventory/aging', { lens: 'HV' }], braged: ['/inventory/aging', { lens: 'BR' }],
      aged: ['/inventory/aging', { bucket: '>180' }], idle: ['/inventory/cons', { cs: 'Idle' }]
    };
    if (a.key === 'fefo') { this.regTab.set('fefo'); this.applyReg(); document.getElementById('regPanel')?.scrollIntoView({ behavior: 'smooth' }); return; }
    const m = map[a.key]; if (m) this.go(m[0], m[1]);
  }
  open(x: CalcItem) { this.dlg.open(RecordDialog, { data: { id: x.id }, width: '900px', maxWidth: '96vw' }); }
  assign(x: CalcItem, ev: Event) { ev.stopPropagation(); openActionForm(this.dlg, { item: x }); }

  // ---- register
  applyReg() {
    const t = this.t(), q = this.regQ().trim().toLowerCase(), tab = this.regTab();
    const f: Record<string, (x: CalcItem) => boolean> = {
      all: () => true, aged: x => (x.age !== null && x.age > t.agingDays) || x.movement !== 'Normal', blocked: x => x.blockedQty > 0 || x.qualityQty > 0,
      expiry: x => x.rsl !== null && x.rsl <= t.expiryDays, hv: x => x.value >= t.highValue, fefo: x => this.fefo(x) === 'FAIL'
    };
    this.ds.data = this.items().filter(x => (f[tab] ?? f['all'])(x) && (!q || [x.plant, x.code, x.batch, x.name, x.storageLoc, x.matType].join(' ').toLowerCase().includes(q)))
      .sort((a, b) => b.value - a.value);
  }
  setTab(t: string) { this.regTab.set(t); this.applyReg(); }
  exportReg() { this.api.download('/inventory/export', this.scope.filter(), 'inventory_register.xlsx').subscribe(); }

  // ---- charts
  ageChart = computed<ChartConfiguration | null>(() => {
    const d = this.d(); if (!d) return null;
    const vals: number[] = d.aging.map((a: any) => a.v); const div = Math.max(...vals, 1) >= 1e7 ? 1e7 : 1e5;
    return { type: 'bar', data: { labels: d.aging.map((a: any) => [a.bucket, 'days']), datasets: [{ data: vals.map(v => +(v / div).toFixed(1)), backgroundColor: BUCKET_COLORS, borderRadius: 5, maxBarThickness: 54 }] },
      options: { maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { callbacks: { label: c => `â‚¹${c.raw} ${div === 1e7 ? 'Cr' : 'L'}` } } },
        scales: { y: { beginAtZero: true, title: { display: true, text: div === 1e7 ? 'â‚¹ Crore' : 'â‚¹ Lakh' } }, x: { grid: { display: false } } },
        onClick: (_e, els) => { if (els.length) this.go('/inventory/aging', { bucket: d.aging[els[0].index].bucket }); } } };
  });
  fefoChart = computed<ChartConfiguration | null>(() => {
    const f = this.d()?.fefo; if (!f) return null;
    return { type: 'doughnut', data: { labels: ['Compliant', 'Exceptions', 'Not applicable'], datasets: [{ data: [f.ok, f.fail, f.na], backgroundColor: ['#22a35a', '#f59e0b', '#d5dae2'], borderWidth: 0 }] },
      options: { cutout: '74%', maintainAspectRatio: false, plugins: { legend: { display: false } } } } as ChartConfiguration;
  });

  sevClass(s: string) { return ({ Critical: 'bad', High: 'warn', Medium: 'amber2', Monitor: 'info' } as Record<string, string>)[s] || 'info'; }
  alertIcon(k: string) { return ({ expiry: 'warning', blocked: 'block', hvaged: 'sell', braged: 'shield', aged: 'schedule', idle: 'hourglass_empty', fefo: 'swap_vert' } as Record<string, string>)[k] || 'info'; }
  deptColor(d: string) { return ({ Production: '#3b5bdb', Engineering: '#0ea5a4', QC: '#7c3aed', EHS: '#16a34a', Other: '#94a3b8' } as Record<string, string>)[d]; }
  bandColor(i: number) { return ['#7f1d1d', '#dc2626', '#f97316', '#f59e0b'][i]; }
}
