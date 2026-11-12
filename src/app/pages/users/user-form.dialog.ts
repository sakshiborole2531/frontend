import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { errMsg } from '../../core/auth.interceptor';
import { ScopeService } from '../../core/scope.service';

/** Create / edit a user (or approve an access request): role, function, data access, validity, individual privileges. */
@Component({
  standalone: true, imports: [MatDialogModule, ReactiveFormsModule],
  template: `
  <div mat-dialog-content>
    <div class="mhead"><div><div class="eyebrow">{{ data.user ? 'Edit user' : data.request ? 'Approve access request' : 'New user' }}</div><h3>{{ data.user?.name || data.request?.name || 'Add user' }}</h3>
      @if (data.request) {<div class="hint">Justification: {{ data.request.justification }}</div>}</div><button class="x" mat-dialog-close>×</button></div>
    @if (self) {<div class="note" style="margin-bottom:10px">You are editing your own account. Role, privileges, data access, validity and status can only be changed by another administrator.</div>}
    <form class="entry" [formGroup]="f" (ngSubmit)="save()">
      <div class="fgroup"><label>Full name *</label><input type="text" formControlName="name">@if (bad('name')) {<div class="err">Required</div>}</div>
      <div class="fgroup"><label>Username *</label><input type="text" formControlName="username" [readonly]="!!data.user">@if (bad('username')) {<div class="err">3+ letters, digits, . _ -</div>}</div>
      <div class="fgroup"><label>Email</label><input type="email" formControlName="email">@if (bad('email')) {<div class="err">Invalid email</div>}</div>
      <div class="fgroup"><label>Phone</label><input type="text" formControlName="phone"></div>
      <div class="fgroup"><label>Employee ID</label><input type="text" formControlName="empId"></div>
      <div class="fgroup"><label>Designation</label><input type="text" formControlName="designation"></div>
      <div class="fgroup"><label>Department</label><input type="text" formControlName="department"></div>
      <div class="fgroup"><label>Location</label><input type="text" formControlName="location"></div>
      <div class="fgroup"><label>Role *</label><select formControlName="role">@for (r of data.roles; track r.code) {<option [value]="r.code">{{ r.label }}</option>}</select></div>
      <div class="fgroup"><label>Function (own actions)</label><select formControlName="functionName"><option value="">—</option>@for (fn of scope.masters()?.functions ?? []; track fn) {<option [value]="fn">{{ fn }}</option>}</select></div>
      <div class="fgroup"><label>Account valid until</label><input type="date" formControlName="validUntil"></div>
      <div class="fgroup"><label>Status</label><select formControlName="active"><option [ngValue]="true">Active</option><option [ngValue]="false">Inactive</option></select></div>
      <div class="fgroup full"><label>Data access</label>
        <div class="radios" style="flex-direction:row;flex-wrap:wrap">
          <label><input type="radio" formControlName="scopeAll" [value]="true"><div><b>Entire organization</b><span>All business units and units</span></div></label>
          <label><input type="radio" formControlName="scopeAll" [value]="false"><div><b>Selected business units / units</b><span>Only data of the ticked items</span></div></label></div>
        @if (!f.value.scopeAll) {
          <div class="scopepick">@for (b of scope.bus(); track b) {
            <div class="spbu"><label class="chk"><input type="checkbox" [checked]="bus.has(b)" (change)="tog(bus, b)" [disabled]="self"> <b>{{ b }}</b> <span class="hint">whole BU</span></label>
              <div class="spunits">@for (u of scope.unitsOf(b); track u) {<label class="chk"><input type="checkbox" [checked]="units.has(u)" (change)="tog(units, u)" [disabled]="self || bus.has(b)"> {{ u }}</label>}</div></div> }</div> }
      </div>
      <details class="fgroup full privbox"><summary><b>Individual privileges</b> <span class="hint">— grant extra permissions or restrict role permissions for this user only</span></summary>
        <table class="plain privtbl"><thead><tr><th>Permission</th><th>Override</th><th>Until</th></tr></thead><tbody>
          @for (p of data.permissions; track p) { <tr><td>{{ p }}{{ data.privileged.includes(p) ? ' 🔒' : '' }}</td>
            <td><select [value]="grants[p]?.mode || ''" (change)="setGrant(p, $any($event.target).value)" [disabled]="self"><option value="">Role default</option><option value="grant">Grant</option><option value="deny">Restrict</option></select></td>
            <td><input type="date" [value]="grants[p]?.until || ''" (change)="setUntil(p, $any($event.target).value)" [disabled]="self || !grants[p]"></td></tr> }
        </tbody></table></details>
      <div class="fgroup full"><label>Reason / ticket reference <span class="hint">(required when privileged 🔒 access is added)</span></label><input type="text" formControlName="reason" placeholder="e.g. IT-REQ-2026-1142"></div>
      @if (error()) {<div class="full autherr">{{ error() }}</div>}
      <div class="actions"><button class="btn" type="submit" [disabled]="busy()">{{ data.user ? 'Save changes' : data.request ? 'Approve & create user' : 'Create user' }}</button><button type="button" class="btn secondary" mat-dialog-close>Cancel</button></div>
    </form>
  </div>`
})
export class UserFormDialog {
  private api = inject(ApiService); private ref = inject(MatDialogRef<UserFormDialog>); private auth = inject(AuthService);
  scope = inject(ScopeService);
  data = inject<{ user?: any; request?: any; roles: any[]; permissions: string[]; privileged: string[] }>(MAT_DIALOG_DATA);
  self = !!this.data.user && this.data.user.id === this.auth.me()?.id;
  error = signal(''); busy = signal(false);
  bus = new Set<string>(); units = new Set<string>();
  grants: Record<string, { mode: string; until: string }> = {};
  f = inject(FormBuilder).nonNullable.group({
    name: ['', Validators.required], username: ['', [Validators.required, Validators.pattern(/^[\w.\-]{3,}$/)]], email: ['', Validators.email], phone: [''], empId: [''],
    designation: [''], department: [''], location: [''], role: ['viewer', Validators.required], functionName: [''], validUntil: [''], active: [true], scopeAll: [false], reason: ['']
  });
  constructor() {
    const u = this.data.user, r = this.data.request;
    if (u) {
      this.f.patchValue({ ...u, email: u.email || '', validUntil: u.validUntil || '', functionName: u.functionName || '' });
      u.scopeBus.forEach((b: string) => this.bus.add(b)); u.scopeUnits.forEach((x: string) => this.units.add(x));
      u.grants.forEach((g: any) => this.grants[g.permission] = { mode: g.mode, until: g.until || '' });
    } else if (r) {
      this.f.patchValue({ name: r.name, username: r.username, email: r.email, empId: r.empId || '', designation: r.designation || '', department: r.department || '', phone: r.phone || '', role: r.roleCode || 'viewer', scopeAll: r.buCode === 'ALL' });
      if (r.buCode && r.buCode !== 'ALL') { if (r.unit) this.units.add(r.unit); else this.bus.add(r.buCode); }
    }
    if (this.self) ['role', 'functionName', 'validUntil', 'active', 'scopeAll'].forEach(k => this.f.get(k)?.disable());
  }
  bad(k: string) { const c = this.f.get(k); return !!c && c.invalid && c.touched; }
  tog(s: Set<string>, v: string) { s.has(v) ? s.delete(v) : s.add(v); }
  setGrant(p: string, mode: string) { if (!mode) delete this.grants[p]; else this.grants[p] = { mode, until: this.grants[p]?.until || '' }; }
  setUntil(p: string, until: string) { if (this.grants[p]) this.grants[p].until = until; }
  save() {
    this.f.markAllAsTouched(); if (this.f.invalid) return;
    const v = this.f.getRawValue();
    if (!v.scopeAll && !this.bus.size && !this.units.size) { this.error.set('Select at least one business unit or unit, or choose Entire organization.'); return; }
    const body = { ...v, validUntil: v.validUntil || null, functionName: v.functionName || null, scopeBus: [...this.bus], scopeUnits: [...this.units],
      grants: Object.entries(this.grants).map(([permission, g]) => ({ permission, mode: g.mode, until: g.until || null })), reason: v.reason || null };
    this.busy.set(true);
    const req = this.data.user ? this.api.put(`/admin/users/${this.data.user.id}`, body)
      : this.data.request ? this.api.post(`/admin/access-requests/${this.data.request.id}/approve`, body) : this.api.post('/admin/users', body);
    req.subscribe({ next: r => this.ref.close(r), error: e => { this.busy.set(false); this.error.set(errMsg(e)); } });
  }
}
