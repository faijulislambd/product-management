import React from "react";
import CountUp from "react-countup";

const NumCard = ({
  title = "Title",
  number = 0,
  className = "",
  symbol = "",
}) => {
  return (
    <div
      className={`rounded-md flex flex-col justify-center items-center space-y-3 shadow-xl p-8 ${className} bg-orange-500/75`}
    >
      <h4 className="font-freeman text-2xl text-center">{title}</h4>
      <span className="font-freeman text-5xl">
        <CountUp end={number} className="font-freeman" />
        {symbol}
      </span>
    </div>
  );
};

export default NumCard;
