import React from "react";
import Image from "next/image";
const ItemIcon = ({ item, matchResult }) => {
  return (
    <>
      {item === 0 ? (
        <div
          className={`w-8 h-8 bg-opacity-40 ${
            matchResult === "WON" ? "bg-blue-500" : "bg-red-500"
          }`}
        ></div>
      ) : (
        <Image
          alt=""
          samesite="Strict"
          src={`https://cdn.mobalytics.gg/assets/lol/images/dd/game-items/${item}.png`}
          height={32}
          width={32}
        />
      )}
    </>
  );
};

export default ItemIcon;
