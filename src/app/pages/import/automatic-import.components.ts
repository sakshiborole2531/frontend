import { Component, EventEmitter, Input, Output, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AutomaticImportConfig, AutomaticImportHistoryEntry, AutomaticImportStatus, AutomaticImportStatusCode } from '../../core/models';
import { fmtDT } from '../../core/format';
import { UI } from '../../shared/ui';

/** Formats file size in bytes into a clean human-readable string (KB / MB). */
export function formatBytes(bytes?: number | null): string {
  if (bytes === null || bytes === undefined || isNaN(Number(bytes)) || Number(bytes) <= 0) return '—';
  const b = Number(bytes);
  if (b >= 1024 * 1024) return (b / (1024 * 1024)).toFixed(2) + ' MB';
  if (b >= 1024) return (b / 1024).toFixed(1) + ' KB';
  return b + ' B';
}

/** Maps file format code to readable label. */
export function formatFileFormatLabel(fmt?: string | null, fileName?: string | null): string {
  const ext = fileName ? (/\.(xlsx|xls)$/i.exec(fileName)?.[1]?.toUpperCase() || '') : '';
  const map: Record<string, string> = {
    SAPSTOCK: 'SAP Stock Report (.xlsx / .xls)',
    AUTO: 'Auto-Detect SAP / App Layout',
    APP: 'Inventory Template (.xlsx / .xls)'
  };
  const base = map[fmt || 'SAPSTOCK'] || fmt || 'Excel (.xlsx / .xls)';
  return ext ? `${ext} · ${base}` : base;
}

/**
 * AutomaticImportStatusComponent
 * Displays the current automation status badge with required color coding:
 * - Green: Import Successful
 * - Orange: Import Running / Waiting for Next Import
 * - Red: Import Failed
 * - Grey: Disabled / Not Configured
 */
@Component({
  selector: 'app-automatic-import-status',
  standalone: true,
  imports: [...UI],
  template: `
    <span class="tag" [style.background]="bgColor()" [style.color]="textColor()" [style.border]="borderStyle()" style="display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:20px;font-size:11.5px;font-weight:700">
      <span style="width:7px;height:7px;border-radius:50%;display:inline-block" [style.background]="dotColor()"></span>
      {{ status || 'Not Configured' }}
    </span>
  `
})
export class AutomaticImportStatusComponent {
  @Input() status: AutomaticImportStatusCode | string = 'Not Configured';

  bgColor() {
    switch (this.status) {
      case 'Import Successful':
      case 'OK':
        return 'var(--green-bg)';
      case 'Import Running':
      case 'Waiting for Next Import':
        return 'var(--orange-bg)';
      case 'Import Failed':
      case 'Failed':
        return 'var(--red-bg)';
      default:
        return 'var(--surface2)';
    }
  }

  textColor() {
    switch (this.status) {
      case 'Import Successful':
      case 'OK':
        return 'var(--green)';
      case 'Import Running':
      case 'Waiting for Next Import':
        return 'var(--orange)';
      case 'Import Failed':
      case 'Failed':
        return 'var(--red)';
      default:
        return 'var(--mute)';
    }
  }

  dotColor() {
    switch (this.status) {
      case 'Import Successful':
      case 'OK':
        return 'var(--green)';
      case 'Import Running':
      case 'Waiting for Next Import':
        return 'var(--orange)';
      case 'Import Failed':
      case 'Failed':
        return 'var(--red)';
      default:
        return '#9ca3af';
    }
  }

  borderStyle() {
    switch (this.status) {
      case 'Import Successful':
      case 'OK':
        return '1px solid rgba(30,138,87,.28)';
      case 'Import Running':
      case 'Waiting for Next Import':
        return '1px solid var(--orange-soft)';
      case 'Import Failed':
      case 'Failed':
        return '1px solid rgba(192,57,43,.28)';
      default:
        return '1px solid var(--border)';
    }
  }
}

/**
 * AutomaticImportConfirmationDialog
 * Confirmation modal shown before enabling replacement automation or running an immediate replacement import.
 */
