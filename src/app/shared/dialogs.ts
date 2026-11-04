import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../core/api.service';
import { AuthService } from '../core/auth.service';
import { errMsg } from '../core/auth.interceptor';
import { Action, CalcItem } from '../core/models';
import { ScopeService } from '../core/scope.service';
import { ToastService } from '../core/toast.service';
import { addDays, consClass, flagLabel, fmtV, realFlags, stageClass, todayISO } from '../core/format';
import { UI } from './ui';

/** Detailed batch record with identification / prioritization and its actions. */
@Component({
  standalone: true, imports: [MatDialogModule, ...UI],
  template: `
  @if (x(); as x) {
  <div mat-dialog-content>
    <div class="mhead"><div><div class="eyebrow">{{ x.matType }}{{ x.dept ? ' Â· ' + x.dept : '' }} Â· {{ x.bu }}</div><h3>{{ x.name }}</h3>
      <div class="hint">{{ x.code }} Â· Batch {{ x.batch || 'â€“' }} Â· {{ x.plant }} Â· {{ x.storageLoc || 'no storage location' }}</div></div>
      <button class="x" mat-dialog-close>Ã—</button></div>
    <div class="kv">
      <div><span>Unrestricted qty</span><b>{{ x.unrestrictedQty | qty }} {{ x.uom }}</b></div><div><span>Quality qty</span><b>{{ x.qualityQty | qty }} {{ x.uom }}</b></div>
      <div><span>Blocked qty</span><b>{{ x.blockedQty | qty }} {{ x.uom }}</b></div><div><span>Total qty</span><b>{{ x.qty | qty }} {{ x.uom }}</b></div>
      <div><span>Unit cost</span><b>{{ x.unitCost | inr }}</b></div><div><span>Total value</span><b>{{ x.value | inr }}</b></div>
      <div><span>Blocked value</span><b>{{ x.bVal | inr }}</b></div><div><span>Stock status</span><b><status-tags [x]="x"/></b></div>
      <div><span>GR posting date</span><b>{{ x.receiptDate | dt }}</b></div><div><span>Inventory age</span><b>{{ x.age === null ? 'â€“' : x.age + ' days (' + x.bucket + ')' }}</b></div>
      <div><span>Date of manufacture</span><b>{{ x.mfgDate | dt }}</b></div><div><span>SLED/BBD ({{ x.dateType }})</span><b>{{ x.expiryDate | dt }}</b></div>
      <div><span>Remaining shelf life</span><b [style.color]="x.rsl !== null && x.rsl < 0 ? 'var(--red)' : ''">{{ x.rsl === null ? 'â€“' : x.rsl < 0 ? 'Expired ' + (-x.rsl) + ' days ago' : x.rsl + ' days' }}</b></div>
      <div><span>Shelf life used</span><b>{{ x.slUsed === null ? 'â€“' : x.slUsed + '% of ' + x.slTotal + ' days' }}</b></div>
      <div><span>Last posting (consumption)</span><b>{{ x.lastIssueDate | dt }}</b></div><div><span>Movement</span><b>{{ x.movement }}{{ x.idle !== null ? ' Â· ' + x.idle + ' days' : '' }}</b></div>
      @if (x.consStatus) {<div><span>Consumable status</span><b><span class="tag {{ cc(x.consStatus) }}">{{ x.consStatus }}</span></b></div>}
      @if (x.blockReason) {<div><span>Block reason</span><b>{{ x.blockReason }}</b></div>}
      @if (x.remarks) {<div><span>Remarks</span><b>{{ x.remarks }}</b></div>}
    </div>
    <h4>Identification &amp; prioritization</h4>
    <div>@if (x.flags.length) { <flag-tags [flags]="x.flags"/> &nbsp; Priority <prio-tag [p]="x.prio"/> <span class="hint">score {{ x.score }}</span> } @else { <span class="tag ok">No exception</span> }</div>
    <h4>Actions ({{ acts().length }})</h4>
    @if (acts().length) {
      <table class="plain"><thead><tr><th>ID</th><th>Plan</th><th>Owner</th><th>Target</th><th>Stage</th></tr></thead><tbody>
      @for (a of acts(); track a.id) { <tr><td>{{ a.id }}</td><td class="wrap">{{ a.plan }}</td><td>{{ a.functionName }}{{ a.person ? ' â€“ ' + a.person : '' }}</td><td>{{ a.targetDate | dt }}</td><td><span class="tag {{ sc(a.stage) }}">{{ a.stage }}</span></td></tr> }
      </tbody></table> } @else { <div class="hint">No actions raised for this batch yet.</div> }
    <div class="mfoot">
      @if (canRaise()) { <button class="btn" (click)="raise()">Raise action</button> }
      <button class="btn secondary" mat-dialog-close>Close</button></div>
  </div> } @else { <div class="loading">Loadingâ€¦</div> }`
})
export class RecordDialog {
  private api = inject(ApiService); private dlg = inject(MatDialog); private ref = inject(MatDialogRef<RecordDialog>);
  auth = inject(AuthService);
  data = inject<{ id: number }>(MAT_DIALOG_DATA);
  x = signal<CalcItem | null>(null); acts = signal<Action[]>([]);
  cc = consClass; sc = stageClass;
  constructor() {
    this.api.item(this.data.id).subscribe(x => {
      this.x.set(x);
      this.api.actions().subscribe(a => this.acts.set(a.filter(z => z.itemKey === x.itemKey)));
    });
  }
  canRaise() { return this.auth.can('action.create') && !!this.x()?.prio && !this.acts().some(a => a.stage !== 'Closed'); }
  raise() { const x = this.x()!; this.ref.close(); openActionForm(this.dlg, { item: x }); }
}

