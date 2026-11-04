import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-HME2EOKK.js";
import {
  DEPTS,
  MAT_TYPES,
  STATUSES
} from "./chunk-MBCJJNOW.js";
import {
  Ic
} from "./chunk-2TWUEAPP.js";
import {
  ScopeService
} from "./chunk-CP6R3LGJ.js";
import {
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
  ɵɵtextInterpolate1
} from "./chunk-BSQGTHQ3.js";

// src/app/shared/filter-bar.component.ts
var _forTrack0 = ($index, $item) => $item.k;
function FilterBarComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r1 = ctx.$implicit;
    \u0275\u0275property("value", b_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r1);
  }
}
function FilterBarComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    \u0275\u0275property("value", p_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2);
  }
}
function FilterBarComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("value", c_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3);
  }
}
function FilterBarComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r4 = ctx.$implicit;
    \u0275\u0275property("value", s_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4);
  }
}
function FilterBarComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 22);
    \u0275\u0275listener("click", function FilterBarComponent_For_43_Template_button_click_4_listener() {
      const c_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.clear(c_r6.k));
    });
    \u0275\u0275text(5, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", c_r6.l, ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r6.v);
  }
}
function FilterBarComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function FilterBarComponent_Conditional_44_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.clearAll());
    });
    \u0275\u0275text(1, "Clear filters");
    \u0275\u0275elementEnd();
  }
}
function FilterBarComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No filters \u2014 showing everything in ", ctx_r6.scope.title(), "");
  }
}
var FilterBarComponent = class _FilterBarComponent {
  scope = inject(ScopeService);
  f = this.scope.filter;
  cats = MAT_TYPES;
  statuses = STATUSES;
  depts = DEPTS;
  q = signal(this.f().q);
  t;
  plants() {
    const bu = this.f().bu;
    return this.scope.activePlants().filter((p) => bu === "All" || p.buCode === bu).map((p) => p.name);
  }
  typed(v) {
    this.q.set(v);
    clearTimeout(this.t);
    this.t = setTimeout(() => this.apply(), 350);
  }
  apply() {
    this.scope.set({ q: this.q() });
  }
  active() {
    const f = this.f();
    const L = { cat: "Category", status: "Stock Status", dept: "Department", q: "Search" };
    return Object.keys(L).filter((k) => f[k] && f[k] !== "All").map((k) => ({ k, l: L[k], v: f[k] }));
  }
  clear(k) {
    this.scope.set({ [k]: k === "q" ? "" : "All" });
    if (k === "q")
      this.q.set("");
  }
  clearAll() {
    this.scope.set({ cat: "All", status: "All", dept: "All", q: "" });
    this.q.set("");
  }
  static \u0275fac = function FilterBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FilterBarComponent, selectors: [["filter-bar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 46, vars: 13, consts: [[1, "fpanel", "inline"], [1, "frow"], [1, "fsel"], [1, "ic"], ["n", "layers", 3, "size"], ["aria-label", "Business unit", 3, "ngModelChange", "ngModel"], ["value", "All"], [3, "value"], ["n", "place", 3, "size"], ["aria-label", "Plant", 3, "ngModelChange", "ngModel"], ["n", "inventory_2", 3, "size"], ["aria-label", "Category", 3, "ngModelChange", "ngModel"], ["n", "verified_user", 3, "size"], ["aria-label", "Stock status", 3, "ngModelChange", "ngModel"], ["n", "search", 3, "size"], ["type", "text", "placeholder", "Search description / code / batch", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "chips"], [1, "chip", "scope"], ["n", "apartment", 3, "size"], [1, "chip"], [1, "chip", "clear"], [1, "hint"], ["title", "Remove", 3, "click"], [1, "chip", "clear", 3, "click"]], template: function FilterBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275element(4, "ic", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "select", 5);
      \u0275\u0275listener("ngModelChange", function FilterBarComponent_Template_select_ngModelChange_5_listener($event) {
        return ctx.scope.set({ bu: $event, plant: "All" });
      });
      \u0275\u0275elementStart(6, "option", 6);
      \u0275\u0275text(7, "Business Unit");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(8, FilterBarComponent_For_9_Template, 2, 2, "option", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 2)(11, "span", 3);
      \u0275\u0275element(12, "ic", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "select", 9);
      \u0275\u0275listener("ngModelChange", function FilterBarComponent_Template_select_ngModelChange_13_listener($event) {
        return ctx.scope.set({ plant: $event });
      });
      \u0275\u0275elementStart(14, "option", 6);
      \u0275\u0275text(15, "Plant");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(16, FilterBarComponent_For_17_Template, 2, 2, "option", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 2)(19, "span", 3);
      \u0275\u0275element(20, "ic", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "select", 11);
      \u0275\u0275listener("ngModelChange", function FilterBarComponent_Template_select_ngModelChange_21_listener($event) {
        return ctx.scope.set({ cat: $event });
      });
      \u0275\u0275elementStart(22, "option", 6);
      \u0275\u0275text(23, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(24, FilterBarComponent_For_25_Template, 2, 2, "option", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 2)(27, "span", 3);
      \u0275\u0275element(28, "ic", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "select", 13);
      \u0275\u0275listener("ngModelChange", function FilterBarComponent_Template_select_ngModelChange_29_listener($event) {
        return ctx.scope.set({ status: $event });
      });
      \u0275\u0275elementStart(30, "option", 6);
      \u0275\u0275text(31, "Stock Status");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(32, FilterBarComponent_For_33_Template, 2, 2, "option", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 2)(35, "span", 3);
      \u0275\u0275element(36, "ic", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "input", 15);
      \u0275\u0275listener("ngModelChange", function FilterBarComponent_Template_input_ngModelChange_37_listener($event) {
        return ctx.typed($event);
      })("keydown.enter", function FilterBarComponent_Template_input_keydown_enter_37_listener() {
        return ctx.apply();
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "div", 16)(39, "span", 17);
      \u0275\u0275element(40, "ic", 18);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(42, FilterBarComponent_For_43_Template, 6, 2, "span", 19, _forTrack0);
      \u0275\u0275template(44, FilterBarComponent_Conditional_44_Template, 2, 0, "button", 20)(45, FilterBarComponent_Conditional_45_Template, 2, 1, "span", 21);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 16);
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.f().bu);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.scope.bus());
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 16);
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.f().plant);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.plants());
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 16);
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.f().cat);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.cats);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 16);
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.f().status);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.statuses);
      \u0275\u0275advance(4);
      \u0275\u0275property("size", 16);
      \u0275\u0275advance();
      \u0275\u0275property("ngModel", ctx.q());
      \u0275\u0275advance(3);
      \u0275\u0275property("size", 13);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.scope.path().join(" \u203A "), "");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.active());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.active().length ? 44 : 45);
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, Ic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FilterBarComponent, { className: "FilterBarComponent", filePath: "src\\app\\shared\\filter-bar.component.ts", lineNumber: 35 });
})();

export {
  FilterBarComponent
};
//# sourceMappingURL=chunk-74GPD5GD.js.map
