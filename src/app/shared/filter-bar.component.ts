import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScopeService } from '../core/scope.service';
import { DEPTS, MAT_TYPES, STATUSES } from '../core/models';
import { Ic } from './ui';

/** Filter panel matching the reference design layout with collapsible "All Filters". */
@Component({
  selector: 'filter-bar', standalone: true, imports: [CommonModule, FormsModule, Ic],
  template: `
  <div class="fpanel inline">
    <div class="frow">
      <button type="button" class="allf" [class.on]="isAllFiltersOpen()" (click)="toggleAllFilters()">
        <ic n="tune" [size]="16"/>
        <span>All Filters</span>
        <span class="chev">{{ isAllFiltersOpen() ? '?' : '?' }}</span>
      </button>

      <div class="fsel"><span class="ic"><ic n="layers" [size]="16"/></span>
        <select aria-label="Business unit" [ngModel]="f().bu" (ngModelChange)="onBuChange($event)" [disabled]="scope.bus().length === 1">
          @if (scope.hasAllAccess()) { <option value="All">Business Unit</option> }
          @for (b of scope.bus(); track b) {<option [value]="b">{{ b }}</option>}</select></div>

      <div class="fsel"><span class="ic"><ic n="place" [size]="16"/></span>
        <select aria-label="Plant" [ngModel]="f().plant" (ngModelChange)="onPlantChange($event)">
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

    <!-- Secondary Collapsible Row -->
    <div class="frow frow-secondary" [ngClass]="{'hidden': !isAllFiltersOpen()}">
      <div class="fsel"><span class="ic"><ic n="archive" [size]="16"/></span>
        <select aria-label="Storage Location" [ngModel]="f().loc || 'All'" (ngModelChange)="scope.set({ loc: $event })">
          <option value="All">Storage Location</option>
          @for (loc of storageLocList(); track loc) {
            <option [value]="loc">{{ loc }}</option>
          }
        </select>
      </div>

      <div class="fsel"><span class="ic"><ic n="account_balance_wallet" [size]="16"/></span>
        <input type="number" min="0" step="0.5" placeholder="Min value (? Lakh)" [ngModel]="minLakh()" (ngModelChange)="onMinLakhChange($event)">
      </div>

      <div class="fsel date" title="GRN date from"><span class="ic"><ic n="event" [size]="16"/></span>
        <input type="date" [ngModel]="f().from || ''" (ngModelChange)="scope.set({ from: $event || '' })">
      </div>

      <div class="fsel date" title="GRN date to"><span class="ic"><ic n="event" [size]="16"/></span>
        <input type="date" [ngModel]="f().to || ''" (ngModelChange)="scope.set({ to: $event || '' })">
      </div>

      <div class="fsel"><span class="ic"><ic n="group" [size]="16"/></span>
        <select aria-label="Department" [ngModel]="f().dept" (ngModelChange)="scope.set({ dept: $event })">
          <option value="All">Department</option>@for (d of depts; track d) {<option [value]="d">{{ d }}</option>}</select>
      </div>
    </div>

    <!-- Filter Chips & Clear Action -->
    <div class="chips">
      <span class="chip scope"><ic n="apartment" [size]="13"/> {{ scope.path().join(' › ') }}</span>
      @for (c of active(); track c.k) {
        <span class="chip">{{ c.l }}: <b>{{ c.v }}</b><button (click)="clear(c.k)" title="Remove">?</button></span>
      }
      @if (active().length) {
        <button class="chip clear" (click)="clearAll()">Clear filters</button>
      } @else {
        <span class="hint">No filters — showing everything in {{ scope.title() }}</span>
      }
    </div>
  </div>`
})
export class FilterBarComponent {
  scope = inject(ScopeService);
  f = this.scope.filter;
  cats = MAT_TYPES; statuses = STATUSES; depts = DEPTS;
  q = signal(this.f().q);
  isAllFiltersOpen = signal(false);
  private t: any;

  plants() {
    const bu = this.f().bu;
    return this.scope.activePlants().filter(p => bu === 'All' || p.buCode === bu).map(p => p.name);
  }

  storageLocList = computed(() => {
    const plant = this.f().plant;
    const all = this.scope.masters()?.storageLocations ?? [];
    return [...new Set(
      all.filter(s => s.name && (s as any).active !== false && (!s.plantName || plant === 'All' || s.plantName === plant))
         .map(s => s.name)
    )].sort();
  });

  minLakh = computed(() => {
    const v = this.f().minValue;
    return (v != null && v > 0) ? (v / 100_000) : '';
  });

  toggleAllFilters() {
    this.isAllFiltersOpen.update(v => !v);
  }

  onBuChange(bu: string) {
    this.scope.set({ bu, plant: 'All', loc: 'All' });
  }

  onPlantChange(plant: string) {
    this.scope.set({ plant, loc: 'All' });
  }

  onMinLakhChange(val: string | number | null) {
    if (val === '' || val == null || Number(val) <= 0) {
      this.scope.set({ minValue: undefined });
    } else {
      this.scope.set({ minValue: Number(val) * 100_000 });
    }
  }

  typed(v: string) {
    this.q.set(v);
    clearTimeout(this.t);
    this.t = setTimeout(() => this.apply(), 350);
  }

  apply() {
    this.scope.set({ q: this.q() });
  }

  active() {
    const f = this.f();
    const chips: { k: string; l: string; v: string }[] = [];
    if (f.cat && f.cat !== 'All') chips.push({ k: 'cat', l: 'Category', v: f.cat });
    if (f.status && f.status !== 'All') chips.push({ k: 'status', l: 'Stock Status', v: f.status });
    if (f.dept && f.dept !== 'All') chips.push({ k: 'dept', l: 'Department', v: f.dept });
    if (f.loc && f.loc !== 'All') chips.push({ k: 'loc', l: 'Storage Location', v: f.loc });
    if (f.minValue != null && f.minValue > 0) chips.push({ k: 'minValue', l: 'Min Value', v: `= ? ${(f.minValue / 100_000).toLocaleString('en-IN')} L` });
    if (f.from) chips.push({ k: 'from', l: 'GRN From', v: f.from });
    if (f.to) chips.push({ k: 'to', l: 'GRN To', v: f.to });
    if (f.q && f.q.trim()) chips.push({ k: 'q', l: 'Search', v: f.q.trim() });
    return chips;
  }

  clear(k: string) {
    if (k === 'q') {
      this.q.set('');
      this.scope.set({ q: '' });
    } else if (k === 'minValue') {
      this.scope.set({ minValue: undefined });
    } else if (k === 'from' || k === 'to') {
      this.scope.set({ [k]: '' } as any);
    } else {
      this.scope.set({ [k]: 'All' } as any);
    }
  }

  clearAll() {
    this.scope.set({
      loc: 'All', cat: 'All', status: 'All', dept: 'All', q: '',
      minValue: undefined, from: '', to: ''
    });
    this.q.set('');
  }
}