import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlDirective,
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
  A11yModule,
  AuthService,
  BasePortalOutlet,
  CdkPortalOutlet,
  CdkScrollable,
  ComponentPortal,
  Directionality,
  ESCAPE,
  FocusMonitor,
  FocusTrapFactory,
  InteractivityChecker,
  MatCommonModule,
  Overlay,
  OverlayConfig,
  OverlayContainer,
  OverlayModule,
  OverlayRef,
  Platform,
  PortalModule,
  TemplatePortal,
  ToastService,
  _getFocusedElementPierceShadowDom,
  coerceNumberProperty,
  errMsg,
  hasModifierKey
} from "./chunk-3JYYVKE5.js";
import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-L6TX4WJQ.js";
import {
  DatePipe2,
  FlagTags,
  InrPipe,
  PrioTag,
  QtyPipe,
  StatusTags
} from "./chunk-2TWUEAPP.js";
import {
  ScopeService
} from "./chunk-CP6R3LGJ.js";
import {
  addDays,
  consClass,
  flagLabel,
  realFlags,
  stageClass,
  todayISO
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
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  Location,
  NgModule,
  NgZone,
  Optional,
  SkipSelf,
  Subject,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  defer,
  filter,
  inject,
  merge,
  of,
  setClassMetadata,
  signal,
  startWith,
  take,
  ɵsetClassDebugInfo,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
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
  ɵɵtextInterpolate4,
  ɵɵviewQuery
} from "./chunk-BSQGTHQ3.js";