@Component({
  standalone: true,
  imports: [MatDialogModule, ...UI],
  template: `
    <div mat-dialog-content>
      <div class="mhead">
        <div>
          <div class="eyebrow" style="color:var(--orange)">{{ data.eyebrow || 'Automatic Daily Import' }}</div>
          <h3>{{ data.title }}</h3>
        </div>
        <button class="x" [mat-dialog-close]="false">×</button>
      </div>
      <div class="cinfo warn" style="margin-top:6px;margin-bottom:12px">
        <ic n="alert" [size]="18"/>
        <div>
          <b>Inventory Replacement Warning</b><br>
          {{ data.warningText }}
        </div>
      </div>
      <div class="kv" style="grid-template-columns:1fr 1fr;background:var(--surface2);padding:10px 12px;border-radius:10px;border:1px solid var(--border)">
        <div><span>Configured Folder Path</span><b>{{ data.folderPath || 'C:\\Inventory_Sap' }}</b></div>
        <div><span>Selected Excel File</span><b>{{ data.fileName || '—' }}</b></div>
        <div><span>Import Mode</span><b>Replace all inventory in authorized scope</b></div>
        <div><span>Schedule Frequency</span><b>Every {{ data.frequencyHours || 24 }} Hours ({{ data.startTime || '06:00' }})</b></div>
      </div>
      <div class="mfoot">
        <button type="button" class="btn secondary" [mat-dialog-close]="false">Cancel</button>
        <button type="button" class="btn" [mat-dialog-close]="true">
          <ic n="check" [size]="15"/> {{ data.confirmLabel || 'Confirm & Enable' }}
        </button>
      </div>
    </div>
  `
})
export class AutomaticImportConfirmationDialog {
  data = inject<{
    eyebrow?: string;
    title: string;
    warningText: string;
    folderPath?: string;
    fileName?: string;
    frequencyHours?: number;
    startTime?: string;
    confirmLabel?: string;
  }>(MAT_DIALOG_DATA);
  ref = inject(MatDialogRef<AutomaticImportConfirmationDialog>);
}

/**
 * AutomaticImportConfigurationComponent
 * Configuration panel for Folder path, Selected Excel file, Frequency, Enable/Disable toggle,
 * Import mode, and Start time / first scheduled execution.
 */
