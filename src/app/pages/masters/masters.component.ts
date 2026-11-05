import { Component, computed, inject, signal } from '@angular/core';
import { Location } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ApiService } from '../../core/api.service';
import { AuthService as AuthSvc } from '../../core/auth.service';
import { errMsg } from '../../core/auth.interceptor';
import { MasterDataService } from '../../core/master-data.service';
import { ScopeService } from '../../core/scope.service';
import { ToastService } from '../../core/toast.service';
import { DEPTS, MAT_TYPES } from '../../core/models';
import { fmtDT, fmtV } from '../../core/format';
import { UI } from '../../shared/ui';

export interface Col {
  k: string;
  l: string;
  type?: 'text' | 'select' | 'check' | 'number' | 'email';
  opts?: () => string[];
  req?: boolean;
  key?: boolean;
}

export interface MasterDef {
  id: string;
  label: string;
  ic: string;
  desc?: string;
  table?: boolean;
  list?: boolean;
  sapReset?: boolean;
  url?: string;
  idOf?: (r: any) => string | number | undefined;
  blank?: () => any;
  cols?: Col[];
}

export interface ChangeEntry {
  sec: string;
  field?: string;
  orig?: string;
  what: string;
  at: string;
}

export interface KpiRow {
  id: string;
  name: string;
  unit: string;
  current: number | null;
  dir: '>=' | '<=';
  target: number;
  auto?: boolean;
}

export interface ContactRow {
  scope: string;
  name: string;
  email: string;
  role: string;
  receives: string;
}

export interface MatrixConfig {
  measure: string;
  pct: string;
  colorBy: string;
  rag: { g: number; y: number; r: number };
  subtotals: boolean;
  hideEmpty: boolean;
  rowsOrder: string[];
  hideRows: string[];
  colsOrder: string[];
  hideCols: string[];
  colLabels: Record<string, string>;
}

const DEFAULT_KPIS: KpiRow[] = [
  { id: 'acc', name: 'Inventory accuracy', current: 98.4, target: 98, dir: '>=', unit: '%' },
  { id: 'grn', name: 'GRN processing time', current: 18, target: 24, dir: '<=', unit: ' hrs' },
  { id: 'tat', name: 'Material issue TAT', current: 2.1, target: 4, dir: '<=', unit: ' hrs' },
  { id: 'var', name: 'Stock variance', current: 0.54, target: 1, dir: '<=', unit: '%' },
  { id: 'nm', name: 'Aged / non-moving stock', current: null, target: 5, dir: '<=', unit: '%', auto: true },
  { id: 'space', name: 'Space utilisation', current: 84, target: 85, dir: '>=', unit: '%' },
  { id: 'otif', name: 'On-time availability', current: 96.2, target: 95, dir: '>=', unit: '%' },
  { id: '5s', name: '5S & safety compliance', current: 92, target: 95, dir: '>=', unit: '%' }
];

const DEFAULT_MATRIX: MatrixConfig = {
  measure: 'value',
  pct: 'none',
  colorBy: 'rag',
  rag: { g: 15, y: 30, r: 50 },
  subtotals: true,
  hideEmpty: false,
  rowsOrder: [],
  hideRows: [],
  colsOrder: [],
  hideCols: [],
  colLabels: {}
};

const SLOC_TYPES = [
  'RM', 'PM', 'FG', 'Intermediate', 'Solvent', 'Engineering', 'Production',
  'QC', 'EHS', 'R&D', 'Job Work', 'Quality / Hold', 'Rejected / Scrap', 'Transit', 'General'
];

/** Masters Configuration page matching the Unichem Laboratories ERP reference design. */
@Component({
  standalone: true,
  imports: [FormsModule, RouterLink, ...UI],
  templateUrl: './masters.component.html'
})
export class MastersComponent {
  api = inject(ApiService);
  auth = inject(AuthSvc);
  scope = inject(ScopeService);
  private toast = inject(ToastService);
  private masterData = inject(MasterDataService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);

  sec = signal<string>('company');
  rows = signal<Record<string, any[]>>({});
  baseRows: Record<string, any[]> = {};
  deletedRows: { url: string; id: string | number }[] = [];
  dirtyRows = new Set<any>();
  dirtyLists = new Set<string>();
  dirtySettings = false;

  q = signal<Record<string, string>>({});
  changeLog = signal<ChangeEntry[]>([]);

  company = { name: 'Unichem Laboratories Ltd.', short: 'UNICHEM', logo: '' };
  baseCompany = { name: 'Unichem Laboratories Ltd.', short: 'UNICHEM', logo: '' };

  thresholds: Record<string, any> = {
    expiryDays: 180,
    agingDays: 180,
    consAgingDays: 90,
    longLyingDays: 365,
    slowMovingDays: 90,
    nonMovingDays: 180,
    qualityHoldDays: 30,
    highValueLakh: 5,
    fyStart: 4
  };
  baseThresholds: Record<string, any> = {};

  kpis = signal<KpiRow[]>(JSON.parse(JSON.stringify(DEFAULT_KPIS)));
  baseKpis: KpiRow[] = JSON.parse(JSON.stringify(DEFAULT_KPIS));

  mx = signal<MatrixConfig>(JSON.parse(JSON.stringify(DEFAULT_MATRIX)));
  baseMx: MatrixConfig = JSON.parse(JSON.stringify(DEFAULT_MATRIX));
  mxPreview = signal<any>(null);

  savedAt = signal<string>('');
  savedBy = signal<string>('');

  thrSelects: { k: string; l: string; opts: number[] }[] = [
    { k: 'expiryDays', l: 'Expiry monitoring window (days)', opts: [120, 180, 270, 365] },
    { k: 'agingDays', l: 'Aged inventory threshold (days)', opts: [90, 120, 180, 270, 365] },
    { k: 'consAgingDays', l: "Consumable 'Aging' status after (days)", opts: [60, 90, 120] },
    { k: 'longLyingDays', l: "Consumable 'Long Lying' after (days)", opts: [180, 270, 365, 540, 730] },
    { k: 'slowMovingDays', l: 'Slow-moving: no consumption for more than (days)', opts: [30, 60, 90, 120, 180] },
    { k: 'nonMovingDays', l: 'Non-moving: no consumption for more than (days)', opts: [90, 120, 180, 270, 365] },
    { k: 'qualityHoldDays', l: 'Quality hold flagged after (days)', opts: [15, 30, 45, 60] }
  ];

