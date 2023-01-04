import { Form, Formik } from "formik";
import React from "react";
import { toast } from "react-toastify";
import { z } from "zod";
import { Button } from "../../components/ReusableComponent/Button";
import { Input } from "../../components/ReusableComponent/Form/Input";
import { Select } from "../../components/ReusableComponent/Form/Select";
import { Textarea } from "../../components/ReusableComponent/Form/Textarea";

// TODO
// const validationSchema = z
//   .object({
//     medicineName: z.string(),
//     medicineGroup: z.string(),
//     howToUse: z.string(),
//     sideEffect: z.string(),
//   })
//   .partial();

export const AddNewMedicine = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const options = [
    { key: "Select Medicine Group", value: "" },
    { key: "Med A", value: "a" },
    { key: "Med B", value: "b" },
    { key: "Med C", value: "c" },
  ];
  const successMessage = () => toast.success("Successfully Submitted");
  return (
    <div>
      <Formik
        initialValues={{
          medicineName: "",
          medicineGroup: "",
          howToUse: "",
          sideEffect: "",
        }}
        onSubmit={(formik, values) => {
          console.log("Submitted", values);
          setShowModal(false);
          successMessage();
        }}
        validationSchema={undefined}
      >
        {(formik) => {
          return (
            <Form>
              <h1 className="text-center mb-4 text-lg">Add Medicine Detail</h1>
              <div className="flex flex-col gap-4">
                <Input
                  name="medicineName"
                  placeHolder="Enter Medicine Name"
                  label="Medicine Name"
                />
                <Select
                  label="Medicine Group"
                  name="medicineGroup"
                  placeHolder="Select Medicine Group"
                  options={options}
                />
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
