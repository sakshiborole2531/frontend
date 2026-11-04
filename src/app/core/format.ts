const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** â‚¹ in Indian units (L = lakh, Cr = crore), as in the original dashboard. */
export function fmtV(n: number | null | undefined): string {
  n = n || 0; const a = Math.abs(n);
  if (a >= 1e7) return 'â‚¹' + (n / 1e7).toFixed(2) + ' Cr';
  if (a >= 1e5) return 'â‚¹' + (n / 1e5).toFixed(1) + ' L';
  return 'â‚¹' + Math.round(n).toLocaleString('en-IN');
}
export function fmtQ(n: number | null | undefined): string { return (Math.round((n || 0) * 100) / 100).toLocaleString('en-IN'); }
export function fmtD(s?: string | null): string {
  if (!s || !/^\d{4}-\d{2}-\d{2}/.test(s)) return 'â€“';
  const [y, m, d] = s.slice(0, 10).split('-'); return `${d} ${MONTHS[+m - 1]} ${y}`;
}
export function fmtDT(s?: string | null): string {
  if (!s) return 'never';
  return new Date(s).toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}
export function pct(a: number, b: number): number { return b ? a / b * 100 : 0; }
export function todayISO(): string { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
export function addDays(n: number): string { const d = new Date(); d.setDate(d.getDate() + n); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
export function sum<T>(a: T[], f: (x: T) => number): number { return a.reduce((s, x) => s + (f(x) || 0), 0); }
export function initials(name?: string): string { return (name || 'U').trim().split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase(); }

export function flagLabel(f: string, t: { expiryDays: number; qualityHoldDays: number; nonMovingDays: number; slowMovingDays: number; longLyingDays: number; agingDays: number }): string {
  return ({ EXPD: 'Expired', EXP: `Expiry â‰¤${t.expiryDays}d`, BLK: 'Blocked', QH: `Quality hold >${t.qualityHoldDays}d`, NM: `Non-moving >${t.nonMovingDays}d`,
    SLOW: `Slow-moving >${t.slowMovingDays}d`, LL: `Lying >${t.longLyingDays}d`, AGED: `Aged >${t.agingDays}d`, HV: 'High value' } as Record<string, string>)[f] || f;
}
export function flagClass(f: string): string { return ({ EXPD: 'bad', EXP: 'warn', BLK: 'bad', QH: 'warn', NM: 'bad', SLOW: 'warn', LL: 'warn', AGED: 'warn', HV: 'info' } as Record<string, string>)[f] || 'mat'; }
export function realFlags(flags: string[]): string[] { return flags.filter(f => f !== 'HV'); }

/** Colour for age / remaining-shelf-life pills. */
export function daysColor(d: number | null, kind: 'age' | 'rsl', expiryDays = 180): string {
  if (d === null) return '';
  if (kind === 'age') return d > 365 ? '#a83232' : d > 180 ? '#cc6a2c' : d > 90 ? '#e08a12' : '#5a9ad6';
  return d < 0 ? '#7a1f1f' : d <= 30 ? '#a83232' : d <= 90 ? '#cc6a2c' : d <= expiryDays ? '#e08a12' : '#1e7d4f';
}
export function stageClass(s: string): string { return ({ Prioritized: 'warn', Owned: 'info', 'In Action': 'info', Closed: 'ok' } as Record<string, string>)[s] || 'mat'; }
export function consClass(s: string | null): string { return ({ Normal: 'ok', Aging: 'info', 'Long Lying': 'warn', 'Non-Moving': 'bad' } as Record<string, string>)[s || ''] || 'mat'; }
export function invStatus(x: { rsl: number | null; blockedQty: number; unrestrictedQty: number; qualityQty: number }): [string, string] {
  if (x.rsl !== null && x.rsl < 0) return ['Expired', 'bad'];
  if (x.blockedQty > 0 && x.unrestrictedQty <= 0) return ['Blocked', 'bad'];
  if (x.qualityQty > 0 && x.unrestrictedQty <= 0) return ['QC Hold', 'warn'];
  if (x.blockedQty > 0 || x.qualityQty > 0) return ['Part restricted', 'warn'];
  return ['Available', 'ok'];
}
