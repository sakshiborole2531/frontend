import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  TempPasswordDialog
} from "./chunk-KSMHFCGL.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
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
import "./chunk-2TWUEAPP.js";
import {
  ScopeService
} from "./chunk-CP6R3LGJ.js";
import {
  fmtDT
} from "./chunk-EJQTPNTN.js";
import {
  ApiService
} from "./chunk-TJA4FRLP.js";
import {
  __spreadProps,
  __spreadValues,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
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
  ɵɵpureFunction0,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BSQGTHQ3.js";

// src/app/pages/users/user-form.dialog.ts
var _forTrack0 = ($index, $item) => $item.code;
var _c0 = () => [];
function UserFormDialog_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Justification: ", ctx_r0.data.request.justification, "");
  }
}
function UserFormDialog_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "You are editing your own account. Role, privileges, data access, validity and status can only be changed by another administrator.");
    \u0275\u0275elementEnd();
  }
}
function UserFormDialog_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function UserFormDialog_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "3+ letters, digits, . _ -");
    \u0275\u0275elementEnd();
  }
}
function UserFormDialog_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, "Invalid email");
    \u0275\u0275elementEnd();
  }
}
function UserFormDialog_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    \u0275\u0275property("value", r_r2.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r2.label);
  }
}
function UserFormDialog_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const fn_r3 = ctx.$implicit;
    \u0275\u0275property("value", fn_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(fn_r3);
  }
}
function UserFormDialog_Conditional_91_For_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 36)(1, "input", 37);
    \u0275\u0275listener("change", function UserFormDialog_Conditional_91_For_2_For_9_Template_input_change_1_listener() {
      const u_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.tog(ctx_r0.units, u_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r7 = ctx.$implicit;
    const b_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.units.has(u_r7))("disabled", ctx_r0.self || ctx_r0.bus.has(b_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r7, "");
  }
}
function UserFormDialog_Conditional_91_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "label", 36)(2, "input", 37);
    \u0275\u0275listener("change", function UserFormDialog_Conditional_91_For_2_Template_input_change_2_listener() {
      const b_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.tog(ctx_r0.bus, b_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 3);
    \u0275\u0275text(6, "whole BU");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 38);
    \u0275\u0275repeaterCreate(8, UserFormDialog_Conditional_91_For_2_For_9_Template, 3, 3, "label", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const b_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r0.bus.has(b_r5))("disabled", ctx_r0.self);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r5);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.scope.unitsOf(b_r5));
  }
}
function UserFormDialog_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275repeaterCreate(1, UserFormDialog_Conditional_91_For_2_Template, 10, 3, "div", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.scope.bus());
  }
}
function UserFormDialog_For_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "select", 39);
    \u0275\u0275listener("change", function UserFormDialog_For_109_Template_select_change_4_listener($event) {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setGrant(p_r9, $event.target.value));
    });
    \u0275\u0275elementStart(5, "option", 20);
    \u0275\u0275text(6, "Role default");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "option", 40);
    \u0275\u0275text(8, "Grant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "option", 41);
    \u0275\u0275text(10, "Restrict");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td")(12, "input", 42);
    \u0275\u0275listener("change", function UserFormDialog_For_109_Template_input_change_12_listener($event) {
      const p_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setUntil(p_r9, $event.target.value));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r9, "", ctx_r0.data.privileged.includes(p_r9) ? " \u{1F512}" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", (ctx_r0.grants[p_r9] == null ? null : ctx_r0.grants[p_r9].mode) || "")("disabled", ctx_r0.self);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", (ctx_r0.grants[p_r9] == null ? null : ctx_r0.grants[p_r9].until) || "")("disabled", ctx_r0.self || !ctx_r0.grants[p_r9]);
  }
}
function UserFormDialog_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
var UserFormDialog = class _UserFormDialog {
  api = inject(ApiService);
  ref = inject(MatDialogRef);
  auth = inject(AuthService);
  scope = inject(ScopeService);
  data = inject(MAT_DIALOG_DATA);
  self = !!this.data.user && this.data.user.id === this.auth.me()?.id;
  error = signal("");
  busy = signal(false);
  bus = /* @__PURE__ */ new Set();
  units = /* @__PURE__ */ new Set();
  grants = {};
  f = inject(FormBuilder).nonNullable.group({
    name: ["", Validators.required],
    username: ["", [Validators.required, Validators.pattern(/^[\w.\-]{3,}$/)]],
    email: ["", Validators.email],
    phone: [""],
    empId: [""],
    designation: [""],
    department: [""],
    location: [""],
    role: ["viewer", Validators.required],
    functionName: [""],
    validUntil: [""],
    active: [true],
    scopeAll: [false],
    reason: [""]
  });
  constructor() {
    const u = this.data.user, r = this.data.request;
    if (u) {
      this.f.patchValue(__spreadProps(__spreadValues({}, u), { email: u.email || "", validUntil: u.validUntil || "", functionName: u.functionName || "" }));
      u.scopeBus.forEach((b) => this.bus.add(b));
      u.scopeUnits.forEach((x) => this.units.add(x));
      u.grants.forEach((g) => this.grants[g.permission] = { mode: g.mode, until: g.until || "" });
    } else if (r) {
      this.f.patchValue({ name: r.name, username: r.username, email: r.email, empId: r.empId || "", designation: r.designation || "", department: r.department || "", phone: r.phone || "", role: r.roleCode || "viewer", scopeAll: r.buCode === "ALL" });
      if (r.buCode && r.buCode !== "ALL") {
        if (r.unit)
          this.units.add(r.unit);
        else
          this.bus.add(r.buCode);
      }
    }
    if (this.self)
      ["role", "functionName", "validUntil", "active", "scopeAll"].forEach((k) => this.f.get(k)?.disable());
  }
  bad(k) {
    const c = this.f.get(k);
    return !!c && c.invalid && c.touched;
  }
  tog(s, v) {
    s.has(v) ? s.delete(v) : s.add(v);
  }
  setGrant(p, mode) {
    if (!mode)
      delete this.grants[p];
    else
      this.grants[p] = { mode, until: this.grants[p]?.until || "" };
  }
  setUntil(p, until) {
    if (this.grants[p])
      this.grants[p].until = until;
  }
  save() {
    this.f.markAllAsTouched();
    if (this.f.invalid)
      return;
    const v = this.f.getRawValue();
    if (!v.scopeAll && !this.bus.size && !this.units.size) {
      this.error.set("Select at least one business unit or unit, or choose Entire organization.");
      return;
    }
    const body = __spreadProps(__spreadValues({}, v), {
      validUntil: v.validUntil || null,
      functionName: v.functionName || null,
      scopeBus: [...this.bus],
      scopeUnits: [...this.units],
      grants: Object.entries(this.grants).map(([permission, g]) => ({ permission, mode: g.mode, until: g.until || null })),
      reason: v.reason || null
    });
    this.busy.set(true);
    const req = this.data.user ? this.api.put(`/admin/users/${this.data.user.id}`, body) : this.data.request ? this.api.post(`/admin/access-requests/${this.data.request.id}/approve`, body) : this.api.post("/admin/users", body);
    req.subscribe({ next: (r) => this.ref.close(r), error: (e) => {
      this.busy.set(false);
      this.error.set(errMsg(e));
    } });
  }
  static \u0275fac = function UserFormDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserFormDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserFormDialog, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 122, vars: 18, consts: [["mat-dialog-content", ""], [1, "mhead"], [1, "eyebrow"], [1, "hint"], ["mat-dialog-close", "", 1, "x"], [1, "note", 2, "margin-bottom", "10px"], [1, "entry", 3, "ngSubmit", "formGroup"], [1, "fgroup"], ["type", "text", "formControlName", "name"], [1, "err"], ["type", "text", "formControlName", "username", 3, "readonly"], ["type", "email", "formControlName", "email"], ["type", "text", "formControlName", "phone"], ["type", "text", "formControlName", "empId"], ["type", "text", "formControlName", "designation"], ["type", "text", "formControlName", "department"], ["type", "text", "formControlName", "location"], ["formControlName", "role"], [3, "value"], ["formControlName", "functionName"], ["value", ""], ["type", "date", "formControlName", "validUntil"], ["formControlName", "active"], [3, "ngValue"], [1, "fgroup", "full"], [1, "radios", 2, "flex-direction", "row", "flex-wrap", "wrap"], ["type", "radio", "formControlName", "scopeAll", 3, "value"], [1, "scopepick"], [1, "fgroup", "full", "privbox"], [1, "plain", "privtbl"], ["type", "text", "formControlName", "reason", "placeholder", "e.g. IT-REQ-2026-1142"], [1, "full", "autherr"], [1, "actions"], ["type", "submit", 1, "btn", 3, "disabled"], ["type", "button", "mat-dialog-close", "", 1, "btn", "secondary"], [1, "spbu"], [1, "chk"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "spunits"], [3, "change", "value", "disabled"], ["value", "grant"], ["value", "deny"], ["type", "date", 3, "change", "value", "disabled"]], template: function UserFormDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h3");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, UserFormDialog_Conditional_7_Template, 2, 1, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275text(9, "\xD7");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, UserFormDialog_Conditional_10_Template, 2, 0, "div", 5);
      \u0275\u0275elementStart(11, "form", 6);
      \u0275\u0275listener("ngSubmit", function UserFormDialog_Template_form_ngSubmit_11_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(12, "div", 7)(13, "label");
      \u0275\u0275text(14, "Full name *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 8);
      \u0275\u0275template(16, UserFormDialog_Conditional_16_Template, 2, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 7)(18, "label");
      \u0275\u0275text(19, "Username *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 10);
      \u0275\u0275template(21, UserFormDialog_Conditional_21_Template, 2, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 7)(23, "label");
      \u0275\u0275text(24, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 11);
      \u0275\u0275template(26, UserFormDialog_Conditional_26_Template, 2, 0, "div", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 7)(28, "label");
      \u0275\u0275text(29, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 7)(32, "label");
      \u0275\u0275text(33, "Employee ID");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 7)(36, "label");
      \u0275\u0275text(37, "Designation");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 7)(40, "label");
      \u0275\u0275text(41, "Department");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 7)(44, "label");
      \u0275\u0275text(45, "Location");
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 7)(48, "label");
      \u0275\u0275text(49, "Role *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "select", 17);
      \u0275\u0275repeaterCreate(51, UserFormDialog_For_52_Template, 2, 2, "option", 18, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 7)(54, "label");
      \u0275\u0275text(55, "Function (own actions)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "select", 19)(57, "option", 20);
      \u0275\u0275text(58, "\u2014");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(59, UserFormDialog_For_60_Template, 2, 2, "option", 18, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div", 7)(62, "label");
      \u0275\u0275text(63, "Account valid until");
      \u0275\u0275elementEnd();
      \u0275\u0275element(64, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 7)(66, "label");
      \u0275\u0275text(67, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "select", 22)(69, "option", 23);
      \u0275\u0275text(70, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "option", 23);
      \u0275\u0275text(72, "Inactive");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 24)(74, "label");
      \u0275\u0275text(75, "Data access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "div", 25)(77, "label");
      \u0275\u0275element(78, "input", 26);
      \u0275\u0275elementStart(79, "div")(80, "b");
      \u0275\u0275text(81, "Entire organization");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "span");
      \u0275\u0275text(83, "All business units and units");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "label");
      \u0275\u0275element(85, "input", 26);
      \u0275\u0275elementStart(86, "div")(87, "b");
      \u0275\u0275text(88, "Selected business units / units");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "span");
      \u0275\u0275text(90, "Only data of the ticked items");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(91, UserFormDialog_Conditional_91_Template, 3, 0, "div", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "details", 28)(93, "summary")(94, "b");
      \u0275\u0275text(95, "Individual privileges");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "span", 3);
      \u0275\u0275text(97, "\u2014 grant extra permissions or restrict role permissions for this user only");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(98, "table", 29)(99, "thead")(100, "tr")(101, "th");
      \u0275\u0275text(102, "Permission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "th");
      \u0275\u0275text(104, "Override");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "th");
      \u0275\u0275text(106, "Until");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "tbody");
      \u0275\u0275repeaterCreate(108, UserFormDialog_For_109_Template, 13, 6, "tr", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(110, "div", 24)(111, "label");
      \u0275\u0275text(112, "Reason / ticket reference ");
      \u0275\u0275elementStart(113, "span", 3);
      \u0275\u0275text(114, "(required when privileged \u{1F512} access is added)");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(115, "input", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275template(116, UserFormDialog_Conditional_116_Template, 2, 1, "div", 31);
      \u0275\u0275elementStart(117, "div", 32)(118, "button", 33);
      \u0275\u0275text(119);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "button", 34);
      \u0275\u0275text(121, "Cancel");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_10_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.data.user ? "Edit user" : ctx.data.request ? "Approve access request" : "New user");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.data.user == null ? null : ctx.data.user.name) || (ctx.data.request == null ? null : ctx.data.request.name) || "Add user");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data.request ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.self ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("formGroup", ctx.f);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.bad("name") ? 16 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("readonly", !!ctx.data.user);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.bad("username") ? 21 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.bad("email") ? 26 : -1);
      \u0275\u0275advance(25);
      \u0275\u0275repeater(ctx.data.roles);
      \u0275\u0275advance(8);
      \u0275\u0275repeater((tmp_10_0 = (tmp_10_0 = ctx.scope.masters()) == null ? null : tmp_10_0.functions) !== null && tmp_10_0 !== void 0 ? tmp_10_0 : \u0275\u0275pureFunction0(17, _c0));
      \u0275\u0275advance(10);
      \u0275\u0275property("ngValue", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngValue", false);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", true);
      \u0275\u0275advance(7);
      \u0275\u0275property("value", false);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(!ctx.f.value.scopeAll ? 91 : -1);
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.data.permissions);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.error() ? 116 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.data.user ? "Save changes" : ctx.data.request ? "Approve & create user" : "Create user");
    }
  }, dependencies: [MatDialogModule, MatDialogClose, MatDialogContent, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserFormDialog, { className: "UserFormDialog", filePath: "src\\app\\pages\\users\\user-form.dialog.ts", lineNumber: 51 });
})();

