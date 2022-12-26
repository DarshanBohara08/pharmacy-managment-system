import Link from "next/link";
import React, { useState } from "react";
import { sidebar } from "../../constent/sidebar";
import { FaUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogout } from "react-icons/md";
export const Sidebar = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="flex flex-col bg-[#283342] text-white h-full px-[5px]">
      <div className="flex flex-row gap-4 px-4 py-3">
        <FaUserCircle className="text-5xl" />
        <div className="flex flex-col gap-1 py-2">
          <p className="text-xs">Darshan Bohara</p>
          <p className="text-[#C8AD10] font-bold text-xs">Admin</p>
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
                className="text-black cursor-pointer px-4 text-sm "
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
                className=" cursor-pointer px-4 text-sm"
              >
                Logout
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="">
        {sidebar.map((i) => {
          return (
            <div key={i.id} className="outline-none  px-4 py-3">
              <Link href={i.link}>{i.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
