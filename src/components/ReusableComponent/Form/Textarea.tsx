import { Field } from "formik";
import React from "react";
import { IForm } from "../../../../types/Form";

export const Textarea = ({ ...props }: IForm) => {
  return (
    <div className="flex flex-col gap-2 text-[#1c1c1c] font-light text-base 2xl:text-2xl">
      <label>{props.label}</label>
      <Field
        as="textarea"
        name={props.name}
        placeholder={props.placeHolder}
        className="pl-3 py-2 bg-gray-100 border border-gray-300 rounded-md w-full h-32"
      />
    </div>
  );
};
