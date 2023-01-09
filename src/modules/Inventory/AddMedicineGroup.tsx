import { Form, Formik } from "formik";
import React from "react";
import { Button } from "../../components/ReusableComponent/Button";
import { Input } from "../../components/ReusableComponent/Form/Input";

export const AddMedicineGroup = ({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <Formik
        initialValues={[]}
        enableReinitialize
        validationSchema={[]}
        onSubmit={() => console.log("Submitted")}
      >
        {(formik) => {
          return (
            <Form>
              <h1 className="text-center mb-4 text-lg">Add Medicine Group</h1>
              <Input
                name="medicineGroup"
                placeHolder="Enter Medicine Group"
                formik={formik}
                type="text"
                label="Medicine Group"
              />
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
