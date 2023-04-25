import React from "react";
import Image from "next/image";
const Summoners = ({ spell, size }) => {
  return (
    <div className="avatar rounded">
      <>
        {spell === null ? (
          <div className="border-dashed border-2 border-gray-500 w-6 h-6"></div>
        ) : (
          <img
            alt=""
            samesite="Strict"
            src={`https://cdn.mobalytics.gg/assets/lol/images/dd/summoner-spells/${spell}.png`}
            style={{ height: size, width: size }}
            className="rounded m-0.5"
          />
        )}
      </>
    </div>
  );
};

export default Summoners;
