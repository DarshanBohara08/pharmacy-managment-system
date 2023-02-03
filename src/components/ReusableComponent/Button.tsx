import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IButton } from "../../../types/Button";

export const Button = ({ ...props }: IButton) => {
  let buttonClass = `${
    props.width ? "w-60" : "w-auto"
  } px-8 w- py-2 text-white `;
  if (props.bgColor === "red") {
    buttonClass += `bg-red-500 `;
  }
  if (props.bgColor === "blue") {
    buttonClass += "w-60 bg-[#03A9F5]";
  }
  if (props.bgColor === "redWhite") {
    buttonClass += "w-60 bg-[#ffffff] text-red-500 border border-red-500";
  }
  let classes = buttonClass;
  return (
    <div className="">
      <button onClick={props.onClick} className={`${classes}`} type="submit">
        <div className="flex flex-row justify-center items-center gap-2">
          {props.showIcon && (
            <picture className="">
              <img className="w-4 h-4" src={props.icon} alt="icon" />
            </picture>
          )}
          <p className="font-medium 2xl:text-2xl text-lg ">{props.label}</p>
        </div>
      </button>
    </div>
  );
};
