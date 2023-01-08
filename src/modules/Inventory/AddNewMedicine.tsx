import { Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import { z } from "zod";
import { Button } from "../../components/ReusableComponent/Button";
import { Input } from "../../components/ReusableComponent/Form/Input";
import { Select } from "../../components/ReusableComponent/Form/Select";
import { Textarea } from "../../components/ReusableComponent/Form/Textarea";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { IMedicineDetail } from "../../../types/MedicineDetail";
// TODO
const validationSchema = z.object({
  medicineName: z.string({
    required_error: " Required",
  }),
  medicineGroup: z.string({
    required_error: "Required",
  }),
  medicineId: z.number({
    required_error: " Required",
  }),
  medicineQty: z.number({
    required_error: "Required",
  }),
  howToUse: z.string().optional(),
  sideEffect: z.string().optional(),
});

export const AddNewMedicine = ({
  selectedData,
  setShowModal,
}: {
  selectedData?: IMedicineDetail;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const options = [
    { key: "Select Medicine Group", value: "" },
    { key: "Med A", value: "Med A" },
    { key: "Med B", value: "Med B" },
    { key: "Med C", value: "Med C" },
  ];
  const successMessage = () => toast.success("Successfully Submitted");
  console.log("SelectedData", selectedData);
  return (
    <div>
      <Formik
        initialValues={{
          medicineName: selectedData?.medicineName,
          medicineGroup: selectedData?.medicineGroup
            ? {
                key: selectedData?.medicineGroup,
                value: selectedData?.medicineGroup,
              }
            : { key: "", value: "" },
          howToUse: selectedData?.howToUse,
          sideEffect: selectedData?.sideEffect,
          medicineId: selectedData?.medicineId,
          medicineQty: selectedData?.medicineQty,
        }}
        onSubmit={(formik, values) => {
          setShowModal(false);
          successMessage();
          values.resetForm();
          console.log("formik", formik);
        }}
        validationSchema={toFormikValidationSchema(validationSchema)}
        enableReinitialize
      >
        {(formik) => {
          console.log("formik", formik.values);
          return (
            <Form>
              <h1 className="text-center mb-4 text-lg">
                {selectedData?.id
                  ? "Edit Medicine Detail"
                  : "Add Medicine Detail"}
              </h1>
              <div className="flex flex-col gap-4">
                <div className="w-full flex flex-row gap-10">
                  <div className="w-1/2">
                    <Input
                      type="text"
                      formik={formik}
                      name="medicineName"
                      placeHolder="Enter Medicine Name"
                      label="Medicine Name"
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      type="number"
                      formik={formik}
                      name="medicineId"
                      placeHolder="Enter Medicine ID"
                      label="Medicine ID"
                    />
                  </div>
                </div>
                <div className="flex flex-row  gap-10">
                  <div className="w-1/2">
                    <Select
                      formik={formik.values.medicineGroup.value}
                      label="Medicine Group"
                      name="medicineGroup"
                      placeHolder="Select Medicine Group"
                      options={options}
                    />
                  </div>
                  <div className="w-1/2">
                    {" "}
                    <Input
                      type="number"
                      formik={formik}
                      name="medicineQty"
                      placeHolder="Enter Medicine Qty"
                      label="Quantity in Number"
                    />
                  </div>
                </div>
                <Textarea
                  label="How to use"
                  name="howToUse"
                  placeHolder="How to use"
                />
                <Textarea
                  label="Side Effect"
                  name="sideEffect"
                  placeHolder="Side Effect"
                />
              </div>
              <div className="flex flex-row mt-5 justify-between">
                <Button
                  width={true}
                  onClick={() => {
                    console.log("Submtted");
                  }}
                  bgColor="blue"
                  label="Submit"
                  showIcon={false}
                />
                <Button
                  width={true}
                  onClick={() => {
                    setShowModal(false);
                  }}
                  bgColor="red"
                  label="Cancel"
                  showIcon={false}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
