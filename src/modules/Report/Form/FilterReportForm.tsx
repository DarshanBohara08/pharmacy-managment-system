import { Form, Formik } from "formik";
import React from "react";
import { Button } from "../../../components/ReusableComponent/Button";
import { Input } from "../../../components/ReusableComponent/Form/Input";

export const FilterReportForm = ({
  setShowFilterForm,
}: {
  setShowFilterForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  // TODO
  return (
    <div>
      <Formik
        initialValues={[]}
        onSubmit={() => {}}
        validationSchema={undefined}
      >
        {(formik) => {
          return (
            <Form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  type="date"
                  formik={formik}
                  key={"fromDate"}
                  label={"From Date"}
                  placeHolder={"Select From Date"}
                  name={"fromDate"}
                />
                <Input
                  type="date"
                  formik={formik}
                  key={"toDate"}
                  label={"To Date"}
                  placeHolder={"Select To Date"}
                  name={"toDate"}
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
                    setShowFilterForm(false);
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
