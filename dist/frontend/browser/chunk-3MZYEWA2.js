import {
  ApiService
} from "./chunk-TJA4FRLP.js";
import {
  computed,
  inject,
  retry,
  signal,
  throwError,
  timer,
  ɵɵdefineInjectable
} from "./chunk-BSQGTHQ3.js";

// src/app/core/master-data.service.ts
var MasterDataService = class _MasterDataService {
  api = inject(ApiService);
  pending = null;
  again = false;
  data = signal(null);
  loading = signal(false);
  error = signal(null);
  plants = computed(() => [...this.data()?.plants ?? []].filter((p) => p.active).sort((a, b) => a.order - b.order));
  businessUnits = computed(() => [...this.data()?.businessUnits ?? []].filter((b) => b.active).sort((a, b) => a.order - b.order));
  storageLocations = computed(() => [...this.data()?.storageLocations ?? []].filter((s) => s.active).sort((a, b) => a.order - b.order));
  materialTypes = computed(() => [...this.data()?.materialTypes ?? []].filter((m) => m.active).sort((a, b) => a.order - b.order));
  /** Counts as reported by the backend (falls back to the list length if the field is absent). */
  counts = computed(() => {
    const d = this.data();
    if (!d)
      return null;
    return d.counts ?? { plants: d.plants.length, businessUnits: d.businessUnits.length, storageLocations: d.storageLocations.length, materialTypes: d.materialTypes.length };
  });
  /** Loads once; further calls while a request is running are ignored. */
  load() {
    if (this.pending)
      return;
    this.loading.set(true);
    this.pending = this.api.sidebarMasters().pipe(
      // transient failures only (network / 5xx); 401 is handled by the auth interceptor
      retry({ count: 2, delay: (e, n) => e?.status === 0 || e?.status >= 500 ? timer(1e3 * n) : throwError(() => e) })
    ).subscribe({
      next: (d) => {
        this.data.set(d);
        this.error.set(null);
        this.done();
      },
      error: (e) => {
        console.error("[MasterDataService] GET /api/masters/sidebar failed", e);
        this.error.set("Masters unavailable");
        this.done();
      }
    });
  }
  /** Re-reads the sidebar masters (after a change). Queues one extra reload if a request is in flight. */
  refresh() {
    if (this.pending)
      this.again = true;
    else
      this.load();
  }
  done() {
    this.pending = null;
    this.loading.set(false);
    if (this.again) {
      this.again = false;
      this.load();
    }
  }
  static \u0275fac = function MasterDataService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MasterDataService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MasterDataService, factory: _MasterDataService.\u0275fac, providedIn: "root" });
};

export {
  MasterDataService
};
//# sourceMappingURL=chunk-3MZYEWA2.js.map
