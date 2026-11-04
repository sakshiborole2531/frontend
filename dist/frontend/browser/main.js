import {
  MasterDataService
} from "./chunk-3MZYEWA2.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-HME2EOKK.js";
import {
  AuthService,
  ToastService,
  authInterceptor,
  errMsg
} from "./chunk-3JYYVKE5.js";
import "./chunk-L6TX4WJQ.js";
import {
  Ic
} from "./chunk-2TWUEAPP.js";
import {
  ScopeService
} from "./chunk-CP6R3LGJ.js";
import {
  fmtDT,
  initials
} from "./chunk-EJQTPNTN.js";
import {
  ActivatedRoute,
  ApiService,
  DomRendererFactory2,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideHttpClient,
  provideRouter,
  withComponentInputBinding,
  withInterceptors
} from "./chunk-TJA4FRLP.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  DOCUMENT,
  Injectable,
  InjectionToken,
  NgZone,
  RendererFactory2,
  RuntimeError,
  __objRest,
  __spreadProps,
  __spreadValues,
  catchError,
  computed,
  effect,
  filter,
  inject,
  makeEnvironmentProviders,
  map,
  of,
  performanceMarkFeature,
  provideZoneChangeDetection,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-BSQGTHQ3.js";

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, {
      optional: true
    });
    this.loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
      optional: true
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-BQWZ6KQM.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  static {
    this.\u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
      \u0275\u0275invalidFactory();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _AsyncAnimationRendererFactory,
      factory: _AsyncAnimationRendererFactory.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/core/guards.ts
var authGuard = () => {
  const auth = inject(AuthService), router = inject(Router);
  if (auth.me())
    return true;
  if (!auth.token)
    return router.parseUrl("/login");
  return auth.resume().pipe(map(() => true), catchError(() => of(router.parseUrl("/login"))));
};
var permGuard = (route) => {
  const auth = inject(AuthService), router = inject(Router), toast = inject(ToastService);
  const p = route.data["perm"];
  if (!p || auth.can(p))
    return true;
  toast.show("Access denied \u2014 your role cannot open this page");
  return router.parseUrl(auth.can("view.inventory") ? "/dashboard" : "/profile");
};

// src/app/shell/shell.component.ts
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.link;
var _c0 = (a0, a1) => ({ tab: a0, q: a1 });
function ShellComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275element(1, "ic", 25);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3, "Matrix view");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r0.url().startsWith("/matrix"));
    \u0275\u0275advance();
    \u0275\u0275property("size", 16);
  }
}
function ShellComponent_Conditional_38_For_10_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ShellComponent_Conditional_38_For_10_For_8_Template_button_click_0_listener() {
      const u_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const b_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goScope(b_r4, u_r6));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("on", ctx_r0.scope.filter().plant === u_r6 && ctx_r0.onDash())("inpath", ctx_r0.scope.filter().plant === u_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r6);
  }
}
function ShellComponent_Conditional_38_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ShellComponent_Conditional_38_For_10_Template_button_click_0_listener() {
      const b_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goScope(b_r4));
    });
    \u0275\u0275elementStart(1, "span", 33);
    \u0275\u0275element(2, "ic", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 30);
    \u0275\u0275text(5, "BU");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 34);
    \u0275\u0275repeaterCreate(7, ShellComponent_Conditional_38_For_10_For_8_Template, 2, 5, "button", 35, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r4 = ctx.$implicit;
    const \u0275$index_89_r7 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("on", ctx_r0.scope.filter().bu === b_r4 && ctx_r0.scope.filter().plant === "All" && ctx_r0.onDash())("inpath", ctx_r0.scope.filter().bu === b_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("n", \u0275$index_89_r7 === 0 ? "factory" : "layers")("size", 15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r4);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.scope.unitsOf(b_r4));
  }
}
function ShellComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "Organization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 27);
    \u0275\u0275listener("click", function ShellComponent_Conditional_38_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goScope("All"));
    });
    \u0275\u0275elementStart(3, "span", 28);
    \u0275\u0275element(4, "ic", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span", 30);
    \u0275\u0275text(7, "ORG");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275repeaterCreate(9, ShellComponent_Conditional_38_For_10_Template, 9, 7, null, null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275classProp("on", ctx_r0.scope.level() === "org" && ctx_r0.onDash())("inpath", ctx_r0.scope.level() === "org" && !ctx_r0.onDash());
    \u0275\u0275advance(2);
    \u0275\u0275property("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.scope.settings()["companyShort"] ? "Unichem" : "Organization");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.scope.bus());
  }
}
function ShellComponent_Conditional_39_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ShellComponent_Conditional_39_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.md.refresh());
    });
    \u0275\u0275text(1, "\u27F3 retry");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("title", ctx_r0.md.error() + " \u2014 click to retry");
  }
}
function ShellComponent_Conditional_39_For_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r10.count());
  }
}
function ShellComponent_Conditional_39_For_4_Conditional_8_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r11.tag);
  }
}
function ShellComponent_Conditional_39_For_4_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 45)(1, "span", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ShellComponent_Conditional_39_For_4_Conditional_8_For_2_Conditional_3_Template, 2, 1, "span", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r11 = ctx.$implicit;
    const g_r10 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("on", ctx_r0.mastersAt().tab === g_r10.tab && ctx_r0.mastersAt().q === m_r11.q);
    \u0275\u0275property("routerLink", "/masters")("queryParams", \u0275\u0275pureFunction2(7, _c0, g_r10.tab, m_r11.q))("title", m_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r11.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(m_r11.tag ? 3 : -1);
  }
}
function ShellComponent_Conditional_39_For_4_Conditional_8_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.md.loading() ? "Loading\u2026" : ctx_r0.md.error() ? "Could not load \u2014 retry above" : "No active records");
  }
}
function ShellComponent_Conditional_39_For_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275repeaterCreate(1, ShellComponent_Conditional_39_For_4_Conditional_8_For_2_Template, 4, 10, "button", 43, _forTrack1, false, ShellComponent_Conditional_39_For_4_Conditional_8_ForEmpty_3_Template, 2, 1, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const list_r12 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275repeater(list_r12);
  }
}
function ShellComponent_Conditional_39_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "button", 39);
    \u0275\u0275listener("click", function ShellComponent_Conditional_39_For_4_Template_button_click_1_listener() {
      const g_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goMaster(g_r10));
    });
    \u0275\u0275elementStart(2, "span", 28);
    \u0275\u0275element(3, "ic", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275template(5, ShellComponent_Conditional_39_For_4_Conditional_5_Template, 2, 1, "span", 40);
    \u0275\u0275elementStart(6, "span", 41);
    \u0275\u0275listener("click", function ShellComponent_Conditional_39_For_4_Template_span_click_6_listener($event) {
      const g_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.masterToggle(g_r10, $event));
    });
    \u0275\u0275text(7, "\u25BE");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ShellComponent_Conditional_39_For_4_Conditional_8_Template, 4, 1, "div", 42);
  }
  if (rf & 2) {
    const g_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275storeLet(g_r10.items());
    \u0275\u0275advance();
    \u0275\u0275classProp("open", ctx_r0.masterOpen(g_r10))("grpon", ctx_r0.mastersAt().tab === g_r10.tab);
    \u0275\u0275property("title", g_r10.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("n", g_r10.icon)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", g_r10.label, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(g_r10.count() !== void 0 ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.masterOpen(g_r10) ? 8 : -1);
  }
}
function ShellComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, "Masters ");
    \u0275\u0275template(2, ShellComponent_Conditional_39_Conditional_2_Template, 2, 1, "button", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, ShellComponent_Conditional_39_For_4_Template, 9, 11, null, null, _forTrack1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.md.error() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.masterGroups);
  }
}
function ShellComponent_For_41_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r13.sec);
  }
}
function ShellComponent_For_41_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 48)(1, "span", 28);
    \u0275\u0275element(2, "ic", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", g_r13.link)("title", g_r13.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("n", g_r13.icon)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r13.label);
  }
}
function ShellComponent_For_41_Conditional_0_Conditional_2_Conditional_6_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("red", i_r15.red);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r15.cnt());
  }
}
function ShellComponent_For_41_Conditional_0_Conditional_2_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ShellComponent_For_41_Conditional_0_Conditional_2_Conditional_6_For_2_Conditional_2_Template, 2, 3, "span", 53);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r15 = ctx.$implicit;
    \u0275\u0275property("routerLink", i_r15.link);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r15.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(i_r15.cnt && i_r15.cnt() ? 2 : -1);
  }
}
function ShellComponent_For_41_Conditional_0_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275repeaterCreate(1, ShellComponent_For_41_Conditional_0_Conditional_2_Conditional_6_For_2_Template, 3, 3, "button", 52, _forTrack2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r13 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.itemsOf(g_r13));
  }
}
function ShellComponent_For_41_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function ShellComponent_For_41_Conditional_0_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const g_r13 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggle(g_r13.key));
    });
    \u0275\u0275elementStart(1, "span", 28);
    \u0275\u0275element(2, "ic", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5, "\u25BE");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ShellComponent_For_41_Conditional_0_Conditional_2_Conditional_6_Template, 3, 0, "div", 51);
  }
  if (rf & 2) {
    const g_r13 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("open", ctx_r0.isOpen(g_r13))("grpon", ctx_r0.mini() && ctx_r0.groupOn(g_r13));
    \u0275\u0275property("title", g_r13.label);
    \u0275\u0275advance(2);
    \u0275\u0275property("n", g_r13.icon)("size", 16);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r13.label);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.isOpen(g_r13) ? 6 : -1);
  }
}
function ShellComponent_For_41_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ShellComponent_For_41_Conditional_0_Conditional_0_Template, 2, 1, "div", 26)(1, ShellComponent_For_41_Conditional_0_Conditional_1_Template, 4, 5, "button", 48)(2, ShellComponent_For_41_Conditional_0_Conditional_2_Template, 7, 9);
  }
  if (rf & 2) {
    const g_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(g_r13.sec ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!g_r13.items ? 1 : 2);
  }
}
function ShellComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ShellComponent_For_41_Conditional_0_Template, 3, 2);
  }
  if (rf & 2) {
    const g_r13 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.showGroup(g_r13) ? 0 : -1);
  }
}
var ShellComponent = class _ShellComponent {
  auth = inject(AuthService);
  scope = inject(ScopeService);
  router = inject(Router);
  api = inject(ApiService);
  md = inject(MasterDataService);
  open = signal({ inv: true, act: true, cfg: true });
  mini = signal(localStorage.getItem("unichem_sidemini") === "true");
  url = signal(this.router.url);
  dark = signal(document.documentElement.dataset["theme"] === "dark");
  overdue = signal(0);
  initials = computed(() => initials(this.auth.me()?.name));
  fmtDT = fmtDT;
  groups = [
    { label: "Inventory", icon: "inventory_2", sec: "Analysis", key: "inv", perm: "view.inventory", items: [
      { label: "By Category", link: "/inventory/goods" },
      { label: "Stock Status", link: "/inventory/status" },
      { label: "Inventory Aging", link: "/inventory/aging" },
      { label: "Expiry Monitoring", link: "/inventory/expiry" }
    ] },
    { label: "Consumables", icon: "build", link: "/inventory/cons", perm: "view.inventory" },
    { label: "Matrix View", icon: "grid_on", link: "/matrix", perm: "view.inventory" },
    { label: "Year-wise Comparison", icon: "show_chart", link: "/years", perm: "view.years" },
    { label: "Actions", icon: "task_alt", sec: "Action & Reports", key: "act", perm: "view.actions", items: [
      { label: "Assign Owner", link: "/actions/queue" },
      { label: "Open Actions", link: "/actions/open", cnt: () => this.overdue() || "", red: true },
      { label: "Closed", link: "/actions/closed" }
    ] },
    { label: "Configuration", icon: "settings", sec: "Setup", key: "cfg", items: [
      { label: "Masters", link: "/masters", perm: "masters.edit" },
      { label: "Import / Export", link: "/import", perm: ["import.data", "export.data"] },
      { label: "Data Entry & Quality", link: "/data", perm: ["data.edit", "data.approve"] },
      { label: "Users & Access", link: "/users", perm: ["users.manage", "audit.view"] }
    ] }
  ];
  /** Masters shown in the sidebar — every value comes from GET /api/masters/sidebar. */
  masterGroups = [
    {
      key: "m_plants",
      tab: "plants",
      label: "Plants (SAP)",
      icon: "factory",
      count: () => this.md.counts()?.plants,
      items: () => this.md.plants().map((p) => ({
        key: p.id,
        label: p.code ? `${p.code} - ${p.name}` : p.name,
        q: p.code || p.name,
        title: [p.name, p.buCode, p.city].filter(Boolean).join(" \xB7 ")
      }))
    },
    {
      key: "m_bus",
      tab: "bus",
      label: "Business Units",
      icon: "account_tree",
      count: () => this.md.counts()?.businessUnits,
      items: () => this.md.businessUnits().map((b) => ({
        key: b.id,
        label: b.code,
        q: b.code,
        tag: b.plantCount ? String(b.plantCount) : null,
        title: [b.name, b.alias, `${b.plantCount} active plant(s)`].filter(Boolean).join(" \xB7 ")
      }))
    },
    {
      key: "m_slocs",
      tab: "slocs",
      label: "Storage Locations (SAP)",
      icon: "warehouse",
      count: () => this.md.counts()?.storageLocations,
      items: () => this.md.storageLocations().map((s) => ({
        key: s.id,
        label: `${s.code} - ${s.name}`,
        q: s.code,
        tag: s.plantName,
        title: `${s.code} - ${s.name}` + (s.storageType ? ` \xB7 ${s.storageType}` : "") + ` \xB7 ${s.plantName ? "Plant " + s.plantName : "All plants"}`
      }))
    },
    {
      key: "m_mtypes",
      tab: "mtypes",
      label: "Material Types (SAP)",
      icon: "category",
      count: () => this.md.counts()?.materialTypes,
      items: () => this.md.materialTypes().map((m) => ({
        key: m.id,
        label: m.name ? `${m.code} - ${m.name}` : m.code,
        q: m.code,
        title: [m.code, m.name, m.category].filter(Boolean).join(" \xB7 ")
      }))
    }
  ];
  /** Masters tab / search currently in the URL — drives sidebar highlighting. */
  mastersAt = computed(() => {
    const t = this.router.parseUrl(this.url());
    const onMasters = this.url().split("?")[0].startsWith("/masters");
    return { tab: onMasters ? t.queryParams["tab"] ?? null : null, q: onMasters ? t.queryParams["q"] ?? null : null };
  });
  constructor() {
    this.scope.load();
    if (this.showMasters())
      this.md.load();
    this.api.status().subscribe((s) => this.auth.setIdle(s.idleMinutes));
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe(() => {
      this.url.set(this.router.url);
      document.body.classList.remove("sideopen");
    });
    effect(() => {
      this.scope.version();
      if (this.auth.can("view.actions"))
        this.api.actions().subscribe((a) => this.overdue.set(a.filter((x) => x.overdue).length));
    });
    effect(() => document.body.classList.toggle("sidemini", this.mini()));
    const me = this.auth.me();
    if (me && !me.scopeAll) {
      if (me.scopeBus.length === 1 && !me.scopeUnits.length)
        this.scope.goScope(me.scopeBus[0]);
      else if (!me.scopeBus.length && me.scopeUnits.length === 1)
        setTimeout(() => {
          const p = this.scope.activePlants().find((x) => x.name === me.scopeUnits[0]);
          if (p)
            this.scope.goScope(p.buCode, p.name);
        }, 600);
    }
  }
  visible(p) {
    return !p || this.auth.can(p);
  }
  itemsOf(g) {
    return (g.items ?? []).filter((i) => this.visible(i.perm));
  }
  showGroup(g) {
    return this.visible(g.perm) && (!g.items || this.itemsOf(g).length > 0);
  }
  groupOn(g) {
    return this.itemsOf(g).some((i) => this.url().startsWith(i.link));
  }
  toggle(k) {
    this.open.update((o) => __spreadProps(__spreadValues({}, o), { [k]: !o[k] }));
  }
  isOpen(g) {
    return this.open()[g.key] || this.groupOn(g);
  }
  hamb() {
    if (window.innerWidth <= 980)
      document.body.classList.toggle("sideopen");
    else {
      this.mini.update((v) => !v);
      localStorage.setItem("unichem_sidemini", String(this.mini()));
    }
  }
  goScope(bu, plant = "All") {
    this.scope.goScope(bu, plant);
    this.router.navigate(["/dashboard"]);
  }
  onDash() {
    return this.url().startsWith("/dashboard");
  }
  toggleTheme() {
    const d = this.dark() ? "light" : "dark";
    this.dark.set(d === "dark");
    document.documentElement.dataset["theme"] = d;
    localStorage.setItem("unichem_theme", d);
    const me = this.auth.me();
    if (me)
      this.api.put("/auth/me", __spreadProps(__spreadValues({}, me), { theme: d })).subscribe();
  }
  refresh() {
    this.scope.load();
    this.scope.refresh();
    if (this.showMasters())
      this.md.refresh();
  }
  /** The sidebar Masters section links to the Masters screen, so it follows the same permission. */
  showMasters() {
    return this.auth.can("masters.edit");
  }
  masterOpen(g) {
    return !!this.open()[g.key];
  }
  /** Category click: open its Masters tab and expand the group (collapses if already there). */
  goMaster(g) {
    const here = this.mastersAt().tab === g.tab && !this.mastersAt().q;
    if (here && this.masterOpen(g)) {
      this.toggle(g.key);
      return;
    }
    this.open.update((o) => __spreadProps(__spreadValues({}, o), { [g.key]: true }));
    this.router.navigate(["/masters"], { queryParams: { tab: g.tab } });
  }
  masterToggle(g, e) {
    e.stopPropagation();
    this.toggle(g.key);
  }
  signOut() {
    if (confirm("Sign out?"))
      this.auth.logout();
  }
  static \u0275fac = function ShellComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShellComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShellComponent, selectors: [["app-shell"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 17, consts: [[1, "top"], ["routerLink", "/dashboard", "title", "Dashboard", 1, "logo"], [1, "wm"], ["aria-label", "Toggle menu", "title", "Collapse / expand menu", 1, "hamb", 3, "click"], [1, "apptitle"], [1, "flex1"], ["title", "Data source", 1, "syncpill"], [1, "dot", "ok"], [1, "lbl"], ["routerLink", "/matrix", "title", "Matrix view \u2014 plants \xD7 categories", 1, "hbtn", 3, "on"], [1, "hbtn", 3, "click"], [3, "n", "size"], ["title", "Refresh data", 1, "hbtn", "icon", 3, "click"], ["n", "refresh", 3, "size"], ["routerLink", "/profile", "title", "My profile", 1, "userchip"], [1, "nm"], [1, "avatar"], ["title", "Sign out", 1, "hbtn", "icon", 3, "click"], ["n", "logout", 3, "size"], [1, "shell"], [1, "side"], [1, "sidefoot"], [1, "scrim", 3, "click"], [1, "content"], ["routerLink", "/matrix", "title", "Matrix view \u2014 plants \xD7 categories", 1, "hbtn"], ["n", "grid_on", 3, "size"], [1, "sidesec"], ["title", "Entire organization", 1, "sitem", 3, "click"], [1, "ic"], ["n", "apartment", 3, "size"], [1, "lvl"], [1, "tree"], [1, "tnode", "bu", 3, "click"], [1, "tic"], [1, "tunits"], [1, "tnode", "unit", 3, "on", "inpath"], [1, "tnode", "unit", 3, "click"], [1, "mretry", 3, "title"], [1, "mretry", 3, "click", "title"], [1, "sitem", "mgrp", 3, "click", "title"], [1, "mcnt"], [1, "chev", 3, "click"], [1, "ssub", "mlist"], [3, "routerLink", "queryParams", "on", "title"], [1, "mempty"], [3, "routerLink", "queryParams", "title"], [1, "mlbl"], [1, "cnt"], ["routerLinkActive", "on", 1, "sitem", 3, "routerLink", "title"], [1, "sitem", 3, "click", "title"], [1, "chev"], [1, "ssub"], ["routerLinkActive", "on", 3, "routerLink"], [1, "cnt", 3, "red"]], template: function ShellComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "b");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span");
      \u0275\u0275text(6, "Laboratories Ltd.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "button", 3);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_7_listener() {
        return ctx.hamb();
      });
      \u0275\u0275text(8, "\u2630");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 4)(10, "b");
      \u0275\u0275text(11, "INVENTORY MANAGEMENT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(14, "span", 5);
      \u0275\u0275elementStart(15, "span", 6);
      \u0275\u0275element(16, "span", 7);
      \u0275\u0275elementStart(17, "span", 8);
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, ShellComponent_Conditional_19_Template, 4, 3, "button", 9);
      \u0275\u0275elementStart(20, "button", 10);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_20_listener() {
        return ctx.toggleTheme();
      });
      \u0275\u0275element(21, "ic", 11);
      \u0275\u0275elementStart(22, "span", 8);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "button", 12);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_24_listener() {
        return ctx.refresh();
      });
      \u0275\u0275element(25, "ic", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 14)(27, "div", 15)(28, "b");
      \u0275\u0275text(29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "span");
      \u0275\u0275text(31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 16);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "button", 17);
      \u0275\u0275listener("click", function ShellComponent_Template_button_click_34_listener() {
        return ctx.signOut();
      });
      \u0275\u0275element(35, "ic", 18);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 19)(37, "aside", 20);
      \u0275\u0275template(38, ShellComponent_Conditional_38_Template, 11, 6)(39, ShellComponent_Conditional_39_Template, 5, 1);
      \u0275\u0275repeaterCreate(40, ShellComponent_For_41_Template, 1, 1, null, null, _forTrack0);
      \u0275\u0275elementStart(42, "div", 21)(43, "b");
      \u0275\u0275text(44, "OPERATING PHILOSOPHY");
      \u0275\u0275elementEnd();
      \u0275\u0275text(45, "Visibility \u2192 Identification \u2192 Prioritization \u2192 Ownership \u2192 Action \u2192 Closure");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 22);
      \u0275\u0275listener("click", function ShellComponent_Template_div_click_46_listener() {
        return ctx.hamb();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div", 23)(48, "main");
      \u0275\u0275element(49, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "footer");
      \u0275\u0275text(51, "Unichem Inventory Management \xB7 Visibility \u2192 Identification \u2192 Prioritization \u2192 Ownership \u2192 Action \u2192 Closure \xB7 Data is stored in PostgreSQL and served by the Spring Boot API");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_8_0;
      let tmp_9_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.scope.settings()["companyShort"] || "UNICHEM");
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("Management dashboard \xB7 ", ctx.scope.bus().join(" & "), "");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", ctx.scope.settings()["sync.source"] || "No data", " \xB7 ", ctx.fmtDT(ctx.scope.settings()["sync.lastRefresh"]), "");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.auth.can("view.inventory") ? 19 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("n", ctx.dark() ? "light_mode" : "dark_mode")("size", 16);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.dark() ? "Light" : "Dark");
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 16);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate((tmp_8_0 = ctx.auth.me()) == null ? null : tmp_8_0.name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate3("", (tmp_9_0 = ctx.auth.me()) == null ? null : tmp_9_0.location, "", ((tmp_9_0 = ctx.auth.me()) == null ? null : tmp_9_0.location) ? " \xB7 " : "", "", (tmp_9_0 = ctx.auth.me()) == null ? null : tmp_9_0.roleLabel, "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.initials());
      \u0275\u0275advance(2);
      \u0275\u0275property("size", 17);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.auth.can("view.inventory") ? 38 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showMasters() ? 39 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.groups);
    }
  }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, Ic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShellComponent, { className: "ShellComponent", filePath: "src\\app\\shell\\shell.component.ts", lineNumber: 23 });
})();