// node_modules/@angular/cdk/fesm2022/dialog.mjs
function CdkDialogContainer_ng_template_0_Template(rf, ctx) {
}
var DialogConfig = class {
  constructor() {
    this.role = "dialog";
    this.panelClass = "";
    this.hasBackdrop = true;
    this.backdropClass = "";
    this.disableClose = false;
    this.width = "";
    this.height = "";
    this.data = null;
    this.ariaDescribedBy = null;
    this.ariaLabelledBy = null;
    this.ariaLabel = null;
    this.ariaModal = true;
    this.autoFocus = "first-tabbable";
    this.restoreFocus = true;
    this.closeOnNavigation = true;
    this.closeOnDestroy = true;
    this.closeOnOverlayDetachments = true;
  }
};
function throwDialogContentAlreadyAttachedError() {
  throw Error("Attempting to attach dialog content after content is already attached");
}
var CdkDialogContainer = class _CdkDialogContainer extends BasePortalOutlet {
  constructor(_elementRef, _focusTrapFactory, _document, _config, _interactivityChecker, _ngZone, _overlayRef, _focusMonitor) {
    super();
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._config = _config;
    this._interactivityChecker = _interactivityChecker;
    this._ngZone = _ngZone;
    this._overlayRef = _overlayRef;
    this._focusMonitor = _focusMonitor;
    this._platform = inject(Platform);
    this._focusTrap = null;
    this._elementFocusedBeforeDialogWasOpened = null;
    this._closeInteractionType = null;
    this._ariaLabelledByQueue = [];
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._injector = inject(Injector);
    this._isDestroyed = false;
    this.attachDomPortal = (portal) => {
      if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throwDialogContentAlreadyAttachedError();
      }
      const result = this._portalOutlet.attachDomPortal(portal);
      this._contentAttached();
      return result;
    };
    this._document = _document;
    if (this._config.ariaLabelledBy) {
      this._ariaLabelledByQueue.push(this._config.ariaLabelledBy);
    }
  }
  _addAriaLabelledBy(id) {
    this._ariaLabelledByQueue.push(id);
    this._changeDetectorRef.markForCheck();
  }
  _removeAriaLabelledBy(id) {
    const index = this._ariaLabelledByQueue.indexOf(id);
    if (index > -1) {
      this._ariaLabelledByQueue.splice(index, 1);
      this._changeDetectorRef.markForCheck();
    }
  }
  _contentAttached() {
    this._initializeFocusTrap();
    this._handleBackdropClicks();
    this._captureInitialFocus();
  }
  /**
   * Can be used by child classes to customize the initial focus
   * capturing behavior (e.g. if it's tied to an animation).
   */
  _captureInitialFocus() {
    this._trapFocus();
  }
  ngOnDestroy() {
    this._isDestroyed = true;
    this._restoreFocus();
  }
  /**
   * Attach a ComponentPortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachComponentPortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachComponentPortal(portal);
    this._contentAttached();
    return result;
  }
  /**
   * Attach a TemplatePortal as content to this dialog container.
   * @param portal Portal to be attached as the dialog content.
   */
  attachTemplatePortal(portal) {
    if (this._portalOutlet.hasAttached() && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throwDialogContentAlreadyAttachedError();
    }
    const result = this._portalOutlet.attachTemplatePortal(portal);
    this._contentAttached();
    return result;
  }
  // TODO(crisbeto): this shouldn't be exposed, but there are internal references to it.
  /** Captures focus if it isn't already inside the dialog. */
  _recaptureFocus() {
    if (!this._containsFocus()) {
      this._trapFocus();
    }
  }
  /**
   * Focuses the provided element. If the element is not focusable, it will add a tabIndex
   * attribute to forcefully focus it. The attribute is removed after focus is moved.
   * @param element The element to focus.
   */
  _forceFocus(element, options) {
    if (!this._interactivityChecker.isFocusable(element)) {
      element.tabIndex = -1;
      this._ngZone.runOutsideAngular(() => {
        const callback = () => {
          element.removeEventListener("blur", callback);
          element.removeEventListener("mousedown", callback);
          element.removeAttribute("tabindex");
        };
        element.addEventListener("blur", callback);
        element.addEventListener("mousedown", callback);
      });
    }
    element.focus(options);
  }
  /**
   * Focuses the first element that matches the given selector within the focus trap.
   * @param selector The CSS selector for the element to set focus to.
   */
  _focusByCssSelector(selector, options) {
    let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
    if (elementToFocus) {
      this._forceFocus(elementToFocus, options);
    }
  }
  /**
   * Moves the focus inside the focus trap. When autoFocus is not set to 'dialog', if focus
   * cannot be moved then focus will go to the dialog container.
   */
  _trapFocus() {
    if (this._isDestroyed) {
      return;
    }
    afterNextRender(() => {
      const element = this._elementRef.nativeElement;
      switch (this._config.autoFocus) {
        case false:
        case "dialog":
          if (!this._containsFocus()) {
            element.focus();
          }
          break;
        case true:
        case "first-tabbable":
          const focusedSuccessfully = this._focusTrap?.focusInitialElement();
          if (!focusedSuccessfully) {
            this._focusDialogContainer();
          }
          break;
        case "first-heading":
          this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
          break;
        default:
          this._focusByCssSelector(this._config.autoFocus);
          break;
      }
    }, {
      injector: this._injector
    });
  }
  /** Restores focus to the element that was focused before the dialog opened. */
  _restoreFocus() {
    const focusConfig = this._config.restoreFocus;
    let focusTargetElement = null;
    if (typeof focusConfig === "string") {
      focusTargetElement = this._document.querySelector(focusConfig);
    } else if (typeof focusConfig === "boolean") {
      focusTargetElement = focusConfig ? this._elementFocusedBeforeDialogWasOpened : null;
    } else if (focusConfig) {
      focusTargetElement = focusConfig;
    }
    if (this._config.restoreFocus && focusTargetElement && typeof focusTargetElement.focus === "function") {
      const activeElement = _getFocusedElementPierceShadowDom();
      const element = this._elementRef.nativeElement;
      if (!activeElement || activeElement === this._document.body || activeElement === element || element.contains(activeElement)) {
        if (this._focusMonitor) {
          this._focusMonitor.focusVia(focusTargetElement, this._closeInteractionType);
          this._closeInteractionType = null;
        } else {
          focusTargetElement.focus();
        }
      }
    }
    if (this._focusTrap) {
      this._focusTrap.destroy();
    }
  }
  /** Focuses the dialog container. */
  _focusDialogContainer() {
    if (this._elementRef.nativeElement.focus) {
      this._elementRef.nativeElement.focus();
    }
  }
  /** Returns whether focus is inside the dialog. */
  _containsFocus() {
    const element = this._elementRef.nativeElement;
    const activeElement = _getFocusedElementPierceShadowDom();
    return element === activeElement || element.contains(activeElement);
  }
  /** Sets up the focus trap. */
  _initializeFocusTrap() {
    if (this._platform.isBrowser) {
      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
      if (this._document) {
        this._elementFocusedBeforeDialogWasOpened = _getFocusedElementPierceShadowDom();
      }
    }
  }
  /** Sets up the listener that handles clicks on the dialog backdrop. */
  _handleBackdropClicks() {
    this._overlayRef.backdropClick().subscribe(() => {
      if (this._config.disableClose) {
        this._recaptureFocus();
      }
    });
  }
  static {
    this.\u0275fac = function CdkDialogContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CdkDialogContainer)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusTrapFactory), \u0275\u0275directiveInject(DOCUMENT, 8), \u0275\u0275directiveInject(DialogConfig), \u0275\u0275directiveInject(InteractivityChecker), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(OverlayRef), \u0275\u0275directiveInject(FocusMonitor));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _CdkDialogContainer,
      selectors: [["cdk-dialog-container"]],
      viewQuery: function CdkDialogContainer_Query(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275viewQuery(CdkPortalOutlet, 7);
        }
        if (rf & 2) {
          let _t;
          \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalOutlet = _t.first);
        }
      },
      hostAttrs: ["tabindex", "-1", 1, "cdk-dialog-container"],
      hostVars: 6,
      hostBindings: function CdkDialogContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275attribute("id", ctx._config.id || null)("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
        }
      },
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 1,
      vars: 0,
      consts: [["cdkPortalOutlet", ""]],
      template: function CdkDialogContainer_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275template(0, CdkDialogContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
        }
      },
      dependencies: [CdkPortalOutlet],
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkDialogContainer, [{
    type: Component,
    args: [{
      selector: "cdk-dialog-container",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [CdkPortalOutlet],
      host: {
        "class": "cdk-dialog-container",
        "tabindex": "-1",
        "[attr.id]": "_config.id || null",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null"
      },
      template: "<ng-template cdkPortalOutlet />\n",
      styles: [".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DialogConfig]
    }]
  }, {
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: OverlayRef
  }, {
    type: FocusMonitor
  }], {
    _portalOutlet: [{
      type: ViewChild,
      args: [CdkPortalOutlet, {
        static: true
      }]
    }]
  });
})();
var DialogRef = class {
  constructor(overlayRef, config) {
    this.overlayRef = overlayRef;
    this.config = config;
    this.closed = new Subject();
    this.disableClose = config.disableClose;
    this.backdropClick = overlayRef.backdropClick();
    this.keydownEvents = overlayRef.keydownEvents();
    this.outsidePointerEvents = overlayRef.outsidePointerEvents();
    this.id = config.id;
    this.keydownEvents.subscribe((event) => {
      if (event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)) {
        event.preventDefault();
        this.close(void 0, {
          focusOrigin: "keyboard"
        });
      }
    });
    this.backdropClick.subscribe(() => {
      if (!this.disableClose) {
        this.close(void 0, {
          focusOrigin: "mouse"
        });
      }
    });
    this._detachSubscription = overlayRef.detachments().subscribe(() => {
      if (config.closeOnOverlayDetachments !== false) {
        this.close();
      }
    });
  }
  /**
   * Close the dialog.
   * @param result Optional result to return to the dialog opener.
   * @param options Additional options to customize the closing behavior.
   */
  close(result, options) {
    if (this.containerInstance) {
      const closedSubject = this.closed;
      this.containerInstance._closeInteractionType = options?.focusOrigin || "program";
      this._detachSubscription.unsubscribe();
      this.overlayRef.dispose();
      closedSubject.next(result);
      closedSubject.complete();
      this.componentInstance = this.containerInstance = null;
    }
  }
  /** Updates the position of the dialog based on the current position strategy. */
  updatePosition() {
    this.overlayRef.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this.overlayRef.updateSize({
      width,
      height
    });
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this.overlayRef.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this.overlayRef.removePanelClass(classes);
    return this;
  }
};
var DIALOG_SCROLL_STRATEGY = new InjectionToken("DialogScrollStrategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
var DIALOG_DATA = new InjectionToken("DialogData");
var DEFAULT_DIALOG_CONFIG = new InjectionToken("DefaultDialogConfig");
var uniqueId = 0;
var Dialog = class _Dialog {
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  constructor(_overlay, _injector, _defaultOptions, _parentDialog, _overlayContainer, scrollStrategy) {
    this._overlay = _overlay;
    this._injector = _injector;
    this._defaultOptions = _defaultOptions;
    this._parentDialog = _parentDialog;
    this._overlayContainer = _overlayContainer;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new Subject();
    this._afterOpenedAtThisLevel = new Subject();
    this._ariaHiddenElements = /* @__PURE__ */ new Map();
    this.afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
    this._scrollStrategy = scrollStrategy;
  }
  open(componentOrTemplateRef, config) {
    const defaults = this._defaultOptions || new DialogConfig();
    config = __spreadValues(__spreadValues({}, defaults), config);
    config.id = config.id || `cdk-dialog-${uniqueId++}`;
    if (config.id && this.getDialogById(config.id) && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Dialog with id "${config.id}" exists already. The dialog id must be unique.`);
    }
    const overlayConfig = this._getOverlayConfig(config);
    const overlayRef = this._overlay.create(overlayConfig);
    const dialogRef = new DialogRef(overlayRef, config);
    const dialogContainer = this._attachContainer(overlayRef, dialogRef, config);
    dialogRef.containerInstance = dialogContainer;
    this._attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config);
    if (!this.openDialogs.length) {
      this._hideNonDialogContentFromAssistiveTechnology();
    }
    this.openDialogs.push(dialogRef);
    dialogRef.closed.subscribe(() => this._removeOpenDialog(dialogRef, true));
    this.afterOpened.next(dialogRef);
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    reverseForEach(this.openDialogs, (dialog) => dialog.close());
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => {
      if (dialog.config.closeOnDestroy === false) {
        this._removeOpenDialog(dialog, false);
      }
    });
    reverseForEach(this._openDialogsAtThisLevel, (dialog) => dialog.close());
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
    this._openDialogsAtThisLevel = [];
  }
  /**
   * Creates an overlay config from a dialog config.
   * @param config The dialog configuration.
   * @returns The overlay configuration.
   */
  _getOverlayConfig(config) {
    const state2 = new OverlayConfig({
      positionStrategy: config.positionStrategy || this._overlay.position().global().centerHorizontally().centerVertically(),
      scrollStrategy: config.scrollStrategy || this._scrollStrategy(),
      panelClass: config.panelClass,
      hasBackdrop: config.hasBackdrop,
      direction: config.direction,
      minWidth: config.minWidth,
      minHeight: config.minHeight,
      maxWidth: config.maxWidth,
      maxHeight: config.maxHeight,
      width: config.width,
      height: config.height,
      disposeOnNavigation: config.closeOnNavigation
    });
    if (config.backdropClass) {
      state2.backdropClass = config.backdropClass;
    }
    return state2;
  }
  /**
   * Attaches a dialog container to a dialog's already-created overlay.
   * @param overlay Reference to the dialog's underlying overlay.
   * @param config The dialog configuration.
   * @returns A promise resolving to a ComponentRef for the attached container.
   */
  _attachContainer(overlay, dialogRef, config) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DialogConfig,
      useValue: config
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }, {
      provide: OverlayRef,
      useValue: overlay
    }];
    let containerType;
    if (config.container) {
      if (typeof config.container === "function") {
        containerType = config.container;
      } else {
        containerType = config.container.type;
        providers.push(...config.container.providers(config));
      }
    } else {
      containerType = CdkDialogContainer;
    }
    const containerPortal = new ComponentPortal(containerType, config.viewContainerRef, Injector.create({
      parent: userInjector || this._injector,
      providers
    }), config.componentFactoryResolver);
    const containerRef = overlay.attach(containerPortal);
    return containerRef.instance;
  }
  /**
   * Attaches the user-provided component to the already-created dialog container.
   * @param componentOrTemplateRef The type of component being loaded into the dialog,
   *     or a TemplateRef to instantiate as the content.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param config Configuration used to open the dialog.
   */
  _attachDialogContent(componentOrTemplateRef, dialogRef, dialogContainer, config) {
    if (componentOrTemplateRef instanceof TemplateRef) {
      const injector = this._createInjector(config, dialogRef, dialogContainer, void 0);
      let context = {
        $implicit: config.data,
        dialogRef
      };
      if (config.templateContext) {
        context = __spreadValues(__spreadValues({}, context), typeof config.templateContext === "function" ? config.templateContext() : config.templateContext);
      }
      dialogContainer.attachTemplatePortal(new TemplatePortal(componentOrTemplateRef, null, context, injector));
    } else {
      const injector = this._createInjector(config, dialogRef, dialogContainer, this._injector);
      const contentRef = dialogContainer.attachComponentPortal(new ComponentPortal(componentOrTemplateRef, config.viewContainerRef, injector, config.componentFactoryResolver));
      dialogRef.componentRef = contentRef;
      dialogRef.componentInstance = contentRef.instance;
    }
  }
  /**
   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside
   * of a dialog to close itself and, optionally, to return a value.
   * @param config Config object that is used to construct the dialog.
   * @param dialogRef Reference to the dialog being opened.
   * @param dialogContainer Component that is going to wrap the dialog content.
   * @param fallbackInjector Injector to use as a fallback when a lookup fails in the custom
   * dialog injector, if the user didn't provide a custom one.
   * @returns The custom injector that can be used inside the dialog.
   */
  _createInjector(config, dialogRef, dialogContainer, fallbackInjector) {
    const userInjector = config.injector || config.viewContainerRef?.injector;
    const providers = [{
      provide: DIALOG_DATA,
      useValue: config.data
    }, {
      provide: DialogRef,
      useValue: dialogRef
    }];
    if (config.providers) {
      if (typeof config.providers === "function") {
        providers.push(...config.providers(dialogRef, config, dialogContainer));
      } else {
        providers.push(...config.providers);
      }
    }
    if (config.direction && (!userInjector || !userInjector.get(Directionality, null, {
      optional: true
    }))) {
      providers.push({
        provide: Directionality,
        useValue: {
          value: config.direction,
          change: of()
        }
      });
    }
    return Injector.create({
      parent: userInjector || fallbackInjector,
      providers
    });
  }
  /**
   * Removes a dialog from the array of open dialogs.
   * @param dialogRef Dialog to be removed.
   * @param emitEvent Whether to emit an event if this is the last dialog.
   */
  _removeOpenDialog(dialogRef, emitEvent) {
    const index = this.openDialogs.indexOf(dialogRef);
    if (index > -1) {
      this.openDialogs.splice(index, 1);
      if (!this.openDialogs.length) {
        this._ariaHiddenElements.forEach((previousValue, element) => {
          if (previousValue) {
            element.setAttribute("aria-hidden", previousValue);
          } else {
            element.removeAttribute("aria-hidden");
          }
        });
        this._ariaHiddenElements.clear();
        if (emitEvent) {
          this._getAfterAllClosed().next();
        }
      }
    }
  }
  /** Hides all of the content that isn't an overlay from assistive technology. */
  _hideNonDialogContentFromAssistiveTechnology() {
    const overlayContainer = this._overlayContainer.getContainerElement();
    if (overlayContainer.parentElement) {
      const siblings = overlayContainer.parentElement.children;
      for (let i = siblings.length - 1; i > -1; i--) {
        const sibling = siblings[i];
        if (sibling !== overlayContainer && sibling.nodeName !== "SCRIPT" && sibling.nodeName !== "STYLE" && !sibling.hasAttribute("aria-live")) {
          this._ariaHiddenElements.set(sibling, sibling.getAttribute("aria-hidden"));
          sibling.setAttribute("aria-hidden", "true");
        }
      }
    }
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  static {
    this.\u0275fac = function Dialog_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _Dialog)(\u0275\u0275inject(Overlay), \u0275\u0275inject(Injector), \u0275\u0275inject(DEFAULT_DIALOG_CONFIG, 8), \u0275\u0275inject(_Dialog, 12), \u0275\u0275inject(OverlayContainer), \u0275\u0275inject(DIALOG_SCROLL_STRATEGY));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _Dialog,
      factory: _Dialog.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Overlay
  }, {
    type: Injector
  }, {
    type: DialogConfig,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DEFAULT_DIALOG_CONFIG]
    }]
  }, {
    type: Dialog,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: OverlayContainer
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DIALOG_SCROLL_STRATEGY]
    }]
  }], null);
})();
function reverseForEach(items, callback) {
  let i = items.length;
  while (i--) {
    callback(items[i]);
  }
}
var DialogModule = class _DialogModule {
  static {
    this.\u0275fac = function DialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _DialogModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [Dialog],
      imports: [
        OverlayModule,
        PortalModule,
        A11yModule,
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule
      ]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialogModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, PortalModule, A11yModule, CdkDialogContainer],
      exports: [
        // Re-export the PortalModule so that people extending the `CdkDialogContainer`
        // don't have to remember to import it or be faced with an unhelpful error.
        PortalModule,
        CdkDialogContainer
      ],
      providers: [Dialog]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/dialog.mjs
function MatDialogContainer_ng_template_2_Template(rf, ctx) {
}
var MatDialogConfig = class {
  constructor() {
    this.role = "dialog";
    this.panelClass = "";
    this.hasBackdrop = true;
    this.backdropClass = "";
    this.disableClose = false;
    this.width = "";
    this.height = "";
    this.data = null;
    this.ariaDescribedBy = null;
    this.ariaLabelledBy = null;
    this.ariaLabel = null;
    this.ariaModal = true;
    this.autoFocus = "first-tabbable";
    this.restoreFocus = true;
    this.delayFocusTrap = true;
    this.closeOnNavigation = true;
  }
};
var OPEN_CLASS = "mdc-dialog--open";
var OPENING_CLASS = "mdc-dialog--opening";
var CLOSING_CLASS = "mdc-dialog--closing";
var OPEN_ANIMATION_DURATION = 150;
var CLOSE_ANIMATION_DURATION = 75;
var MatDialogContainer = class _MatDialogContainer extends CdkDialogContainer {
  constructor(elementRef, focusTrapFactory, _document, dialogConfig, interactivityChecker, ngZone, overlayRef, _animationMode, focusMonitor) {
    super(elementRef, focusTrapFactory, _document, dialogConfig, interactivityChecker, ngZone, overlayRef, focusMonitor);
    this._animationMode = _animationMode;
    this._animationStateChanged = new EventEmitter();
    this._animationsEnabled = this._animationMode !== "NoopAnimations";
    this._actionSectionCount = 0;
    this._hostElement = this._elementRef.nativeElement;
    this._enterAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.enterAnimationDuration) ?? OPEN_ANIMATION_DURATION : 0;
    this._exitAnimationDuration = this._animationsEnabled ? parseCssTime(this._config.exitAnimationDuration) ?? CLOSE_ANIMATION_DURATION : 0;
    this._animationTimer = null;
    this._finishDialogOpen = () => {
      this._clearAnimationClasses();
      this._openAnimationDone(this._enterAnimationDuration);
    };
    this._finishDialogClose = () => {
      this._clearAnimationClasses();
      this._animationStateChanged.emit({
        state: "closed",
        totalTime: this._exitAnimationDuration
      });
    };
  }
  _contentAttached() {
    super._contentAttached();
    this._startOpenAnimation();
  }
  /** Starts the dialog open animation if enabled. */
  _startOpenAnimation() {
    this._animationStateChanged.emit({
      state: "opening",
      totalTime: this._enterAnimationDuration
    });
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._enterAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(OPENING_CLASS, OPEN_CLASS));
      this._waitForAnimationToComplete(this._enterAnimationDuration, this._finishDialogOpen);
    } else {
      this._hostElement.classList.add(OPEN_CLASS);
      Promise.resolve().then(() => this._finishDialogOpen());
    }
  }
  /**
   * Starts the exit animation of the dialog if enabled. This method is
   * called by the dialog ref.
   */
  _startExitAnimation() {
    this._animationStateChanged.emit({
      state: "closing",
      totalTime: this._exitAnimationDuration
    });
    this._hostElement.classList.remove(OPEN_CLASS);
    if (this._animationsEnabled) {
      this._hostElement.style.setProperty(TRANSITION_DURATION_PROPERTY, `${this._exitAnimationDuration}ms`);
      this._requestAnimationFrame(() => this._hostElement.classList.add(CLOSING_CLASS));
      this._waitForAnimationToComplete(this._exitAnimationDuration, this._finishDialogClose);
    } else {
      Promise.resolve().then(() => this._finishDialogClose());
    }
  }
  /**
   * Updates the number action sections.
   * @param delta Increase/decrease in the number of sections.
   */
  _updateActionSectionCount(delta) {
    this._actionSectionCount += delta;
    this._changeDetectorRef.markForCheck();
  }
  /** Clears all dialog animation classes. */
  _clearAnimationClasses() {
    this._hostElement.classList.remove(OPENING_CLASS, CLOSING_CLASS);
  }
  _waitForAnimationToComplete(duration, callback) {
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
    this._animationTimer = setTimeout(callback, duration);
  }
  /** Runs a callback in `requestAnimationFrame`, if available. */
  _requestAnimationFrame(callback) {
    this._ngZone.runOutsideAngular(() => {
      if (typeof requestAnimationFrame === "function") {
        requestAnimationFrame(callback);
      } else {
        callback();
      }
    });
  }
  _captureInitialFocus() {
    if (!this._config.delayFocusTrap) {
      this._trapFocus();
    }
  }
  /**
   * Callback for when the open dialog animation has finished. Intended to
   * be called by sub-classes that use different animation implementations.
   */
  _openAnimationDone(totalTime) {
    if (this._config.delayFocusTrap) {
      this._trapFocus();
    }
    this._animationStateChanged.next({
      state: "opened",
      totalTime
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this._animationTimer !== null) {
      clearTimeout(this._animationTimer);
    }
  }
  attachComponentPortal(portal) {
    const ref = super.attachComponentPortal(portal);
    ref.location.nativeElement.classList.add("mat-mdc-dialog-component-host");
    return ref;
  }
  static {
    this.\u0275fac = function MatDialogContainer_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogContainer)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusTrapFactory), \u0275\u0275directiveInject(DOCUMENT, 8), \u0275\u0275directiveInject(MatDialogConfig), \u0275\u0275directiveInject(InteractivityChecker), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(OverlayRef), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8), \u0275\u0275directiveInject(FocusMonitor));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
      type: _MatDialogContainer,
      selectors: [["mat-dialog-container"]],
      hostAttrs: ["tabindex", "-1", 1, "mat-mdc-dialog-container", "mdc-dialog"],
      hostVars: 10,
      hostBindings: function MatDialogContainer_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx._config.id);
          \u0275\u0275attribute("aria-modal", ctx._config.ariaModal)("role", ctx._config.role)("aria-labelledby", ctx._config.ariaLabel ? null : ctx._ariaLabelledByQueue[0])("aria-label", ctx._config.ariaLabel)("aria-describedby", ctx._config.ariaDescribedBy || null);
          \u0275\u0275classProp("_mat-animation-noopable", !ctx._animationsEnabled)("mat-mdc-dialog-container-with-actions", ctx._actionSectionCount > 0);
        }
      },
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275StandaloneFeature],
      decls: 3,
      vars: 0,
      consts: [[1, "mat-mdc-dialog-inner-container", "mdc-dialog__container"], [1, "mat-mdc-dialog-surface", "mdc-dialog__surface"], ["cdkPortalOutlet", ""]],
      template: function MatDialogContainer_Template(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
          \u0275\u0275template(2, MatDialogContainer_ng_template_2_Template, 0, 0, "ng-template", 2);
          \u0275\u0275elementEnd()();
        }
      },
      dependencies: [CdkPortalOutlet],
      styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}'],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContainer, [{
    type: Component,
    args: [{
      selector: "mat-dialog-container",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: true,
      imports: [CdkPortalOutlet],
      host: {
        "class": "mat-mdc-dialog-container mdc-dialog",
        "tabindex": "-1",
        "[attr.aria-modal]": "_config.ariaModal",
        "[id]": "_config.id",
        "[attr.role]": "_config.role",
        "[attr.aria-labelledby]": "_config.ariaLabel ? null : _ariaLabelledByQueue[0]",
        "[attr.aria-label]": "_config.ariaLabel",
        "[attr.aria-describedby]": "_config.ariaDescribedBy || null",
        "[class._mat-animation-noopable]": "!_animationsEnabled",
        "[class.mat-mdc-dialog-container-with-actions]": "_actionSectionCount > 0"
      },
      template: '<div class="mat-mdc-dialog-inner-container mdc-dialog__container">\n  <div class="mat-mdc-dialog-surface mdc-dialog__surface">\n    <ng-template cdkPortalOutlet />\n  </div>\n</div>\n',
      styles: ['.mat-mdc-dialog-container{width:100%;height:100%;display:block;box-sizing:border-box;max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;outline:0}.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-max-width, 80vw);min-width:var(--mat-dialog-container-min-width, 0)}@media(max-width: 599px){.cdk-overlay-pane.mat-mdc-dialog-panel{max-width:var(--mat-dialog-container-small-max-width, 80vw)}}.mat-mdc-dialog-inner-container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;opacity:0;transition:opacity linear var(--mat-dialog-transition-duration, 0ms);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mdc-dialog--closing .mat-mdc-dialog-inner-container{transition:opacity 75ms linear;transform:none}.mdc-dialog--open .mat-mdc-dialog-inner-container{opacity:1}._mat-animation-noopable .mat-mdc-dialog-inner-container{transition:none}.mat-mdc-dialog-surface{display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;width:100%;height:100%;position:relative;overflow-y:auto;outline:0;transform:scale(0.8);transition:transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit;box-shadow:var(--mat-dialog-container-elevation-shadow, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12));border-radius:var(--mdc-dialog-container-shape, var(--mat-app-corner-extra-large, 4px));background-color:var(--mdc-dialog-container-color, var(--mat-app-surface, white))}[dir=rtl] .mat-mdc-dialog-surface{text-align:right}.mdc-dialog--open .mat-mdc-dialog-surface,.mdc-dialog--closing .mat-mdc-dialog-surface{transform:none}._mat-animation-noopable .mat-mdc-dialog-surface{transition:none}.mat-mdc-dialog-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}.mat-mdc-dialog-title{display:block;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:var(--mat-dialog-headline-padding, 0 24px 9px)}.mat-mdc-dialog-title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mat-mdc-dialog-title{text-align:right}.mat-mdc-dialog-container .mat-mdc-dialog-title{color:var(--mdc-dialog-subhead-color, var(--mat-app-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mdc-dialog-subhead-font, var(--mat-app-headline-small-font, inherit));line-height:var(--mdc-dialog-subhead-line-height, var(--mat-app-headline-small-line-height, 1.5rem));font-size:var(--mdc-dialog-subhead-size, var(--mat-app-headline-small-size, 1rem));font-weight:var(--mdc-dialog-subhead-weight, var(--mat-app-headline-small-weight, 400));letter-spacing:var(--mdc-dialog-subhead-tracking, var(--mat-app-headline-small-tracking, 0.03125em))}.mat-mdc-dialog-content{display:block;flex-grow:1;box-sizing:border-box;margin:0;overflow:auto;max-height:65vh}.mat-mdc-dialog-content>:first-child{margin-top:0}.mat-mdc-dialog-content>:last-child{margin-bottom:0}.mat-mdc-dialog-container .mat-mdc-dialog-content{color:var(--mdc-dialog-supporting-text-color, var(--mat-app-on-surface-variant, rgba(0, 0, 0, 0.6)));font-family:var(--mdc-dialog-supporting-text-font, var(--mat-app-body-medium-font, inherit));line-height:var(--mdc-dialog-supporting-text-line-height, var(--mat-app-body-medium-line-height, 1.5rem));font-size:var(--mdc-dialog-supporting-text-size, var(--mat-app-body-medium-size, 1rem));font-weight:var(--mdc-dialog-supporting-text-weight, var(--mat-app-body-medium-weight, 400));letter-spacing:var(--mdc-dialog-supporting-text-tracking, var(--mat-app-body-medium-tracking, 0.03125em))}.mat-mdc-dialog-container .mat-mdc-dialog-content{padding:var(--mat-dialog-content-padding, 20px 24px)}.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content{padding:var(--mat-dialog-with-actions-content-padding, 20px 24px)}.mat-mdc-dialog-container .mat-mdc-dialog-title+.mat-mdc-dialog-content{padding-top:0}.mat-mdc-dialog-actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0);padding:var(--mat-dialog-actions-padding, 8px);justify-content:var(--mat-dialog-actions-alignment, start)}.cdk-high-contrast-active .mat-mdc-dialog-actions{border-top-color:CanvasText}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start,.mat-mdc-dialog-actions[align=start]{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}.mat-mdc-dialog-component-host{display:contents}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: MatDialogConfig
  }, {
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: OverlayRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }, {
    type: FocusMonitor
  }], null);
})();
var TRANSITION_DURATION_PROPERTY = "--mat-dialog-transition-duration";
function parseCssTime(time) {
  if (time == null) {
    return null;
  }
  if (typeof time === "number") {
    return time;
  }
  if (time.endsWith("ms")) {
    return coerceNumberProperty(time.substring(0, time.length - 2));
  }
  if (time.endsWith("s")) {
    return coerceNumberProperty(time.substring(0, time.length - 1)) * 1e3;
  }
  if (time === "0") {
    return 0;
  }
  return null;
}
var MatDialogState;
(function(MatDialogState2) {
  MatDialogState2[MatDialogState2["OPEN"] = 0] = "OPEN";
  MatDialogState2[MatDialogState2["CLOSING"] = 1] = "CLOSING";
  MatDialogState2[MatDialogState2["CLOSED"] = 2] = "CLOSED";
})(MatDialogState || (MatDialogState = {}));
var MatDialogRef = class {
  constructor(_ref, config, _containerInstance) {
    this._ref = _ref;
    this._containerInstance = _containerInstance;
    this._afterOpened = new Subject();
    this._beforeClosed = new Subject();
    this._state = MatDialogState.OPEN;
    this.disableClose = config.disableClose;
    this.id = _ref.id;
    _ref.addPanelClass("mat-mdc-dialog-panel");
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "opened"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    _containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closed"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._finishDialogClose();
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._beforeClosed.next(this._result);
      this._beforeClosed.complete();
      this._finishDialogClose();
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event)))).subscribe((event) => {
      if (!this.disableClose) {
        event.preventDefault();
        _closeDialogVia(this, event.type === "keydown" ? "keyboard" : "mouse");
      }
    });
  }
  /**
   * Close the dialog.
   * @param dialogResult Optional result to return to the dialog opener.
   */
  close(dialogResult) {
    this._result = dialogResult;
    this._containerInstance._animationStateChanged.pipe(filter((event) => event.state === "closing"), take(1)).subscribe((event) => {
      this._beforeClosed.next(dialogResult);
      this._beforeClosed.complete();
      this._ref.overlayRef.detachBackdrop();
      this._closeFallbackTimeout = setTimeout(() => this._finishDialogClose(), event.totalTime + 100);
    });
    this._state = MatDialogState.CLOSING;
    this._containerInstance._startExitAnimation();
  }
  /**
   * Gets an observable that is notified when the dialog is finished opening.
   */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that is notified when the dialog is finished closing.
   */
  afterClosed() {
    return this._ref.closed;
  }
  /**
   * Gets an observable that is notified when the dialog has started closing.
   */
  beforeClosed() {
    return this._beforeClosed;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
  /**
   * Updates the dialog's position.
   * @param position New dialog position.
   */
  updatePosition(position) {
    let strategy = this._ref.config.positionStrategy;
    if (position && (position.left || position.right)) {
      position.left ? strategy.left(position.left) : strategy.right(position.right);
    } else {
      strategy.centerHorizontally();
    }
    if (position && (position.top || position.bottom)) {
      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
    } else {
      strategy.centerVertically();
    }
    this._ref.updatePosition();
    return this;
  }
  /**
   * Updates the dialog's width and height.
   * @param width New width of the dialog.
   * @param height New height of the dialog.
   */
  updateSize(width = "", height = "") {
    this._ref.updateSize(width, height);
    return this;
  }
  /** Add a CSS class or an array of classes to the overlay pane. */
  addPanelClass(classes) {
    this._ref.addPanelClass(classes);
    return this;
  }
  /** Remove a CSS class or an array of classes from the overlay pane. */
  removePanelClass(classes) {
    this._ref.removePanelClass(classes);
    return this;
  }
  /** Gets the current state of the dialog's lifecycle. */
  getState() {
    return this._state;
  }
  /**
   * Finishes the dialog close by updating the state of the dialog
   * and disposing the overlay.
   */
  _finishDialogClose() {
    this._state = MatDialogState.CLOSED;
    this._ref.close(this._result, {
      focusOrigin: this._closeInteractionType
    });
    this.componentInstance = null;
  }
};
function _closeDialogVia(ref, interactionType, result) {
  ref._closeInteractionType = interactionType;
  return ref.close(result);
}
var MAT_DIALOG_DATA = new InjectionToken("MatMdcDialogData");
var MAT_DIALOG_DEFAULT_OPTIONS = new InjectionToken("mat-mdc-dialog-default-options");
var MAT_DIALOG_SCROLL_STRATEGY = new InjectionToken("mat-mdc-dialog-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const overlay = inject(Overlay);
    return () => overlay.scrollStrategies.block();
  }
});
var uniqueId2 = 0;
var MatDialog = class _MatDialog {
  /** Keeps track of the currently-open dialogs. */
  get openDialogs() {
    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;
  }
  /** Stream that emits when a dialog has been opened. */
  get afterOpened() {
    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;
  }
  _getAfterAllClosed() {
    const parent = this._parentDialog;
    return parent ? parent._getAfterAllClosed() : this._afterAllClosedAtThisLevel;
  }
  constructor(_overlay, injector, location, _defaultOptions, _scrollStrategy, _parentDialog, _overlayContainer, _animationMode) {
    this._overlay = _overlay;
    this._defaultOptions = _defaultOptions;
    this._scrollStrategy = _scrollStrategy;
    this._parentDialog = _parentDialog;
    this._openDialogsAtThisLevel = [];
    this._afterAllClosedAtThisLevel = new Subject();
    this._afterOpenedAtThisLevel = new Subject();
    this.dialogConfigClass = MatDialogConfig;
    this.afterAllClosed = defer(() => this.openDialogs.length ? this._getAfterAllClosed() : this._getAfterAllClosed().pipe(startWith(void 0)));
    this._dialog = injector.get(Dialog);
    this._dialogRefConstructor = MatDialogRef;
    this._dialogContainerType = MatDialogContainer;
    this._dialogDataToken = MAT_DIALOG_DATA;
  }
  open(componentOrTemplateRef, config) {
    let dialogRef;
    config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatDialogConfig()), config);
    config.id = config.id || `mat-mdc-dialog-${uniqueId2++}`;
    config.scrollStrategy = config.scrollStrategy || this._scrollStrategy();
    const cdkRef = this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, config), {
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on destroy, because this service cleans up its open dialogs as well.
      // We want to do the cleanup here, rather than the CDK service, because the CDK destroys
      // the dialogs immediately whereas we want it to wait for the animations to finish.
      closeOnDestroy: false,
      // Disable closing on detachments so that we can sync up the animation.
      // The Material dialog ref handles this manually.
      closeOnOverlayDetachments: false,
      container: {
        type: this._dialogContainerType,
        providers: () => [
          // Provide our config as the CDK config as well since it has the same interface as the
          // CDK one, but it contains the actual values passed in by the user for things like
          // `disableClose` which we disable for the CDK dialog since we handle it ourselves.
          {
            provide: this.dialogConfigClass,
            useValue: config
          },
          {
            provide: DialogConfig,
            useValue: config
          }
        ]
      },
      templateContext: () => ({
        dialogRef
      }),
      providers: (ref, cdkConfig, dialogContainer) => {
        dialogRef = new this._dialogRefConstructor(ref, config, dialogContainer);
        dialogRef.updatePosition(config?.position);
        return [{
          provide: this._dialogContainerType,
          useValue: dialogContainer
        }, {
          provide: this._dialogDataToken,
          useValue: cdkConfig.data
        }, {
          provide: this._dialogRefConstructor,
          useValue: dialogRef
        }];
      }
    }));
    dialogRef.componentRef = cdkRef.componentRef;
    dialogRef.componentInstance = cdkRef.componentInstance;
    this.openDialogs.push(dialogRef);
    this.afterOpened.next(dialogRef);
    dialogRef.afterClosed().subscribe(() => {
      const index = this.openDialogs.indexOf(dialogRef);
      if (index > -1) {
        this.openDialogs.splice(index, 1);
        if (!this.openDialogs.length) {
          this._getAfterAllClosed().next();
        }
      }
    });
    return dialogRef;
  }
  /**
   * Closes all of the currently-open dialogs.
   */
  closeAll() {
    this._closeDialogs(this.openDialogs);
  }
  /**
   * Finds an open dialog by its id.
   * @param id ID to use when looking up the dialog.
   */
  getDialogById(id) {
    return this.openDialogs.find((dialog) => dialog.id === id);
  }
  ngOnDestroy() {
    this._closeDialogs(this._openDialogsAtThisLevel);
    this._afterAllClosedAtThisLevel.complete();
    this._afterOpenedAtThisLevel.complete();
  }
  _closeDialogs(dialogs) {
    let i = dialogs.length;
    while (i--) {
      dialogs[i].close();
    }
  }
  static {
    this.\u0275fac = function MatDialog_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialog)(\u0275\u0275inject(Overlay), \u0275\u0275inject(Injector), \u0275\u0275inject(Location, 8), \u0275\u0275inject(MAT_DIALOG_DEFAULT_OPTIONS, 8), \u0275\u0275inject(MAT_DIALOG_SCROLL_STRATEGY), \u0275\u0275inject(_MatDialog, 12), \u0275\u0275inject(OverlayContainer), \u0275\u0275inject(ANIMATION_MODULE_TYPE, 8));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _MatDialog,
      factory: _MatDialog.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialog, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Overlay
  }, {
    type: Injector
  }, {
    type: Location,
    decorators: [{
      type: Optional
    }]
  }, {
    type: MatDialogConfig,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DIALOG_DEFAULT_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_DIALOG_SCROLL_STRATEGY]
    }]
  }, {
    type: MatDialog,
    decorators: [{
      type: Optional
    }, {
      type: SkipSelf
    }]
  }, {
    type: OverlayContainer
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], null);
})();
var dialogElementUid = 0;
var MatDialogClose = class _MatDialogClose {
  constructor(dialogRef, _elementRef, _dialog) {
    this.dialogRef = dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
    this.type = "button";
  }
  ngOnInit() {
    if (!this.dialogRef) {
      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
  }
  ngOnChanges(changes) {
    const proxiedChange = changes["_matDialogClose"] || changes["_matDialogCloseResult"];
    if (proxiedChange) {
      this.dialogResult = proxiedChange.currentValue;
    }
  }
  _onButtonClick(event) {
    _closeDialogVia(this.dialogRef, event.screenX === 0 && event.screenY === 0 ? "keyboard" : "mouse", this.dialogResult);
  }
  static {
    this.\u0275fac = function MatDialogClose_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogClose)(\u0275\u0275directiveInject(MatDialogRef, 8), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogClose,
      selectors: [["", "mat-dialog-close", ""], ["", "matDialogClose", ""]],
      hostVars: 2,
      hostBindings: function MatDialogClose_HostBindings(rf, ctx) {
        if (rf & 1) {
          \u0275\u0275listener("click", function MatDialogClose_click_HostBindingHandler($event) {
            return ctx._onButtonClick($event);
          });
        }
        if (rf & 2) {
          \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("type", ctx.type);
        }
      },
      inputs: {
        ariaLabel: [0, "aria-label", "ariaLabel"],
        type: "type",
        dialogResult: [0, "mat-dialog-close", "dialogResult"],
        _matDialogClose: [0, "matDialogClose", "_matDialogClose"]
      },
      exportAs: ["matDialogClose"],
      standalone: true,
      features: [\u0275\u0275NgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogClose, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-close], [matDialogClose]",
      exportAs: "matDialogClose",
      standalone: true,
      host: {
        "(click)": "_onButtonClick($event)",
        "[attr.aria-label]": "ariaLabel || null",
        "[attr.type]": "type"
      }
    }]
  }], () => [{
    type: MatDialogRef,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ElementRef
  }, {
    type: MatDialog
  }], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    type: [{
      type: Input
    }],
    dialogResult: [{
      type: Input,
      args: ["mat-dialog-close"]
    }],
    _matDialogClose: [{
      type: Input,
      args: ["matDialogClose"]
    }]
  });
})();
var MatDialogLayoutSection = class _MatDialogLayoutSection {
  constructor(_dialogRef, _elementRef, _dialog) {
    this._dialogRef = _dialogRef;
    this._elementRef = _elementRef;
    this._dialog = _dialog;
  }
  ngOnInit() {
    if (!this._dialogRef) {
      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs);
    }
    if (this._dialogRef) {
      Promise.resolve().then(() => {
        this._onAdd();
      });
    }
  }
  ngOnDestroy() {
    const instance = this._dialogRef?._containerInstance;
    if (instance) {
      Promise.resolve().then(() => {
        this._onRemove();
      });
    }
  }
  static {
    this.\u0275fac = function MatDialogLayoutSection_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogLayoutSection)(\u0275\u0275directiveInject(MatDialogRef, 8), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatDialog));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogLayoutSection,
      standalone: true
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogLayoutSection, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], () => [{
    type: MatDialogRef,
    decorators: [{
      type: Optional
    }]
  }, {
    type: ElementRef
  }, {
    type: MatDialog
  }], null);
})();
var MatDialogTitle = class _MatDialogTitle extends MatDialogLayoutSection {
  constructor() {
    super(...arguments);
    this.id = `mat-mdc-dialog-title-${dialogElementUid++}`;
  }
  _onAdd() {
    this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id);
  }
  _onRemove() {
    this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatDialogTitle_BaseFactory;
      return function MatDialogTitle_Factory(__ngFactoryType__) {
        return (\u0275MatDialogTitle_BaseFactory || (\u0275MatDialogTitle_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogTitle)))(__ngFactoryType__ || _MatDialogTitle);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogTitle,
      selectors: [["", "mat-dialog-title", ""], ["", "matDialogTitle", ""]],
      hostAttrs: [1, "mat-mdc-dialog-title", "mdc-dialog__title"],
      hostVars: 1,
      hostBindings: function MatDialogTitle_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275hostProperty("id", ctx.id);
        }
      },
      inputs: {
        id: "id"
      },
      exportAs: ["matDialogTitle"],
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogTitle, [{
    type: Directive,
    args: [{
      selector: "[mat-dialog-title], [matDialogTitle]",
      exportAs: "matDialogTitle",
      standalone: true,
      host: {
        "class": "mat-mdc-dialog-title mdc-dialog__title",
        "[id]": "id"
      }
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatDialogContent = class _MatDialogContent {
  static {
    this.\u0275fac = function MatDialogContent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogContent)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogContent,
      selectors: [["", "mat-dialog-content", ""], ["mat-dialog-content"], ["", "matDialogContent", ""]],
      hostAttrs: [1, "mat-mdc-dialog-content", "mdc-dialog__content"],
      standalone: true,
      features: [\u0275\u0275HostDirectivesFeature([CdkScrollable])]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogContent, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-content], mat-dialog-content, [matDialogContent]`,
      host: {
        "class": "mat-mdc-dialog-content mdc-dialog__content"
      },
      standalone: true,
      hostDirectives: [CdkScrollable]
    }]
  }], null, null);
})();
var MatDialogActions = class _MatDialogActions extends MatDialogLayoutSection {
  _onAdd() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(1);
  }
  _onRemove() {
    this._dialogRef._containerInstance?._updateActionSectionCount?.(-1);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275MatDialogActions_BaseFactory;
      return function MatDialogActions_Factory(__ngFactoryType__) {
        return (\u0275MatDialogActions_BaseFactory || (\u0275MatDialogActions_BaseFactory = \u0275\u0275getInheritedFactory(_MatDialogActions)))(__ngFactoryType__ || _MatDialogActions);
      };
    })();
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
      type: _MatDialogActions,
      selectors: [["", "mat-dialog-actions", ""], ["mat-dialog-actions"], ["", "matDialogActions", ""]],
      hostAttrs: [1, "mat-mdc-dialog-actions", "mdc-dialog__actions"],
      hostVars: 6,
      hostBindings: function MatDialogActions_HostBindings(rf, ctx) {
        if (rf & 2) {
          \u0275\u0275classProp("mat-mdc-dialog-actions-align-start", ctx.align === "start")("mat-mdc-dialog-actions-align-center", ctx.align === "center")("mat-mdc-dialog-actions-align-end", ctx.align === "end");
        }
      },
      inputs: {
        align: "align"
      },
      standalone: true,
      features: [\u0275\u0275InheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogActions, [{
    type: Directive,
    args: [{
      selector: `[mat-dialog-actions], mat-dialog-actions, [matDialogActions]`,
      standalone: true,
      host: {
        "class": "mat-mdc-dialog-actions mdc-dialog__actions",
        "[class.mat-mdc-dialog-actions-align-start]": 'align === "start"',
        "[class.mat-mdc-dialog-actions-align-center]": 'align === "center"',
        "[class.mat-mdc-dialog-actions-align-end]": 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: Input
    }]
  });
})();
function getClosestDialog(element, openDialogs) {
  let parent = element.nativeElement.parentElement;
  while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
    parent = parent.parentElement;
  }
  return parent ? openDialogs.find((dialog) => dialog.id === parent.id) : null;
}
var DIRECTIVES = [MatDialogContainer, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent];
var MatDialogModule = class _MatDialogModule {
  static {
    this.\u0275fac = function MatDialogModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MatDialogModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _MatDialogModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: [MatDialog],
      imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, MatCommonModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatDialogModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, OverlayModule, PortalModule, MatCommonModule, ...DIRECTIVES],
      exports: [MatCommonModule, ...DIRECTIVES],
      providers: [MatDialog]
    }]
  }], null, null);
})();
var _defaultParams = {
  params: {
    enterAnimationDuration: "150ms",
    exitAnimationDuration: "75ms"
  }
};
var matDialogAnimations = {
  /** Animation that is applied on the dialog container by default. */
  dialogContainer: trigger("dialogContainer", [
    // Note: The `enter` animation transitions to `transform: none`, because for some reason
    // specifying the transform explicitly, causes IE both to blur the dialog content and
    // decimate the animation performance. Leaving it as `none` solves both issues.
    state("void, exit", style({
      opacity: 0,
      transform: "scale(0.7)"
    })),
    state("enter", style({
      transform: "none"
    })),
    transition("* => enter", group([animate("{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)", style({
      transform: "none",
      opacity: 1
    })), query("@*", animateChild(), {
      optional: true
    })]), _defaultParams),
    transition("* => void, * => exit", group([animate("{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)", style({
      opacity: 0
    })), query("@*", animateChild(), {
      optional: true
    })]), _defaultParams)
  ])
};

