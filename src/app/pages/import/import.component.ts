import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { errMsg } from '../../core/auth.interceptor';
import { ScopeService } from '../../core/scope.service';
import { ToastService } from '../../core/toast.service';
import { SHORT } from '../../core/models';
import { fmtDT } from '../../core/format';
import { PasswordDialog } from '../../shared/dialogs';
import { UI } from '../../shared/ui';

/** Template download â†’ upload â†’ preview & validate â†’ confirm; plus Excel exports. */
@Component({ standalone: true, imports: [FormsModule, MatProgressBarModule, ...UI], templateUrl: './import.component.html' })
export class ImportComponent {
  api = inject(ApiService); auth = inject(AuthService); scope = inject(ScopeService); private toast = inject(ToastService); private dlg = inject(MatDialog);
  format = 'AUTO'; mode = 'upsert'; asOf = '';
  file = signal<File | null>(null);
  res = signal<any>(null);
  busy = signal(false); over = signal(false);
  rowFilter = signal<'all' | 'Warning' | 'Error'>('all');
  sync = signal<any[]>([]);
  short = SHORT; fmtDT = fmtDT;

  constructor() { this.api.get<any[]>('/masters/sync-log').subscribe(s => this.sync.set(s)); }

  pick(ev: Event) { const f = (ev.target as HTMLInputElement).files?.[0]; if (f) this.preview(f); }
  drop(ev: DragEvent) { ev.preventDefault(); this.over.set(false); const f = ev.dataTransfer?.files[0]; if (f) this.preview(f); }
  preview(f: File) {
    if (this.mode === 'history' && !this.asOf) { this.toast.show("Enter the 'As of' date for the historical snapshot"); return; }
    if (!/\.(xlsx|xls|xlsm|csv|txt)$/i.test(f.name)) { this.toast.show('Choose an Excel (.xlsx) or CSV file'); return; }
    this.file.set(f); this.busy.set(true); this.res.set(null);
    this.api.importFile(f, this.format, this.mode, this.asOf || null, true).subscribe({
      next: r => { this.res.set(r); this.busy.set(false); }, error: e => { this.busy.set(false); this.toast.show(errMsg(e)); }
    });
  }
  confirm() {
    const f = this.file(); if (!f) return;
    if (this.mode === 'replace' && !confirm('Replace all current inventory in your data scope with this file?')) return;
    this.busy.set(true);
    this.api.importFile(f, this.format, this.mode, this.asOf || null, false).subscribe({
      next: r => { this.busy.set(false); this.res.set(null); this.file.set(null); this.toast.show(`Import complete â€” ${r.added} added, ${r.updated} updated`); this.scope.load(); this.scope.refresh();
        this.api.get<any[]>('/masters/sync-log').subscribe(s => this.sync.set(s)); },
      error: e => { this.busy.set(false); this.toast.show(errMsg(e)); }
    });
  }
  rows() { const r = this.res()?.rows ?? []; return this.rowFilter() === 'all' ? r : r.filter((x: any) => this.rowFilter() === 'Error' ? x.status === 'Error' || x.status === 'Excluded' : x.status === 'Warning'); }
  dl(url: string, name: string) { this.api.download(url, this.scope.filter(), name).subscribe({ error: e => this.toast.show(errMsg(e)) }); }
  sample() {
    this.dlg.open(PasswordDialog, { data: { what: 'Load sample data â€” replaces all inventory, actions and history' }, width: '460px' }).afterClosed().subscribe(pw => {
      if (!pw) return;
      this.api.post<any>('/admin/sample-data', { password: pw }).subscribe({
        next: r => { this.toast.show(`Sample data loaded â€” ${r.records} records, ${r.actions} actions`); this.scope.load(); this.scope.refresh(); },
        error: e => this.toast.show(errMsg(e))
      });
    });
  }
}
