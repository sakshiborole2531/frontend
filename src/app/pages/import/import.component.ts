import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../core/auth.service';
import { errMsg } from '../../core/auth.interceptor';
import { ScopeService } from '../../core/scope.service';
import { ToastService } from '../../core/toast.service';
import {
  AutomaticImportConfig,
  AutomaticImportHistoryEntry,
  AutomaticImportStatus,
  SHORT
} from '../../core/models';
import { fmtDT } from '../../core/format';
import { PasswordDialog } from '../../shared/dialogs';
import { UI } from '../../shared/ui';
import {
  AutomaticImportCardComponent,
  AutomaticImportConfirmationDialog,
  AutomaticImportHistoryComponent
} from './automatic-import.components';

const DEFAULT_AUTO_CONFIG: AutomaticImportConfig = {
  folderPath: 'C:\\Inventory_Sap',
  fileName: '',
  fileFormat: 'SAPSTOCK',
  fileLastModified: null,
  fileSize: null,
  frequencyHours: 24,
  enabled: false,
  importMode: 'replace',
  startTime: '06:00'
};

const DEFAULT_AUTO_STATUS: AutomaticImportStatus = {
  status: 'Not Configured',
  enabled: false,
  configured: false,
  lastSuccessfulImport: null,
  lastAttemptAt: null,
  nextScheduledImport: null,
  frequencyLabel: 'Every 24 Hours',
  lastError: null
};

/** Template download → upload → preview & validate → confirm; Automatic Daily Import; plus Excel exports. */
@Component({
  standalone: true,
  imports: [
    FormsModule,
    MatProgressBarModule,
    AutomaticImportCardComponent,
    AutomaticImportHistoryComponent,
    ...UI
  ],
  templateUrl: './import.component.html'
})
export class ImportComponent {
  api = inject(ApiService); auth = inject(AuthService); scope = inject(ScopeService); private toast = inject(ToastService); private dlg = inject(MatDialog);
  format = 'AUTO'; mode = 'upsert'; asOf = '';
  file = signal<File | null>(null);
  res = signal<any>(null);
  busy = signal(false); over = signal(false);
  rowFilter = signal<'all' | 'Warning' | 'Error'>('all');
  sync = signal<any[]>([]);
  short = SHORT; fmtDT = fmtDT;

  // Automatic Daily Import state
  autoConfig = signal<AutomaticImportConfig>({ ...DEFAULT_AUTO_CONFIG });
  autoDraft = signal<AutomaticImportConfig>({ ...DEFAULT_AUTO_CONFIG });
  autoStatus = signal<AutomaticImportStatus>({ ...DEFAULT_AUTO_STATUS });
  autoHistory = signal<AutomaticImportHistoryEntry[]>([]);
  autoSelectedDetail = signal<AutomaticImportHistoryEntry | null>(null);
  autoConfigOpen = signal(false);
  autoLoading = signal(false);
  autoSaving = signal(false);
  autoRunning = signal(false);
  autoHistoryLoading = signal(false);
  autoValidationError = signal('');
  autoErrorMessage = signal('');
  autoSelectedFile = signal<File | null>(null);

