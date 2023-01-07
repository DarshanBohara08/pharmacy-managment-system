import React from "react";
import { InventoryHeader } from "../../modules/Inventory/InventoryHeader";
import { MedicineTable } from "../../modules/Inventory/MedicineTable";
import MedicineDetailPage from "./[listOfMedicineId]";

const ListOfMedicine = () => {
  return (
    <div className="bg-[#EDF1F5] w-full  text-[#1c1c1c] ">
      <InventoryHeader />
      <MedicineTable />
    </div>
  );
};

export default ListOfMedicine;
