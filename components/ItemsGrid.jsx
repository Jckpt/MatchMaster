import React from "react";
import ItemIcon from "./ItemIcon";
const ItemsGrid = ({ finalBuild: { items, trinket }, matchResult, size }) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <div className="grid-cols-3 grid gap-1 w-30">
        {items?.map((item, i) => (
          <div className={`avatar w-${size / 4} h-${size / 4}`} key={i}>
            <ItemIcon item={item} matchResult={matchResult} size={size} />
          </div>
        ))}
      </div>
      <div className={`avatar hidden md:flex w-${size / 4} h-${size / 4}`}>
        <ItemIcon item={trinket} matchResult={matchResult} size={size} />
      </div>
    </div>
  );
};

export default ItemsGrid;
