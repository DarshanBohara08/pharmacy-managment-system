import Link from "next/link";
import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { ICardWithHeaderSection } from "../../../types/CardWithHeaderSection";

export const ReportSection = ({ ...props }: ICardWithHeaderSection) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  return (
    <div>
      {" "}
      <div className="border border-gray-400 w-full capitalize ">
        <div className="border-b border-gray-400 flex flex-row justify-between items-center py-2 px-8">
          <h1 className="font-medium text-lg">{props.name}</h1>
          <div className="flex flex-row ">
            <form className=" font-light text-xs">
              <input
                className="outline-none"
                type="month"
                value={`${year}-${month}`}
              />
            </form>
          </div>
        </div>
        <div className="flex flex-row justify-between py-6 px-8">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xl text-start">
              {props.answerOne}
            </p>
            <p className="text-base">{props.questionOne}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-xl text-start">
              {props.answerTwo}
            </p>
            <p className="text-base">{props.questionTwo}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
