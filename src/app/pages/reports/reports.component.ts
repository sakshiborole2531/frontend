import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { ScopeService } from '../../core/scope.service';
import { ToastService } from '../../core/toast.service';
import { CalcItem, MAT_TYPES, SHORT, DEPTS, BUCKET_COLORS } from '../../core/models';
import { fmtV, fmtD, fmtDT, pct, realFlags } from '../../core/format';
import { UI } from '../../shared/ui';

interface ReportTypeOption {
  id: 'bu' | 'unit' | 'both';
  title: string;
  desc: string;
}

interface SectionOption {
  id: string;
  label: string;
}

interface AggResult {
  n: number;
  mats: number;
  v: number;
  u: number;
  q: number;
  b: number;
  aged: number;
  agedN: number;
  exp: number;
  expN: number;
  expd: number;
  expdN: number;
  cons: number;
  consN: number;
  idle: number;
  idleN: number;
  exc: number;
  excV: number;
  p1: number;
}

@Component({
  standalone: true,
  imports: [FormsModule, ...UI],
  templateUrl: './reports.component.html'
})
export class ReportsComponent {
  api = inject(ApiService);
  scope = inject(ScopeService);
  auth = inject(AuthService);
  toast = inject(ToastService);

  // Raw data sources
  items = signal<CalcItem[]>([]);
  actionsList = signal<any[]>([]);
  loading = signal(true);
  generatingPdf = signal(false);

  // Configuration options
  repType = signal<'bu' | 'unit' | 'both'>('both');
  selectedBu = signal<string>('All');
  dataScope = signal<'all' | 'filtered'>('all');
  topN = signal<number>(10);
  preparedBy = signal<string>('');
  selectedUnits = signal<string[]>([]);

  readonly reportTypes: ReportTypeOption[] = [
    { id: 'bu', title: 'Business Unit-wise', desc: 'BU summary, BU × category, BU × aging and units within each BU' },
    { id: 'unit', title: 'Unit-wise', desc: 'Unit summary grouped by BU, plus a detail page per unit' },
    { id: 'both', title: 'Combined BU & Unit', desc: 'Everything — recommended for the monthly management pack' }
  ];

  readonly sectionsList: SectionOption[] = [
    { id: 'summary', label: 'Executive summary (KPI tiles)' },
    { id: 'status', label: 'Stock status — Unrestricted / Quality / Blocked' },
    { id: 'aging', label: 'Inventory aging buckets' },
    { id: 'expiry', label: 'Expiry ≤180 days — batch list' },
    { id: 'slow', label: 'Aged / slow-moving / non-moving items' },
    { id: 'cons', label: 'Consumables by department' },
    { id: 'years', label: 'Year-wise comparison (financial years)' },
    { id: 'actions', label: 'Exceptions & open actions' },
    { id: 'detail', label: 'Unit detail page for each unit' }
  ];

  sections = signal<Record<string, boolean>>({
    summary: true,
    status: true,
    aging: true,
    expiry: true,
    slow: true,
    cons: true,
    years: true,
    actions: true,
    detail: true
  });

  constructor() {
    // Populate default preparer
    effect(() => {
      const user = this.auth.me();
      if (user?.name && !this.preparedBy()) {
        this.preparedBy.set(user.name);
      }
    }, { allowSignalWrites: true });

    // Load full inventory & actions
    effect(() => {
      this.scope.version();
      this.loading.set(true);
      this.api.inventory({ bu: 'All', plant: 'All' }).subscribe(r => {
        this.items.set(r);
        this.loading.set(false);
      });
      this.api.actions().subscribe(a => {
        this.actionsList.set(a);
      });
    }, { allowSignalWrites: true });
  }

  t() {
    return this.scope.thresholds();
  }

  // Available BUs for dropdown
  availableBus = computed(() => {
    return this.scope.bus();
  });

  // Available plants/units for toggle switches based on selected BU
  availableUnits = computed(() => {
    const selBu = this.selectedBu();
    const activePlants = this.scope.activePlants();
    if (selBu === 'All') {
      return activePlants.map(p => p.name);
    }
    return activePlants.filter(p => p.buCode === selBu).map(p => p.name);
  });

