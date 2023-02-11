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
export const MedicineGroupTable = () => {
  const route = useRouter();
  const columns = [
    {
      title: "Group Name",
      dataIndex: "medicineGroup",
      key: "medicineGroup",
      className: " border-b border-gray-400 py-2 w-[400px] 2xl:w-[50%] ",
    },
    {
      title: "No of Medicine",
      dataIndex: "noOfMedicine",
      key: "noOfMedicine",
      className: " border-b border-gray-400 py-2 w-[400px] 2xl:w-[50%]",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      className:
        " border-b border-gray-400 2xl:px-10 py-2 w-[400px] 2xl:w-[50%]",
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
    <div className="py-2 px-10 w-full text-[#1c1c1c] text-light">
      <div className=" border rounded-md border-gray-400">
        <Table
          className="text-center w-full text-base 2xl:text-2xl"
          columns={columns}
          data={data ? data : []}
        />
      </div>
    </div>
  );
};
