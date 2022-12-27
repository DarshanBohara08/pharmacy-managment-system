import Link from "next/link";
import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { ICard } from "../../../types/Card";

export const Card = ({
  detailLabel,
  heading,
  isAmount = false,
  icon,
  name,
  link,
  borderColor,
}: ICard) => {
  return (
    <div
      className={`bg-white w-[230px] pt-4 flex flex-col justify-center items-center border border-green-600`}
    >
      <picture>
        <img className=" h-16 w-16" src={icon} alt="icon" />
      </picture>
      <p className="pt-3  font-bold text-xl">{heading}</p>
      <p className="pb-4">{name}</p>
      <Link
        className={` text-center border-t  border-green-600 w-full py-3`}
        href={link}
      >
        <div className="flex flex-row items-center justify-center">
          {detailLabel}
          <FaGreaterThan className="ml-4 font-light text-sm text-gray-600" />
          <FaGreaterThan className="text-gray-600 font-light text-sm" />
        </div>
      </Link>
    </div>
  );
};
