import React from "react";
import { getChampionIcon } from "../utils/getIcons";

const ChampionIcon = ({ matchResult, championId, size, championNames }) => {
  const [championName, version] = getChampionIcon(championNames?.subject);
  return (
    <div className="avatar">
      <div
        className={`w-${size / 4} h-${size / 4} rounded-full  border-2 ${
          matchResult === "WON" ? "border-blue-500" : "border-red-500"
        } mr-2`}
      >
        <img
          alt=""
          samesite="Strict"
          className={`scale-115 w-${size / 4} h-${size / 4}`}
          src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`}
        />
      </div>
    </div>
  );
};

export default ChampionIcon;