/** Assign ownership & action â€” reactive form with validation. */
@Component({
  standalone: true, imports: [MatDialogModule, ReactiveFormsModule, ...UI],
  template: `
  <div mat-dialog-content>
    <div class="mhead"><div><div class="eyebrow">{{ data.action ? 'Update action ' + data.action.id : 'Assign ownership & action' }}</div>
      <h3>{{ data.item?.name || data.action?.name || 'General action' }}</h3>
      @if (data.item) {<div class="hint">{{ data.item.code }} Â· Batch {{ data.item.batch || 'â€“' }} Â· {{ data.item.plant }} Â· {{ data.item.value | inr }}</div>}</div>
      <button class="x" mat-dialog-close>Ã—</button></div>
    <form class="entry" [formGroup]="form" (ngSubmit)="save()">
      @if (!data.item && (!data.action || !data.action.itemKey)) {
        <div class="fgroup full"><label>Subject (material / area) *</label><input type="text" formControlName="name" placeholder="e.g. Close 5S observations â€“ Bay 3">
          @if (bad('name')) {<div class="err">Subject is required</div>}</div> }
      <div class="fgroup full"><label>Exception</label><input type="text" formControlName="exception"></div>
      <div class="fgroup"><label>Action type *</label><select formControlName="actionType">@for (t of types(); track t) {<option [value]="t">{{ t }}</option>}</select></div>
      <div class="fgroup"><label>Priority</label><select formControlName="priority"><option>P1</option><option>P2</option><option>P3</option></select></div>
      <div class="fgroup"><label>Responsible function *</label><select formControlName="functionName">@for (f of fns(); track f) {<option [value]="f">{{ f }}</option>}</select>
        @if (bad('functionName')) {<div class="err">Function is required</div>}</div>
      <div class="fgroup"><label>Responsible person</label><input type="text" formControlName="person" list="personDL" placeholder="Name">
        <datalist id="personDL">@for (p of persons(); track p.name) {<option [value]="p.name">{{ p.functionName }}</option>}</datalist></div>
      <div class="fgroup full"><label>Action plan *</label><textarea formControlName="plan"></textarea>
        @if (bad('plan')) {<div class="err">Action plan is required (max 1000 characters)</div>}</div>
      <div class="fgroup"><label>Target completion date</label><input type="date" formControlName="targetDate" [min]="today">
        @if (form.controls.targetDate.errors?.['past']) {<div class="err">Target date cannot be in the past</div>}</div>
      <div class="fgroup"><label>Stage</label><select formControlName="stage"><option>Prioritized</option><option>Owned</option><option>In Action</option></select></div>
      <div class="fgroup" style="grid-column:span 2"><label>Remarks / progress</label><input type="text" formControlName="remarks"></div>
      <div class="full note">Stage moves automatically to <b>Owned</b> once a function, person and target date are set. Overdue actions escalate to the Function Head (L1) and, after 14 days, to the Plant Head (L2).</div>
      @if (error()) {<div class="full autherr">{{ error() }}</div>}
      <div class="actions"><button type="submit" class="btn" [disabled]="busy()">{{ data.action ? 'Save changes' : 'Create action' }}</button>
        <button type="button" class="btn secondary" mat-dialog-close>Cancel</button></div>
    </form>
  </div>`
})
export class ActionFormDialog {
  private api = inject(ApiService); private fb = inject(FormBuilder); private toast = inject(ToastService);
  private ref = inject(MatDialogRef<ActionFormDialog>); private scope = inject(ScopeService);
  data = inject<{ item?: CalcItem; action?: Action; suggestedType?: string; suggestedPlan?: string; suggestedFunction?: string }>(MAT_DIALOG_DATA);
  today = todayISO();
  busy = signal(false); error = signal('');
  fns = () => this.scope.masters()?.functions ?? [];
  types = () => this.scope.masters()?.actionTypes ?? [];
  persons = () => this.scope.masters()?.persons ?? [];
  form = this.fb.nonNullable.group({
    name: [''], exception: [''], actionType: ['', Validators.required], priority: ['P3'],
    functionName: ['', Validators.required], person: [''], plan: ['', [Validators.required, Validators.maxLength(1000)]],
    targetDate: ['', (c: any) => c.value && c.value < todayISO() && !this.data.action ? { past: true } : null], stage: ['Prioritized'], remarks: ['']
  });
  constructor() {
    const a = this.data.action, x = this.data.item, t = this.scope.thresholds();
    if (a) this.form.patchValue({ name: a.name || '', exception: a.exception || '', actionType: a.actionType, priority: a.priority, functionName: a.functionName,
      person: a.person || '', plan: a.plan, targetDate: a.targetDate || '', stage: a.stage === 'Closed' ? 'Owned' : a.stage, remarks: a.remarks || '' });
    else this.form.patchValue({ exception: x ? realFlags(x.flags).map(f => flagLabel(f, t)).join(', ') : '', actionType: this.data.suggestedType || 'Other approved corrective action',
      priority: x?.prio || 'P3', functionName: this.data.suggestedFunction || 'Stores', plan: this.data.suggestedPlan || '',
      targetDate: addDays(x?.prio === 'P1' ? 7 : x?.prio === 'P2' ? 15 : 30) });
    if (!x && (!a || !a.itemKey)) this.form.controls.name.addValidators(Validators.required);
  }
  bad(k: keyof typeof this.form.controls) { const c = this.form.controls[k]; return c.invalid && (c.touched || c.dirty); }
  save() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    const v = this.form.getRawValue();
    const body = { ...v, inventoryId: this.data.action ? null : this.data.item?.id ?? null, targetDate: v.targetDate || null };
    this.busy.set(true); this.error.set('');
    this.api.saveAction(this.data.action?.id ?? null, body).subscribe({
      next: a => { this.toast.show(this.data.action ? `Action ${a.id} updated` : `Action ${a.id} created`); this.scope.refresh(); this.ref.close(a); },
      error: e => { this.busy.set(false); this.error.set(errMsg(e)); }
    });
  }
}