// src/app/shared/dialogs.ts
var _forTrack0 = ($index, $item) => $item.id;
function RecordDialog_Conditional_0_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2, "Consumable status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "b")(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const x_r1 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("tag ", ctx_r1.cc(x_r1.consStatus), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r1.consStatus);
  }
}
function RecordDialog_Conditional_0_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2, "Block reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const x_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(x_r1.blockReason);
  }
}
function RecordDialog_Conditional_0_Conditional_105_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2, "Remarks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const x_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(x_r1.remarks);
  }
}
function RecordDialog_Conditional_0_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "flag-tags", 13);
    \u0275\u0275text(1, " \xA0 Priority ");
    \u0275\u0275element(2, "prio-tag", 14);
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const x_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("flags", x_r1.flags);
    \u0275\u0275advance(2);
    \u0275\u0275property("p", x_r1.prio);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("score ", x_r1.score, "");
  }
}
function RecordDialog_Conditional_0_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1, "No exception");
    \u0275\u0275elementEnd();
  }
}
function RecordDialog_Conditional_0_Conditional_113_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 15);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "dt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r3.plan);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", a_r3.functionName, "", a_r3.person ? " \u2013 " + a_r3.person : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, a_r3.targetDate));
    \u0275\u0275advance(3);
    \u0275\u0275classMapInterpolate1("tag ", ctx_r1.sc(a_r3.stage), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r3.stage);
  }
}
function RecordDialog_Conditional_0_Conditional_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 9)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Owner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Target");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Stage");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "tbody");
    \u0275\u0275repeaterCreate(14, RecordDialog_Conditional_0_Conditional_113_For_15_Template, 13, 11, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r1.acts());
  }
}
function RecordDialog_Conditional_0_Conditional_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1, "No actions raised for this batch yet.");
    \u0275\u0275elementEnd();
  }
}
function RecordDialog_Conditional_0_Conditional_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function RecordDialog_Conditional_0_Conditional_116_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.raise());
    });
    \u0275\u0275text(1, "Raise action");
    \u0275\u0275elementEnd();
  }
}
function RecordDialog_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "div")(3, "div", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275text(10, "\xD7");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 6)(12, "div")(13, "span");
    \u0275\u0275text(14, "Unrestricted qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "b");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "qty");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "span");
    \u0275\u0275text(20, "Quality qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "b");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "qty");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "span");
    \u0275\u0275text(26, "Blocked qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "b");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "qty");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "span");
    \u0275\u0275text(32, "Total qty");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "b");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "qty");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div")(37, "span");
    \u0275\u0275text(38, "Unit cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "b");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "inr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div")(43, "span");
    \u0275\u0275text(44, "Total value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "b");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "inr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div")(49, "span");
    \u0275\u0275text(50, "Blocked value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "b");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "inr");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div")(55, "span");
    \u0275\u0275text(56, "Stock status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "b");
    \u0275\u0275element(58, "status-tags", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div")(60, "span");
    \u0275\u0275text(61, "GR posting date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "b");
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "dt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div")(66, "span");
    \u0275\u0275text(67, "Inventory age");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "b");
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div")(71, "span");
    \u0275\u0275text(72, "Date of manufacture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "b");
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "dt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div")(77, "span");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "b");
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "dt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div")(83, "span");
    \u0275\u0275text(84, "Remaining shelf life");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "b");
    \u0275\u0275text(86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div")(88, "span");
    \u0275\u0275text(89, "Shelf life used");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "b");
    \u0275\u0275text(91);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div")(93, "span");
    \u0275\u0275text(94, "Last posting (consumption)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "b");
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "dt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div")(99, "span");
    \u0275\u0275text(100, "Movement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "b");
    \u0275\u0275text(102);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(103, RecordDialog_Conditional_0_Conditional_103_Template, 6, 4, "div")(104, RecordDialog_Conditional_0_Conditional_104_Template, 5, 1, "div")(105, RecordDialog_Conditional_0_Conditional_105_Template, 5, 1, "div");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "h4");
    \u0275\u0275text(107, "Identification & prioritization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div");
    \u0275\u0275template(109, RecordDialog_Conditional_0_Conditional_109_Template, 5, 3)(110, RecordDialog_Conditional_0_Conditional_110_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "h4");
    \u0275\u0275text(112);
    \u0275\u0275elementEnd();
    \u0275\u0275template(113, RecordDialog_Conditional_0_Conditional_113_Template, 16, 0, "table", 9)(114, RecordDialog_Conditional_0_Conditional_114_Template, 2, 0, "div", 4);
    \u0275\u0275elementStart(115, "div", 10);
    \u0275\u0275template(116, RecordDialog_Conditional_0_Conditional_116_Template, 2, 0, "button", 11);
    \u0275\u0275elementStart(117, "button", 12);
    \u0275\u0275text(118, "Close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const x_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3("", x_r1.matType, "", x_r1.dept ? " \xB7 " + x_r1.dept : "", " \xB7 ", x_r1.bu, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(x_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4("", x_r1.code, " \xB7 Batch ", x_r1.batch || "\u2013", " \xB7 ", x_r1.plant, " \xB7 ", x_r1.storageLoc || "no storage location", "");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(17, 39, x_r1.unrestrictedQty), " ", x_r1.uom, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(23, 41, x_r1.qualityQty), " ", x_r1.uom, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(29, 43, x_r1.blockedQty), " ", x_r1.uom, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(35, 45, x_r1.qty), " ", x_r1.uom, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 47, x_r1.unitCost));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 49, x_r1.value));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 51, x_r1.bVal));
    \u0275\u0275advance(6);
    \u0275\u0275property("x", x_r1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 53, x_r1.receiptDate));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(x_r1.age === null ? "\u2013" : x_r1.age + " days (" + x_r1.bucket + ")");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 55, x_r1.mfgDate));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("SLED/BBD (", x_r1.dateType, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 57, x_r1.expiryDate));
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("color", x_r1.rsl !== null && x_r1.rsl < 0 ? "var(--red)" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(x_r1.rsl === null ? "\u2013" : x_r1.rsl < 0 ? "Expired " + -x_r1.rsl + " days ago" : x_r1.rsl + " days");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(x_r1.slUsed === null ? "\u2013" : x_r1.slUsed + "% of " + x_r1.slTotal + " days");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 59, x_r1.lastIssueDate));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", x_r1.movement, "", x_r1.idle !== null ? " \xB7 " + x_r1.idle + " days" : "", "");
    \u0275\u0275advance();
    \u0275\u0275conditional(x_r1.consStatus ? 103 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(x_r1.blockReason ? 104 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(x_r1.remarks ? 105 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(x_r1.flags.length ? 109 : 110);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Actions (", ctx_r1.acts().length, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.acts().length ? 113 : 114);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.canRaise() ? 116 : -1);
  }
}
function RecordDialog_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275text(1, "Loading\u2026");
    \u0275\u0275elementEnd();
  }
}
var _forTrack1 = ($index, $item) => $item.name;
function ActionFormDialog_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "inr");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4("", ctx_r0.data.item.code, " \xB7 Batch ", ctx_r0.data.item.batch || "\u2013", " \xB7 ", ctx_r0.data.item.plant, " \xB7 ", \u0275\u0275pipeBind1(2, 4, ctx_r0.data.item.value), "");
  }
}
function ActionFormDialog_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Subject is required");
    \u0275\u0275elementEnd();
  }
}
function ActionFormDialog_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label");
    \u0275\u0275text(2, "Subject (material / area) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "input", 26);
    \u0275\u0275template(4, ActionFormDialog_Conditional_11_Conditional_4_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.bad("name") ? 4 : -1);
  }
}
function ActionFormDialog_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275property("value", t_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r2);
  }
}
function ActionFormDialog_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    \u0275\u0275property("value", f_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r3);
  }
}
function ActionFormDialog_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Function is required");
    \u0275\u0275elementEnd();
  }
}
function ActionFormDialog_For_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    \u0275\u0275property("value", p_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r4.functionName);
  }
}
function ActionFormDialog_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Action plan is required (max 1000 characters)");
    \u0275\u0275elementEnd();
  }
}
function ActionFormDialog_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "Target date cannot be in the past");
    \u0275\u0275elementEnd();
  }
}
function ActionFormDialog_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function CloseDialog_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(o_r1);
  }
}
function CloseDialog_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "Closure remarks are required");
    \u0275\u0275elementEnd();
  }
}
function CloseDialog_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
var RecordDialog = class _RecordDialog {
  api = inject(ApiService);
  dlg = inject(MatDialog);
  ref = inject(MatDialogRef);
  auth = inject(AuthService);
  data = inject(MAT_DIALOG_DATA);
  x = signal(null);
  acts = signal([]);
  cc = consClass;
  sc = stageClass;
  constructor() {
    this.api.item(this.data.id).subscribe((x) => {
      this.x.set(x);
      this.api.actions().subscribe((a) => this.acts.set(a.filter((z) => z.itemKey === x.itemKey)));
    });
  }
  canRaise() {
    return this.auth.can("action.create") && !!this.x()?.prio && !this.acts().some((a) => a.stage !== "Closed");
  }
  raise() {
    const x = this.x();
    this.ref.close();
    openActionForm(this.dlg, { item: x });
  }
  static \u0275fac = function RecordDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecordDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecordDialog, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["mat-dialog-content", ""], [1, "loading"], [1, "mhead"], [1, "eyebrow"], [1, "hint"], ["mat-dialog-close", "", 1, "x"], [1, "kv"], [3, "x"], [1, "tag", "ok"], [1, "plain"], [1, "mfoot"], [1, "btn"], ["mat-dialog-close", "", 1, "btn", "secondary"], [3, "flags"], [3, "p"], [1, "wrap"], [1, "btn", 3, "click"]], template: function RecordDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, RecordDialog_Conditional_0_Template, 119, 61, "div", 0)(1, RecordDialog_Conditional_1_Template, 2, 0, "div", 1);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.x()) ? 0 : 1, tmp_0_0);
    }
  }, dependencies: [MatDialogModule, MatDialogClose, MatDialogContent, InrPipe, QtyPipe, DatePipe2, FlagTags, StatusTags, PrioTag], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecordDialog, { className: "RecordDialog", filePath: "src\\app\\shared\\dialogs.ts", lineNumber: 48 });
})();
var ActionFormDialog = class _ActionFormDialog {
  api = inject(ApiService);
  fb = inject(FormBuilder);
  toast = inject(ToastService);
  ref = inject(MatDialogRef);
  scope = inject(ScopeService);
  data = inject(MAT_DIALOG_DATA);
  today = todayISO();
  busy = signal(false);
  error = signal("");
  fns = () => this.scope.masters()?.functions ?? [];
  types = () => this.scope.masters()?.actionTypes ?? [];
  persons = () => this.scope.masters()?.persons ?? [];
  form = this.fb.nonNullable.group({
    name: [""],
    exception: [""],
    actionType: ["", Validators.required],
    priority: ["P3"],
    functionName: ["", Validators.required],
    person: [""],
    plan: ["", [Validators.required, Validators.maxLength(1e3)]],
    targetDate: ["", (c) => c.value && c.value < todayISO() && !this.data.action ? { past: true } : null],
    stage: ["Prioritized"],
    remarks: [""]
  });
  constructor() {
    const a = this.data.action, x = this.data.item, t = this.scope.thresholds();
    if (a)
      this.form.patchValue({
        name: a.name || "",
        exception: a.exception || "",
        actionType: a.actionType,
        priority: a.priority,
        functionName: a.functionName,
        person: a.person || "",
        plan: a.plan,
        targetDate: a.targetDate || "",
        stage: a.stage === "Closed" ? "Owned" : a.stage,
        remarks: a.remarks || ""
      });
    else
      this.form.patchValue({
        exception: x ? realFlags(x.flags).map((f) => flagLabel(f, t)).join(", ") : "",
        actionType: this.data.suggestedType || "Other approved corrective action",
        priority: x?.prio || "P3",
        functionName: this.data.suggestedFunction || "Stores",
        plan: this.data.suggestedPlan || "",
        targetDate: addDays(x?.prio === "P1" ? 7 : x?.prio === "P2" ? 15 : 30)
      });
    if (!x && (!a || !a.itemKey))
      this.form.controls.name.addValidators(Validators.required);
  }
  bad(k) {
    const c = this.form.controls[k];
    return c.invalid && (c.touched || c.dirty);
  }
  save() {
    this.form.markAllAsTouched();
    if (this.form.invalid)
      return;
    const v = this.form.getRawValue();
    const body = __spreadProps(__spreadValues({}, v), { inventoryId: this.data.action ? null : this.data.item?.id ?? null, targetDate: v.targetDate || null });
    this.busy.set(true);
    this.error.set("");
    this.api.saveAction(this.data.action?.id ?? null, body).subscribe({
      next: (a) => {
        this.toast.show(this.data.action ? `Action ${a.id} updated` : `Action ${a.id} created`);
        this.scope.refresh();
        this.ref.close(a);
      },
      error: (e) => {
        this.busy.set(false);
        this.error.set(errMsg(e));
      }
    });
  }
  static \u0275fac = function ActionFormDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ActionFormDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActionFormDialog, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 81, vars: 12, consts: [["mat-dialog-content", ""], [1, "mhead"], [1, "eyebrow"], [1, "hint"], ["mat-dialog-close", "", 1, "x"], [1, "entry", 3, "ngSubmit", "formGroup"], [1, "fgroup", "full"], ["type", "text", "formControlName", "exception"], [1, "fgroup"], ["formControlName", "actionType"], [3, "value"], ["formControlName", "priority"], ["formControlName", "functionName"], [1, "err"], ["type", "text", "formControlName", "person", "list", "personDL", "placeholder", "Name"], ["id", "personDL"], ["formControlName", "plan"], ["type", "date", "formControlName", "targetDate", 3, "min"], ["formControlName", "stage"], [1, "fgroup", 2, "grid-column", "span 2"], ["type", "text", "formControlName", "remarks"], [1, "full", "note"], [1, "full", "autherr"], [1, "actions"], ["type", "submit", 1, "btn", 3, "disabled"], ["type", "button", "mat-dialog-close", "", 1, "btn", "secondary"], ["type", "text", "formControlName", "name", "placeholder", "e.g. Close 5S observations \u2013 Bay 3"]], template: function ActionFormDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h3");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, ActionFormDialog_Conditional_7_Template, 3, 6, "div", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275text(9, "\xD7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "form", 5);
      \u0275\u0275listener("ngSubmit", function ActionFormDialog_Template_form_ngSubmit_10_listener() {
        return ctx.save();
      });
      \u0275\u0275template(11, ActionFormDialog_Conditional_11_Template, 5, 1, "div", 6);
      \u0275\u0275elementStart(12, "div", 6)(13, "label");
      \u0275\u0275text(14, "Exception");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 8)(17, "label");
      \u0275\u0275text(18, "Action type *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "select", 9);
      \u0275\u0275repeaterCreate(20, ActionFormDialog_For_21_Template, 2, 2, "option", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 8)(23, "label");
      \u0275\u0275text(24, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "select", 11)(26, "option");
      \u0275\u0275text(27, "P1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "option");
      \u0275\u0275text(29, "P2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "option");
      \u0275\u0275text(31, "P3");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 8)(33, "label");
      \u0275\u0275text(34, "Responsible function *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "select", 12);
      \u0275\u0275repeaterCreate(36, ActionFormDialog_For_37_Template, 2, 2, "option", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, ActionFormDialog_Conditional_38_Template, 2, 0, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 8)(40, "label");
      \u0275\u0275text(41, "Responsible person");
      \u0275\u0275elementEnd();
      \u0275\u0275element(42, "input", 14);
      \u0275\u0275elementStart(43, "datalist", 15);
      \u0275\u0275repeaterCreate(44, ActionFormDialog_For_45_Template, 2, 2, "option", 10, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 6)(47, "label");
      \u0275\u0275text(48, "Action plan *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "textarea", 16);
      \u0275\u0275template(50, ActionFormDialog_Conditional_50_Template, 2, 0, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 8)(52, "label");
      \u0275\u0275text(53, "Target completion date");
      \u0275\u0275elementEnd();
      \u0275\u0275element(54, "input", 17);
      \u0275\u0275template(55, ActionFormDialog_Conditional_55_Template, 2, 0, "div", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 8)(57, "label");
      \u0275\u0275text(58, "Stage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "select", 18)(60, "option");
      \u0275\u0275text(61, "Prioritized");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "option");
      \u0275\u0275text(63, "Owned");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "option");
      \u0275\u0275text(65, "In Action");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(66, "div", 19)(67, "label");
      \u0275\u0275text(68, "Remarks / progress");
      \u0275\u0275elementEnd();
      \u0275\u0275element(69, "input", 20);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 21);
      \u0275\u0275text(71, "Stage moves automatically to ");
      \u0275\u0275elementStart(72, "b");
      \u0275\u0275text(73, "Owned");
      \u0275\u0275elementEnd();
      \u0275\u0275text(74, " once a function, person and target date are set. Overdue actions escalate to the Function Head (L1) and, after 14 days, to the Plant Head (L2).");
      \u0275\u0275elementEnd();
      \u0275\u0275template(75, ActionFormDialog_Conditional_75_Template, 2, 1, "div", 22);
      \u0275\u0275elementStart(76, "div", 23)(77, "button", 24);
      \u0275\u0275text(78);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "button", 25);
      \u0275\u0275text(80, "Cancel");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.data.action ? "Update action " + ctx.data.action.id : "Assign ownership & action");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((ctx.data.item == null ? null : ctx.data.item.name) || (ctx.data.action == null ? null : ctx.data.action.name) || "General action");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.data.item ? 7 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.data.item && (!ctx.data.action || !ctx.data.action.itemKey) ? 11 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.types());
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.fns());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.bad("functionName") ? 38 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.persons());
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.bad("plan") ? 50 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("min", ctx.today);
      \u0275\u0275advance();
      \u0275\u0275conditional((ctx.form.controls.targetDate.errors == null ? null : ctx.form.controls.targetDate.errors["past"]) ? 55 : -1);
      \u0275\u0275advance(20);
      \u0275\u0275conditional(ctx.error() ? 75 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.data.action ? "Save changes" : "Create action");
    }
  }, dependencies: [MatDialogModule, MatDialogClose, MatDialogContent, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, InrPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActionFormDialog, { className: "ActionFormDialog", filePath: "src\\app\\shared\\dialogs.ts", lineNumber: 97 });
})();
function openActionForm(dlg, data) {
  return dlg.open(ActionFormDialog, { data, width: "900px", maxWidth: "96vw" });
}
var CloseDialog = class _CloseDialog {
  api = inject(ApiService);
  fb = inject(FormBuilder);
  toast = inject(ToastService);
  ref = inject(MatDialogRef);
  scope = inject(ScopeService);
  data = inject(MAT_DIALOG_DATA);
  today = todayISO();
  error = signal("");
  outcomes = ["Consumed / utilised", "Released by QC", "Transferred", "Retested \u2014 shelf life extended", "Disposed / written off", "Rationalised \u2014 re-order stopped", "Other"];
  form = this.fb.nonNullable.group({ closedDate: [todayISO(), Validators.required], outcome: [this.outcomes[0]], closure: ["", Validators.required] });
  save() {
    this.form.markAllAsTouched();
    if (this.form.invalid)
      return;
    this.api.closeAction(this.data.id, this.form.getRawValue()).subscribe({
      next: () => {
        this.toast.show(`Action ${this.data.id} closed`);
        this.scope.refresh();
        this.ref.close(true);
      },
      error: (e) => this.error.set(errMsg(e))
    });
  }
  static \u0275fac = function CloseDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CloseDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CloseDialog, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 10, consts: [["mat-dialog-content", ""], [1, "mhead"], [1, "eyebrow"], [1, "hint"], ["mat-dialog-close", "", 1, "x"], [1, "entry", 3, "ngSubmit", "formGroup"], [1, "fgroup"], ["type", "date", "formControlName", "closedDate", 3, "max"], [1, "fgroup", 2, "grid-column", "span 3"], ["formControlName", "outcome"], [1, "fgroup", "full"], ["formControlName", "closure", "placeholder", "What was done, document / SAP reference"], [1, "err"], [1, "full", "autherr"], [1, "actions"], ["type", "submit", 1, "btn", "green"], ["type", "button", "mat-dialog-close", "", 1, "btn", "secondary"]], template: function CloseDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h3");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 4);
      \u0275\u0275text(10, "\xD7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "form", 5);
      \u0275\u0275listener("ngSubmit", function CloseDialog_Template_form_ngSubmit_11_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(12, "div", 6)(13, "label");
      \u0275\u0275text(14, "Closed on *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 8)(17, "label");
      \u0275\u0275text(18, "Outcome");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "select", 9);
      \u0275\u0275repeaterCreate(20, CloseDialog_For_21_Template, 2, 1, "option", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 10)(23, "label");
      \u0275\u0275text(24, "Closure remarks / evidence *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "textarea", 11);
      \u0275\u0275template(26, CloseDialog_Conditional_26_Template, 2, 0, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275template(27, CloseDialog_Conditional_27_Template, 2, 1, "div", 13);
      \u0275\u0275elementStart(28, "div", 14)(29, "button", 15);
      \u0275\u0275text(30, "Confirm closure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 16);
      \u0275\u0275text(32, "Cancel");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Closure \xB7 ", ctx.data.id, "");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data.plan || ctx.data.actionType);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate4("", ctx.data.name, " ", ctx.data.batch ? "\xB7 " + ctx.data.batch : "", " \xB7 Owner ", ctx.data.functionName, "", ctx.data.person ? " \u2013 " + ctx.data.person : "", "");
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275property("max", ctx.today);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.outcomes);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.form.controls.closure.invalid && ctx.form.controls.closure.touched ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 27 : -1);
    }
  }, dependencies: [MatDialogModule, MatDialogClose, MatDialogContent, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CloseDialog, { className: "CloseDialog", filePath: "src\\app\\shared\\dialogs.ts", lineNumber: 157 });
})();
var PasswordDialog = class _PasswordDialog {
  data = inject(MAT_DIALOG_DATA);
  ref = inject(MatDialogRef);
  pw = inject(FormBuilder).nonNullable.control("", Validators.required);
  ok() {
    if (this.pw.valid)
      this.ref.close(this.pw.value);
  }
  static \u0275fac = function PasswordDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PasswordDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PasswordDialog, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 3, consts: [["mat-dialog-content", ""], [1, "mhead"], [1, "eyebrow"], [1, "hint"], [1, "entry", 2, "grid-template-columns", "1fr", 3, "ngSubmit"], [1, "fgroup"], ["type", "password", "autocomplete", "current-password", 3, "formControl"], [1, "actions"], ["type", "submit", 1, "btn", "danger", 3, "disabled"], ["type", "button", "mat-dialog-close", "", 1, "btn", "secondary"]], template: function PasswordDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
      \u0275\u0275text(4, "Privileged operation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h3");
      \u0275\u0275text(6, "Confirm it's you");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "form", 4);
      \u0275\u0275listener("ngSubmit", function PasswordDialog_Template_form_ngSubmit_9_listener() {
        return ctx.ok();
      });
      \u0275\u0275elementStart(10, "div", 5)(11, "label");
      \u0275\u0275text(12, "Your password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 7)(15, "button", 8);
      \u0275\u0275text(16, "Confirm");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275text(18, "Cancel");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.data.what);
      \u0275\u0275advance(5);
      \u0275\u0275property("formControl", ctx.pw);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.pw.invalid);
    }
  }, dependencies: [MatDialogModule, MatDialogClose, MatDialogContent, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormControlDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PasswordDialog, { className: "PasswordDialog", filePath: "src\\app\\shared\\dialogs.ts", lineNumber: 185 });
})();
var TempPasswordDialog = class _TempPasswordDialog {
  data = inject(MAT_DIALOG_DATA);
  copy() {
    navigator.clipboard?.writeText(this.data.temporaryPassword);
  }
  static \u0275fac = function TempPasswordDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TempPasswordDialog)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TempPasswordDialog, selectors: [["ng-component"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 3, consts: [["mat-dialog-content", ""], [1, "mhead"], [1, "eyebrow"], ["mat-dialog-close", "", 1, "x"], [1, "temppw"], [1, "btn", "secondary", "small", 3, "click"], [1, "mfoot"], ["mat-dialog-close", "", 1, "btn"]], template: function TempPasswordDialog_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "div", 2);
      \u0275\u0275text(4, "Temporary password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h3");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 3);
      \u0275\u0275text(8, "\xD7");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p");
      \u0275\u0275text(10, "Share this temporary password with ");
      \u0275\u0275elementStart(11, "b");
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " securely. It is shown only once; the user must set a new password at first sign-in.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 4)(15, "code");
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 5);
      \u0275\u0275listener("click", function TempPasswordDialog_Template_button_click_17_listener() {
        return ctx.copy();
      });
      \u0275\u0275text(18, "Copy");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 6)(20, "button", 7);
      \u0275\u0275text(21, "Done");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.data.username);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.data.username);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.data.temporaryPassword);
    }
  }, dependencies: [MatDialogModule, MatDialogClose, MatDialogContent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TempPasswordDialog, { className: "TempPasswordDialog", filePath: "src\\app\\shared\\dialogs.ts", lineNumber: 202 });
})();

export {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  RecordDialog,
  openActionForm,
  CloseDialog,
  PasswordDialog,
  TempPasswordDialog
};
//# sourceMappingURL=chunk-KSMHFCGL.js.map
