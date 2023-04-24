import React from "react";
import ItemIcon from "./ItemIcon";
const ItemsRow = ({ finalBuild: { items, trinket }, matchResult, size }) => {
  return (
    <div className="flex flex-row justify-center w-64">
      {items.map((item, i) => (
        <span className="mr-0.5" key={i}>
          <ItemIcon item={item} matchResult={matchResult} size={size} />
        </span>
      ))}
      <ItemIcon item={trinket} matchResult={matchResult} size={size} />
    </div>
  );
};

export default ItemsRow;
