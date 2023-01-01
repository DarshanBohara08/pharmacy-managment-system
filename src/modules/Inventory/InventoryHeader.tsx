import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { Button } from "../../components/ReusableComponent/Button";

export const InventoryHeader = () => {
  const listOfMedicine = 12;
  return (
    <div className=" py-6 px-10 flex flex-col gap-8">
      <div className="flex flex-row justify-between">
        <div className="">
          <div className="flex flex-row gap-1">
            <h1 className="font-bold text-2xl">
              <span className="text-gray-500">Inventory</span>
            </h1>
            <div className="flex flex-row items-center gap-1 font-bold text-2xl">
              <VscChevronRight className="text-lg" />
              <p>list of medicines({listOfMedicine})</p>
            </div>
          </div>
          <p className="text-sm">A quick data view of inventory</p>
        </div>
        <div>
          <Button
            onClick={() => {
              console.log("hello");
            }}
            bgColor="red"
            label="Add New Item"
            showIcon={true}
            icon="/assets/sign.png"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div>Search</div>
        <div>Filter</div>
      </div>
    </div>
  );
};
