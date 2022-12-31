import moment from "moment";
import Link from "next/link";
import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import { ICard } from "../../../types/Card";

export const RevenueCard = ({ ...props }: ICard) => {
  const { detailLabel, heading, icon, link, name } = props;
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  return (
    <div>
      <div className="bg-white w-[230px] pt-4 flex flex-col justify-center items-center border border-yellow-600">
        <picture>
          <img className=" h-16 w-16" src={icon} alt="icon" />
        </picture>
        <p className="pt-5   font-bold text-xl">{heading}</p>
        <div>
          <p className="pb-4 font-medium capitalize">{name}</p>
          {/* <div>
            <form className="w-[200px] bg-red-600">
              <input type="month" value={`${year}-${month}`} />
            </form>
          </div> */}
        </div>
        <Link
          className={` text-center border-t border-yellow-600 w-full py-3`}
          href={link}
        >
          <div className="flex text-sm flex-row capitalize items-center font-light justify-center ">
            {detailLabel}
            <VscChevronRight className=" ml-2 font-light text-xl text-gray-600" />
            <VscChevronRight className="text-gray-600 font-light text-xl" />
          </div>
        </Link>
      </div>
    </div>
  );
};
