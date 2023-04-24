import React from "react";

const DamageBar = ({ damage, highestDamage, accent }) => {
  return (
    <div className="w-28 h-2 bg-slate-500 bg-opacity-30 flex">
      <div
        style={{
          width: `${(damage / highestDamage) * 100}%`,
        }}
        className="h-full bg-black"
      ></div>
    </div>
  );
};

export default DamageBar;
