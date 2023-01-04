import React from "react";
import { InventoryHeader } from "../../modules/Inventory/InventoryHeader";
import { MedicineGroupHeader } from "../../modules/Inventory/MedicineGroupHeader";
import { MedicineTable } from "../../modules/Inventory/MedicineTable";

const MedicineGroup = () => {
  return (
    <div className="bg-[#EDF1F5] w-full  text-[#1c1c1c]">
      <MedicineGroupHeader />
    </div>
  );
};

export default MedicineGroup;
