import { ErrorMessage, Field } from "formik";
import React from "react";
import { IForm } from "../../../../types/Form";

export const Select = ({ ...props }: IForm) => {
  return (
    <div className="flex flex-col gap-2 text-[#1c1c1c] font-light text-base 2xl:text-2xl">
      <label>{props.label}</label>
      <Field
        as="select"
        values={props.formik[props.name]}
        name={props.name}
        placeholder={props.placeHolder}
        className="pl-3 py-2 bg-gray-100 border border-gray-300 rounded-md w-full outline-none"
      >
        {props.options?.map((i) => {
          return (
            <option key={i.value} value={i.value}>
              {i.key}
            </option>
          );
        })}
      </Field>
      <div className=" h-2">
        <ErrorMessage
          name={props.name}
          render={(err) => <span className="text-red-500 text-xs">{err}</span>}
        />
      </div>
    </div>
  );
};
