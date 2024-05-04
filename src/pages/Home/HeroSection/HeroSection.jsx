import React from "react";
import NumCard from "../../../utils/NumCard";

const HeroSection = () => {
  return (
    <div className=" bg-orange-400">
      <div className="max-w-screen-xl mx-auto py-36 px-12">
        <h2 className="font-bebas text-6xl text-center pb-8">
          Short Summary of Your Current Inventory
        </h2>
        <div className="grid grid-cols-4 gap-14 items-center">
          <NumCard
            title="Total Investments"
            number={25000}
            symbol="TK"
            shadow="shadow-neuOr"
          />
          <NumCard
            title="Total Products"
            number={10000}
            shadow="shadow-neuOr"
          />
          <NumCard
            title="Total Sale"
            number={250000}
            symbol="TK"
            shadow="shadow-neuOr"
          />
          <NumCard
            title="Total Cost"
            number={25000}
            symbol="TK"
            shadow="shadow-neuOr"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
