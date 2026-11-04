import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Action, CalcItem, Filter, Masters, Me, SidebarMasterData } from './models';

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
