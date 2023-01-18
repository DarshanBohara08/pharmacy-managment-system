import { ErrorMessage, Field } from "formik";
import React from "react";
import { IForm } from "../../../../types/Form";

export const Input = ({ ...props }: IForm) => {
  return (
    <>
      <div className="flex flex-col gap-2 text-[#1c1c1c] font-light text-sm">
        <label>{props.label}</label>
        <Field
          name={props.name}
          placeholder={props.placeHolder}
          className="pl-3 py-2 bg-gray-100 border border-gray-300 rounded-md w-full"
          type={props.type}
        />
        <ErrorMessage
          name={props.name}
          render={(err) => <span className="text-red-500 text-xs">{err}</span>}
        />
      </div>
    </>
  );
};
export const InputDate = ({ ...props }: IForm) => {
  return (
    <>
      <div className="flex flex-col gap-2 text-[#1c1c1c] font-light text-sm">
        <label>{props.label}</label>
        <input
          name={props.name}
          placeholder={props.placeHolder}
          className="pl-3 py-2 bg-gray-100 border border-gray-300 rounded-md w-full"
          type={props.type}
        />
        <ErrorMessage
          name={props.name}
          render={(err) => <span className="text-red-500 text-xs">{err}</span>}
        />
      </div>
    </>
  );
};
