import Link from "next/link";
import React from "react";
import { ISubLink } from "./MenuItem";

export const DropDown = ({
  subItem,
  dropdown,
  setDropdown,
}: {
  subItem: any;
  dropdown: boolean;
  setDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="bg-[#1D242E] ">
      {subItem.map((i: ISubLink) => {
        return (
          <li
            className={`${dropdown ? "block py-2" : "hidden pb-0"} `}
            key={i.id}
          >
            <Link className="text-start px-4 py-3" href={i.link}>
              {i.name}
            </Link>
          </li>
        );
      })}
    </div>
  );
};
