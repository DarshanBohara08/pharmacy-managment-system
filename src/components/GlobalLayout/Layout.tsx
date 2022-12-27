import React from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-row w-full h-screen">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
