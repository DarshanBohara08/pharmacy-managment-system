import { Form, Formik } from "formik";
import React from "react";
import { z } from "zod";
import { Button } from "../../components/ReusableComponent/Button";
import { Input } from "../../components/ReusableComponent/Form/Input";

const validationSchema = z.object({
  medicineName: z.string({
    required_error: " Required",
  }),
  noOfMedicine: z.number({
    required_error: "Required",
  }),
});
export const AddMedicineInGroup = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <Formik
        initialValues={{
          medicineName: "",
          noOfMedicine: null,
        }}
        onSubmit={(values) => console.log("Submitted", values)}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <h1 className="text-center mb-4 text-lg">Add Medicine Detail</h1>
              <Input
                formik={formik}
                type="text"
                label="Medicine Name"
                placeHolder={"Enter Medicine Name"}
                name={"medicineName"}
              />
              <Input
                formik={formik}
                type="number"
                label="No of Medicine"
                placeHolder={"Enter No of Medicine "}
                name={"medicineName"}
              />
              <div className="flex flex-row mt-5 justify-between">
                <Button
                  width={true}
                  onClick={() => {
                    console.log("Submtted");
                  }}
                  bgColor="blue"
                  label={"Submit"}
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
