import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Card } from "../../components/ReusableComponent/Card";
import {
  AiOutlineFileExcel,
  AiOutlineFilePdf,
  AiOutlineMinus,
} from "react-icons/ai";
export const CardHeaderSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-[#EDF1F5] w-full py-4 px-10 text-[#1c1c1c]">
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
          link="www.facebook.com"
          name="Inventory"
          detailLabel={"View Facebook"}
          icon={
            "data:image/png;base64,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"
          }
          heading={"Good"}
          isAmount={false}
        />
        <Card
          borderColor="yellow"
          link="www.facebook.com"
          name="Inventory"
          detailLabel={"View Facebook"}
          icon={
            "data:image/png;base64,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"
          }
          heading={"Good"}
          isAmount={false}
        />
        <Card
          borderColor="green"
          link="www.facebook.com"
          name="Inventory"
          detailLabel={"View Facebook"}
          icon={
            "data:image/png;base64,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"
          }
          heading={"Good"}
          isAmount={false}
        />
        <Card
          borderColor="blue"
          link="www.facebook.com"
          name="Inventory"
          detailLabel={"View Facebook"}
          icon={
            "data:image/png;base64,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"
          }
          heading={"Good"}
          isAmount={false}
        />
      </div>
    </div>
  );
};
