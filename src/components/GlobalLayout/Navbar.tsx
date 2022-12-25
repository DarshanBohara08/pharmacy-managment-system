import React from "react";

export const Navbar = () => {
  return (
    <div className="flex flex-row w-full bg-red-600">
      <div className="bg-[#1D242E] px-16 w-[251px] py-3">
        <h1 className="text-white">Logo</h1>
      </div>
      <div className="bg-[#F7FAFD] w-full px-10 py-1 flex flex-row justify-between">
        <div className="bg-[#EDF1F5] flex flex-row w-[400px]">
          <input
            className="px-8 py-2 bg-[#EDF1F5]"
            type="search"
            placeholder="Search for anything"
          />
          <p>Search</p>
        </div>

        <div className="bg-red-600">Language</div>
        <div className="bg-green-600">
          <p>Good Morning</p>
          <div className="flex flex-row">
            <p>Date</p>
            <p>Time</p>
          </div>
        </div>
      </div>
    </div>
  );
};
