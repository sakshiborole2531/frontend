import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { errMsg } from '../../core/auth.interceptor';
import { Ic } from '../../shared/ui';

const pwPolicy = (c: AbstractControl): ValidationErrors | null => {
  const v = String(c.value || ''); const p: string[] = [];
  if (v.length < 8) p.push('at least 8 characters'); if (!/\d/.test(v)) p.push('a number'); if (!/[A-Za-z]/.test(v)) p.push('a letter');
  return p.length ? { policy: p.join(', ') } : null;
};
const match = (a: string, b: string) => (g: AbstractControl): ValidationErrors | null => g.get(a)?.value === g.get(b)?.value ? null : { mismatch: true };

/** Sign-in, first-run administrator setup, access request and forced password change. */
@Component({ standalone: true, imports: [ReactiveFormsModule, Ic], templateUrl: './login.component.html' })
export class LoginComponent {
  private api = inject(ApiService); private auth = inject(AuthService); private router = inject(Router); private fb = inject(FormBuilder);
  mode = signal<'loading' | 'login' | 'setup' | 'request' | 'requested' | 'change'>('loading');
  error = signal(''); busy = signal(false); company = signal('Unichem Laboratories Ltd.');
  msg = inject(ActivatedRoute).snapshot.queryParamMap.get('reason');
  bus = signal<string[]>([]);

  login = this.fb.nonNullable.group({ username: ['', Validators.required], password: ['', Validators.required] });
  setup = this.fb.nonNullable.group({
    name: ['', Validators.required], username: ['', [Validators.required, Validators.pattern(/^[\w.\-]{3,}$/)]], email: ['', Validators.email],
    designation: [''], password: ['', [Validators.required, pwPolicy]], confirm: ['', Validators.required]
  }, { validators: match('password', 'confirm') });
  request = this.fb.nonNullable.group({
    name: ['', Validators.required], username: ['', [Validators.required, Validators.pattern(/^[\w.\-]{3,}$/)]], email: ['', [Validators.required, Validators.email]],
    empId: [''], designation: [''], department: [''], bu: ['ALL'], unit: [''], role: ['viewer'], phone: [''], justification: ['', Validators.required]
  });
  change = this.fb.nonNullable.group({ newPassword: ['', [Validators.required, pwPolicy]], confirm: ['', Validators.required] }, { validators: match('newPassword', 'confirm') });

  constructor() {
    this.api.status().subscribe({
      next: s => { this.company.set(s.company); this.mode.set(s.needsSetup ? 'setup' : 'login'); },
      error: () => { this.mode.set('login'); this.error.set('Cannot reach the server â€” check that the API is running.'); }
    });
  }
  reasonText() { return this.msg === 'timeout' ? 'Your session timed out after inactivity. Please sign in again.' : this.msg === 'expired' ? 'Your session has ended. Please sign in again.' : ''; }

  doLogin() {
    if (this.login.invalid) { this.login.markAllAsTouched(); return; }
    this.busy.set(true); this.error.set('');
    const v = this.login.getRawValue();
    this.auth.login(v.username, v.password).subscribe({
      next: r => { this.busy.set(false); if (r.user.mustChange) this.mode.set('change'); else this.enter(); },
      error: e => { this.busy.set(false); this.error.set(errMsg(e)); }
    });
  }
  doSetup() {
    if (this.setup.invalid) { this.setup.markAllAsTouched(); return; }
    const { confirm, ...body } = this.setup.getRawValue();
    this.busy.set(true);
    this.auth.setup(body).subscribe({ next: () => this.enter(), error: e => { this.busy.set(false); this.error.set(errMsg(e)); } });
  }
  doRequest() {
    if (this.request.invalid) { this.request.markAllAsTouched(); return; }
    this.api.post('/auth/access-request', this.request.getRawValue()).subscribe({ next: () => this.mode.set('requested'), error: e => this.error.set(errMsg(e)) });
  }
  doChange() {
    if (this.change.invalid) { this.change.markAllAsTouched(); return; }
    this.api.post('/auth/change-password', { newPassword: this.change.getRawValue().newPassword }).subscribe({
      next: () => this.enter(), error: e => this.error.set(errMsg(e))
    });
  }
  openRequest() {
    this.error.set(''); this.mode.set('request');
  }
  enter() { this.router.navigate([this.auth.can('view.inventory') ? '/dashboard' : '/profile']); }
  t(g: any, k: string) { const c = g.get(k); return c && c.invalid && c.touched; }
}
