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
  CloseDialog,
  MatDialog,
  RecordDialog,
  openActionForm
} from "./chunk-KSMHFCGL.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-HME2EOKK.js";
import {
  AuthService,
  ToastService,
  errMsg
} from "./chunk-3JYYVKE5.js";
import "./chunk-L6TX4WJQ.js";
import {
  SHORT,
  STAGES
} from "./chunk-MBCJJNOW.js";
import {
  DatePipe2,
  DaysPill,
  FlagTags,
  InrPipe,
  PrioTag
} from "./chunk-2TWUEAPP.js";
import {
  ScopeService
} from "./chunk-CP6R3LGJ.js";
import {
  stageClass
} from "./chunk-EJQTPNTN.js";
import {
  ActivatedRoute,
  ApiService,
  Router,
  RouterLink
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

// src/app/pages/actions/actions.component.ts
var _c0 = ["qpg"];
var _c1 = ["rpg"];
var _forTrack0 = ($index, $item) => $item.f;
var _c2 = () => ["All", "P1", "P2", "P3"];
var _c3 = () => ["prio", "score", "flags", "name", "cat", "plant", "value", "age", "rsl", "owner", "act"];
var _c4 = () => [25, 50, 100];
var _c5 = () => [];
var _c6 = () => ["id", "prio", "mat", "exc", "plan", "owner", "target", "left", "esc", "stage", "ops"];
var _c7 = () => ["Open", "All", "Prioritized", "Owned", "In Action"];
function ActionsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.export());
    });
    \u0275\u0275text(1, "Export actions");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_20_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_20_For_8_Template_button_click_0_listener() {
      const p_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setPrio(p_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("on", ctx_r1.prio() === p_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4);
  }
}
function ActionsComponent_Conditional_20_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Priority");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_20_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275element(1, "prio-tag", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("p", q_r5.item.prio);
  }
}
function ActionsComponent_Conditional_20_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 43);
    \u0275\u0275text(1, "Score");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_20_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r6.item.score);
  }
}
function ActionsComponent_Conditional_20_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Exceptions");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_20_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275element(1, "flag-tags", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("flags", q_r7.item.flags);
  }
}
function ActionsComponent_Conditional_20_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Material");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_20_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 41)(1, "a", 39);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_20_td_24_Template_a_click_1_listener() {
      const q_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.record(q_r9.item.id));
    });
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(q_r9.item.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", q_r9.item.code, " \xB7 ", q_r9.item.batch || "\u2013", "");
  }
}
function ActionsComponent_Conditional_20_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Category");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_20_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "span", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.short[q_r10.item.matType]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r10.item.dept ? " " + q_r10.item.dept : "");
  }
}
function ActionsComponent_Conditional_20_th_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Plant");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_20_td_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r11.item.plant);
  }
}
function ActionsComponent_Conditional_20_th_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 43);
    \u0275\u0275text(1, "Value");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_20_td_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "inr");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, q_r12.item.value));
  }
}
function ActionsComponent_Conditional_20_th_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Age");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_20_td_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275element(1, "days-pill", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("d", q_r13.item.age);
  }
}
function ActionsComponent_Conditional_20_th_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Shelf life left");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_20_td_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275element(1, "days-pill", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("d", q_r14.item.rsl);
  }
}
function ActionsComponent_Conditional_20_th_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Suggested owner / action");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_20_td_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const q_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r15.suggestedFunction);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(q_r15.suggestedType);
  }
}
function ActionsComponent_Conditional_20_th_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 40);
  }
}
function ActionsComponent_Conditional_20_td_45_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_20_td_45_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const q_r17 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.assign(q_r17));
    });
    \u0275\u0275text(1, "Assign owner");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_20_td_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275template(1, ActionsComponent_Conditional_20_td_45_Conditional_1_Template, 2, 0, "button", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.auth.can("action.create") ? 1 : -1);
  }
}
function ActionsComponent_Conditional_20_tr_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 51);
  }
}
function ActionsComponent_Conditional_20_tr_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 52);
  }
}
function ActionsComponent_Conditional_20_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 53)(1, "td", 54);
    \u0275\u0275text(2, "All identified exceptions have an owner. \u{1F44D}");
    \u0275\u0275elementEnd()();
  }
}
function ActionsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h2");
    \u0275\u0275text(2, "Exceptions Awaiting Ownership");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6)(6, "div", 7);
    \u0275\u0275repeaterCreate(7, ActionsComponent_Conditional_20_For_8_Template, 2, 3, "button", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 17);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 18)(12, "table", 19);
    \u0275\u0275elementContainerStart(13, 20);
    \u0275\u0275template(14, ActionsComponent_Conditional_20_th_14_Template, 2, 0, "th", 21)(15, ActionsComponent_Conditional_20_td_15_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 23);
    \u0275\u0275template(17, ActionsComponent_Conditional_20_th_17_Template, 2, 0, "th", 24)(18, ActionsComponent_Conditional_20_td_18_Template, 2, 1, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 26);
    \u0275\u0275template(20, ActionsComponent_Conditional_20_th_20_Template, 2, 0, "th", 21)(21, ActionsComponent_Conditional_20_td_21_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(22, 27);
    \u0275\u0275template(23, ActionsComponent_Conditional_20_th_23_Template, 2, 0, "th", 21)(24, ActionsComponent_Conditional_20_td_24_Template, 6, 3, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(25, 28);
    \u0275\u0275template(26, ActionsComponent_Conditional_20_th_26_Template, 2, 0, "th", 21)(27, ActionsComponent_Conditional_20_td_27_Template, 4, 2, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(28, 29);
    \u0275\u0275template(29, ActionsComponent_Conditional_20_th_29_Template, 2, 0, "th", 21)(30, ActionsComponent_Conditional_20_td_30_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(31, 30);
    \u0275\u0275template(32, ActionsComponent_Conditional_20_th_32_Template, 2, 0, "th", 24)(33, ActionsComponent_Conditional_20_td_33_Template, 4, 3, "td", 25);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(34, 31);
    \u0275\u0275template(35, ActionsComponent_Conditional_20_th_35_Template, 2, 0, "th", 21)(36, ActionsComponent_Conditional_20_td_36_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(37, 32);
    \u0275\u0275template(38, ActionsComponent_Conditional_20_th_38_Template, 2, 0, "th", 21)(39, ActionsComponent_Conditional_20_td_39_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(40, 33);
    \u0275\u0275template(41, ActionsComponent_Conditional_20_th_41_Template, 2, 0, "th", 21)(42, ActionsComponent_Conditional_20_td_42_Template, 4, 2, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(43, 34);
    \u0275\u0275template(44, ActionsComponent_Conditional_20_th_44_Template, 1, 0, "th", 21)(45, ActionsComponent_Conditional_20_td_45_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(46, ActionsComponent_Conditional_20_tr_46_Template, 1, 0, "tr", 35)(47, ActionsComponent_Conditional_20_tr_47_Template, 1, 0, "tr", 36)(48, ActionsComponent_Conditional_20_tr_48_Template, 3, 0, "tr", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(49, "mat-paginator", 38, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("Automatically identified: expired / expiry \u2264", ctx_r1.scope.thresholds().expiryDays, "d, blocked, quality hold >", ctx_r1.scope.thresholds().qualityHoldDays, "d, aged >", ctx_r1.scope.thresholds().agingDays, "d, non-moving and long-lying consumables. Ranked by risk score (urgency \xD7 value).");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(9, _c2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r1.queue().length, " exceptions");
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r1.qds);
    \u0275\u0275advance(34);
    \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(10, _c3))("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(11, _c3));
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(12, _c4));
  }
}
function ActionsComponent_Conditional_21_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_21_For_8_Template_div_click_0_listener() {
      const s_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filter({ stage: s_r20, due: null }));
    });
    \u0275\u0275elementStart(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", s_r20 === "Closed" ? "var(--green)" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.count(s_r20));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r20.toUpperCase());
  }
}
function ActionsComponent_Conditional_21_For_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 81);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_21_For_48_Template_tr_click_0_listener() {
      const r_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filter({ fn: r_r22.f }));
    });
    \u0275\u0275elementStart(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 61);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 61);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r22 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r22.f);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r22.open);
    \u0275\u0275advance();
    \u0275\u0275styleProp("color", r_r22.od ? "var(--red)" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r22.od);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r22.cl);
  }
}
function ActionsComponent_Conditional_21_ForEmpty_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 82);
    \u0275\u0275text(2, "No actions yet");
    \u0275\u0275elementEnd()();
  }
}
function ActionsComponent_Conditional_21_Conditional_57_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r24);
  }
}
function ActionsComponent_Conditional_21_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "label");
    \u0275\u0275text(2, "Stage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 65);
    \u0275\u0275listener("ngModelChange", function ActionsComponent_Conditional_21_Conditional_57_Template_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filter({ stage: $event }));
    });
    \u0275\u0275repeaterCreate(4, ActionsComponent_Conditional_21_Conditional_57_For_5_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.stage());
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(1, _c7));
  }
}
function ActionsComponent_Conditional_21_For_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r25 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r25);
  }
}
function ActionsComponent_Conditional_21_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_21_Conditional_81_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.newFree());
    });
    \u0275\u0275text(1, "+ New action");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_th_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "ID");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r27 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r27.id);
  }
}
function ActionsComponent_Conditional_21_th_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Priority");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275element(1, "prio-tag", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r28 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("p", a_r28.priority);
  }
}
function ActionsComponent_Conditional_21_th_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Material / batch");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", a_r29.name || "\u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", a_r29.code, " ", a_r29.batch ? "\xB7 " + a_r29.batch : "", " ", a_r29.plant ? "\xB7 " + a_r29.plant : "", "");
  }
}
function ActionsComponent_Conditional_21_th_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Exception");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r30 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r30.exception);
  }
}
function ActionsComponent_Conditional_21_th_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Action plan");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_98_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r31 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r31.closure);
  }
}
function ActionsComponent_Conditional_21_td_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 83)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ActionsComponent_Conditional_21_td_98_Conditional_5_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r31 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r31.actionType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r31.plan);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r31.closure ? 5 : -1);
  }
}
function ActionsComponent_Conditional_21_th_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Owner");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r32 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r32.functionName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r32.person || "\u2013");
  }
}
function ActionsComponent_Conditional_21_th_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Target");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dt");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r33 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, a_r33.targetDate));
  }
}
function ActionsComponent_Conditional_21_th_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Days left");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_107_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "dt");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("closed ", \u0275\u0275pipeBind1(2, 1, a_r34.closedDate), "");
  }
}
function ActionsComponent_Conditional_21_td_107_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "b");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r34 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("color", a_r34.daysLeft < 0 ? "var(--red)" : a_r34.daysLeft <= 7 ? "var(--amber)" : "var(--green)");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r34.daysLeft);
  }
}
function ActionsComponent_Conditional_21_td_107_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "\u2013");
  }
}
function ActionsComponent_Conditional_21_td_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275template(1, ActionsComponent_Conditional_21_td_107_Conditional_1_Template, 3, 3, "span", 17)(2, ActionsComponent_Conditional_21_td_107_Conditional_2_Template, 2, 3, "b", 84)(3, ActionsComponent_Conditional_21_td_107_Conditional_3_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r34 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r34.stage === "Closed" ? 1 : a_r34.daysLeft !== null ? 2 : 3);
  }
}
function ActionsComponent_Conditional_21_th_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Escalation");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_110_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r35 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMapInterpolate1("tag ", a_r35.overdue ? "bad" : a_r35.escalation === "On track" ? "ok" : "warn", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r35.escalation);
  }
}
function ActionsComponent_Conditional_21_td_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275template(1, ActionsComponent_Conditional_21_td_110_Conditional_1_Template, 2, 4, "span", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r35 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r35.escalation ? 1 : -1);
  }
}
function ActionsComponent_Conditional_21_th_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 40);
    \u0275\u0275text(1, "Stage");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r36 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("tag ", ctx_r1.stageClass(a_r36.stage), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r36.stage);
  }
}
function ActionsComponent_Conditional_21_th_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 40);
  }
}
function ActionsComponent_Conditional_21_td_116_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_21_td_116_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r37);
      const a_r38 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.edit(a_r38));
    });
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_116_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_21_td_116_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r39);
      const a_r38 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.step(a_r38, "start"));
    });
    \u0275\u0275text(1, "Start");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_116_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 90);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_21_td_116_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r40);
      const a_r38 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.close(a_r38));
    });
    \u0275\u0275text(1, "Close");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_116_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 91);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_21_td_116_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r41);
      const a_r38 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.step(a_r38, "reopen"));
    });
    \u0275\u0275text(1, "Reopen");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_116_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 92);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_21_td_116_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r42);
      const a_r38 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(a_r38));
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function ActionsComponent_Conditional_21_td_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 86);
    \u0275\u0275template(1, ActionsComponent_Conditional_21_td_116_Conditional_1_Template, 2, 0, "button", 12)(2, ActionsComponent_Conditional_21_td_116_Conditional_2_Template, 2, 0, "button", 49)(3, ActionsComponent_Conditional_21_td_116_Conditional_3_Template, 2, 0, "button", 87)(4, ActionsComponent_Conditional_21_td_116_Conditional_4_Template, 2, 0, "button", 88)(5, ActionsComponent_Conditional_21_td_116_Conditional_5_Template, 2, 0, "button", 89);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r38 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r38.stage !== "Closed" && a_r38.canUpdate ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r38.stage === "Owned" && a_r38.canUpdate ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r38.stage !== "Closed" && a_r38.canClose ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(a_r38.stage === "Closed" && a_r38.canUpdate ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.auth.can("action.delete") ? 5 : -1);
  }
}
function ActionsComponent_Conditional_21_tr_117_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 51);
  }
}
function ActionsComponent_Conditional_21_tr_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 52);
  }
}
function ActionsComponent_Conditional_21_tr_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 53)(1, "td", 54);
    \u0275\u0275text(2, "No actions match");
    \u0275\u0275elementEnd()();
  }
}
function ActionsComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "div", 13)(2, "h2");
    \u0275\u0275text(3, "Action Pipeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15);
    \u0275\u0275text(5, "Stage-wise count of actions in scope");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275repeaterCreate(7, ActionsComponent_Conditional_21_For_8_Template, 5, 4, "div", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 56)(10, "div", 39);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_21_Template_div_click_10_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filter({ stage: "Open", due: null }));
    });
    \u0275\u0275elementStart(11, "b");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "OPEN");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 39);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_21_Template_div_click_15_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filter({ stage: "Open", due: "Due7" }));
    });
    \u0275\u0275elementStart(16, "b");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "DUE 7 D");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 39);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_21_Template_div_click_20_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filter({ stage: "Open", due: "Overdue" }));
    });
    \u0275\u0275elementStart(21, "b", 57);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "OVERDUE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 58);
    \u0275\u0275listener("click", function ActionsComponent_Conditional_21_Template_div_click_25_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filter({ due: "ClosedMTD" }));
    });
    \u0275\u0275elementStart(26, "b", 59);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "CLOSED");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 17);
    \u0275\u0275text(31, "Escalation: overdue \u2192 L1 Function Head; overdue >14 days \u2192 L2 Plant Head.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 13)(33, "h2");
    \u0275\u0275text(34, "Ownership by Function");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "table", 60)(36, "thead")(37, "tr")(38, "th");
    \u0275\u0275text(39, "Function");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "th", 61);
    \u0275\u0275text(41, "Open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "th", 61);
    \u0275\u0275text(43, "Overdue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "th", 61);
    \u0275\u0275text(45, "Closed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "tbody");
    \u0275\u0275repeaterCreate(47, ActionsComponent_Conditional_21_For_48_Template, 9, 6, "tr", 62, _forTrack0, false, ActionsComponent_Conditional_21_ForEmpty_49_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(50, "div", 63);
    \u0275\u0275elementStart(51, "div", 13)(52, "h2");
    \u0275\u0275text(53, "Action Register");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 15);
    \u0275\u0275text(55, "Action plan, target date, responsible function / person and escalation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 6);
    \u0275\u0275template(57, ActionsComponent_Conditional_21_Conditional_57_Template, 6, 2, "div", 64);
    \u0275\u0275elementStart(58, "div", 64)(59, "label");
    \u0275\u0275text(60, "Function");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "select", 65);
    \u0275\u0275listener("ngModelChange", function ActionsComponent_Conditional_21_Template_select_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filter({ fn: $event }));
    });
    \u0275\u0275elementStart(62, "option");
    \u0275\u0275text(63, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(64, ActionsComponent_Conditional_21_For_65_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 64)(67, "label");
    \u0275\u0275text(68, "Due");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "select", 65);
    \u0275\u0275listener("ngModelChange", function ActionsComponent_Conditional_21_Template_select_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filter({ due: $event }));
    });
    \u0275\u0275elementStart(70, "option", 66);
    \u0275\u0275text(71, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "option", 67);
    \u0275\u0275text(73, "Overdue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "option", 68);
    \u0275\u0275text(75, "Due within 7 days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "option", 69);
    \u0275\u0275text(77, "Closed this month");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "span", 17);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd();
    \u0275\u0275element(80, "span", 11);
    \u0275\u0275template(81, ActionsComponent_Conditional_21_Conditional_81_Template, 2, 0, "button", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 18)(83, "table", 19);
    \u0275\u0275elementContainerStart(84, 70);
    \u0275\u0275template(85, ActionsComponent_Conditional_21_th_85_Template, 2, 0, "th", 21)(86, ActionsComponent_Conditional_21_td_86_Template, 3, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(87, 20);
    \u0275\u0275template(88, ActionsComponent_Conditional_21_th_88_Template, 2, 0, "th", 21)(89, ActionsComponent_Conditional_21_td_89_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(90, 71);
    \u0275\u0275template(91, ActionsComponent_Conditional_21_th_91_Template, 2, 0, "th", 21)(92, ActionsComponent_Conditional_21_td_92_Template, 4, 4, "td", 72);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(93, 73);
    \u0275\u0275template(94, ActionsComponent_Conditional_21_th_94_Template, 2, 0, "th", 21)(95, ActionsComponent_Conditional_21_td_95_Template, 2, 1, "td", 72);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(96, 74);
    \u0275\u0275template(97, ActionsComponent_Conditional_21_th_97_Template, 2, 0, "th", 21)(98, ActionsComponent_Conditional_21_td_98_Template, 6, 3, "td", 72);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(99, 33);
    \u0275\u0275template(100, ActionsComponent_Conditional_21_th_100_Template, 2, 0, "th", 21)(101, ActionsComponent_Conditional_21_td_101_Template, 4, 2, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(102, 75);
    \u0275\u0275template(103, ActionsComponent_Conditional_21_th_103_Template, 2, 0, "th", 21)(104, ActionsComponent_Conditional_21_td_104_Template, 3, 3, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(105, 76);
    \u0275\u0275template(106, ActionsComponent_Conditional_21_th_106_Template, 2, 0, "th", 21)(107, ActionsComponent_Conditional_21_td_107_Template, 4, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(108, 77);
    \u0275\u0275template(109, ActionsComponent_Conditional_21_th_109_Template, 2, 0, "th", 21)(110, ActionsComponent_Conditional_21_td_110_Template, 2, 1, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(111, 78);
    \u0275\u0275template(112, ActionsComponent_Conditional_21_th_112_Template, 2, 0, "th", 21)(113, ActionsComponent_Conditional_21_td_113_Template, 3, 4, "td", 22);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(114, 79);
    \u0275\u0275template(115, ActionsComponent_Conditional_21_th_115_Template, 1, 0, "th", 21)(116, ActionsComponent_Conditional_21_td_116_Template, 6, 5, "td", 80);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(117, ActionsComponent_Conditional_21_tr_117_Template, 1, 0, "tr", 35)(118, ActionsComponent_Conditional_21_tr_118_Template, 1, 0, "tr", 36)(119, ActionsComponent_Conditional_21_tr_119_Template, 3, 0, "tr", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(120, "mat-paginator", 38, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.stages);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.acts().length - ctx_r1.count("Closed"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.due7());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.overdue());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.count("Closed"));
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.byFn());
    \u0275\u0275advance(10);
    \u0275\u0275conditional(ctx_r1.view() === "open" ? 57 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.fn());
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_10_0 = (tmp_10_0 = ctx_r1.scope.masters()) == null ? null : tmp_10_0.functions) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : \u0275\u0275pureFunction0(15, _c5));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.due());
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ctx_r1.register().length, " actions");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.auth.can("action.create") ? 81 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r1.rds);
    \u0275\u0275advance(34);
    \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(16, _c6))("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(17, _c6));
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(18, _c4));
  }
}
var ActionsComponent = class _ActionsComponent {
  api = inject(ApiService);
  auth = inject(AuthService);
  scope = inject(ScopeService);
  dlg = inject(MatDialog);
  toast = inject(ToastService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  view = input("queue");
  qp = toSignal(this.route.queryParamMap, { initialValue: this.route.snapshot.queryParamMap });
  queue = signal([]);
  acts = signal([]);
  prio = signal("All");
  short = SHORT;
  stages = STAGES;
  stageClass = stageClass;
  stage = computed(() => this.qp().get("stage") || "Open");
  fn = computed(() => this.qp().get("fn") || "All");
  due = computed(() => this.qp().get("due") || "All");
  qds = new MatTableDataSource([]);
  rds = new MatTableDataSource([]);
  set qpager(p) {
    if (p)
      this.qds.paginator = p;
  }
  set rpager(p) {
    if (p)
      this.rds.paginator = p;
  }
  constructor() {
    effect(() => {
      this.scope.version();
      this.view();
      const f = this.scope.filter();
      this.api.actions().subscribe((a) => this.acts.set(a.filter((x) => (f.bu === "All" || x.bu === f.bu) && (f.plant === "All" || x.plant === f.plant))));
      if (this.view() === "queue")
        this.api.queue(this.prio()).subscribe((q) => this.queue.set(q.filter((z) => (f.bu === "All" || z.item.bu === f.bu) && (f.plant === "All" || z.item.plant === f.plant))));
    }, { allowSignalWrites: true });
    effect(() => {
      this.qds.data = this.queue();
    });
    effect(() => {
      this.rds.data = this.register();
    });
  }
  register = computed(() => {
    const st = this.view() === "closed" ? "Closed" : this.stage(), fn = this.fn(), due = this.due(), month = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
    return this.acts().filter((a) => (st === "All" || (st === "Open" ? a.stage !== "Closed" : a.stage === st)) && (fn === "All" || a.functionName === fn) && (due === "All" || (due === "Overdue" ? a.overdue : due === "Due7" ? a.stage !== "Closed" && a.daysLeft !== null && a.daysLeft >= 0 && a.daysLeft <= 7 : a.stage === "Closed" && (a.closedDate || "").startsWith(month)))).sort((a, b) => st === "Closed" ? (b.closedDate || "").localeCompare(a.closedDate || "") : (a.targetDate || "9999").localeCompare(b.targetDate || "9999"));
  });
  count = (s) => this.acts().filter((a) => a.stage === s).length;
  due7 = computed(() => this.acts().filter((a) => a.stage !== "Closed" && a.daysLeft !== null && a.daysLeft >= 0 && a.daysLeft <= 7).length);
  overdue = computed(() => this.acts().filter((a) => a.overdue).length);
  byFn = computed(() => {
    const m = /* @__PURE__ */ new Map();
    this.acts().forEach((a) => {
      const c = m.get(a.functionName) || [0, 0, 0];
      if (a.stage === "Closed")
        c[2]++;
      else {
        c[0]++;
        if (a.overdue)
          c[1]++;
      }
      m.set(a.functionName, c);
    });
    return [...m.entries()].map(([f, c]) => ({ f, open: c[0], od: c[1], cl: c[2] }));
  });
  setPrio(p) {
    this.prio.set(p);
    this.scope.refresh();
  }
  filter(q) {
    this.router.navigate([], { queryParams: q, queryParamsHandling: "merge" });
  }
  assign(q) {
    openActionForm(this.dlg, { item: q.item, suggestedType: q.suggestedType, suggestedPlan: q.suggestedPlan, suggestedFunction: q.suggestedFunction });
  }
  newFree() {
    openActionForm(this.dlg, {});
  }
  edit(a) {
    openActionForm(this.dlg, { action: a });
  }
  close(a) {
    this.dlg.open(CloseDialog, { data: a, width: "760px", maxWidth: "96vw" });
  }
  record(id) {
    this.dlg.open(RecordDialog, { data: { id }, width: "900px", maxWidth: "96vw" });
  }
  step(a, s) {
    this.api.actionStep(a.id, s).subscribe({ next: () => {
      this.toast.show(s === "start" ? "Action started" : "Action reopened");
      this.scope.refresh();
    }, error: (e) => this.toast.show(errMsg(e)) });
  }
  remove(a) {
    if (!confirm(`Delete action ${a.id}?`))
      return;
    this.api.delete(`/actions/${a.id}`).subscribe({ next: () => {
      this.toast.show("Action deleted");
      this.scope.refresh();
    }, error: (e) => this.toast.show(errMsg(e)) });
  }
  export() {
    this.api.download("/actions/export", {}, "actions.xlsx").subscribe();
  }
  static \u0275fac = function ActionsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActionsComponent, selectors: [["ng-component"]], viewQuery: function ActionsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.qpager = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.rpager = _t.first);
    }
  }, inputs: { view: [1, "view"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 11, consts: [["qpg", ""], ["rpg", ""], [1, "pagehead"], [1, "eb"], [1, "scopetag"], [1, "q"], [1, "toolbar"], [1, "seg-tabs"], ["routerLink", "/actions/queue"], ["routerLink", "/actions/open"], ["routerLink", "/actions/closed"], [1, "spacer"], [1, "btn", "secondary", "small"], [1, "panel"], [1, "btn", "secondary", "small", 3, "click"], [1, "desc"], [3, "on"], [1, "hint"], [1, "tablewrap"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "prio"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "score"], ["mat-header-cell", "", "class", "num", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "num", 4, "matCellDef"], ["matColumnDef", "flags"], ["matColumnDef", "name"], ["matColumnDef", "cat"], ["matColumnDef", "plant"], ["matColumnDef", "value"], ["matColumnDef", "age"], ["matColumnDef", "rsl"], ["matColumnDef", "owner"], ["matColumnDef", "act"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions"], [3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "p"], ["mat-header-cell", "", 1, "num"], ["mat-cell", "", 1, "num"], [3, "flags"], [1, "tag", "mat"], [3, "d"], ["kind", "rsl", 3, "d"], [1, "btn", "small"], [1, "btn", "small", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "11", 1, "empty"], [1, "grid2"], [1, "countbox"], [2, "color", "var(--red)"], ["routerLink", "/actions/closed", 3, "click"], [2, "color", "var(--green)"], [1, "plain"], [1, "num"], [2, "cursor", "pointer"], [1, "gap"], [1, "fgroup"], [3, "ngModelChange", "ngModel"], ["value", "All"], ["value", "Overdue"], ["value", "Due7"], ["value", "ClosedMTD"], ["matColumnDef", "id"], ["matColumnDef", "mat"], ["mat-cell", "", "class", "wrap", 4, "matCellDef"], ["matColumnDef", "exc"], ["matColumnDef", "plan"], ["matColumnDef", "target"], ["matColumnDef", "left"], ["matColumnDef", "esc"], ["matColumnDef", "stage"], ["matColumnDef", "ops"], ["mat-cell", "", "style", "white-space:nowrap", 4, "matCellDef"], [2, "cursor", "pointer", 3, "click"], ["colspan", "4", 1, "empty"], ["mat-cell", "", 1, "wrap"], [3, "color"], [3, "class"], ["mat-cell", "", 2, "white-space", "nowrap"], [1, "btn", "green", "small"], [1, "btn", "ghost", "small"], ["title", "Delete", 1, "iconbtn"], [1, "btn", "green", "small", 3, "click"], [1, "btn", "ghost", "small", 3, "click"], ["title", "Delete", 1, "iconbtn", 3, "click"]], template: function ActionsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div")(2, "div", 3)(3, "span", 4);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, "Action Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2");
      \u0275\u0275text(7, "Actions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275text(9, "What action is required, who owns it and by when?");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 7)(12, "button", 8);
      \u0275\u0275text(13, "1 \xB7 Assign owner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 9);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(18, "span", 11);
      \u0275\u0275template(19, ActionsComponent_Conditional_19_Template, 2, 0, "button", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(20, ActionsComponent_Conditional_20_Template, 51, 13, "div", 13)(21, ActionsComponent_Conditional_21_Template, 122, 19);
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.scope.path().join(" \u203A "));
      \u0275\u0275advance(8);
      \u0275\u0275classProp("on", ctx.view() === "queue");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("on", ctx.view() === "open");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("2 \xB7 Track open actions (", ctx.acts().length - ctx.count("Closed"), ")");
      \u0275\u0275advance();
      \u0275\u0275classProp("on", ctx.view() === "closed");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("3 \xB7 Closed (", ctx.count("Closed"), ")");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.auth.can("export.data") ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.view() === "queue" ? 20 : 21);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, RouterLink, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatNoDataRow, MatPaginatorModule, MatPaginator, InrPipe, DatePipe2, DaysPill, FlagTags, PrioTag], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActionsComponent, { className: "ActionsComponent", filePath: "src\\app\\pages\\actions\\actions.component.ts", lineNumber: 20 });
})();
export {
  ActionsComponent
};
//# sourceMappingURL=chunk-IACXFSDM.js.map
