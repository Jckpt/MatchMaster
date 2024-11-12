import React from "react";
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
            src={`https://blitz-cdn.blitz.gg/blitz/lol/summoner-spells/${spell}.webp`}
            style={{ height: size, width: size }}
            className="rounded m-0.5"
          />
        )}
      </>
    </div>
  );
};

export default Summoners;
