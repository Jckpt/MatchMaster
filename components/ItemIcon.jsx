import React from "react";
import Image from "next/image";
const ItemIcon = ({ item, matchResult, size }) => {
  return (
    <>
      {item === 0 ? (
        <div
          className={`w-${size / 4} h-${size / 4} rounded bg-opacity-40 ${
            matchResult === "WON" ? "bg-blue-500" : "bg-red-500"
          }`}
        ></div>
      ) : (
        <Image
          alt=""
          className="rounded"
          samesite="Strict"
          src={`https://cdn.mobalytics.gg/assets/lol/images/dd/game-items/${item}.png`}
          height={size}
          width={size}
        />
      )}
    </>
  );
};

export default ItemIcon;
