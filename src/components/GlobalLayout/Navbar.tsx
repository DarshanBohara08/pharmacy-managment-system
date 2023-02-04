import React from "react";
import { BsSearch } from "react-icons/bs";

export const Navbar = () => {
  const date = new Date();
  let min = date.getMinutes();
  let hrs = date.getHours();
  let currentTime = `${hrs}:${min}`;

  return (
    <div className="flex flex-row w-full">
      <div className="bg-[#F7FAFD] w-full px-10 py-2 2xl:py-3 flex flex-row justify-between">
        <div className="flex flex-col justify-center">
          <h1 className="text-[#1c1c1c] text-center text-4xl font-bold ">
            LOGO
          </h1>
        </div>
        <div className="flex  px-4 justify-between flex-row rounded-md bg-[#EDF1F5] w-[600px]">
          <input
            className="w-full text-lg 2xl:text-2xl bg-transparent outline-none placeholder:font-light"
            type="search"
            placeholder="Search for anything"
          />
          <div className="flex  flex-col justify-center item-center  pt-3">
            <BsSearch className="text-xl  text-gray-400" />
          </div>
        </div>

        <div className=" w-[200px] text-gray-600">
          <div className="flex flex-row gap-2">
            <picture>
              <img
                className="2xl:h-10 2xl:w-10  h-6 w-6"
                src="https://cdn-icons-png.flaticon.com/512/869/869869.png"
                alt="sun"
              />
            </picture>
            <p className="text-[#1c1c1c] text-base 2xl:text-2xl font-light">
              {currentTime > "12" ? "Good Afternoon" : "Good Morning"}
            </p>
          </div>
          <div className="flex flex-row gap-4 justify-center text-sm 2xl:text-lg font-light">
            <p>{date.toDateString()}</p>
            <p>{currentTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
