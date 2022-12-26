import React from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-row h-screen">
        <Sidebar />
        <div className="px-10 py-4">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
