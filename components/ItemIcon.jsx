import React from "react";
import Image from "next/image";
const ItemIcon = ({ item }) => {
  return (
    <>
      {item === null ? (
        <div className="border-dashed border-2 border-gray-500 w-8 h-8"></div>
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
