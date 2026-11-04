import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { errMsg } from '../../core/auth.interceptor';
import { ToastService } from '../../core/toast.service';
import { fmtDT } from '../../core/format';
import { TempPasswordDialog } from '../../shared/dialogs';
import { UserFormDialog } from './user-form.dialog';

/** Users & Access: users, access requests, roles Ã— permissions, audit log. */
@Component({ standalone: true, imports: [FormsModule], templateUrl: './users.component.html' })
export class UsersComponent {
  api = inject(ApiService); auth = inject(AuthService); private dlg = inject(MatDialog); private toast = inject(ToastService);
  tab = signal(this.auth.can('users.manage') ? 'users' : 'audit');
  users = signal<any[]>([]); requests = signal<any[]>([]); roles = signal<any>({ roles: [], permissions: [], privileged: [] });
  audit = signal<any>({ content: [], totalElements: 0, number: 0, totalPages: 0 });
  q = ''; aq = '';
  fmtDT = fmtDT;

  constructor() { this.load(); }
  load() {
    if (this.auth.can('users.manage')) {
      this.api.get<any[]>('/admin/users').subscribe(u => this.users.set(u));
      this.api.get<any[]>('/admin/access-requests').subscribe(r => this.requests.set(r));
    }
    this.api.get<any>('/admin/roles').subscribe(r => this.roles.set(r));
    if (this.auth.can('audit.view')) this.loadAudit(0);
  }
  loadAudit(page: number) { this.api.get<any>('/admin/audit', { q: this.aq, page, size: 50 }).subscribe(a => this.audit.set(a)); }
  shown() { const q = this.q.toLowerCase(); return this.users().filter(u => !q || [u.name, u.username, u.email, u.designation, u.roleLabel].join(' ').toLowerCase().includes(q)); }
  pending() { return this.requests().filter(r => r.status === 'pending').length; }
  scopeText(u: any) { return u.scopeAll ? 'Entire organization' : [...u.scopeBus.map((b: string) => b + ' BU'), ...u.scopeUnits].join(', ') || 'No data access'; }
  statusCls(s: string) { return ({ Active: 'ok', Inactive: 'mat', Expired: 'bad', Locked: 'bad', 'Temp. password': 'warn' } as Record<string, string>)[s] || 'mat'; }

  form(user?: any, request?: any) {
    const r = this.roles();
    this.dlg.open(UserFormDialog, { data: { user, request, roles: r.roles, permissions: r.permissions, privileged: r.privileged }, width: '960px', maxWidth: '96vw' }).afterClosed().subscribe(res => {
      if (!res) return;
      if (res.temporaryPassword) this.dlg.open(TempPasswordDialog, { data: res, width: '520px' });
      else this.toast.show('User saved');
      this.load();
    });
  }
  reset(u: any) {
    if (!confirm(`Reset the password for ${u.name}? A temporary password will be shown once.`)) return;
    this.api.post<any>(`/admin/users/${u.id}/reset-password`).subscribe({ next: r => this.dlg.open(TempPasswordDialog, { data: r, width: '520px' }), error: e => this.toast.show(errMsg(e)) });
  }
  unlock(u: any) { this.api.post(`/admin/users/${u.id}/unlock`).subscribe(() => { this.toast.show('Unlocked'); this.load(); }); }
  remove(u: any) {
    if (!confirm(`Delete user ${u.name}? Consider setting the account to Inactive instead.`)) return;
    this.api.delete(`/admin/users/${u.id}`).subscribe({ next: () => { this.toast.show('User deleted'); this.load(); }, error: e => this.toast.show(errMsg(e)) });
  }
  reject(r: any) {
    const why = prompt(`Reason for rejecting ${r.name}'s request:`); if (why === null) return;
    this.api.post(`/admin/access-requests/${r.id}/reject`, { reason: why }).subscribe(() => this.load());
  }
  togglePerm(role: any, p: string, ev: Event) {
    const on = (ev.target as HTMLInputElement).checked;
    let reason: string | null = null;
    if (on && this.roles().privileged.includes(p)) { reason = prompt(`"${p}" is a privileged permission. Reason / ticket reference for granting it to ${role.label}:`); if (!reason) { (ev.target as HTMLInputElement).checked = false; return; } }
    this.api.put(`/admin/roles/${role.code}/permissions/${p}`, { enabled: on, reason }).subscribe({ next: () => this.toast.show('Saved'), error: e => { this.toast.show(errMsg(e)); this.load(); } });
  }
  addRole() {
    const n = prompt('Name of the new role (e.g. QA Reviewer):'); if (!n?.trim()) return;
    this.api.post('/admin/roles', { label: n.trim() }).subscribe({ next: () => this.load(), error: e => this.toast.show(errMsg(e)) });
  }
  delRole(code: string) { if (confirm('Delete this role?')) this.api.delete('/admin/roles/' + code).subscribe({ next: () => this.load(), error: e => this.toast.show(errMsg(e)) }); }
}
