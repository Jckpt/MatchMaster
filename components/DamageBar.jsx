import React from "react";

const DamageBar = ({ damage, highestDamage, accent }) => {
  const bgColor =
    accent == "WON"
      ? "bg-blue-500"
      : accent == "LOST"
      ? "bg-red-500"
      : "bg-slate-400";
  return (
    <div className={`rounded-full w-28 h-2 bg-slate-500 bg-opacity-30 flex`}>
      <div
        style={{
          width: `${(damage / highestDamage) * 100}%`,
        }}
        className={`h-full rounded-full ${bgColor}`}
      ></div>
    </div>
  );
};

export default DamageBar;
