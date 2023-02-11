import React, { useState } from "react";
import { AiOutlineFileExcel, AiOutlineFilePdf } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { VscChevronRight } from "react-icons/vsc";
import { FiFilter } from "react-icons/fi";
import { CustomModal } from "../../components/ReusableComponent/CustomModal";
import { FilterReportForm } from "./Form/FilterReportForm";
import { Form, Formik } from "formik";
import { Select } from "../../components/ReusableComponent/Form/Select";

export const option = [
  { value: "Med A", key: "Med A" },
  { value: "Med B", key: "Med B" },
  { value: "Med C", key: "Med C" },
];
export const userOptions = [
  { value: "User A", key: "User A" },
  { value: "User B", key: "User B" },
  { value: "User C", key: "User C" },
];

export const ReportHeader = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFilterForm, setShowFilterForm] = useState(false);
  return (
    <div className=" py-6 px-10 flex flex-col gap-8">
      <div className="flex flex-row justify-between">
        <div className="">
          <div className="flex flex-row gap-1">
            <h1 className="font-bold text-2xl">
              <span className="text-gray-500">Reports</span>
            </h1>
            <div className="flex flex-row items-center gap-1 font-bold text-2xl">
              <VscChevronRight className="text-lg" />
              <p>Sales Report</p>
            </div>
          </div>
          <p className="text-sm">Sales related report of the pharmacy</p>
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
      {/* TODO */}
      <div className="grid grid-cols-3 gap-10">
        <div className="flex flex-col gap-1">
          <h1>View Report</h1>
          <div className="flex flex-row gap-3">
            <p className="text-base font-light cursor-pointer px-2 py-[6px] rounded-lg text-[#1c1c1c]  border border-gray-200 hover:bg-[#283342] hover:text-white">
              7 Days
            </p>
            <p className="text-base font-light cursor-pointer px-2 py-[6px] rounded-lg text-[#1c1c1c] border border-gray-200 hover:bg-[#283342] hover:text-white">
              1 Months
            </p>
            <p
              onClick={() => {
                setShowFilterForm(true);
              }}
              className="text-base font-light cursor-pointer px-2 py-[6px] rounded-lg text-[#1c1c1c] border border-gray-200 hover:bg-[#283342] hover:text-white"
            >
              <span className="flex flex-row gap-2">
                <div className="flex flex-col justify-center">
                  <FiFilter />
                </div>
                Filter
              </span>
            </p>
          </div>
        </div>
        <div>
          <Formik
            initialValues={[]}
            onSubmit={() => {}}
            validationSchema={undefined}
          >
            {(formik) => {
              return (
                <Form>
                  <Select
                    formik={formik}
                    key={"medicineGroup"}
                    label={"Medicine Group"}
                    placeHolder={"Select Medicine Group"}
                    name={"medicineGroup"}
                    options={option}
                  />
                </Form>
              );
            }}
          </Formik>
        </div>
        <div>
          <Formik
            initialValues={[]}
            onSubmit={() => {}}
            validationSchema={undefined}
          >
            {(formik) => {
              return (
                <Form>
                  <Select
                    formik={formik}
                    key={"user"}
                    label={"User Name"}
                    placeHolder={"Select User Name"}
                    name={"user"}
                    options={userOptions}
                  />
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      <CustomModal isOpen={showFilterForm}>
        <FilterReportForm setShowFilterForm={setShowFilterForm} />
      </CustomModal>
    </div>
  );
};
