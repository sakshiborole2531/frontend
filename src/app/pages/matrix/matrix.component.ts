import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { ScopeService } from '../../core/scope.service';
import { fmtV } from '../../core/format';
import { FilterBarComponent } from '../../shared/filter-bar.component';

/** Plants (rows) × categories (columns) with totals and Green / Yellow / Red / Dark-red health colouring. */
@Component({ standalone: true, imports: [FormsModule, FilterBarComponent], templateUrl: './matrix.component.html' })
export class MatrixComponent {
  api = inject(ApiService); scope = inject(ScopeService); private router = inject(Router);
  measure = signal('value'); pctMode = signal('none'); colorBy = signal('rag'); subtotals = signal(true); hideEmpty = signal(false);
  rag = { g: 15, y: 30, r: 50 };
  m = signal<any>(null);

  constructor() {
    effect(() => { const f = this.scope.filter(); this.scope.version(); this.api.matrix(this.measure(), f).subscribe(r => this.m.set(r)); });
  }
  isVal() { return !['batches', 'exc'].includes(this.measure()); }
  fmt(v: number) { return !v ? '—' : this.isVal() ? fmtV(v) : Number(v).toLocaleString('en-IN'); }
  ragOf(share: number | null) { if (share === null || share === undefined) return ''; const p = share * 100; return p < this.rag.g ? 'g' : p < this.rag.y ? 'y' : p < this.rag.r ? 'r' : 'dr'; }
  cls(c: any) { return !c?.v || this.colorBy() !== 'rag' ? '' : 'rag-' + this.ragOf(c.share); }
  heat(c: any) { const max = this.max(); return this.colorBy() === 'heat' && c?.v ? (0.08 + 0.55 * Math.sqrt(c.v / max)).toFixed(2) : null; }
  max = computed(() => Math.max(1, ...(this.m()?.rows ?? []).flatMap((r: any) => Object.values(r.cells).map((c: any) => c.v))));
  pct(v: number, base: number) { return base ? (Math.round(v / base * 1000) / 10).toFixed(1) + '%' : '–'; }
  base(r: any, col: string) { const m = this.m(); return this.pctMode() === 'row' ? r.total.v : this.pctMode() === 'col' ? m.columnTotals[col].v : m.grand.v; }
  rows = computed(() => (this.m()?.rows ?? []).filter((r: any) => !this.hideEmpty() || r.total.v));
  groups = computed(() => {
    const g: { bu: string; rows: any[] }[] = [];
    this.rows().forEach((r: any) => { let x = g.find(z => z.bu === r.bu); if (!x) g.push(x = { bu: r.bu, rows: [] }); x.rows.push(r); });
    return g;
  });
  subSum(g: any, col: string) { return g.rows.reduce((t: number, r: any) => t + (col === '__total' ? r.total.v : r.cells[col].v), 0); }
  drill(plant: string, bu: string, cat: string) { this.scope.goScope(bu, plant); this.router.navigate([cat === 'Consumable' ? '/inventory/cons' : '/inventory/goods'], { queryParams: cat === 'Consumable' ? {} : { cat } }); }
  measures() { return Object.entries(this.m()?.measures ?? {}); }
}
