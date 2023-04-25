import React from "react";
const Runes = ({ IDs, subStyle, size }) => {
  return (
    <div className="flex flex-col">
      <div className={`avatar w-${size / 4} h-${size / 4}`}>
        <img
          alt=""
          src={`https://cdn.mobalytics.gg/assets/lol/images/perks/${IDs[0]}.png`}
          height={size}
          width={size}
        />
      </div>
      <div className={`avatar w-${size / 4} h-${size / 4}`}>
        <img
          alt=""
          src={`https://cdn.mobalytics.gg/assets/lol/images/perks/${subStyle}.png`}
          height={size}
          width={size}
        />
      </div>
    </div>
  );
};

export default Runes;
