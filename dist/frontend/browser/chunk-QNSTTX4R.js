import {
  FilterBarComponent
} from "./chunk-74GPD5GD.js";
import {
  CheckboxControlValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-HME2EOKK.js";
import "./chunk-MBCJJNOW.js";
import "./chunk-2TWUEAPP.js";
import {
  ScopeService
} from "./chunk-CP6R3LGJ.js";
import {
  fmtV
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
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
  ɵɵtextInterpolate2
} from "./chunk-BSQGTHQ3.js";

// src/app/pages/matrix/matrix.component.ts
var _forTrack0 = ($index, $item) => $item[0];
var _forTrack1 = ($index, $item) => $item.bu;
var _forTrack2 = ($index, $item) => $item.plant;
function MatrixComponent_Conditional_11_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r3 = ctx.$implicit;
    \u0275\u0275property("value", x_r3[0]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r3[1]);
  }
}
function MatrixComponent_Conditional_11_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "b");
    \u0275\u0275text(2, "Share at risk:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275element(4, "em", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275element(7, "em", 30);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275element(10, "em", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275element(13, "em", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Green \u2014 Healthy (< ", ctx_r1.rag.g, "%)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Yellow \u2014 Watch (", ctx_r1.rag.g, "\u2013", ctx_r1.rag.y, "%)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Red \u2014 Action (", ctx_r1.rag.y, "\u2013", ctx_r1.rag.r, "%)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Dark red \u2014 Critical (\u2265 ", ctx_r1.rag.r, "%)");
  }
}
function MatrixComponent_Conditional_11_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "small");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    const m_r5 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.pct(m_r5.columnTotals[c_r4].v, m_r5.grand.v));
  }
}
function MatrixComponent_Conditional_11_For_71_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 33)(1, "th");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r6 = \u0275\u0275nextContext().$implicit;
    const m_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("colspan", m_r5.columns.length + 2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r6.bu);
  }
}
function MatrixComponent_Conditional_11_For_71_For_2_For_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function MatrixComponent_Conditional_11_For_71_For_2_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const c_r10 = \u0275\u0275nextContext().$implicit;
    const r_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.fmt(r_r8.cells[c_r10].v), " ");
  }
}
function MatrixComponent_Conditional_11_For_71_For_2_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "small");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = \u0275\u0275nextContext().$implicit;
    const r_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pct(r_r8.cells[c_r10].v, ctx_r1.base(r_r8, c_r10)));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmt(r_r8.cells[c_r10].v));
  }
}
function MatrixComponent_Conditional_11_For_71_For_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 36);
    \u0275\u0275listener("click", function MatrixComponent_Conditional_11_For_71_For_2_For_7_Template_td_click_0_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const r_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(r_r8.cells[c_r10].v && ctx_r1.drill(r_r8.plant, r_r8.bu, c_r10));
    });
    \u0275\u0275template(1, MatrixComponent_Conditional_11_For_71_For_2_For_7_Conditional_1_Template, 2, 0, "span", 38)(2, MatrixComponent_Conditional_11_For_71_For_2_For_7_Conditional_2_Template, 1, 1)(3, MatrixComponent_Conditional_11_For_71_For_2_For_7_Conditional_3_Template, 4, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    const r_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMapInterpolate1("mxc ", ctx_r1.cls(r_r8.cells[c_r10]), "");
    \u0275\u0275styleProp("--h", ctx_r1.heat(r_r8.cells[c_r10]));
    \u0275\u0275classProp("heat", ctx_r1.heat(r_r8.cells[c_r10]));
    \u0275\u0275attribute("data-nav", r_r8.cells[c_r10].v ? 1 : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(!r_r8.cells[c_r10].v ? 1 : ctx_r1.pctMode() === "none" ? 2 : 3);
  }
}
function MatrixComponent_Conditional_11_For_71_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "th", 26)(2, "a", 36);
    \u0275\u0275listener("click", function MatrixComponent_Conditional_11_For_71_For_2_Template_a_click_2_listener() {
      const r_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.scope.goScope(r_r8.bu, r_r8.plant));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(6, MatrixComponent_Conditional_11_For_71_For_2_For_7_Template, 4, 9, "td", 37, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    const \u0275$index_170_r11 = ctx.$index;
    const m_r5 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("odd", \u0275$index_170_r11 % 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r8.plant);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r8.bu);
    \u0275\u0275advance();
    \u0275\u0275repeater(m_r5.columns);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("mxt ", ctx_r1.cls(r_r8.total), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fmt(r_r8.total.v));
  }
}
function MatrixComponent_Conditional_11_For_71_Conditional_3_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    const g_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fmt(ctx_r1.subSum(g_r6, c_r12)));
  }
}
function MatrixComponent_Conditional_11_For_71_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 35)(1, "th", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(5, MatrixComponent_Conditional_11_For_71_Conditional_3_For_6_Template, 2, 1, "td", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(7, "td", 39);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r6 = \u0275\u0275nextContext().$implicit;
    const m_r5 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", g_r6.bu, " Business Unit");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Subtotal \xB7 ", g_r6.rows.length, " units");
    \u0275\u0275advance();
    \u0275\u0275repeater(m_r5.columns);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fmt(ctx_r1.subSum(g_r6, "__total")));
  }
}
function MatrixComponent_Conditional_11_For_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatrixComponent_Conditional_11_For_71_Conditional_0_Template, 3, 2, "tr", 33);
    \u0275\u0275repeaterCreate(1, MatrixComponent_Conditional_11_For_71_For_2_Template, 10, 8, "tr", 34, _forTrack2);
    \u0275\u0275template(3, MatrixComponent_Conditional_11_For_71_Conditional_3_Template, 9, 3, "tr", 35);
  }
  if (rf & 2) {
    const g_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.subtotals() && ctx_r1.groups().length > 1 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(g_r6.rows);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.subtotals() && ctx_r1.groups().length > 1 ? 3 : -1);
  }
}
function MatrixComponent_Conditional_11_For_79_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i");
  }
  if (rf & 2) {
    const c_r13 = \u0275\u0275nextContext().$implicit;
    const m_r5 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("dot rag-", ctx_r1.ragOf(m_r5.columnTotals[c_r13].share), "");
  }
}
function MatrixComponent_Conditional_11_For_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 27);
    \u0275\u0275text(1);
    \u0275\u0275template(2, MatrixComponent_Conditional_11_For_79_Conditional_2_Template, 1, 3, "i", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r13 = ctx.$implicit;
    const m_r5 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.fmt(m_r5.columnTotals[c_r13].v));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.colorBy() === "rag" && m_r5.columnTotals[c_r13].v ? 2 : -1);
  }
}
function MatrixComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 6)(2, "div", 7)(3, "label");
    \u0275\u0275text(4, "Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "select", 8);
    \u0275\u0275listener("ngModelChange", function MatrixComponent_Conditional_11_Template_select_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.measure.set($event));
    });
    \u0275\u0275repeaterCreate(6, MatrixComponent_Conditional_11_For_7_Template, 2, 2, "option", 9, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7)(9, "label");
    \u0275\u0275text(10, "Percent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 8);
    \u0275\u0275listener("ngModelChange", function MatrixComponent_Conditional_11_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pctMode.set($event));
    });
    \u0275\u0275elementStart(12, "option", 10);
    \u0275\u0275text(13, "Values only");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 11);
    \u0275\u0275text(15, "% of grand total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 12);
    \u0275\u0275text(17, "% of plant (row)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 13);
    \u0275\u0275text(19, "% of category (column)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "label", 14)(21, "input", 15);
    \u0275\u0275listener("ngModelChange", function MatrixComponent_Conditional_11_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.subtotals.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " BU subtotals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 7)(24, "label");
    \u0275\u0275text(25, "Colour cells by");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "select", 8);
    \u0275\u0275listener("ngModelChange", function MatrixComponent_Conditional_11_Template_select_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.colorBy.set($event));
    });
    \u0275\u0275elementStart(27, "option", 16);
    \u0275\u0275text(28, "Health status (RAG)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 17);
    \u0275\u0275text(30, "Value intensity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 10);
    \u0275\u0275text(32, "No colour");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "label", 14)(34, "input", 15);
    \u0275\u0275listener("ngModelChange", function MatrixComponent_Conditional_11_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideEmpty.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(35, " Hide empty plants");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 18)(37, "div", 19)(38, "span");
    \u0275\u0275text(39, "Grand total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "b");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "i");
    \u0275\u0275text(43);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div", 19)(45, "span");
    \u0275\u0275text(46, "Overall health");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "b");
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "i");
    \u0275\u0275text(50, "share at risk");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(51, MatrixComponent_Conditional_11_Conditional_51_Template, 15, 6, "div", 20);
    \u0275\u0275elementStart(52, "div", 21)(53, "table", 22)(54, "thead")(55, "tr")(56, "th", 23);
    \u0275\u0275text(57, "Plant ");
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59, "\u2193");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, "\xA0 Category ");
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62, "\u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(63, MatrixComponent_Conditional_11_For_64_Template, 4, 2, "th", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(65, "th", 25);
    \u0275\u0275text(66, "Total");
    \u0275\u0275elementStart(67, "small");
    \u0275\u0275text(68, "100%");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(69, "tbody");
    \u0275\u0275repeaterCreate(70, MatrixComponent_Conditional_11_For_71_Template, 4, 2, null, null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "tfoot")(73, "tr")(74, "th", 26);
    \u0275\u0275text(75, "Total");
    \u0275\u0275elementStart(76, "span");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(78, MatrixComponent_Conditional_11_For_79_Template, 3, 2, "td", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(80, "td", 28);
    \u0275\u0275text(81);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const m_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.measure());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.measures());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.pctMode());
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", ctx_r1.subtotals());
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.colorBy());
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx_r1.hideEmpty());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.fmt(m_r5.grand.v));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r5.measureLabel);
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("rag-txt-", ctx_r1.ragOf(m_r5.grand.share), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r5.grand.share === null ? "\u2013" : (m_r5.grand.share * 100).toFixed(1) + "%");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.colorBy() === "rag" ? 51 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275repeater(m_r5.columns);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.groups());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r1.rows().length, " units");
    \u0275\u0275advance();
    \u0275\u0275repeater(m_r5.columns);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.fmt(m_r5.grand.v));
  }
}
function MatrixComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
var MatrixComponent = class _MatrixComponent {
  api = inject(ApiService);
  scope = inject(ScopeService);
  router = inject(Router);
  measure = signal("value");
  pctMode = signal("none");
  colorBy = signal("rag");
  subtotals = signal(true);
  hideEmpty = signal(false);
  rag = { g: 15, y: 30, r: 50 };
  m = signal(null);
  constructor() {
    effect(() => {
      const f = this.scope.filter();
      this.scope.version();
      this.api.matrix(this.measure(), f).subscribe((r) => this.m.set(r));
    });
  }
  isVal() {
    return !["batches", "exc"].includes(this.measure());
  }
  fmt(v) {
    return !v ? "\u2014" : this.isVal() ? fmtV(v) : Number(v).toLocaleString("en-IN");
  }
  ragOf(share) {
    if (share === null || share === void 0)
      return "";
    const p = share * 100;
    return p < this.rag.g ? "g" : p < this.rag.y ? "y" : p < this.rag.r ? "r" : "dr";
  }
  cls(c) {
    return !c?.v || this.colorBy() !== "rag" ? "" : "rag-" + this.ragOf(c.share);
  }
  heat(c) {
    const max = this.max();
    return this.colorBy() === "heat" && c?.v ? (0.08 + 0.55 * Math.sqrt(c.v / max)).toFixed(2) : null;
  }
  max = computed(() => Math.max(1, ...(this.m()?.rows ?? []).flatMap((r) => Object.values(r.cells).map((c) => c.v))));
  pct(v, base) {
    return base ? (Math.round(v / base * 1e3) / 10).toFixed(1) + "%" : "\u2013";
  }
  base(r, col) {
    const m = this.m();
    return this.pctMode() === "row" ? r.total.v : this.pctMode() === "col" ? m.columnTotals[col].v : m.grand.v;
  }
  rows = computed(() => (this.m()?.rows ?? []).filter((r) => !this.hideEmpty() || r.total.v));
  groups = computed(() => {
    const g = [];
    this.rows().forEach((r) => {
      let x = g.find((z) => z.bu === r.bu);
      if (!x)
        g.push(x = { bu: r.bu, rows: [] });
      x.rows.push(r);
    });
    return g;
  });
  subSum(g, col) {
    return g.rows.reduce((t, r) => t + (col === "__total" ? r.total.v : r.cells[col].v), 0);
  }
  drill(plant, bu, cat) {
    this.scope.goScope(bu, plant);
    this.router.navigate([cat === "Consumable" ? "/inventory/cons" : "/inventory/goods"], { queryParams: cat === "Consumable" ? {} : { cat } });
  }
  measures() {
    return Object.entries(this.m()?.measures ?? {});
  }
  static \u0275fac = function MatrixComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatrixComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MatrixComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [[1, "pagehead"], [1, "eb"], [1, "scopetag"], [1, "q"], [1, "panel", "mxpanel"], [1, "loading"], [1, "toolbar", "mxbar"], [1, "fgroup"], [3, "ngModelChange", "ngModel"], [3, "value"], ["value", "none"], ["value", "grand"], ["value", "row"], ["value", "col"], [1, "chk"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["value", "rag"], ["value", "heat"], [1, "mxkpis"], [1, "k"], [1, "mxlegend"], [1, "mxwrap"], [1, "mxtbl"], [1, "mxr", "corner"], [1, "mxh"], [1, "mxh", "mxt"], [1, "mxr"], [1, "mxc"], [1, "mxt", "grand"], [1, "rag-g"], [1, "rag-y"], [1, "rag-r"], [1, "rag-dr"], [1, "mxgrp"], [3, "odd"], [1, "mxsub"], [3, "click"], [3, "class", "heat", "--h"], [1, "mx0"], [1, "mxt"], [3, "class"]], template: function MatrixComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div", 1)(3, "span", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, "Analysis");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2");
      \u0275\u0275text(7, "Matrix View");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 3);
      \u0275\u0275text(9, "Inventory by plant (rows) and category (columns) \u2014 with plant and category totals");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(10, "filter-bar");
      \u0275\u0275template(11, MatrixComponent_Conditional_11_Template, 82, 14, "div", 4)(12, MatrixComponent_Conditional_12_Template, 2, 0, "div", 5);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.scope.path().join(" \u203A "));
      \u0275\u0275advance(7);
      \u0275\u0275conditional((tmp_1_0 = ctx.m()) ? 11 : 12, tmp_1_0);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, FilterBarComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatrixComponent, { className: "MatrixComponent", filePath: "src\\app\\pages\\matrix\\matrix.component.ts", lineNumber: 11 });
})();
export {
  MatrixComponent
};
//# sourceMappingURL=chunk-QNSTTX4R.js.map
