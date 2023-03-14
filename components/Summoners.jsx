import React from "react";
import Image from "next/image";
const Summoners = ({ spell }) => {
  return (
    <div className="avatar">
      <div className="w-8 h-8 rounded">
        <>
          {spell === null ? (
            <div className="border-dashed border-2 border-gray-500 w-8 h-8"></div>
          ) : (
            <Image
              alt=""
              samesite="Strict"
              src={`https://cdn.mobalytics.gg/assets/lol/images/dd/summoner-spells/${spell}.png`}
              height={32}
              width={32}
            />
          )}
        </>
      </div>
    </div>
  );
};

export default Summoners;
