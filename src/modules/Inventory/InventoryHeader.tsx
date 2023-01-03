import React, { useState } from "react";
import { VscChevronRight } from "react-icons/vsc";
import { Button } from "../../components/ReusableComponent/Button";
import { BsSearch } from "react-icons/bs";
import { MdOutlineFilterAlt } from "react-icons/md";
import { AddNewMedicine } from "./AddNewMedicine";
import { CustomModal } from "../../components/ReusableComponent/CustomModal";

export const InventoryHeader = () => {
  const [showModal, setShowModal] = useState(false);
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
            width={false}
            onClick={() => {
              setShowModal(true);
            }}
            bgColor="red"
            label="Add New Item"
            showIcon={true}
            icon="/assets/sign.png"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between">
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

        <div className=" flex flex-row justify-center gap-1 items-center">
          <MdOutlineFilterAlt className="text-2xl text-[#1c1c1c] opacity-70" />
          <select
            className="border font-light text-sm border-[#1c1c1c] border-opacity-30 outline-none px-10 py-3 text-start rounded-md"
            name="group"
          >
            <option className="placeholder:text-gray-400">
              - Select Group -
            </option>
            <option value="Med A">Med A</option>
            <option value="Med B">Med B</option>
            <option value="Med C">Med C</option>
          </select>
        </div>
      </div>
      <CustomModal isOpen={showModal}>
        <AddNewMedicine setShowModal={setShowModal} />
      </CustomModal>
    </div>
  );
};
