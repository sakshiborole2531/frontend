import { Component, ViewChild, effect, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { errMsg } from '../../core/auth.interceptor';
import { ScopeService } from '../../core/scope.service';
import { ToastService } from '../../core/toast.service';
import { CalcItem, DEPTS, MAT_TYPES } from '../../core/models';
import { UI } from '../../shared/ui';

const datesOk = (g: AbstractControl): ValidationErrors | null => {
  const m = g.get('mfgDate')?.value, e = g.get('expiryDate')?.value;
  return m && e && e < m ? { expiryBeforeMfg: true } : null;
};
const someQty = (g: AbstractControl): ValidationErrors | null =>
  (+g.get('unrestrictedQty')?.value || 0) + (+g.get('qualityQty')?.value || 0) + (+g.get('blockedQty')?.value || 0) > 0 ? null : { noQty: true };

/** Data quality exceptions and manual add / edit of inventory records (reactive form with validation). */
@Component({ standalone: true, imports: [ReactiveFormsModule, MatTableModule, MatPaginatorModule, ...UI], templateUrl: './data.component.html' })
export class DataComponent {
  api = inject(ApiService); auth = inject(AuthService); scope = inject(ScopeService); private toast = inject(ToastService); private fb = inject(FormBuilder);
  cats = MAT_TYPES; depts = DEPTS;
  issues = signal<any[]>([]);
  editing = signal<number | null>(null);
  error = signal('');
  ds = new MatTableDataSource<CalcItem>([]);
  @ViewChild(MatPaginator) set pager(p: MatPaginator) { if (p) this.ds.paginator = p; }

  form = this.fb.group({
    plant: ['', Validators.required], matType: ['Raw Material', Validators.required], storageLoc: [''], dept: ['Other'],
    code: ['', [Validators.required, Validators.maxLength(40)]], name: ['', [Validators.required, Validators.maxLength(200)]], batch: ['', Validators.maxLength(40)],
    uom: [''], subCat: [''], unitCost: [null as number | null, [Validators.required, Validators.min(0)]],
    unrestrictedQty: [0, Validators.min(0)], qualityQty: [0, Validators.min(0)], blockedQty: [0, Validators.min(0)], blockReason: [''],
    receiptDate: [''], lyingSince: [''], lastIssueDate: [''], mfgDate: [''], expiryDate: [''], dateType: ['Expiry'], remarks: ['']
  }, { validators: [datesOk, someQty] });

  constructor() {
    effect(() => {
      this.scope.version(); const f = this.scope.filter();
      this.api.dataIssues().subscribe(i => this.issues.set(i));
      this.api.inventory(f).subscribe(r => this.ds.data = r);
    });
  }
  plants() { return this.scope.activePlants().map(p => p.name); }
  slocs() { return [...new Set((this.scope.masters()?.storageLocations ?? []).map(s => s.name))]; }
  isCons() { return this.form.value.matType === 'Consumable'; }
  bad(k: string) { const c = this.form.get(k); return !!c && c.invalid && c.touched; }
  groups() { const g: Record<string, number> = {}; this.issues().forEach(i => g[i.issue] = (g[i.issue] || 0) + 1); return Object.entries(g); }

  edit(id: number) {
    this.api.item(id).subscribe(x => {
      this.editing.set(id);
      this.form.reset({ ...x, dept: x.dept || 'Other', receiptDate: x.receiptDate || '', lyingSince: x.lyingSince || '', lastIssueDate: x.lastIssueDate || '',
        mfgDate: x.mfgDate || '', expiryDate: x.expiryDate || '', storageLoc: x.storageLoc || '', uom: x.uom || '', subCat: x.subCat || '', blockReason: x.blockReason || '', remarks: x.remarks || '' } as any);
      document.getElementById('entryPanel')?.scrollIntoView({ behavior: 'smooth' });
    });
  }
  cancel() { this.editing.set(null); this.form.reset({ matType: 'Raw Material', dept: 'Other', dateType: 'Expiry', unrestrictedQty: 0, qualityQty: 0, blockedQty: 0 }); }
  save() {
    this.form.markAllAsTouched(); this.error.set('');
    if (this.form.invalid) return;
    const v: any = { ...this.form.getRawValue() };
    ['receiptDate', 'lyingSince', 'lastIssueDate', 'mfgDate', 'expiryDate'].forEach(k => { if (!v[k]) v[k] = null; });
    this.api.saveItem(this.editing(), v).subscribe({
      next: () => { this.toast.show(this.editing() ? 'Record updated' : 'Record added'); this.cancel(); this.scope.refresh(); },
      error: e => this.error.set(errMsg(e))
    });
  }
  remove(x: CalcItem) {
    if (!confirm(`Delete ${x.code} / ${x.batch || 'â€“'} at ${x.plant}?`)) return;
    this.api.deleteItem(x.id).subscribe({ next: () => { this.toast.show('Record deleted'); this.scope.refresh(); }, error: e => this.toast.show(errMsg(e)) });
  }
}