export interface ActionFormData { item?: CalcItem; action?: Action; suggestedType?: string; suggestedPlan?: string; suggestedFunction?: string; }
export function openActionForm(dlg: MatDialog, data: ActionFormData) {
  return dlg.open(ActionFormDialog, { data, width: '900px', maxWidth: '96vw' });
}

/** Closure with outcome and evidence. */
@Component({
  standalone: true, imports: [MatDialogModule, ReactiveFormsModule],
  template: `
  <div mat-dialog-content>
    <div class="mhead"><div><div class="eyebrow">Closure Â· {{ data.id }}</div><h3>{{ data.plan || data.actionType }}</h3>
      <div class="hint">{{ data.name }} {{ data.batch ? 'Â· ' + data.batch : '' }} Â· Owner {{ data.functionName }}{{ data.person ? ' â€“ ' + data.person : '' }}</div></div>
      <button class="x" mat-dialog-close>Ã—</button></div>
    <form class="entry" [formGroup]="form" (ngSubmit)="save()">
      <div class="fgroup"><label>Closed on *</label><input type="date" formControlName="closedDate" [max]="today"></div>
      <div class="fgroup" style="grid-column:span 3"><label>Outcome</label><select formControlName="outcome">@for (o of outcomes; track o) {<option>{{ o }}</option>}</select></div>
      <div class="fgroup full"><label>Closure remarks / evidence *</label><textarea formControlName="closure" placeholder="What was done, document / SAP reference"></textarea>
        @if (form.controls.closure.invalid && form.controls.closure.touched) {<div class="err">Closure remarks are required</div>}</div>
      @if (error()) {<div class="full autherr">{{ error() }}</div>}
      <div class="actions"><button class="btn green" type="submit">Confirm closure</button><button type="button" class="btn secondary" mat-dialog-close>Cancel</button></div>
    </form>
  </div>`
})
export class CloseDialog {
  private api = inject(ApiService); private fb = inject(FormBuilder); private toast = inject(ToastService);
  private ref = inject(MatDialogRef<CloseDialog>); private scope = inject(ScopeService);
  data = inject<Action>(MAT_DIALOG_DATA);
  today = todayISO(); error = signal('');
  outcomes = ['Consumed / utilised', 'Released by QC', 'Transferred', 'Retested â€” shelf life extended', 'Disposed / written off', 'Rationalised â€” re-order stopped', 'Other'];
  form = this.fb.nonNullable.group({ closedDate: [todayISO(), Validators.required], outcome: [this.outcomes[0]], closure: ['', Validators.required] });
  save() {
    this.form.markAllAsTouched(); if (this.form.invalid) return;
    this.api.closeAction(this.data.id, this.form.getRawValue()).subscribe({
      next: () => { this.toast.show(`Action ${this.data.id} closed`); this.scope.refresh(); this.ref.close(true); },
      error: e => this.error.set(errMsg(e))
    });
  }
}

