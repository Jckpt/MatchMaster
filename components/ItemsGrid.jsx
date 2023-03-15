import React from "react";
import ItemIcon from "./ItemIcon";
import { getItems } from "../utils/itemFunctions";
const ItemsGrid = ({ finalBuild }) => {
  const [items, trinket] = getItems(finalBuild);
  return (
    <div className="flex flex-row items-center gap-1">
      <div className="grid-cols-3 grid gap-1 w-30">
        {items.map((item, i) => (
          <div className="avatar" key={i}>
            <div className="w-8 h-8 rounded">
              <ItemIcon item={item} />
            </div>
          </div>
        ))}
      </div>
      <div className="avatar">
        <div className="w-8 h-8 rounded mr-3">
          <ItemIcon item={trinket} />
        </div>
      </div>
    </div>
  );
};

export default ItemsGrid;