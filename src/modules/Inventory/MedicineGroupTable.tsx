import { useRouter } from "next/router";
import Table from "rc-table";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { medicineGroupData } from "../../constent/medicineGroupData";

const data = medicineGroupData.map((i) => {
  return {
    id: i.id,
    medicineGroup: i.medicineGroup,
    noOfMedicine: i.noOfMedicine,
  };
});
console.log("data", data);
export const MedicineGroupTable = () => {
  const route = useRouter();
  console.log("routeId", route);
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
          noOfMedicine: number;
        }
      ) => {
        let id = rowData.id;
        return (
          <div className="flex flex-row gap-5 items-center justify-center">
            <AiOutlineEye
              className="cursor-pointer"
              onClick={() => route.push(`/inventory/medicineGroup/${id}`)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div className="py-2 px-10">
      <div className=" border rounded-md border-gray-400">
        <Table
          className="text-center"
          columns={columns}
          data={data ? data : []}
        />
      </div>
    </div>
  );
};