  mxMeasures: [string, string][] = [
    ['value', 'Total stock value (₹)'],
    ['uVal', 'Unrestricted value (₹)'],
    ['qVal', 'Quality inspection value (₹)'],
    ['bVal', 'Blocked value (₹)'],
    ['aged', 'Aged value (₹)'],
    ['exp', 'Expiring value (₹, within window)'],
    ['expd', 'Expired value (₹)'],
    ['slow', 'Slow / non-moving value (₹)'],
    ['batches', 'Number of batches'],
    ['exc', 'Exceptions (batches needing action)']
  ];

  navItems: MasterDef[] = [
    { id: 'company', label: 'Company & User', ic: 'building' },
    {
      id: 'bus', label: 'Business Units', ic: 'layers', table: true, url: '/masters/business-units', idOf: r => r._origCode || r.code,
      desc: 'Business units used for filtering and plant grouping.',
      blank: () => ({ code: '', name: '', alias: '', active: true, sortOrder: 99, _new: true }),
      cols: [
        { k: 'code', l: 'Business unit', req: true, key: true },
        { k: 'name', l: 'Description', req: true },
        { k: 'alias', l: 'Also known as (e.g. OSD)' }
      ]
    },
    {
      id: 'plants', label: 'Plants (SAP)', ic: 'factory', table: true, sapReset: true, url: '/masters/plants', idOf: r => r.id,
      desc: 'Unichem plants with SAP plant codes (WERKS). Files and SAP data carrying a plant code map automatically. Switch <b>Active</b> off to hide a plant and all its data — inventory, actions, year-wise history, KPIs, reports, exports and filters — from every screen; switch it on again to show everything again (nothing is deleted). Changes apply when you Save. Renaming a plant updates existing records and actions.',
      blank: () => ({ sapCode: '', name: '', buCode: this.buCodes()[0] || 'API', city: '', active: true, sortOrder: 99, _new: true }),
      cols: [
        { k: 'sapCode', l: 'SAP plant code' },
        { k: 'name', l: 'Plant name', req: true },
        { k: 'buCode', l: 'Business unit', type: 'select', opts: () => this.buCodes() },
        { k: 'city', l: 'Location / city' },
        { k: 'active', l: 'Active', type: 'check' }
      ]
    },
    {
      id: 'slocs', label: 'Storage Locations (SAP)', ic: 'archive', table: true, sapReset: true, url: '/masters/storage-locations', idOf: r => r.id,
      desc: 'SAP storage locations (LGORT). Codes are translated to descriptions on import. Some codes are used with different meanings in different plants (e.g. FG01, PM01, RM01) — set the Plant column to make the match plant-specific.',
      blank: () => ({ code: '', name: '', storageType: 'General', plantName: '', _new: true }),
      cols: [
        { k: 'code', l: 'SAP SLoc code' },
        { k: 'name', l: 'Description', req: true },
        { k: 'storageType', l: 'Storage type', type: 'select', opts: () => this.slocTypeOpts },
        { k: 'plantName', l: 'Plant (blank = all)', type: 'select', opts: () => this.plantOpts() }
      ]
    },
    {
      id: 'mtypes', label: 'Material Types (SAP)', ic: 'box', table: true, sapReset: true, url: '/masters/material-types', idOf: r => r.sapCode,
      desc: 'SAP material types (MTART) with Unichem number series, mapped to the six dashboard categories. “Exclude” keeps non-inventory types (capital goods, services, scrap, non-valuated) out of the dashboard. Default department applies to consumables when the material group does not decide it.',
      blank: () => ({ sapCode: '', description: '', numberSeries: '', category: 'Raw Material', department: '', _new: true }),
      cols: [
        { k: 'sapCode', l: 'Material type', req: true, key: true },
        { k: 'description', l: 'Description' },
        { k: 'numberSeries', l: 'Number series' },
        { k: 'category', l: 'Dashboard category', type: 'select', opts: () => this.catOpts },
        { k: 'department', l: 'Default department', type: 'select', opts: () => this.deptOpts }
      ]
    },
    {
      id: 'mgroups', label: 'Material Groups (SAP)', ic: 'users', table: true, sapReset: true, url: '/masters/material-groups', idOf: r => r.sapCode,
      desc: 'SAP material groups (MATKL). For consumables the group decides the department (Production, Engineering, QC, EHS, Other — no other departments without approval) and sub-category. The category column is used only when the material type does not decide it.',
      blank: () => ({ sapCode: '', description: '', category: '', department: '', subCategory: '', _new: true }),
      cols: [
        { k: 'sapCode', l: 'Material group', req: true, key: true },
        { k: 'description', l: 'Description' },
        { k: 'category', l: 'Category (fallback)', type: 'select', opts: () => this.catFallbackOpts },
        { k: 'department', l: 'Department', type: 'select', opts: () => this.deptOpts },
        { k: 'subCategory', l: 'Sub-category' }
      ]
    },
    {
      id: 'functions', label: 'Responsible Functions', ic: 'sliders', table: true, list: true,
      desc: 'Functions that can own actions.',
      blank: () => ({ v: '', _new: true }),
      cols: [{ k: 'v', l: 'Function', req: true }]
    },
    {
      id: 'persons', label: 'Responsible Persons', ic: 'users', table: true, url: '/masters/persons', idOf: r => r.id,
      desc: 'People who can be assigned as action owners — shown as suggestions in the action form.',
      blank: () => ({ name: '', functionName: this.functionNames()[0] || 'Stores', email: '', _new: true }),
      cols: [
        { k: 'name', l: 'Name', req: true },
        { k: 'functionName', l: 'Function', type: 'select', opts: () => this.functionNames() },
        { k: 'email', l: 'Email', type: 'email' }
      ]
    },
    {
      id: 'acttypes', label: 'Action Types', ic: 'check', table: true, list: true,
      desc: 'Corrective action types offered when assigning an action.',
      blank: () => ({ v: '', _new: true }),
      cols: [{ k: 'v', l: 'Action type', req: true }]
    },
    {
      id: 'contacts', label: 'Notification Contacts', ic: 'users', table: true,
      desc: 'People who receive action emails for a plant, a business unit or all plants — in addition to the responsible person, function users and the Plant / BU heads set in Users &amp; Access. Configure delivery in Configuration → Email Notifications.',
      blank: () => ({ scope: 'ALL', name: '', email: '', role: 'Plant Head', receives: 'All', _new: true }),
      cols: [
        { k: 'scope', l: 'Plant / BU', type: 'select', opts: () => this.contactScopeOpts() },
        { k: 'name', l: 'Name', req: true },
        { k: 'email', l: 'Email', type: 'email', req: true },
        { k: 'role', l: 'Role', type: 'select', opts: () => this.contactRoleOpts },
        { k: 'receives', l: 'Receives', type: 'select', opts: () => this.contactReceivesOpts }
      ]
    },
    { id: 'thresholds', label: 'Thresholds', ic: 'clock' },
    { id: 'matrix', label: 'Matrix View', ic: 'grid' },
    { id: 'kpi', label: 'KPI Targets', ic: 'target' },
    { id: 'save', label: 'Save', ic: 'check' }
  ];

