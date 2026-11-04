import { Component, ViewChild, computed, effect, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { errMsg } from '../../core/auth.interceptor';
import { ScopeService } from '../../core/scope.service';
import { ToastService } from '../../core/toast.service';
import { Action, CalcItem, SHORT, STAGES } from '../../core/models';
import { stageClass } from '../../core/format';
import { CloseDialog, RecordDialog, openActionForm } from '../../shared/dialogs';
import { UI } from '../../shared/ui';

/** Action Centre: exceptions awaiting ownership, open action register, closed actions. */
@Component({ standalone: true, imports: [FormsModule, RouterLink, MatTableModule, MatPaginatorModule, ...UI], templateUrl: './actions.component.html' })
export class ActionsComponent {
  api = inject(ApiService); auth = inject(AuthService); scope = inject(ScopeService); private dlg = inject(MatDialog);
  private toast = inject(ToastService); private router = inject(Router); private route = inject(ActivatedRoute);
  view = input<'queue' | 'open' | 'closed'>('queue');
  qp = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
  queue = signal<{ item: CalcItem; suggestedFunction: string; suggestedType: string; suggestedPlan: string }[]>([]);
  acts = signal<Action[]>([]);
  prio = signal('All');
  short = SHORT; stages = STAGES; stageClass = stageClass;
  stage = computed(() => this.qp().get('stage') || 'Open');
  fn = computed(() => this.qp().get('fn') || 'All');
  due = computed(() => this.qp().get('due') || 'All');
  qds = new MatTableDataSource<any>([]); rds = new MatTableDataSource<Action>([]);
  @ViewChild('qpg') set qpager(p: MatPaginator) { if (p) this.qds.paginator = p; }
  @ViewChild('rpg') set rpager(p: MatPaginator) { if (p) this.rds.paginator = p; }

  constructor() {
    effect(() => {
      this.scope.version(); this.view(); const f = this.scope.filter();
      this.api.actions().subscribe(a => this.acts.set(a.filter(x => (f.bu === 'All' || x.bu === f.bu) && (f.plant === 'All' || x.plant === f.plant))));
      if (this.view() === 'queue') this.api.queue(this.prio()).subscribe(q => this.queue.set(q.filter(z => (f.bu === 'All' || z.item.bu === f.bu) && (f.plant === 'All' || z.item.plant === f.plant))));
    }, { allowSignalWrites: true });
    effect(() => { this.qds.data = this.queue(); });
    effect(() => { this.rds.data = this.register(); });
  }

  register = computed(() => {
    const st = this.view() === 'closed' ? 'Closed' : this.stage(), fn = this.fn(), due = this.due(), month = new Date().toISOString().slice(0, 7);
    return this.acts().filter(a => (st === 'All' || (st === 'Open' ? a.stage !== 'Closed' : a.stage === st))
      && (fn === 'All' || a.functionName === fn)
      && (due === 'All' || (due === 'Overdue' ? a.overdue : due === 'Due7' ? (a.stage !== 'Closed' && a.daysLeft !== null && a.daysLeft >= 0 && a.daysLeft <= 7) : (a.stage === 'Closed' && (a.closedDate || '').startsWith(month)))))
      .sort((a, b) => st === 'Closed' ? (b.closedDate || '').localeCompare(a.closedDate || '') : (a.targetDate || '9999').localeCompare(b.targetDate || '9999'));
  });
  count = (s: string) => this.acts().filter(a => a.stage === s).length;
  due7 = computed(() => this.acts().filter(a => a.stage !== 'Closed' && a.daysLeft !== null && a.daysLeft >= 0 && a.daysLeft <= 7).length);
  overdue = computed(() => this.acts().filter(a => a.overdue).length);
  byFn = computed(() => {
    const m = new Map<string, number[]>();
    this.acts().forEach(a => { const c = m.get(a.functionName) || [0, 0, 0]; if (a.stage === 'Closed') c[2]++; else { c[0]++; if (a.overdue) c[1]++; } m.set(a.functionName, c); });
    return [...m.entries()].map(([f, c]) => ({ f, open: c[0], od: c[1], cl: c[2] }));
  });

  setPrio(p: string) { this.prio.set(p); this.scope.refresh(); }
  filter(q: Record<string, string | null>) { this.router.navigate([], { queryParams: q, queryParamsHandling: 'merge' }); }
  assign(q: any) { openActionForm(this.dlg, { item: q.item, suggestedType: q.suggestedType, suggestedPlan: q.suggestedPlan, suggestedFunction: q.suggestedFunction }); }
  newFree() { openActionForm(this.dlg, {}); }
  edit(a: Action) { openActionForm(this.dlg, { action: a }); }
  close(a: Action) { this.dlg.open(CloseDialog, { data: a, width: '760px', maxWidth: '96vw' }); }
  record(id: number) { this.dlg.open(RecordDialog, { data: { id }, width: '900px', maxWidth: '96vw' }); }
  step(a: Action, s: 'start' | 'reopen') {
    this.api.actionStep(a.id, s).subscribe({ next: () => { this.toast.show(s === 'start' ? 'Action started' : 'Action reopened'); this.scope.refresh(); }, error: e => this.toast.show(errMsg(e)) });
  }
  remove(a: Action) {
    if (!confirm(`Delete action ${a.id}?`)) return;
    this.api.delete(`/actions/${a.id}`).subscribe({ next: () => { this.toast.show('Action deleted'); this.scope.refresh(); }, error: e => this.toast.show(errMsg(e)) });
  }
  export() { this.api.download('/actions/export', {}, 'actions.xlsx').subscribe(); }
}
