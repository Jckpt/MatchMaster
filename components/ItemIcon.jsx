import React from "react";
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
        <img
          alt=""
          samesite="Strict"
          className={`rounded w-${size / 4} h-${size / 4}`}
          src={`https://cdn.mobalytics.gg/assets/lol/images/dd/game-items/${item}.png`}
          height={size}
          width={size}
        />
      )}
    </>
  );
};

export default ItemIcon;