  isDirty = computed(() => this.changeLog().length > 0);

  currentDef = computed(() => this.navItems.find(d => d.id === this.sec()) || this.navItems[0]);

  constructor() {
    this.loadLocalExtras();
    this.reload();

    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe(p => {
      const tab = p.get('tab') || p.get('sec');
      if (tab && this.navItems.some(d => d.id === tab)) {
        this.sec.set(tab);
        if (tab === 'matrix') this.loadMatrixPreview();
      }
      const qVal = p.get('q');
      if (qVal !== null && tab) this.setQ(tab, qVal);
    });
  }

  private loadLocalExtras() {
    try {
      const k = localStorage.getItem('unichem_masters_kpis');
      if (k) {
        this.kpis.set(JSON.parse(k));
        this.baseKpis = JSON.parse(k);
      }
      const m = localStorage.getItem('unichem_masters_matrix');
      if (m) {
        const parsed = { ...DEFAULT_MATRIX, ...JSON.parse(m) };
        this.mx.set(parsed);
        this.baseMx = JSON.parse(JSON.stringify(parsed));
      }
    } catch {}
  }

  reload() {
    const cachedM = this.scope.masters();
    if (cachedM && Object.keys(this.rows()).length === 0) {
      this.applyMasters(cachedM);
    }
    const cachedS = this.scope.settings();
    if (cachedS && Object.keys(cachedS).length > 0 && !this.savedAt()) {
      this.applySettings(cachedS);
    }

    this.api.masters().subscribe(m => {
      this.scope.masters.set(m);
      this.applyMasters(m);
    });

    this.api.settings().subscribe(s => {
      this.scope.settings.set(s);
      this.applySettings(s);
    });
  }

  private applyMasters(m: any) {
    let contacts: ContactRow[] = [];
    try {
      const cStr = localStorage.getItem('unichem_masters_contacts');
      if (cStr) contacts = JSON.parse(cStr);
    } catch {}

    const r: Record<string, any[]> = {
      bus: (m.businessUnits ?? []).map((x: any) => ({ ...x, _origCode: x.code, _new: false })),
      plants: (m.plants ?? []).map((x: any) => ({ ...x, _origName: x.name, _new: false })),
      slocs: (m.storageLocations ?? []).map((x: any) => ({ ...x, _new: false })),
      mtypes: (m.materialTypes ?? []).map((x: any) => ({ ...x, _origSapCode: x.sapCode, _new: false })),
      mgroups: (m.materialGroups ?? []).map((x: any) => ({ ...x, _origSapCode: x.sapCode, _new: false })),
      functions: (m.functions ?? []).map((v: string) => ({ v, _new: false })),
      persons: (m.persons ?? []).map((x: any) => ({ ...x, _new: false })),
      acttypes: (m.actionTypes ?? []).map((v: string) => ({ v, _new: false })),
      contacts: contacts.map(x => ({ ...x, _new: false }))
    };
    this.rows.set(r);
    this.baseRows = JSON.parse(JSON.stringify(r));
    this.deletedRows = [];
    this.dirtyRows.clear();
    this.dirtyLists.clear();
  }

  private applySettings(s: Record<string, string>) {
    const logo = localStorage.getItem('unichem_company_logo') || s['companyLogo'] || '';
    this.company = {
      name: s['companyName'] || 'Unichem Laboratories Ltd.',
      short: s['companyShort'] || 'UNICHEM',
      logo
    };
    this.baseCompany = { ...this.company };

    const n = (k: string, d: number) => Number(s[k] ?? d) || d;
    const hv = n('highValue', 500000);
    this.thresholds = {
      expiryDays: n('expiryDays', 180),
      agingDays: n('agingDays', 180),
      consAgingDays: n('consAgingDays', 90),
      longLyingDays: n('longLyingDays', 365),
      slowMovingDays: n('slowMovingDays', 90),
      nonMovingDays: n('nonMovingDays', 180),
      qualityHoldDays: n('qualityHoldDays', 30),
      highValueLakh: +(hv / 1e5).toFixed(2),
      fyStart: n('fyStart', 4)
    };
    this.baseThresholds = { ...this.thresholds };

    const svAt = s['mastersSavedAt'] || localStorage.getItem('unichem_masters_saved_at') || '2026-11-04T15:55:00.000Z';
    const svBy = s['mastersSavedBy'] || localStorage.getItem('unichem_masters_saved_by') || (this.auth.me()?.username || 'test');
    this.savedAt.set(svAt);
    this.savedBy.set(svBy);
    this.dirtySettings = false;
  }

  lastSavedText = computed(() => {
    const at = this.savedAt();
    const by = this.savedBy();
    if (!at) return 'No unsaved changes';
    return `Last saved ${fmtDT(at)}${by ? ' by ' + by : ''}`;
  });

  goBack() {
    this.location.back();
  }

