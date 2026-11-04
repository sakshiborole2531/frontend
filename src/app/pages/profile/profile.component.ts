import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { errMsg } from '../../core/auth.interceptor';
import { ToastService } from '../../core/toast.service';
import { fmtDT, initials } from '../../core/format';
import { Me } from '../../core/models';

/** My Profile: contact details, password change, access summary, recent activity. */
@Component({
  standalone: true, imports: [ReactiveFormsModule],
  template: `
  @if (auth.me(); as u) {
  <div class="pagehead"><div><div class="eb">Account</div><h2>My Profile</h2><div class="q">Your details, access, password and preferences</div></div></div>
  <div class="profhead"><div class="pav">{{ ini(u.name) }}</div>
    <div><h2>{{ u.name }}</h2><div class="hint">{{ u.designation }} {{ u.department ? 'Â· ' + u.department : '' }} {{ u.location ? 'Â· ' + u.location : '' }}</div>
      <div style="margin-top:6px"><span class="tag info">{{ u.roleLabel }}</span> <span class="tag mat">{{ scopeText(u) }}</span> <span class="tag ok">&#64;{{ u.username }}</span></div></div>
    <span style="flex:1"></span><button class="btn" (click)="auth.logout()">Sign out</button></div>
  <div class="grid2">
    <div class="panel"><h2>My details</h2><div class="desc">Role, privileges and data access are set by an administrator.</div>
      <form class="formgrid" style="grid-template-columns:1fr 1fr" [formGroup]="form" (ngSubmit)="save()">
        <div class="fgroup"><label>Full name *</label><input type="text" formControlName="name"></div>
        <div class="fgroup"><label>Email</label><input type="email" formControlName="email">@if (form.controls.email.invalid) {<div class="err">Enter a valid email</div>}</div>
        <div class="fgroup"><label>Phone</label><input type="text" formControlName="phone"></div>
        <div class="fgroup"><label>Employee ID</label><input type="text" formControlName="empId"></div>
        <div class="fgroup"><label>Designation</label><input type="text" formControlName="designation"></div>
        <div class="fgroup"><label>Department</label><input type="text" formControlName="department"></div>
        <div class="fgroup"><label>Location</label><input type="text" formControlName="location"></div>
        <div class="fgroup"><label>Responsible function</label><input type="text" [value]="u.functionName || 'â€”'" disabled></div>
        <div class="fgroup full"><button class="btn" type="submit" [disabled]="form.invalid">Save details</button></div></form></div>
    <div class="panel"><h2>Change password</h2>
      <form class="formgrid" style="grid-template-columns:1fr" [formGroup]="pw" (ngSubmit)="changePw()">
        <div class="fgroup"><label>Current password</label><input type="password" formControlName="currentPassword" autocomplete="current-password"></div>
        <div class="fgroup"><label>New password</label><input type="password" formControlName="newPassword" autocomplete="new-password">
          @if (pw.controls.newPassword.invalid && pw.controls.newPassword.touched) {<div class="err">At least 8 characters with a letter and a number</div>}</div>
        @if (pwErr()) {<div class="autherr">{{ pwErr() }}</div>}
        <div class="fgroup"><button class="btn secondary" type="submit">Update password</button></div></form>
      <h3 style="margin-top:16px">Account</h3>
      <table class="plain"><tbody><tr><td>Last sign-in</td><td><b>{{ dt(u.lastLogin) }}</b></td></tr><tr><td>Account valid until</td><td>{{ u.validUntil || 'No end date' }}</td></tr>
        <tr><td>Permissions</td><td class="wrap">@for (p of u.permissions; track p) {<span class="tag ok" style="margin:1px">{{ p }}</span>}</td></tr></tbody></table></div>
  </div>
  <div class="panel"><h2>My recent activity</h2>
    <table class="plain"><thead><tr><th>When</th><th>Activity</th><th>Detail</th></tr></thead><tbody>
      @for (a of activity(); track a.id) {<tr><td class="hint">{{ dt(a.at) }}</td><td><b>{{ a.action }}</b></td><td class="wrap">{{ a.detail }}</td></tr>}
      @empty {<tr><td colspan="3" class="empty">No activity yet</td></tr>}</tbody></table></div>
  }`
})
export class ProfileComponent {
  auth = inject(AuthService); private api = inject(ApiService); private toast = inject(ToastService); private fb = inject(FormBuilder);
  activity = signal<any[]>([]); pwErr = signal('');
  ini = initials; dt = fmtDT;
  form = this.fb.nonNullable.group({ name: ['', Validators.required], email: ['', Validators.email], phone: [''], empId: [''], designation: [''], department: [''], location: [''] });
  pw = this.fb.nonNullable.group({ currentPassword: ['', Validators.required], newPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[A-Za-z]).+$/)]] });
  constructor() {
    const u = this.auth.me(); if (u) this.form.patchValue(u as any);
    this.api.get<any[]>('/auth/me/activity').subscribe(a => this.activity.set(a));
  }
  scopeText(u: Me) { return u.scopeAll ? 'Entire organization' : [...u.scopeBus.map(b => b + ' BU'), ...u.scopeUnits].join(', ') || 'No data access'; }
  save() { this.api.put<Me>('/auth/me', { ...this.form.getRawValue(), theme: this.auth.me()?.theme }).subscribe({ next: m => { this.auth.me.set(m); this.toast.show('Details saved'); }, error: e => this.toast.show(errMsg(e)) }); }
  changePw() {
    this.pw.markAllAsTouched(); if (this.pw.invalid) return;
    this.api.post('/auth/change-password', this.pw.getRawValue()).subscribe({ next: () => { this.pw.reset(); this.pwErr.set(''); this.toast.show('Password updated'); }, error: e => this.pwErr.set(errMsg(e)) });
  }
}
