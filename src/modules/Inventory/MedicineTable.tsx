import React, { useState } from "react";
import Table from "rc-table";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { Router, useRouter } from "next/router";
import { medicineDetailData } from "../../constent/medicineDetailData";
import { IMedicineDetail } from "../../../types/MedicineDetail";
import { CustomModal } from "../../components/ReusableComponent/CustomModal";
import { AddNewMedicine } from "./AddNewMedicine";

export const MedicineTable = () => {
  const route = useRouter();
  const [showModal, setShowModal] = useState(false);
  const data = medicineDetailData.map((i) => {
    return {
      id: i.id,
      medicineName: i.medicineName,
      medicineId: i.medicineId,
      medicineGroup: i.medicineGroup,
      stockLeft: i.stockLeft,
    };
  });
  const columns = [
    {
      title: "Medicine Name",
      dataIndex: "medicineName",
      key: "medicineName",
      width: 400,
      className: " border-b border-gray-400 py-2",
    },
    {
      title: "Medicine ID",
      dataIndex: "medicineId",
      key: "medicineId",
      width: 400,
      className: " border-b border-gray-400 py-2 ",
    },
    {
      title: "Group Name",
      dataIndex: "medicineGroup",
      key: "medicineGroup",
      width: 400,
      className: " border-b border-gray-400 py-2",
    },
    {
      title: "Stock in QTY",
      dataIndex: "stockLeft",
      key: "stockLeft",
      width: 400,
      className: " border-b border-gray-400 py-2",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 400,
      className: " border-b border-gray-400 py-2 ",
      render: (
        // @ts-ignore
        item,
        rowData: {
          id: number;
          medicineGroup: string;
          medicineId: number;
          medicineName: string;
          stockLeft: number;
        }
      ) => {
        let id = rowData.id;
        return (
          <div className="flex flex-row gap-5 items-center justify-center">
            <AiOutlineDelete />
            <AiOutlineEdit
              onClick={() => {
                setShowModal(true);
              }}
            />
            <AiOutlineEye
              onClick={() => route.push(`/inventory/listOfMedicine/${id}`)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="py-2 px-10 w-full text-[#1c1c1c] text-light">
      <div className=" border rounded-md border-gray-400">
        <Table
          className="text-center  text-base 2xl:text-2xl "
          columns={columns}
          data={data}
        />
      </div>
      <CustomModal isOpen={showModal}>
        <AddNewMedicine setShowModal={setShowModal} />
      </CustomModal>
    </div>
  );
};
