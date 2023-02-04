import { useRouter } from "next/router";
import Table from "rc-table";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { VscChevronRight } from "react-icons/vsc";
import { Button } from "../../../components/ReusableComponent/Button";
import { CustomModal } from "../../../components/ReusableComponent/CustomModal";
import { medicineGroupData } from "../../../constent/medicineGroupData";
import { AddMedicineInGroup } from "../../../modules/Inventory/AddMedicineInGroup";

const MedicineGroupDetail = () => {
  const [showModal, setShowModal] = useState(false);
  const route = useRouter();
  const routeId = route.query.medicineGroupId;
  const id = typeof routeId === "string" ? parseInt(routeId) : routeId;
  const data = medicineGroupData.filter((i) => i.id === id);
  const filterMedicineData = data?.map(({ medicineName }) => {
    return medicineName;
  });

  const columns = [
    {
      title: "Medicine Name",
      dataIndex: "name",
      key: "name",
      width: 400,
      className: "  border-b border-gray-400 py-2 w-[400px] 2xl:w-[50%]",
    },
    {
      title: "No of Medicine",
      dataIndex: "noOfMedicine",
      key: "noOfMedicine",
      width: 400,
      className: "  border-b border-gray-400 py-2 w-[400px] 2xl:w-[50%]",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 400,
      className:
        " border-b border-gray-400 2xl:px-10 py-2 w-[400px] 2xl:w-[50%] ",
      render: () => {
        return (
          <div className="flex flex-row gap-5 items-center justify-center">
            <AiOutlineDelete className="cursor-pointer" />
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
              <h1 className="font-bold text-2xl  2xl:text-4xl flex flex-row">
                <span className="text-gray-500 flex flex-row items-center">
                  Inventory <VscChevronRight className=" text-lg" />
                </span>

                <span
                  onClick={() => {
                    route.push(`/inventory/medicineGroup`);
                  }}
                  className="cursor-pointer text-gray-500 flex flex-row items-center"
                >
                  Medicine Group <VscChevronRight className="text-lg" />
                </span>
                <h1>
                  {data[0]?.medicineGroup} ( {data[0]?.noOfMedicine})
                </h1>
              </h1>
              <p className="text-sm 2xl:text-xl">A detail view of medicine</p>
            </div>
            <div className="flex  px-4 justify-between flex-row rounded-md bg-[#EDF1F5] w-[400px] border border-gray-400">
              <input
                className="w-full py-2 bg-transparent outline-none placeholder:font-light text-lg 2xl:text-2xl"
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
                setShowModal(true);
              }}
              bgColor="red"
              label="Add Medicine"
              showIcon={true}
              icon="/assets/sign.png"
            />
          </div>
        </div>
        <div className=" border rounded-md border-gray-400">
          <Table
            className="text-center w-full text-base 2xl:text-2xl"
            columns={columns}
            data={filterMedicineData[0]}
          />
        </div>
        <div>
          <Button
            width={false}
            onClick={() => {
              // setShowModal(true);
            }}
            bgColor="redWhite"
            label="Delete Medicine Group"
            showIcon={true}
            icon="/assets/delete.png"
          />
        </div>
      </div>
      <CustomModal isOpen={showModal}>
        <AddMedicineInGroup setShowModal={setShowModal} />
      </CustomModal>
    </div>
  );
};

export default MedicineGroupDetail;