@Component({
  selector: 'app-automatic-import-configuration',
  standalone: true,
  imports: [FormsModule, ...UI],
  template: `
    <div style="margin-top:12px;padding:14px 16px;border:1.5px solid var(--orange-soft);border-radius:12px;background:var(--surface2)">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px;flex-wrap:wrap">
        <div>
          <h3 style="margin:0;color:var(--navy);font-size:14px;display:flex;align-items:center;gap:6px">
            <ic n="sliders" [size]="16"/> Automatic Import Configuration
          </h3>
          <div class="hint">Select the SAP stock Excel file (.xlsx or .xls) and configure the daily 24-hour schedule.</div>
        </div>
        <button type="button" class="btn secondary small" (click)="browseFile.emit()" [disabled]="saving">
          <ic n="upload" [size]="14"/> Choose Excel File (.xlsx / .xls)
        </button>
      </div>

      <div class="formgrid" style="grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px">
        <div class="fgroup">
          <label>Folder path *</label>
          <input type="text" [(ngModel)]="draft.folderPath" placeholder="C:\\Inventory_Sap" [disabled]="saving">
        </div>
        <div class="fgroup">
          <label>Selected Excel file *</label>
          <div style="display:flex;gap:6px">
            <input type="text" [(ngModel)]="draft.fileName" placeholder="Select .xlsx or .xls file" style="flex:1" readonly>
            <button type="button" class="btn secondary small" (click)="browseFile.emit()" [disabled]="saving" title="Browse .xlsx / .xls file">Browse…</button>
          </div>
        </div>
        <div class="fgroup">
          <label>File format</label>
          <select [(ngModel)]="draft.fileFormat" [disabled]="saving">
            <option value="SAPSTOCK">SAP stock report — Unichem layout (.xlsx / .xls)</option>
            <option value="AUTO">Detect automatically (.xlsx / .xls)</option>
            <option value="APP">Inventory template (this app)</option>
          </select>
        </div>
        <div class="fgroup">
          <label>Frequency</label>
          <select [(ngModel)]="draft.frequencyHours" [disabled]="saving">
            <option [ngValue]="24">Every 24 Hours (Daily)</option>
          </select>
        </div>
        <div class="fgroup">
          <label>Import mode</label>
          <select [(ngModel)]="draft.importMode" [disabled]="saving">
            <option value="replace">Replace all inventory in authorized scope</option>
            <option value="upsert">Update existing &amp; add new</option>
            <option value="add">Add only</option>
          </select>
        </div>
        <div class="fgroup">
          <label>Start time / first scheduled execution</label>
          <input type="time" [(ngModel)]="draft.startTime" [disabled]="saving" style="padding:7px 10px;border:1px solid var(--border);border-radius:8px;background:var(--surface);color:var(--text);font-family:inherit;font-size:12.5px">
        </div>
      </div>

      @if (draft.fileName) {
        <div class="kv" style="grid-template-columns:repeat(auto-fit,minmax(160px,1fr));margin-top:10px;margin-bottom:4px;padding:8px 10px;background:var(--surface);border-radius:8px;border:1px solid var(--border)">
          <div><span>Selected File</span><b>{{ draft.fileName }}</b></div>
          <div><span>Last Modified Date</span><b>{{ draft.fileLastModified ? fmtDT(draft.fileLastModified) : 'Provided by server on run' }}</b></div>
          <div><span>File Size</span><b>{{ formatBytes(draft.fileSize) }}</b></div>
          <div>
            <span>Enable Automation</span>
            <label class="switch" style="margin-top:2px">
              <input type="checkbox" [(ngModel)]="draft.enabled" [disabled]="saving">
              <span class="tr"></span>
              <span style="font-size:12px">{{ draft.enabled ? 'Enabled' : 'Disabled' }}</span>
            </label>
          </div>
        </div>
      }

      @if (validationError) {
        <div class="err" style="margin-top:8px">{{ validationError }}</div>
      }

      <div class="note" style="margin-top:10px">
        <b>Trusted Local / Server Execution:</b> The Spring Boot backend scheduler reads from the configured server/local directory (default <code>C:\\Inventory_Sap</code>) every 24 hours. Once enabled, the backend scheduler is responsible for all future executions.
      </div>

      <div style="display:flex;gap:8px;justify-content:flex-end;margin-top:12px;flex-wrap:wrap">
        <button type="button" class="btn secondary small" (click)="cancelConfig.emit()" [disabled]="saving">Cancel</button>
        <button type="button" class="btn small" (click)="saveConfig.emit()" [disabled]="saving">
          <ic n="check" [size]="14"/> {{ saving ? 'Saving…' : 'Save Configuration' }}
        </button>
      </div>
    </div>
  `
})
export class AutomaticImportConfigurationComponent {
  @Input({ required: true }) draft!: AutomaticImportConfig;
  @Input() saving = false;
  @Input() validationError = '';
  @Output() browseFile = new EventEmitter<void>();
  @Output() saveConfig = new EventEmitter<void>();
  @Output() cancelConfig = new EventEmitter<void>();

  fmtDT = fmtDT;
  formatBytes = formatBytes;
}

/**
 * AutomaticImportCardComponent
 * Renders the Automatic Daily Import card directly below "Replace all inventory (in your scope)".
 */
