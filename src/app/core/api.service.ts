import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, switchMap, throwError } from 'rxjs';
import {
  Action,
  AutomaticImportConfig,
  AutomaticImportHistoryEntry,
  AutomaticImportStatus,
  AutomaticImportStatusCode,
  CalcItem,
  Filter,
  Masters,
  Me,
  SidebarMasterData
} from './models';

/** Typed client for the Spring Boot REST API. */
@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private base = '/api';

  private params(o: object = {}): HttpParams {
    let p = new HttpParams();
    Object.entries(o).forEach(([k, v]) => { if (v !== undefined && v !== null && v !== '' && v !== 'All') p = p.set(k, String(v)); });
    return p;
  }
  get<T>(url: string, q?: object): Observable<T> { return this.http.get<T>(this.base + url, { params: this.params(q) }); }
  post<T>(url: string, body?: unknown): Observable<T> { return this.http.post<T>(this.base + url, body ?? {}); }
  put<T>(url: string, body?: unknown): Observable<T> { return this.http.put<T>(this.base + url, body ?? {}); }
  delete<T>(url: string): Observable<T> { return this.http.delete<T>(this.base + url); }

  // auth
  status() { return this.get<{ needsSetup: boolean; company: string; short: string; passwordRules: string[]; idleMinutes: number }>('/auth/status'); }
  me() { return this.get<Me>('/auth/me'); }

  // inventory
  inventory(f: Partial<Filter>) { return this.get<CalcItem[]>('/inventory', f); }
  item(id: number) { return this.get<CalcItem>('/inventory/' + id); }
  saveItem(id: number | null, body: unknown) { return id ? this.put<CalcItem>('/inventory/' + id, body) : this.post<CalcItem>('/inventory', body); }
  deleteItem(id: number) { return this.delete<void>('/inventory/' + id); }
  dataIssues() { return this.get<{ id: number; code: string; batch: string; plant: string; issue: string }[]>('/inventory/data-issues'); }
  importFile(file: File, format: string, mode: string, asOf: string | null, preview: boolean) {
    const fd = new FormData(); fd.append('file', file);
    return this.http.post<any>(this.base + '/inventory/import', fd, { params: this.params({ format, mode, asOf, preview }) });
  }

  // actions
  actions() { return this.get<Action[]>('/actions'); }
  queue(prio = 'All') { return this.get<{ item: CalcItem; suggestedFunction: string; suggestedType: string; suggestedPlan: string }[]>('/actions/queue', { prio }); }
  saveAction(id: string | null, body: unknown) { return id ? this.put<Action>('/actions/' + id, body) : this.post<Action>('/actions', body); }
  actionStep(id: string, step: 'start' | 'reopen') { return this.post<Action>(`/actions/${id}/${step}`); }
  closeAction(id: string, body: unknown) { return this.post<Action>(`/actions/${id}/close`, body); }

  // reports
  dashboard(f: Partial<Filter>) { return this.get<any>('/reports/dashboard', f); }
  matrix(measure: string, f: Partial<Filter>) { return this.get<any>('/reports/matrix', { measure, bu: f.bu, cat: f.cat, dept: f.dept, q: f.q }); }
  yearwise(basis: string, bu: string, plant: string) { return this.get<any>('/reports/yearwise', { basis, bu, plant }); }

  // masters
  masters() { return this.get<Masters>('/masters'); }
  sidebarMasters() { return this.get<SidebarMasterData>('/masters/sidebar'); }
  settings() { return this.get<Record<string, string>>('/masters/settings'); }

  // automatic daily SAP inventory import
  getAutomaticImportConfig(): Observable<AutomaticImportConfig> {
    return this.get<AutomaticImportConfig>('/automatic-import/config').pipe(
      catchError((e: HttpErrorResponse) => {
        if (e.status === 404 || e.status === 405 || e.status === 501) {
          return this.settings().pipe(map(s => this.parseAutoConfigFromSettings(s)));
        }
        return throwError(() => e);
      })
    );
  }

  saveAutomaticImportConfig(cfg: AutomaticImportConfig): Observable<AutomaticImportConfig> {
    return this.put<AutomaticImportConfig>('/automatic-import/config', cfg).pipe(
      catchError((e: HttpErrorResponse) => {
        if (e.status === 404 || e.status === 405 || e.status === 501) {
          const nextStatus: AutomaticImportStatusCode = !cfg.fileName
            ? 'Not Configured'
            : cfg.enabled
              ? 'Waiting for Next Import'
              : 'Disabled';
          const nextSched = cfg.enabled && cfg.fileName ? this.computeNextScheduleIso(cfg.startTime, cfg.frequencyHours) : '';
          const payload: Record<string, string> = {
            'autoImport.folderPath': cfg.folderPath || 'C:\\Inventory_Sap',
            'autoImport.fileName': cfg.fileName || '',
            'autoImport.fileFormat': cfg.fileFormat || 'SAPSTOCK',
            'autoImport.fileLastModified': cfg.fileLastModified || '',
            'autoImport.fileSize': cfg.fileSize != null ? String(cfg.fileSize) : '',
            'autoImport.frequencyHours': String(cfg.frequencyHours || 24),
            'autoImport.enabled': String(Boolean(cfg.enabled)),
            'autoImport.importMode': cfg.importMode || 'replace',
            'autoImport.startTime': cfg.startTime || '06:00',
            'autoImport.status': nextStatus,
            'autoImport.nextScheduledImport': nextSched
          };
          return this.put<Record<string, string>>('/masters/settings', payload).pipe(
            map(s => this.parseAutoConfigFromSettings(s))
          );
        }
        return throwError(() => e);
      })
    );
  }

  enableAutomaticImport(cfg?: AutomaticImportConfig): Observable<AutomaticImportStatus> {
    return this.post<AutomaticImportStatus>('/automatic-import/enable', cfg ?? {}).pipe(
      catchError((e: HttpErrorResponse) => {
        if (e.status === 404 || e.status === 405 || e.status === 501) {
          const startTime = cfg?.startTime || '06:00';
          const freq = cfg?.frequencyHours || 24;
          const nextSched = this.computeNextScheduleIso(startTime, freq);
          return this.put<Record<string, string>>('/masters/settings', {
            'autoImport.enabled': 'true',
            'autoImport.status': 'Waiting for Next Import',
            'autoImport.nextScheduledImport': nextSched,
            'autoImport.lastError': ''
          }).pipe(map(s => this.parseAutoStatusFromSettings(s)));
        }
        return throwError(() => e);
      })
    );
  }

  disableAutomaticImport(): Observable<AutomaticImportStatus> {
    return this.post<AutomaticImportStatus>('/automatic-import/disable', {}).pipe(
      catchError((e: HttpErrorResponse) => {
        if (e.status === 404 || e.status === 405 || e.status === 501) {
          return this.put<Record<string, string>>('/masters/settings', {
            'autoImport.enabled': 'false',
            'autoImport.status': 'Disabled',
            'autoImport.nextScheduledImport': ''
          }).pipe(map(s => this.parseAutoStatusFromSettings(s)));
        }
        return throwError(() => e);
      })
    );
  }

  runAutomaticImportNow(file?: File | null, cfg?: AutomaticImportConfig): Observable<any> {
    return this.post<any>('/automatic-import/run-now', cfg ?? {}).pipe(
      catchError((e: HttpErrorResponse) => {
        if ((e.status === 404 || e.status === 405 || e.status === 501) && file) {
          const fmt = cfg?.fileFormat || 'SAPSTOCK';
          const mode = cfg?.importMode || 'replace';
          return this.importFile(file, fmt, mode, null, false).pipe(
            switchMap(res => {
              const nowIso = new Date().toISOString();
              const nextSched = cfg?.enabled ? this.computeNextScheduleIso(cfg?.startTime || '06:00', cfg?.frequencyHours || 24) : '';
              return this.put<Record<string, string>>('/masters/settings', {
                'autoImport.status': 'Import Successful',
                'autoImport.lastSuccessfulImport': nowIso,
                'autoImport.lastAttemptAt': nowIso,
                'autoImport.nextScheduledImport': nextSched,
                'autoImport.lastError': ''
              }).pipe(map(() => res));
            }),
            catchError(impErr => {
              const nowIso = new Date().toISOString();
              const errMessage = impErr?.error?.error || impErr?.error?.message || impErr?.message || 'Import execution failed';
              return this.put<Record<string, string>>('/masters/settings', {
                'autoImport.status': 'Import Failed',
                'autoImport.lastAttemptAt': nowIso,
                'autoImport.lastError': String(errMessage)
              }).pipe(
                catchError(() => of(null)),
                switchMap(() => throwError(() => impErr))
              );
            })
          );
        }
        return throwError(() => e);
      })
    );
  }

  getAutomaticImportStatus(): Observable<AutomaticImportStatus> {
    return this.get<AutomaticImportStatus>('/automatic-import/status').pipe(
      catchError((e: HttpErrorResponse) => {
        if (e.status === 404 || e.status === 405 || e.status === 501) {
          return this.settings().pipe(map(s => this.parseAutoStatusFromSettings(s)));
        }
        return throwError(() => e);
      })
    );
  }

  getAutomaticImportHistory(): Observable<AutomaticImportHistoryEntry[]> {
    return this.get<AutomaticImportHistoryEntry[]>('/automatic-import/history').pipe(
      catchError((e: HttpErrorResponse) => {
        if (e.status === 404 || e.status === 405 || e.status === 501) {
          return this.get<any[]>('/masters/sync-log').pipe(
            map(logs => (logs ?? []).map(l => this.mapSyncLogToHistory(l)))
          );
        }
        return throwError(() => e);
      })
    );
  }

  getAutomaticImportHistoryById(id: number | string): Observable<AutomaticImportHistoryEntry> {
    return this.get<AutomaticImportHistoryEntry>(`/automatic-import/history/${encodeURIComponent(String(id))}`).pipe(
      catchError((e: HttpErrorResponse) => {
        if (e.status === 404 || e.status === 405 || e.status === 501) {
          return this.getAutomaticImportHistory().pipe(
            map(list => {
              const found = list.find(x => String(x.id) === String(id));
              if (!found) throw new Error(`Import history record #${id} not found`);
              return found;
            })
          );
        }
        return throwError(() => e);
      })
    );
  }

  private parseAutoConfigFromSettings(s: Record<string, string>): AutomaticImportConfig {
    const fileSizeRaw = s['autoImport.fileSize'];
    return {
      folderPath: s['autoImport.folderPath'] || 'C:\\Inventory_Sap',
      fileName: s['autoImport.fileName'] || '',
      fileFormat: (s['autoImport.fileFormat'] as 'AUTO' | 'SAPSTOCK' | 'APP') || 'SAPSTOCK',
      fileLastModified: s['autoImport.fileLastModified'] || null,
      fileSize: fileSizeRaw ? Number(fileSizeRaw) : null,
      frequencyHours: Number(s['autoImport.frequencyHours'] || 24) || 24,
      enabled: s['autoImport.enabled'] === 'true',
      importMode: (s['autoImport.importMode'] as 'replace' | 'upsert' | 'add') || 'replace',
      startTime: s['autoImport.startTime'] || '06:00'
    };
  }

  private parseAutoStatusFromSettings(s: Record<string, string>): AutomaticImportStatus {
    const configured = Boolean((s['autoImport.fileName'] || '').trim());
    const enabled = s['autoImport.enabled'] === 'true';
    const rawStatus = s['autoImport.status'] as AutomaticImportStatusCode | undefined;
    let status: AutomaticImportStatusCode = 'Not Configured';
    if (!configured) {
      status = 'Not Configured';
    } else if (rawStatus && ['Not Configured', 'Disabled', 'Waiting for Next Import', 'Import Running', 'Import Successful', 'Import Failed'].includes(rawStatus)) {
      status = !enabled && rawStatus === 'Waiting for Next Import' ? 'Disabled' : rawStatus;
    } else {
      status = enabled ? 'Waiting for Next Import' : 'Disabled';
    }
    const freqHrs = Number(s['autoImport.frequencyHours'] || 24) || 24;
    return {
      status,
      enabled,
      configured,
      lastSuccessfulImport: s['autoImport.lastSuccessfulImport'] || s['sync.lastRefresh'] || null,
      lastAttemptAt: s['autoImport.lastAttemptAt'] || null,
      nextScheduledImport: enabled && configured
        ? (s['autoImport.nextScheduledImport'] || this.computeNextScheduleIso(s['autoImport.startTime'] || '06:00', freqHrs))
        : null,
      frequencyLabel: freqHrs === 24 ? 'Every 24 Hours' : `Every ${freqHrs} Hours`,
      lastError: s['autoImport.lastError'] || null
    };
  }

  private computeNextScheduleIso(startTime: string, frequencyHours = 24): string {
    const now = new Date();
    const [hh, mm] = (startTime || '06:00').split(':').map(x => Number(x) || 0);
    const next = new Date(now);
    next.setHours(hh, mm, 0, 0);
    while (next.getTime() <= now.getTime()) {
      next.setTime(next.getTime() + frequencyHours * 3600_000);
    }
    return next.toISOString();
  }

  private mapSyncLogToHistory(l: any): AutomaticImportHistoryEntry {
    const src = String(l.source || '');
    const fileMatch = /\(([^)]+)\)/.exec(src);
    const fileName = fileMatch ? fileMatch[1] : (src || 'SAP_Inventory.xlsx');
    const msg = String(l.message || '');
    const addedMatch = /(\d+)\s+added/i.exec(msg);
    const updatedMatch = /(\d+)\s+updated/i.exec(msg);
    const skippedMatch = /(\d+)\s+(?:skipped|failed)/i.exec(msg);
    const added = addedMatch ? Number(addedMatch[1]) : (Number(l.records) || 0);
    const updated = updatedMatch ? Number(updatedMatch[1]) : 0;
    const failed = skippedMatch ? Number(skippedMatch[1]) : 0;
    const total = (Number(l.records) || (added + updated)) + failed;
    const isAuto = /auto|schedule|daily/i.test(src);
    const isHist = /history|snapshot/i.test(src);
    const rawSt = String(l.status || 'OK').toUpperCase();
    const isOk = rawSt === 'OK' || rawSt === 'SUCCESS' || rawSt === 'IMPORT SUCCESSFUL';
    return {
      id: l.id,
      importedAt: l.at,
      fileName,
      importType: isAuto ? 'Automatic Daily (Replace)' : isHist ? 'Historical Snapshot' : 'SAP Stock Import',
      totalRecords: total,
      addedRecords: added,
      updatedRecords: updated,
      failedRecords: failed,
      status: isOk ? 'Import Successful' : 'Import Failed',
      errorDetails: isOk ? (failed > 0 ? `${failed} row(s) skipped/excluded (${msg})` : null) : (msg || 'Import failed'),
      source: src
    };
  }

  /** Downloads an Excel/CSV file from the API with the auth header. */
  download(url: string, q: object = {}, fallbackName = 'export.xlsx'): Observable<void> {
    return this.http.get(this.base + url, { params: this.params(q), responseType: 'blob', observe: 'response' }).pipe(map(res => {
      const cd = res.headers.get('Content-Disposition') || '';
      const name = /filename="?([^"]+)"?/.exec(cd)?.[1] || fallbackName;
      const a = document.createElement('a'); a.href = URL.createObjectURL(res.body!); a.download = name;
      document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
    }));
  }
}
