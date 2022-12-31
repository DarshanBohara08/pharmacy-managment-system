import Link from "next/link";
import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { ICard } from "../../../types/Card";

export const Card = ({
  detailLabel,
  heading,
  isAmount = false,
  icon,
  name,
  link,
  ...props
}: ICard) => {
  let cardClass = `bg-white w-[230px] pt-4 flex flex-col justify-center items-center `;
  let cardFooterBg = ``;
  if (props.borderColor === "red") {
    cardClass += `border border-red-600`;
    cardFooterBg += `red-600`;
  }
  if (props.borderColor === "green") {
    cardClass += `border border-green-600`;
    cardFooterBg += `green-600`;
  }
  if (props.borderColor === "yellow") {
    cardClass += `border border-yellow-600`;
    cardFooterBg += `yellow-600`;
  }
  if (props.borderColor === "blue") {
    cardClass += `border border-blue-600`;
    cardFooterBg += `blue-600`;
  }
  let headingLevel: string = "";
  if (isAmount === true) {
    headingLevel += "Rs " + heading;
  } else {
    headingLevel = heading;
  }
  return (
    <div className={`${cardClass}`}>
      <picture>
        <img className=" h-16 w-16" src={icon} alt="icon" />
      </picture>
      <p className="pt-3  font-bold text-xl">{headingLevel}</p>
      <p className="pb-4 font-medium capitalize">{name}</p>
      <Link
        className={` text-center border-t bg-${cardFooterBg} border-${cardFooterBg} w-full py-3`}
        href={link}
      >
        <div className="flex text-sm flex-row capitalize items-center font-light justify-center ">
          {detailLabel}
          <VscChevronRight className=" ml-2 font-light text-xl text-gray-600" />
          <VscChevronRight className="text-gray-600 font-light text-xl" />
        </div>
      </Link>
    </div>
  );
};