@Component({
  selector: 'app-automatic-import-card',
  standalone: true,
  imports: [
    FormsModule,
    MatProgressBarModule,
    AutomaticImportStatusComponent,
    AutomaticImportConfigurationComponent,
    ...UI
  ],
  template: `
    <div class="xcard" style="margin-top:12px;border:1.5px solid var(--orange-soft);background:var(--surface);border-radius:12px;padding:14px 16px;box-shadow:var(--shadow)">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px;flex-wrap:wrap">
        <div>
          <h3 style="margin:0;font-size:14.5px;color:var(--navy);display:flex;align-items:center;gap:8px">
            <span class="ic" style="color:var(--orange);display:flex"><ic n="clock" [size]="17"/></span>
            Automatic Daily Import
          </h3>
          <p style="margin:3px 0 0;font-size:12px;color:var(--mute)">
            Automatically synchronize inventory with the latest SAP stock Excel file every 24 hours.
          </p>
        </div>
        <app-automatic-import-status [status]="status.status"/>
      </div>

      @if (loading || running) {
        <div style="margin-top:8px">
          <mat-progress-bar mode="indeterminate"/>
          @if (running) {
            <div class="hint" style="margin-top:4px;color:var(--orange);font-weight:700">
              Importing SAP inventory file ({{ config.fileName || 'configured file' }})… Please wait for backend confirmation.
            </div>
          }
        </div>
      }

      @if (errorMessage) {
        <div class="note" style="border-color:var(--red);background:var(--red-bg);color:var(--red);margin-top:8px">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
            <div><b style="color:var(--red)">Automatic Import Error:</b> {{ errorMessage }}</div>
            <button type="button" class="iconbtn" (click)="clearError.emit()" title="Dismiss">✕</button>
          </div>
        </div>
      }

      <div class="kv" style="grid-template-columns:repeat(4,minmax(0,1fr));gap:10px 14px;margin-top:10px;margin-bottom:6px;padding:10px 12px;background:var(--surface2);border-radius:10px;border:1px solid var(--border)">
        <div>
          <span>Configured folder path</span>
          <b [title]="config.folderPath || 'C:\\Inventory_Sap'">{{ config.folderPath || 'C:\\Inventory_Sap' }}</b>
        </div>
        <div>
          <span>Selected Excel file name</span>
          <b [title]="config.fileName || 'Not selected'">{{ config.fileName || 'Not selected' }}</b>
        </div>
        <div>
          <span>File format</span>
          <b>{{ formatFileFormatLabel(config.fileFormat, config.fileName) }}</b>
        </div>
        <div>
          <span>Last modified date</span>
          <b>{{ config.fileLastModified ? fmtDT(config.fileLastModified) : '—' }}</b>
        </div>
        <div>
          <span>File size</span>
          <b>{{ formatBytes(config.fileSize) }}</b>
        </div>
        <div>
          <span>Automatic Import status</span>
          <b>{{ status.status || 'Not Configured' }}</b>
        </div>
        <div>
          <span>Last successful import</span>
          <b>{{ status.lastSuccessfulImport ? fmtDT(status.lastSuccessfulImport) : 'Never' }}</b>
        </div>
        <div>
          <span>Next scheduled import</span>
          <b>{{ status.enabled && status.nextScheduledImport ? fmtDT(status.nextScheduledImport) : 'Not scheduled' }}</b>
        </div>
        <div>
          <span>Import frequency</span>
          <b>{{ status.frequencyLabel || 'Every 24 Hours' }}</b>
        </div>
        <div>
          <span>Import mode</span>
          <b>{{ config.importMode === 'replace' ? 'Replace all inventory (in scope)' : config.importMode === 'add' ? 'Add only' : 'Update existing & add new' }}</b>
        </div>
        <div>
          <span>Scheduled start time</span>
          <b>{{ config.startTime || '06:00' }} (Daily)</b>
        </div>
        <div>
          <span>Selected local file ready</span>
          <b>{{ selectedFileName ? selectedFileName : (config.fileName ? 'Configured (' + config.fileName + ')' : 'None') }}</b>
        </div>
      </div>

      <div class="row" style="margin-top:6px;display:flex;gap:8px;flex-wrap:wrap;align-items:center">
        <button
          type="button"
          class="btn secondary small"
          (click)="configureClick.emit()"
          [disabled]="loading || saving || running">
          <ic n="gear" [size]="14"/> Configure Automatic Import
        </button>

        <button
          type="button"
          class="btn green small"
          (click)="enableClick.emit()"
          [disabled]="loading || saving || running || status.enabled || !config.fileName">
          <ic n="check" [size]="14"/> Enable Automatic Import
        </button>

        <button
          type="button"
          class="btn secondary small"
          (click)="disableClick.emit()"
          [disabled]="loading || saving || running || !status.enabled">
          <ic n="ban" [size]="14"/> Disable Automatic Import
        </button>

        <button
          type="button"
          class="btn small"
          (click)="runNowClick.emit()"
          [disabled]="loading || saving || running || !config.fileName">
          <ic n="refresh" [size]="14"/> {{ running ? 'Running Import…' : 'Run Import Now' }}
        </button>
      </div>

      @if (configOpen) {
        <app-automatic-import-configuration
          [draft]="draft"
          [saving]="saving"
          [validationError]="validationError"
          (browseFile)="browseFile.emit()"
          (saveConfig)="saveConfig.emit()"
          (cancelConfig)="cancelConfig.emit()"/>
      }
    </div>
  `
})
export class AutomaticImportCardComponent {
  @Input({ required: true }) config!: AutomaticImportConfig;
  @Input({ required: true }) status!: AutomaticImportStatus;
  @Input({ required: true }) draft!: AutomaticImportConfig;
  @Input() configOpen = false;
  @Input() loading = false;
  @Input() saving = false;
  @Input() running = false;
  @Input() selectedFileName = '';
  @Input() validationError = '';
  @Input() errorMessage = '';

