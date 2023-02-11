import React from "react";
import { IReportCardData } from "../../../types/ReportCardData";
import { Card } from "../../components/ReusableComponent/Card";
import { ReportCardData } from "../../constent/ReportCardData";

const Report = () => {
  return (
    <div className="w-full">
      <div className=" py-6 px-10 flex flex-col gap-8">
        {/* <div>
          <h1 className="font-bold text-2xl">Report</h1>
          <p className="text-sm">Overal report related to the pharmacy </p>
        </div>
        <div className="flex flex-row gap-10">
          {ReportCardData.map((i: IReportCardData) => {
            return (
              <div key={i.id}>
                <Card
                  detailLabel={i.detailLabel}
                  icon={i.icon}
                  heading={i.heading}
                  name={i.name}
                  link={i.link}
                  borderColor={i.borderColor}
                />
              </div>
            );
          })}
        </div> */}
        <p>Project in Progress</p>
      </div>
    </div>
  );
};

export default Report;
