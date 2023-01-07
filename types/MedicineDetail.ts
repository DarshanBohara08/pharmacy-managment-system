export interface IMedicineDetail {
  id: number;
  medicineName: string;
  medicineId: number;
  medicineGroup: string;
  lifeTimeSupply?: number;
  lifeTimeSale?: number;
  stockLeft: number;
  howToUse?: string;
  sideEffect?: string;
  medicineQty?: number;
}
