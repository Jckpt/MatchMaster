import React from "react";
import ItemIcon from "./ItemIcon";
const ItemsGrid = ({ finalBuild: { items, trinket }, matchResult }) => {
  return (
    <div className="flex flex-row items-center gap-1">
      <div className="grid-cols-3 grid gap-1 w-30">
        {items?.map((item, i) => (
          <div className="avatar" key={i}>
            <div className="w-8 h-8 rounded">
              <ItemIcon item={item} matchResult={matchResult} />
            </div>
          </div>
        ))}
      </div>
      <div className="avatar hidden md:flex">
        <div className="w-8 h-8 rounded">
          <ItemIcon item={trinket} matchResult={matchResult} />
        </div>
      </div>
    </div>
  );
};

export default ItemsGrid;