// src/app/pages/login/login.component.ts
function LoginComponent_Case_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "Connecting\u2026");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Case_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.reasonText());
  }
}
function LoginComponent_Case_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Enter your username");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Case_11_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Enter your password");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Case_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Sign in");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, LoginComponent_Case_11_Conditional_2_Template, 2, 1, "div", 8);
    \u0275\u0275elementStart(3, "form", 9);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Case_11_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doLogin());
    });
    \u0275\u0275elementStart(4, "label");
    \u0275\u0275text(5, "Username or email");
    \u0275\u0275element(6, "input", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, LoginComponent_Case_11_Conditional_7_Template, 2, 0, "div", 11);
    \u0275\u0275elementStart(8, "label");
    \u0275\u0275text(9, "Password");
    \u0275\u0275element(10, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, LoginComponent_Case_11_Conditional_11_Template, 2, 0, "div", 11);
    \u0275\u0275elementStart(12, "div", 13);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 14);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 15)(17, "a", 16);
    \u0275\u0275listener("click", function LoginComponent_Case_11_Template_a_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openRequest());
    });
    \u0275\u0275text(18, "New user? Request access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 17);
    \u0275\u0275text(20, "Forgot password? Ask an administrator.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.reasonText() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.login);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.t(ctx_r1.login, "username") ? 7 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.t(ctx_r1.login, "password") ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.busy());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.busy() ? "Signing in\u2026" : "Sign in");
  }
}
function LoginComponent_Case_12_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Username: 3+ letters, digits, . _ -");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Case_12_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Password needs ", (tmp_2_0 = ctx_r1.setup.get("password")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["policy"], ".");
  }
}
function LoginComponent_Case_12_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Passwords do not match.");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Set up the administrator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275text(3, "No users exist yet. Create the first administrator account \u2014 it can then add other users and assign roles and data access.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 19);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Case_12_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doSetup());
    });
    \u0275\u0275elementStart(5, "div", 20)(6, "label");
    \u0275\u0275text(7, "Full name");
    \u0275\u0275element(8, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label");
    \u0275\u0275text(10, "Username");
    \u0275\u0275element(11, "input", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, LoginComponent_Case_12_Conditional_12_Template, 2, 0, "div", 11);
    \u0275\u0275elementStart(13, "div", 20)(14, "label");
    \u0275\u0275text(15, "Email");
    \u0275\u0275element(16, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "label");
    \u0275\u0275text(18, "Designation");
    \u0275\u0275element(19, "input", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 20)(21, "label");
    \u0275\u0275text(22, "Password");
    \u0275\u0275element(23, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "label");
    \u0275\u0275text(25, "Confirm password");
    \u0275\u0275element(26, "input", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(27, LoginComponent_Case_12_Conditional_27_Template, 2, 1, "div", 11)(28, LoginComponent_Case_12_Conditional_28_Template, 2, 0, "div", 11);
    \u0275\u0275elementStart(29, "div", 13);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 14);
    \u0275\u0275text(32, "Create administrator & sign in");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.setup);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx_r1.t(ctx_r1.setup, "username") ? 12 : -1);
    \u0275\u0275advance(15);
    \u0275\u0275conditional(((tmp_3_0 = ctx_r1.setup.get("password")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["policy"]) && ((tmp_3_0 = ctx_r1.setup.get("password")) == null ? null : tmp_3_0.touched) ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.setup.errors == null ? null : ctx_r1.setup.errors["mismatch"]) && ((tmp_4_0 = ctx_r1.setup.get("confirm")) == null ? null : tmp_4_0.touched) ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.busy());
  }
}
function LoginComponent_Case_13_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Fill in name, a valid username and email, and the justification.");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Request access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275text(3, "Your request goes to the administrator, who assigns the role and data access and gives you a temporary password.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 19);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Case_13_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doRequest());
    });
    \u0275\u0275elementStart(5, "div", 20)(6, "label");
    \u0275\u0275text(7, "Full name *");
    \u0275\u0275element(8, "input", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label");
    \u0275\u0275text(10, "Preferred username *");
    \u0275\u0275element(11, "input", 22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 20)(13, "label");
    \u0275\u0275text(14, "Official email *");
    \u0275\u0275element(15, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "label");
    \u0275\u0275text(17, "Employee ID");
    \u0275\u0275element(18, "input", 27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 20)(20, "label");
    \u0275\u0275text(21, "Designation");
    \u0275\u0275element(22, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "label");
    \u0275\u0275text(24, "Department");
    \u0275\u0275element(25, "input", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 20)(27, "label");
    \u0275\u0275text(28, "Business unit");
    \u0275\u0275elementStart(29, "select", 30)(30, "option", 31);
    \u0275\u0275text(31, "Entire organization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option");
    \u0275\u0275text(33, "API");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option");
    \u0275\u0275text(35, "Formulation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "label");
    \u0275\u0275text(37, "Access needed");
    \u0275\u0275elementStart(38, "select", 32)(39, "option", 33);
    \u0275\u0275text(40, "Viewer / Auditor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option", 34);
    \u0275\u0275text(42, "Store User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option", 35);
    \u0275\u0275text(44, "Function Owner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option", 36);
    \u0275\u0275text(46, "Plant / Unit Head");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option", 37);
    \u0275\u0275text(48, "Business Unit Head");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(49, "label");
    \u0275\u0275text(50, "Business justification *");
    \u0275\u0275element(51, "input", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, LoginComponent_Case_13_Conditional_52_Template, 2, 0, "div", 11);
    \u0275\u0275elementStart(53, "div", 13);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "button", 39);
    \u0275\u0275text(56, "Submit request");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 15)(58, "a", 16);
    \u0275\u0275listener("click", function LoginComponent_Case_13_Template_a_click_58_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mode.set("login"));
    });
    \u0275\u0275text(59, "\u2190 Back to sign in");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.request);
    \u0275\u0275advance(48);
    \u0275\u0275conditional(ctx_r1.request.invalid && ctx_r1.request.touched ? 52 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function LoginComponent_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Request submitted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "An administrator will review your request and share a temporary password with you.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 15)(5, "a", 16);
    \u0275\u0275listener("click", function LoginComponent_Case_14_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mode.set("login"));
    });
    \u0275\u0275text(6, "\u2190 Back to sign in");
    \u0275\u0275elementEnd()();
  }
}
function LoginComponent_Case_15_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Password needs ", (tmp_2_0 = ctx_r1.change.get("newPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["policy"], ".");
  }
}
function LoginComponent_Case_15_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Passwords do not match.");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1, "Change password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275text(3, "You signed in with a temporary password. Choose a new one to continue.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 19);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Case_15_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doChange());
    });
    \u0275\u0275elementStart(5, "label");
    \u0275\u0275text(6, "New password");
    \u0275\u0275element(7, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "label");
    \u0275\u0275text(9, "Confirm new password");
    \u0275\u0275element(10, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, LoginComponent_Case_15_Conditional_11_Template, 2, 1, "div", 11)(12, LoginComponent_Case_15_Conditional_12_Template, 2, 0, "div", 11);
    \u0275\u0275elementStart(13, "div", 13);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 39);
    \u0275\u0275text(16, "Update password");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx_r1.change);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(((tmp_2_0 = ctx_r1.change.get("newPassword")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["policy"]) && ((tmp_2_0 = ctx_r1.change.get("newPassword")) == null ? null : tmp_2_0.touched) ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((ctx_r1.change.errors == null ? null : ctx_r1.change.errors["mismatch"]) && ((tmp_3_0 = ctx_r1.change.get("confirm")) == null ? null : tmp_3_0.touched) ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
var pwPolicy = (c) => {
  const v = String(c.value || "");
  const p = [];
  if (v.length < 8)
    p.push("at least 8 characters");
  if (!/\d/.test(v))
    p.push("a number");
  if (!/[A-Za-z]/.test(v))
    p.push("a letter");
  return p.length ? { policy: p.join(", ") } : null;
};
var match = (a, b) => (g) => g.get(a)?.value === g.get(b)?.value ? null : { mismatch: true };
var LoginComponent = class _LoginComponent {
  api = inject(ApiService);
  auth = inject(AuthService);
  router = inject(Router);
  fb = inject(FormBuilder);
  mode = signal("loading");
  error = signal("");
  busy = signal(false);
  company = signal("Unichem Laboratories Ltd.");
  msg = inject(ActivatedRoute).snapshot.queryParamMap.get("reason");
  bus = signal([]);
  login = this.fb.nonNullable.group({ username: ["", Validators.required], password: ["", Validators.required] });
  setup = this.fb.nonNullable.group({
    name: ["", Validators.required],
    username: ["", [Validators.required, Validators.pattern(/^[\w.\-]{3,}$/)]],
    email: ["", Validators.email],
    designation: [""],
    password: ["", [Validators.required, pwPolicy]],
    confirm: ["", Validators.required]
  }, { validators: match("password", "confirm") });
  request = this.fb.nonNullable.group({
    name: ["", Validators.required],
    username: ["", [Validators.required, Validators.pattern(/^[\w.\-]{3,}$/)]],
    email: ["", [Validators.required, Validators.email]],
    empId: [""],
    designation: [""],
    department: [""],
    bu: ["ALL"],
    unit: [""],
    role: ["viewer"],
    phone: [""],
    justification: ["", Validators.required]
  });
  change = this.fb.nonNullable.group({ newPassword: ["", [Validators.required, pwPolicy]], confirm: ["", Validators.required] }, { validators: match("newPassword", "confirm") });
  constructor() {
    this.api.status().subscribe({
      next: (s) => {
        this.company.set(s.company);
        this.mode.set(s.needsSetup ? "setup" : "login");
      },
      error: () => {
        this.mode.set("login");
        this.error.set("Cannot reach the server \u2014 check that the API is running.");
      }
    });
  }
  reasonText() {
    return this.msg === "timeout" ? "Your session timed out after inactivity. Please sign in again." : this.msg === "expired" ? "Your session has ended. Please sign in again." : "";
  }
  doLogin() {
    if (this.login.invalid) {
      this.login.markAllAsTouched();
      return;
    }
    this.busy.set(true);
    this.error.set("");
    const v = this.login.getRawValue();
    this.auth.login(v.username, v.password).subscribe({
      next: (r) => {
        this.busy.set(false);
        if (r.user.mustChange)
          this.mode.set("change");
        else
          this.enter();
      },
      error: (e) => {
        this.busy.set(false);
        this.error.set(errMsg(e));
      }
    });
  }
  doSetup() {
    if (this.setup.invalid) {
      this.setup.markAllAsTouched();
      return;
    }
    const _a = this.setup.getRawValue(), { confirm: confirm2 } = _a, body = __objRest(_a, ["confirm"]);
    this.busy.set(true);
    this.auth.setup(body).subscribe({ next: () => this.enter(), error: (e) => {
      this.busy.set(false);
      this.error.set(errMsg(e));
    } });
  }
  doRequest() {
    if (this.request.invalid) {
      this.request.markAllAsTouched();
      return;
    }
    this.api.post("/auth/access-request", this.request.getRawValue()).subscribe({ next: () => this.mode.set("requested"), error: (e) => this.error.set(errMsg(e)) });
  }
  doChange() {
    if (this.change.invalid) {
      this.change.markAllAsTouched();
      return;
    }
    this.api.post("/auth/change-password", { newPassword: this.change.getRawValue().newPassword }).subscribe({
      next: () => this.enter(),
      error: (e) => this.error.set(errMsg(e))
    });
  }
  openRequest() {
    this.error.set("");
    this.mode.set("request");
  }
  enter() {
    this.router.navigate([this.auth.can("view.inventory") ? "/dashboard" : "/profile"]);
  }
  t(g, k) {
    const c = g.get(k);
    return c && c.invalid && c.touched;
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 3, consts: [[1, "authscreen"], [1, "authcard"], [1, "authbrand"], [1, "wm"], [1, "authapp"], [1, "loading"], [1, "authfoot"], ["n", "verified_user", 3, "size"], [1, "authmsg"], ["autocomplete", "on", 3, "ngSubmit", "formGroup"], ["type", "text", "formControlName", "username", "autocomplete", "username", "autofocus", ""], [1, "err"], ["type", "password", "formControlName", "password", "autocomplete", "current-password"], [1, "autherr"], ["type", "submit", 1, "btn", 2, "width", "100%", "justify-content", "center", 3, "disabled"], [1, "authlinks"], [3, "click"], [1, "hint"], [1, "hint", 2, "margin-bottom", "12px"], [3, "ngSubmit", "formGroup"], [1, "authgrid"], ["type", "text", "formControlName", "name"], ["type", "text", "formControlName", "username"], ["type", "email", "formControlName", "email"], ["type", "text", "formControlName", "designation", "placeholder", "e.g. Head \u2013 IT"], ["type", "password", "formControlName", "password", "autocomplete", "new-password"], ["type", "password", "formControlName", "confirm", "autocomplete", "new-password"], ["type", "text", "formControlName", "empId"], ["type", "text", "formControlName", "designation"], ["type", "text", "formControlName", "department"], ["formControlName", "bu"], ["value", "ALL"], ["formControlName", "role"], ["value", "viewer"], ["value", "store"], ["value", "fnowner"], ["value", "planthead"], ["value", "buhead"], ["type", "text", "formControlName", "justification", "placeholder", "e.g. Store in-charge Goa-1, maintains stock & actions"], ["type", "submit", 1, "btn", 2, "width", "100%", "justify-content", "center"], ["type", "password", "formControlName", "newPassword", "autocomplete", "new-password"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "b");
      \u0275\u0275text(5, "UNICHEM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4);
      \u0275\u0275text(9, "Inventory Management Dashboard");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, LoginComponent_Case_10_Template, 2, 0, "div", 5)(11, LoginComponent_Case_11_Template, 21, 7)(12, LoginComponent_Case_12_Template, 33, 6)(13, LoginComponent_Case_13_Template, 60, 3)(14, LoginComponent_Case_14_Template, 7, 0)(15, LoginComponent_Case_15_Template, 17, 4);
      \u0275\u0275elementStart(16, "div", 6);
      \u0275\u0275element(17, "ic", 7);
      \u0275\u0275text(18, " Access is role-based and limited to your assigned business units and units. Activity is recorded in the audit log.");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.company());
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_1_0 = ctx.mode()) === "loading" ? 10 : tmp_1_0 === "login" ? 11 : tmp_1_0 === "setup" ? 12 : tmp_1_0 === "request" ? 13 : tmp_1_0 === "requested" ? 14 : tmp_1_0 === "change" ? 15 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("size", 15);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, Ic], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\pages\\login\\login.component.ts", lineNumber: 18 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: ShellComponent,
    canActivate: [authGuard],
    canActivateChild: [permGuard],
    children: [
      { path: "", pathMatch: "full", redirectTo: "dashboard" },
      { path: "dashboard", data: { perm: "view.inventory", title: "Dashboard" }, loadComponent: () => import("./chunk-3HGLY3UK.js").then((m) => m.DashboardComponent) },
      { path: "inventory/:view", data: { perm: "view.inventory" }, loadComponent: () => import("./chunk-A3SAD3AQ.js").then((m) => m.InventoryComponent) },
      { path: "matrix", data: { perm: "view.inventory" }, loadComponent: () => import("./chunk-QNSTTX4R.js").then((m) => m.MatrixComponent) },
      { path: "years", data: { perm: "view.years" }, loadComponent: () => import("./chunk-AJ7QV6FN.js").then((m) => m.YearsComponent) },
      { path: "actions/:view", data: { perm: "view.actions" }, loadComponent: () => import("./chunk-IACXFSDM.js").then((m) => m.ActionsComponent) },
      { path: "import", data: { perm: ["import.data", "export.data"] }, loadComponent: () => import("./chunk-FRA5H3C2.js").then((m) => m.ImportComponent) },
      { path: "data", data: { perm: ["data.edit", "data.approve"] }, loadComponent: () => import("./chunk-Y4XGEX72.js").then((m) => m.DataComponent) },
      { path: "masters", data: { perm: "masters.edit" }, loadComponent: () => import("./chunk-2TTWU7FD.js").then((m) => m.MastersComponent) },
      { path: "users", data: { perm: ["users.manage", "audit.view"] }, loadComponent: () => import("./chunk-OCWZWOCF.js").then((m) => m.UsersComponent) },
      { path: "profile", loadComponent: () => import("./chunk-QJJGXBHH.js").then((m) => m.ProfileComponent) }
    ]
  },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync()
  ]
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor() {
    document.documentElement.dataset["theme"] = localStorage.getItem("unichem_theme") || "light";
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 5 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v18.2.14
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