  @Output() configureClick = new EventEmitter<void>();
  @Output() enableClick = new EventEmitter<void>();
  @Output() disableClick = new EventEmitter<void>();
  @Output() runNowClick = new EventEmitter<void>();
  @Output() browseFile = new EventEmitter<void>();
  @Output() saveConfig = new EventEmitter<void>();
  @Output() cancelConfig = new EventEmitter<void>();
  @Output() clearError = new EventEmitter<void>();

  fmtDT = fmtDT;
  formatBytes = formatBytes;
  formatFileFormatLabel = formatFileFormatLabel;
}

/**
 * AutomaticImportHistoryComponent
 * Displays the Automatic Import History table with search, status filtering, column sorting,
 * pagination, and row detail inspection (GET /api/automatic-import/history/{id}).
 */
@Component({
  selector: 'app-automatic-import-history',
  standalone: true,
  imports: [FormsModule, AutomaticImportStatusComponent, ...UI],
  template: `
    <div class="panel">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:6px">
        <div>
          <h2>Automatic Import History</h2>
          <div class="desc" style="margin-bottom:0">Execution log of scheduled daily SAP imports and manual runs with record counts and error diagnostics.</div>
        </div>
        <button type="button" class="btn secondary small" (click)="refreshHistory.emit()" [disabled]="loading">
          <ic n="refresh" [size]="14"/> Refresh History
        </button>
      </div>

      <div class="toolbar" style="margin-top:10px">
        <div class="fsel" style="height:34px;min-width:240px">
          <span class="ic"><ic n="search" [size]="15"/></span>
          <input
            type="text"
            placeholder="Search file name, import type or error…"
            [ngModel]="searchQuery()"
            (ngModelChange)="onSearchChange($event)">
        </div>

        <div class="seg-tabs">
          <button type="button" [class.on]="statusFilter() === 'ALL'" (click)="setStatusFilter('ALL')">All ({{ entries.length }})</button>
          <button type="button" [class.on]="statusFilter() === 'SUCCESS'" (click)="setStatusFilter('SUCCESS')">Successful</button>
          <button type="button" [class.on]="statusFilter() === 'FAILED'" (click)="setStatusFilter('FAILED')">Failed / Skipped</button>
        </div>

        <span class="hint">{{ filteredAndSorted().length }} record{{ filteredAndSorted().length === 1 ? '' : 's' }}</span>
        <span class="spacer"></span>

        <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:var(--mute)">
          <span>Rows per page:</span>
          <select [ngModel]="pageSize()" (ngModelChange)="onPageSizeChange($event)" style="padding:4px 8px;height:30px">
            <option [ngValue]="5">5</option>
            <option [ngValue]="10">10</option>
            <option [ngValue]="25">25</option>
          </select>
        </div>
      </div>

      <div class="tablewrap">
        <table>
          <thead>
            <tr>
              <th style="cursor:pointer" (click)="toggleSort('importedAt')">
                Import date/time {{ sortIndicator('importedAt') }}
              </th>
              <th style="cursor:pointer" (click)="toggleSort('fileName')">
                File name {{ sortIndicator('fileName') }}
              </th>
              <th style="cursor:pointer" (click)="toggleSort('importType')">
                Import type {{ sortIndicator('importType') }}
              </th>
              <th class="num" style="cursor:pointer" (click)="toggleSort('totalRecords')">
                Total records {{ sortIndicator('totalRecords') }}
              </th>
              <th class="num" style="cursor:pointer" (click)="toggleSort('addedRecords')">
                Added records {{ sortIndicator('addedRecords') }}
              </th>
              <th class="num" style="cursor:pointer" (click)="toggleSort('updatedRecords')">
                Updated records {{ sortIndicator('updatedRecords') }}
              </th>
              <th class="num" style="cursor:pointer" (click)="toggleSort('failedRecords')">
                Failed records {{ sortIndicator('failedRecords') }}
              </th>
              <th style="cursor:pointer" (click)="toggleSort('status')">
                Status {{ sortIndicator('status') }}
              </th>
              <th>Error details</th>
            </tr>
          </thead>
          <tbody>
            @for (item of pagedRows(); track item.id) {
              <tr (click)="inspectRow.emit(item)" style="cursor:pointer" title="Click to inspect import run details">
                <td>{{ fmtDT(item.importedAt) }}</td>
                <td><b>{{ item.fileName }}</b></td>
                <td>{{ item.importType }}</td>
                <td class="num">{{ item.totalRecords | qty }}</td>
                <td class="num" style="color:var(--green);font-weight:700">{{ item.addedRecords | qty }}</td>
                <td class="num" style="color:var(--blue);font-weight:700">{{ item.updatedRecords | qty }}</td>
                <td class="num" [style.color]="item.failedRecords > 0 ? 'var(--red)' : 'var(--mute)'" [style.font-weight]="item.failedRecords > 0 ? '700' : '400'">
                  {{ item.failedRecords | qty }}
                </td>
                <td>
                  <app-automatic-import-status [status]="item.status"/>
                </td>
                <td class="wrap">
                  @if (item.errorDetails) {
                    <span [style.color]="item.status === 'Import Failed' || item.status === 'Failed' ? 'var(--red)' : 'var(--mute)'">
                      {{ item.errorDetails }}
                    </span>
                  } @else {
                    <span class="hint">—</span>
                  }
                </td>
              </tr>
            } @empty {
              <tr>
                <td colspan="9" class="empty">No automatic or manual import history records match your filter.</td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      @if (totalPages() > 1) {
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:10px;gap:10px;flex-wrap:wrap">
          <span class="hint">
            Page {{ page() }} of {{ totalPages() }} · Showing {{ startIdx() + 1 }}–{{ endIdx() }} of {{ filteredAndSorted().length }}
          </span>
          <div style="display:flex;gap:6px">
            <button type="button" class="btn secondary small" [disabled]="page() <= 1" (click)="setPage(page() - 1)">← Previous</button>
            <button type="button" class="btn secondary small" [disabled]="page() >= totalPages()" (click)="setPage(page() + 1)">Next →</button>
          </div>
        </div>
      }

      @if (selectedDetail) {
        <div class="note" style="margin-top:12px;border-style:solid;border-color:var(--orange-soft);background:var(--surface2)">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
            <b style="color:var(--navy)">Import Run Details (#{{ selectedDetail.id }}) — {{ selectedDetail.fileName }}</b>
            <button type="button" class="iconbtn" (click)="closeDetail.emit()" title="Close details">✕</button>
          </div>
          <div class="kv" style="grid-template-columns:repeat(auto-fit,minmax(160px,1fr));margin-bottom:0">
            <div><span>Executed At</span><b>{{ fmtDT(selectedDetail.importedAt) }}</b></div>
            <div><span>Import Type</span><b>{{ selectedDetail.importType }}</b></div>
            <div><span>Total / Added / Updated / Failed</span><b>{{ selectedDetail.totalRecords }} / {{ selectedDetail.addedRecords }} / {{ selectedDetail.updatedRecords }} / {{ selectedDetail.failedRecords }}</b></div>
            <div><span>Details / Diagnostics</span><b>{{ selectedDetail.errorDetails || 'Completed with zero errors' }}</b></div>
          </div>
        </div>
      }
    </div>
  `
})
export class AutomaticImportHistoryComponent {
  private _entries = signal<AutomaticImportHistoryEntry[]>([]);
  @Input() set entries(v: AutomaticImportHistoryEntry[]) {
    this._entries.set(v ?? []);
  }
  get entries(): AutomaticImportHistoryEntry[] {
    return this._entries();
  }

