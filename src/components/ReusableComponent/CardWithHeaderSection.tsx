import Link from "next/link";
import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { ICardWithHeaderSection } from "../../../types/CardWithHeaderSection";

export const CardWithHeaderSection = ({ ...props }: ICardWithHeaderSection) => {
  return (
    <div className="border border-gray-400 w-full capitalize ">
      <div className="border-b border-gray-400 flex flex-row justify-between items-center py-2 px-8">
        <h1 className="font-medium">{props.name}</h1>
        <Link className="font-light text-xs" href={props.link}>
          <div className="flex flex-row">
            <p>{props.linkLabel}</p>
            <div className="flex flex-row items-center justify-center">
              <VscChevronRight className=" ml-2 font-light text-sm text-gray-600" />
              <VscChevronRight className="text-gray-600 font-light text-sm" />
            </div>
          </div>
        </Link>
      </div>
      <div className="flex flex-row justify-between py-6 px-8">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-xl text-start">{props.answerOne}</p>
          <p className="text-base">{props.questionOne}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-xl text-start">{props.answerTwo}</p>
          <p className="text-base">{props.questionTwo}</p>
        </div>
      </div>
    </div>
  );
};
