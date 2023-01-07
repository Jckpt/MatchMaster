import React from "react";

const ItemIcon = ({ item }) => {
  return (
    <>
      {item === null ? (
        <div className="border-dashed border-2 border-sky-500 w-12 h-12"></div>
      ) : (
        <img
          alt=""
          samesite="Strict"
          src={`https://cdn.mobalytics.gg/assets/lol/images/dd/game-items/${item}.png`}
        />
      )}
    </>
  );
};

export default ItemIcon;
