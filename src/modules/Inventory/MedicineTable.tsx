import React from "react";
import Table from "rc-table";
import { AiOutlineDelete } from "react-icons/ai";
const columns = [
  {
    title: "Medicine Name",
    dataIndex: "MedicineName",
    key: "MedicineName",
    width: 400,
    className: " border-b border-gray-400 py-2",
  },
  {
    title: "Medicine ID",
    dataIndex: "MedicineID",
    key: "MedicineID",
    width: 400,
    className: " border-b border-gray-400 py-2 ",
  },
  {
    title: "Group Name",
    dataIndex: "GroupName",
    key: "GroupName",
    width: 400,
    className: " border-b border-gray-400 py-2",
  },
  {
    title: "Stock in QTY",
    dataIndex: "StockinQTY",
    key: "StockinQTY",
    width: 400,
    className: " border-b border-gray-400 py-2",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    width: 400,
    className: " border-b border-gray-400 py-2 ",
    render: () => {
      return (
        <div className="flex flex-col items-center justify-center">
          <AiOutlineDelete />
        </div>
      );
    },
  },
];
const data = [
  {
    MedicineName: "MED A",
    MedicineID: 28,
    GroupName: "GROUP A",
    StockinQTY: "1",
  },
  {
    MedicineName: "MED B",
    MedicineID: 36,
    GroupName: "GROUP A",
    StockinQTY: "2",
  },
];
export const MedicineTable = () => {
  return (
    <div className="py-6 px-10 w-full text-[#1c1c1c] text-light">
      <div className=" border rounded-md border-gray-400">
        <Table className="text-center " columns={columns} data={data} />
      </div>
    </div>
  );
};
