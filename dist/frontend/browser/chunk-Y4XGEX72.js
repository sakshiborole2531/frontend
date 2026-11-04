import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
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
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-HME2EOKK.js";
import {
  AuthService,
  ToastService,
  errMsg
} from "./chunk-3JYYVKE5.js";
import "./chunk-L6TX4WJQ.js";
import {
  DEPTS,
  MAT_TYPES
} from "./chunk-MBCJJNOW.js";
import {
  InrPipe,
  QtyPipe,
  StatusTags
} from "./chunk-2TWUEAPP.js";
import {
  ScopeService
} from "./chunk-CP6R3LGJ.js";
import "./chunk-EJQTPNTN.js";
import {
  ApiService
} from "./chunk-TJA4FRLP.js";
import {
  __spreadProps,
  __spreadValues,
  effect,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵviewQuery
} from "./chunk-BSQGTHQ3.js";

// src/app/pages/data/data.component.ts
var _forTrack0 = ($index, $item) => $item[0];
var _forTrack1 = ($index, $item) => $item.id + $item.issue;
var _c0 = () => ["bu", "plant", "cat", "code", "name", "batch", "qty", "value", "status", "ops"];
var _c1 = () => [25, 50, 100];
function DataComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td", 29)(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const g_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(g_r1[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(g_r1[1]);
  }
}
function DataComponent_ForEmpty_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 30);
    \u0275\u0275text(2, "No open data exceptions \u2713");
    \u0275\u0275elementEnd()();
  }
}
function DataComponent_For_39_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function DataComponent_For_39_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const i_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.edit(i_r3.id));
    });
    \u0275\u0275text(1, "Fix");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 31)(8, "span", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275template(11, DataComponent_For_39_Conditional_11_Template, 2, 0, "button", 32);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const i_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r3.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r3.batch || "\u2013");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r3.plant);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(i_r3.issue);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.auth.can("data.edit") ? 11 : -1);
  }
}
function DataComponent_ForEmpty_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 34);
    \u0275\u0275text(2, "Nothing to fix \u2713");
    \u0275\u0275elementEnd()();
  }
}
function DataComponent_Conditional_41_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275property("value", p_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r6);
  }
}
function DataComponent_Conditional_41_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, "Plant is required");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_Conditional_41_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275property("value", c_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7);
  }
}
function DataComponent_Conditional_41_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "option", 41);
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    \u0275\u0275property("value", s_r8);
  }
}
function DataComponent_Conditional_41_Conditional_29_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r9 = ctx.$implicit;
    \u0275\u0275property("value", d_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r9);
  }
}
function DataComponent_Conditional_41_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "label");
    \u0275\u0275text(2, "Department *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "select", 68);
    \u0275\u0275repeaterCreate(4, DataComponent_Conditional_41_Conditional_29_For_5_Template, 2, 2, "option", 41, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r3.depts);
  }
}
function DataComponent_Conditional_41_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
}
function DataComponent_Conditional_41_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, "Required, max 40 characters");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_Conditional_41_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_Conditional_41_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1, "Enter a cost \u2265 0");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_Conditional_41_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "label");
    \u0275\u0275text(2, "Sub-category");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 69);
    \u0275\u0275elementEnd();
  }
}
function DataComponent_Conditional_41_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, "SLED/BBD cannot be earlier than the Date of Manufacture.");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_Conditional_41_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1, "Enter at least one quantity greater than zero.");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_Conditional_41_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.error());
  }
}
function DataComponent_Conditional_41_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 70);
    \u0275\u0275listener("click", function DataComponent_Conditional_41_Conditional_109_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.cancel());
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 35);
    \u0275\u0275elementStart(1, "div", 36)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275text(5, "Stock quantities follow SAP stock types: Unrestricted, Quality inspection, Blocked. Plants and storage locations come from Masters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 37);
    \u0275\u0275listener("ngSubmit", function DataComponent_Conditional_41_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save());
    });
    \u0275\u0275elementStart(7, "div", 38)(8, "label");
    \u0275\u0275text(9, "Plant *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "select", 39)(11, "option", 40);
    \u0275\u0275text(12, "Select\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(13, DataComponent_Conditional_41_For_14_Template, 2, 2, "option", 41, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, DataComponent_Conditional_41_Conditional_15_Template, 2, 0, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 38)(17, "label");
    \u0275\u0275text(18, "Material category *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 43);
    \u0275\u0275repeaterCreate(20, DataComponent_Conditional_41_For_21_Template, 2, 2, "option", 41, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 38)(23, "label");
    \u0275\u0275text(24, "Storage location");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 44);
    \u0275\u0275elementStart(26, "datalist", 45);
    \u0275\u0275repeaterCreate(27, DataComponent_Conditional_41_For_28_Template, 1, 1, "option", 41, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, DataComponent_Conditional_41_Conditional_29_Template, 6, 0, "div", 38)(30, DataComponent_Conditional_41_Conditional_30_Template, 1, 0, "div");
    \u0275\u0275elementStart(31, "div", 38)(32, "label");
    \u0275\u0275text(33, "Material code *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "input", 46);
    \u0275\u0275template(35, DataComponent_Conditional_41_Conditional_35_Template, 2, 0, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 38)(37, "label");
    \u0275\u0275text(38, "Material description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 47);
    \u0275\u0275template(40, DataComponent_Conditional_41_Conditional_40_Template, 2, 0, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div", 38)(42, "label");
    \u0275\u0275text(43, "Batch / Lot");
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "input", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 38)(46, "label");
    \u0275\u0275text(47, "UOM");
    \u0275\u0275elementEnd();
    \u0275\u0275element(48, "input", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 38)(50, "label");
    \u0275\u0275text(51, "Unit cost (\u20B9) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(52, "input", 50);
    \u0275\u0275template(53, DataComponent_Conditional_41_Conditional_53_Template, 2, 0, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 38)(55, "label");
    \u0275\u0275text(56, "Unrestricted qty");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 38)(59, "label");
    \u0275\u0275text(60, "Quality inspection qty");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 38)(63, "label");
    \u0275\u0275text(64, "Blocked qty");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 38)(67, "label");
    \u0275\u0275text(68, "Block reason");
    \u0275\u0275elementEnd();
    \u0275\u0275element(69, "input", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(70, DataComponent_Conditional_41_Conditional_70_Template, 4, 0, "div", 38);
    \u0275\u0275elementStart(71, "div", 38)(72, "label");
    \u0275\u0275text(73, "GR posting date (in stock since)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "input", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 38)(76, "label");
    \u0275\u0275text(77, "Lying since (defaults to GR)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(78, "input", 56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "div", 38)(80, "label");
    \u0275\u0275text(81, "Last posting date (consumption)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "input", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 38)(84, "label");
    \u0275\u0275text(85, "Date of manufacture");
    \u0275\u0275elementEnd();
    \u0275\u0275element(86, "input", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "div", 38)(88, "label");
    \u0275\u0275text(89, "SLED/BBD (expiry)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "input", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "div", 38)(92, "label");
    \u0275\u0275text(93, "Date type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "select", 60)(95, "option");
    \u0275\u0275text(96, "Expiry");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "option");
    \u0275\u0275text(98, "Retest");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(99, "div", 61)(100, "label");
    \u0275\u0275text(101, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275element(102, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275template(103, DataComponent_Conditional_41_Conditional_103_Template, 2, 0, "div", 63)(104, DataComponent_Conditional_41_Conditional_104_Template, 2, 0, "div", 63)(105, DataComponent_Conditional_41_Conditional_105_Template, 2, 1, "div", 64);
    \u0275\u0275elementStart(106, "div", 65)(107, "button", 66);
    \u0275\u0275text(108);
    \u0275\u0275elementEnd();
    \u0275\u0275template(109, DataComponent_Conditional_41_Conditional_109_Template, 2, 0, "button", 67);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.editing() ? "Edit Record" : "Add Inventory Record");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r3.form);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r3.plants());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.bad("plant") ? 15 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r3.cats);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r3.slocs());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isCons() ? 29 : 30);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r3.bad("code") ? 35 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r3.bad("name") ? 40 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx_r3.bad("unitCost") ? 53 : -1);
    \u0275\u0275advance(17);
    \u0275\u0275conditional(ctx_r3.isCons() ? 70 : -1);
    \u0275\u0275advance(33);
    \u0275\u0275conditional((ctx_r3.form.errors == null ? null : ctx_r3.form.errors["expiryBeforeMfg"]) ? 103 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r3.form.errors == null ? null : ctx_r3.form.errors["noQty"]) && ctx_r3.form.touched ? 104 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.error() ? 105 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.editing() ? "Update record" : "Add record");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.editing() ? 109 : -1);
  }
}
function DataComponent_th_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 71);
    \u0275\u0275text(1, "BU");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_td_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r11.bu);
  }
}
function DataComponent_th_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 71);
    \u0275\u0275text(1, "Plant");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_td_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r12.plant);
  }
}
function DataComponent_th_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 71);
    \u0275\u0275text(1, "Category");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_td_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", x_r13.matType, "", x_r13.dept ? " (" + x_r13.dept + ")" : "", "");
  }
}
function DataComponent_th_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 71);
    \u0275\u0275text(1, "Code");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_td_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r14.code);
  }
}
function DataComponent_th_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 71);
    \u0275\u0275text(1, "Description");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_td_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r15.name);
  }
}
function DataComponent_th_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 71);
    \u0275\u0275text(1, "Batch");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_td_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 72);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r16.batch || "\u2013");
  }
}
function DataComponent_th_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 73);
    \u0275\u0275text(1, "U / Q / B qty");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_td_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 74);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "qty");
    \u0275\u0275pipe(3, "qty");
    \u0275\u0275pipe(4, "qty");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(2, 3, x_r17.unrestrictedQty), " / ", \u0275\u0275pipeBind1(3, 5, x_r17.qualityQty), " / ", \u0275\u0275pipeBind1(4, 7, x_r17.blockedQty), "");
  }
}
function DataComponent_th_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 73);
    \u0275\u0275text(1, "Value");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_td_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 74);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "inr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, x_r18.value));
  }
}
function DataComponent_th_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 71);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_td_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 72);
    \u0275\u0275element(1, "status-tags", 75);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("x", x_r19);
  }
}
function DataComponent_th_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 71);
  }
}
function DataComponent_td_76_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function DataComponent_td_76_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const x_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.edit(x_r21.id));
    });
    \u0275\u0275text(1, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 77);
    \u0275\u0275listener("click", function DataComponent_td_76_Conditional_1_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r20);
      const x_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.remove(x_r21));
    });
    \u0275\u0275text(3, "Delete");
    \u0275\u0275elementEnd();
  }
}
function DataComponent_td_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 76);
    \u0275\u0275template(1, DataComponent_td_76_Conditional_1_Template, 4, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.auth.can("data.edit") ? 1 : -1);
  }
}
function DataComponent_tr_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 78);
  }
}
function DataComponent_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 79);
  }
}
var datesOk = (g) => {
  const m = g.get("mfgDate")?.value, e = g.get("expiryDate")?.value;
  return m && e && e < m ? { expiryBeforeMfg: true } : null;
};
var someQty = (g) => (+g.get("unrestrictedQty")?.value || 0) + (+g.get("qualityQty")?.value || 0) + (+g.get("blockedQty")?.value || 0) > 0 ? null : { noQty: true };
var DataComponent = class _DataComponent {
  api = inject(ApiService);
  auth = inject(AuthService);
  scope = inject(ScopeService);
  toast = inject(ToastService);
  fb = inject(FormBuilder);
  cats = MAT_TYPES;
  depts = DEPTS;
  issues = signal([]);
  editing = signal(null);
  error = signal("");
  ds = new MatTableDataSource([]);
  set pager(p) {
    if (p)
      this.ds.paginator = p;
  }
  form = this.fb.group({
    plant: ["", Validators.required],
    matType: ["Raw Material", Validators.required],
    storageLoc: [""],
    dept: ["Other"],
    code: ["", [Validators.required, Validators.maxLength(40)]],
    name: ["", [Validators.required, Validators.maxLength(200)]],
    batch: ["", Validators.maxLength(40)],
    uom: [""],
    subCat: [""],
    unitCost: [null, [Validators.required, Validators.min(0)]],
    unrestrictedQty: [0, Validators.min(0)],
    qualityQty: [0, Validators.min(0)],
    blockedQty: [0, Validators.min(0)],
    blockReason: [""],
    receiptDate: [""],
    lyingSince: [""],
    lastIssueDate: [""],
    mfgDate: [""],
    expiryDate: [""],
    dateType: ["Expiry"],
    remarks: [""]
  }, { validators: [datesOk, someQty] });
  constructor() {
    effect(() => {
      this.scope.version();
      const f = this.scope.filter();
      this.api.dataIssues().subscribe((i) => this.issues.set(i));
      this.api.inventory(f).subscribe((r) => this.ds.data = r);
    });
  }
  plants() {
    return this.scope.activePlants().map((p) => p.name);
  }
  slocs() {
    return [...new Set((this.scope.masters()?.storageLocations ?? []).map((s) => s.name))];
  }
  isCons() {
    return this.form.value.matType === "Consumable";
  }
  bad(k) {
    const c = this.form.get(k);
    return !!c && c.invalid && c.touched;
  }
  groups() {
    const g = {};
    this.issues().forEach((i) => g[i.issue] = (g[i.issue] || 0) + 1);
    return Object.entries(g);
  }
  edit(id) {
    this.api.item(id).subscribe((x) => {
      this.editing.set(id);
      this.form.reset(__spreadProps(__spreadValues({}, x), {
        dept: x.dept || "Other",
        receiptDate: x.receiptDate || "",
        lyingSince: x.lyingSince || "",
        lastIssueDate: x.lastIssueDate || "",
        mfgDate: x.mfgDate || "",
        expiryDate: x.expiryDate || "",
        storageLoc: x.storageLoc || "",
        uom: x.uom || "",
        subCat: x.subCat || "",
        blockReason: x.blockReason || "",
        remarks: x.remarks || ""
      }));
      document.getElementById("entryPanel")?.scrollIntoView({ behavior: "smooth" });
    });
  }
  cancel() {
    this.editing.set(null);
    this.form.reset({ matType: "Raw Material", dept: "Other", dateType: "Expiry", unrestrictedQty: 0, qualityQty: 0, blockedQty: 0 });
  }
  save() {
    this.form.markAllAsTouched();
    this.error.set("");
    if (this.form.invalid)
      return;
    const v = __spreadValues({}, this.form.getRawValue());
    ["receiptDate", "lyingSince", "lastIssueDate", "mfgDate", "expiryDate"].forEach((k) => {
      if (!v[k])
        v[k] = null;
    });
    this.api.saveItem(this.editing(), v).subscribe({
      next: () => {
        this.toast.show(this.editing() ? "Record updated" : "Record added");
        this.cancel();
        this.scope.refresh();
      },
      error: (e) => this.error.set(errMsg(e))
    });
  }
  remove(x) {
    if (!confirm(`Delete ${x.code} / ${x.batch || "\u2013"} at ${x.plant}?`))
      return;
    this.api.deleteItem(x.id).subscribe({ next: () => {
      this.toast.show("Record deleted");
      this.scope.refresh();
    }, error: (e) => this.toast.show(errMsg(e)) });
  }
  static \u0275fac = function DataComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DataComponent, selectors: [["ng-component"]], viewQuery: function DataComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatPaginator, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.pager = _t.first);
    }
  }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 80, vars: 12, consts: [[1, "pagehead"], [1, "eb"], [1, "q"], [1, "grid2"], [1, "panel"], [1, "desc"], [1, "plain"], [1, "tablewrap", "short"], [1, "tablewrap"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "bu"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "plant"], ["matColumnDef", "cat"], ["matColumnDef", "code"], ["matColumnDef", "name"], ["matColumnDef", "batch"], ["matColumnDef", "qty"], ["mat-header-cell", "", "class", "num", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "num", 4, "matCellDef"], ["matColumnDef", "value"], ["matColumnDef", "status"], ["matColumnDef", "ops"], ["mat-cell", "", "style", "white-space:nowrap", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [1, "tag", "warn"], [1, "num"], [1, "empty"], [1, "wrap"], [1, "btn", "secondary", "small"], [1, "btn", "secondary", "small", 3, "click"], ["colspan", "5", 1, "empty"], [1, "gap"], ["id", "entryPanel", 1, "panel"], [1, "entry", 3, "ngSubmit", "formGroup"], [1, "fgroup"], ["formControlName", "plant"], ["value", "", "disabled", ""], [3, "value"], [1, "err"], ["formControlName", "matType"], ["type", "text", "formControlName", "storageLoc", "list", "slocDL", "placeholder", "Select or type"], ["id", "slocDL"], ["type", "text", "formControlName", "code"], ["type", "text", "formControlName", "name"], ["type", "text", "formControlName", "batch"], ["type", "text", "formControlName", "uom", "placeholder", "KG / NOS / LTR"], ["type", "number", "step", "any", "min", "0", "formControlName", "unitCost"], ["type", "number", "step", "any", "min", "0", "formControlName", "unrestrictedQty"], ["type", "number", "step", "any", "min", "0", "formControlName", "qualityQty"], ["type", "number", "step", "any", "min", "0", "formControlName", "blockedQty"], ["type", "text", "formControlName", "blockReason"], ["type", "date", "formControlName", "receiptDate"], ["type", "date", "formControlName", "lyingSince"], ["type", "date", "formControlName", "lastIssueDate"], ["type", "date", "formControlName", "mfgDate"], ["type", "date", "formControlName", "expiryDate"], ["formControlName", "dateType"], [1, "fgroup", "full"], ["type", "text", "formControlName", "remarks"], [1, "full", "err"], [1, "full", "autherr"], [1, "actions"], ["type", "submit", 1, "btn"], ["type", "button", 1, "btn", "secondary"], ["formControlName", "dept"], ["type", "text", "formControlName", "subCat", "placeholder", "e.g. Filters, Bearings"], ["type", "button", 1, "btn", "secondary", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "num"], ["mat-cell", "", 1, "num"], [3, "x"], ["mat-cell", "", 2, "white-space", "nowrap"], [1, "btn", "danger", "small", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function DataComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div", 1);
      \u0275\u0275text(3, "Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2");
      \u0275\u0275text(5, "Data Entry & Quality");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 2);
      \u0275\u0275text(7, "Fix incomplete records and add or edit inventory manually");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 3)(9, "div", 4)(10, "h2");
      \u0275\u0275text(11, "Data Exceptions by Type");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 5);
      \u0275\u0275text(13, "Incomplete data weakens aging, expiry and value KPIs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "table", 6)(15, "tbody");
      \u0275\u0275repeaterCreate(16, DataComponent_For_17_Template, 7, 2, "tr", null, _forTrack0, false, DataComponent_ForEmpty_18_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 4)(20, "h2");
      \u0275\u0275text(21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 5);
      \u0275\u0275text(23, "Fix at source (SAP) or in the form below.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 7)(25, "table")(26, "thead")(27, "tr")(28, "th");
      \u0275\u0275text(29, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "th");
      \u0275\u0275text(31, "Batch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "th");
      \u0275\u0275text(33, "Plant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "th");
      \u0275\u0275text(35, "Issue");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "th");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "tbody");
      \u0275\u0275repeaterCreate(38, DataComponent_For_39_Template, 12, 5, "tr", null, _forTrack1, false, DataComponent_ForEmpty_40_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(41, DataComponent_Conditional_41_Template, 110, 13);
      \u0275\u0275elementStart(42, "div", 4)(43, "h2");
      \u0275\u0275text(44, "All Inventory Records");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 8)(46, "table", 9);
      \u0275\u0275elementContainerStart(47, 10);
      \u0275\u0275template(48, DataComponent_th_48_Template, 2, 0, "th", 11)(49, DataComponent_td_49_Template, 2, 1, "td", 12);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(50, 13);
      \u0275\u0275template(51, DataComponent_th_51_Template, 2, 0, "th", 11)(52, DataComponent_td_52_Template, 2, 1, "td", 12);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(53, 14);
      \u0275\u0275template(54, DataComponent_th_54_Template, 2, 0, "th", 11)(55, DataComponent_td_55_Template, 2, 2, "td", 12);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(56, 15);
      \u0275\u0275template(57, DataComponent_th_57_Template, 2, 0, "th", 11)(58, DataComponent_td_58_Template, 2, 1, "td", 12);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(59, 16);
      \u0275\u0275template(60, DataComponent_th_60_Template, 2, 0, "th", 11)(61, DataComponent_td_61_Template, 2, 1, "td", 12);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(62, 17);
      \u0275\u0275template(63, DataComponent_th_63_Template, 2, 0, "th", 11)(64, DataComponent_td_64_Template, 2, 1, "td", 12);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(65, 18);
      \u0275\u0275template(66, DataComponent_th_66_Template, 2, 0, "th", 19)(67, DataComponent_td_67_Template, 5, 9, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(68, 21);
      \u0275\u0275template(69, DataComponent_th_69_Template, 2, 0, "th", 19)(70, DataComponent_td_70_Template, 3, 3, "td", 20);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(71, 22);
      \u0275\u0275template(72, DataComponent_th_72_Template, 2, 0, "th", 11)(73, DataComponent_td_73_Template, 2, 1, "td", 12);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275elementContainerStart(74, 23);
      \u0275\u0275template(75, DataComponent_th_75_Template, 1, 0, "th", 11)(76, DataComponent_td_76_Template, 2, 1, "td", 24);
      \u0275\u0275elementContainerEnd();
      \u0275\u0275template(77, DataComponent_tr_77_Template, 1, 0, "tr", 25)(78, DataComponent_tr_78_Template, 1, 0, "tr", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(79, "mat-paginator", 27);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.groups());
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Records to Fix (", ctx.issues().length, ")");
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.issues().slice(0, 300));
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.auth.can("data.edit") ? 41 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275property("dataSource", ctx.ds);
      \u0275\u0275advance(31);
      \u0275\u0275property("matHeaderRowDef", \u0275\u0275pureFunction0(9, _c0))("matHeaderRowDefSticky", true);
      \u0275\u0275advance();
      \u0275\u0275property("matRowDefColumns", \u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275advance();
      \u0275\u0275property("pageSizeOptions", \u0275\u0275pureFunction0(11, _c1));
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatPaginatorModule, MatPaginator, InrPipe, QtyPipe, StatusTags], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DataComponent, { className: "DataComponent", filePath: "src\\app\\pages\\data\\data.component.ts", lineNumber: 22 });
})();
export {
  DataComponent
};
//# sourceMappingURL=chunk-Y4XGEX72.js.map
