import React from "react";
import { BsSearch } from "react-icons/bs";
export const Navbar = () => {
  const date = new Date();
  let min = date.getMinutes();
  let hrs = date.getHours();
  let currentTime = `${hrs}:${min}`;

  return (
    <div className="flex flex-row w-full">
      <div className="bg-[#1D242E] w-[284px] py-5">
        <h1 className="text-white text-center font-bold ">PMS</h1>
      </div>
      <div className="bg-[#F7FAFD] w-full px-10 py-1 flex flex-row justify-between">
        <div className="flex  px-4 justify-between flex-row rounded-md bg-[#EDF1F5] w-[400px]">
          <input
            className="w-full py-2 bg-transparent outline-none placeholder:font-light placeholder:text-base"
            type="search"
            placeholder="Search for anything"
          />
          <div className="flex  flex-row justify-end  pt-3">
            <BsSearch className="text-xl  text-gray-400" />
          </div>
        </div>

        <div className=" w-[200px] text-gray-600">
          <div className="flex flex-row gap-2">
            <picture>
              <img
                className="h-6 w-6"
                src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                alt="sun"
              />
            </picture>
            <p className="text-[#1c1c1c] text-base font-light">Good Morning</p>
          </div>
          <div className="flex flex-row gap-4 text-sm font-light">
            <p>{date.toDateString()}</p>
            <p>{currentTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
