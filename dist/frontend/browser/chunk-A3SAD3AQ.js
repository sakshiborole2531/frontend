import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-Y7N3HQBK.js";
import {
  FilterBarComponent
} from "./chunk-74GPD5GD.js";
import {
  toSignal
} from "./chunk-JAASBOCZ.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatNoDataRow,
  MatPaginator,
  MatPaginatorModule,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-XGYIE57X.js";
import "./chunk-D3ZD6FXO.js";
import {
  MatDialog,
  RecordDialog,
  openActionForm
} from "./chunk-KSMHFCGL.js";
import "./chunk-HME2EOKK.js";
import {
  AuthService
} from "./chunk-3JYYVKE5.js";
import "./chunk-L6TX4WJQ.js";
import {
  BUCKETS,
  DEPTS,
  MAT_TYPES,
  SHORT
} from "./chunk-MBCJJNOW.js";
import {
  DatePipe2,
  DaysPill,
  InrPipe,
  PrioTag,
  QtyPipe,
  StatusTags
} from "./chunk-2TWUEAPP.js";
import {
  ScopeService
} from "./chunk-CP6R3LGJ.js";
import {
  consClass,
  pct,
  realFlags,
  sum
} from "./chunk-EJQTPNTN.js";
import {
  ActivatedRoute,
  ApiService,
  Router
} from "./chunk-TJA4FRLP.js";
import {
  computed,
  effect,
  inject,
  input,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction8,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-BSQGTHQ3.js";

// src/app/pages/inventory/inventory.component.ts
var _forTrack0 = ($index, $item) => $item.c;
var _forTrack1 = ($index, $item) => $item[0];
var _forTrack2 = ($index, $item) => $item.b;
var _forTrack3 = ($index, $item) => $item.dp;
var _c0 = () => [25, 50, 100, 500];
var _c1 = () => ["All", "All statuses"];
var _c2 = () => ["Idle", "Long-lying or non-moving"];
var _c3 = (a0) => ["LL365", a0];
var _c4 = () => ["A90", "Aging > 90 d"];
var _c5 = () => ["A180", "Aging > 180 d"];
var _c6 = () => ["Normal", "Normal"];
var _c7 = () => ["Aging", "Aging"];
var _c8 = () => ["Non-Moving", "Non-Moving"];
var _c9 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function InventoryComponent_Case_11_Conditional_0_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 57);
    \u0275\u0275listener("click", function InventoryComponent_Case_11_Conditional_0_For_29_Template_tr_click_0_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.set({ cat: r_r2.c }));
    });
    \u0275\u0275elementStart(1, "td")(2, "span", 58);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 55);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 55);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 55);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 59);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 55)(20, "b");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "inr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "td", 55);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "td", 55);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "inr");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.short[r_r2.c]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.c);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.mats);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.n);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 10, r_r2.u));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, r_r2.q));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 14, r_r2.b));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 16, r_r2.v));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 18, r_r2.aged));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 20, r_r2.exp));
  }
}
function InventoryComponent_Case_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "h2");
    \u0275\u0275text(2, "Inventory by Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 54);
    \u0275\u0275text(4, "Click a category to see its batches. Consumables are covered under Consumables in the menu.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12)(6, "table")(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 55);
    \u0275\u0275text(12, "Materials");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 55);
    \u0275\u0275text(14, "Batches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 55);
    \u0275\u0275text(16, "Unrestricted \u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 55);
    \u0275\u0275text(18, "Quality \u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 55);
    \u0275\u0275text(20, "Blocked \u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 55);
    \u0275\u0275text(22, "Total value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th", 55);
    \u0275\u0275text(24, "Aged \u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "th", 55);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "tbody");
    \u0275\u0275repeaterCreate(28, InventoryComponent_Case_11_Conditional_0_For_29_Template, 29, 22, "tr", 56, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(26);
    \u0275\u0275textInterpolate1("Expiry \u2264", ctx_r2.t().expiryDays, "d \u20B9");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.catRows());
  }
}
function InventoryComponent_Case_11_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61);
    \u0275\u0275text(1, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.p("code", ""));
  }
}
function InventoryComponent_Case_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53)(1, "a", 60);
    \u0275\u0275listener("click", function InventoryComponent_Case_11_Conditional_1_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.set({ cat: null, code: null }));
    });
    \u0275\u0275text(2, "Total Inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 61);
    \u0275\u0275text(4, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, InventoryComponent_Case_11_Conditional_1_Conditional_7_Template, 4, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.p("cat"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.p("code", "") ? 7 : -1);
  }
}
function InventoryComponent_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InventoryComponent_Case_11_Conditional_0_Template, 30, 1, "div", 5)(1, InventoryComponent_Case_11_Conditional_1_Template, 8, 2, "div", 53);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.p("cat") === "All" ? 0 : 1);
  }
}
function InventoryComponent_Case_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function InventoryComponent_Case_12_For_2_Template_div_click_0_listener() {
      const c_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.set({ st: c_r6[0] }));
    });
    \u0275\u0275elementStart(1, "div", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("card click ", c_r6[3], "");
    \u0275\u0275classProp("sel", ctx_r2.p("st") === c_r6[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r6[0] === "All" ? "All stock" : c_r6[0] + " stock");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("value ", c_r6[4], "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 12, c_r6[1]));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", c_r6[2], " batches \xB7 ", ctx_r2.pct(c_r6[1], ctx_r2.statusCards()[0][1]).toFixed(0), "% of value");
  }
}
function InventoryComponent_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, InventoryComponent_Case_12_For_2_Template, 8, 14, "div", 62, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.statusCards());
  }
}
function InventoryComponent_Case_13_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275listener("click", function InventoryComponent_Case_13_For_10_Template_div_click_0_listener() {
      const b_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.set({ bucket: ctx_r2.p("bucket") === b_r9.b ? null : b_r9.b, lens: null }));
    });
    \u0275\u0275elementStart(1, "div", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 68);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("t-red", b_r9.i >= 4)("t-amber", b_r9.i === 3)("sel", ctx_r2.p("bucket") === b_r9.b);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", b_r9.b, " days");
    \u0275\u0275advance();
    \u0275\u0275classProp("red", b_r9.i >= 4)("amber", b_r9.i === 3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 13, b_r9.v));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", b_r9.n, " records");
  }
}
function InventoryComponent_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 65)(2, "button", 60);
    \u0275\u0275listener("click", function InventoryComponent_Case_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.set({ lens: null }));
    });
    \u0275\u0275text(3, "All aged stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 60);
    \u0275\u0275listener("click", function InventoryComponent_Case_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.set({ lens: "HV", bucket: null }));
    });
    \u0275\u0275text(5, "High-value + aged");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 60);
    \u0275\u0275listener("click", function InventoryComponent_Case_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.set({ lens: "BR", bucket: null }));
    });
    \u0275\u0275text(7, "Blocked/restricted + aged");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275repeaterCreate(9, InventoryComponent_Case_13_For_10_Template, 8, 15, "div", 66, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("on", ctx_r2.p("lens") === "All");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("on", ctx_r2.p("lens") === "HV");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("on", ctx_r2.p("lens") === "BR");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.bucketCards());
  }
}
function InventoryComponent_Case_14_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275listener("click", function InventoryComponent_Case_14_For_10_Template_div_click_0_listener() {
      const b_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.set({ band: ctx_r2.p("band") === b_r12.b ? null : b_r12.b }));
    });
    \u0275\u0275elementStart(1, "div", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 68);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("t-red", b_r12.i < 2)("t-amber", b_r12.i >= 2)("sel", ctx_r2.p("band") === b_r12.b);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r12.b === "Expired" ? "Already expired" : b_r12.b + " days left");
    \u0275\u0275advance();
    \u0275\u0275classProp("red", b_r12.i < 2)("amber", b_r12.i >= 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 13, b_r12.v));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", b_r12.n, " batches");
  }
}
function InventoryComponent_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 69);
    \u0275\u0275listener("click", function InventoryComponent_Case_14_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.set({ band: null }));
    });
    \u0275\u0275elementStart(2, "div", 63);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 68);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 64);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(9, InventoryComponent_Case_14_For_10_Template, 8, 15, "div", 66, _forTrack2);
    \u0275\u0275elementStart(11, "div", 70)(12, "div", 63);
    \u0275\u0275text(13, "Without action plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 71);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 64);
    \u0275\u0275text(17, "assign an owner");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("sel", ctx_r2.p("band") === "All");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Total expiry \u2264", ctx_r2.t().expiryDays, " days");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 6, ctx_r2.totals().v));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.totals().n, " batches");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.bandCards());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.noAction());
  }
}
function InventoryComponent_Case_15_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67);
    \u0275\u0275listener("click", function InventoryComponent_Case_15_For_10_Template_div_click_0_listener() {
      const c_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.set({ dept: ctx_r2.p("dept") === c_r15.dp ? null : c_r15.dp }));
    });
    \u0275\u0275elementStart(1, "div", 63);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 68);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("sel", ctx_r2.p("dept") === c_r15.dp);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r15.dp === "QC" ? "Quality Control (QC)" : c_r15.dp);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, c_r15.v));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", c_r15.n, " items \xB7 ");
    \u0275\u0275advance();
    \u0275\u0275classProp("down", c_r15.idle)("up", !c_r15.idle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", c_r15.idle, " idle");
  }
}
function InventoryComponent_Case_15_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function InventoryComponent_Case_15_For_14_Template_button_click_0_listener() {
      const o_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.set({ cs: o_r17[0] === "All" ? null : o_r17[0] }));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("on", ctx_r2.p("cs") === o_r17[0]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r17[1]);
  }
}
function InventoryComponent_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 69);
    \u0275\u0275listener("click", function InventoryComponent_Case_15_Template_div_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.set({ dept: null }));
    });
    \u0275\u0275elementStart(2, "div", 63);
    \u0275\u0275text(3, "All departments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 68);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 64);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(9, InventoryComponent_Case_15_For_10_Template, 10, 12, "div", 72, _forTrack3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6)(12, "div", 65);
    \u0275\u0275repeaterCreate(13, InventoryComponent_Case_15_For_14_Template, 2, 3, "button", 73, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("sel", ctx_r2.p("dept") === "All");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, ctx_r2.totals().v));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.totals().n, " items shown");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.deptCards());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pureFunction8(15, _c9, \u0275\u0275pureFunction0(6, _c1), \u0275\u0275pureFunction0(7, _c2), \u0275\u0275pureFunction1(8, _c3, "Lying > " + ctx_r2.t().longLyingDays + " d"), \u0275\u0275pureFunction0(10, _c4), \u0275\u0275pureFunction0(11, _c5), \u0275\u0275pureFunction0(12, _c6), \u0275\u0275pureFunction0(13, _c7), \u0275\u0275pureFunction0(14, _c8)));
  }
}
function InventoryComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 74);
    \u0275\u0275listener("click", function InventoryComponent_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.export());
    });
    \u0275\u0275text(1, "Export Excel");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_th_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Plant");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r19.plant);
  }
}
function InventoryComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Description");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r20.name);
  }
}
function InventoryComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Code");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 76)(1, "a", 60);
    \u0275\u0275listener("click", function InventoryComponent_td_36_Template_a_click_1_listener($event) {
      const x_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      $event.stopPropagation();
      return \u0275\u0275resetView(ctx_r2.view() === "goods" && ctx_r2.set({ cat: x_r22.matType, code: x_r22.code }));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const x_r22 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(x_r22.code);
  }
}
function InventoryComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Batch");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r23 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r23.batch || "\u2013");
  }
}
function InventoryComponent_th_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Category");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76)(1, "span", 77);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r24 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", x_r24.matType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.short[x_r24.matType]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r24.dept ? " " + x_r24.dept : "");
  }
}
function InventoryComponent_th_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Department");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r25 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r25.dept);
  }
}
function InventoryComponent_th_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 78);
    \u0275\u0275text(1, "Sub-category");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r26 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r26.subCat || "\u2013");
  }
}
function InventoryComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 79);
    \u0275\u0275text(1, "Qty");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 80);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "qty");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r27 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(2, 2, x_r27.qty), " ", x_r27.uom, "");
  }
}
function InventoryComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 79);
    \u0275\u0275text(1, "Unrestr. qty");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 80);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "qty");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r28 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, x_r28.unrestrictedQty));
  }
}
function InventoryComponent_th_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 79);
    \u0275\u0275text(1, "Quality qty");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 80);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "qty");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, x_r29.qualityQty));
  }
}
function InventoryComponent_th_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 79);
    \u0275\u0275text(1, "Blocked qty");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 80);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "qty");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r30 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, x_r30.blockedQty));
  }
}
function InventoryComponent_th_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 79);
    \u0275\u0275text(1, "Unit cost");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 80);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "inr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r31 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, x_r31.unitCost));
  }
}
function InventoryComponent_th_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 79);
    \u0275\u0275text(1, "Unrestr. \u20B9");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 80);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "inr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r32 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, x_r32.uVal));
  }
}
function InventoryComponent_th_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 79);
    \u0275\u0275text(1, "Quality \u20B9");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 80);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "inr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r33 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, x_r33.qVal));
  }
}
function InventoryComponent_th_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 79);
    \u0275\u0275text(1, "Blocked \u20B9");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 80);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "inr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r34 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, x_r34.bVal));
  }
}
function InventoryComponent_th_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 79);
    \u0275\u0275text(1, "Value");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 80)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "inr");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const x_r35 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, x_r35.value));
  }
}
function InventoryComponent_th_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 78);
    \u0275\u0275text(1, "Stock status");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275element(1, "status-tags", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r36 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("x", x_r36);
  }
}
function InventoryComponent_th_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Mfg date");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dt");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r37 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, x_r37.mfgDate));
  }
}
function InventoryComponent_th_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "SLED/BBD");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dt");
    \u0275\u0275elementStart(3, "span", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const x_r38 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 2, x_r38.expiryDate), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(x_r38.expiryDate ? x_r38.dateType : "");
  }
}
function InventoryComponent_th_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Shelf life left");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275element(1, "days-pill", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r39 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("d", x_r39.rsl);
  }
}
function InventoryComponent_th_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Lying since");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dt");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r40 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, x_r40.lying));
  }
}
function InventoryComponent_th_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Age");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275element(1, "days-pill", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r41 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("d", x_r41.age);
  }
}
function InventoryComponent_th_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 78);
    \u0275\u0275text(1, "Bucket");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r42 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r42.bucket);
  }
}
function InventoryComponent_th_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Last issue");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dt");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r43 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, x_r43.lastIssueDate));
  }
}
function InventoryComponent_th_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Days since issue");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_102_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "no issue");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_102_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "days-pill", 83);
  }
  if (rf & 2) {
    const x_r44 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("d", x_r44.dsi);
  }
}
function InventoryComponent_td_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275template(1, InventoryComponent_td_102_Conditional_1_Template, 2, 0, "span", 8)(2, InventoryComponent_td_102_Conditional_2_Template, 1, 1, "days-pill", 83);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r44 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(x_r44.dsi === null ? 1 : 2);
  }
}
function InventoryComponent_th_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const x_r45 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("tag ", ctx_r2.consClass(x_r45.consStatus), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r45.consStatus);
  }
}
function InventoryComponent_th_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 78);
    \u0275\u0275text(1, "Block reason / remarks");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_108_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 84);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r46 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r46.blockReason || "Not specified");
  }
}
function InventoryComponent_td_108_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const x_r46 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", x_r46.remarks, " ");
  }
}
function InventoryComponent_td_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275template(1, InventoryComponent_td_108_Conditional_1_Template, 2, 1, "span", 84)(2, InventoryComponent_td_108_Conditional_2_Template, 1, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r46 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(x_r46.blockedQty > 0 ? 1 : 2);
  }
}
function InventoryComponent_th_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 75);
    \u0275\u0275text(1, "Priority");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275element(1, "prio-tag", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r47 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("p", x_r47.prio);
  }
}
function InventoryComponent_th_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 78);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_114_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 88);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "dt");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r48 = ctx;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r48.plan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", a_r48.functionName, ", ", \u0275\u0275pipeBind1(4, 3, a_r48.targetDate), ")");
  }
}
function InventoryComponent_td_114_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 89);
    \u0275\u0275listener("click", function InventoryComponent_td_114_Conditional_2_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r49);
      const x_r50 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.assign(x_r50, $event));
    });
    \u0275\u0275text(1, "Assign");
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_td_114_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2013 ");
  }
}
function InventoryComponent_td_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 86);
    \u0275\u0275template(1, InventoryComponent_td_114_Conditional_1_Template, 5, 5)(2, InventoryComponent_td_114_Conditional_2_Template, 2, 0, "button", 87)(3, InventoryComponent_td_114_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const x_r50 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r2.actionOf(x_r50)) ? 1 : ctx_r2.realFlags(x_r50.flags).length && ctx_r2.auth.can("action.create") ? 2 : 3, tmp_2_0);
  }
}
function InventoryComponent_tr_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 90);
  }
}
function InventoryComponent_tr_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 91);
    \u0275\u0275listener("click", function InventoryComponent_tr_116_Template_tr_click_0_listener() {
      const x_r52 = \u0275\u0275restoreView(_r51).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.open(x_r52));
    });
    \u0275\u0275elementEnd();
  }
}
function InventoryComponent_tr_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 92)(1, "td", 93);
    \u0275\u0275text(2, "No records");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r2.cols().length);
  }
}
var PAGES = {
  goods: ["Inventory by Category", "What inventory do we have, how much, and where is it lying?"],
  status: ["Stock Status", "What is available for use, and how much is under Quality or Blocked status?"],
  aging: ["Inventory Aging", "How long has the inventory been lying?"],
  expiry: ["Expiry Monitoring", "Which inventory is approaching expiry within the monitoring window?"],
  cons: ["Consumables", "Which consumables are lying for a long period, and which department owns them?"]
};
var InventoryComponent = class _InventoryComponent {
  api = inject(ApiService);
  scope = inject(ScopeService);
  auth = inject(AuthService);
  dlg = inject(MatDialog);
  route = inject(ActivatedRoute);
  router = inject(Router);
  view = input("goods");
  qp = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
  all = signal([]);
  openKeys = signal(/* @__PURE__ */ new Map());
  loading = signal(true);
  short = SHORT;
  cats = MAT_TYPES;
  depts = DEPTS;
  buckets = BUCKETS;
  consClass = consClass;
  realFlags = realFlags;
  pct = pct;
  ds = new MatTableDataSource([]);
  set sort(s) {
    if (s)
      this.ds.sort = s;
  }
  set pager(p) {
    if (p)
      this.ds.paginator = p;
  }
  page = computed(() => PAGES[this.view()] ?? PAGES.goods);
  p = (k, d = "All") => this.qp().get(k) || d;
  t = this.scope.thresholds;
  constructor() {
    this.ds.sortingDataAccessor = (x, k) => x[k] ?? -1;
    effect(() => {
      const f = this.scope.filter();
      this.scope.version();
      this.view();
      this.loading.set(true);
      this.api.inventory(f).subscribe((r) => {
        this.all.set(r);
        this.loading.set(false);
      });
      if (this.auth.can("view.actions"))
        this.api.actions().subscribe((a) => this.openKeys.set(new Map(a.filter((x) => x.stage !== "Closed" && x.itemKey).map((x) => [x.itemKey, x]))));
    }, { allowSignalWrites: true });
    effect(() => {
      this.ds.data = this.rows();
    });
  }
  /** Rows for the current view and its card / dropdown selection. */
  rows = computed(() => {
    const v = this.view(), a = this.all(), t = this.t();
    switch (v) {
      case "goods": {
        const cat = this.p("cat"), code = this.p("code", "");
        return a.filter((x) => x.matType !== "Consumable" && (cat === "All" || x.matType === cat) && (!code || x.code === code)).sort((x, y) => (x.rsl ?? 99999) - (y.rsl ?? 99999));
      }
      case "status": {
        const st = this.p("st"), cat = this.p("cat");
        return a.filter((x) => (cat === "All" || x.matType === cat) && (st === "All" || (st === "Unrestricted" ? x.unrestrictedQty > 0 : st === "Quality" ? x.qualityQty > 0 : x.blockedQty > 0))).sort((x, y) => st === "Blocked" ? y.bVal - x.bVal : st === "Quality" ? y.qVal - x.qVal : y.value - x.value);
      }
      case "aging": {
        const b = this.p("bucket"), lens = this.p("lens");
        return a.filter((x) => x.age !== null && (b === "All" || x.bucket === b || b === ">180" && x.age > 180) && (lens === "All" || (lens === "HV" ? x.age > t.agingDays && x.value >= t.highValue : x.age > t.agingDays && x.restricted))).sort((x, y) => (y.age ?? 0) - (x.age ?? 0));
      }
      case "expiry": {
        const band = this.p("band");
        return a.filter((x) => x.rsl !== null && x.rsl <= t.expiryDays && (band === "All" || x.band === band)).sort((x, y) => (x.rsl ?? 0) - (y.rsl ?? 0));
      }
      case "cons": {
        const dept = this.p("dept"), cs = this.p("cs");
        const fn = {
          All: () => true,
          Idle: (x) => x.consStatus === "Long Lying" || x.consStatus === "Non-Moving",
          LL365: (x) => x.age !== null && x.age > t.longLyingDays,
          A90: (x) => (x.age ?? 0) > 90,
          A180: (x) => (x.age ?? 0) > 180
        };
        return a.filter((x) => x.matType === "Consumable" && (dept === "All" || x.dept === dept) && (fn[cs] ? fn[cs](x) : x.consStatus === cs)).sort((x, y) => (y.age ?? -1) - (x.age ?? -1));
      }
    }
  });
  cols = computed(() => ({
    goods: ["plant", "name", "code", "batch", "matType", "qty", "value", "statusTags", "expiryDate", "rsl", "age", "prio", "action"],
    status: ["plant", "matType", "code", "name", "batch", "unrestrictedQty", "qualityQty", "blockedQty", "uVal", "qVal", "bVal", "value", "age", "blockReason"],
    aging: ["name", "code", "matType", "plant", "batch", "qty", "value", "statusTags", "lying", "age", "bucket", "prio", "action"],
    expiry: ["name", "code", "matType", "plant", "batch", "qty", "value", "mfgDate", "expiryDate", "rsl", "statusTags", "action"],
    cons: ["name", "code", "dept", "subCat", "plant", "qty", "unitCost", "value", "lying", "age", "lastIssueDate", "dsi", "consStatus", "action"]
  })[this.view()]);
  // ---------- cards
  scopeRows = computed(() => this.view() === "cons" ? this.all().filter((x) => x.matType === "Consumable") : this.view() === "goods" ? this.all().filter((x) => x.matType !== "Consumable") : this.all());
  catRows = computed(() => MAT_TYPES.filter((c) => c !== "Consumable").map((c) => {
    const r = this.all().filter((x) => x.matType === c);
    const t = this.t();
    return {
      c,
      mats: new Set(r.map((x) => x.code)).size,
      n: r.length,
      u: sum(r, (x) => x.uVal),
      q: sum(r, (x) => x.qVal),
      b: sum(r, (x) => x.bVal),
      v: sum(r, (x) => x.value),
      aged: sum(r.filter((x) => (x.age ?? 0) > t.agingDays), (x) => x.value),
      exp: sum(r.filter((x) => x.rsl !== null && x.rsl <= t.expiryDays), (x) => x.value)
    };
  }));
  statusCards = computed(() => {
    const r = this.all(), tot = sum(r, (x) => x.value);
    return [
      ["All", tot, r.length, "t-navy", ""],
      ["Unrestricted", sum(r, (x) => x.uVal), r.filter((x) => x.unrestrictedQty > 0).length, "t-green", "green"],
      ["Quality", sum(r, (x) => x.qVal), r.filter((x) => x.qualityQty > 0).length, "t-amber", "amber"],
      ["Blocked", sum(r, (x) => x.bVal), r.filter((x) => x.blockedQty > 0).length, "t-red", "red"]
    ];
  });
  bucketCards = computed(() => BUCKETS.map((b, i) => {
    const r = this.all().filter((x) => x.bucket === b);
    return { b, i, v: sum(r, (x) => x.value), n: r.length };
  }));
  bandCards = computed(() => {
    const t = this.t();
    return ["Expired", "\u226430", "31\u201390", "91\u2013" + t.expiryDays].map((b, i) => {
      const r = this.all().filter((x) => x.band === b);
      return { b, i, v: sum(r, (x) => x.value), n: r.length };
    });
  });
  deptCards = computed(() => DEPTS.map((dp) => {
    const r = this.all().filter((x) => x.dept === dp);
    return { dp, v: sum(r, (x) => x.value), n: r.length, idle: r.filter((x) => x.consStatus === "Long Lying" || x.consStatus === "Non-Moving").length };
  }));
  totals = computed(() => ({ v: sum(this.rows(), (x) => x.value), n: this.rows().length }));
  noAction = computed(() => this.rows().filter((x) => !this.openKeys().has(x.itemKey)).length);
  set(q) {
    this.router.navigate([], { queryParams: q, queryParamsHandling: "merge" });
  }
  open(x) {
    this.dlg.open(RecordDialog, { data: { id: x.id }, width: "900px", maxWidth: "96vw" });
  }
  assign(x, ev) {
    ev.stopPropagation();
    openActionForm(this.dlg, { item: x });
  }
  actionOf(x) {
    return this.openKeys().get(x.itemKey);
  }
  export() {
    this.api.download("/inventory/export", this.scope.filter(), "inventory.xlsx").subscribe();
  }
  static \u0275fac = function InventoryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InventoryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryComponent, selectors: [["ng-component"]], viewQuery: function InventoryComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatSort, 5);
      \u0275\u0275viewQuery(MatPaginator, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.pager = _t.first);
    }
  }, inputs: { view: [1, "view"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 119, vars: 17, consts: [[1, "pagehead"], [1, "eb"], [1, "scopetag"], [1, "q"], [1, "cards"], [1, "panel"], [1, "toolbar"], [2, "margin", "0"], [1, "hint"], [1, "spacer"], [1, "btn", "secondary", "small"], [1, "loading"], [1, "tablewrap"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "plant"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "code"], ["matColumnDef", "batch"], ["matColumnDef", "matType"], ["matColumnDef", "dept"], ["matColumnDef", "subCat"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "qty"], ["mat-header-cell", "", "mat-sort-header", "", "class", "num", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "num", 4, "matCellDef"], ["matColumnDef", "unrestrictedQty"], ["matColumnDef", "qualityQty"], ["matColumnDef", "blockedQty"], ["matColumnDef", "unitCost"], ["matColumnDef", "uVal"], ["matColumnDef", "qVal"], ["matColumnDef", "bVal"], ["matColumnDef", "value"], ["matColumnDef", "statusTags"], ["matColumnDef", "mfgDate"], ["matColumnDef", "expiryDate"], ["matColumnDef", "rsl"], ["matColumnDef", "lying"], ["matColumnDef", "age"], ["matColumnDef", "bucket"], ["matColumnDef", "lastIssueDate"], ["matColumnDef", "dsi"], ["matColumnDef", "consStatus"], ["matColumnDef", "blockReason"], ["matColumnDef", "prio"], ["matColumnDef", "action"], ["mat-cell", "", "class", "wrap", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "style", "cursor:pointer", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [1, "crumbs"], [1, "desc"], [1, "num"], [2, "cursor", "pointer"], [2, "cursor", "pointer", 3, "click"], [1, "tag", "mat"], [1, "num", 2, "color", "var(--red)"], [3, "click"], [1, "sep"], [3, "class", "sel"], [1, "label"], [1, "sub"], [1, "seg-tabs"], [1, "card", "click", 3, "t-red", "t-amber", "sel"], [1, "card", "click", 3, "click"], [1, "value"], [1, "card", "click", "t-navy", 3, "click"], [1, "card", "t-red"], [1, "value", "red"], [1, "card", "click", 3, "sel"], [3, "on"], [1, "btn", "secondary", "small", 3, "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "tag", "mat", 3, "title"], ["mat-header-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "num"], ["mat-cell", "", 1, "num"], [3, "x"], ["kind", "rsl", 3, "d"], [3, "d"], [1, "tag", "bad"], [3, "p"], ["mat-cell", "", 1, "wrap"], [1, "btn", "small"], [1, "wrap"], [1, "btn", "small", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 2, "cursor", "pointer", 3, "click"], [1, "mat-row"], [1, "empty"]], template: function InventoryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div", 1)(3, "span", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, "Inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 3);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(10, "filter-bar");
      \u0275\u0275template(11, InventoryComponent_Case_11_Template, 2, 1)(12, InventoryComponent_Case_12_Template, 3, 0, "div", 4)(13, InventoryComponent_Case_13_Template, 11, 6)(14, InventoryComponent_Case_14_Template, 18, 8, "div", 4)(15, InventoryComponent_Case_15_Template, 15, 24);
      \u0275\u0275elementStart(16, "div", 5)(17, "div", 6)(18, "h2", 7);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 8);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "inr");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "span", 9);
      \u0275\u0275template(24, InventoryComponent_Conditional_24_Template, 2, 0, "button", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, InventoryComponent_Conditional_25_Template, 2, 0, "div", 11);
      \u0275\u0275elementStart(26, "div", 12)(27, "table", 13);
      \u0275\u0275elementContainerStart(28, 14);
      \u0275\u0275template(29, InventoryComponent_th_29_Template, 2, 0, "th", 15)(30, InventoryComponent_td_30_Template, 2, 1, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(31, 17);
      \u0275\u0275template(32, InventoryComponent_th_32_Template, 2, 0, "th", 15)(33, InventoryComponent_td_33_Template, 2, 1, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(34, 18);
      \u0275\u0275template(35, InventoryComponent_th_35_Template, 2, 0, "th", 15)(36, InventoryComponent_td_36_Template, 3, 1, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(37, 19);
      \u0275\u0275template(38, InventoryComponent_th_38_Template, 2, 0, "th", 15)(39, InventoryComponent_td_39_Template, 2, 1, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(40, 20);
      \u0275\u0275template(41, InventoryComponent_th_41_Template, 2, 0, "th", 15)(42, InventoryComponent_td_42_Template, 4, 3, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(43, 21);
      \u0275\u0275template(44, InventoryComponent_th_44_Template, 2, 0, "th", 15)(45, InventoryComponent_td_45_Template, 2, 1, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(46, 22);
      \u0275\u0275template(47, InventoryComponent_th_47_Template, 2, 0, "th", 23)(48, InventoryComponent_td_48_Template, 2, 1, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(49, 24);
      \u0275\u0275template(50, InventoryComponent_th_50_Template, 2, 0, "th", 25)(51, InventoryComponent_td_51_Template, 3, 4, "td", 26);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(52, 27);
      \u0275\u0275template(53, InventoryComponent_th_53_Template, 2, 0, "th", 25)(54, InventoryComponent_td_54_Template, 3, 3, "td", 26);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(55, 28);
      \u0275\u0275template(56, InventoryComponent_th_56_Template, 2, 0, "th", 25)(57, InventoryComponent_td_57_Template, 3, 3, "td", 26);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(58, 29);
      \u0275\u0275template(59, InventoryComponent_th_59_Template, 2, 0, "th", 25)(60, InventoryComponent_td_60_Template, 3, 3, "td", 26);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(61, 30);
      \u0275\u0275template(62, InventoryComponent_th_62_Template, 2, 0, "th", 25)(63, InventoryComponent_td_63_Template, 3, 3, "td", 26);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(64, 31);
      \u0275\u0275template(65, InventoryComponent_th_65_Template, 2, 0, "th", 25)(66, InventoryComponent_td_66_Template, 3, 3, "td", 26);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(67, 32);
      \u0275\u0275template(68, InventoryComponent_th_68_Template, 2, 0, "th", 25)(69, InventoryComponent_td_69_Template, 3, 3, "td", 26);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(70, 33);
      \u0275\u0275template(71, InventoryComponent_th_71_Template, 2, 0, "th", 25)(72, InventoryComponent_td_72_Template, 3, 3, "td", 26);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(73, 34);
      \u0275\u0275template(74, InventoryComponent_th_74_Template, 2, 0, "th", 25)(75, InventoryComponent_td_75_Template, 4, 3, "td", 26);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(76, 35);
      \u0275\u0275template(77, InventoryComponent_th_77_Template, 2, 0, "th", 23)(78, InventoryComponent_td_78_Template, 2, 1, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(79, 36);
      \u0275\u0275template(80, InventoryComponent_th_80_Template, 2, 0, "th", 15)(81, InventoryComponent_td_81_Template, 3, 3, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(82, 37);
      \u0275\u0275template(83, InventoryComponent_th_83_Template, 2, 0, "th", 15)(84, InventoryComponent_td_84_Template, 5, 4, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(85, 38);
      \u0275\u0275template(86, InventoryComponent_th_86_Template, 2, 0, "th", 15)(87, InventoryComponent_td_87_Template, 2, 1, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(88, 39);
      \u0275\u0275template(89, InventoryComponent_th_89_Template, 2, 0, "th", 15)(90, InventoryComponent_td_90_Template, 3, 3, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(91, 40);
      \u0275\u0275template(92, InventoryComponent_th_92_Template, 2, 0, "th", 15)(93, InventoryComponent_td_93_Template, 2, 1, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(94, 41);
      \u0275\u0275template(95, InventoryComponent_th_95_Template, 2, 0, "th", 23)(96, InventoryComponent_td_96_Template, 2, 1, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(97, 42);
      \u0275\u0275template(98, InventoryComponent_th_98_Template, 2, 0, "th", 15)(99, InventoryComponent_td_99_Template, 3, 3, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(100, 43);
      \u0275\u0275template(101, InventoryComponent_th_101_Template, 2, 0, "th", 15)(102, InventoryComponent_td_102_Template, 3, 1, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(103, 44);
      \u0275\u0275template(104, InventoryComponent_th_104_Template, 2, 0, "th", 15)(105, InventoryComponent_td_105_Template, 3, 4, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(106, 45);
      \u0275\u0275template(107, InventoryComponent_th_107_Template, 2, 0, "th", 23)(108, InventoryComponent_td_108_Template, 3, 1, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(109, 46);
      \u0275\u0275template(110, InventoryComponent_th_110_Template, 2, 0, "th", 15)(111, InventoryComponent_td_111_Template, 2, 1, "td", 16);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(112, 47);
      \u0275\u0275template(113, InventoryComponent_th_113_Template, 2, 0, "th", 23)(114, InventoryComponent_td_114_Template, 4, 1, "td", 48);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(115, InventoryComponent_tr_115_Template, 1, 0, "tr", 49)(116, InventoryComponent_tr_116_Template, 1, 0, "tr", 50)(117, InventoryComponent_tr_117_Template, 3, 1, "tr", 51);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(118, "mat-paginator", 52);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_3_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.scope.path().join(" \u203A "));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.page()[0]);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.page()[1]);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_3_0 = ctx.view()) === "goods" ? 11 : tmp_3_0 === "status" ? 12 : tmp_3_0 === "aging" ? 13 : tmp_3_0 === "expiry" ? 14 : tmp_3_0 === "cons" ? 15 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.view() === "cons" ? "Item-level Consumable Inventory" : ctx.view() === "expiry" ? "Expiry \u2264" + ctx.t().expiryDays + " Days \u2014 Monitoring View" : "Detail");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.totals().n, " records \xB7 ", \u0275\u0275pipeBind1(22, 14, ctx.totals().v), "");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.auth.can("export.data") ? 24 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 25 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("dataSource", ctx.ds);
      \u0275\u0275advance(88);
      \u0275\u0275property("matHeaderRowDef", ctx.cols())("matHeaderRowDefSticky", true);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", ctx.cols());
      \u0275\u0275advance(2);
      \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(16, _c0));
    }
  }, dependencies: [MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, FilterBarComponent, InrPipe, QtyPipe, DatePipe2, DaysPill, StatusTags, PrioTag], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryComponent, { className: "InventoryComponent", filePath: "src\\app\\pages\\inventory\\inventory.component.ts", lineNumber: 28 });
})();
export {
  InventoryComponent
};
//# sourceMappingURL=chunk-A3SAD3AQ.js.map
