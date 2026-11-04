import {
  ScopeService
} from "./chunk-CP6R3LGJ.js";
import {
  daysColor,
  flagClass,
  flagLabel,
  fmtD,
  fmtQ,
  fmtV,
  realFlags
} from "./chunk-EJQTPNTN.js";
import {
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-BSQGTHQ3.js";

// src/app/shared/ui.ts
function DaysPill_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2013 ");
  }
}
function DaysPill_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("background", ctx_r0.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.kind === "rsl" && ctx_r0.d < 0 ? "Exp " + -ctx_r0.d + "d" : ctx_r0.d);
  }
}
function FlagTags_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("tag ", ctx_r1.cls(f_r1), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label(f_r1));
  }
}
function FlagTags_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1, "None");
    \u0275\u0275elementEnd();
  }
}
function StatusTags_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275text(1, "Unrestricted");
    \u0275\u0275elementEnd();
  }
}
function StatusTags_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1, "Quality");
    \u0275\u0275elementEnd();
  }
}
function StatusTags_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "Blocked");
    \u0275\u0275elementEnd();
  }
}
function StatusTags_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "Zero stock");
    \u0275\u0275elementEnd();
  }
}
function PrioTag_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMapInterpolate1("tag ", ctx_r0.p.toLowerCase(), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.p);
  }
}
function PrioTag_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2013 ");
  }
}
var InrPipe = class _InrPipe {
  transform(v) {
    return fmtV(v);
  }
  static \u0275fac = function InrPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InrPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "inr", type: _InrPipe, pure: true, standalone: true });
};
var QtyPipe = class _QtyPipe {
  transform(v) {
    return fmtQ(v);
  }
  static \u0275fac = function QtyPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QtyPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "qty", type: _QtyPipe, pure: true, standalone: true });
};
var DatePipe2 = class _DatePipe2 {
  transform(v) {
    return fmtD(v);
  }
  static \u0275fac = function DatePipe2_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DatePipe2)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "dt", type: _DatePipe2, pure: true, standalone: true });
};
var DaysPill = class _DaysPill {
  scope = inject(ScopeService);
  d = null;
  kind = "age";
  get color() {
    return daysColor(this.d ?? null, this.kind, this.scope.thresholds().expiryDays);
  }
  static \u0275fac = function DaysPill_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DaysPill)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DaysPill, selectors: [["days-pill"]], inputs: { d: "d", kind: "kind" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[1, "days", 3, "background"], [1, "days"]], template: function DaysPill_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, DaysPill_Conditional_0_Template, 1, 0)(1, DaysPill_Conditional_1_Template, 2, 3, "span", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.d === null || ctx.d === void 0 ? 0 : 1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DaysPill, { className: "DaysPill", filePath: "src\\app\\shared\\ui.ts", lineNumber: 14 });
})();
var FlagTags = class _FlagTags {
  scope = inject(ScopeService);
  flags = [];
  includeHv = true;
  get shown() {
    return this.includeHv ? this.flags : realFlags(this.flags);
  }
  cls(f) {
    return flagClass(f);
  }
  label(f) {
    return flagLabel(f, this.scope.thresholds());
  }
  static \u0275fac = function FlagTags_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlagTags)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FlagTags, selectors: [["flag-tags"]], inputs: { flags: "flags", includeHv: "includeHv" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 3, vars: 1, consts: [[3, "class"], [1, "tag", "ok"]], template: function FlagTags_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275repeaterCreate(0, FlagTags_For_1_Template, 2, 4, "span", 0, \u0275\u0275repeaterTrackByIdentity, false, FlagTags_ForEmpty_2_Template, 2, 0, "span", 1);
    }
    if (rf & 2) {
      \u0275\u0275repeater(ctx.shown);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FlagTags, { className: "FlagTags", filePath: "src\\app\\shared\\ui.ts", lineNumber: 26 });
})();
var StatusTags = class _StatusTags {
  x;
  static \u0275fac = function StatusTags_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatusTags)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusTags, selectors: [["status-tags"]], inputs: { x: "x" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 4, consts: [[1, "tag", "ok"], [1, "tag", "warn"], [1, "tag", "bad"], [1, "tag", "mat"]], template: function StatusTags_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, StatusTags_Conditional_0_Template, 2, 0, "span", 0)(1, StatusTags_Conditional_1_Template, 2, 0, "span", 1)(2, StatusTags_Conditional_2_Template, 2, 0, "span", 2)(3, StatusTags_Conditional_3_Template, 2, 0, "span", 3);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.x.unrestrictedQty > 0 ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.x.qualityQty > 0 ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.x.blockedQty > 0 ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.x.unrestrictedQty && !ctx.x.qualityQty && !ctx.x.blockedQty ? 3 : -1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusTags, { className: "StatusTags", filePath: "src\\app\\shared\\ui.ts", lineNumber: 40 });
})();
var PrioTag = class _PrioTag {
  p = null;
  static \u0275fac = function PrioTag_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrioTag)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrioTag, selectors: [["prio-tag"]], inputs: { p: "p" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [[3, "class"]], template: function PrioTag_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, PrioTag_Conditional_0_Template, 2, 4, "span", 0)(1, PrioTag_Conditional_1_Template, 1, 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.p ? 0 : 1);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrioTag, { className: "PrioTag", filePath: "src\\app\\shared\\ui.ts", lineNumber: 46 });
})();
var Ic = class _Ic {
  n = "circle";
  size = 18;
  static \u0275fac = function Ic_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Ic)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Ic, selectors: [["ic"]], inputs: { n: "n", size: "size" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 3, consts: [[1, "material-icons", 2, "vertical-align", "middle", "line-height", "1"]], template: function Ic_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("font-size", ctx.size, "px");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.n);
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Ic, { className: "Ic", filePath: "src\\app\\shared\\ui.ts", lineNumber: 50 });
})();

export {
  InrPipe,
  QtyPipe,
  DatePipe2,
  DaysPill,
  FlagTags,
  StatusTags,
  PrioTag,
  Ic
};
//# sourceMappingURL=chunk-2TWUEAPP.js.map
