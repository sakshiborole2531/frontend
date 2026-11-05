import { ChangeDetectionStrategy, Component, Input, Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ScopeService } from '../core/scope.service';
import { daysColor, flagClass, flagLabel, fmtD, fmtQ, fmtV, realFlags } from '../core/format';

@Pipe({ name: 'inr', standalone: true }) export class InrPipe implements PipeTransform { transform(v: number | null | undefined) { return fmtV(v); } }
@Pipe({ name: 'qty', standalone: true }) export class QtyPipe implements PipeTransform { transform(v: number | null | undefined) { return fmtQ(v); } }
@Pipe({ name: 'dt', standalone: true }) export class DatePipe2 implements PipeTransform { transform(v?: string | null) { return fmtD(v); } }

/** Coloured day count (age or remaining shelf life). */
@Component({
  selector: 'days-pill', standalone: true,
  template: `@if (d === null || d === undefined) { – } @else { <span class="days" [style.background]="color">{{ kind === 'rsl' && d < 0 ? 'Exp ' + (-d) + 'd' : d }}</span> }`
})
export class DaysPill {
  private scope = inject(ScopeService);
  @Input() d: number | null | undefined = null;
  @Input() kind: 'age' | 'rsl' = 'age';
  get color() { return daysColor(this.d ?? null, this.kind, this.scope.thresholds().expiryDays); }
}

/** Exception flag chips. */
@Component({
  selector: 'flag-tags', standalone: true,
  template: `@for (f of shown; track f) { <span class="tag {{ cls(f) }}">{{ label(f) }}</span> } @empty { <span class="tag ok">None</span> }`
})
export class FlagTags {
  private scope = inject(ScopeService);
  @Input() flags: string[] = [];
  @Input() includeHv = true;
  get shown() { return this.includeHv ? this.flags : realFlags(this.flags); }
  cls(f: string) { return flagClass(f); }
  label(f: string) { return flagLabel(f, this.scope.thresholds()); }
}

@Component({
  selector: 'status-tags', standalone: true,
  template: `@if (x.unrestrictedQty > 0) {<span class="tag ok">Unrestricted</span>} @if (x.qualityQty > 0) {<span class="tag warn">Quality</span>}
             @if (x.blockedQty > 0) {<span class="tag bad">Blocked</span>} @if (!x.unrestrictedQty && !x.qualityQty && !x.blockedQty) {<span class="tag mat">Zero stock</span>}`
})
export class StatusTags { @Input() x: any; }

@Component({
  selector: 'prio-tag', standalone: true,
  template: `@if (p) { <span class="tag {{ p.toLowerCase() }}">{{ p }}</span> } @else { – }`
})
export class PrioTag { @Input() p: string | null | undefined = null; }

const IC_PATHS: Record<string, string> = {
  home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
  box: '<path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/>',
  tool: '<path d="M14.7 6.3a4 4 0 0 0 5 5L22 14l-8 8-2.3-2.3a4 4 0 0 0-5-5L2 10l8-8z"/>',
  check: '<path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"/>',
  swap: '<path d="M7 4v13"/><path d="M3 13l4 4 4-4"/><path d="M17 20V7"/><path d="M21 11l-4-4-4 4"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4-2v-4z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5V21h16"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  refresh: '<path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 3v6h-6"/>',
  pin: '<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  layers: '<path d="M12 3 2 8l10 5 10-5z"/><path d="M2 16l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
  tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  cal: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  wallet: '<path d="M20 7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16V7"/><circle cx="16.5" cy="14" r="1.5"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/>',
  flask: '<path d="M9 3h6"/><path d="M10 3v6L4 19a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3L14 9V3"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="M5.6 5.6l12.8 12.8"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
  hourglass: '<path d="M6 2h12M6 22h12"/><path d="M7 2c0 6 10 6 10 10S7 16 7 22"/><path d="M17 2c0 6-10 6-10 10s10 4 10 10"/>',
  archive: '<rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
  truck: '<rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  building: '<rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  factory: '<path d="M2 20V8l6 4V8l6 4V4h8v16z"/><path d="M6 16h2M11 16h2M16 16h2"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  grid: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  chart: '<path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/>',
  db: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>'
};

const IC_ALIASES: Record<string, string> = {
  apartment: 'building',
  inventory_2: 'box',
  build: 'tool',
  grid_on: 'grid',
  show_chart: 'chart',
  task_alt: 'check',
  settings: 'gear',
  light_mode: 'sun',
  dark_mode: 'moon',
  place: 'pin',
  verified_user: 'shield',
  database: 'db',
  check_circle: 'check',
  science: 'flask',
  block: 'ban',
  schedule: 'clock',
  event: 'cal',
  hourglass_empty: 'hourglass',
  priority_high: 'alert',
  warning: 'alert',
  sell: 'tag',
  swap_vert: 'swap',
  info: 'alert',
  tune: 'sliders',
  gps_fixed: 'target'
};

const SAFE_SVG_CACHE = new Map<string, SafeHtml>();

/** Inline stroke SVG icon matching the reference design (cached + OnPush for instant rendering). */
@Component({
  selector: 'ic', standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<svg class="i" viewBox="0 0 24 24" [style.width.px]="size" [style.height.px]="size" aria-hidden="true" [innerHTML]="svgPath"></svg>`
})
export class Ic {
  private sanitizer = inject(DomSanitizer);
  @Input() n = 'box';
  @Input() size = 18;
  get svgPath(): SafeHtml {
    const key = IC_ALIASES[this.n] || this.n;
    let cached = SAFE_SVG_CACHE.get(key);
    if (!cached) {
      cached = this.sanitizer.bypassSecurityTrustHtml(IC_PATHS[key] || IC_PATHS['box']);
      SAFE_SVG_CACHE.set(key, cached);
    }
    return cached;
  }
}

export const UI = [InrPipe, QtyPipe, DatePipe2, DaysPill, FlagTags, StatusTags, PrioTag, Ic];
