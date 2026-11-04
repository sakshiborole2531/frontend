import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Subscription, retry, throwError, timer } from 'rxjs';
import { ApiService } from './api.service';
import { SidebarMasterCounts, SidebarMasterData } from './models';

/**
 * Shared, database-driven master data for the sidebar (GET /api/masters/sidebar).
 * One request for every category; concurrent load() calls share the in-flight request.
 * Masters screens call refresh() after a successful add / edit / activate / deactivate / delete.
 */
@Injectable({ providedIn: 'root' })
export class MasterDataService {
  private api = inject(ApiService);
  private pending: Subscription | null = null;
  private again = false;

  readonly data = signal<SidebarMasterData | null>(null);
  readonly loading = signal(false);
  readonly error = signal<string | null>(null);

  readonly plants = computed(() => [...(this.data()?.plants ?? [])].filter(p => p.active).sort((a, b) => a.order - b.order));
  readonly businessUnits = computed(() => [...(this.data()?.businessUnits ?? [])].filter(b => b.active).sort((a, b) => a.order - b.order));
  readonly storageLocations = computed(() => [...(this.data()?.storageLocations ?? [])].filter(s => s.active).sort((a, b) => a.order - b.order));
  readonly materialTypes = computed(() => [...(this.data()?.materialTypes ?? [])].filter(m => m.active).sort((a, b) => a.order - b.order));
  /** Counts as reported by the backend (falls back to the list length if the field is absent). */
  readonly counts = computed<SidebarMasterCounts | null>(() => {
    const d = this.data(); if (!d) return null;
    return d.counts ?? { plants: d.plants.length, businessUnits: d.businessUnits.length, storageLocations: d.storageLocations.length, materialTypes: d.materialTypes.length };
  });

  /** Loads once; further calls while a request is running are ignored. */
  load() {
    if (this.pending) return;
    this.loading.set(true);
    this.pending = this.api.sidebarMasters().pipe(
      // transient failures only (network / 5xx); 401 is handled by the auth interceptor
      retry({ count: 2, delay: (e: HttpErrorResponse, n) => e?.status === 0 || e?.status >= 500 ? timer(1000 * n) : throwError(() => e) })
    ).subscribe({
      next: d => { this.data.set(d); this.error.set(null); this.done(); },
      error: e => { console.error('[MasterDataService] GET /api/masters/sidebar failed', e); this.error.set('Masters unavailable'); this.done(); }
    });
  }

  /** Re-reads the sidebar masters (after a change). Queues one extra reload if a request is in flight. */
  refresh() { if (this.pending) this.again = true; else this.load(); }

  private done() {
    this.pending = null; this.loading.set(false);
    if (this.again) { this.again = false; this.load(); }
  }
}