  scheduledBanner = computed(() => {
    const s = this.scope.settings();
    const st = this.autoStatus();
    const cfg = this.autoConfig();
    const syncSource = s['sync.source'];
    const syncLast = s['sync.lastRefresh'];

    let fileName = cfg.fileName || '';
    if (!fileName && syncSource) {
      const m = /\(([^)]+)\)/.exec(syncSource);
      if (m) fileName = m[1];
    }
    const label = syncSource || (fileName ? `Scheduled SAP import (${fileName})` : 'Scheduled SAP import');
    const lastSynced = syncLast || st.lastSuccessfulImport;
    const nextScheduled = st.nextScheduledImport;
    const status = st.status || 'Active';
    const isError = Boolean(st.lastError) || status.toLowerCase().includes('fail');
    const isRunning = status.toLowerCase().includes('running');
    const isWaiting = status.toLowerCase().includes('waiting');

    return {
      fileName,
      label,
      lastSynced,
      nextScheduled,
      status,
      isError,
      isRunning,
      isWaiting,
      folderPath: cfg.folderPath
    };
  });

  constructor() {
    this.api.get<any[]>('/masters/sync-log').subscribe(s => this.sync.set(s));
    this.loadAutomaticImportState();
  }

  loadAutomaticImportState() {
    this.autoLoading.set(true);
    this.api.getAutomaticImportConfig().subscribe({
      next: cfg => {
        const merged = { ...DEFAULT_AUTO_CONFIG, ...cfg, folderPath: cfg.folderPath || 'C:\\Inventory_Sap' };
        this.autoConfig.set(merged);
        if (!this.autoConfigOpen()) {
          this.autoDraft.set({ ...merged });
        }
        this.refreshAutomaticImportStatus();
      },
      error: e => {
        this.autoLoading.set(false);
        this.autoErrorMessage.set(errMsg(e));
      }
    });
    this.loadAutomaticImportHistory();
  }

  refreshAutomaticImportStatus() {
    this.api.getAutomaticImportStatus().subscribe({
      next: st => {
        this.autoStatus.set(st);
        this.autoLoading.set(false);
        if (st.lastError && st.status === 'Import Failed') {
          this.autoErrorMessage.set(st.lastError);
        }
      },
      error: e => {
        this.autoLoading.set(false);
        this.autoErrorMessage.set(errMsg(e));
      }
    });
  }

  loadAutomaticImportHistory() {
    this.autoHistoryLoading.set(true);
    this.api.getAutomaticImportHistory().subscribe({
      next: list => {
        this.autoHistory.set(list ?? []);
        this.autoHistoryLoading.set(false);
      },
      error: e => {
        this.autoHistoryLoading.set(false);
        this.toast.show(errMsg(e));
      }
    });
  }

  openAutoConfig(autoFileInput: HTMLInputElement) {
    this.autoValidationError.set('');
    this.autoDraft.set({ ...this.autoConfig() });
    this.autoConfigOpen.set(true);
    // Open the file selection dialog for .xlsx / .xls as requested
    setTimeout(() => autoFileInput.click(), 0);
  }

  triggerAutoFileBrowse(autoFileInput: HTMLInputElement) {
    this.autoValidationError.set('');
    autoFileInput.click();
  }

  onAutoFileSelected(ev: Event) {
    const input = ev.target as HTMLInputElement;
    const f = input.files?.[0];
    input.value = '';
    if (!f) return;

    if (!/\.(xlsx|xls)$/i.test(f.name)) {
      this.autoValidationError.set('Invalid file format. Please select an Excel (.xlsx or .xls) file.');
      this.toast.show('Please select an Excel (.xlsx or .xls) file');
      return;
    }

    this.autoSelectedFile.set(f);
    this.autoValidationError.set('');
    const currentDraft = this.autoDraft();
    this.autoDraft.set({
      ...currentDraft,
      folderPath: currentDraft.folderPath?.trim() || 'C:\\Inventory_Sap',
      fileName: f.name,
      fileLastModified: f.lastModified ? new Date(f.lastModified).toISOString() : new Date().toISOString(),
      fileSize: f.size
    });
    this.autoConfigOpen.set(true);
  }

  cancelAutoConfig() {
    this.autoValidationError.set('');
    this.autoDraft.set({ ...this.autoConfig() });
    this.autoConfigOpen.set(false);
  }

  saveAutoConfig() {
    if (this.autoSaving()) return;
    const d = this.autoDraft();
    const folder = (d.folderPath || '').trim() || 'C:\\Inventory_Sap';
    const fileName = (d.fileName || '').trim();

    if (!fileName) {
      this.autoValidationError.set('Please select an Excel (.xlsx or .xls) file before saving.');
      return;
    }
    if (!/\.(xlsx|xls)$/i.test(fileName)) {
      this.autoValidationError.set('Selected file must have a .xlsx or .xls extension.');
      return;
    }

    const proceedSave = () => {
      this.autoSaving.set(true);
      this.autoValidationError.set('');
      this.autoErrorMessage.set('');
      const payload: AutomaticImportConfig = {
        ...d,
        folderPath: folder,
        fileName,
        frequencyHours: Number(d.frequencyHours) || 24,
        startTime: d.startTime || '06:00'
      };
      this.api.saveAutomaticImportConfig(payload).subscribe({
        next: saved => {
          this.autoSaving.set(false);
          this.autoConfig.set(saved);
          this.autoDraft.set({ ...saved });
          this.autoConfigOpen.set(false);
          this.refreshAutomaticImportStatus();
          this.scope.load();
          this.toast.show('Automatic Daily Import configuration saved');
        },
        error: e => {
          this.autoSaving.set(false);
          const msg = errMsg(e);
          this.autoErrorMessage.set(msg);
          this.toast.show(msg);
        }
      });
    };

    if (d.enabled && !this.autoConfig().enabled && d.importMode === 'replace') {
      this.dlg.open(AutomaticImportConfirmationDialog, {
        width: '520px',
        data: {
          title: 'Enable Automatic Daily Inventory Replacement?',
          warningText: 'Enabling this automation will replace all current inventory records within your authorized scope every 24 hours using the configured SAP Excel file.',
          folderPath: folder,
          fileName,
          frequencyHours: d.frequencyHours || 24,
          startTime: d.startTime || '06:00',
          confirmLabel: 'Confirm & Save'
        }
      }).afterClosed().subscribe(confirmed => {
        if (confirmed) proceedSave();
      });
    } else {
      proceedSave();
    }
  }

  enableAutoImport() {
    if (this.autoSaving() || this.autoRunning()) return;
    const cfg = this.autoConfig();
    if (!cfg.fileName) {
      this.toast.show('Configure Automatic Import and select an Excel file first');
      return;
    }

    this.dlg.open(AutomaticImportConfirmationDialog, {
      width: '520px',
      data: {
        title: 'Enable Automatic Daily Import?',
        warningText: 'This automatic process replaces inventory within your configured scope every 24 hours with the latest SAP stock Excel file. Existing actions automatically re-link by plant + material code + batch.',
        folderPath: cfg.folderPath || 'C:\\Inventory_Sap',
        fileName: cfg.fileName,
        frequencyHours: cfg.frequencyHours || 24,
        startTime: cfg.startTime || '06:00',
        confirmLabel: 'Confirm & Enable'
      }
    }).afterClosed().subscribe(confirmed => {
      if (!confirmed) return;
      this.autoSaving.set(true);
      this.autoErrorMessage.set('');
      this.api.enableAutomaticImport({ ...cfg, enabled: true }).subscribe({
        next: st => {
          this.autoSaving.set(false);
          this.autoConfig.set({ ...cfg, enabled: true });
          this.autoDraft.set({ ...cfg, enabled: true });
          this.autoStatus.set(st);
          this.refreshAutomaticImportStatus();
          this.scope.load();
          this.toast.show('Automatic Daily Import enabled');
        },
        error: e => {
          this.autoSaving.set(false);
          const msg = errMsg(e);
          this.autoErrorMessage.set(msg);
          this.toast.show(msg);
        }
      });
    });
  }

  disableAutoImport() {
    if (this.autoSaving() || this.autoRunning()) return;
    if (!confirm('Disable Automatic Daily Import? Scheduled 24-hour executions will stop until re-enabled.')) return;

    this.autoSaving.set(true);
    this.autoErrorMessage.set('');
    this.api.disableAutomaticImport().subscribe({
      next: st => {
        this.autoSaving.set(false);
        const cfg = { ...this.autoConfig(), enabled: false };
        this.autoConfig.set(cfg);
        this.autoDraft.set({ ...cfg });
        this.autoStatus.set(st);
        this.refreshAutomaticImportStatus();
        this.scope.load();
        this.toast.show('Automatic Daily Import disabled');
      },
      error: e => {
        this.autoSaving.set(false);
        const msg = errMsg(e);
        this.autoErrorMessage.set(msg);
        this.toast.show(msg);
      }
    });
  }

  runAutoImportNow(autoFileInput: HTMLInputElement) {
    if (this.autoRunning() || this.autoSaving()) return;
    const cfg = this.autoConfig();
    if (!cfg.fileName) {
      this.toast.show('Please configure Automatic Import first');
      return;
    }

    const executeRun = () => {
      this.autoRunning.set(true);
      this.autoErrorMessage.set('');
      this.autoStatus.update(s => ({ ...s, status: 'Import Running' }));

      this.api.runAutomaticImportNow(this.autoSelectedFile(), cfg).subscribe({
        next: r => {
          this.autoRunning.set(false);
          this.refreshAutomaticImportStatus();
          this.loadAutomaticImportHistory();
          this.api.get<any[]>('/masters/sync-log').subscribe(s => this.sync.set(s));
          this.scope.load();
          this.scope.refresh();
          const added = r?.added ?? r?.addedRecords ?? 0;
          const updated = r?.updated ?? r?.updatedRecords ?? 0;
          this.toast.show(`Automatic import complete — ${added} added, ${updated} updated`);
        },
        error: e => {
          this.autoRunning.set(false);
          // If backend endpoint is 404/405 and no local file handle is cached yet, prompt user to pick the configured file
          if ((e?.status === 404 || e?.status === 405 || e?.status === 501) && !this.autoSelectedFile()) {
            this.refreshAutomaticImportStatus();
            this.autoErrorMessage.set(
              `Please select "${cfg.fileName}" via Configure Automatic Import so the browser can upload it to the server.`
            );
            this.toast.show(`Select "${cfg.fileName}" to run immediate import`);
            autoFileInput.click();
            return;
          }
          const msg = errMsg(e);
          this.autoErrorMessage.set(msg);
          this.autoStatus.update(s => ({ ...s, status: 'Import Failed', lastError: msg }));
          this.refreshAutomaticImportStatus();
          this.loadAutomaticImportHistory();
          this.toast.show(msg);
        }
      });
    };

    if (cfg.importMode === 'replace') {
      this.dlg.open(AutomaticImportConfirmationDialog, {
        width: '520px',
        data: {
          eyebrow: 'Run Automatic Import Now',
          title: 'Run Immediate SAP Inventory Replacement?',
          warningText: 'Running this import now will replace all current inventory records within your authorized scope with the contents of the configured SAP Excel file.',
          folderPath: cfg.folderPath || 'C:\\Inventory_Sap',
          fileName: cfg.fileName,
          frequencyHours: cfg.frequencyHours || 24,
          startTime: cfg.startTime || '06:00',
          confirmLabel: 'Run Import Now'
        }
      }).afterClosed().subscribe(confirmed => {
        if (confirmed) executeRun();
      });
    } else {
      executeRun();
    }
  }

  inspectAutoHistory(item: AutomaticImportHistoryEntry) {
    this.api.getAutomaticImportHistoryById(item.id).subscribe({
      next: detail => this.autoSelectedDetail.set(detail),
      error: () => this.autoSelectedDetail.set(item)
    });
  }

  pick(ev: Event) { const f = (ev.target as HTMLInputElement).files?.[0]; if (f) this.preview(f); }
  drop(ev: DragEvent) { ev.preventDefault(); this.over.set(false); const f = ev.dataTransfer?.files[0]; if (f) this.preview(f); }
  preview(f: File) {
    if (this.mode === 'history' && !this.asOf) { this.toast.show("Enter the 'As of' date for the historical snapshot"); return; }
    if (!/\.(xlsx|xls|xlsm|csv|txt)$/i.test(f.name)) { this.toast.show('Choose an Excel (.xlsx) or CSV file'); return; }
    this.file.set(f); this.busy.set(true); this.res.set(null);
    this.api.importFile(f, this.format, this.mode, this.asOf || null, true).subscribe({
      next: r => { this.res.set(r); this.busy.set(false); }, error: e => { this.busy.set(false); this.toast.show(errMsg(e)); }
    });
  }
  confirm() {
    const f = this.file(); if (!f) return;
    if (this.mode === 'replace' && !confirm('Replace all current inventory in your data scope with this file?')) return;
    this.busy.set(true);
    this.api.importFile(f, this.format, this.mode, this.asOf || null, false).subscribe({
      next: r => {
        this.busy.set(false); this.res.set(null); this.file.set(null);
        this.toast.show(`Import complete — ${r.added} added, ${r.updated} updated`);
        this.scope.load(); this.scope.refresh();
        this.api.get<any[]>('/masters/sync-log').subscribe(s => this.sync.set(s));
        this.loadAutomaticImportHistory();
      },
      error: e => { this.busy.set(false); this.toast.show(errMsg(e)); }
    });
  }
  rows() { const r = this.res()?.rows ?? []; return this.rowFilter() === 'all' ? r : r.filter((x: any) => this.rowFilter() === 'Error' ? x.status === 'Error' || x.status === 'Excluded' : x.status === 'Warning'); }
  dl(url: string, name: string) { this.api.download(url, this.scope.filter(), name).subscribe({ error: e => this.toast.show(errMsg(e)) }); }
  sample() {
    this.dlg.open(PasswordDialog, { data: { what: 'Load sample data — replaces all inventory, actions and history' }, width: '460px' }).afterClosed().subscribe(pw => {
      if (!pw) return;
      this.api.post<any>('/admin/sample-data', { password: pw }).subscribe({
        next: r => {
          this.toast.show(`Sample data loaded — ${r.records} records, ${r.actions} actions`);
          this.scope.load(); this.scope.refresh();
          this.loadAutomaticImportHistory();
        },
        error: e => this.toast.show(errMsg(e))
      });
    });
  }
}
