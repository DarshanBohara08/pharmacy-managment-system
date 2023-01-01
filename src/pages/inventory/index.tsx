import React from "react";
import { Button } from "../../components/ReusableComponent/Button";
import { Card } from "../../components/ReusableComponent/Card";
import { InventoryCardData } from "../../constent/InventoryCardData";

const Index = () => {
  return (
    <div className="bg-[#EDF1F5] w-full  text-[#1c1c1c]">
      <div className=" py-6 px-10">
        <div className="flex flex-row justify-between mb-8">
          <div>
            <h1 className="font-bold text-2xl">Inventory</h1>
            <p className="text-sm">List of medicines available for sale</p>
          </div>
          <div>
            <Button
              onClick={() => {
                console.log("hello");
              }}
              bgColor="red"
              label="Add New Item"
              showIcon={true}
              icon="/assets/sign.png"
            />
          </div>
        </div>
        <div className="grid grid-cols-3">
          {InventoryCardData.map((i) => {
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
        </div>
      </div>
    </div>
  );
};

export default Index;
