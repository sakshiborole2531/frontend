import {
  MatDialog,
  PasswordDialog
} from "./chunk-KSMHFCGL.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  RadioControlValueAccessor,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-HME2EOKK.js";
import {
  AuthService,
  MatCommonModule,
  ToastService,
  errMsg
} from "./chunk-3JYYVKE5.js";
import "./chunk-L6TX4WJQ.js";
import {
  SHORT
} from "./chunk-MBCJJNOW.js";
import {
  DatePipe2,
  InrPipe,
  QtyPipe
} from "./chunk-2TWUEAPP.js";
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
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  ElementRef,
  EventEmitter,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  ViewEncapsulation$1,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BSQGTHQ3.js";

// node_modules/@angular/material/fesm2022/progress-bar.mjs
function MatProgressBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 2);
  }
}
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: MAT_PROGRESS_BAR_LOCATION_FACTORY
});
function MAT_PROGRESS_BAR_LOCATION_FACTORY() {
  const _document = inject(DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ""
  };
}
var MatProgressBar = class _MatProgressBar {
  constructor(_elementRef, _ngZone, _changeDetectorRef, _animationMode, defaults) {
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this._changeDetectorRef = _changeDetectorRef;
    this._animationMode = _animationMode;
    this._isNoopAnimation = false;
    this._defaultColor = "primary";
    this._value = 0;
    this._bufferValue = 0;
    this.animationEnd = new EventEmitter();
    this._mode = "determinate";
    this._transitionendHandler = (event) => {
      if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
        return;
      }
      if (this.mode === "determinate" || this.mode === "buffer") {
        this._ngZone.run(() => this.animationEnd.next({
          value: this.value
        }));
      }
    };
    this._isNoopAnimation = _animationMode === "NoopAnimations";
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
  /**
   * Theme color of the progress bar. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  /** Value of the progress bar. Defaults to zero. Mirrored to aria-valuenow. */
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  /** Buffer value of the progress bar. Defaults to zero. */
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Mode of the progress bar.
   *
   * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
   * 'determinate'.
   * Mirrored to mode attribute.
   */
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._elementRef.nativeElement.addEventListener("transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._elementRef.nativeElement.removeEventListener("transitionend", this._transitionendHandler);
  }
  /** Gets the transform style that should be applied to the primary bar. */
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  /** Gets the `flex-basis` value that should be applied to the buffer bar. */
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  /** Returns whether the progress bar is indeterminate. */
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  static {
    this.\u0275fac = function MatProgressBar_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatProgressBar)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, 8));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatProgressBar,
      selectors: [["mat-progress-bar"]],
      hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
      hostVars: 10,
      hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
          \u0275\u0275classMap("mat-" + ctx.color);
          \u0275\u0275classProp("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
        }
      },
      inputs: {
        color: "color",
        value: [2, "value", "value", numberAttribute],
        bufferValue: [2, "bufferValue", "bufferValue", numberAttribute],
        mode: "mode"
      },
      outputs: {
        animationEnd: "animationEnd"
      },
      exportAs: ["matProgressBar"],
      standalone: true,
      features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
      decls: 7,
      vars: 5,
      consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
      template: function MatProgressBar_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0);
          \u0275\u0275element(1, "div", 1);
          \u0275\u0275template(2, MatProgressBar_Conditional_2_Template, 1, 0, "div", 2);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(3, "div", 3);
          \u0275\u0275element(4, "span", 4);
          \u0275\u0275elementEnd();
          \u0275\u0275elementStart(5, "div", 5);
          \u0275\u0275element(6, "span", 4);
          \u0275\u0275elementEnd();
        }
        if (rf & 2) {
          \u0275\u0275advance();
          \u0275\u0275styleProp("flex-basis", ctx._getBufferBarFlexBasis());
          \u0275\u0275advance();
          \u0275\u0275conditional(ctx.mode === "buffer" ? 2 : -1);
          \u0275\u0275advance();
          \u0275\u0275styleProp("transform", ctx._getPrimaryBarTransform());
        }
      },
      styles: [`.mat-mdc-progress-bar{display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mdc-linear-progress-track-height),var(--mdc-linear-progress-active-indicator-height))}.cdk-high-contrast-active .mdc-linear-progress{outline-color:CanvasText}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mdc-linear-progress-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mdc-linear-progress-track-height);border-radius:var(--mdc-linear-progress-track-shape, var(--mat-app-corner-none))}.mdc-linear-progress__buffer-dots{-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear;background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.cdk-high-contrast-active .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}`],
      encapsulation: 2,
      changeDetection: 0
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBar, [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        // set tab index to -1 so screen readers will read the aria-label
        // Note: there is a known issue with JAWS that does not read progressbar aria labels on FireFox
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      standalone: true,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [`.mat-mdc-progress-bar{display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mdc-linear-progress-track-height),var(--mdc-linear-progress-active-indicator-height))}.cdk-high-contrast-active .mdc-linear-progress{outline-color:CanvasText}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mdc-linear-progress-active-indicator-color, var(--mat-app-primary));border-top-width:var(--mdc-linear-progress-active-indicator-height)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mdc-linear-progress-track-height);border-radius:var(--mdc-linear-progress-track-shape, var(--mat-app-corner-none))}.mdc-linear-progress__buffer-dots{-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' enable-background='new 0 0 5 2' xml:space='preserve' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");background-repeat:repeat-x;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering 250ms infinite linear;background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.cdk-high-contrast-active .mdc-linear-progress__buffer-dots{background-color:ButtonBorder}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse 250ms infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mdc-linear-progress-track-color, var(--mat-app-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale 2s infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mdc-linear-progress-track-height) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}`]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_PROGRESS_BAR_DEFAULT_OPTIONS]
    }]
  }], {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  });
})();
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static {
    this.\u0275fac = function MatProgressBarModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatProgressBarModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatProgressBarModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      imports: [MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/pages/import/import.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.row;
function ImportComponent_Conditional_47_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 33);
  }
}
function ImportComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "h2");
    \u0275\u0275text(2, "Import inventory");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275text(4, "Excel (.xlsx) or CSV. Nothing is saved until you confirm the preview.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "div", 20)(7, "label");
    \u0275\u0275text(8, "File format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "select", 21);
    \u0275\u0275twoWayListener("ngModelChange", function ImportComponent_Conditional_47_Template_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.format, $event) || (ctx_r1.format = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(10, "option", 22);
    \u0275\u0275text(11, "Detect automatically");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option", 23);
    \u0275\u0275text(13, "SAP stock report \u2014 Unichem layout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 24);
    \u0275\u0275text(15, "Inventory template (this app)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 25)(17, "label")(18, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ImportComponent_Conditional_47_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mode, $event) || (ctx_r1.mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div")(20, "b");
    \u0275\u0275text(21, "Update existing & add new");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "Matches on plant + material code + batch. Recommended for refreshes.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "label")(25, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function ImportComponent_Conditional_47_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mode, $event) || (ctx_r1.mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "b");
    \u0275\u0275text(28, "Add only");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "Adds rows whose plant + code + batch does not exist yet.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "label")(32, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ImportComponent_Conditional_47_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mode, $event) || (ctx_r1.mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div")(34, "b");
    \u0275\u0275text(35, "Historical snapshot (year-wise)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "Use a past SAP extract to build that month's history. Current inventory is not changed. As of: ");
    \u0275\u0275elementStart(38, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function ImportComponent_Conditional_47_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.asOf, $event) || (ctx_r1.asOf = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "label")(40, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function ImportComponent_Conditional_47_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.mode, $event) || (ctx_r1.mode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "div")(42, "b");
    \u0275\u0275text(43, "Replace all inventory (in your scope)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "Clears current records first; actions re-link by plant + code + batch.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 31);
    \u0275\u0275listener("click", function ImportComponent_Conditional_47_Template_div_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const fi_r3 = \u0275\u0275reference(51);
      return \u0275\u0275resetView(fi_r3.click());
    })("dragover", function ImportComponent_Conditional_47_Template_div_dragover_46_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r1.over.set(true));
    })("dragleave", function ImportComponent_Conditional_47_Template_div_dragleave_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.over.set(false));
    })("drop", function ImportComponent_Conditional_47_Template_div_drop_46_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.drop($event));
    });
    \u0275\u0275elementStart(47, "b");
    \u0275\u0275text(48, "Click to choose a file, or drop it here");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49, ".xlsx, .xls or .csv (SAP export or template)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 32, 0);
    \u0275\u0275listener("change", function ImportComponent_Conditional_47_Template_input_change_50_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pick($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, ImportComponent_Conditional_47_Conditional_52_Template, 1, 0, "mat-progress-bar", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.format);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mode);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mode);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mode);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.asOf);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.mode);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("over", ctx_r1.over());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.busy() ? 52 : -1);
  }
}
function ImportComponent_Conditional_48_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "b", 52);
    \u0275\u0275text(2, "Key columns not found.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Choose the correct file format or use the template headers.");
    \u0275\u0275elementEnd();
  }
}
function ImportComponent_Conditional_48_For_80_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const e_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(e_r5);
  }
}
function ImportComponent_Conditional_48_For_80_For_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 55);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r6);
  }
}
function ImportComponent_Conditional_48_For_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 18);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "qty");
    \u0275\u0275pipe(19, "qty");
    \u0275\u0275pipe(20, "qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 18);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "dt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "td");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "dt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "td", 53);
    \u0275\u0275repeaterCreate(31, ImportComponent_Conditional_48_For_80_For_32_Template, 2, 1, "span", 54, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(33, ImportComponent_Conditional_48_For_80_For_34_Template, 2, 1, "span", 55, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const x_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(x_r7.row);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("tag ", x_r7.status === "OK" ? "ok" : x_r7.status === "Warning" ? "warn" : x_r7.status === "Excluded" ? "mat" : "bad", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r7.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(x_r7.record.plant);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.short[x_r7.record.matType], "", x_r7.record.dept ? " \xB7 " + x_r7.record.dept : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(x_r7.record.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(x_r7.record.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(x_r7.record.batch || "\u2013");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", \u0275\u0275pipeBind1(18, 17, x_r7.record.u), " / ", \u0275\u0275pipeBind1(19, 19, x_r7.record.q), " / ", \u0275\u0275pipeBind1(20, 21, x_r7.record.b), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 23, x_r7.record.unitCost));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 25, x_r7.record.receiptDate));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 27, x_r7.record.expiryDate));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(x_r7.errors);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(x_r7.warnings);
  }
}
function ImportComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 15);
    \u0275\u0275elementStart(1, "div", 7)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 8);
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ImportComponent_Conditional_48_Conditional_8_Template, 4, 0, "div", 34);
    \u0275\u0275elementStart(9, "div", 35)(10, "div", 36)(11, "div", 37);
    \u0275\u0275text(12, "Ready to import");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 38);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 39);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 40)(18, "div", 37);
    \u0275\u0275text(19, "With warnings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 41);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 39);
    \u0275\u0275text(23, "imported \u2014 review in Data Quality");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 42)(25, "div", 37);
    \u0275\u0275text(26, "Skipped");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 43);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 39);
    \u0275\u0275text(30, "excluded SAP types or errors");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 44)(32, "div", 37);
    \u0275\u0275text(33, "Value to import");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 45);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "inr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 46)(38, "button", 47);
    \u0275\u0275listener("click", function ImportComponent_Conditional_48_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirm());
    });
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "button", 14);
    \u0275\u0275listener("click", function ImportComponent_Conditional_48_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.res.set(null));
    });
    \u0275\u0275text(41, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "span", 48);
    \u0275\u0275elementStart(43, "div", 49)(44, "button", 50);
    \u0275\u0275listener("click", function ImportComponent_Conditional_48_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rowFilter.set("all"));
    });
    \u0275\u0275text(45, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 50);
    \u0275\u0275listener("click", function ImportComponent_Conditional_48_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rowFilter.set("Warning"));
    });
    \u0275\u0275text(47, "Warnings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 50);
    \u0275\u0275listener("click", function ImportComponent_Conditional_48_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rowFilter.set("Error"));
    });
    \u0275\u0275text(49, "Errors");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 51)(51, "table")(52, "thead")(53, "tr")(54, "th");
    \u0275\u0275text(55, "Row");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th");
    \u0275\u0275text(57, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th");
    \u0275\u0275text(59, "Plant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "th");
    \u0275\u0275text(61, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "th");
    \u0275\u0275text(63, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "th");
    \u0275\u0275text(65, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "th");
    \u0275\u0275text(67, "Batch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "th", 18);
    \u0275\u0275text(69, "U / Q / B");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "th", 18);
    \u0275\u0275text(71, "Unit cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "th");
    \u0275\u0275text(73, "GR date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "th");
    \u0275\u0275text(75, "SLED/BBD");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "th");
    \u0275\u0275text(77, "Issues");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "tbody");
    \u0275\u0275repeaterCreate(79, ImportComponent_Conditional_48_For_80_Template, 35, 29, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r8 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Preview \u2014 ", r_r8.file, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", r_r8.rowsRead, " rows read \xB7 format ", r_r8.format, " \xB7 mode ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r8.mode);
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r8.missingColumns.includes("code") || r_r8.missingColumns.includes("plant") ? 8 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(r_r8.ready);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r8.mode === "upsert" ? r_r8.added + " new \xB7 " + r_r8.updated + " updates" : "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(r_r8.warnings);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(r_r8.skipped);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 18, r_r8.value));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !r_r8.ready || ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Confirm import of ", r_r8.ready, " records");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("on", ctx_r1.rowFilter() === "all");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("on", ctx_r1.rowFilter() === "Warning");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("on", ctx_r1.rowFilter() === "Error");
    \u0275\u0275advance(31);
    \u0275\u0275repeater(ctx_r1.rows());
  }
}
function ImportComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "h3");
    \u0275\u0275text(2, "Inventory data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Every record with its calculated age, shelf life, flags and priority.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "button", 56);
    \u0275\u0275listener("click", function ImportComponent_Conditional_56_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dl("/inventory/export", "inventory.xlsx"));
    });
    \u0275\u0275text(7, "Excel");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 13)(9, "h3");
    \u0275\u0275text(10, "Management report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12, "Multi-sheet Excel: summary, inventory, expiry, aged, consumables, exceptions, actions.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 11)(14, "button", 56);
    \u0275\u0275listener("click", function ImportComponent_Conditional_56_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dl("/reports/management", "report.xlsx"));
    });
    \u0275\u0275text(15, "Download report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "div", 13)(17, "h3");
    \u0275\u0275text(18, "Action register");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20, "All actions with owner, target date, escalation and closure details.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 11)(22, "button", 56);
    \u0275\u0275listener("click", function ImportComponent_Conditional_56_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dl("/actions/export", "actions.xlsx"));
    });
    \u0275\u0275text(23, "Excel");
    \u0275\u0275elementEnd()()();
  }
}
function ImportComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "h3");
    \u0275\u0275text(2, "Sample data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Illustrative inventory, actions and 3 years of history \u2014 for demos and UAT. Replaces current data.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "button", 57);
    \u0275\u0275listener("click", function ImportComponent_Conditional_57_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sample());
    });
    \u0275\u0275text(7, "Load sample data\u2026");
    \u0275\u0275elementEnd()()();
  }
}
function ImportComponent_For_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "td", 53);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const l_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.fmtDT(l_r11.at));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r11.source);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r11.records);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(l_r11.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(l_r11.message);
  }
}
function ImportComponent_ForEmpty_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 58);
    \u0275\u0275text(2, "No imports yet");
    \u0275\u0275elementEnd()();
  }
}
var ImportComponent = class _ImportComponent {
  api = inject(ApiService);
  auth = inject(AuthService);
  scope = inject(ScopeService);
  toast = inject(ToastService);
  dlg = inject(MatDialog);
  format = "AUTO";
  mode = "upsert";
  asOf = "";
  file = signal(null);
  res = signal(null);
  busy = signal(false);
  over = signal(false);
  rowFilter = signal("all");
  sync = signal([]);
  short = SHORT;
  fmtDT = fmtDT;
  constructor() {
    this.api.get("/masters/sync-log").subscribe((s) => this.sync.set(s));
  }
  pick(ev) {
    const f = ev.target.files?.[0];
    if (f)
      this.preview(f);
  }
  drop(ev) {
    ev.preventDefault();
    this.over.set(false);
    const f = ev.dataTransfer?.files[0];
    if (f)
      this.preview(f);
  }
  preview(f) {
    if (this.mode === "history" && !this.asOf) {
      this.toast.show("Enter the 'As of' date for the historical snapshot");
      return;
    }
    if (!/\.(xlsx|xls|xlsm|csv|txt)$/i.test(f.name)) {
      this.toast.show("Choose an Excel (.xlsx) or CSV file");
      return;
    }
    this.file.set(f);
    this.busy.set(true);
    this.res.set(null);
    this.api.importFile(f, this.format, this.mode, this.asOf || null, true).subscribe({
      next: (r) => {
        this.res.set(r);
        this.busy.set(false);
      },
      error: (e) => {
        this.busy.set(false);
        this.toast.show(errMsg(e));
      }
    });
  }
  confirm() {
    const f = this.file();
    if (!f)
      return;
    if (this.mode === "replace" && !confirm("Replace all current inventory in your data scope with this file?"))
      return;
    this.busy.set(true);
    this.api.importFile(f, this.format, this.mode, this.asOf || null, false).subscribe({
      next: (r) => {
        this.busy.set(false);
        this.res.set(null);
        this.file.set(null);
        this.toast.show(`Import complete \u2014 ${r.added} added, ${r.updated} updated`);
        this.scope.load();
        this.scope.refresh();
        this.api.get("/masters/sync-log").subscribe((s) => this.sync.set(s));
      },
      error: (e) => {
        this.busy.set(false);
        this.toast.show(errMsg(e));
      }
    });
  }
  rows() {
    const r = this.res()?.rows ?? [];
    return this.rowFilter() === "all" ? r : r.filter((x) => this.rowFilter() === "Error" ? x.status === "Error" || x.status === "Excluded" : x.status === "Warning");
  }
  dl(url, name) {
    this.api.download(url, this.scope.filter(), name).subscribe({ error: (e) => this.toast.show(errMsg(e)) });
  }
  sample() {
    this.dlg.open(PasswordDialog, { data: { what: "Load sample data \u2014 replaces all inventory, actions and history" }, width: "460px" }).afterClosed().subscribe((pw) => {
      if (!pw)
        return;
      this.api.post("/admin/sample-data", { password: pw }).subscribe({
        next: (r) => {
          this.toast.show(`Sample data loaded \u2014 ${r.records} records, ${r.actions} actions`);
          this.scope.load();
          this.scope.refresh();
        },
        error: (e) => this.toast.show(errMsg(e))
      });
    });
  }
  static \u0275fac = function ImportComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImportComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImportComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 79, vars: 11, consts: [["fi", ""], [1, "pagehead"], [1, "eb"], [1, "q"], [1, "steps"], [1, "done"], [1, "grid2"], [1, "panel"], [1, "desc"], [1, "xcard", 2, "margin-bottom", "10px"], [1, "tag", "ok"], [1, "row"], [1, "btn", 3, "click"], [1, "xcard"], [1, "btn", "secondary", 3, "click"], [1, "gap"], [1, "xgrid"], [1, "tablewrap", "short"], [1, "num"], [1, "formgrid", 2, "grid-template-columns", "1fr"], [1, "fgroup"], [3, "ngModelChange", "ngModel"], ["value", "AUTO"], ["value", "SAPSTOCK"], ["value", "APP"], [1, "radios"], ["type", "radio", "name", "m", "value", "upsert", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "m", "value", "add", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "m", "value", "history", 3, "ngModelChange", "ngModel"], ["type", "date", 2, "padding", "3px 6px", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "m", "value", "replace", 3, "ngModelChange", "ngModel"], [1, "drop", 3, "click", "dragover", "dragleave", "drop"], ["type", "file", "accept", ".xlsx,.xls,.xlsm,.csv,.txt", "hidden", "", 3, "change"], ["mode", "indeterminate"], [1, "note", 2, "border-color", "var(--red)", "margin-bottom", "12px"], [1, "cards"], [1, "card", "t-green"], [1, "label"], [1, "value", "green"], [1, "sub"], [1, "card", "t-amber"], [1, "value", "amber"], [1, "card", "t-red"], [1, "value", "red"], [1, "card"], [1, "value"], [1, "toolbar"], [1, "btn", "green", 3, "click", "disabled"], [1, "spacer"], [1, "seg-tabs"], [3, "click"], [1, "tablewrap"], [2, "color", "var(--red)"], [1, "wrap"], [1, "tag", "bad"], [1, "tag", "warn"], [1, "btn", "small", 3, "click"], [1, "btn", "danger", "small", 3, "click"], ["colspan", "5", 1, "empty"]], template: function ImportComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div")(2, "div", 2);
      \u0275\u0275text(3, "Configuration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2");
      \u0275\u0275text(5, "Import / Export");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275text(7, "Download the template, upload inventory from Excel / SAP extracts, export reports");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 4)(9, "span", 5)(10, "i");
      \u0275\u0275text(11, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, "Download template");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "span")(14, "i");
      \u0275\u0275text(15, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, "Upload file");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span")(18, "i");
      \u0275\u0275text(19, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, "Preview & validate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "span")(22, "i");
      \u0275\u0275text(23, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, "Confirm import");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 6)(26, "div", 7)(27, "h2");
      \u0275\u0275text(28, "Import templates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8);
      \u0275\u0275text(30, "The SAP stock template has the 22 columns of the Unichem SAP stock layout \u2014 a SAP export can be uploaded as-is. Date of Manufacture = manufacturing, SLED/BBD = expiry, GR Posting Date = in stock since (age), Last Posting Date = last consumption.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 9)(32, "h3");
      \u0275\u0275text(33, "SAP stock report \u2014 Unichem layout (22 columns) ");
      \u0275\u0275elementStart(34, "span", 10);
      \u0275\u0275text(35, "recommended");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 11)(37, "button", 12);
      \u0275\u0275listener("click", function ImportComponent_Template_button_click_37_listener() {
        return ctx.dl("/inventory/template/sap", "Unichem_SAP_Stock_Template.xlsx");
      });
      \u0275\u0275text(38, "Download SAP stock template");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 13)(40, "h3");
      \u0275\u0275text(41, "Inventory template (manual / non-SAP data)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p");
      \u0275\u0275text(43, "Simplified template with lying-since and last-issue dates for consumables.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 11)(45, "button", 14);
      \u0275\u0275listener("click", function ImportComponent_Template_button_click_45_listener() {
        return ctx.dl("/inventory/template/app", "Unichem_Inventory_Template.xlsx");
      });
      \u0275\u0275text(46, "Download inventory template");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(47, ImportComponent_Conditional_47_Template, 53, 9, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(48, ImportComponent_Conditional_48_Template, 81, 20);
      \u0275\u0275element(49, "div", 15);
      \u0275\u0275elementStart(50, "div", 7)(51, "h2");
      \u0275\u0275text(52, "Export");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 8);
      \u0275\u0275text(54, "Exports respect your data access and the current filters.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 16);
      \u0275\u0275template(56, ImportComponent_Conditional_56_Template, 24, 0)(57, ImportComponent_Conditional_57_Template, 8, 0, "div", 13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 7)(59, "h2");
      \u0275\u0275text(60, "Sync / import log");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 17)(62, "table")(63, "thead")(64, "tr")(65, "th");
      \u0275\u0275text(66, "When");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "th");
      \u0275\u0275text(68, "Source");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "th", 18);
      \u0275\u0275text(70, "Records");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "th");
      \u0275\u0275text(72, "Status");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "th");
      \u0275\u0275text(74, "Message");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(75, "tbody");
      \u0275\u0275repeaterCreate(76, ImportComponent_For_77_Template, 12, 5, "tr", null, _forTrack0, false, ImportComponent_ForEmpty_78_Template, 3, 0, "tr");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275advance(13);
      \u0275\u0275classProp("done", ctx.res())("on", !ctx.res());
      \u0275\u0275advance(4);
      \u0275\u0275classProp("on", ctx.res());
      \u0275\u0275advance(30);
      \u0275\u0275conditional(ctx.auth.can("import.data") ? 47 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_4_0 = ctx.res()) ? 48 : -1, tmp_4_0);
      \u0275\u0275advance(8);
      \u0275\u0275conditional(ctx.auth.can("export.data") ? 56 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.can("data.clear") ? 57 : -1);
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.sync());
    }
  }, dependencies: [FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgModel, MatProgressBarModule, MatProgressBar, InrPipe, QtyPipe, DatePipe2], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImportComponent, { className: "ImportComponent", filePath: "src\\app\\pages\\import\\import.component.ts", lineNumber: 17 });
})();
export {
  ImportComponent
};
//# sourceMappingURL=chunk-FRA5H3C2.js.map
