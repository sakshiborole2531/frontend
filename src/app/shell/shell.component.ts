import { Component, computed, effect, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { ApiService } from '../core/api.service';
import { AuthService } from '../core/auth.service';
import { ScopeService } from '../core/scope.service';
import { fmtDT, initials } from '../core/format';
import { Ic } from '../shared/ui';

interface NavItem { label: string; link: string; queryParams?: Record<string, string>; perm?: string | string[]; cnt?: () => number | string; red?: boolean; }
interface NavGroup { label: string; icon: string; sec?: string; key?: string; link?: string; queryParams?: Record<string, string>; perm?: string | string[]; items?: NavItem[]; }

/** Header + sidebar (organization tree and menu) in the original layout. */
@Component({
  selector: 'app-shell', standalone: true, imports: [RouterOutlet, RouterLink, RouterLinkActive, Ic],
  templateUrl: './shell.component.html'
})
export class ShellComponent {
  auth = inject(AuthService); scope = inject(ScopeService); private router = inject(Router); private api = inject(ApiService);
  open = signal<Record<string, boolean>>({ inv: true, act: true, cfg: true });
  buOpen = signal<Record<string, boolean>>({});
  mini = signal(localStorage.getItem('unichem_sidemini') === 'true');
  url = signal(this.router.url);
  dark = signal(document.documentElement.dataset['theme'] === 'dark');
  overdue = signal(0);
  initials = computed(() => initials(this.auth.me()?.name));
  fmtDT = fmtDT;

  companyLogo = computed(() => {
    this.scope.version();
    return this.scope.settings()['companyLogo'] || localStorage.getItem('unichem_company_logo') || '';
  });

  subtitleBus = computed(() => {
    const bus = (this.scope.masters()?.businessUnits ?? []).map(b => b.code).filter(Boolean);
    return (bus.length ? bus : this.scope.bus()).join(' & ');
  });

  syncText = computed(() => {
    const s = this.scope.settings();
    const src = s['sync.source'];
    const last = s['sync.lastRefresh'];
    if (!src || src === 'No data') return `Not synced · ${last ? fmtDT(last) : 'never refreshed'}`;
    return `${src} · ${last ? fmtDT(last) : 'never refreshed'}`;
  });

  groups: NavGroup[] = [
    { label: 'Inventory', icon: 'box', sec: 'Analysis', key: 'inv', perm: 'view.inventory', items: [
      { label: 'By Category', link: '/inventory/goods' }, { label: 'Stock Status', link: '/inventory/status' },
      { label: 'Inventory Aging', link: '/inventory/aging' }, { label: 'Expiry Monitoring', link: '/inventory/expiry' }] },
    { label: 'Consumables', icon: 'tool', link: '/inventory/cons', perm: 'view.inventory' },
    { label: 'Matrix View', icon: 'grid', link: '/matrix', perm: 'view.inventory' },
    { label: 'Year-wise Comparison', icon: 'chart', link: '/years', perm: 'view.years' },
    { label: 'Actions', icon: 'check', sec: 'Action & Reports', key: 'act', perm: 'view.actions', items: [
      { label: 'Assign Owner', link: '/actions/queue' }, { label: 'Open Actions', link: '/actions/open', cnt: () => this.overdue() || '', red: true },
      { label: 'Closed', link: '/actions/closed' }] },
    { label: 'Reports (PDF)', icon: 'file', link: '/import', queryParams: { section: 'reports' }, perm: 'view.inventory' },
    { label: 'Configuration', icon: 'gear', sec: 'Setup', key: 'cfg', items: [
      { label: 'Masters', link: '/masters', perm: 'masters.edit' },
      { label: 'Import / Export', link: '/import', perm: ['import.data', 'export.data'] },
      { label: 'SAP Integration', link: '/import', queryParams: { section: 'sap' }, perm: ['import.data', 'masters.edit'] },
      { label: 'Data Entry & Quality', link: '/data', perm: ['data.edit', 'data.approve'] },
      { label: 'Email Notifications', link: '/masters', queryParams: { tab: 'contacts' }, perm: 'masters.edit' },
      { label: 'Clear Data', link: '/data', queryParams: { section: 'clear' }, perm: ['data.edit', 'data.approve'] },
      { label: 'Users & Access', link: '/users', perm: ['users.manage', 'audit.view'] }] }
  ];

  constructor() {
    this.scope.load();
    this.api.status().subscribe(s => this.auth.setIdle(s.idleMinutes));
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => { this.url.set(this.router.url); document.body.classList.remove('sideopen'); });
    effect(() => { this.scope.version(); if (this.auth.can('view.actions')) this.api.actions().subscribe(a => this.overdue.set(a.filter(x => x.overdue).length)); });
    effect(() => document.body.classList.toggle('sidemini', this.mini()));
    // first-level scope for users limited to one BU / unit
    const me = this.auth.me();
    if (me && !me.scopeAll) {
      if (me.scopeBus.length === 1 && !me.scopeUnits.length) this.scope.goScope(me.scopeBus[0]);
      else if (!me.scopeBus.length && me.scopeUnits.length === 1) setTimeout(() => {
        const p = this.scope.activePlants().find(x => x.name === me.scopeUnits[0]); if (p) this.scope.goScope(p.buCode, p.name);
      }, 600);
    }
  }

  visible(p?: string | string[]) { return !p || this.auth.can(p); }
  itemsOf(g: NavGroup) { return (g.items ?? []).filter(i => this.visible(i.perm)); }
  showGroup(g: NavGroup) { return this.visible(g.perm) && (!g.items || this.itemsOf(g).length > 0); }
  isItemActive(link: string, qp?: Record<string, string>): boolean {
    const u = this.url();
    const [path, qStr] = u.split('?');
    if (!path.startsWith(link)) return false;
    const params = new URLSearchParams(qStr || '');
    if (qp) {
      return Object.entries(qp).every(([k, v]) => params.get(k) === v);
    }
    if (link === '/masters' && params.get('tab') === 'contacts') return false;
    if (link === '/import' && (params.get('section') === 'sap' || params.get('section') === 'reports')) return false;
    if (link === '/data' && params.get('section') === 'clear') return false;
    return true;
  }
  groupOn(g: NavGroup) { return this.itemsOf(g).some(i => this.isItemActive(i.link, i.queryParams)); }
  toggle(k: string) { this.open.update(o => ({ ...o, [k]: !o[k] })); }
  isOpen(g: NavGroup) { return this.open()[g.key!] || this.groupOn(g); }
  isBuOpen(bu: string): boolean { return this.buOpen()[bu] !== false; }
  toggleBu(bu: string, ev?: Event) {
    ev?.stopPropagation();
    this.buOpen.update(o => ({ ...o, [bu]: !this.isBuOpen(bu) }));
  }
  hamb() {
    if (window.innerWidth <= 980) document.body.classList.toggle('sideopen');
    else { this.mini.update(v => !v); localStorage.setItem('unichem_sidemini', String(this.mini())); }
  }
  goScope(bu: string, plant = 'All') { this.scope.goScope(bu, plant); this.router.navigate(['/dashboard']); }
  onDash() { return this.url().startsWith('/dashboard'); }
  toggleTheme() {
    const d = this.dark() ? 'light' : 'dark'; this.dark.set(d === 'dark');
    document.documentElement.dataset['theme'] = d; localStorage.setItem('unichem_theme', d);
    const me = this.auth.me(); if (me) this.api.put('/auth/me', { ...me, theme: d }).subscribe();
  }
  refresh() { this.scope.load(); this.scope.refresh(); }
  signOut() { if (confirm('Sign out?')) this.auth.logout(); }
}
