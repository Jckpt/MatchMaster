import React from "react";
const Runes = ({ IDs, subStyle, size }) => {
  return (
    <div className="flex flex-col">
      <div className={`avatar m-0.5`} style={{ height: size, width: size }}>
        <img
          alt=""
          src={`https://blitz-cdn.blitz.gg/runes/all/${IDs[0]}.webp`}
          height={size}
          width={size}
        />
      </div>
      <div className={`avatar m-0.5`} style={{ height: size, width: size }}>
        <img
          alt=""
          src={`https://blitz-cdn.blitz.gg/runes/all/${subStyle}.webp`}
          height={size}
          width={size}
        />
      </div>
    </div>
  );
};

export default Runes;
