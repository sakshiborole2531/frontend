import {
  ChartDirective
} from "./chunk-BCODDO6B.js";
import {
  AuthService,
  ToastService,
  errMsg
} from "./chunk-3JYYVKE5.js";
import "./chunk-L6TX4WJQ.js";
import {
  CAT_COLORS,
  DEPTS,
  MAT_TYPES
} from "./chunk-MBCJJNOW.js";
import {
  InrPipe
} from "./chunk-2TWUEAPP.js";
import {
  ScopeService
} from "./chunk-CP6R3LGJ.js";
import {
  fmtD,
  fmtV
} from "./chunk-EJQTPNTN.js";
import {
  ApiService
} from "./chunk-TJA4FRLP.js";
import {
  computed,
  effect,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-BSQGTHQ3.js";

// src/app/pages/years/years.component.ts
var _forTrack0 = ($index, $item) => $item.period;
var _forTrack1 = ($index, $item) => $item.fy;
var _forTrack2 = ($index, $item) => $item.l;
var _c0 = () => ["import.data", "masters.edit"];
function YearsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function YearsComponent_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.capture());
    });
    \u0275\u0275text(1, "Capture snapshot now");
    \u0275\u0275elementEnd();
  }
}
function YearsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 15);
    \u0275\u0275text(2, "No history yet. A snapshot is captured automatically each month (daily job) and after every import. Load past years by importing a SAP extract as a ");
    \u0275\u0275elementStart(3, "b");
    \u0275\u0275text(4, "historical snapshot");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " in Import / Export.");
    \u0275\u0275elementEnd()();
  }
}
function YearsComponent_Conditional_22_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "canvas", 18);
  }
  if (rf & 2) {
    \u0275\u0275property("chart", ctx);
  }
}
function YearsComponent_Conditional_22_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "canvas", 18);
  }
  if (rf & 2) {
    \u0275\u0275property("chart", ctx);
  }
}
function YearsComponent_Conditional_22_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "div", 23);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const y_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("FY ", y_r3.fy, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", y_r3.partial ? "YTD \xB7 " : ctx_r1.basis() === "avg" ? "avg of " + y_r3.months + " month-ends \xB7 " : "close \xB7 ", "", ctx_r1.fmtD(y_r3.date), "");
  }
}
function YearsComponent_Conditional_22_For_33_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 24)(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ln_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r1.years().length + 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ln_r4.grp);
  }
}
function YearsComponent_Conditional_22_For_33_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "inr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, v_r5));
  }
}
function YearsComponent_Conditional_22_For_33_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dl_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", dl_r6.p > 0 ? "+" : "", "", dl_r6.p.toFixed(1), "%");
  }
}
function YearsComponent_Conditional_22_For_33_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, YearsComponent_Conditional_22_For_33_Conditional_7_Conditional_2_Template, 2, 2, "small");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dl_r6 = ctx;
    const ln_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("dl ", ctx_r1.dcls(dl_r6.d, ln_r4.bad), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", dl_r6.d > 0 ? "\u25B2" : dl_r6.d < 0 ? "\u25BC" : "\u2022", " ", ctx_r1.abs(dl_r6.d), "");
    \u0275\u0275advance();
    \u0275\u0275conditional(dl_r6.p !== null ? 2 : -1);
  }
}
function YearsComponent_Conditional_22_For_33_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\u2013");
  }
}
function YearsComponent_Conditional_22_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, YearsComponent_Conditional_22_For_33_Conditional_0_Template, 3, 2, "tr", 24);
    \u0275\u0275elementStart(1, "tr")(2, "td");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, YearsComponent_Conditional_22_For_33_For_5_Template, 3, 3, "td", 13, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementStart(6, "td", 13);
    \u0275\u0275template(7, YearsComponent_Conditional_22_For_33_Conditional_7_Template, 3, 6, "span", 25)(8, YearsComponent_Conditional_22_For_33_Conditional_8_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const ln_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ln_r4.grp ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("totrow", ln_r4.total);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ln_r4.l);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.row(ln_r4.get));
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_15_0 = ctx_r1.delta(ctx_r1.row(ln_r4.get))) ? 7 : 8, tmp_15_0);
  }
}
function YearsComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 10)(2, "h2");
    \u0275\u0275text(3, "Inventory value by financial year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5, "Stacked by inventory type \xB7 current year is year-to-date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275template(7, YearsComponent_Conditional_22_Conditional_7_Template, 1, 1, "canvas", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "h2");
    \u0275\u0275text(10, "Monthly trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 11);
    \u0275\u0275text(12, "Month-end total value with risk inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 17);
    \u0275\u0275template(14, YearsComponent_Conditional_22_Conditional_14_Template, 1, 1, "canvas", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(15, "div", 19);
    \u0275\u0275elementStart(16, "div", 10)(17, "h2");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 11);
    \u0275\u0275text(20, "\u25B2/\u25BC change vs previous financial year. Risk rows: green = favourable, red = unfavourable.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 20)(22, "table", 21)(23, "thead")(24, "tr")(25, "th");
    \u0275\u0275text(26, "Inventory type");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(27, YearsComponent_Conditional_22_For_28_Template, 4, 3, "th", 13, _forTrack1);
    \u0275\u0275elementStart(29, "th", 13);
    \u0275\u0275text(30, "Change vs previous FY");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "tbody");
    \u0275\u0275repeaterCreate(32, YearsComponent_Conditional_22_For_33_Template, 9, 5, "tr", 22, _forTrack2);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275conditional((tmp_1_0 = ctx_r1.fyChart()) ? 7 : -1, tmp_1_0);
    \u0275\u0275advance(7);
    \u0275\u0275conditional((tmp_2_0 = ctx_r1.trendChart()) ? 14 : -1, tmp_2_0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Year-wise comparison by inventory type \u2014 ", ctx_r1.scope.title(), "");
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r1.years());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.lines);
  }
}
function YearsComponent_For_47_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function YearsComponent_For_47_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const m_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(m_r8.period));
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function YearsComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 13);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td");
    \u0275\u0275template(17, YearsComponent_For_47_Conditional_17_Template, 2, 0, "button", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r8.period);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtD(m_r8.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r8.fy);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("tag ", m_r8.source === "sample" ? "mat" : m_r8.source === "import" ? "ok" : "info", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r8.source);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, m_r8.v));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r8.n);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.auth.can("masters.edit") ? 17 : -1);
  }
}
function YearsComponent_ForEmpty_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 28);
    \u0275\u0275text(2, "No snapshots");
    \u0275\u0275elementEnd()();
  }
}
var YearsComponent = class _YearsComponent {
  api = inject(ApiService);
  scope = inject(ScopeService);
  auth = inject(AuthService);
  toast = inject(ToastService);
  basis = signal("close");
  data = signal(null);
  cats = MAT_TYPES;
  depts = DEPTS;
  fmtD = fmtD;
  constructor() {
    effect(() => {
      const f = this.scope.filter();
      this.scope.version();
      this.api.yearwise(this.basis(), f.bu, f.plant).subscribe((r) => this.data.set(r));
    });
  }
  years = computed(() => this.data()?.years ?? []);
  months = computed(() => this.data()?.months ?? []);
  row(get) {
    return this.years().map((y) => get(y));
  }
  delta(vals) {
    if (vals.length < 2)
      return null;
    const a = vals[vals.length - 1], b = vals[vals.length - 2];
    return { d: a - b, p: b ? (a - b) / b * 100 : null };
  }
  dcls(d, bad) {
    return Math.abs(d) < 1 ? "mute" : bad === null ? "neu" : d > 0 === bad ? "bad" : "good";
  }
  abs(n) {
    return fmtV(Math.abs(n));
  }
  lines = [
    { l: "Total inventory value", get: (m) => m.v, bad: null, grp: "Total", total: true },
    ...MAT_TYPES.map((t, i) => ({ l: t, get: (m) => m.cat?.[t] || 0, bad: null, grp: i === 0 ? "By category" : void 0 })),
    { l: "Unrestricted", get: (m) => m.u, bad: null, grp: "By stock status" },
    { l: "Quality inspection", get: (m) => m.q, bad: true },
    { l: "Blocked", get: (m) => m.b, bad: true },
    { l: "Aged", get: (m) => m.aged, bad: true, grp: "Risk inventory" },
    { l: "Expiring within window", get: (m) => m.exp, bad: true },
    { l: "Expired", get: (m) => m.expd, bad: true },
    { l: "Long-lying / non-moving consumables", get: (m) => m.idle, bad: true },
    ...DEPTS.map((d, i) => ({ l: d === "QC" ? "Quality Control" : d, get: (m) => m.dept?.[d] || 0, bad: null, grp: i === 0 ? "Consumables by department" : void 0 }))
  ];
  fyChart = computed(() => {
    const ys = this.years();
    if (!ys.length)
      return null;
    const div = Math.max(...ys.map((y) => y.v)) >= 1e7 ? 1e7 : 1e5;
    return {
      type: "bar",
      data: { labels: ys.map((y) => "FY " + y.fy + (y.partial ? " (YTD)" : "")), datasets: MAT_TYPES.map((t) => ({ label: t, data: ys.map((y) => +((y.cat?.[t] || 0) / div).toFixed(2)), backgroundColor: CAT_COLORS[t], maxBarThickness: 70 })) },
      options: { maintainAspectRatio: false, plugins: { legend: { position: "bottom", labels: { boxWidth: 10 } } }, scales: { x: { stacked: true, grid: { display: false } }, y: { stacked: true, title: { display: true, text: div === 1e7 ? "\u20B9 Crore" : "\u20B9 Lakh" } } } }
    };
  });
  trendChart = computed(() => {
    const ms = this.months();
    if (!ms.length)
      return null;
    const div = Math.max(...ms.map((m) => m.v), 1) >= 1e7 ? 1e7 : 1e5;
    const ds = (l, k, c, fill = false) => ({ label: l, data: ms.map((m) => +(m[k] / div).toFixed(2)), borderColor: c, backgroundColor: fill ? c + "22" : c, fill, tension: 0.3, pointRadius: 2, borderWidth: 2 });
    return {
      type: "line",
      data: { labels: ms.map((m) => m.period), datasets: [ds("Total value", "v", "#14213d", true), ds("Aged", "aged", "#d97706"), ds("Blocked", "b", "#dc2626"), ds("Expiring", "exp", "#7c3aed")] },
      options: { maintainAspectRatio: false, interaction: { mode: "index", intersect: false }, plugins: { legend: { position: "bottom", labels: { boxWidth: 10 } } }, scales: { x: { grid: { display: false } }, y: { beginAtZero: true } } }
    };
  });
  capture() {
    this.api.post("/reports/snapshots").subscribe({ next: (r) => {
      this.toast.show(r.captured ? "Snapshot captured" : "An imported snapshot already exists for this month");
      this.scope.refresh();
    }, error: (e) => this.toast.show(errMsg(e)) });
  }
  remove(p) {
    if (confirm("Delete this monthly snapshot?"))
      this.api.delete("/reports/snapshots/" + p).subscribe(() => this.scope.refresh());
  }
  static \u0275fac = function YearsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _YearsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _YearsComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 9, consts: [[1, "pagehead"], [1, "eb"], [1, "scopetag"], [1, "q"], [1, "toolbar"], [1, "fgroup"], [1, "seg-tabs"], [3, "click"], [1, "spacer"], [1, "btn", "secondary", "small"], [1, "panel"], [1, "desc"], [1, "tablewrap", "short"], [1, "num"], [1, "btn", "secondary", "small", 3, "click"], [1, "empty"], [1, "grid2"], [1, "chartbox", 2, "height", "280px"], [3, "chart"], [1, "gap"], [1, "tablewrap", 2, "max-height", "none"], [1, "ytbl"], [3, "totrow"], [1, "fysub"], [1, "grprow"], [3, "class"], [1, "iconbtn"], [1, "iconbtn", 3, "click"], ["colspan", "7", 1, "empty"]], template: function YearsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div", 1)(3, "span", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, "Analysis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2");
      \u0275\u0275text(7, "Year-wise Comparison");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 3);
      \u0275\u0275text(9, "How has each type of inventory moved across financial years \u2014 value, stock status, risk inventory and consumables?");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 4)(11, "div", 5)(12, "label");
      \u0275\u0275text(13, "Year value basis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 6)(15, "button", 7);
      \u0275\u0275listener("click", function YearsComponent_Template_button_click_15_listener() {
        return ctx.basis.set("close");
      });
      \u0275\u0275text(16, "Year-end closing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 7);
      \u0275\u0275listener("click", function YearsComponent_Template_button_click_17_listener() {
        return ctx.basis.set("avg");
      });
      \u0275\u0275text(18, "Average of month-ends");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(19, "span", 8);
      \u0275\u0275template(20, YearsComponent_Conditional_20_Template, 2, 0, "button", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275template(21, YearsComponent_Conditional_21_Template, 6, 0, "div", 10)(22, YearsComponent_Conditional_22_Template, 34, 3);
      \u0275\u0275elementStart(23, "div", 10)(24, "h2");
      \u0275\u0275text(25, "Snapshot history");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 11);
      \u0275\u0275text(27, "One snapshot per month; imported extracts take priority over automatic captures.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 12)(29, "table")(30, "thead")(31, "tr")(32, "th");
      \u0275\u0275text(33, "Month");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "As of");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "th");
      \u0275\u0275text(37, "FY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "th");
      \u0275\u0275text(39, "Source");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "th", 13);
      \u0275\u0275text(41, "Total value (this scope)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "th", 13);
      \u0275\u0275text(43, "Batches");
      \u0275\u0275elementEnd();
      \u0275\u0275element(44, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "tbody");
      \u0275\u0275repeaterCreate(46, YearsComponent_For_47_Template, 18, 12, "tr", null, _forTrack0, false, YearsComponent_ForEmpty_48_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.scope.path().join(" \u203A "));
      \u0275\u0275advance(11);
      \u0275\u0275classProp("on", ctx.basis() === "close");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("on", ctx.basis() === "avg");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.auth.can(\u0275\u0275pureFunction0(8, _c0)) ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.years().length ? 21 : 22);
      \u0275\u0275advance(25);
      \u0275\u0275repeater(ctx.months().slice().reverse());
    }
  }, dependencies: [ChartDirective, InrPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(YearsComponent, { className: "YearsComponent", filePath: "src\\app\\pages\\years\\years.component.ts", lineNumber: 15 });
})();
export {
  YearsComponent
};
//# sourceMappingURL=chunk-AJ7QV6FN.js.map
