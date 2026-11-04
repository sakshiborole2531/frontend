import { Injectable, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { Me } from './models';

const TOKEN = 'unichem_token';

/** Session: JWT in sessionStorage, signed-in user as a signal, permission checks, idle time-out. */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = inject(ApiService);
  private router = inject(Router);
  readonly me = signal<Me | null>(null);
  readonly perms = computed(() => new Set(this.me()?.permissions ?? []));
  private lastAct = Date.now();
  private idleMin = 30;
  private timer: any;

  get token(): string | null { return sessionStorage.getItem(TOKEN); }

  can(p: string | string[]): boolean { return ([] as string[]).concat(p).some(x => this.perms().has(x)); }

  /** Own-function rule for actions: action.update / action.update.own etc. */
  canAction(a: { functionName?: string; person?: string }, kind: 'update' | 'close'): boolean {
    if (this.can('action.' + kind)) return true;
    const me = this.me();
    return this.can(`action.${kind}.own`) && !!me && ((!!me.functionName && a.functionName === me.functionName) || a.person === me.name);
  }

  login(username: string, password: string): Observable<{ token: string; user: Me }> {
    return this.api.post<{ token: string; user: Me }>('/auth/login', { username, password }).pipe(tap(r => this.start(r.token, r.user)));
  }
  setup(body: unknown): Observable<{ token: string; user: Me }> {
    return this.api.post<{ token: string; user: Me }>('/auth/setup', body).pipe(tap(r => this.start(r.token, r.user)));
  }

  start(token: string, user: Me) {
    sessionStorage.setItem(TOKEN, token);
    this.me.set(user);
    if (user.theme) document.documentElement.dataset['theme'] = user.theme;
    this.watchIdle();
  }

  /** Called on app start: resume the session if the token is still valid. */
  resume(): Observable<Me> { return this.api.me().pipe(tap(u => { this.me.set(u); if (u.theme) document.documentElement.dataset['theme'] = u.theme; this.watchIdle(); })); }

  setIdle(min: number) { this.idleMin = min || 30; }

  private watchIdle() {
    this.lastAct = Date.now();
    ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'].forEach(ev => document.addEventListener(ev, () => (this.lastAct = Date.now()), { passive: true }));
    clearInterval(this.timer);
    this.timer = setInterval(() => { if (this.me() && Date.now() - this.lastAct > this.idleMin * 60e3) this.logout('timeout'); }, 20000);
  }

  logout(reason?: 'timeout' | 'expired') {
    sessionStorage.removeItem(TOKEN);
    this.me.set(null);
    clearInterval(this.timer);
    this.router.navigate(['/login'], { queryParams: reason ? { reason } : {} });
  }
}
