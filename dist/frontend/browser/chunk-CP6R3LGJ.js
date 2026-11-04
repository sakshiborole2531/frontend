import {
  ApiService
} from "./chunk-TJA4FRLP.js";
import {
  __spreadValues,
  computed,
  inject,
  signal,
  ɵɵdefineInjectable
} from "./chunk-BSQGTHQ3.js";

// src/app/core/scope.service.ts
var ScopeService = class _ScopeService {
  api = inject(ApiService);
  masters = signal(null);
  settings = signal({});
  filter = signal({ bu: "All", plant: "All", cat: "All", status: "All", dept: "All", q: "" });
  version = signal(0);
  // bump to make pages reload
  thresholds = computed(() => {
    const s = this.settings();
    const n = (k, d) => Number(s[k] ?? d) || d;
    return {
      expiryDays: n("expiryDays", 180),
      agingDays: n("agingDays", 180),
      longLyingDays: n("longLyingDays", 365),
      nonMovingDays: n("nonMovingDays", 180),
      slowMovingDays: n("slowMovingDays", 90),
      consAgingDays: n("consAgingDays", 90),
      qualityHoldDays: n("qualityHoldDays", 30),
      highValue: n("highValue", 5e5),
      fyStart: n("fyStart", 4)
    };
  });
  level = computed(() => this.filter().plant !== "All" ? "unit" : this.filter().bu !== "All" ? "bu" : "org");
  activePlants = computed(() => (this.masters()?.plants ?? []).filter((p) => p.active));
  bus = computed(() => [...new Set(this.activePlants().map((p) => p.buCode))]);
  load() {
    this.api.masters().subscribe((m) => this.masters.set(m));
    this.api.settings().subscribe((s) => this.settings.set(s));
  }
  unitsOf(bu) {
    return this.activePlants().filter((p) => p.buCode === bu).map((p) => p.name);
  }
  set(patch) {
    this.filter.update((f) => __spreadValues(__spreadValues({}, f), patch));
  }
  goScope(bu, plant = "All") {
    this.set({ bu, plant });
  }
  refresh() {
    this.version.update((v) => v + 1);
  }
  title() {
    const f = this.filter(), l = this.level();
    return l === "org" ? this.settings()["companyName"] || "Unichem Laboratories Ltd." : l === "bu" ? `${f.bu} Business Unit` : `${f.plant} Unit`;
  }
  path() {
    const f = this.filter();
    const p = ["Unichem"];
    if (f.bu !== "All")
      p.push(f.bu);
    if (f.plant !== "All")
      p.push(f.plant);
    return p;
  }
  static \u0275fac = function ScopeService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScopeService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScopeService, factory: _ScopeService.\u0275fac, providedIn: "root" });
};

export {
  ScopeService
};
//# sourceMappingURL=chunk-CP6R3LGJ.js.map
