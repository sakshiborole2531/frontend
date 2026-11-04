// src/app/core/models.ts
var MAT_TYPES = ["Raw Material", "Intermediate", "Semi-Finished Goods", "Finished Goods", "Recovered Solvent", "Packing Material", "Consumable"];
var DEPTS = ["Production", "Engineering", "QC", "EHS", "Other"];
var STATUSES = ["Unrestricted", "Quality", "Blocked"];
var STAGES = ["Prioritized", "Owned", "In Action", "Closed"];
var BUCKETS = ["0\u201330", "31\u201390", "91\u2013180", "181\u2013365", ">365"];
var BUCKET_COLORS = ["#34b45a", "#2f7de1", "#f5b81c", "#f5843a", "#ef4f4f"];
var SHORT = { "Raw Material": "RM", "Intermediate": "INT", "Semi-Finished Goods": "SFG", "Finished Goods": "FG", "Recovered Solvent": "RS", "Packing Material": "PM", "Consumable": "CON" };
var CAT_COLORS = { "Raw Material": "#3b5bdb", "Intermediate": "#7c3aed", "Semi-Finished Goods": "#d946ef", "Finished Goods": "#f59e0b", "Recovered Solvent": "#ef4444", "Packing Material": "#16a34a", "Consumable": "#0ea5a4" };

export {
  MAT_TYPES,
  DEPTS,
  STATUSES,
  STAGES,
  BUCKETS,
  BUCKET_COLORS,
  SHORT,
  CAT_COLORS
};
//# sourceMappingURL=chunk-MBCJJNOW.js.map
