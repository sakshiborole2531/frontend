export const MAT_TYPES = ['Raw Material', 'Intermediate', 'Semi-Finished Goods', 'Finished Goods', 'Recovered Solvent', 'Packing Material', 'Consumable'] as const;
export const DEPTS = ['Production', 'Engineering', 'QC', 'EHS', 'Other'] as const;
export const STATUSES = ['Unrestricted', 'Quality', 'Blocked'] as const;
export const STAGES = ['Prioritized', 'Owned', 'In Action', 'Closed'] as const;
export const BUCKETS = ['0â€“30', '31â€“90', '91â€“180', '181â€“365', '>365'];
export const BUCKET_COLORS = ['#34b45a', '#2f7de1', '#f5b81c', '#f5843a', '#ef4f4f'];
export const SHORT: Record<string, string> = { 'Raw Material': 'RM', 'Intermediate': 'INT', 'Semi-Finished Goods': 'SFG', 'Finished Goods': 'FG', 'Recovered Solvent': 'RS', 'Packing Material': 'PM', 'Consumable': 'CON' };
export const CAT_COLORS: Record<string, string> = { 'Raw Material': '#3b5bdb', 'Intermediate': '#7c3aed', 'Semi-Finished Goods': '#d946ef', 'Finished Goods': '#f59e0b', 'Recovered Solvent': '#ef4444', 'Packing Material': '#16a34a', 'Consumable': '#0ea5a4' };

export interface Me {
  id: number; username: string; name: string; email?: string; phone?: string; empId?: string; designation?: string; department?: string;
  location?: string; functionName?: string; role: string; roleLabel: string; scopeAll: boolean; scopeBus: string[]; scopeUnits: string[];
  permissions: string[]; mustChange: boolean; theme?: string; lastLogin?: string; validUntil?: string;
}

export interface CalcItem {
  id: number; bu: string; plant: string; matType: string; dept?: string; subCat?: string; code: string; name: string; batch: string; uom?: string; storageLoc?: string;
  unrestrictedQty: number; qualityQty: number; blockedQty: number; unitCost: number;
  receiptDate?: string; lyingSince?: string; mfgDate?: string; expiryDate?: string; dateType: string; lastIssueDate?: string; blockReason?: string; remarks?: string;
  qty: number; value: number; uVal: number; qVal: number; bVal: number; lying?: string; age: number | null; rsl: number | null; dsi: number | null; idle: number | null;
  slTotal: number | null; slUsed: number | null; movement: string; bucket: string | null; band: string | null; statuses: string[]; restricted: boolean;
  consStatus: string | null; flags: string[]; score: number; prio: 'P1' | 'P2' | 'P3' | null; itemKey: string;
}

export interface Action {
  id: string; itemKey?: string; bu?: string; plant?: string; code?: string; name?: string; batch?: string; matType?: string; valueAtRaise?: number;
  exception?: string; actionType: string; plan: string; priority: string; functionName: string; person?: string; createdDate?: string; targetDate?: string;
  stage: string; remarks?: string; closedDate?: string; closure?: string; closedBy?: string; daysLeft: number | null; overdue: boolean; escalation: string;
  canUpdate: boolean; canClose: boolean;
}

export interface Thresholds { expiryDays: number; agingDays: number; longLyingDays: number; nonMovingDays: number; slowMovingDays: number; consAgingDays: number; qualityHoldDays: number; highValue: number; fyStart: number; }

export interface Plant { id?: number; sapCode?: string | null; name: string; buCode: string; city?: string; active: boolean; sortOrder: number; }
export interface BusinessUnit { code: string; name: string; alias?: string; active?: boolean; sortOrder?: number; }
export interface StorageLocation { id?: number; plantName?: string | null; code: string; name: string; storageType: string; }
export interface MaterialTypeMap { sapCode: string; description?: string; numberSeries?: string; category: string; department?: string | null; }
export interface MaterialGroupMap { sapCode: string; description?: string; category?: string | null; department?: string | null; subCategory?: string; }
export interface Person { id?: number; name: string; functionName?: string; email?: string; }
export interface Masters {
  businessUnits: BusinessUnit[]; plants: Plant[]; storageLocations: StorageLocation[]; materialTypes: MaterialTypeMap[]; materialGroups: MaterialGroupMap[];
  functions: string[]; actionTypes: string[]; persons: Person[]; categories: string[]; departments: string[]; stages: string[];
}

export interface Filter { bu: string; plant: string; cat: string; status: string; dept: string; q: string; }

/** Active master records for the sidebar â€” served by GET /api/masters/sidebar. */
export interface PlantSidebarItem { id: number; code: string | null; name: string; active: boolean; order: number; buCode: string; city?: string | null; }
export interface BusinessUnitSidebarItem { id: string; code: string; name: string; active: boolean; order: number; alias?: string | null; plantCount: number; }
export interface StorageLocationSidebarItem { id: number; code: string; name: string; active: boolean; order: number; plantName?: string | null; storageType?: string; }
export interface MaterialTypeSidebarItem { id: string; code: string; name: string | null; active: boolean; order: number; category?: string; }
export interface SidebarMasterCounts { plants: number; businessUnits: number; storageLocations: number; materialTypes: number; }
export interface SidebarMasterData {
  plants: PlantSidebarItem[]; businessUnits: BusinessUnitSidebarItem[]; storageLocations: StorageLocationSidebarItem[]; materialTypes: MaterialTypeSidebarItem[];
  counts: SidebarMasterCounts;
}
