import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IButton } from "../../../types/Button";

export const Button = ({ ...props }: IButton) => {
  let buttonClass = `w-auto px-8 py-2 `;
  if (props.bgColor === "red") {
    buttonClass += "bg-red-500";
  }
  if (props.bgColor === "blue") {
    buttonClass += "bg-[#03A9F5]";
  }
  let classes = buttonClass;
  return (
    <div>
      <button onClick={props.onClick} className={`${classes}`} type="submit">
        <div className="flex flex-row items-center gap-2">
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