  setReportType(type: 'bu' | 'unit' | 'both') {
    this.repType.set(type);
  }

  onBuChange(bu: string) {
    this.selectedBu.set(bu);
    this.selectedUnits.set([]);
  }

  isUnitSelected(unit: string): boolean {
    return this.selectedUnits().includes(unit);
  }

  toggleUnit(unit: string) {
    this.selectedUnits.update(curr => {
      if (curr.includes(unit)) {
        return curr.filter(u => u !== unit);
      } else {
        return [...curr, unit];
      }
    });
  }

  toggleSection(sectionId: string) {
    this.sections.update(curr => ({
      ...curr,
      [sectionId]: !curr[sectionId]
    }));
  }

  resetOptions() {
    this.repType.set('both');
    this.selectedBu.set('All');
    this.dataScope.set('all');
    this.topN.set(10);
    this.selectedUnits.set([]);
    this.sections.set({
      summary: true,
      status: true,
      aging: true,
      expiry: true,
      slow: true,
      cons: true,
      years: true,
      actions: true,
      detail: true
    });
    const user = this.auth.me();
    if (user?.name) this.preparedBy.set(user.name);
  }

  // Items filtered according to scope options
  filteredItems = computed(() => {
    let list = this.items();
    if (this.dataScope() === 'filtered') {
      const f = this.scope.filter();
      if (f.bu && f.bu !== 'All') list = list.filter(x => x.bu === f.bu);
      if (f.plant && f.plant !== 'All') list = list.filter(x => x.plant === f.plant);
      if (f.cat && f.cat !== 'All') list = list.filter(x => x.matType === f.cat);
      if (f.status && f.status !== 'All') list = list.filter(x => x.statuses?.includes(f.status));
      if (f.dept && f.dept !== 'All') list = list.filter(x => x.dept === f.dept);
      if (f.loc && f.loc !== 'All') list = list.filter(x => x.storageLoc === f.loc);
      if (f.q && f.q.trim()) {
        const ql = f.q.trim().toLowerCase();
        list = list.filter(x => [x.code, x.name, x.batch, x.storageLoc, x.plant].join(' ').toLowerCase().includes(ql));
      }
    }

    const selBu = this.selectedBu();
    if (selBu !== 'All') {
      list = list.filter(x => x.bu === selBu);
    }

    const units = this.selectedUnits();
    if (units.length > 0) {
      list = list.filter(x => units.includes(x.plant));
    }

    return list;
  });

  previewBus = computed(() => {
    const selBu = this.selectedBu();
    const dataBus = [...new Set(this.filteredItems().map(x => x.bu))];
    if (selBu !== 'All') return [selBu];
    const permitted = this.availableBus();
    const all = [...new Set([...permitted, ...dataBus])].filter(Boolean);
    return all.sort();
  });

  activeUnitsList = computed(() => {
    const selUnits = this.selectedUnits();
    if (selUnits.length > 0) return selUnits;
    const dataUnits = [...new Set(this.filteredItems().map(x => x.plant))];
    const available = this.availableUnits();
    return [...new Set([...available, ...dataUnits])].filter(Boolean).sort();
  });

  // Aggregation helper
  agg(list: CalcItem[]): AggResult {
    const t = this.t();
    const aged = list.filter(x => x.age !== null && x.age > t.agingDays);
    const exp = list.filter(x => x.rsl !== null && x.rsl >= 0 && x.rsl <= t.expiryDays);
    const expd = list.filter(x => x.rsl !== null && x.rsl < 0);
    const cons = list.filter(x => x.matType === 'Consumable');
    const idle = cons.filter(x => x.consStatus === 'Non-Moving' || x.consStatus === 'Long Lying');
    const exc = list.filter(x => realFlags(x.flags || []).length > 0);

    const sumV = (arr: CalcItem[], fn: (x: CalcItem) => number) => arr.reduce((acc, x) => acc + (fn(x) || 0), 0);

    return {
      n: list.length,
      mats: new Set(list.map(x => x.code)).size,
      v: sumV(list, x => x.value),
      u: sumV(list, x => x.uVal),
      q: sumV(list, x => x.qVal),
      b: sumV(list, x => x.bVal),
      aged: sumV(aged, x => x.value),
      agedN: aged.length,
      exp: sumV(exp, x => x.value),
      expN: exp.length,
      expd: sumV(expd, x => x.value),
      expdN: expd.length,
      cons: sumV(cons, x => x.value),
      consN: cons.length,
      idle: sumV(idle, x => x.value),
      idleN: idle.length,
      exc: exc.length,
      excV: sumV(exc, x => x.value),
      p1: exc.filter(x => x.prio === 'P1').length
    };
  }

