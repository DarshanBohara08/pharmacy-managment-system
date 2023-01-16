import { useRouter } from "next/router";
import Table from "rc-table";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { VscChevronRight } from "react-icons/vsc";
import { Button } from "../../../components/ReusableComponent/Button";
import { medicineGroupData } from "../../../constent/medicineGroupData";

const MedicineGroupDetail = () => {
  const route = useRouter();
  const routeId = route.query.medicineGroupId;
  const id = typeof routeId === "string" ? parseInt(routeId) : routeId;
  const data = medicineGroupData.filter((i) => i.id === id);
  const [detailData] = data || [];
  const columns = [
    {
      title: "Medicine Name",
      dataIndex: "medicineName",
      key: "medicineName",
      width: 400,
      className: " border-b border-gray-400 py-2",
      render: (
        item: {
          id: number;
          name: string;
        }[]
      ) => {
        return (
          <>
            {item.map((i) => {
              return (
                <div key={i.id}>
                  <p>{i.name}</p>
                </div>
              );
            })}
          </>
        );
      },
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
      render: () => {
        return (
          <div className="flex flex-row gap-5 items-center justify-center">
            <AiOutlineDelete />
          </div>
        );
      },
    },
  ];
  return (
    <div className="w-full ">
      <div className="py-6 px-10 flex flex-col gap-6">
        <div className="flex  flex-row justify-between ">
          <div className="flex flex-col gap-8">
            <div>
              <h1 className="font-bold text-2xl flex flex-row">
                <span className="text-gray-500 flex flex-row items-center">
                  Inventory <VscChevronRight className=" text-lg" />
                </span>
                <span className="text-gray-500 flex flex-row items-center">
                  List of medicine <VscChevronRight className="text-lg" />
                </span>
                <h1>
                  {data[0]?.medicineGroup} ( {data[0]?.noOfMedicine})
                </h1>
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
              width={false}
              onClick={() => {
                //   setShowModal(true);
              }}
              bgColor="red"
              label="Add Medicine"
              showIcon={true}
              icon="/assets/sign.png"
            />
          </div>
        </div>
        <div className=" border rounded-md border-gray-400">
          {/* TODO */}
          <Table className="text-center " columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default MedicineGroupDetail;
