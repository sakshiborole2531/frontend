import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-HME2EOKK.js";
import {
  AuthService,
  ToastService,
  errMsg
} from "./chunk-3JYYVKE5.js";
import "./chunk-L6TX4WJQ.js";
import {
  fmtDT,
  initials
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate3
} from "./chunk-BSQGTHQ3.js";

// src/app/pages/profile/profile.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ProfileComponent_Conditional_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "Enter a valid email");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_0_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1, "At least 8 characters with a letter and a number");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_Conditional_0_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pwErr());
  }
}
function ProfileComponent_Conditional_0_For_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r3);
  }
}
function ProfileComponent_Conditional_0_For_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dt(a_r4.at));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r4.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.detail);
  }
}
function ProfileComponent_Conditional_0_ForEmpty_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 37);
    \u0275\u0275text(2, "No activity yet");
    \u0275\u0275elementEnd()();
  }
}
function ProfileComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "div", 1);
    \u0275\u0275text(3, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5, "My Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 2);
    \u0275\u0275text(7, "Your details, access, password and preferences");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 3)(9, "div", 4);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "h2");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 5);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 6)(17, "span", 7);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 8);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 9);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(23, "span", 10);
    \u0275\u0275elementStart(24, "button", 11);
    \u0275\u0275listener("click", function ProfileComponent_Conditional_0_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.auth.logout());
    });
    \u0275\u0275text(25, "Sign out");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 12)(27, "div", 13)(28, "h2");
    \u0275\u0275text(29, "My details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 14);
    \u0275\u0275text(31, "Role, privileges and data access are set by an administrator.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "form", 15);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_Conditional_0_Template_form_ngSubmit_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(33, "div", 16)(34, "label");
    \u0275\u0275text(35, "Full name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 16)(38, "label");
    \u0275\u0275text(39, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 18);
    \u0275\u0275template(41, ProfileComponent_Conditional_0_Conditional_41_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 16)(43, "label");
    \u0275\u0275text(44, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 16)(47, "label");
    \u0275\u0275text(48, "Employee ID");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 16)(51, "label");
    \u0275\u0275text(52, "Designation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 16)(55, "label");
    \u0275\u0275text(56, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 16)(59, "label");
    \u0275\u0275text(60, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275element(61, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 16)(63, "label");
    \u0275\u0275text(64, "Responsible function");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 26)(67, "button", 27);
    \u0275\u0275text(68, "Save details");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(69, "div", 13)(70, "h2");
    \u0275\u0275text(71, "Change password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "form", 28);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_Conditional_0_Template_form_ngSubmit_72_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.changePw());
    });
    \u0275\u0275elementStart(73, "div", 16)(74, "label");
    \u0275\u0275text(75, "Current password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(76, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "div", 16)(78, "label");
    \u0275\u0275text(79, "New password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(80, "input", 30);
    \u0275\u0275template(81, ProfileComponent_Conditional_0_Conditional_81_Template, 2, 0, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(82, ProfileComponent_Conditional_0_Conditional_82_Template, 2, 1, "div", 31);
    \u0275\u0275elementStart(83, "div", 16)(84, "button", 32);
    \u0275\u0275text(85, "Update password");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(86, "h3", 33);
    \u0275\u0275text(87, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "table", 34)(89, "tbody")(90, "tr")(91, "td");
    \u0275\u0275text(92, "Last sign-in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "td")(94, "b");
    \u0275\u0275text(95);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "tr")(97, "td");
    \u0275\u0275text(98, "Account valid until");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "td");
    \u0275\u0275text(100);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "tr")(102, "td");
    \u0275\u0275text(103, "Permissions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "td", 35);
    \u0275\u0275repeaterCreate(105, ProfileComponent_Conditional_0_For_106_Template, 2, 1, "span", 36, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(107, "div", 13)(108, "h2");
    \u0275\u0275text(109, "My recent activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "table", 34)(111, "thead")(112, "tr")(113, "th");
    \u0275\u0275text(114, "When");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "th");
    \u0275\u0275text(116, "Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "th");
    \u0275\u0275text(118, "Detail");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(119, "tbody");
    \u0275\u0275repeaterCreate(120, ProfileComponent_Conditional_0_For_121_Template, 8, 3, "tr", null, _forTrack0, false, ProfileComponent_Conditional_0_ForEmpty_122_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r1.ini(u_r5.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", u_r5.designation, " ", u_r5.department ? "\xB7 " + u_r5.department : "", " ", u_r5.location ? "\xB7 " + u_r5.location : "", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r5.roleLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.scopeText(u_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("@", u_r5.username, "");
    \u0275\u0275advance(10);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.form.controls.email.invalid ? 41 : -1);
    \u0275\u0275advance(24);
    \u0275\u0275property("value", u_r5.functionName || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.form.invalid);
    \u0275\u0275advance(5);
    \u0275\u0275property("formGroup", ctx_r1.pw);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx_r1.pw.controls.newPassword.invalid && ctx_r1.pw.controls.newPassword.touched ? 81 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.pwErr() ? 82 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(ctx_r1.dt(u_r5.lastLogin));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r5.validUntil || "No end date");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(u_r5.permissions);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.activity());
  }
}
var ProfileComponent = class _ProfileComponent {
  auth = inject(AuthService);
  api = inject(ApiService);
  toast = inject(ToastService);
  fb = inject(FormBuilder);
  activity = signal([]);
  pwErr = signal("");
  ini = initials;
  dt = fmtDT;
  form = this.fb.nonNullable.group({ name: ["", Validators.required], email: ["", Validators.email], phone: [""], empId: [""], designation: [""], department: [""], location: [""] });
  pw = this.fb.nonNullable.group({ currentPassword: ["", Validators.required], newPassword: ["", [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[A-Za-z]).+$/)]] });
  constructor() {
    const u = this.auth.me();
    if (u)
      this.form.patchValue(u);
    this.api.get("/auth/me/activity").subscribe((a) => this.activity.set(a));
  }
  scopeText(u) {
    return u.scopeAll ? "Entire organization" : [...u.scopeBus.map((b) => b + " BU"), ...u.scopeUnits].join(", ") || "No data access";
  }
  save() {
    this.api.put("/auth/me", __spreadProps(__spreadValues({}, this.form.getRawValue()), { theme: this.auth.me()?.theme })).subscribe({ next: (m) => {
      this.auth.me.set(m);
      this.toast.show("Details saved");
    }, error: (e) => this.toast.show(errMsg(e)) });
  }
  changePw() {
    this.pw.markAllAsTouched();
    if (this.pw.invalid)
      return;
    this.api.post("/auth/change-password", this.pw.getRawValue()).subscribe({ next: () => {
      this.pw.reset();
      this.pwErr.set("");
      this.toast.show("Password updated");
    }, error: (e) => this.pwErr.set(errMsg(e)) });
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [[1, "pagehead"], [1, "eb"], [1, "q"], [1, "profhead"], [1, "pav"], [1, "hint"], [2, "margin-top", "6px"], [1, "tag", "info"], [1, "tag", "mat"], [1, "tag", "ok"], [2, "flex", "1"], [1, "btn", 3, "click"], [1, "grid2"], [1, "panel"], [1, "desc"], [1, "formgrid", 2, "grid-template-columns", "1fr 1fr", 3, "ngSubmit", "formGroup"], [1, "fgroup"], ["type", "text", "formControlName", "name"], ["type", "email", "formControlName", "email"], [1, "err"], ["type", "text", "formControlName", "phone"], ["type", "text", "formControlName", "empId"], ["type", "text", "formControlName", "designation"], ["type", "text", "formControlName", "department"], ["type", "text", "formControlName", "location"], ["type", "text", "disabled", "", 3, "value"], [1, "fgroup", "full"], ["type", "submit", 1, "btn", 3, "disabled"], [1, "formgrid", 2, "grid-template-columns", "1fr", 3, "ngSubmit", "formGroup"], ["type", "password", "formControlName", "currentPassword", "autocomplete", "current-password"], ["type", "password", "formControlName", "newPassword", "autocomplete", "new-password"], [1, "autherr"], ["type", "submit", 1, "btn", "secondary"], [2, "margin-top", "16px"], [1, "plain"], [1, "wrap"], [1, "tag", "ok", 2, "margin", "1px"], ["colspan", "3", 1, "empty"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ProfileComponent_Conditional_0_Template, 123, 18);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.auth.me()) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src\\app\\pages\\profile\\profile.component.ts", lineNumber: 49 });
})();
export {
  ProfileComponent
};
//# sourceMappingURL=chunk-QJJGXBHH.js.map
