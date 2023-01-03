import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IButton } from "../../../types/Button";

export const Button = ({ ...props }: IButton) => {
  let buttonClass = `${props.width ? "w-60" : "w-auto"} px-8 w- py-2 `;
  if (props.bgColor === "red") {
    buttonClass += `bg-red-500`;
  }
  if (props.bgColor === "blue") {
    buttonClass += "w-60 bg-[#03A9F5]";
  }
  let classes = buttonClass;
  return (
    <div className="">
      <button onClick={props.onClick} className={`${classes}`} type="submit">
        <div className="flex flex-row justify-center items-center gap-2">
          {props.showIcon && (
            <picture>
              <img className="w-4 h-4" src={props.icon} alt="icon" />
            </picture>
          )}
          <p className="font-medium text-white">{props.label}</p>
        </div>
      </button>
    </div>
  );
};
