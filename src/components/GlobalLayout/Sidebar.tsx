import Link from "next/link";
import React from "react";
import { sidebar } from "../../constent/sidebar";

export const Sidebar = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-[#283342] text-white h-[1080px]">
        {sidebar.map((i) => {
          return (
            <div key={i.id} className=" px-16 py-3">
              <Link href={i.link}>{i.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