  @Input() loading = false;
  @Input() selectedDetail: AutomaticImportHistoryEntry | null = null;
  @Output() refreshHistory = new EventEmitter<void>();
  @Output() inspectRow = new EventEmitter<AutomaticImportHistoryEntry>();
  @Output() closeDetail = new EventEmitter<void>();

  fmtDT = fmtDT;
  searchQuery = signal('');
  statusFilter = signal<'ALL' | 'SUCCESS' | 'FAILED'>('ALL');
  sortCol = signal<keyof AutomaticImportHistoryEntry>('importedAt');
  sortAsc = signal(false);
  page = signal(1);
  pageSize = signal(10);

  filteredAndSorted = computed(() => {
    const q = this.searchQuery().trim().toLowerCase();
    const sf = this.statusFilter();
    const col = this.sortCol();
    const asc = this.sortAsc();

    const filtered = this._entries().filter(item => {
      if (sf === 'SUCCESS' && !(item.status === 'Import Successful' || item.status === 'OK')) return false;
      if (sf === 'FAILED' && !(item.status === 'Import Failed' || item.status === 'Failed' || item.failedRecords > 0)) return false;
      if (!q) return true;
      return (
        (item.fileName || '').toLowerCase().includes(q) ||
        (item.importType || '').toLowerCase().includes(q) ||
        (item.errorDetails || '').toLowerCase().includes(q) ||
        (item.status || '').toLowerCase().includes(q)
      );
    });

    return [...filtered].sort((a, b) => {
      const av = a[col];
      const bv = b[col];
      let cmp = 0;
      if (typeof av === 'number' && typeof bv === 'number') {
        cmp = av - bv;
      } else {
        cmp = String(av ?? '').localeCompare(String(bv ?? ''));
      }
      return asc ? cmp : -cmp;
    });
  });

