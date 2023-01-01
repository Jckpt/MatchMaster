import React from "react";

const ItemIcon = ({ item }) => {
  return (
    <>
      {item === null ? (
        <div className="border-dashed border-2 border-sky-500 w-12 h-12"></div>
      ) : (
        <img
          alt=""
          samesite="None"
          src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/item/${item}.png`}
        />
      )}
    </>
  );
};

export default ItemIcon;
