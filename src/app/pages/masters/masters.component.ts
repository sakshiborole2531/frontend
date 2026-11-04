import { Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { errMsg } from '../../core/auth.interceptor';
import { MasterDataService } from '../../core/master-data.service';
import { ScopeService } from '../../core/scope.service';
import { ToastService } from '../../core/toast.service';
import { DEPTS, MAT_TYPES } from '../../core/models';

interface Col { k: string; l: string; type?: 'text' | 'select' | 'check' | 'number' | 'email'; opts?: () => string[]; req?: boolean; key?: boolean; }
interface MasterDef { id: string; label: string; desc: string; data: () => any[]; cols: Col[]; url: string; idOf: (r: any) => string | number | undefined; blank: () => any; }

/** Masters: inline-editable tables with per-row validation and save; thresholds; lists. */
@Component({ standalone: true, imports: [FormsModule, MatTabsModule], templateUrl: './masters.component.html' })
export class MastersComponent {
  api = inject(ApiService); scope = inject(ScopeService); private toast = inject(ToastService);
  private masterData = inject(MasterDataService); private route = inject(ActivatedRoute); private router = inject(Router);
  tab = signal(0);
  rows = signal<Record<string, any[]>>({});
  dirty = new Set<any>();
  q = signal<Record<string, string>>({});
  thresholds: Record<string, string> = {};
  functionsText = ''; actionTypesText = '';

  defs: MasterDef[] = [
    { id: 'plants', label: 'Plants (SAP)', url: '/masters/plants', idOf: r => r.id, desc: 'Unichem plants with SAP plant codes (WERKS). Switch Active off to hide a plant and all its data from every screen (nothing is deleted). Renaming a plant updates existing records, actions and history.',
      data: () => this.scope.masters()?.plants ?? [], blank: () => ({ sapCode: '', name: '', buCode: this.scope.bus()[0] || 'API', city: '', active: true, sortOrder: 99 }),
      cols: [{ k: 'sapCode', l: 'SAP plant code' }, { k: 'name', l: 'Plant name', req: true }, { k: 'buCode', l: 'Business unit', type: 'select', opts: () => (this.scope.masters()?.businessUnits ?? []).map(b => b.code) },
        { k: 'city', l: 'Location / city' }, { k: 'sortOrder', l: 'Order', type: 'number' }, { k: 'active', l: 'Active', type: 'check' }] },
    { id: 'bus', label: 'Business Units', url: '/masters/business-units', idOf: r => r.code, desc: 'Business units used for filtering and plant grouping.',
      data: () => this.scope.masters()?.businessUnits ?? [], blank: () => ({ code: '', name: '', alias: '' }),
      cols: [{ k: 'code', l: 'Business unit', req: true, key: true }, { k: 'name', l: 'Description', req: true }, { k: 'alias', l: 'Also known as (e.g. OSD)' }] },
    { id: 'slocs', label: 'Storage Locations (SAP)', url: '/masters/storage-locations', idOf: r => r.id, desc: 'SAP storage locations (LGORT). Codes are translated to descriptions on import. Set the plant to make a code plant-specific.',
      data: () => this.scope.masters()?.storageLocations ?? [], blank: () => ({ code: '', name: '', storageType: 'General', plantName: '' }),
      cols: [{ k: 'code', l: 'SAP SLoc code', req: true }, { k: 'name', l: 'Description', req: true },
        { k: 'storageType', l: 'Storage type', type: 'select', opts: () => ['RM', 'PM', 'FG', 'Intermediate', 'Solvent', 'Engineering', 'Production', 'QC', 'EHS', 'R&D', 'Job Work', 'Quality / Hold', 'Rejected / Scrap', 'Transit', 'General'] },
        { k: 'plantName', l: 'Plant (blank = all)', type: 'select', opts: () => ['', ...(this.scope.masters()?.plants ?? []).map(p => p.name)] }] },
    { id: 'mtypes', label: 'Material Types (SAP)', url: '/masters/material-types', idOf: r => r.sapCode, desc: 'SAP material types (MTART) mapped to the dashboard categories. â€œExcludeâ€ keeps non-inventory types out of the dashboard.',
      data: () => this.scope.masters()?.materialTypes ?? [], blank: () => ({ sapCode: '', description: '', numberSeries: '', category: 'Raw Material', department: '' }),
      cols: [{ k: 'sapCode', l: 'Material type', req: true, key: true }, { k: 'description', l: 'Description' }, { k: 'numberSeries', l: 'Number series' },
        { k: 'category', l: 'Dashboard category', type: 'select', opts: () => [...MAT_TYPES, 'Exclude'] }, { k: 'department', l: 'Default department', type: 'select', opts: () => ['', ...DEPTS] }] },
    { id: 'mgroups', label: 'Material Groups (SAP)', url: '/masters/material-groups', idOf: r => r.sapCode, desc: 'SAP material groups (MATKL). For consumables the group decides the department and sub-category.',
      data: () => this.scope.masters()?.materialGroups ?? [], blank: () => ({ sapCode: '', description: '', category: '', department: '', subCategory: '' }),
      cols: [{ k: 'sapCode', l: 'Material group', req: true, key: true }, { k: 'description', l: 'Description' }, { k: 'category', l: 'Category (fallback)', type: 'select', opts: () => ['', ...MAT_TYPES, 'Exclude'] },
        { k: 'department', l: 'Department', type: 'select', opts: () => ['', ...DEPTS] }, { k: 'subCategory', l: 'Sub-category' }] },
    { id: 'persons', label: 'Responsible Persons', url: '/masters/persons', idOf: r => r.id, desc: 'People who can be assigned as action owners â€” suggested in the action form.',
      data: () => this.scope.masters()?.persons ?? [], blank: () => ({ name: '', functionName: this.scope.masters()?.functions[0] || 'Stores', email: '' }),
      cols: [{ k: 'name', l: 'Name', req: true }, { k: 'functionName', l: 'Function', type: 'select', opts: () => this.scope.masters()?.functions ?? [] }, { k: 'email', l: 'Email', type: 'email' }] }
  ];

  constructor() {
    this.reload();
    // deep link from the sidebar: /masters?tab=plants&q=1100 opens that tab with the search pre-filled
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe(p => {
      const i = this.defs.findIndex(d => d.id === p.get('tab'));
      if (i < 0) return;
      this.tab.set(i);
      const q = p.get('q'); if (q !== null) this.setQ(this.defs[i].id, q);
    });
  }
  /** Keeps the URL in step with the selected tab so the sidebar highlight follows. */
  onTab(i: number) {
    this.tab.set(i);
    const d = this.defs[i];
    const id = d ? d.id : null;
    if (id === this.route.snapshot.queryParamMap.get('tab')) return;   // already in the URL (e.g. opened from the sidebar)
    this.router.navigate([], { relativeTo: this.route, queryParams: { tab: id, q: null }, replaceUrl: true });
  }
  reload() {
    this.api.masters().subscribe(m => {
      this.scope.masters.set(m);
      const r: Record<string, any[]> = {};
      this.defs.forEach(d => r[d.id] = d.data().map(x => ({ ...x, _new: false })));
      this.rows.set(r); this.dirty.clear();
      this.functionsText = m.functions.join('\n'); this.actionTypesText = m.actionTypes.join('\n');
    });
    this.api.settings().subscribe(s => { this.thresholds = { ...s }; this.scope.settings.set(s); });
  }
  filtered(d: MasterDef) { const q = (this.q()[d.id] || '').toLowerCase(); return (this.rows()[d.id] ?? []).filter(r => !q || Object.values(r).join(' ').toLowerCase().includes(q)); }
  setQ(id: string, v: string) { this.q.update(x => ({ ...x, [id]: v })); }
  add(d: MasterDef) { this.rows.update(r => ({ ...r, [d.id]: [{ ...d.blank(), _new: true }, ...r[d.id]] })); }
  touch(row: any) { this.dirty.add(row); }
  invalid(d: MasterDef, row: any) { return d.cols.some(c => c.req && !String(row[c.k] ?? '').trim()) || d.cols.some(c => c.type === 'email' && row[c.k] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row[c.k])); }
  save(d: MasterDef, row: any) {
    if (this.invalid(d, row)) { this.toast.show('Fill the required fields (*) with valid values'); return; }
    const { _new, ...body } = row;
    Object.keys(body).forEach(k => { if (body[k] === '') body[k] = null; });
    this.api.post(d.url, body).subscribe({ next: () => { this.toast.show('Saved'); this.reload(); this.masterData.refresh(); }, error: e => this.toast.show(errMsg(e)) });
  }
  remove(d: MasterDef, row: any) {
    if (row._new) { this.rows.update(r => ({ ...r, [d.id]: r[d.id].filter(x => x !== row) })); return; }
    if (!confirm('Delete this row?')) return;
    this.api.delete(`${d.url}/${encodeURIComponent(String(d.idOf(row)))}`).subscribe({ next: () => { this.toast.show('Deleted'); this.reload(); this.masterData.refresh(); }, error: e => this.toast.show(errMsg(e)) });
  }
  saveList(kind: 'functions' | 'actionTypes') {
    const v = (kind === 'functions' ? this.functionsText : this.actionTypesText).split('\n').map(s => s.trim()).filter(Boolean);
    if (!v.length) { this.toast.show('Enter at least one value'); return; }
    this.api.put('/masters/lists/' + kind, v).subscribe({ next: () => { this.toast.show('Saved'); this.reload(); }, error: e => this.toast.show(errMsg(e)) });
  }
  thrKeys: [string, string][] = [['expiryDays', 'Expiry monitoring window (days)'], ['agingDays', 'Aged inventory threshold (days)'], ['consAgingDays', "Consumable 'Aging' after (days)"],
    ['longLyingDays', "Consumable 'Long Lying' after (days)"], ['slowMovingDays', 'Slow-moving: no consumption for (days)'], ['nonMovingDays', 'Non-moving: no consumption for (days)'],
    ['qualityHoldDays', 'Quality hold flagged after (days)'], ['highValue', 'High-value threshold (â‚¹)'], ['fyStart', 'Financial year starts (4 = April, 1 = January)'],
    ['policy.minLen', 'Minimum password length'], ['policy.maxFail', 'Lock account after failed attempts'], ['policy.lockMin', 'Lock duration (minutes)'], ['policy.idleMin', 'Sign out after inactivity (minutes)'],
    ['companyName', 'Company name'], ['companyShort', 'Short name (wordmark)']];
  saveThresholds() {
    const bad = this.thrKeys.filter(([k]) => !k.startsWith('company') && !(Number(this.thresholds[k]) > 0));
    if (bad.length) { this.toast.show(`${bad[0][1]} must be a positive number`); return; }
    if (Number(this.thresholds['slowMovingDays']) >= Number(this.thresholds['nonMovingDays'])) { this.toast.show('Slow-moving days must be less than non-moving days'); return; }
    const body: Record<string, string> = {}; this.thrKeys.forEach(([k]) => body[k] = String(this.thresholds[k] ?? ''));
    this.api.put<Record<string, string>>('/masters/settings', body).subscribe({ next: s => { this.scope.settings.set(s); this.scope.refresh(); this.toast.show('Thresholds saved â€” applied to every page'); }, error: e => this.toast.show(errMsg(e)) });
  }
}
