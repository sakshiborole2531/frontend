import { Directive, ElementRef, Input, OnChanges, OnDestroy, inject } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';
Chart.register(...registerables);

/** <canvas [chart]="config"> â€” creates / recreates a Chart.js chart, themed with the CSS variables. */
@Directive({ selector: 'canvas[chart]', standalone: true })
export class ChartDirective implements OnChanges, OnDestroy {
  @Input() chart!: ChartConfiguration;
  private el = inject(ElementRef<HTMLCanvasElement>);
  private c?: Chart;
  ngOnChanges() {
    this.c?.destroy();
    if (!this.chart) return;
    const cs = getComputedStyle(document.documentElement);
    Chart.defaults.color = cs.getPropertyValue('--mute').trim() || '#6b7280';
    Chart.defaults.borderColor = cs.getPropertyValue('--border').trim() || '#e4e7ee';
    Chart.defaults.font.family = '"Plus Jakarta Sans","Segoe UI",Roboto,Arial,sans-serif';
    this.c = new Chart(this.el.nativeElement, this.chart);
  }
  ngOnDestroy() { this.c?.destroy(); }
}
