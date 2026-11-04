import { Component, computed, effect, inject, signal } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { ScopeService } from '../../core/scope.service';
import { ToastService } from '../../core/toast.service';
import { errMsg } from '../../core/auth.interceptor';
import { CAT_COLORS, DEPTS, MAT_TYPES } from '../../core/models';
import { fmtD, fmtV } from '../../core/format';
import { ChartDirective } from '../../shared/chart';
import { UI } from '../../shared/ui';

/** Year-wise comparison across financial years from monthly snapshots. */
@Component({ standalone: true, imports: [ChartDirective, ...UI], templateUrl: './years.component.html' })
export class YearsComponent {
  api = inject(ApiService); scope = inject(ScopeService); auth = inject(AuthService); private toast = inject(ToastService);
  basis = signal<'close' | 'avg'>('close');
  data = signal<any>(null);
  cats = MAT_TYPES; depts = DEPTS; fmtD = fmtD;

  constructor() {
    effect(() => { const f = this.scope.filter(); this.scope.version(); this.api.yearwise(this.basis(), f.bu, f.plant).subscribe(r => this.data.set(r)); });
  }
  years = computed<any[]>(() => this.data()?.years ?? []);
  months = computed<any[]>(() => this.data()?.months ?? []);
  row(get: (m: any) => number) { return this.years().map(y => get(y)); }
  delta(vals: number[]) { if (vals.length < 2) return null; const a = vals[vals.length - 1], b = vals[vals.length - 2]; return { d: a - b, p: b ? (a - b) / b * 100 : null }; }
  dcls(d: number, bad: boolean | null) { return Math.abs(d) < 1 ? 'mute' : bad === null ? 'neu' : (d > 0) === bad ? 'bad' : 'good'; }
  abs(n: number) { return fmtV(Math.abs(n)); }

  lines: { l: string; get: (m: any) => number; bad: boolean | null; grp?: string; total?: boolean }[] = [
    { l: 'Total inventory value', get: m => m.v, bad: null, grp: 'Total', total: true },
    ...MAT_TYPES.map((t, i) => ({ l: t, get: (m: any) => m.cat?.[t] || 0, bad: null, grp: i === 0 ? 'By category' : undefined })),
    { l: 'Unrestricted', get: m => m.u, bad: null, grp: 'By stock status' }, { l: 'Quality inspection', get: m => m.q, bad: true }, { l: 'Blocked', get: m => m.b, bad: true },
    { l: 'Aged', get: m => m.aged, bad: true, grp: 'Risk inventory' }, { l: 'Expiring within window', get: m => m.exp, bad: true }, { l: 'Expired', get: m => m.expd, bad: true },
    { l: 'Long-lying / non-moving consumables', get: m => m.idle, bad: true },
    ...DEPTS.map((d, i) => ({ l: d === 'QC' ? 'Quality Control' : d, get: (m: any) => m.dept?.[d] || 0, bad: null, grp: i === 0 ? 'Consumables by department' : undefined }))
  ];

  fyChart = computed<ChartConfiguration | null>(() => {
    const ys = this.years(); if (!ys.length) return null;
    const div = Math.max(...ys.map(y => y.v)) >= 1e7 ? 1e7 : 1e5;
    return { type: 'bar', data: { labels: ys.map(y => 'FY ' + y.fy + (y.partial ? ' (YTD)' : '')), datasets: MAT_TYPES.map(t => ({ label: t, data: ys.map(y => +((y.cat?.[t] || 0) / div).toFixed(2)), backgroundColor: CAT_COLORS[t], maxBarThickness: 70 })) },
      options: { maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { boxWidth: 10 } } }, scales: { x: { stacked: true, grid: { display: false } }, y: { stacked: true, title: { display: true, text: div === 1e7 ? 'â‚¹ Crore' : 'â‚¹ Lakh' } } } } };
  });
  trendChart = computed<ChartConfiguration | null>(() => {
    const ms = this.months(); if (!ms.length) return null;
    const div = Math.max(...ms.map(m => m.v), 1) >= 1e7 ? 1e7 : 1e5;
    const ds = (l: string, k: string, c: string, fill = false) => ({ label: l, data: ms.map(m => +(m[k] / div).toFixed(2)), borderColor: c, backgroundColor: fill ? c + '22' : c, fill, tension: .3, pointRadius: 2, borderWidth: 2 });
    return { type: 'line', data: { labels: ms.map(m => m.period), datasets: [ds('Total value', 'v', '#14213d', true), ds('Aged', 'aged', '#d97706'), ds('Blocked', 'b', '#dc2626'), ds('Expiring', 'exp', '#7c3aed')] },
      options: { maintainAspectRatio: false, interaction: { mode: 'index', intersect: false }, plugins: { legend: { position: 'bottom', labels: { boxWidth: 10 } } }, scales: { x: { grid: { display: false } }, y: { beginAtZero: true } } } } as ChartConfiguration;
  });

  capture() { this.api.post<any>('/reports/snapshots').subscribe({ next: r => { this.toast.show(r.captured ? 'Snapshot captured' : 'An imported snapshot already exists for this month'); this.scope.refresh(); }, error: e => this.toast.show(errMsg(e)) }); }
  remove(p: string) { if (confirm('Delete this monthly snapshot?')) this.api.delete('/reports/snapshots/' + p).subscribe(() => this.scope.refresh()); }
}