// src/app/pages/users/users.component.ts
var _forTrack02 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.code;
function UsersComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.pending(), ")");
  }
}
function UsersComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function UsersComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set("users"));
    });
    \u0275\u0275text(1, "Users ");
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275listener("click", function UsersComponent_Conditional_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set("requests"));
    });
    \u0275\u0275text(5, "Access requests ");
    \u0275\u0275template(6, UsersComponent_Conditional_10_Conditional_6_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 7);
    \u0275\u0275listener("click", function UsersComponent_Conditional_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set("roles"));
    });
    \u0275\u0275text(8, "Roles & permissions");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r1.tab() === "users");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", ctx_r1.users().length, ")");
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.tab() === "requests");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.pending() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r1.tab() === "roles");
  }
}
function UsersComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function UsersComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tab.set("audit"));
    });
    \u0275\u0275text(1, "Audit log ");
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r1.tab() === "audit");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", ctx_r1.audit().totalElements, ")");
  }
}
function UsersComponent_Case_13_For_26_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "you");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Case_13_For_26_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, " \u{1F512}");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Case_13_For_26_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function UsersComponent_Case_13_For_26_Conditional_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const u_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.unlock(u_r6));
    });
    \u0275\u0275text(1, "Unlock");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Case_13_For_26_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function UsersComponent_Case_13_For_26_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const u_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.remove(u_r6));
    });
    \u0275\u0275text(1, "\u2715");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Case_13_For_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, UsersComponent_Case_13_For_26_Conditional_4_Template, 2, 0, "span", 13);
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275template(9, UsersComponent_Case_13_For_26_Conditional_9_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "td", 8);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 8);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 16)(22, "button", 17);
    \u0275\u0275listener("click", function UsersComponent_Case_13_For_26_Template_button_click_22_listener() {
      const u_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form(u_r6));
    });
    \u0275\u0275text(23, "Edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 18);
    \u0275\u0275listener("click", function UsersComponent_Case_13_For_26_Template_button_click_24_listener() {
      const u_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reset(u_r6));
    });
    \u0275\u0275text(25, "Reset");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, UsersComponent_Case_13_For_26_Conditional_26_Template, 2, 0, "button", 19)(27, UsersComponent_Case_13_For_26_Conditional_27_Template, 2, 0, "button", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_23_0;
    const u_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r6.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r6.id === ((tmp_12_0 = ctx_r1.auth.me()) == null ? null : tmp_12_0.id) ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("@", u_r6.username, "", u_r6.designation ? " \xB7 " + u_r6.designation : "", "", u_r6.functionName ? " \xB7 " + u_r6.functionName : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r6.roleLabel);
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r6.privileged.length ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.scopeText(u_r6));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r6.grants.length || "\u2013");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("tag ", ctx_r1.statusCls(u_r6.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r6.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r6.validUntil || "\u2013");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDT(u_r6.lastLogin));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(u_r6.status === "Locked" ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(u_r6.id !== ((tmp_23_0 = ctx_r1.auth.me()) == null ? null : tmp_23_0.id) ? 27 : -1);
  }
}
function UsersComponent_Case_13_ForEmpty_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 22);
    \u0275\u0275text(2, "No users");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 9);
    \u0275\u0275listener("click", function UsersComponent_Case_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form());
    });
    \u0275\u0275text(2, "\uFF0B Add user");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Case_13_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.q, $event) || (ctx_r1.q = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 12)(6, "table")(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Data access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Overrides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Valid until");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Last sign-in");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275repeaterCreate(25, UsersComponent_Case_13_For_26_Template, 28, 17, "tr", null, _forTrack02, false, UsersComponent_Case_13_ForEmpty_27_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.q);
    \u0275\u0275advance(21);
    \u0275\u0275repeater(ctx_r1.shown());
  }
}
function UsersComponent_Case_14_For_21_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r9.reason);
  }
}
function UsersComponent_Case_14_For_21_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function UsersComponent_Case_14_For_21_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const r_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form(void 0, r_r9));
    });
    \u0275\u0275text(1, "Approve\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 18);
    \u0275\u0275listener("click", function UsersComponent_Case_14_For_21_Conditional_19_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const r_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reject(r_r9));
    });
    \u0275\u0275text(3, "Reject");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Case_14_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td")(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, UsersComponent_Case_14_For_21_Conditional_17_Template, 2, 1, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td", 16);
    \u0275\u0275template(19, UsersComponent_Case_14_For_21_Conditional_19_Template, 4, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDT(r_r9.requestedAt));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("@", r_r9.username, " \xB7 ", r_r9.email, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.roleCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.buCode === "ALL" ? "Entire organization" : r_r9.buCode + (r_r9.unit ? " / " + r_r9.unit : ""));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r9.justification);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("tag ", r_r9.status === "pending" ? "warn" : r_r9.status === "approved" ? "ok" : "bad", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r9.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r9.reason ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(r_r9.status === "pending" ? 19 : -1);
  }
}
function UsersComponent_Case_14_ForEmpty_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 25);
    \u0275\u0275text(2, "No access requests");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1, "Requests submitted from the sign-in page. Approve to create the account \u2014 you can adjust role and data access before saving.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 12)(3, "table")(4, "thead")(5, "tr")(6, "th");
    \u0275\u0275text(7, "Requested");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Access needed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "BU / unit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Justification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275repeaterCreate(20, UsersComponent_Case_14_For_21_Template, 20, 13, "tr", null, _forTrack02, false, UsersComponent_Case_14_ForEmpty_22_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.requests());
  }
}
function UsersComponent_Case_15_For_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275text(0, "\xB7 ");
    \u0275\u0275elementStart(1, "a", 7);
    \u0275\u0275listener("click", function UsersComponent_Case_15_For_12_Conditional_4_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const r_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.delRole(r_r13.code));
    });
    \u0275\u0275text(2, "delete");
    \u0275\u0275elementEnd();
  }
}
function UsersComponent_Case_15_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "div", 8);
    \u0275\u0275text(3);
    \u0275\u0275template(4, UsersComponent_Case_15_For_12_Conditional_4_Template, 3, 0, "a");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r13 = ctx.$implicit;
    \u0275\u0275property("title", r_r13.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r13.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", r_r13.users, " users ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!r_r13.builtin ? 4 : -1);
  }
}
function UsersComponent_Case_15_For_15_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 28)(1, "input", 29);
    \u0275\u0275listener("change", function UsersComponent_Case_15_For_15_For_4_Template_input_change_1_listener($event) {
      const r_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const p_r16 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.togglePerm(r_r15, p_r16, $event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r15 = ctx.$implicit;
    const p_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("checked", r_r15.permissions.includes(p_r16))("disabled", r_r15.code === "admin");
  }
}
function UsersComponent_Case_15_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, UsersComponent_Case_15_For_15_For_4_Template, 2, 2, "td", 28, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r16, "", ctx_r1.roles().privileged.includes(p_r16) ? " \u{1F512}" : "", "");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.roles().roles);
  }
}
function UsersComponent_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 9);
    \u0275\u0275listener("click", function UsersComponent_Case_15_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addRole());
    });
    \u0275\u0275text(2, "\uFF0B Add custom role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 8);
    \u0275\u0275text(4, "\u{1F512} = privileged permission (needs a reason when granted). Administrator always has every permission. Changes apply immediately.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 12)(6, "table", 26)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Permission");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(11, UsersComponent_Case_15_For_12_Template, 5, 4, "th", 27, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, UsersComponent_Case_15_For_15_Template, 5, 2, "tr", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.roles().roles);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.roles().permissions);
  }
}
function UsersComponent_Case_16_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 15);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDT(a_r18.at));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r18.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r18.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r18.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r18.detail);
  }
}
function UsersComponent_Case_16_ForEmpty_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 35);
    \u0275\u0275text(2, "No entries");
    \u0275\u0275elementEnd()();
  }
}
function UsersComponent_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 30)(2, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function UsersComponent_Case_16_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.aq, $event) || (ctx_r1.aq = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function UsersComponent_Case_16_Template_input_keydown_enter_2_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadAudit(0));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 17);
    \u0275\u0275listener("click", function UsersComponent_Case_16_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadAudit(0));
    });
    \u0275\u0275text(4, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "span", 32);
    \u0275\u0275elementStart(8, "button", 33);
    \u0275\u0275listener("click", function UsersComponent_Case_16_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadAudit(ctx_r1.audit().number - 1));
    });
    \u0275\u0275text(9, "\u2039 Prev");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 33);
    \u0275\u0275listener("click", function UsersComponent_Case_16_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadAudit(ctx_r1.audit().number + 1));
    });
    \u0275\u0275text(13, "Next \u203A");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 34)(15, "table")(16, "thead")(17, "tr")(18, "th");
    \u0275\u0275text(19, "When");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th");
    \u0275\u0275text(23, "Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "th");
    \u0275\u0275text(25, "Detail");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275repeaterCreate(27, UsersComponent_Case_16_For_28_Template, 12, 5, "tr", null, _forTrack02, false, UsersComponent_Case_16_ForEmpty_29_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.aq);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.audit().totalElements, " entries");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.audit().number === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("Page ", ctx_r1.audit().number + 1, " / ", ctx_r1.audit().totalPages || 1, "");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.audit().number + 1 >= ctx_r1.audit().totalPages);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.audit().content);
  }
}
var UsersComponent = class _UsersComponent {
  api = inject(ApiService);
  auth = inject(AuthService);
  dlg = inject(MatDialog);
  toast = inject(ToastService);
  tab = signal(this.auth.can("users.manage") ? "users" : "audit");
  users = signal([]);
  requests = signal([]);
  roles = signal({ roles: [], permissions: [], privileged: [] });
  audit = signal({ content: [], totalElements: 0, number: 0, totalPages: 0 });
  q = "";
  aq = "";
  fmtDT = fmtDT;
  constructor() {
    this.load();
  }
  load() {
    if (this.auth.can("users.manage")) {
      this.api.get("/admin/users").subscribe((u) => this.users.set(u));
      this.api.get("/admin/access-requests").subscribe((r) => this.requests.set(r));
    }
    this.api.get("/admin/roles").subscribe((r) => this.roles.set(r));
    if (this.auth.can("audit.view"))
      this.loadAudit(0);
  }
  loadAudit(page) {
    this.api.get("/admin/audit", { q: this.aq, page, size: 50 }).subscribe((a) => this.audit.set(a));
  }
  shown() {
    const q = this.q.toLowerCase();
    return this.users().filter((u) => !q || [u.name, u.username, u.email, u.designation, u.roleLabel].join(" ").toLowerCase().includes(q));
  }
  pending() {
    return this.requests().filter((r) => r.status === "pending").length;
  }
  scopeText(u) {
    return u.scopeAll ? "Entire organization" : [...u.scopeBus.map((b) => b + " BU"), ...u.scopeUnits].join(", ") || "No data access";
  }
  statusCls(s) {
    return { Active: "ok", Inactive: "mat", Expired: "bad", Locked: "bad", "Temp. password": "warn" }[s] || "mat";
  }
  form(user, request) {
    const r = this.roles();
    this.dlg.open(UserFormDialog, { data: { user, request, roles: r.roles, permissions: r.permissions, privileged: r.privileged }, width: "960px", maxWidth: "96vw" }).afterClosed().subscribe((res) => {
      if (!res)
        return;
      if (res.temporaryPassword)
        this.dlg.open(TempPasswordDialog, { data: res, width: "520px" });
      else
        this.toast.show("User saved");
      this.load();
    });
  }
  reset(u) {
    if (!confirm(`Reset the password for ${u.name}? A temporary password will be shown once.`))
      return;
    this.api.post(`/admin/users/${u.id}/reset-password`).subscribe({ next: (r) => this.dlg.open(TempPasswordDialog, { data: r, width: "520px" }), error: (e) => this.toast.show(errMsg(e)) });
  }
  unlock(u) {
    this.api.post(`/admin/users/${u.id}/unlock`).subscribe(() => {
      this.toast.show("Unlocked");
      this.load();
    });
  }
  remove(u) {
    if (!confirm(`Delete user ${u.name}? Consider setting the account to Inactive instead.`))
      return;
    this.api.delete(`/admin/users/${u.id}`).subscribe({ next: () => {
      this.toast.show("User deleted");
      this.load();
    }, error: (e) => this.toast.show(errMsg(e)) });
  }
  reject(r) {
    const why = prompt(`Reason for rejecting ${r.name}'s request:`);
    if (why === null)
      return;
    this.api.post(`/admin/access-requests/${r.id}/reject`, { reason: why }).subscribe(() => this.load());
  }
  togglePerm(role, p, ev) {
    const on = ev.target.checked;
    let reason = null;
    if (on && this.roles().privileged.includes(p)) {
      reason = prompt(`"${p}" is a privileged permission. Reason / ticket reference for granting it to ${role.label}:`);
      if (!reason) {
        ev.target.checked = false;
        return;
      }
    }
    this.api.put(`/admin/roles/${role.code}/permissions/${p}`, { enabled: on, reason }).subscribe({ next: () => this.toast.show("Saved"), error: (e) => {
      this.toast.show(errMsg(e));
      this.load();
    } });
  }
  addRole() {
    const n = prompt("Name of the new role (e.g. QA Reviewer):");
    if (!n?.trim())
      return;
    this.api.post("/admin/roles", { label: n.trim() }).subscribe({ next: () => this.load(), error: (e) => this.toast.show(errMsg(e)) });
  }
  delRole(code) {
    if (confirm("Delete this role?"))
      this.api.delete("/admin/roles/" + code).subscribe({ next: () => this.load(), error: (e) => this.toast.show(errMsg(e)) });
  }
  static \u0275fac = function UsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UsersComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 3, consts: [[1, "pagehead"], [1, "eb"], [1, "q"], [1, "toolbar"], [1, "seg-tabs"], [3, "on"], [1, "panel"], [3, "click"], [1, "hint"], [1, "btn", 3, "click"], [1, "fsel", 2, "height", "34px", "min-width", "220px"], ["type", "text", "placeholder", "Search users", 3, "ngModelChange", "ngModel"], [1, "tablewrap", 2, "max-height", "none"], [1, "tag", "info"], ["title", "Holds privileged access"], [1, "wrap"], [2, "white-space", "nowrap"], [1, "btn", "secondary", "small", 3, "click"], [1, "btn", "ghost", "small", 3, "click"], [1, "btn", "ghost", "small"], ["title", "Delete user", 1, "iconbtn"], ["title", "Delete user", 1, "iconbtn", 3, "click"], ["colspan", "8", 1, "empty"], [1, "desc"], [1, "btn", "small", 3, "click"], ["colspan", "7", 1, "empty"], [1, "permtbl"], [1, "c", 3, "title"], [1, "c"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "fsel", 2, "height", "34px", "min-width", "280px"], ["type", "text", "placeholder", "Filter by user, activity or detail", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "spacer"], [1, "btn", "ghost", "small", 3, "click", "disabled"], [1, "tablewrap"], ["colspan", "4", 1, "empty"]], template: function UsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div", 1);
      \u0275\u0275text(3, "Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2");
      \u0275\u0275text(5, "Users & Access");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 2);
      \u0275\u0275text(7, "Who can sign in, what each role may do, which business units and units each user sees \u2014 and who did what");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 3)(9, "div", 4);
      \u0275\u0275template(10, UsersComponent_Conditional_10_Template, 9, 8)(11, UsersComponent_Conditional_11_Template, 4, 3, "button", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 6);
      \u0275\u0275template(13, UsersComponent_Case_13_Template, 28, 2)(14, UsersComponent_Case_14_Template, 23, 1)(15, UsersComponent_Case_15_Template, 16, 0)(16, UsersComponent_Case_16_Template, 30, 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.auth.can("users.manage") ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.can("audit.view") ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_2_0 = ctx.tab()) === "users" ? 13 : tmp_2_0 === "requests" ? 14 : tmp_2_0 === "roles" ? 15 : tmp_2_0 === "audit" ? 16 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UsersComponent, { className: "UsersComponent", filePath: "src\\app\\pages\\users\\users.component.ts", lineNumber: 14 });
})();
export {
  UsersComponent
};
//# sourceMappingURL=chunk-OCWZWOCF.js.map