  selectSec(id: string) {
    this.sec.set(id);
    if (id === 'matrix') this.loadMatrixPreview();
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { tab: id === 'company' ? null : id, q: null },
      replaceUrl: true
    });
  }

  navCount(id: string): string | number {
    if (id === 'save') return this.changeLog().length || '';
    const d = this.navItems.find(x => x.id === id);
    if (!d?.table) return '';
    return (this.rows()[id] ?? []).length;
  }

  buCodes = computed<string[]>(() => (this.rows()['bus'] ?? []).map(b => b.code).filter(Boolean));

  plantNames = computed<string[]>(() => (this.rows()['plants'] ?? []).map(p => p.name).filter(Boolean));

  functionNames = computed<string[]>(() => (this.rows()['functions'] ?? []).map(f => f.v).filter(Boolean));

  plantOpts = computed<string[]>(() => ['', ...this.plantNames()]);

  catOpts = [...MAT_TYPES, 'Exclude'];
  catFallbackOpts = ['', ...MAT_TYPES, 'Exclude'];
  deptOpts = ['', ...DEPTS];
  slocTypeOpts = SLOC_TYPES;
  contactScopeOpts = computed<string[]>(() => ['ALL', ...this.buCodes(), ...this.plantNames()]);
  contactRoleOpts = ['Plant Head', 'BU Head', 'Stores Head', 'QA / QC', 'Function Head', 'Finance', 'Other'];
  contactReceivesOpts = ['All', 'P1 only', 'New & escalations', 'Escalations only', 'Closures only'];

  filteredRows(id: string): any[] {
    const q = (this.q()[id] || '').trim().toLowerCase();
    const all = this.rows()[id] ?? [];
    if (!q) return all;
    return all.filter(r => Object.values(r).join(' ').toLowerCase().includes(q));
  }

  setQ(id: string, v: string) {
    this.q.update(curr => ({ ...curr, [id]: v }));
  }

  logChange(secLabel: string, label: string, oldV: any, newV: any, fieldId?: string) {
    const list = [...this.changeLog()];
    const fmt = (v: any) => (v === '' || v === null || v === undefined ? '(blank)' : v === true ? 'Yes' : v === false ? 'No' : String(v));
    const last = list[0];
    if (fieldId && last && last.field === fieldId) {
      last.what = `${label}: ${last.orig || '(blank)'} → ${fmt(newV)}`;
      last.at = new Date().toISOString();
      if (String(last.orig) === fmt(newV)) {
        list.shift();
      }
    } else {
      list.unshift({
        sec: secLabel,
        field: fieldId,
        orig: fmt(oldV),
        what: `${label}: ${fmt(oldV)} → ${fmt(newV)}`,
        at: new Date().toISOString()
      });
    }
    this.changeLog.set(list);
  }

  onCompanyChange(field: 'name' | 'short', label: string, val: string) {
    const old = this.baseCompany[field];
    this.company[field] = val;
    this.dirtySettings = true;
    this.logChange('Company', label, old, val, `co|${field}`);
  }

  onLogoPick(ev: Event) {
    const f = (ev.target as HTMLInputElement).files?.[0];
    if (!f) return;
    if (f.size > 300 * 1024) {
      alert('Please use a logo under 300 KB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const old = this.company.logo ? 'Logo' : '(none)';
      this.company.logo = String(reader.result || '');
      this.dirtySettings = true;
      this.logChange('Company', 'Logo', old, f.name, 'co|logo');
      this.toast.show('Logo changed (unsaved)');
    };
    reader.readAsDataURL(f);
  }

  removeLogo() {
    this.company.logo = '';
    this.dirtySettings = true;
    this.logChange('Company', 'Logo', 'Logo', '(removed)', 'co|logo');
  }

  onCellChange(def: MasterDef, row: any, idx: number, col: Col, newVal: any) {
    if (def.id === 'bus' && col.k === 'code') {
      const prevCode = String(row._prevCode ?? row._origCode ?? '').trim();
      const nextCode = String(newVal ?? '').trim();
      if (prevCode && nextCode && prevCode !== nextCode) {
        const plantsList = this.rows()['plants'] ?? [];
        let moved = false;
        plantsList.forEach(p => {
          if (p.buCode === prevCode) {
            p.buCode = nextCode;
            this.dirtyRows.add(p);
            moved = true;
          }
        });
        if (moved) {
          this.rows.update(r => ({ ...r, plants: [...plantsList] }));
        }
      }
      row._prevCode = nextCode;
    }

    if (def.list) {
      this.dirtyLists.add(def.id);
    } else {
      this.dirtyRows.add(row);
    }
    const rowLabel = def.list ? `row ${idx + 1}` : (row[def.cols?.[0]?.k || 'name'] || row.name || `row ${idx + 1}`);
    this.logChange(def.label, `${rowLabel} · ${col.l}`, '', newVal, `${def.id}|${idx}|${col.k}`);
  }

  isRowDirty(row: any): boolean {
    return Boolean(row?._new || this.dirtyRows.has(row));
  }

  saveRow(def: MasterDef, row: any, idx: number) {
    if (!def.url || def.list) {
      this.saveAllMasters();
      return;
    }
    // Validate required fields for this row
    const missing = (def.cols ?? []).filter(c => c.req && !String(row[c.k] ?? '').trim()).map(c => c.l);
    if (missing.length) {
      this.toast.show(`Please fill required field(s): ${missing.join(', ')}`);
      return;
    }

    if (def.id === 'bus') {
      const code = String(row.code ?? '').trim();
      const desc = String(row.name ?? '').trim() || code;
      row.code = code;
      row.name = desc;
      const allBus = this.rows()['bus'] ?? [];
      const dup = allBus.some(b => b !== row && String(b.code ?? '').trim().toLowerCase() === code.toLowerCase());
      if (dup) {
        this.toast.show(`Business Unit "${code}" already exists.`);
        return;
      }
      const origCode = String(row._origCode ?? '').trim();
      const payload = {
        code,
        name: desc,
        alias: String(row.alias ?? '').trim() || null,
        active: row.active !== false,
        sortOrder: row.sortOrder ?? (idx + 1)
      };

      this.api.post('/masters/business-units', payload).pipe(
        switchMap((): Observable<any> => {
          if (origCode && origCode !== code) {
            // Migrate any associated plants to the new BU code before deleting the old BU code
            const plantsToMove = (this.rows()['plants'] ?? []).filter(
              p => p.buCode === origCode || p.buCode === code
            );
            const plantCalls = plantsToMove.map(p => {
              p.buCode = code;
              const { _new, _origName, _origCode, _origSapCode, _prevCode, ...pBody } = p;
              return this.api.post('/masters/plants', pBody);
            });
            const step1: Observable<any> = plantCalls.length ? forkJoin(plantCalls) : of(null);
            return step1.pipe(
              switchMap((): Observable<any> => this.api.delete(`/masters/business-units/${encodeURIComponent(origCode)}`).pipe(catchError(() => of(null))))
            );
          }
          return of(null);
        })
      ).subscribe({
        next: () => {
          row._new = false;
          row._origCode = code;
          row._prevCode = code;
          this.dirtyRows.delete(row);
          this.baseRows['bus'] = JSON.parse(JSON.stringify(this.rows()['bus'] ?? []));
          if (!this.dirtyRows.size && !this.dirtyLists.size && !this.deletedRows.length && !this.dirtySettings) {
            this.changeLog.set([]);
          }
          this.reload();
          this.scope.load();
          this.scope.refresh();
          this.masterData.refresh();
          this.toast.show(`Business Unit "${code}" saved`);
        },
        error: e => this.toast.show(errMsg(e))
      });
      return;
    }

    const { _new, _origCode, _origName, _origSapCode, _prevCode, ...body } = row;
    Object.keys(body).forEach(k => { if (body[k] === '') body[k] = null; });
    if (def.id === 'plants' && body.active === undefined) body.active = true;

    this.api.post(def.url, body).subscribe({
      next: (saved: any) => {
        if (saved && typeof saved === 'object') {
          Object.assign(row, saved);
        }
        row._new = false;
        if (row.code) row._origCode = row.code;
        if (row.name) row._origName = row.name;
        if (row.sapCode) row._origSapCode = row.sapCode;
        this.dirtyRows.delete(row);
        this.baseRows[def.id] = JSON.parse(JSON.stringify(this.rows()[def.id] ?? []));
        if (!this.dirtyRows.size && !this.dirtyLists.size && !this.deletedRows.length && !this.dirtySettings) {
          this.changeLog.set([]);
        }
        this.reload();
        this.scope.load();
        this.scope.refresh();
        this.masterData.refresh();
        this.toast.show(`${def.label} row saved`);
      },
      error: e => this.toast.show(errMsg(e))
    });
  }

  addRow(def: MasterDef) {
    if (!def.blank) return;
    const newRow = def.blank();
    const list = [...(this.rows()[def.id] ?? []), newRow];
    this.rows.update(r => ({ ...r, [def.id]: list }));
    if (def.list) this.dirtyLists.add(def.id);
    else this.dirtyRows.add(newRow);

    this.changeLog.update(l => [
      { sec: def.label, what: `Row ${list.length} added`, at: new Date().toISOString() },
      ...l
    ]);
  }

  removeRow(def: MasterDef, row: any, idx: number) {
    if (def.id === 'bus') {
      const buCode = String(row.code || row._origCode || '').trim();
      const origCode = String(row._origCode || row.code || '').trim();
      const plantsList = this.rows()['plants'] ?? [];
      const associated = plantsList.filter(p => {
        const pBu = String(p.buCode || '').trim().toLowerCase();
        return (buCode && pBu === buCode.toLowerCase()) || (origCode && pBu === origCode.toLowerCase());
      });
      if (associated.length > 0) {
        const names = associated.map(p => p.name).join(', ');
        this.toast.show(`Cannot delete Business Unit "${buCode || origCode}" — ${associated.length} plant(s) are associated (${names}). Move or delete its plants first.`);
        return;
      }
      if (!confirm(`Delete Business Unit "${buCode || 'this row'}"?`)) return;

      const list = (this.rows()['bus'] ?? []).filter(x => x !== row);
      this.rows.update(r => ({ ...r, bus: list }));
      this.dirtyRows.delete(row);

      if (!row._new && origCode) {
        this.api.delete(`/masters/business-units/${encodeURIComponent(origCode)}`).subscribe({
          next: () => {
            this.baseRows['bus'] = JSON.parse(JSON.stringify(this.rows()['bus'] ?? []));
            if (!this.dirtyRows.size && !this.dirtyLists.size && !this.deletedRows.length && !this.dirtySettings) {
              this.changeLog.set([]);
            }
            this.reload();
            this.scope.load();
            this.scope.refresh();
            this.masterData.refresh();
            this.toast.show(`Business Unit "${origCode}" deleted`);
          },
          error: e => {
            this.reload();
            this.toast.show(errMsg(e));
          }
        });
      } else {
        if (!this.dirtyRows.size && !this.dirtyLists.size && !this.deletedRows.length && !this.dirtySettings) {
          this.changeLog.set([]);
        }
        this.toast.show('Draft Business Unit row removed');
      }
      return;
    }

    if (!confirm('Delete this row?')) return;
    const list = (this.rows()[def.id] ?? []).filter(x => x !== row);
    this.rows.update(r => ({ ...r, [def.id]: list }));

    if (def.list) {
      this.dirtyLists.add(def.id);
    } else if (!row._new && def.url && def.idOf) {
      const id = def.idOf(row);
      if (id !== undefined && id !== null && id !== '') {
        this.deletedRows.push({ url: def.url, id });
      }
      this.dirtyRows.delete(row);
    }

    const desc = def.list ? row.v : (row[def.cols?.[0]?.k || 'name'] || row.name || `row ${idx + 1}`);
    this.changeLog.update(l => [
      { sec: def.label, what: `Row deleted — ${desc}`, at: new Date().toISOString() },
      ...l
    ]);
    this.toast.show('Row deleted (unsaved)');
  }

  resetSapMaster(def: MasterDef) {
    if (!confirm(`Reload ${def.label} from the SAP master?\nSAP rows are restored to their default mapping.`)) return;
    this.api.masters().subscribe(m => {
      const map: Record<string, any[]> = {
        plants: m.plants ?? [],
        slocs: m.storageLocations ?? [],
        mtypes: m.materialTypes ?? [],
        mgroups: m.materialGroups ?? []
      };
      if (map[def.id]) {
        const fresh = map[def.id].map(x => ({ ...x, _new: false }));
        this.rows.update(r => ({ ...r, [def.id]: fresh }));
        this.changeLog.update(l => [
          { sec: def.label, what: `Reset to SAP master — ${fresh.length} SAP rows`, at: new Date().toISOString() },
          ...l
        ]);
        this.toast.show(`${def.label} reset (unsaved) — review and Save`);
      }
    });
  }

  exportCsv(def: MasterDef) {
    const cols = def.cols ?? [];
    const header = cols.map(c => c.l);
    const data = (this.rows()[def.id] ?? []).map(r =>
      cols.map(c => (c.type === 'check' ? (r[c.k] !== false ? 'Yes' : 'No') : (r[c.k] ?? '')))
    );
    this.downloadCsv(`master_${def.id}.csv`, header, data);
  }

  importCsv(def: MasterDef, inputEl: HTMLInputElement) {
    const f = inputEl.files?.[0];
    inputEl.value = '';
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const text = String(reader.result || '');
        const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
        if (lines.length < 2) throw new Error('File has no data rows.');
        const parseLine = (line: string) => {
          const out: string[] = [];
          let cur = '';
          let inQuotes = false;
          for (let i = 0; i < line.length; i++) {
            const ch = line[i];
            if (ch === '"') {
              if (inQuotes && line[i + 1] === '"') { cur += '"'; i++; }
              else inQuotes = !inQuotes;
            } else if (ch === ',' && !inQuotes) {
              out.push(cur.trim()); cur = '';
            } else cur += ch;
          }
          out.push(cur.trim());
          return out;
        };
        const headers = parseLine(lines[0]);
        const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');
        const cols = def.cols ?? [];
        const imported = lines.slice(1).map(line => {
          const vals = parseLine(line);
          const obj: any = { _new: true };
          cols.forEach((c, idx) => {
            const hIdx = headers.findIndex(h => norm(h) === norm(c.l) || norm(h) === norm(c.k));
            const raw = hIdx >= 0 ? vals[hIdx] : (vals[idx] ?? '');
            obj[c.k] = c.type === 'check' ? !/^(no|false|0|n)$/i.test(raw) : raw;
          });
          return obj;
        }).filter(o => cols.filter(c => c.req).every(c => String(o[c.k] ?? '').trim() !== ''));

        if (!imported.length) throw new Error('No valid rows found. Use the column headers from Export CSV.');
        const mode = confirm(`${imported.length} rows found.\n\nOK = replace this master\nCancel = add to existing rows`) ? 'replace' : 'add';
        const cur = this.rows()[def.id] ?? [];
        const next = mode === 'replace' ? imported : [...cur, ...imported];
        this.rows.update(r => ({ ...r, [def.id]: next }));
        if (def.list) this.dirtyLists.add(def.id);
        else imported.forEach(x => this.dirtyRows.add(x));

        this.changeLog.update(l => [
          { sec: def.label, what: `${imported.length} rows imported from ${f.name} (${mode})`, at: new Date().toISOString() },
          ...l
        ]);
        this.toast.show(`${imported.length} rows imported (unsaved) — review and Save`);
      } catch (e: any) {
        alert('Import failed: ' + (e?.message || e));
      }
    };
    reader.readAsText(f);
  }

  onThresholdChange(key: string, label: string, val: any) {
    const old = this.thresholds[key];
    this.thresholds[key] = Number(val);
    this.dirtySettings = true;
    const fmtVal = (k: string, v: any) => (k === 'highValueLakh' ? fmtV(Number(v) * 1e5) : `${v}${/Days$/.test(k) ? ' days' : ''}`);
    this.logChange('Thresholds', label, fmtVal(key, old), fmtVal(key, val), `thr|${key}`);
  }

  onKpiChange(idx: number, field: keyof KpiRow, val: any) {
    const list = [...this.kpis()];
    const row = { ...list[idx] };
    const old = row[field];
    if (field === 'current' || field === 'target') {
      (row as any)[field] = val === '' || val === null ? null : Number(val);
    } else {
      (row as any)[field] = val;
    }
    list[idx] = row;
    this.kpis.set(list);
    this.logChange('KPI targets', `${row.name} · ${field}`, old, row[field], `kpi|${idx}|${field}`);
  }

  // ---- Matrix View Master configuration ----
  loadMatrixPreview() {
    this.api.matrix(this.mx().measure, this.scope.filter()).subscribe(r => this.mxPreview.set(r));
  }

  mxAllRows = computed(() => {
    const cfg = this.mx();
    const all = this.plantNames();
    const ord = cfg.rowsOrder.filter(p => all.includes(p));
    return [...ord, ...all.filter(p => !ord.includes(p))];
  });

  mxAllCols = computed(() => {
    const cfg = this.mx();
    const all = [...MAT_TYPES];
    const ord = cfg.colsOrder.filter(c => all.includes(c as any));
    return [...ord, ...all.filter(c => !ord.includes(c))];
  });

  mxShownRowsCount = computed(() => {
    const cfg = this.mx();
    const all = this.mxAllRows();
    return all.length - cfg.hideRows.filter(r => all.includes(r)).length;
  });

  mxShownColsCount = computed(() => {
    const cfg = this.mx();
    return this.mxAllCols().length - cfg.hideCols.length;
  });

  plantBu(name: string): string {
    const p = (this.rows()['plants'] ?? []).find(x => x.name === name);
    return p?.buCode || '—';
  }

  updateMx<K extends keyof MatrixConfig>(key: K, label: string, val: MatrixConfig[K]) {
    const next = { ...this.mx(), [key]: val };
    this.mx.set(next);
    this.logChange('Matrix view', label, '', String(val), `mx|${String(key)}`);
    if (key === 'measure') this.loadMatrixPreview();
  }

  updateMxRag(band: 'g' | 'y' | 'r', label: string, val: number) {
    const v = Math.max(1, Math.min(100, Number(val) || 0));
    const cur = this.mx().rag;
    const nextRag = { ...cur, [band]: v };
    if (!(nextRag.g < nextRag.y && nextRag.y < nextRag.r)) {
      this.toast.show('Thresholds must increase: Green < Yellow < Red');
      return;
    }
    this.mx.set({ ...this.mx(), rag: nextRag });
    this.logChange('Matrix view', `${label} threshold`, cur[band] + '%', v + '%', `mx|rag|${band}`);
  }

  toggleMxItem(kind: 'row' | 'col', item: string, checked: boolean) {
    const cfg = { ...this.mx() };
    const key = kind === 'row' ? 'hideRows' : 'hideCols';
    cfg[key] = cfg[key].filter(x => x !== item);
    if (!checked) cfg[key] = [...cfg[key], item];
    this.mx.set(cfg);
    this.logChange('Matrix view', `${kind === 'row' ? 'Row' : 'Column'} ${item}`, checked ? 'hidden' : 'shown', checked ? 'shown' : 'hidden', `mx|${key}|${item}`);
  }

  moveMxItem(kind: 'row' | 'col', idx: number, dir: -1 | 1) {
    const arr = (kind === 'row' ? this.mxAllRows() : this.mxAllCols()).slice();
    const target = idx + dir;
    if (target < 0 || target >= arr.length) return;
    [arr[idx], arr[target]] = [arr[target], arr[idx]];
    const cfg = { ...this.mx() };
    if (kind === 'row') cfg.rowsOrder = arr;
    else cfg.colsOrder = arr;
    this.mx.set(cfg);
    this.logChange('Matrix view', `${kind === 'row' ? 'Row' : 'Column'} order`, 'previous', 're-ordered', `mx|order|${kind}`);
  }

  setMxColLabel(col: string, val: string) {
    const cfg = { ...this.mx(), colLabels: { ...this.mx().colLabels } };
    const v = val.trim();
    if (v) cfg.colLabels[col] = v;
    else delete cfg.colLabels[col];
    this.mx.set(cfg);
    this.logChange('Matrix view', `Label ${col}`, col, v || col, `mx|lbl|${col}`);
  }

  resetMxOrderAndLabels() {
    this.mx.set({ ...this.mx(), rowsOrder: [], colsOrder: [], colLabels: {} });
    this.logChange('Matrix view', 'Order & labels', 'custom', 'reset', 'mx|reset');
  }

  mxFmt(v: number): string {
    if (!v) return '—';
    const isVal = !['batches', 'exc'].includes(this.mx().measure);
    return isVal ? fmtV(v) : Number(v).toLocaleString('en-IN');
  }

  mxRagOf(share: number | null): string {
    if (share === null || share === undefined) return '';
    const p = share * 100;
    const r = this.mx().rag;
    return p < r.g ? 'g' : p < r.y ? 'y' : p < r.r ? 'r' : 'dr';
  }

  // ---- Diff summary & Save / Discard ----
  diffSummary = computed(() => {
    if (!this.isDirty()) return [];
    const out: { lbl: string; text: string; rows: string }[] = [];
    if (JSON.stringify(this.company) !== JSON.stringify(this.baseCompany)) {
      const parts: string[] = [];
      if (this.company.name !== this.baseCompany.name) parts.push(`Company name: ${this.baseCompany.name} → ${this.company.name}`);
      if (this.company.short !== this.baseCompany.short) parts.push(`Short name: ${this.baseCompany.short} → ${this.company.short}`);
      if (this.company.logo !== this.baseCompany.logo) parts.push('Logo changed');
      if (parts.length) out.push({ lbl: 'Company', text: parts.join(' · '), rows: '' });
    }
    this.navItems.filter(d => d.table).forEach(d => {
      const a = this.baseRows[d.id] ?? [];
      const b = this.rows()[d.id] ?? [];
      const strip = (arr: any[]) => arr.map(({ _new, _origCode, _origName, _origSapCode, _prevCode, ...rest }) => JSON.stringify(rest));
      const A = strip(a);
      const B = strip(b);
      if (JSON.stringify(A) === JSON.stringify(B)) return;
      const add = B.filter(x => !A.includes(x)).length;
      const del = A.filter(x => !B.includes(x)).length;
      const ch = Math.min(add, del);
      const text = [ch && `${ch} changed`, add - ch && `${add - ch} added`, del - ch && `${del - ch} removed`].filter(Boolean).join(' · ') || 're-ordered';
      out.push({ lbl: d.label, text, rows: `${a.length} → ${b.length} rows` });
    });
    if (JSON.stringify(this.thresholds) !== JSON.stringify(this.baseThresholds)) {
      out.push({ lbl: 'Thresholds', text: 'Updated exception thresholds', rows: '' });
    }
    if (JSON.stringify(this.mx()) !== JSON.stringify(this.baseMx)) {
      out.push({ lbl: 'Matrix view', text: 'Updated matrix configuration', rows: '' });
    }
    if (JSON.stringify(this.kpis()) !== JSON.stringify(this.baseKpis)) {
      out.push({ lbl: 'KPI targets', text: 'Updated store performance targets', rows: '' });
    }
    return out;
  });

  saveAllMasters() {
    if (!this.isDirty()) return;

    // Default blank Business Unit description to its code if needed
    const busList = this.rows()['bus'] ?? [];
    busList.forEach(b => {
      if (String(b.code ?? '').trim() && !String(b.name ?? '').trim()) {
        b.name = String(b.code).trim();
      }
    });

    // Check duplicate Business Unit names
    const seenBus = new Set<string>();
    for (let i = 0; i < busList.length; i++) {
      const code = String(busList[i].code ?? '').trim();
      if (!code) continue;
      const lower = code.toLowerCase();
      if (seenBus.has(lower)) {
        this.toast.show(`Duplicate Business Unit "${code}" at row ${i + 1} is not allowed.`);
        return;
      }
      seenBus.add(lower);
    }

    // Check required fields across all tables
    const blanks: string[] = [];
    this.navItems.filter(d => d.table).forEach(d => {
      const list = this.rows()[d.id] ?? [];
      list.forEach((r, idx) => {
        (d.cols ?? []).filter(c => c.req).forEach(c => {
          if (!String(r[c.k] ?? '').trim()) {
            blanks.push(`${d.label} row ${idx + 1}: ${c.l}`);
          }
        });
      });
    });
    if (blanks.length) {
      alert(`Please fill required fields before saving:\n• ${blanks.slice(0, 8).join('\n• ')}`);
      return;
    }

    const buCalls: Observable<any>[] = [];
    const otherCalls: Observable<any>[] = [];
    const delCalls: Observable<any>[] = [];

    // 1. Business Units first (so new/renamed BUs exist before Plants reference them)
    const renamedOldBuCodes: string[] = [];
    busList.forEach((r, idx) => {
      if (this.dirtyRows.has(r) || r._new) {
        const code = String(r.code ?? '').trim();
        const origCode = String(r._origCode ?? '').trim();
        if (origCode && origCode !== code) {
          renamedOldBuCodes.push(origCode);
          // Ensure any plants still referencing origCode are moved to the new code
          (this.rows()['plants'] ?? []).forEach(p => {
            if (p.buCode === origCode) {
              p.buCode = code;
              this.dirtyRows.add(p);
            }
          });
        }
        const payload = {
          code,
          name: String(r.name ?? '').trim() || code,
          alias: String(r.alias ?? '').trim() || null,
          active: r.active !== false,
          sortOrder: r.sortOrder ?? (idx + 1)
        };
        buCalls.push(this.api.post('/masters/business-units', payload));
      }
    });

    // 2. Modified/new table rows (Plants, Storage Locations, Material Types, Material Groups, Persons)
    this.navItems.filter(d => d.table && !d.list && d.url && d.id !== 'bus').forEach(d => {
      const list = this.rows()[d.id] ?? [];
      list.forEach(r => {
        if (this.dirtyRows.has(r) || r._new) {
          const { _new, _origCode, _origName, _origSapCode, _prevCode, ...body } = r;
          Object.keys(body).forEach(k => { if (body[k] === '') body[k] = null; });
          if (d.id === 'plants' && body.active === undefined) body.active = true;
          otherCalls.push(this.api.post(d.url!, body));
        }
      });
    });

    // 3. Lists (functions & actionTypes)
    if (this.dirtyLists.has('functions')) {
      const fns = (this.rows()['functions'] ?? []).map(x => String(x.v || '').trim()).filter(Boolean);
      if (fns.length) otherCalls.push(this.api.put('/masters/lists/functions', fns));
    }
    if (this.dirtyLists.has('acttypes')) {
      const acts = (this.rows()['acttypes'] ?? []).map(x => String(x.v || '').trim()).filter(Boolean);
      if (acts.length) otherCalls.push(this.api.put('/masters/lists/actionTypes', acts));
    }

    // 4. Settings & thresholds
    const nowIso = new Date().toISOString();
    const byUser = this.auth.me()?.username || this.auth.me()?.name || 'test';
    const settingsPayload: Record<string, string> = {
      companyName: this.company.name.trim() || 'Unichem Laboratories Ltd.',
      companyShort: this.company.short.trim() || 'UNICHEM',
      expiryDays: String(this.thresholds['expiryDays']),
      agingDays: String(this.thresholds['agingDays']),
      consAgingDays: String(this.thresholds['consAgingDays']),
      longLyingDays: String(this.thresholds['longLyingDays']),
      slowMovingDays: String(this.thresholds['slowMovingDays']),
      nonMovingDays: String(this.thresholds['nonMovingDays']),
      qualityHoldDays: String(this.thresholds['qualityHoldDays']),
      highValue: String(Math.max(10000, Math.round(Number(this.thresholds['highValueLakh']) * 1e5))),
      fyStart: String(this.thresholds['fyStart'] || 4),
      mastersSavedAt: nowIso,
      mastersSavedBy: byUser
    };
    otherCalls.push(this.api.put('/masters/settings', settingsPayload));

    // 5. Deletions (after updates so moved plants no longer block old BU deletion)
    this.deletedRows.forEach(del => {
      delCalls.push(this.api.delete(`${del.url}/${encodeURIComponent(String(del.id))}`).pipe(catchError(() => of(null))));
    });
    renamedOldBuCodes.forEach(oldCode => {
      delCalls.push(this.api.delete(`/masters/business-units/${encodeURIComponent(oldCode)}`).pipe(catchError(() => of(null))));
    });

    // Save client-side extras to localStorage
    try {
      if (this.company.logo) localStorage.setItem('unichem_company_logo', this.company.logo);
      else localStorage.removeItem('unichem_company_logo');
      localStorage.setItem('unichem_masters_contacts', JSON.stringify((this.rows()['contacts'] ?? []).map(({ _new, ...rest }) => rest)));
      localStorage.setItem('unichem_masters_kpis', JSON.stringify(this.kpis()));
      localStorage.setItem('unichem_masters_matrix', JSON.stringify(this.mx()));
      localStorage.setItem('unichem_masters_saved_at', nowIso);
      localStorage.setItem('unichem_masters_saved_by', byUser);
    } catch {}

    const count = this.changeLog().length;
    const stepBu: Observable<any> = buCalls.length ? forkJoin(buCalls) : of(null);
    const stepOther = (): Observable<any> => otherCalls.length ? forkJoin(otherCalls) : of(null);
    const stepDel = (): Observable<any> => delCalls.length ? forkJoin(delCalls) : of(null);

    stepBu.pipe(
      switchMap(() => stepOther()),
      switchMap(() => stepDel())
    ).subscribe({
      next: () => {
        this.changeLog.set([]);
        this.savedAt.set(nowIso);
        this.savedBy.set(byUser);
        this.reload();
        this.scope.load();
        this.scope.refresh();
        this.masterData.refresh();
        this.toast.show(`Master configuration saved — ${count} change(s) committed`);
      },
      error: (e: any) => this.toast.show(errMsg(e))
    });
  }

  discardAll() {
    if (!this.isDirty()) return;
    if (!confirm(`Discard ${this.changeLog().length} unsaved master change(s)? The last saved configuration is restored.`)) return;
    this.rows.set(JSON.parse(JSON.stringify(this.baseRows)));
    this.company = { ...this.baseCompany };
    this.thresholds = { ...this.baseThresholds };
    this.kpis.set(JSON.parse(JSON.stringify(this.baseKpis)));
    this.mx.set(JSON.parse(JSON.stringify(this.baseMx)));
    this.deletedRows = [];
    this.dirtyRows.clear();
    this.dirtyLists.clear();
    this.dirtySettings = false;
    this.changeLog.set([]);
    this.toast.show('Changes discarded');
  }

  exportAllMasters() {
    const payload = {
      type: 'unichem-inventory-masters',
      exported: new Date().toISOString(),
      company: this.company,
      thresholds: this.thresholds,
      rows: this.rows(),
      kpis: this.kpis(),
      matrix: this.mx()
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'unichem_inventory_masters.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  importAllMasters(inputEl: HTMLInputElement) {
    const f = inputEl.files?.[0];
    inputEl.value = '';
    if (!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const o = JSON.parse(String(reader.result || ''));
        if (o.type !== 'unichem-inventory-masters') throw new Error('Not a valid Unichem masters JSON file');
        if (!confirm('Load the masters from this file? They are added as unsaved changes — review and Save to commit.')) return;
        if (o.company) this.company = { ...this.company, ...o.company };
        if (o.thresholds) this.thresholds = { ...this.thresholds, ...o.thresholds };
        if (o.rows) {
          const nextRows = { ...this.rows(), ...o.rows };
          Object.keys(nextRows).forEach(k => {
            nextRows[k] = (nextRows[k] ?? []).map((x: any) => ({ ...x, _new: true }));
            nextRows[k].forEach((x: any) => this.dirtyRows.add(x));
          });
          this.rows.set(nextRows);
          this.dirtyLists.add('functions');
          this.dirtyLists.add('acttypes');
        }
        if (o.kpis) this.kpis.set(o.kpis);
        if (o.matrix) this.mx.set({ ...DEFAULT_MATRIX, ...o.matrix });
        this.changeLog.update(l => [
          { sec: 'All masters', what: `Loaded from ${f.name}`, at: new Date().toISOString() },
          ...l
        ]);
        this.sec.set('save');
        this.toast.show('Masters loaded — review and Save');
      } catch (e: any) {
        alert('Import failed: ' + (e?.message || e));
      }
    };
    reader.readAsText(f);
  }

  formatTime(iso: string): string {
    try {
      return new Date(iso).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    } catch {
      return '';
    }
  }

  private downloadCsv(filename: string, headers: string[], rows: any[][]) {
    const esc = (v: any) => {
      const s = String(v ?? '');
      return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const csv = [headers.map(esc).join(','), ...rows.map(r => r.map(esc).join(','))].join('\r\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }
}
