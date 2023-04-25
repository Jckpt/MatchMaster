import React from "react";

const DamageBar = ({ damage, highestDamage, accent }) => {
  const bgColor =
    accent == "WON"
      ? "bg-blue-600"
      : accent == "LOST"
      ? "bg-red-600"
      : "bg-slate-400";
  return (
    <div className={`rounded-full w-28 h-2 bg-stone-300 bg-opacity-30 flex`}>
      <div
        style={{
          width: `${(damage / highestDamage) * 100}%`,
        }}
        className={`h-full bg-opacity-80 rounded-full ${bgColor}`}
      ></div>
    </div>
  );
};

export default DamageBar;
