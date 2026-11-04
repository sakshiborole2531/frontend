// src/app/core/format.ts
var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function fmtV(n) {
  n = n || 0;
  const a = Math.abs(n);
  if (a >= 1e7)
    return "\u20B9" + (n / 1e7).toFixed(2) + " Cr";
  if (a >= 1e5)
    return "\u20B9" + (n / 1e5).toFixed(1) + " L";
  return "\u20B9" + Math.round(n).toLocaleString("en-IN");
}
function fmtQ(n) {
  return (Math.round((n || 0) * 100) / 100).toLocaleString("en-IN");
}
function fmtD(s) {
  if (!s || !/^\d{4}-\d{2}-\d{2}/.test(s))
    return "\u2013";
  const [y, m, d] = s.slice(0, 10).split("-");
  return `${d} ${MONTHS[+m - 1]} ${y}`;
}
function fmtDT(s) {
  if (!s)
    return "never";
  return new Date(s).toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}
function pct(a, b) {
  return b ? a / b * 100 : 0;
}
function todayISO() {
  const d = /* @__PURE__ */ new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function addDays(n) {
  const d = /* @__PURE__ */ new Date();
  d.setDate(d.getDate() + n);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function sum(a, f) {
  return a.reduce((s, x) => s + (f(x) || 0), 0);
}
function initials(name) {
  return (name || "U").trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}
function flagLabel(f, t) {
  return {
    EXPD: "Expired",
    EXP: `Expiry \u2264${t.expiryDays}d`,
    BLK: "Blocked",
    QH: `Quality hold >${t.qualityHoldDays}d`,
    NM: `Non-moving >${t.nonMovingDays}d`,
    SLOW: `Slow-moving >${t.slowMovingDays}d`,
    LL: `Lying >${t.longLyingDays}d`,
    AGED: `Aged >${t.agingDays}d`,
    HV: "High value"
  }[f] || f;
}
function flagClass(f) {
  return { EXPD: "bad", EXP: "warn", BLK: "bad", QH: "warn", NM: "bad", SLOW: "warn", LL: "warn", AGED: "warn", HV: "info" }[f] || "mat";
}
function realFlags(flags) {
  return flags.filter((f) => f !== "HV");
}
function daysColor(d, kind, expiryDays = 180) {
  if (d === null)
    return "";
  if (kind === "age")
    return d > 365 ? "#a83232" : d > 180 ? "#cc6a2c" : d > 90 ? "#e08a12" : "#5a9ad6";
  return d < 0 ? "#7a1f1f" : d <= 30 ? "#a83232" : d <= 90 ? "#cc6a2c" : d <= expiryDays ? "#e08a12" : "#1e7d4f";
}
function stageClass(s) {
  return { Prioritized: "warn", Owned: "info", "In Action": "info", Closed: "ok" }[s] || "mat";
}
function consClass(s) {
  return { Normal: "ok", Aging: "info", "Long Lying": "warn", "Non-Moving": "bad" }[s || ""] || "mat";
}
function invStatus(x) {
  if (x.rsl !== null && x.rsl < 0)
    return ["Expired", "bad"];
  if (x.blockedQty > 0 && x.unrestrictedQty <= 0)
    return ["Blocked", "bad"];
  if (x.qualityQty > 0 && x.unrestrictedQty <= 0)
    return ["QC Hold", "warn"];
  if (x.blockedQty > 0 || x.qualityQty > 0)
    return ["Part restricted", "warn"];
  return ["Available", "ok"];
}

export {
  fmtV,
  fmtQ,
  fmtD,
  fmtDT,
  pct,
  todayISO,
  addDays,
  sum,
  initials,
  flagLabel,
  flagClass,
  realFlags,
  daysColor,
  stageClass,
  consClass,
  invStatus
};
//# sourceMappingURL=chunk-EJQTPNTN.js.map