/** Re-enter password for privileged operations (step-up). */
@Component({
  standalone: true, imports: [MatDialogModule, ReactiveFormsModule],
  template: `
  <div mat-dialog-content>
    <div class="mhead"><div><div class="eyebrow">Privileged operation</div><h3>Confirm it's you</h3><div class="hint">{{ data.what }}</div></div></div>
    <form class="entry" style="grid-template-columns:1fr" (ngSubmit)="ok()">
      <div class="fgroup"><label>Your password</label><input type="password" [formControl]="pw" autocomplete="current-password"></div>
      <div class="actions"><button class="btn danger" type="submit" [disabled]="pw.invalid">Confirm</button><button type="button" class="btn secondary" mat-dialog-close>Cancel</button></div>
    </form>
  </div>`
})
export class PasswordDialog {
  data = inject<{ what: string }>(MAT_DIALOG_DATA); private ref = inject(MatDialogRef<PasswordDialog>);
  pw = inject(FormBuilder).nonNullable.control('', Validators.required);
  ok() { if (this.pw.valid) this.ref.close(this.pw.value); }
}

/** One-time display of a temporary password. */
@Component({
  standalone: true, imports: [MatDialogModule],
  template: `
  <div mat-dialog-content>
    <div class="mhead"><div><div class="eyebrow">Temporary password</div><h3>{{ data.username }}</h3></div><button class="x" mat-dialog-close>Ã—</button></div>
    <p>Share this temporary password with <b>{{ data.username }}</b> securely. It is shown only once; the user must set a new password at first sign-in.</p>
    <div class="temppw"><code>{{ data.temporaryPassword }}</code><button class="btn secondary small" (click)="copy()">Copy</button></div>
    <div class="mfoot"><button class="btn" mat-dialog-close>Done</button></div>
  </div>`
})
export class TempPasswordDialog {
  data = inject<{ username: string; temporaryPassword: string }>(MAT_DIALOG_DATA);
  copy() { navigator.clipboard?.writeText(this.data.temporaryPassword); }
}

