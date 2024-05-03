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
      className={`rounded-md flex flex-col justify-center items-center space-y-3 shadow-neuOr p-8 ${className}`}
    >
      <h4 className="font-bebas text-3xl text-center">{title}</h4>
      <span className="font-bebas text-5xl">
        <CountUp end={number} className="font-bebas" />
        {symbol}
      </span>
    </div>
  );
};

export default NumCard;
