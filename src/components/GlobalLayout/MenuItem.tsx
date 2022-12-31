import Link from "next/link";
import React, { useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { DropDown } from "./DropDown";

export interface ISubLink {
  id: number;
  link: string;
  name: string;
}
export interface ILink {
  id: number;
  name: string;
  link: string;
  hasLink: boolean;
  subItem?: ISubLink[];
}
export const MenuItem = ({ ...props }: ILink) => {
  const [dropdown, setDropdown] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <li>
      {props.subItem ? (
        <>
          <Link href={props.link}>
            <div className="px-4 py-3 flex flex-row items-center justify-between">
              <p className="">{props.name}</p>
              {dropdown == false && (
                <VscChevronDown
                  className="text-base"
                  onClick={() => {
                    setDropdown(true);
                  }}
                />
              )}
              {dropdown == true && (
                <VscChevronUp
                  className="text-base"
                  onClick={() => {
                    setDropdown(false);
                  }}
                />
              )}
            </div>
          </Link>
          <DropDown
            setDropdown={setDropdown}
            dropdown={dropdown}
            subItem={props.subItem}
          />
        </>
      ) : (
        <>
          <Link href={props.link}>
            <div className="px-4 py-3">
              <p
                onClick={() => {
                  setIsActive(true);
                }}
              >
                {props.name}
              </p>
            </div>
          </Link>
        </>
      )}
    </li>
  );
};
