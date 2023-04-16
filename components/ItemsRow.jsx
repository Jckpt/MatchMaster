import React from "react";
import ItemIcon from "./ItemIcon";
const ItemsRow = ({ finalBuild: { items, trinket }, matchResult, size }) => {
  return (
    <div className="flex flex-row">
      {items.map((item, i) => (
        <ItemIcon item={item} matchResult={matchResult} size={size} key={i} />
      ))}
      <ItemIcon item={trinket} matchResult={matchResult} size={size} />
    </div>
  );
};

export default ItemsRow;
