import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScopeService } from '../core/scope.service';
import { DEPTS, MAT_TYPES, STATUSES } from '../core/models';
import { Ic } from './ui';

/** Compact filter panel with chips (CAPEX style), bound to the global filter. */
@Component({
  selector: 'filter-bar', standalone: true, imports: [FormsModule, Ic],
  template: `
  <div class="fpanel inline">
    <div class="frow">
      <div class="fsel"><span class="ic"><ic n="layers" [size]="16"/></span>
        <select aria-label="Business unit" [ngModel]="f().bu" (ngModelChange)="scope.set({ bu: $event, plant: 'All' })">
          <option value="All">Business Unit</option>@for (b of scope.bus(); track b) {<option [value]="b">{{ b }}</option>}</select></div>
      <div class="fsel"><span class="ic"><ic n="place" [size]="16"/></span>
        <select aria-label="Plant" [ngModel]="f().plant" (ngModelChange)="scope.set({ plant: $event })">
          <option value="All">Plant</option>@for (p of plants(); track p) {<option [value]="p">{{ p }}</option>}</select></div>
      <div class="fsel"><span class="ic"><ic n="inventory_2" [size]="16"/></span>
        <select aria-label="Category" [ngModel]="f().cat" (ngModelChange)="scope.set({ cat: $event })">
          <option value="All">Category</option>@for (c of cats; track c) {<option [value]="c">{{ c }}</option>}</select></div>
      <div class="fsel"><span class="ic"><ic n="verified_user" [size]="16"/></span>
        <select aria-label="Stock status" [ngModel]="f().status" (ngModelChange)="scope.set({ status: $event })">
          <option value="All">Stock Status</option>@for (s of statuses; track s) {<option [value]="s">{{ s }}</option>}</select></div>
      <div class="fsel"><span class="ic"><ic n="search" [size]="16"/></span>
        <input type="text" placeholder="Search description / code / batch" [ngModel]="q()" (ngModelChange)="typed($event)" (keydown.enter)="apply()"></div>
    </div>
    <div class="chips">
      <span class="chip scope"><ic n="apartment" [size]="13"/> {{ scope.path().join(' â€º ') }}</span>
      @for (c of active(); track c.k) { <span class="chip">{{ c.l }}: <b>{{ c.v }}</b><button (click)="clear(c.k)" title="Remove">âœ•</button></span> }
      @if (active().length) { <button class="chip clear" (click)="clearAll()">Clear filters</button> } @else { <span class="hint">No filters â€” showing everything in {{ scope.title() }}</span> }
    </div>
  </div>`
})
export class FilterBarComponent {
  scope = inject(ScopeService);
  f = this.scope.filter;
  cats = MAT_TYPES; statuses = STATUSES; depts = DEPTS;
  q = signal(this.f().q);
  private t: any;
  plants() { const bu = this.f().bu; return this.scope.activePlants().filter(p => bu === 'All' || p.buCode === bu).map(p => p.name); }
  typed(v: string) { this.q.set(v); clearTimeout(this.t); this.t = setTimeout(() => this.apply(), 350); }
  apply() { this.scope.set({ q: this.q() }); }
  active() {
    const f = this.f(); const L: Record<string, string> = { cat: 'Category', status: 'Stock Status', dept: 'Department', q: 'Search' };
    return Object.keys(L).filter(k => (f as any)[k] && (f as any)[k] !== 'All').map(k => ({ k, l: L[k], v: (f as any)[k] }));
  }
  clear(k: string) { this.scope.set({ [k]: k === 'q' ? '' : 'All' } as any); if (k === 'q') this.q.set(''); }
  clearAll() { this.scope.set({ cat: 'All', status: 'All', dept: 'All', q: '' }); this.q.set(''); }
}
