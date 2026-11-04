import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-Y7N3HQBK.js";
import {
  FilterBarComponent
} from "./chunk-74GPD5GD.js";
import {
  ChartDirective
} from "./chunk-BCODDO6B.js";
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
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-HME2EOKK.js";
import {
  AuthService
} from "./chunk-3JYYVKE5.js";
import "./chunk-L6TX4WJQ.js";
import {
  BUCKET_COLORS,
  SHORT
} from "./chunk-MBCJJNOW.js";
import {
  DatePipe2,
  FlagTags,
  Ic,
  InrPipe,
  PrioTag,
  QtyPipe
} from "./chunk-2TWUEAPP.js";
import {
  ScopeService
} from "./chunk-CP6R3LGJ.js";
import {
  fmtV,
  invStatus,
  pct,
  realFlags
} from "./chunk-EJQTPNTN.js";
import {
  ApiService,
  Router
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
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵviewQuery
} from "./chunk-BSQGTHQ3.js";

// src/app/pages/dashboard/dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.category;
var _forTrack2 = ($index, $item) => $item.band;
var _forTrack3 = ($index, $item) => $item.dept;
var _forTrack4 = ($index, $item) => $item.item.id;
var _forTrack5 = ($index, $item) => $item.fn;
var _forTrack6 = ($index, $item) => $item.id;
var _forTrack7 = ($index, $item) => $item[0];
var _c0 = () => ["all", "All Inventory"];
var _c1 = () => ["aged", "Aged & Slow"];
var _c2 = () => ["blocked", "Blocked / QC"];
var _c3 = () => ["expiry", "Expiry Risk"];
var _c4 = () => ["hv", "High Value"];
var _c5 = () => ["fefo", "FIFO / FEFO"];
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _c7 = () => [25, 50, 100, 500];
function DashboardComponent_Conditional_0_Conditional_5_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 69);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Conditional_5_For_2_Conditional_0_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const \u0275$index_14_r3 = \u0275\u0275nextContext().$index;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.up(\u0275$index_14_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "i");
    \u0275\u0275text(3, "\u203A");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r5);
  }
}
function DashboardComponent_Conditional_0_Conditional_5_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r5);
  }
}
function DashboardComponent_Conditional_0_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DashboardComponent_Conditional_0_Conditional_5_For_2_Conditional_0_Template, 4, 1)(1, DashboardComponent_Conditional_0_Conditional_5_For_2_Conditional_1_Template, 2, 1, "b");
  }
  if (rf & 2) {
    const \u0275$index_14_r3 = ctx.$index;
    const \u0275$count_14_r6 = ctx.$count;
    \u0275\u0275conditional(!(\u0275$index_14_r3 === \u0275$count_14_r6 - 1) ? 0 : 1);
  }
}
function DashboardComponent_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275repeaterCreate(1, DashboardComponent_Conditional_0_Conditional_5_For_2_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.scope.path());
  }
}
function DashboardComponent_Conditional_0_For_37_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 122);
    \u0275\u0275text(1, "\u203A");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_For_37_Conditional_35_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b", 126);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", k_r8.overdue, " late");
  }
}
function DashboardComponent_Conditional_0_For_37_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "em");
    \u0275\u0275text(2, "Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275template(4, DashboardComponent_Conditional_0_For_37_Conditional_35_Conditional_4_Template, 2, 1, "b", 126);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r8.open);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r8.overdue ? 4 : -1);
  }
}
function DashboardComponent_Conditional_0_For_37_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "em");
    \u0275\u0275text(2, "Batches");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const k_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r8.agg.n);
  }
}
function DashboardComponent_Conditional_0_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_For_37_Template_div_click_0_listener() {
      const k_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.kid(k_r8));
    });
    \u0275\u0275elementStart(1, "div", 119)(2, "span", 120);
    \u0275\u0275element(3, "ic", 121);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, DashboardComponent_Conditional_0_For_37_Conditional_9_Template, 2, 0, "span", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 123);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "inr");
    \u0275\u0275elementStart(13, "small");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 124);
    \u0275\u0275element(16, "i", 8)(17, "i", 9)(18, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 125)(20, "span")(21, "em");
    \u0275\u0275text(22, "Aged");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span")(26, "em");
    \u0275\u0275text(27, "Expiring");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span")(31, "em");
    \u0275\u0275text(32, "Blocked");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, DashboardComponent_Conditional_0_For_37_Conditional_35_Template, 5, 2, "span")(36, DashboardComponent_Conditional_0_For_37_Conditional_36_Template, 4, 1, "span");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const k_r8 = ctx.$implicit;
    const \u0275$index_76_r9 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classMapInterpolate1("kid c", \u0275$index_76_r9 % 6, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("n", k_r8.kind === "bu" ? "factory" : k_r8.kind === "unit" ? "place" : "archive");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", k_r8.key, "", k_r8.kind === "bu" ? " Business Unit" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r8.sub);
    \u0275\u0275advance();
    \u0275\u0275conditional(k_r8.kind !== "loc" ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 20, k_r8.agg.v));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.pctT(k_r8.agg.v));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r3.w(k_r8.agg.u, k_r8.agg.v), "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r3.w(k_r8.agg.q, k_r8.agg.v), "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r3.w(k_r8.agg.b, k_r8.agg.v), "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 22, k_r8.agg.aged));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 24, k_r8.agg.exp + k_r8.agg.expd));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 26, k_r8.agg.b));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(k_r8.kind !== "loc" ? 35 : 36);
  }
}
function DashboardComponent_Conditional_0_ForEmpty_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "No data at this level \u2014 import inventory or load sample data (Configuration \u2192 Import / Export).");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_For_188_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_For_188_Template_div_click_0_listener() {
      const r_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(r_r11.category === "Consumable" ? ctx_r3.go("/inventory/cons") : ctx_r3.go("/inventory/goods", { cat: r_r11.category }));
    });
    \u0275\u0275elementStart(1, "div", 128)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "em");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 129);
    \u0275\u0275element(10, "i", 8)(11, "i", 9)(12, "i", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    const d_r12 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r11.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, r_r11.v));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.pctT(r_r11.v));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r3.w(r_r11.u, ctx_r3.maxOf(d_r12.byCategory)), "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r3.w(r_r11.q, ctx_r3.maxOf(d_r12.byCategory)), "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r3.w(r_r11.b, ctx_r3.maxOf(d_r12.byCategory)), "%");
  }
}
function DashboardComponent_Conditional_0_Conditional_195_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "canvas", 53);
  }
  if (rf & 2) {
    \u0275\u0275property("chart", ctx);
  }
}
function DashboardComponent_Conditional_0_For_202_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_For_202_Template_div_click_0_listener() {
      const b_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.go("/inventory/expiry", { band: b_r14.band }));
    });
    \u0275\u0275elementStart(1, "div", 131)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "inr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 132);
    \u0275\u0275element(8, "div", 133);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r14 = ctx.$implicit;
    const \u0275$index_444_r15 = ctx.$index;
    const d_r12 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r14.band === "Expired" ? "Already expired" : b_r14.band + " days");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 7, b_r14.v), " \xB7 ", b_r14.n, " batches");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r3.w(b_r14.v, ctx_r3.maxOf(d_r12.expiryBands)), "%")("background", ctx_r3.bandColor(\u0275$index_444_r15));
  }
}
function DashboardComponent_Conditional_0_For_209_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\xB7 ");
    \u0275\u0275elementStart(1, "span", 126);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", r_r17.idle, " idle");
  }
}
function DashboardComponent_Conditional_0_For_209_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 127);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_For_209_Template_div_click_0_listener() {
      const r_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.go("/inventory/cons", { dept: r_r17.dept }));
    });
    \u0275\u0275elementStart(1, "div", 128)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "em");
    \u0275\u0275text(8);
    \u0275\u0275template(9, DashboardComponent_Conditional_0_For_209_Conditional_9_Template, 3, 1, "span", 126);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 129);
    \u0275\u0275element(11, "i");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r17 = ctx.$implicit;
    const d_r12 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r17.dept === "QC" ? "Quality Control" : r_r17.dept);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, r_r17.v));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", r_r17.n, " items ");
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r17.idle ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r3.w(r_r17.v, ctx_r3.maxOf(d_r12.consumablesByDept)), "%")("background", ctx_r3.deptColor(r_r17.dept));
  }
}
function DashboardComponent_Conditional_0_For_224_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 134);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_For_224_Template_div_click_0_listener() {
      const a_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.alert(a_r19));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275element(2, "ic", 135);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "inr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r19 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("aic ", ctx_r3.sevClass(a_r19.severity), "");
    \u0275\u0275advance();
    \u0275\u0275property("n", ctx_r3.alertIcon(a_r19.key))("size", 16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r19.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", a_r19.n, " batches \xB7 ", \u0275\u0275pipeBind1(8, 12, a_r19.v), "");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("sev ", ctx_r3.sevClass(a_r19.severity), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r19.severity);
  }
}
function DashboardComponent_Conditional_0_For_256_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 138);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r21 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" +", ctx_r3.realFlags(e_r21.item.flags).length - 1, "");
  }
}
function DashboardComponent_Conditional_0_For_256_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 140);
    \u0275\u0275text(1, "Owned");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_For_256_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 142);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_For_256_Conditional_19_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r22);
      const e_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.assign(e_r21.item, $event));
    });
    \u0275\u0275text(1, "Assign");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_For_256_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\u2013");
  }
}
function DashboardComponent_Conditional_0_For_256_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 136);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_For_256_Template_tr_click_0_listener() {
      const e_r21 = \u0275\u0275restoreView(_r20).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.open(e_r21.item));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275element(2, "prio-tag", 137);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 138);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275element(11, "flag-tags", 139);
    \u0275\u0275template(12, DashboardComponent_Conditional_0_For_256_Conditional_12_Template, 2, 1, "span", 138);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 63)(14, "b");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "inr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275template(18, DashboardComponent_Conditional_0_For_256_Conditional_18_Template, 2, 0, "span", 140)(19, DashboardComponent_Conditional_0_For_256_Conditional_19_Template, 2, 0, "button", 141)(20, DashboardComponent_Conditional_0_For_256_Conditional_20_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r21 = ctx.$implicit;
    const d_r12 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("p", e_r21.item.prio);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r21.item.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", e_r21.item.code, " \xB7 ", e_r21.item.batch || "\u2013", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.level === "unit" ? e_r21.item.storageLoc || "\u2013" : e_r21.item.plant);
    \u0275\u0275advance(2);
    \u0275\u0275property("flags", ctx_r3.realFlags(e_r21.item.flags).slice(0, 1));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.realFlags(e_r21.item.flags).length > 1 ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 9, e_r21.item.value));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(e_r21.owned ? 18 : ctx_r3.auth.can("action.create") ? 19 : 20);
  }
}
function DashboardComponent_Conditional_0_ForEmpty_257_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 143);
    \u0275\u0275text(2, "No exceptions \u2713");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_0_Conditional_262_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "canvas", 53);
  }
  if (rf & 2) {
    \u0275\u0275property("chart", ctx);
  }
}
function DashboardComponent_Conditional_0_For_354_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 136);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_For_354_Template_tr_click_0_listener() {
      const r_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.go("/actions/open", { fn: r_r24.fn }));
    });
    \u0275\u0275elementStart(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 63);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 63);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r24 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r24.fn);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r24.open);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", r_r24.overdue ? "var(--red)" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r24.overdue);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r24.closed);
  }
}
function DashboardComponent_Conditional_0_ForEmpty_355_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 144);
    \u0275\u0275text(2, "No actions yet");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_0_For_374_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 145)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 138);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "div", 138);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "dt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r25 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r25.plan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", a_r25.name, " ", a_r25.plant ? "\xB7 " + a_r25.plant : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r25.functionName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r25.person);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", a_r25.overdue ? "var(--red)" : "")("font-weight", a_r25.overdue ? 700 : 400);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, a_r25.targetDate));
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("tag ", a_r25.overdue ? "bad" : "ok", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r25.escalation);
  }
}
function DashboardComponent_Conditional_0_ForEmpty_375_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 144);
    \u0275\u0275text(2, "No open actions");
    \u0275\u0275elementEnd()();
  }
}
function DashboardComponent_Conditional_0_For_415_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 136);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_For_415_Template_tr_click_0_listener() {
      const k_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.kid(k_r27));
    });
    \u0275\u0275elementStart(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 63)(7, "b");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "inr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 63);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 63);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 63);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 146);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 63);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td", 63);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td", 63);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 63);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "td", 63);
    \u0275\u0275text(33);
    \u0275\u0275elementStart(34, "span", 147);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const k_r27 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r27.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r27.agg.n);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 13, k_r27.agg.v));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.pctT(k_r27.agg.v));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 15, k_r27.agg.u));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 17, k_r27.agg.q));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 19, k_r27.agg.b));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 21, k_r27.agg.aged));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 23, k_r27.agg.exp));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 25, k_r27.agg.expd));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(k_r27.agg.exc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", k_r27.open, " / ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(k_r27.overdue);
  }
}
function DashboardComponent_Conditional_0_For_465_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 69);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_For_465_Template_button_click_0_listener() {
      const tb_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setTab(tb_r29[0]));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tb_r29 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("on", ctx_r3.regTab() === tb_r29[0]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tb_r29[1]);
  }
}
function DashboardComponent_Conditional_0_Conditional_466_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 148);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Conditional_466_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.exportReg());
    });
    \u0275\u0275element(1, "ic", 149);
    \u0275\u0275text(2, " Export");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("size", 15);
  }
}
function DashboardComponent_Conditional_0_th_470_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 150);
    \u0275\u0275text(1, "Plant / Site");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_td_471_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 151);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r31 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r31.plant);
  }
}
function DashboardComponent_Conditional_0_th_473_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 150);
    \u0275\u0275text(1, "Material / Batch");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_td_474_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 151)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r32 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(x_r32.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" / ", x_r32.batch || "\u2013", "");
  }
}
function DashboardComponent_Conditional_0_th_476_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 150);
    \u0275\u0275text(1, "Description");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_td_477_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 151);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r33 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r33.name);
  }
}
function DashboardComponent_Conditional_0_th_479_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 150);
    \u0275\u0275text(1, "Category");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_td_480_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 151)(1, "span", 152);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const x_r34 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("title", x_r34.matType);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.short[x_r34.matType]);
  }
}
function DashboardComponent_Conditional_0_th_482_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 153);
    \u0275\u0275text(1, "Quantity");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_td_483_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 154);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "qty");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r35 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, x_r35.qty));
  }
}
function DashboardComponent_Conditional_0_th_485_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 155);
    \u0275\u0275text(1, "UOM");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_td_486_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 151);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r36 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r36.uom || "\u2013");
  }
}
function DashboardComponent_Conditional_0_th_488_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 153);
    \u0275\u0275text(1, "Value");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_td_489_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 154)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "inr");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const x_r37 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, x_r37.value));
  }
}
function DashboardComponent_Conditional_0_th_491_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 153);
    \u0275\u0275text(1, "Age (days)");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_td_492_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 154);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const x_r38 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_4_0 = x_r38.age) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : "\u2013");
  }
}
function DashboardComponent_Conditional_0_th_494_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 153);
    \u0275\u0275text(1, "Expiry (days)");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_td_495_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 154);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const x_r39 = ctx.$implicit;
    \u0275\u0275styleProp("color", x_r39.rsl !== null && x_r39.rsl <= 30 ? "var(--red)" : x_r39.rsl !== null && x_r39.rsl <= 90 ? "var(--amber)" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_5_0 = x_r39.rsl) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : "\u2013");
  }
}
function DashboardComponent_Conditional_0_th_497_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 150);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_td_498_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 151);
    \u0275\u0275element(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r40 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("dotst ", ctx_r3.invStatus(x_r40)[1], "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.invStatus(x_r40)[0]);
  }
}
function DashboardComponent_Conditional_0_th_500_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 150);
    \u0275\u0275text(1, "Movement");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_td_501_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 151)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const x_r41 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("tx ", x_r41.movement === "Non-moving" ? "bad" : x_r41.movement === "Slow-moving" ? "warn" : "mute", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r41.movement);
  }
}
function DashboardComponent_Conditional_0_th_503_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 150);
    \u0275\u0275text(1, "FIFO / FEFO");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_td_504_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 151)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const x_r42 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("tx ", ctx_r3.fefo(x_r42) === "FAIL" ? "bad" : ctx_r3.fefo(x_r42) === "OK" ? "ok" : "mute", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.fefo(x_r42) === "FAIL" ? "FEFO Fail" : ctx_r3.fefo(x_r42) === "OK" ? "Compliant" : "N/A");
  }
}
function DashboardComponent_Conditional_0_th_506_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 150);
    \u0275\u0275text(1, "Priority");
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_td_507_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 151);
    \u0275\u0275element(1, "prio-tag", 137);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r43 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("p", x_r43.prio);
  }
}
function DashboardComponent_Conditional_0_tr_508_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 156);
  }
}
function DashboardComponent_Conditional_0_tr_509_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 157);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_tr_509_Template_tr_click_0_listener() {
      const x_r45 = \u0275\u0275restoreView(_r44).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.open(x_r45));
    });
    \u0275\u0275elementEnd();
  }
}
function DashboardComponent_Conditional_0_tr_510_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 158)(1, "td", 16);
    \u0275\u0275text(2, "No records match");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", ctx_r3.cols.length);
  }
}
function DashboardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 1)(2, "div", 2)(3, "span", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DashboardComponent_Conditional_0_Conditional_5_Template, 3, 0, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6)(11, "span");
    \u0275\u0275text(12, "Total inventory value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "b");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 7);
    \u0275\u0275element(17, "i", 8)(18, "i", 9)(19, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 11)(21, "span");
    \u0275\u0275element(22, "i", 8);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275element(25, "i", 9);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275element(28, "i", 10);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(30, "div", 12)(31, "div", 13);
    \u0275\u0275text(32);
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 14);
    \u0275\u0275repeaterCreate(36, DashboardComponent_Conditional_0_For_37_Template, 37, 28, "div", 15, _forTrack0, false, DashboardComponent_Conditional_0_ForEmpty_38_Template, 2, 0, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(39, "filter-bar");
    \u0275\u0275elementStart(40, "div", 17)(41, "span", 18);
    \u0275\u0275text(42, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div")(44, "h3");
    \u0275\u0275text(45, "Visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "p");
    \u0275\u0275text(47, "What inventory do we have? How much? What is available for use? How much is under Quality or Blocked status? How long has it been lying?");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 19);
    \u0275\u0275text(49, "Goods inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 20)(51, "div", 21);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/inventory/goods"));
    });
    \u0275\u0275elementStart(52, "div", 22)(53, "span", 23);
    \u0275\u0275element(54, "ic", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56, "Total Inventory Value");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 25);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 26);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 27);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_62_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/inventory/status", { st: "Unrestricted" }));
    });
    \u0275\u0275elementStart(63, "div", 22)(64, "span", 23);
    \u0275\u0275element(65, "ic", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span");
    \u0275\u0275text(67, "Unrestricted Stock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div", 29);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 26)(72, "b");
    \u0275\u0275text(73);
    \u0275\u0275elementEnd();
    \u0275\u0275text(74, " available for use");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 30);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_75_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/inventory/status", { st: "Quality" }));
    });
    \u0275\u0275elementStart(76, "div", 22)(77, "span", 23);
    \u0275\u0275element(78, "ic", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "span");
    \u0275\u0275text(80, "Quality Stock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 32);
    \u0275\u0275text(82);
    \u0275\u0275pipe(83, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 26);
    \u0275\u0275text(85, "under inspection");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "div", 33);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_86_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/inventory/status", { st: "Blocked" }));
    });
    \u0275\u0275elementStart(87, "div", 22)(88, "span", 23);
    \u0275\u0275element(89, "ic", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span");
    \u0275\u0275text(91, "Blocked Stock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 35);
    \u0275\u0275text(93);
    \u0275\u0275pipe(94, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 26)(96, "b");
    \u0275\u0275text(97);
    \u0275\u0275elementEnd();
    \u0275\u0275text(98, " of value");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(99, "div", 36);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_99_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/inventory/aging", { bucket: ">180" }));
    });
    \u0275\u0275elementStart(100, "div", 22)(101, "span", 23);
    \u0275\u0275element(102, "ic", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "span");
    \u0275\u0275text(104, "Inventory Aging ");
    \u0275\u0275elementStart(105, "small");
    \u0275\u0275text(106);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "div", 38);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "div", 26);
    \u0275\u0275text(111);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "div", 33);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_112_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/inventory/expiry"));
    });
    \u0275\u0275elementStart(113, "div", 22)(114, "span", 23);
    \u0275\u0275element(115, "ic", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "span");
    \u0275\u0275text(117, "Expiry ");
    \u0275\u0275elementStart(118, "small");
    \u0275\u0275text(119);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(120, "div", 35);
    \u0275\u0275text(121);
    \u0275\u0275pipe(122, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "div", 26);
    \u0275\u0275text(124);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(125, "div", 19);
    \u0275\u0275text(126, "Consumable inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(127, "div", 40)(128, "div", 21);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_128_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/inventory/cons"));
    });
    \u0275\u0275elementStart(129, "div", 22)(130, "span", 23);
    \u0275\u0275element(131, "ic", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "span");
    \u0275\u0275text(133, "Consumable Inventory Value");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(134, "div", 25);
    \u0275\u0275text(135);
    \u0275\u0275pipe(136, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "div", 26);
    \u0275\u0275text(138);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(139, "div", 42);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_139_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/inventory/cons", { cs: "Idle" }));
    });
    \u0275\u0275elementStart(140, "div", 22)(141, "span", 23);
    \u0275\u0275element(142, "ic", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "span");
    \u0275\u0275text(144, "Long-Lying / Non-Moving");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "div", 44);
    \u0275\u0275text(146);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(147, "div", 26);
    \u0275\u0275text(148);
    \u0275\u0275pipe(149, "inr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "div", 33);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_150_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/actions/queue"));
    });
    \u0275\u0275elementStart(151, "div", 22)(152, "span", 23);
    \u0275\u0275element(153, "ic", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "span");
    \u0275\u0275text(155, "Exceptions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(156, "div", 35);
    \u0275\u0275text(157);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "div", 26);
    \u0275\u0275text(159);
    \u0275\u0275pipe(160, "inr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(161, "div", 27);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_161_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/actions/open"));
    });
    \u0275\u0275elementStart(162, "div", 22)(163, "span", 23);
    \u0275\u0275element(164, "ic", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "span");
    \u0275\u0275text(166, "Open Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(167, "div", 29);
    \u0275\u0275text(168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "div", 26);
    \u0275\u0275text(170);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(171, "div", 47)(172, "div", 48)(173, "h2");
    \u0275\u0275text(174, "Inventory by Category & Stock Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "div", 49);
    \u0275\u0275text(176, "RM \xB7 INT \xB7 SFG \xB7 FG \xB7 RS \xB7 PM \xB7 Consumables \u2014 click to drill down");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(177, "div", 50)(178, "span");
    \u0275\u0275element(179, "i", 8);
    \u0275\u0275text(180, "Unrestricted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "span");
    \u0275\u0275element(182, "i", 9);
    \u0275\u0275text(183, "Quality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(184, "span");
    \u0275\u0275element(185, "i", 10);
    \u0275\u0275text(186, "Blocked");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(187, DashboardComponent_Conditional_0_For_188_Template, 13, 11, "div", 51, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "div", 48)(190, "h2");
    \u0275\u0275text(191, "Inventory Ageing Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "div", 49);
    \u0275\u0275text(193, "Value by days since GR posting / lying since");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(194, "div", 52);
    \u0275\u0275template(195, DashboardComponent_Conditional_0_Conditional_195_Template, 1, 1, "canvas", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(196, "div", 48)(197, "h2");
    \u0275\u0275text(198, "Expiry & Retest Exposure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(199, "div", 49);
    \u0275\u0275text(200);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(201, DashboardComponent_Conditional_0_For_202_Template, 9, 9, "div", 54, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(203, "div", 48)(204, "h2");
    \u0275\u0275text(205, "Consumables by Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(206, "div", 49);
    \u0275\u0275text(207);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(208, DashboardComponent_Conditional_0_For_209_Template, 12, 10, "div", 51, _forTrack3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(210, "div", 17)(211, "span", 18);
    \u0275\u0275text(212, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "div")(214, "h3");
    \u0275\u0275text(215, "Identification & Prioritization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(216, "p");
    \u0275\u0275text(217, "Which inventory is approaching expiry? What is aged, blocked, restricted, slow-moving or high-value? What needs attention first?");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(218, "div", 55)(219, "div", 48)(220, "h2");
    \u0275\u0275text(221, "Key Alerts & Exceptions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(222, "div", 56);
    \u0275\u0275repeaterCreate(223, DashboardComponent_Conditional_0_For_224_Template, 11, 14, "div", 57, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(225, "div", 48)(226, "h2");
    \u0275\u0275text(227, "Priority Exceptions ");
    \u0275\u0275elementStart(228, "span", 58)(229, "span", 59);
    \u0275\u0275text(230);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "span", 60);
    \u0275\u0275text(232);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(233, "span", 61);
    \u0275\u0275text(234);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(235, "div", 49);
    \u0275\u0275text(236);
    \u0275\u0275pipe(237, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(238, "div", 62)(239, "table")(240, "thead")(241, "tr")(242, "th");
    \u0275\u0275text(243, "Pri.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(244, "th");
    \u0275\u0275text(245, "Material / batch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(246, "th");
    \u0275\u0275text(247);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(248, "th");
    \u0275\u0275text(249, "Exception");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(250, "th", 63);
    \u0275\u0275text(251, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(252, "th");
    \u0275\u0275text(253, "Owner");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(254, "tbody");
    \u0275\u0275repeaterCreate(255, DashboardComponent_Conditional_0_For_256_Template, 21, 11, "tr", 64, _forTrack4, false, DashboardComponent_Conditional_0_ForEmpty_257_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(258, "div", 48)(259, "h2");
    \u0275\u0275text(260, "FIFO / FEFO Compliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(261, "div", 65);
    \u0275\u0275template(262, DashboardComponent_Conditional_0_Conditional_262_Template, 1, 1, "canvas", 53);
    \u0275\u0275elementStart(263, "div", 66)(264, "b");
    \u0275\u0275text(265);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(266, "span");
    \u0275\u0275text(267, "Compliant");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(268, "div", 67)(269, "div");
    \u0275\u0275element(270, "i", 68);
    \u0275\u0275text(271, "Compliant");
    \u0275\u0275elementStart(272, "b");
    \u0275\u0275text(273);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(274, "div", 69);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_274_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setTab("fefo"));
    });
    \u0275\u0275element(275, "i", 70);
    \u0275\u0275text(276, "Exceptions");
    \u0275\u0275elementStart(277, "b");
    \u0275\u0275text(278);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(279, "div");
    \u0275\u0275element(280, "i", 71);
    \u0275\u0275text(281, "Not applicable");
    \u0275\u0275elementStart(282, "b");
    \u0275\u0275text(283);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(284, "div", 72);
    \u0275\u0275text(285, "Target \u2265 95%. FEFO by expiry/retest date; FIFO by GR date where there is no expiry.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(286, "div", 17)(287, "span", 18);
    \u0275\u0275text(288, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(289, "div")(290, "h3");
    \u0275\u0275text(291, "Ownership \u2192 Action \u2192 Closure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(292, "p");
    \u0275\u0275text(293, "Which department owns the inventory? What action is required and by when? Is it being closed?");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(294, "div", 73)(295, "div", 74);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_295_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/actions/queue"));
    });
    \u0275\u0275elementStart(296, "b");
    \u0275\u0275text(297);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(298, "span");
    \u0275\u0275text(299, "Awaiting owner");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(300, "i", 75);
    \u0275\u0275text(301, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(302, "div", 76);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_302_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/actions/open", { stage: "Owned" }));
    });
    \u0275\u0275elementStart(303, "b");
    \u0275\u0275text(304);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(305, "span");
    \u0275\u0275text(306, "Owned");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(307, "i", 75);
    \u0275\u0275text(308, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(309, "div", 77);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_309_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/actions/open", { stage: "In Action" }));
    });
    \u0275\u0275elementStart(310, "b");
    \u0275\u0275text(311);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(312, "span");
    \u0275\u0275text(313, "In action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(314, "i", 75);
    \u0275\u0275text(315, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(316, "div", 78);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_316_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/actions/open", { due: "Overdue" }));
    });
    \u0275\u0275elementStart(317, "b");
    \u0275\u0275text(318);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(319, "span");
    \u0275\u0275text(320, "Overdue \xB7 escalated");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(321, "i", 75);
    \u0275\u0275text(322, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(323, "div", 79);
    \u0275\u0275listener("click", function DashboardComponent_Conditional_0_Template_div_click_323_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.go("/actions/closed"));
    });
    \u0275\u0275elementStart(324, "b");
    \u0275\u0275text(325);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(326, "span");
    \u0275\u0275text(327, "Closed this month");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(328, "i", 75);
    \u0275\u0275text(329, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(330, "div", 80)(331, "b");
    \u0275\u0275text(332);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(333, "span");
    \u0275\u0275text(334, "Closure rate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(335, "div", 81)(336, "div", 48)(337, "h2");
    \u0275\u0275text(338, "Ownership by Function");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(339, "div", 49);
    \u0275\u0275text(340, "Open, overdue and closed actions per responsible function");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(341, "table", 82)(342, "thead")(343, "tr")(344, "th");
    \u0275\u0275text(345, "Function");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(346, "th", 63);
    \u0275\u0275text(347, "Open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(348, "th", 63);
    \u0275\u0275text(349, "Overdue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(350, "th", 63);
    \u0275\u0275text(351, "Closed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(352, "tbody");
    \u0275\u0275repeaterCreate(353, DashboardComponent_Conditional_0_For_354_Template, 10, 6, "tr", 64, _forTrack5, false, DashboardComponent_Conditional_0_ForEmpty_355_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(356, "div", 48)(357, "h2");
    \u0275\u0275text(358, "Upcoming & Overdue Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(359, "div", 49);
    \u0275\u0275text(360, "Earliest target date first \xB7 overdue \u2192 Function Head, >14 days \u2192 Plant Head");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(361, "table", 82)(362, "thead")(363, "tr")(364, "th");
    \u0275\u0275text(365, "Action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(366, "th");
    \u0275\u0275text(367, "Owner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(368, "th");
    \u0275\u0275text(369, "Target");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(370, "th");
    \u0275\u0275text(371, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(372, "tbody");
    \u0275\u0275repeaterCreate(373, DashboardComponent_Conditional_0_For_374_Template, 16, 16, "tr", null, _forTrack6, false, DashboardComponent_Conditional_0_ForEmpty_375_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(376, "div", 17)(377, "span", 18);
    \u0275\u0275text(378, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(379, "div")(380, "h3");
    \u0275\u0275text(381);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(382, "p");
    \u0275\u0275text(383, "Click a row to drill down.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(384, "div", 48)(385, "div", 83)(386, "table")(387, "thead")(388, "tr")(389, "th");
    \u0275\u0275text(390);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(391, "th", 63);
    \u0275\u0275text(392, "Batches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(393, "th", 63);
    \u0275\u0275text(394, "Total value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(395, "th", 63);
    \u0275\u0275text(396, "Share");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(397, "th", 63);
    \u0275\u0275text(398, "Unrestricted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(399, "th", 63);
    \u0275\u0275text(400, "Quality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(401, "th", 63);
    \u0275\u0275text(402, "Blocked");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(403, "th", 63);
    \u0275\u0275text(404, "Aged");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(405, "th", 63);
    \u0275\u0275text(406);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(407, "th", 63);
    \u0275\u0275text(408, "Expired");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(409, "th", 63);
    \u0275\u0275text(410, "Exceptions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(411, "th", 63);
    \u0275\u0275text(412, "Open / overdue");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(413, "tbody");
    \u0275\u0275repeaterCreate(414, DashboardComponent_Conditional_0_For_415_Template, 36, 27, "tr", 64, _forTrack0);
    \u0275\u0275elementStart(416, "tr", 84)(417, "td");
    \u0275\u0275text(418);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(419, "td", 63);
    \u0275\u0275text(420);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(421, "td", 63);
    \u0275\u0275text(422);
    \u0275\u0275pipe(423, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(424, "td", 63);
    \u0275\u0275text(425, "100%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(426, "td", 63);
    \u0275\u0275text(427);
    \u0275\u0275pipe(428, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(429, "td", 63);
    \u0275\u0275text(430);
    \u0275\u0275pipe(431, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(432, "td", 63);
    \u0275\u0275text(433);
    \u0275\u0275pipe(434, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(435, "td", 63);
    \u0275\u0275text(436);
    \u0275\u0275pipe(437, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(438, "td", 63);
    \u0275\u0275text(439);
    \u0275\u0275pipe(440, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(441, "td", 63);
    \u0275\u0275text(442);
    \u0275\u0275pipe(443, "inr");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(444, "td", 63);
    \u0275\u0275text(445);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(446, "td", 63);
    \u0275\u0275text(447);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(448, "div", 17)(449, "span", 18);
    \u0275\u0275text(450, "5");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(451, "div")(452, "h3");
    \u0275\u0275text(453, "Material & Batch Register");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(454, "p");
    \u0275\u0275text(455, "Search, filter and drill down: material \u2192 batch \u2192 detailed record");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(456, "div", 85)(457, "div", 86)(458, "div", 87)(459, "span", 88);
    \u0275\u0275element(460, "ic", 89);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(461, "input", 90);
    \u0275\u0275listener("ngModelChange", function DashboardComponent_Conditional_0_Template_input_ngModelChange_461_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.regQ.set($event);
      return \u0275\u0275resetView(ctx_r3.applyReg());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275element(462, "span", 91);
    \u0275\u0275elementStart(463, "div", 92);
    \u0275\u0275repeaterCreate(464, DashboardComponent_Conditional_0_For_465_Template, 2, 3, "button", 93, _forTrack7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(466, DashboardComponent_Conditional_0_Conditional_466_Template, 3, 1, "button", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(467, "div", 83)(468, "table", 95);
    \u0275\u0275elementContainerStart(469, 96);
    \u0275\u0275template(470, DashboardComponent_Conditional_0_th_470_Template, 2, 0, "th", 97)(471, DashboardComponent_Conditional_0_td_471_Template, 2, 1, "td", 98);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(472, 99);
    \u0275\u0275template(473, DashboardComponent_Conditional_0_th_473_Template, 2, 0, "th", 97)(474, DashboardComponent_Conditional_0_td_474_Template, 4, 2, "td", 98);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(475, 100);
    \u0275\u0275template(476, DashboardComponent_Conditional_0_th_476_Template, 2, 0, "th", 97)(477, DashboardComponent_Conditional_0_td_477_Template, 2, 1, "td", 98);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(478, 101);
    \u0275\u0275template(479, DashboardComponent_Conditional_0_th_479_Template, 2, 0, "th", 97)(480, DashboardComponent_Conditional_0_td_480_Template, 3, 2, "td", 98);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(481, 102);
    \u0275\u0275template(482, DashboardComponent_Conditional_0_th_482_Template, 2, 0, "th", 103)(483, DashboardComponent_Conditional_0_td_483_Template, 3, 3, "td", 104);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(484, 105);
    \u0275\u0275template(485, DashboardComponent_Conditional_0_th_485_Template, 2, 0, "th", 106)(486, DashboardComponent_Conditional_0_td_486_Template, 2, 1, "td", 98);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(487, 107);
    \u0275\u0275template(488, DashboardComponent_Conditional_0_th_488_Template, 2, 0, "th", 103)(489, DashboardComponent_Conditional_0_td_489_Template, 4, 3, "td", 104);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(490, 108);
    \u0275\u0275template(491, DashboardComponent_Conditional_0_th_491_Template, 2, 0, "th", 103)(492, DashboardComponent_Conditional_0_td_492_Template, 2, 1, "td", 104);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(493, 109);
    \u0275\u0275template(494, DashboardComponent_Conditional_0_th_494_Template, 2, 0, "th", 103)(495, DashboardComponent_Conditional_0_td_495_Template, 2, 3, "td", 110);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(496, 111);
    \u0275\u0275template(497, DashboardComponent_Conditional_0_th_497_Template, 2, 0, "th", 97)(498, DashboardComponent_Conditional_0_td_498_Template, 3, 4, "td", 98);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(499, 112);
    \u0275\u0275template(500, DashboardComponent_Conditional_0_th_500_Template, 2, 0, "th", 97)(501, DashboardComponent_Conditional_0_td_501_Template, 3, 4, "td", 98);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(502, 113);
    \u0275\u0275template(503, DashboardComponent_Conditional_0_th_503_Template, 2, 0, "th", 97)(504, DashboardComponent_Conditional_0_td_504_Template, 3, 4, "td", 98);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(505, 114);
    \u0275\u0275template(506, DashboardComponent_Conditional_0_th_506_Template, 2, 0, "th", 97)(507, DashboardComponent_Conditional_0_td_507_Template, 2, 1, "td", 98);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(508, DashboardComponent_Conditional_0_tr_508_Template, 1, 0, "tr", 115)(509, DashboardComponent_Conditional_0_tr_509_Template, 1, 0, "tr", 116)(510, DashboardComponent_Conditional_0_tr_510_Template, 3, 1, "tr", 117);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(511, "mat-paginator", 118);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_50_0;
    let tmp_62_0;
    const d_r12 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("hero lvl-", d_r12.level, "");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r12.level === "org" ? "Entire Organization" : d_r12.level === "bu" ? "Business Unit" : "Unit");
    \u0275\u0275advance();
    \u0275\u0275conditional(d_r12.level !== "org" ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.scope.title());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r3.tot().n, " batches \xB7 ", ctx_r3.tot().materials, " materials \xB7 data source ", ctx_r3.scope.settings()["sync.source"] || "\u2014", "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 105, ctx_r3.tot().v));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ctx_r3.w(ctx_r3.tot().u, ctx_r3.tot().v), "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r3.w(ctx_r3.tot().q, ctx_r3.tot().v), "%");
    \u0275\u0275advance();
    \u0275\u0275styleProp("width", ctx_r3.w(ctx_r3.tot().b, ctx_r3.tot().v), "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Unrestricted ", ctx_r3.pctT(ctx_r3.tot().u), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Quality ", ctx_r3.pctT(ctx_r3.tot().q), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Blocked ", ctx_r3.pctT(ctx_r3.tot().b), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r12.level === "org" ? "Business Units" : d_r12.level === "bu" ? "Units in " + d_r12.bu : "Storage locations in " + d_r12.plant);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r12.level === "unit" ? "value by location" : "click to drill down");
    \u0275\u0275advance();
    \u0275\u0275classProp("few", d_r12.children.length <= 3);
    \u0275\u0275advance();
    \u0275\u0275repeater(d_r12.children);
    \u0275\u0275advance(18);
    \u0275\u0275property("size", 17);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(59, 107, ctx_r3.tot().v));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r3.tot().n, " batches \xB7 ", ctx_r3.tot().materials, " materials");
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 17);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 109, ctx_r3.tot().u));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.pctT(ctx_r3.tot().u));
    \u0275\u0275advance(5);
    \u0275\u0275property("size", 17);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(83, 111, ctx_r3.tot().q));
    \u0275\u0275advance(7);
    \u0275\u0275property("size", 17);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(94, 113, ctx_r3.tot().b));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.pctT(ctx_r3.tot().b));
    \u0275\u0275advance(5);
    \u0275\u0275property("size", 17);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(">", ctx_r3.t().agingDays, " days");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(109, 115, ctx_r3.tot().aged));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.tot().agedN, " batches");
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 17);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2264", ctx_r3.t().expiryDays, " days");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(122, 117, ctx_r3.tot().exp + ctx_r3.tot().expd));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r3.tot().expN + ctx_r3.tot().expdN, " batches \xB7 ", ctx_r3.tot().expdN, " expired");
    \u0275\u0275advance(7);
    \u0275\u0275property("size", 17);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(136, 119, ctx_r3.tot().cons));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r3.tot().consN, " items \xB7 5 departments");
    \u0275\u0275advance(4);
    \u0275\u0275property("size", 17);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.tot().idleN);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(149, 121, ctx_r3.tot().idle), " idle value");
    \u0275\u0275advance(5);
    \u0275\u0275property("size", 17);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.tot().exc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(160, 123, ctx_r3.tot().excV), " at risk \xB7 ", ctx_r3.tot().p1, " P1");
    \u0275\u0275advance(5);
    \u0275\u0275property("size", 17);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(d_r12.pipeline.open);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", d_r12.pipeline.overdue, " overdue \xB7 ", d_r12.pipeline.closureRate, "% closure rate");
    \u0275\u0275advance(17);
    \u0275\u0275repeater(d_r12.byCategory);
    \u0275\u0275advance(8);
    \u0275\u0275conditional((tmp_50_0 = ctx_r3.ageChart()) ? 195 : -1, tmp_50_0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Remaining shelf life \u2264", ctx_r3.t().expiryDays, " days");
    \u0275\u0275advance();
    \u0275\u0275repeater(d_r12.expiryBands);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Value \xB7 items \xB7 long-lying >", ctx_r3.t().longLyingDays, "d");
    \u0275\u0275advance();
    \u0275\u0275repeater(d_r12.consumablesByDept);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(d_r12.alerts);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("P1 ", ctx_r3.tot().p1, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("P2 ", ctx_r3.tot().p2, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("P3 ", ctx_r3.tot().p3, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Ranked by risk \xD7 value \xB7 ", ctx_r3.tot().exc, " exceptions \xB7 ", \u0275\u0275pipeBind1(237, 125, ctx_r3.tot().excV), " at risk");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(d_r12.level === "unit" ? "Location" : "Unit");
    \u0275\u0275advance(8);
    \u0275\u0275repeater(d_r12.topExceptions);
    \u0275\u0275advance(7);
    \u0275\u0275conditional((tmp_62_0 = ctx_r3.fefoChart()) ? 262 : -1, tmp_62_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", d_r12.fefo.pct.toFixed(1), "%");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(d_r12.fefo.ok);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r12.fefo.fail);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(d_r12.fefo.na);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(d_r12.pipeline.awaiting);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(d_r12.pipeline.owned);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(d_r12.pipeline.inAction);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(d_r12.pipeline.overdue);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(d_r12.pipeline.closedMtd);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", d_r12.pipeline.closureRate, "%");
    \u0275\u0275advance(21);
    \u0275\u0275repeater(d_r12.byFunction);
    \u0275\u0275advance(20);
    \u0275\u0275repeater(d_r12.upcoming);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(d_r12.level === "org" ? "Business Unit-wise comparison" : d_r12.level === "bu" ? "Unit-wise comparison \u2014 " + d_r12.bu : "Storage-location position \u2014 " + d_r12.plant);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(d_r12.level === "org" ? "Business unit" : d_r12.level === "bu" ? "Unit" : "Location");
    \u0275\u0275advance(16);
    \u0275\u0275textInterpolate1("Expiry \u2264", ctx_r3.t().expiryDays, "d");
    \u0275\u0275advance(8);
    \u0275\u0275repeater(d_r12.children);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Total \u2014 ", ctx_r3.scope.title(), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.tot().n);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(423, 127, ctx_r3.tot().v));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(428, 129, ctx_r3.tot().u));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(431, 131, ctx_r3.tot().q));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(434, 133, ctx_r3.tot().b));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(437, 135, ctx_r3.tot().aged));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(440, 137, ctx_r3.tot().exp));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(443, 139, ctx_r3.tot().expd));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.tot().exc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", d_r12.pipeline.open, " / ", d_r12.pipeline.overdue, "");
    \u0275\u0275advance(13);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r3.regQ());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction6(147, _c6, \u0275\u0275pureFunction0(141, _c0), \u0275\u0275pureFunction0(142, _c1), \u0275\u0275pureFunction0(143, _c2), \u0275\u0275pureFunction0(144, _c3), \u0275\u0275pureFunction0(145, _c4), \u0275\u0275pureFunction0(146, _c5)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.auth.can("export.data") ? 466 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r3.ds);
    \u0275\u0275advance(40);
    \u0275\u0275property("matHeaderRowDef", ctx_r3.cols)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r3.cols);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(154, _c7));
  }
}
function DashboardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1, "Loading dashboard\u2026");
    \u0275\u0275elementEnd();
  }
}
var DashboardComponent = class _DashboardComponent {
  api = inject(ApiService);
  scope = inject(ScopeService);
  auth = inject(AuthService);
  dlg = inject(MatDialog);
  router = inject(Router);
  d = signal(null);
  items = signal([]);
  loading = signal(true);
  regTab = signal("all");
  regQ = signal("");
  short = SHORT;
  fmtV = fmtV;
  pct = pct;
  invStatus = invStatus;
  realFlags = realFlags;
  cols = ["plant", "code", "name", "matType", "qty", "uom", "value", "age", "rsl", "status", "movement", "fefo", "prio"];
  ds = new MatTableDataSource([]);
  set sort(s) {
    if (s)
      this.ds.sort = s;
  }
  set pager(p) {
    if (p)
      this.ds.paginator = p;
  }
  constructor() {
    this.ds.sortingDataAccessor = (x, k) => k === "status" ? invStatus(x)[0] : k === "fefo" ? this.fefo(x) : k === "prio" ? x.score : x[k] ?? -1;
    effect(() => {
      const f = this.scope.filter();
      this.scope.version();
      this.loading.set(true);
      this.api.dashboard(f).subscribe((r) => {
        this.d.set(r);
        this.loading.set(false);
        this.applyReg();
      });
      this.api.inventory(f).subscribe((r) => {
        this.items.set(r);
        this.applyReg();
      });
    }, { allowSignalWrites: true });
  }
  t() {
    return this.d()?.thresholds ?? this.scope.thresholds();
  }
  tot() {
    return this.d()?.totals ?? {};
  }
  fefo(x) {
    return this.d()?.fefoStatus?.[x.id] ?? "NA";
  }
  pctT(v) {
    const t = this.tot().v;
    return t ? (v / t * 100).toFixed(1) + "%" : "0%";
  }
  w(v, base) {
    return base ? v / base * 100 : 0;
  }
  maxOf(list, k = "v") {
    return Math.max(1, ...list.map((r) => (r[k] ?? r.u + r.q + r.b) || 0));
  }
  // ---- drill-down
  kid(k) {
    if (k.kind === "bu")
      this.scope.goScope(k.key);
    else if (k.kind === "unit")
      this.scope.goScope(this.scope.filter().bu, k.key);
  }
  up(i) {
    if (i === 0)
      this.scope.goScope("All");
    else
      this.scope.goScope(this.scope.filter().bu);
  }
  go(link, q = {}) {
    this.router.navigate([link], { queryParams: q });
  }
  alert(a) {
    const map = {
      expiry: ["/inventory/expiry", {}],
      blocked: ["/inventory/status", { st: "Blocked" }],
      hvaged: ["/inventory/aging", { lens: "HV" }],
      braged: ["/inventory/aging", { lens: "BR" }],
      aged: ["/inventory/aging", { bucket: ">180" }],
      idle: ["/inventory/cons", { cs: "Idle" }]
    };
    if (a.key === "fefo") {
      this.regTab.set("fefo");
      this.applyReg();
      document.getElementById("regPanel")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    const m = map[a.key];
    if (m)
      this.go(m[0], m[1]);
  }
  open(x) {
    this.dlg.open(RecordDialog, { data: { id: x.id }, width: "900px", maxWidth: "96vw" });
  }
  assign(x, ev) {
    ev.stopPropagation();
    openActionForm(this.dlg, { item: x });
  }
  // ---- register
  applyReg() {
    const t = this.t(), q = this.regQ().trim().toLowerCase(), tab = this.regTab();
    const f = {
      all: () => true,
      aged: (x) => x.age !== null && x.age > t.agingDays || x.movement !== "Normal",
      blocked: (x) => x.blockedQty > 0 || x.qualityQty > 0,
      expiry: (x) => x.rsl !== null && x.rsl <= t.expiryDays,
      hv: (x) => x.value >= t.highValue,
      fefo: (x) => this.fefo(x) === "FAIL"
    };
    this.ds.data = this.items().filter((x) => (f[tab] ?? f["all"])(x) && (!q || [x.plant, x.code, x.batch, x.name, x.storageLoc, x.matType].join(" ").toLowerCase().includes(q))).sort((a, b) => b.value - a.value);
  }
  setTab(t) {
    this.regTab.set(t);
    this.applyReg();
  }
  exportReg() {
    this.api.download("/inventory/export", this.scope.filter(), "inventory_register.xlsx").subscribe();
  }
  // ---- charts
  ageChart = computed(() => {
    const d = this.d();
    if (!d)
      return null;
    const vals = d.aging.map((a) => a.v);
    const div = Math.max(...vals, 1) >= 1e7 ? 1e7 : 1e5;
    return {
      type: "bar",
      data: { labels: d.aging.map((a) => [a.bucket, "days"]), datasets: [{ data: vals.map((v) => +(v / div).toFixed(1)), backgroundColor: BUCKET_COLORS, borderRadius: 5, maxBarThickness: 54 }] },
      options: {
        maintainAspectRatio: false,
        plugins: { legend: { display: false }, tooltip: { callbacks: { label: (c) => `\u20B9${c.raw} ${div === 1e7 ? "Cr" : "L"}` } } },
        scales: { y: { beginAtZero: true, title: { display: true, text: div === 1e7 ? "\u20B9 Crore" : "\u20B9 Lakh" } }, x: { grid: { display: false } } },
        onClick: (_e, els) => {
          if (els.length)
            this.go("/inventory/aging", { bucket: d.aging[els[0].index].bucket });
        }
      }
    };
  });
  fefoChart = computed(() => {
    const f = this.d()?.fefo;
    if (!f)
      return null;
    return {
      type: "doughnut",
      data: { labels: ["Compliant", "Exceptions", "Not applicable"], datasets: [{ data: [f.ok, f.fail, f.na], backgroundColor: ["#22a35a", "#f59e0b", "#d5dae2"], borderWidth: 0 }] },
      options: { cutout: "74%", maintainAspectRatio: false, plugins: { legend: { display: false } } }
    };
  });
  sevClass(s) {
    return { Critical: "bad", High: "warn", Medium: "amber2", Monitor: "info" }[s] || "info";
  }
  alertIcon(k) {
    return { expiry: "warning", blocked: "block", hvaged: "sell", braged: "shield", aged: "schedule", idle: "hourglass_empty", fefo: "swap_vert" }[k] || "info";
  }
  deptColor(d) {
    return { Production: "#3b5bdb", Engineering: "#0ea5a4", QC: "#7c3aed", EHS: "#16a34a", Other: "#94a3b8" }[d];
  }
  bandColor(i) {
    return ["#7f1d1d", "#dc2626", "#f97316", "#f59e0b"][i];
  }
  static \u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["ng-component"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatSort, 5);
      \u0275\u0275viewQuery(MatPaginator, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.sort = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.pager = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "loading"], [1, "hero-l"], [1, "hero-eb"], [1, "lvlchip"], [1, "crumbs2"], [1, "hero-meta"], [1, "hero-r"], [1, "herobar"], [1, "c-u"], [1, "c-q"], [1, "c-b"], [1, "herolg"], [1, "kidwrap"], [1, "kidtitle"], [1, "kids"], [3, "class"], [1, "empty"], [1, "dsec"], [1, "dsn"], [1, "sectionlabel"], [1, "krow", "k6"], [1, "kcard", "k-navy", 3, "click"], [1, "khead"], [1, "kic"], ["n", "database", 3, "size"], [1, "kval"], [1, "ksub"], [1, "kcard", "k-green", 3, "click"], ["n", "check_circle", 3, "size"], [1, "kval", "green"], [1, "kcard", "k-blue", 3, "click"], ["n", "science", 3, "size"], [1, "kval", "blue"], [1, "kcard", "k-red", 3, "click"], ["n", "block", 3, "size"], [1, "kval", "red"], [1, "kcard", "k-amber", 3, "click"], ["n", "schedule", 3, "size"], [1, "kval", "amber"], ["n", "event", 3, "size"], [1, "krow", "k4"], ["n", "build", 3, "size"], [1, "kcard", "k-purple", 3, "click"], ["n", "hourglass_empty", 3, "size"], [1, "kval", "purple"], ["n", "priority_high", 3, "size"], ["n", "task_alt", 3, "size"], [1, "dgrid4"], [1, "panel"], [1, "desc"], [1, "legend"], [1, "cbar"], [1, "chartbox", 2, "height", "230px"], [3, "chart"], [1, "band"], [1, "dgrid3"], [1, "alerts"], [1, "arow"], [1, "pcount"], [1, "tag", "p1"], [1, "tag", "p2"], [1, "tag", "p3"], [1, "tablewrap", 2, "max-height", "330px"], [1, "num"], [2, "cursor", "pointer"], [1, "donut", "sm"], [1, "dcenter"], [1, "flegend"], [2, "background", "#22a35a"], [3, "click"], [2, "background", "#f59e0b"], [2, "background", "#c3c9d3"], [1, "hint", 2, "margin-top", "6px"], [1, "pipe"], [1, "pstep", "amber", 3, "click"], [1, "parr"], [1, "pstep", "blue", 3, "click"], [1, "pstep", "indigo", 3, "click"], [1, "pstep", "red", 3, "click"], [1, "pstep", "green", 3, "click"], [1, "pstep", "navy"], [1, "grid2"], [1, "plain"], [1, "tablewrap", 2, "max-height", "none"], [1, "totrow"], ["id", "regPanel", 1, "panel"], [1, "reghead"], [1, "fsel", 2, "height", "36px", "flex", "1", "min-width", "240px", "max-width", "380px"], [1, "ic"], ["n", "search", 3, "size"], ["type", "text", "placeholder", "Search material, batch, unit, storage location\u2026", 3, "ngModelChange", "ngModel"], [2, "flex", "1"], [1, "seg-tabs"], [3, "on"], [1, "btn", "secondary", "small"], ["mat-table", "", "matSort", "", 1, "regtbl", 3, "dataSource"], ["matColumnDef", "plant"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "code"], ["matColumnDef", "name"], ["matColumnDef", "matType"], ["matColumnDef", "qty"], ["mat-header-cell", "", "mat-sort-header", "", "class", "num", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "num", 4, "matCellDef"], ["matColumnDef", "uom"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "value"], ["matColumnDef", "age"], ["matColumnDef", "rsl"], ["mat-cell", "", "class", "num", 3, "color", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "movement"], ["matColumnDef", "fefo"], ["matColumnDef", "prio"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "style", "cursor:pointer", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], [1, "kidh"], [1, "kidic"], [3, "n"], [1, "kidgo"], [1, "kidv"], [1, "kidbar"], [1, "kidm"], [1, "down"], [1, "cbar", 3, "click"], [1, "cbl"], [1, "cbt"], [1, "band", 3, "click"], [1, "row"], [1, "trk"], [1, "fill"], [1, "arow", 3, "click"], [3, "n", "size"], [2, "cursor", "pointer", 3, "click"], [3, "p"], [1, "hint"], [3, "flags"], [1, "tag", "ok"], [1, "btn", "small"], [1, "btn", "small", 3, "click"], ["colspan", "6", 1, "empty"], ["colspan", "4", 1, "empty"], [1, "wrap"], [1, "num", 2, "color", "var(--red)"], [2, "color", "var(--red)"], [1, "btn", "secondary", "small", 3, "click"], ["n", "download", 3, "size"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "tag", "mat", 3, "title"], ["mat-header-cell", "", "mat-sort-header", "", 1, "num"], ["mat-cell", "", 1, "num"], ["mat-header-cell", ""], ["mat-header-row", ""], ["mat-row", "", 2, "cursor", "pointer", 3, "click"], [1, "mat-row"]], template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, DashboardComponent_Conditional_0_Template, 512, 155)(1, DashboardComponent_Conditional_1_Template, 2, 0, "div", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.d()) ? 0 : 1, tmp_0_0);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatSortModule, MatSort, MatSortHeader, MatPaginatorModule, MatPaginator, ChartDirective, FilterBarComponent, InrPipe, QtyPipe, DatePipe2, FlagTags, PrioTag, Ic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "src\\app\\pages\\dashboard\\dashboard.component.ts", lineNumber: 24 });
})();
export {
  DashboardComponent
};
//# sourceMappingURL=chunk-3HGLY3UK.js.map
