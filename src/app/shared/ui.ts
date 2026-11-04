import { Component, Input, Pipe, PipeTransform, inject } from '@angular/core';
import { ScopeService } from '../core/scope.service';
import { daysColor, flagClass, flagLabel, fmtD, fmtQ, fmtV, realFlags } from '../core/format';

@Pipe({ name: 'inr', standalone: true }) export class InrPipe implements PipeTransform { transform(v: number | null | undefined) { return fmtV(v); } }
@Pipe({ name: 'qty', standalone: true }) export class QtyPipe implements PipeTransform { transform(v: number | null | undefined) { return fmtQ(v); } }
@Pipe({ name: 'dt', standalone: true }) export class DatePipe2 implements PipeTransform { transform(v?: string | null) { return fmtD(v); } }

/** Coloured day count (age or remaining shelf life). */
@Component({
  selector: 'days-pill', standalone: true,
  template: `@if (d === null || d === undefined) { â€“ } @else { <span class="days" [style.background]="color">{{ kind === 'rsl' && d < 0 ? 'Exp ' + (-d) + 'd' : d }}</span> }`
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
  template: `@if (p) { <span class="tag {{ p.toLowerCase() }}">{{ p }}</span> } @else { â€“ }`
})
export class PrioTag { @Input() p: string | null | undefined = null; }

/** Material icon in the stroke style of the original (uses Material Icons font). */
@Component({ selector: 'ic', standalone: true, template: `<span class="material-icons" [style.fontSize.px]="size" style="vertical-align:middle;line-height:1">{{ n }}</span>` })
export class Ic { @Input() n = 'circle'; @Input() size = 18; }

export const UI = [InrPipe, QtyPipe, DatePipe2, DaysPill, FlagTags, StatusTags, PrioTag, Ic];
