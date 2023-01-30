import React from "react";
import { OrderReport } from "../../modules/Report/OrderReport";
import { ReportHeader } from "../../modules/Report/ReportHeader";
import { SalesReportChart } from "../../modules/Report/SalesReportChart";

const SalesReport = () => {
  return (
    <div className="w-full">
      <ReportHeader />
      <div className="py-6 px-10 flex flex-row w-full">
        <div className="w-1/2">
          <SalesReportChart />
        </div>
        <OrderReport />
      </div>
    </div>
  );
};

export default SalesReport;