  actAgg(pred: (a: any) => boolean) {
    const arr = this.actionsList().filter(pred);
    return {
      open: arr.filter(x => x.stage !== 'Closed').length,
      od: arr.filter(x => x.overdue).length,
      total: arr.length
    };
  }

  // Business Unit-wise summary table data
  buSummaryRows = computed(() => {
    const data = this.filteredItems();
    const bus = this.previewBus();
    const buMasters = this.scope.masters()?.businessUnits || [];

    return bus.map(b => {
      const buList = data.filter(x => x.bu === b);
      const agg = this.agg(buList);
      const ac = this.actAgg(a => a.buCode === b && buList.some(r => r.plant === a.plant));
      const matchMaster = buMasters.find(m => m.code === b);
      const desc = matchMaster?.name || (b === 'API' ? 'Active Pharmaceutical Ingredients' : b);
      const unitsCount = new Set(buList.map(x => x.plant)).size;

      return {
        bu: b,
        desc,
        unitsCount,
        agg,
        ac
      };
    });
  });

  // Total summary for BU table
  totalSummary = computed(() => {
    const data = this.filteredItems();
    const agg = this.agg(data);
    const unitsCount = new Set(data.map(x => x.plant)).size;
    const ac = this.actAgg(a => data.some(r => r.plant === a.plant));
    return {
      unitsCount,
      agg,
      ac
    };
  });

  // Unit-wise summary table rows
  unitSummaryRows = computed(() => {
    const data = this.filteredItems();
    const bus = this.previewBus();
    const plants = this.scope.masters()?.plants || [];
    const rows: any[] = [];

    bus.forEach(b => {
      const bUnits = this.activeUnitsList().filter(u => {
        const p = plants.find(pl => pl.name === u);
        return p ? p.buCode === b : data.some(x => x.plant === u && x.bu === b);
      });

      bUnits.forEach(u => {
        const uList = data.filter(x => x.plant === u);
        const p = plants.find(pl => pl.name === u);
        rows.push({
          kind: 'unit',
          bu: b,
          unit: u,
          sap: p?.sapCode || '',
          agg: this.agg(uList),
          ac: this.actAgg(a => a.plant === u)
        });
      });

      if (bUnits.length > 1 || this.selectedBu() === 'All') {
        const buList = data.filter(x => x.bu === b);
        rows.push({
          kind: 'sub',
          bu: b,
          unit: `${b} subtotal`,
          sap: '',
          agg: this.agg(buList),
          ac: this.actAgg(a => a.buCode === b && bUnits.includes(a.plant))
        });
      }
    });

    if (this.selectedBu() === 'All' && rows.length > 0) {
      const allUnits = rows.filter(r => r.kind === 'unit').map(r => r.unit);
      rows.push({
        kind: 'total',
        bu: '',
        unit: 'Grand total',
        sap: '',
        agg: this.agg(data),
        ac: this.actAgg(a => allUnits.includes(a.plant))
      });
    }

    return rows;
  });

  totalValDisplay = computed(() => {
    return fmtV(this.totalSummary().agg.v);
  });

