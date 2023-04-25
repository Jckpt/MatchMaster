import React from "react";
import { getChampionIcon } from "../utils/utilsFrontend";

const ChampionIcon = ({ matchResult, championId, size, championObject }) => {
  const [championName, version] = getChampionIcon(championObject);
  return (
    <div className="avatar">
      <div
        className={`w-${size / 4} h-${size / 4} rounded-full  border-2 ${
          matchResult === "WON" ? "border-blue-500" : "border-red-500"
        } mr-2`}
      >
        {championName === undefined ? null : (
          <img
            alt=""
            samesite="Strict"
            className={`scale-115 w-${size / 4} h-${size / 4}`}
            width={size}
            height={size}
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`}
          />
        )}
      </div>
    </div>
  );
};

export default ChampionIcon;
