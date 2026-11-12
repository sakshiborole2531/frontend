import { Component, ViewChild, computed, effect, inject, input, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { ScopeService } from '../../core/scope.service';
import { Action, BUCKETS, CalcItem, DEPTS, MAT_TYPES, SHORT } from '../../core/models';
import { consClass, pct, realFlags, sum } from '../../core/format';
import { FilterBarComponent } from '../../shared/filter-bar.component';
import { RecordDialog, openActionForm } from '../../shared/dialogs';
import { UI } from '../../shared/ui';

type View = 'goods' | 'status' | 'aging' | 'expiry' | 'cons';
const PAGES: Record<View, [string, string]> = {
  goods: ['Inventory by Category', 'What inventory do we have, how much, and where is it lying?'],
  status: ['Stock Status', 'What is available for use, and how much is under Quality or Blocked status?'],
  aging: ['Inventory Aging', 'How long has the inventory been lying?'],
  expiry: ['Expiry Monitoring', 'Which inventory is approaching expiry within the monitoring window?'],
  cons: ['Consumables', 'Which consumables are lying for a long period, and which department owns them?']
};

/** Inventory analysis pages (category drill-down, stock status, aging, expiry, consumables). */
@Component({ standalone: true, imports: [MatTableModule, MatSortModule, MatPaginatorModule, FilterBarComponent, ...UI], templateUrl: './inventory.component.html' })
export class InventoryComponent {
  api = inject(ApiService); scope = inject(ScopeService); auth = inject(AuthService); private dlg = inject(MatDialog);
  private route = inject(ActivatedRoute); private router = inject(Router);
  view = input<View>('goods');
  qp = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
  all = signal<CalcItem[]>([]);
  openKeys = signal<Map<string, Action>>(new Map());
  loading = signal(true);
  short = SHORT; cats = MAT_TYPES; depts = DEPTS; buckets = BUCKETS; consClass = consClass; realFlags = realFlags; pct = pct;

  ds = new MatTableDataSource<CalcItem>([]);
  @ViewChild(MatSort) set sort(s: MatSort) { if (s) this.ds.sort = s; }
  @ViewChild(MatPaginator) set pager(p: MatPaginator) { if (p) this.ds.paginator = p; }

  page = computed(() => PAGES[this.view()] ?? PAGES.goods);
  p = (k: string, d = 'All') => this.qp().get(k) || d;
  t = this.scope.thresholds;

  constructor() {
    this.ds.sortingDataAccessor = (x: any, k) => x[k] ?? -1;
    effect(() => {
      const f = this.scope.filter(); this.scope.version(); this.view();
      this.loading.set(true);
      this.api.inventory(f).subscribe(r => { this.all.set(r); this.loading.set(false); });
      if (this.auth.can('view.actions')) this.api.actions().subscribe(a => this.openKeys.set(new Map(a.filter(x => x.stage !== 'Closed' && x.itemKey).map(x => [x.itemKey!, x]))));
    }, { allowSignalWrites: true });
    effect(() => { this.ds.data = this.rows(); });
  }

  /** Rows for the current view and its card / dropdown selection. */
  rows = computed<CalcItem[]>(() => {
    const v = this.view(), a = this.all(), t = this.t();
    switch (v) {
      case 'goods': {
        const cat = this.p('cat'), code = this.p('code', '');
        return a.filter(x => x.matType !== 'Consumable' && (cat === 'All' || x.matType === cat) && (!code || x.code === code)).sort((x, y) => (x.rsl ?? 99999) - (y.rsl ?? 99999));
      }
      case 'status': {
        const st = this.p('st'), cat = this.p('cat');
        return a.filter(x => (cat === 'All' || x.matType === cat) && (st === 'All' || (st === 'Unrestricted' ? x.unrestrictedQty > 0 : st === 'Quality' ? x.qualityQty > 0 : x.blockedQty > 0)))
          .sort((x, y) => st === 'Blocked' ? y.bVal - x.bVal : st === 'Quality' ? y.qVal - x.qVal : y.value - x.value);
      }
      case 'aging': {
        const b = this.p('bucket'), lens = this.p('lens');
        return a.filter(x => x.age !== null && (b === 'All' || x.bucket === b || (b === '>180' && x.age > 180))
          && (lens === 'All' || (lens === 'HV' ? x.age > t.agingDays && x.value >= t.highValue : x.age > t.agingDays && x.restricted))).sort((x, y) => (y.age ?? 0) - (x.age ?? 0));
      }
      case 'expiry': {
        const band = this.p('band');
        return a.filter(x => x.rsl !== null && x.rsl <= t.expiryDays && (band === 'All' || x.band === band)).sort((x, y) => (x.rsl ?? 0) - (y.rsl ?? 0));
      }
      case 'cons': {
        const dept = this.p('dept'), cs = this.p('cs');
        const fn: Record<string, (x: CalcItem) => boolean> = { All: () => true, Idle: x => x.consStatus === 'Long Lying' || x.consStatus === 'Non-Moving',
          LL365: x => x.age !== null && x.age > t.longLyingDays, A90: x => (x.age ?? 0) > 90, A180: x => (x.age ?? 0) > 180 };
        return a.filter(x => x.matType === 'Consumable' && (dept === 'All' || x.dept === dept) && (fn[cs] ? fn[cs](x) : x.consStatus === cs)).sort((x, y) => (y.age ?? -1) - (x.age ?? -1));
      }
    }
  });

  cols = computed(() => ({
    goods: ['plant', 'name', 'code', 'batch', 'matType', 'qty', 'value', 'statusTags', 'expiryDate', 'rsl', 'age', 'prio', 'action'],
    status: ['plant', 'matType', 'code', 'name', 'batch', 'unrestrictedQty', 'qualityQty', 'blockedQty', 'uVal', 'qVal', 'bVal', 'value', 'age', 'blockReason'],
    aging: ['name', 'code', 'matType', 'plant', 'batch', 'qty', 'value', 'statusTags', 'lying', 'age', 'bucket', 'prio', 'action'],
    expiry: ['name', 'code', 'matType', 'plant', 'batch', 'qty', 'value', 'mfgDate', 'expiryDate', 'rsl', 'statusTags', 'action'],
    cons: ['name', 'code', 'dept', 'subCat', 'plant', 'qty', 'unitCost', 'value', 'lying', 'age', 'lastIssueDate', 'dsi', 'consStatus', 'action']
  } as Record<View, string[]>)[this.view()]);

  // ---------- cards
  scopeRows = computed(() => this.view() === 'cons' ? this.all().filter(x => x.matType === 'Consumable') : this.view() === 'goods' ? this.all().filter(x => x.matType !== 'Consumable') : this.all());
  catRows = computed(() => MAT_TYPES.filter(c => c !== 'Consumable').map(c => {
    const r = this.all().filter(x => x.matType === c); const t = this.t();
    return { c, mats: new Set(r.map(x => x.code)).size, n: r.length, u: sum(r, x => x.uVal), q: sum(r, x => x.qVal), b: sum(r, x => x.bVal), v: sum(r, x => x.value),
      aged: sum(r.filter(x => (x.age ?? 0) > t.agingDays), x => x.value), exp: sum(r.filter(x => x.rsl !== null && x.rsl <= t.expiryDays), x => x.value) };
  }));
  statusCards = computed(() => {
    const r = this.all(), tot = sum(r, x => x.value);
    return [['All', tot, r.length, 't-navy', ''], ['Unrestricted', sum(r, x => x.uVal), r.filter(x => x.unrestrictedQty > 0).length, 't-green', 'green'],
      ['Quality', sum(r, x => x.qVal), r.filter(x => x.qualityQty > 0).length, 't-amber', 'amber'], ['Blocked', sum(r, x => x.bVal), r.filter(x => x.blockedQty > 0).length, 't-red', 'red']] as [string, number, number, string, string][];
  });
  bucketCards = computed(() => BUCKETS.map((b, i) => { const r = this.all().filter(x => x.bucket === b); return { b, i, v: sum(r, x => x.value), n: r.length }; }));
  bandCards = computed(() => { const t = this.t(); return ['Expired', '≤30', '31–90', '91–' + t.expiryDays].map((b, i) => { const r = this.all().filter(x => x.band === b); return { b, i, v: sum(r, x => x.value), n: r.length }; }); });
  deptCards = computed(() => DEPTS.map(dp => { const r = this.all().filter(x => x.dept === dp); return { dp, v: sum(r, x => x.value), n: r.length, idle: r.filter(x => x.consStatus === 'Long Lying' || x.consStatus === 'Non-Moving').length }; }));
  totals = computed(() => ({ v: sum(this.rows(), x => x.value), n: this.rows().length }));
  noAction = computed(() => this.rows().filter(x => !this.openKeys().has(x.itemKey)).length);

  set(q: Record<string, string | null>) { this.router.navigate([], { queryParams: q, queryParamsHandling: 'merge' }); }
  open(x: CalcItem) { this.dlg.open(RecordDialog, { data: { id: x.id }, width: '900px', maxWidth: '96vw' }); }
  assign(x: CalcItem, ev: Event) { ev.stopPropagation(); openActionForm(this.dlg, { item: x }); }
  actionOf(x: CalcItem) { return this.openKeys().get(x.itemKey); }
  export() { this.api.download('/inventory/export', this.scope.filter(), 'inventory.xlsx').subscribe(); }
}
