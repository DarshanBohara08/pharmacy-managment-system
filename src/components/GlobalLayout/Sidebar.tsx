import Link from "next/link";
import React, { useState } from "react";
import { sidebar } from "../../constent/sidebar";
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
import { MenuItem } from "./MenuItem";
import { useRouter } from "next/router";
export const Sidebar = () => {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-[280px] 2xl:w-[400px] flex flex-col bg-[#283342] text-white h-full">
      <div className="flex flex-row gap-5 pl-[15px] py-3">
        <span className="flex flex-col justify-center">
          <FaUserCircle className="text-5xl" />
        </span>
        <div className="flex flex-col gap-1 py-2">
          <p className="text-xs  2xl:text-2xl">Darshan Bohara</p>
          <p className="text-[#C8AD10] font-bold text-xs 2xl:text-2xl">Admin</p>
        </div>
        <BsThreeDotsVertical
          onClick={() => {
            setShowModal(true);
          }}
          className="text-white text-2xl font-light mt-4 cursor-pointer"
        />
      </div>
      {showModal && (
        <div className="relative  h-50">
          <div className="absolute bg-white right-8 -top-3 font-light rounded-sm">
            <div className="px-4 py-2 flex flex-row ">
              <CgProfile className="text-[#1c1c1c] text-lg mt-[2px]" />
              <p
                onClick={() => {
                  setShowModal(false);
                }}
                className="text-black cursor-pointer px-4 text-sm 2xl:text-xl "
              >
                My profile
              </p>
            </div>
            <hr />
            <div className="px-4 py-2 flex flex-row text-red-600">
              <MdOutlineLogout className="text-lg mt-[2px]" />
              <p
                onClick={() => {
                  setShowModal(false);
                }}
                className=" cursor-pointer px-4 text-sm 2xl:text-xl"
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      )}
      <ul className="">
        {sidebar.map((i) => {
          return (
            <>
              <li key={i.id} className="outline-none  text-lg 2xl:text-2xl">
                <MenuItem
                  id={i.id}
                  name={i.name}
                  link={i.link}
                  hasLink={false}
                  subItem={i.subItem}
                />
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