  // PDF Generation with jsPDF & AutoTable
  downloadPdf() {
    this.generatingPdf.set(true);

    try {
      const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const W = 297, H = 210, M = 12, TOP = 27;
      const C = {
        orange: [232, 115, 28] as [number, number, number],
        navy: [29, 43, 79] as [number, number, number],
        mute: [107, 114, 128] as [number, number, number],
        green: [30, 138, 87] as [number, number, number],
        amber: [224, 138, 18] as [number, number, number],
        red: [192, 57, 43] as [number, number, number],
        light: [248, 249, 252] as [number, number, number],
        border: [226, 230, 237] as [number, number, number],
        text: [31, 41, 55] as [number, number, number],
        peach: [253, 240, 228] as [number, number, number],
        sub: [234, 240, 250] as [number, number, number]
      };

      const data = this.filteredItems();
      const E = this.t().expiryDays;
      const A = this.t().agingDays;
      const N = this.topN();
      const typeLabel = {
        bu: 'Business Unit-wise Report',
        unit: 'Unit-wise Report',
        both: 'Business Unit & Unit-wise Report'
      }[this.repType()];

      const safe = (t: any) => String(t ?? '').replace(/≤/g, '<=').replace(/≥/g, '>=').replace(/→/g, '->').replace(/←/g, '<-').replace(/₹\s?/g, 'Rs ').replace(/[✓✔]/g, 'OK').replace(/[✕✖]/g, 'x');
      const T = (t: string | string[], x: number, y: number, opt?: any) => doc.text(Array.isArray(t) ? t.map(safe) : safe(t), x, y, opt);

      let y = TOP;
      const font = (st: string, sz: number, col?: [number, number, number]) => {
        doc.setFont('helvetica', st);
        doc.setFontSize(sz);
        doc.setTextColor(...(col || C.text));
      };

      const ensure = (h: number) => {
        if (y + h > H - 16) {
          doc.addPage();
          y = TOP;
        }
      };

      const newPage = () => {
        doc.addPage();
        y = TOP;
      };

      const heading = (t: string, sub?: string | null) => {
        const hh = sub ? 13 : 9.5;
        ensure(hh + 18);
        doc.setFillColor(...C.orange);
        doc.rect(M, y, 2.2, sub ? 10 : 6.5, 'F');
        font('bold', 12.5, C.navy);
        T(t, M + 5, y + 5);
        if (sub) {
          font('normal', 8, C.mute);
          T(sub, M + 5, y + 9.6);
        }
        y += sub ? 13 : 9.5;
      };

      const R = { halign: 'right' as const };

      // Cover / Header & KPI tiles
      const tot = this.totalSummary().agg;
      const totAc = this.totalSummary().ac;
      font('bold', 17, C.navy);
      T(typeLabel, M, y + 5);
      font('normal', 8.6, C.mute);

      const scopeTxt = [
        `Business unit: ${this.selectedBu()}`,
        `Units: ${this.selectedUnits().length ? this.selectedUnits().join(', ') : 'All units (' + this.activeUnitsList().length + ')'}`,
        `Data: ${this.dataScope() === 'filtered' ? 'Dashboard filters' : 'All inventory'}`,
        `Data source: ${this.scope.settings()['sync.source'] || 'SAP Stock'}`,
        `Thresholds: aged >${A}d · expiry <=${E}d · long-lying >${this.t().longLyingDays}d`
      ];
      T(doc.splitTextToSize(safe(scopeTxt.join('   |   ')), W - 2 * M), M, y + 11);
      y += 20;

      // Executive KPI tiles
      if (this.sections()['summary']) {
        heading('Executive summary', 'Totals for the selected business units and units');
        const tileItems = [
          { l: 'Total value', v: fmtV(tot.v), s: `${tot.n} batches`, c: C.navy, vc: C.navy },
          { l: 'Unrestricted', v: fmtV(tot.u), s: `${Math.round(pct(tot.u, tot.v))}% usable`, c: C.green, vc: C.green },
          { l: 'Quality', v: fmtV(tot.q), s: 'under inspection', c: C.amber, vc: C.amber },
          { l: 'Blocked', v: fmtV(tot.b), s: 'restricted', c: C.red, vc: C.red },
          { l: `Aged >${A}d`, v: fmtV(tot.aged), s: `${tot.agedN} batches`, c: C.amber, vc: C.amber },
          { l: `Expiry <=${E}d`, v: fmtV(tot.exp), s: `${tot.expN} batches`, c: C.red, vc: C.red },
          { l: 'Consumables', v: fmtV(tot.cons), s: `${tot.idleN} idle items`, c: C.orange, vc: C.orange },
          { l: 'Exceptions / open', v: `${tot.exc} / ${totAc.open}`, s: `${totAc.od} overdue`, c: C.red, vc: C.red }
        ];

        ensure(24);
        const count = tileItems.length;
        const gap = 3;
        const tileW = (W - 2 * M - gap * (count - 1)) / count;

        tileItems.forEach((t, i) => {
          const x = M + i * (tileW + gap);
          doc.setFillColor(...C.light);
          doc.setDrawColor(...C.border);
          doc.setLineWidth(0.2);
          doc.roundedRect(x, y, tileW, 19, 2, 2, 'FD');
          doc.setFillColor(...t.c);
          doc.rect(x + 2, y + 3, 1, 13, 'F');
          font('bold', 5.8, C.mute);
          T(t.l.toUpperCase(), x + 5, y + 5.5);
          font('bold', 12, t.vc);
          T(String(t.v), x + 5, y + 12.2);
          font('normal', 6.2, C.mute);
          T(t.s, x + 5, y + 16.3);
        });
        y += 24;
      }

      // BU Table
      if (this.repType() !== 'unit') {
        heading('Business Unit-wise summary', 'Values in INR. Expiry counts exclude already expired batches.');
        const buRows = this.buSummaryRows().map(r => [
          r.bu, r.desc, r.unitsCount, r.agg.n, fmtV(r.agg.v), fmtV(r.agg.u), fmtV(r.agg.q), fmtV(r.agg.b),
          fmtV(r.agg.aged), fmtV(r.agg.exp), fmtV(r.agg.expd), fmtV(r.agg.cons), r.agg.exc, `${r.ac.open} / ${r.ac.od}`
        ]);
        const totR = this.totalSummary();
        buRows.push([
          'Total', '', totR.unitsCount, totR.agg.n, fmtV(totR.agg.v), fmtV(totR.agg.u), fmtV(totR.agg.q), fmtV(totR.agg.b),
          fmtV(totR.agg.aged), fmtV(totR.agg.exp), fmtV(totR.agg.expd), fmtV(totR.agg.cons), totR.agg.exc, `${totR.ac.open} / ${totR.ac.od}`
        ]);

        autoTable(doc, {
          startY: y,
          head: [['BU', 'Description', 'Units', 'Batches', 'Total value', 'Unrestricted', 'Quality', 'Blocked', `Aged >${A}d`, `Expiry <=${E}d`, 'Expired', 'Consumables', 'Exceptions', 'Open / overdue']],
          body: buRows.map(row => row.map(safe)),
          theme: 'grid',
          margin: { left: M, right: M, top: TOP, bottom: 16 },
          styles: { font: 'helvetica', fontSize: 7.4, cellPadding: 1.5, lineColor: C.border, lineWidth: 0.1, textColor: C.text },
          headStyles: { fillColor: C.navy, textColor: 255, fontStyle: 'bold', fontSize: 7.2 },
          alternateRowStyles: { fillColor: [251, 252, 254] },
          columnStyles: { 2: R, 3: R, 4: R, 5: R, 6: R, 7: R, 8: R, 9: R, 10: R, 11: R, 12: R, 13: R },
          didParseCell: d => {
            if (d.section === 'body' && d.row.index === buRows.length - 1) {
              d.cell.styles.fontStyle = 'bold';
              d.cell.styles.fillColor = C.peach;
            }
          }
        });
        y = (doc as any).lastAutoTable.finalY + 8;
      }

      // Unit Table
      if (this.repType() !== 'bu') {
        if (this.repType() === 'both') newPage();
        heading('Unit-wise summary', 'Grouped by business unit with subtotals');
        const unitRows = this.unitSummaryRows().map(r => [
          r.bu, r.unit, r.sap, r.agg.n, fmtV(r.agg.v), fmtV(r.agg.u), fmtV(r.agg.q), fmtV(r.agg.b),
          fmtV(r.agg.aged), fmtV(r.agg.exp), fmtV(r.agg.cons), r.agg.exc, `${r.ac.open} / ${r.ac.od}`
        ]);

        autoTable(doc, {
          startY: y,
          head: [['BU', 'Unit', 'SAP code', 'Batches', 'Total value', 'Unrestricted', 'Quality', 'Blocked', `Aged >${A}d`, `Expiry <=${E}d`, 'Consumables', 'Exceptions', 'Open / overdue']],
          body: unitRows.map(row => row.map(safe)),
          theme: 'grid',
          margin: { left: M, right: M, top: TOP, bottom: 16 },
          styles: { font: 'helvetica', fontSize: 7.4, cellPadding: 1.5, lineColor: C.border, lineWidth: 0.1, textColor: C.text },
          headStyles: { fillColor: C.navy, textColor: 255, fontStyle: 'bold', fontSize: 7.2 },
          alternateRowStyles: { fillColor: [251, 252, 254] },
          columnStyles: { 3: R, 4: R, 5: R, 6: R, 7: R, 8: R, 9: R, 10: R, 11: R, 12: R },
          didParseCell: d => {
            if (d.section === 'body') {
              const orig = this.unitSummaryRows()[d.row.index];
              if (orig && orig.kind === 'total') {
                d.cell.styles.fontStyle = 'bold';
                d.cell.styles.fillColor = C.peach;
              } else if (orig && orig.kind === 'sub') {
                d.cell.styles.fontStyle = 'bold';
                d.cell.styles.fillColor = C.sub;
              }
            }
          }
        });
        y = (doc as any).lastAutoTable.finalY + 8;
      }

      // Headers and footers on every page
      const stamp = new Date().toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
      const pages = doc.getNumberOfPages();
      const compName = this.scope.settings()['companyName'] || 'Unichem Laboratories Ltd.';
      const compShort = this.scope.settings()['companyShort'] || 'UNICHEM';

      for (let i = 1; i <= pages; i++) {
        doc.setPage(i);
        doc.setFillColor(...C.orange);
        doc.rect(0, 0, W, 17, 'F');
        doc.setFillColor(214, 96, 14);
        doc.rect(0, 17, W, 0.8, 'F');
        doc.setFillColor(255, 255, 255);
        doc.rect(0, 0, 62, 17, 'F');

        font('bold', 15, C.orange);
        T(compShort, M - 4, 9);
        font('bold', 6.2, C.navy);
        T(compName.replace(new RegExp('^' + compShort + '\\s*', 'i'), '').toUpperCase().slice(0, 34), M - 4, 13.5);

        font('bold', 11.5, [255, 255, 255]);
        T('INVENTORY MANAGEMENT · ' + typeLabel.toUpperCase(), 67, 8);
        font('normal', 7.6, [255, 255, 255]);
        T(`Generated ${stamp}${this.preparedBy() ? ' · Prepared by ' + this.preparedBy() : ''} · ${compName}`, 67, 13);

        doc.setDrawColor(...C.border);
        doc.setLineWidth(0.3);
        doc.line(M, H - 11, W - M, H - 11);
        font('normal', 7, C.mute);
        T(`${compName} · Inventory Management · Confidential — for internal use · Values in INR (L = lakh, Cr = crore)`, M, H - 6.5);
        T(`Page ${i} of ${pages}`, W - M, H - 6.5, { align: 'right' });
      }

      const fileName = `Unichem_Inventory_${this.repType()}_Report_${new Date().toISOString().slice(0, 10)}.pdf`;
      doc.save(fileName);
      this.toast.show(`PDF downloaded successfully (${pages} pages)`);
    } catch (err: any) {
      console.error('PDF generation error', err);
      this.toast.show('Failed to generate PDF: ' + (err?.message || 'Unknown error'));
    } finally {
      this.generatingPdf.set(false);
    }
  }
}
