import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Card } from "../../components/ReusableComponent/Card";
import {
  AiOutlineFileExcel,
  AiOutlineFilePdf,
  AiOutlineMinus,
} from "react-icons/ai";
import { RevenueCard } from "./RevenueCard";
export const CardHeaderSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#EDF1F5] w-full py-6 px-10 text-[#1c1c1c]">
      <div className="flex flex-row justify-between mb-8 ">
        <div>
          <h1 className="font-bold text-2xl">Dashboard</h1>
          <p className="text-sm">A quick data view of inventory</p>
        </div>
        <div className="flex flex-row justify-center gap-5 items-center border border-[#1c1c1c] px-4 py-2">
          <p>Download Report</p>
          <BsChevronDown
            className="cursor-pointer"
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>
      {showModal && (
        <div className="relative  h-50 ">
          <div className="absolute bg-white right-0 -top-7 font-light rounded-sm border border-[#1c1c1c]">
            <div className="px-4 py-2 flex flex-row ">
              <AiOutlineFileExcel className="text-[#1c1c1c] text-lg mt-[2px]" />
              <p
                onClick={() => {
                  setShowModal(false);
                }}
                className="text-black cursor-pointer px-4 text-sm "
              >
                Excel
              </p>
            </div>
            <hr className="border border-[#1c1c1c]" />
            <div className="px-4 py-2 flex flex-row ">
              <AiOutlineFilePdf className="text-lg mt-[2px]" />
              <p
                onClick={() => {
                  setShowModal(false);
                }}
                className=" cursor-pointer px-4 text-sm"
              >
                PDF
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-row w-full justify-between">
        <Card
          borderColor="red"
          link="#"
          name="Inventory"
          detailLabel={"view detail report"}
          icon={"https://cdn-icons-png.flaticon.com/512/2897/2897763.png"}
          heading={"Good"}
        />
        <RevenueCard
          link="#"
          name="Revenue"
          detailLabel={"view detail report"}
          icon={"https://cdn-icons-png.flaticon.com/512/1728/1728946.png"}
          heading={"8888"}
        />
        <Card
          borderColor="green"
          link="#"
          name="medicine available"
          detailLabel={"view detail report"}
          icon={"https://cdn-icons-png.flaticon.com/512/3022/3022827.png"}
          heading={"100"}
        />
        <Card
          borderColor="blue"
          link="#"
          name="Medicine shortage"
          detailLabel={"view detail report"}
          icon={"https://cdn-icons-png.flaticon.com/512/5581/5581141.png"}
          heading={"01"}
        />
      </div>
    </div>
  );
};
