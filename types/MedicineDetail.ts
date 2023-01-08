export interface IMedicineDetail {
  id: number;
  medicineName: string;
  medicineId: number;
  medicineGroup: {
    key: string;
    value: string;
  };
  lifeTimeSupply?: number;
  lifeTimeSale?: number;
  stockLeft: number;
  howToUse: string;
  sideEffect: string;
  medicineQty: number;
}
