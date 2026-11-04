import { Component, computed, effect, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { ApiService } from '../core/api.service';
import { AuthService } from '../core/auth.service';
import { MasterDataService } from '../core/master-data.service';
import { ScopeService } from '../core/scope.service';
import { fmtDT, initials } from '../core/format';
import { Ic } from '../shared/ui';

interface NavItem { label: string; link: string; perm?: string | string[]; cnt?: () => number | string; red?: boolean; }
interface NavGroup { label: string; icon: string; sec?: string; key?: string; link?: string; perm?: string | string[]; items?: NavItem[]; }
/** One database-driven master record in the sidebar. */
interface MasterLink { key: string | number; label: string; q: string; title: string; tag?: string | null; }
/** A collapsible master category; `tab` is the Masters page tab id (/masters?tab=â€¦). */
interface MasterGroup { key: string; tab: string; label: string; icon: string; items: () => MasterLink[]; count: () => number | undefined; }

/** Header + sidebar (organization tree and menu) in the original layout. */
@Component({
  selector: 'app-shell', standalone: true, imports: [RouterOutlet, RouterLink, RouterLinkActive, Ic],
  templateUrl: './shell.component.html'
})
export class ShellComponent {
  auth = inject(AuthService); scope = inject(ScopeService); private router = inject(Router); private api = inject(ApiService);
  md = inject(MasterDataService);
  open = signal<Record<string, boolean>>({ inv: true, act: true, cfg: true });
  mini = signal(localStorage.getItem('unichem_sidemini') === 'true');
  url = signal(this.router.url);
  dark = signal(document.documentElement.dataset['theme'] === 'dark');
  overdue = signal(0);
  initials = computed(() => initials(this.auth.me()?.name));
  fmtDT = fmtDT;

  groups: NavGroup[] = [
    { label: 'Inventory', icon: 'inventory_2', sec: 'Analysis', key: 'inv', perm: 'view.inventory', items: [
      { label: 'By Category', link: '/inventory/goods' }, { label: 'Stock Status', link: '/inventory/status' },
      { label: 'Inventory Aging', link: '/inventory/aging' }, { label: 'Expiry Monitoring', link: '/inventory/expiry' }] },
    { label: 'Consumables', icon: 'build', link: '/inventory/cons', perm: 'view.inventory' },
    { label: 'Matrix View', icon: 'grid_on', link: '/matrix', perm: 'view.inventory' },
    { label: 'Year-wise Comparison', icon: 'show_chart', link: '/years', perm: 'view.years' },
    { label: 'Actions', icon: 'task_alt', sec: 'Action & Reports', key: 'act', perm: 'view.actions', items: [
      { label: 'Assign Owner', link: '/actions/queue' }, { label: 'Open Actions', link: '/actions/open', cnt: () => this.overdue() || '', red: true },
      { label: 'Closed', link: '/actions/closed' }] },
    { label: 'Configuration', icon: 'settings', sec: 'Setup', key: 'cfg', items: [
      { label: 'Masters', link: '/masters', perm: 'masters.edit' }, { label: 'Import / Export', link: '/import', perm: ['import.data', 'export.data'] },
      { label: 'Data Entry & Quality', link: '/data', perm: ['data.edit', 'data.approve'] }, { label: 'Users & Access', link: '/users', perm: ['users.manage', 'audit.view'] }] }
  ];

  /** Masters shown in the sidebar â€” every value comes from GET /api/masters/sidebar. */
  masterGroups: MasterGroup[] = [
    { key: 'm_plants', tab: 'plants', label: 'Plants (SAP)', icon: 'factory', count: () => this.md.counts()?.plants,
      items: () => this.md.plants().map(p => ({ key: p.id, label: p.code ? `${p.code} - ${p.name}` : p.name, q: p.code || p.name,
        title: [p.name, p.buCode, p.city].filter(Boolean).join(' Â· ') })) },
    { key: 'm_bus', tab: 'bus', label: 'Business Units', icon: 'account_tree', count: () => this.md.counts()?.businessUnits,
      items: () => this.md.businessUnits().map(b => ({ key: b.id, label: b.code, q: b.code, tag: b.plantCount ? String(b.plantCount) : null,
        title: [b.name, b.alias, `${b.plantCount} active plant(s)`].filter(Boolean).join(' Â· ') })) },
    { key: 'm_slocs', tab: 'slocs', label: 'Storage Locations (SAP)', icon: 'warehouse', count: () => this.md.counts()?.storageLocations,
      items: () => this.md.storageLocations().map(s => ({ key: s.id, label: `${s.code} - ${s.name}`, q: s.code, tag: s.plantName,
        title: `${s.code} - ${s.name}` + (s.storageType ? ` Â· ${s.storageType}` : '') + ` Â· ${s.plantName ? 'Plant ' + s.plantName : 'All plants'}` })) },
    { key: 'm_mtypes', tab: 'mtypes', label: 'Material Types (SAP)', icon: 'category', count: () => this.md.counts()?.materialTypes,
      items: () => this.md.materialTypes().map(m => ({ key: m.id, label: m.name ? `${m.code} - ${m.name}` : m.code, q: m.code,
        title: [m.code, m.name, m.category].filter(Boolean).join(' Â· ') })) }
  ];
  /** Masters tab / search currently in the URL â€” drives sidebar highlighting. */
  mastersAt = computed(() => {
    const t = this.router.parseUrl(this.url());
    const onMasters = this.url().split('?')[0].startsWith('/masters');
    return { tab: onMasters ? (t.queryParams['tab'] ?? null) : null, q: onMasters ? (t.queryParams['q'] ?? null) : null };
  });

  constructor() {
    this.scope.load();
    if (this.showMasters()) this.md.load();
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
  groupOn(g: NavGroup) { return this.itemsOf(g).some(i => this.url().startsWith(i.link)); }
  toggle(k: string) { this.open.update(o => ({ ...o, [k]: !o[k] })); }
  isOpen(g: NavGroup) { return this.open()[g.key!] || this.groupOn(g); }
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
  refresh() { this.scope.load(); this.scope.refresh(); if (this.showMasters()) this.md.refresh(); }
  /** The sidebar Masters section links to the Masters screen, so it follows the same permission. */
  showMasters() { return this.auth.can('masters.edit'); }
  masterOpen(g: MasterGroup) { return !!this.open()[g.key]; }
  /** Category click: open its Masters tab and expand the group (collapses if already there). */
  goMaster(g: MasterGroup) {
    const here = this.mastersAt().tab === g.tab && !this.mastersAt().q;
    if (here && this.masterOpen(g)) { this.toggle(g.key); return; }
    this.open.update(o => ({ ...o, [g.key]: true }));
    this.router.navigate(['/masters'], { queryParams: { tab: g.tab } });
  }
  masterToggle(g: MasterGroup, e: Event) { e.stopPropagation(); this.toggle(g.key); }
  signOut() { if (confirm('Sign out?')) this.auth.logout(); }
}
