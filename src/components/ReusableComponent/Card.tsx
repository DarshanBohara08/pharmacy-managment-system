import Link from "next/link";
import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { ICard } from "../../../types/Card";

export const Card = ({
  detailLabel,
  heading,
  icon,
  name,
  link,
  ...props
}: ICard) => {
  let cardClass = `bg-white w-full pt-4 flex flex-col justify-center items-center `;
  let cardFooterBg = ``;
  if (props.borderColor === "red") {
    cardClass += `border border-red-600`;
    cardFooterBg += `red-600`;
  }
  if (props.borderColor === "green") {
    cardClass += `border border-green-600`;
    cardFooterBg += `green-600`;
  }

  if (props.borderColor === "blue") {
    cardClass += `border border-blue-600`;
    cardFooterBg += `blue-600`;
  }
  if (props.borderColor === "yellow") {
    cardClass += `border border-yellow-600`;
    cardFooterBg += `yellow-600`;
  }
  return (
    <div className={`${cardClass}`}>
      <picture>
        <img className=" h-16 w-16 2xl:w-20 2xl:h-20" src={icon} alt="icon" />
      </picture>
      <p className="pt-5   font-bold  text-xl 2xl:text-3xl">{heading}</p>
      <p className="pb-4 font-medium capitalize 2xl:text-2xl">{name}</p>
      <Link
        className={` text-center border-t border-${cardFooterBg} w-full py-3`}
        href={link}
      >
        <div className="flex text-sm 2xl:text-lg flex-row capitalize items-center font-light justify-center ">
          <p>{detailLabel}</p>
          <VscChevronRight className=" ml-2 font-light text-xl 2xl:text-3xl text-gray-600" />
          <VscChevronRight className="text-gray-600 font-light text-xl 2xl:text-3xl" />
        </div>
      </Link>
    </div>
  );
};
