import React from "react";
import { BsSearch } from "react-icons/bs";
import { VscChevronRight } from "react-icons/vsc";
import { Button } from "../../components/ReusableComponent/Button";
import { medicineDetailData } from "../../constent/medicineDetailData";

const MedicineDetailPage = () => {
  const data = medicineDetailData.map((i) => {
    return i;
  });
  const [detailData] = data || [];
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="font-bold text-2xl flex flex-row">
              <span className="text-gray-500 flex flex-row items-center">
                Inventory <VscChevronRight className=" text-lg" />
              </span>
              <span className="text-gray-500 flex flex-row items-center">
                List of medicine <VscChevronRight className="text-lg" />
              </span>
              Medicine Name
            </h1>
            <p className="text-sm">A detail view of medicine</p>
          </div>
          <div className="flex  px-4 justify-between flex-row rounded-md bg-[#EDF1F5] w-[400px] border border-gray-400">
            <input
              className="w-full py-2 bg-transparent outline-none placeholder:font-light placeholder:text-base"
              type="search"
              placeholder="Search for anything"
            />
            <div className="flex  flex-row justify-end  pt-3">
              <BsSearch className="text-xl  text-gray-400" />
            </div>
          </div>
        </div>
        <div>
          <Button
            showIcon={true}
            icon="/assets/editing.png"
            bgColor="blue"
            label="Edit Medicine"
            onClick={() => console.log("clicked")}
            width={false}
          />
        </div>
      </div>
      <div className=" grid grid-cols-2 w-full capitalize gap-20 justify-between">
        <div className="border border-gray-400">
          <h1 className="py-2 px-8 text-lg font-medium">Medicine</h1>
          <hr className="border-gray-400" />
          <div className="flex flex-row justify-between py-2 px-8">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl text-start">
                {detailData.medicineId}
              </p>
              <h1 className="text-base">Medicine ID</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl text-start">
                {detailData.medicineGroup}
              </p>
              <h1 className="text-base">Medicine Group</h1>
            </div>
          </div>
        </div>
        <div className="border border-gray-400">
          <h1 className="py-2 px-8 text-lg font-medium">Inventory in QTY</h1>
          <hr className="border-gray-400" />
          <div className="flex flex-row justify-between py-2 px-8">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl text-start">
                {detailData.lifeTimeSupply}
              </p>
              <h1 className="text-base">Lifetime Supply</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl text-start">
                {detailData.lifeTimeSale}
              </p>
              <h1 className="text-base">Lifetime Sale</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-xl text-start">
                {detailData.stockLeft}
              </p>
              <h1 className="text-base">Stock Left</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mb-8">
        <div className="border border-gray-400">
          <h1 className="py-2 px-8 text-lg font-medium">How to use</h1>
          <hr className="border-gray-400" />
          <div className="flex flex-row justify-between py-2 px-8">
            <div className="flex flex-col gap-2">
              <p className="text-base">{detailData.howToUse}</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-400">
          <h1 className="py-2 px-8 text-lg font-medium">Side Effect</h1>
          <hr className="border-gray-400" />
          <div className="flex flex-row justify-between py-2 px-8">
            <div className="flex flex-col gap-2">
              <p className="text-base">{detailData.sideEffect}</p>
            </div>
          </div>
        </div>
      </div>
      <Button
        width={false}
        icon="/assets/delete.png"
        showIcon={true}
        onClick={() => console.log("Delete")}
        bgColor="redWhite"
        label="Delete Medicine"
      />
    </div>
  );
};

export default MedicineDetailPage;
