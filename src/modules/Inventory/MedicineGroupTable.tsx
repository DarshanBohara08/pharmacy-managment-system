import Table from "rc-table";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
const columns = [
  {
    title: "Group Name",
    dataIndex: "medicineGroup",
    key: "medicineGroup",
    width: 400,
    className: " border-b border-gray-400 py-2",
  },
  {
    title: "No of Medicine",
    dataIndex: "noOfMedicine",
    key: "noOfMedicine",
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
          <AiOutlineEye
          // onClick={() => route.push(`/inventory/listOfMedicine/${id}`)}
          />
        </div>
      );
    },
  },
];
export const MedicineGroupTable = () => {
  return (
    <div className="py-6 px-10">
      <div className=" border rounded-md border-gray-400">
        <Table className="text-center" columns={columns} data={[]} />
      </div>
    </div>
  );
};