  totalPages = computed(() => Math.max(1, Math.ceil(this.filteredAndSorted().length / this.pageSize())));
  startIdx = computed(() => (Math.min(this.page(), this.totalPages()) - 1) * this.pageSize());
  endIdx = computed(() => Math.min(this.startIdx() + this.pageSize(), this.filteredAndSorted().length));

  pagedRows = computed(() => {
    const all = this.filteredAndSorted();
    return all.slice(this.startIdx(), this.endIdx());
  });

  onSearchChange(v: string) {
    this.searchQuery.set(v);
    this.page.set(1);
  }

  setStatusFilter(f: 'ALL' | 'SUCCESS' | 'FAILED') {
    this.statusFilter.set(f);
    this.page.set(1);
  }

  onPageSizeChange(sz: number) {
    this.pageSize.set(Number(sz) || 10);
    this.page.set(1);
  }

  setPage(p: number) {
    this.page.set(Math.max(1, Math.min(this.totalPages(), p)));
  }

  toggleSort(col: keyof AutomaticImportHistoryEntry) {
    if (this.sortCol() === col) {
      this.sortAsc.set(!this.sortAsc());
    } else {
      this.sortCol.set(col);
      this.sortAsc.set(false);
    }
  }

  sortIndicator(col: keyof AutomaticImportHistoryEntry): string {
    if (this.sortCol() !== col) return '';
    return this.sortAsc() ? '▲' : '▼';
  }
}
