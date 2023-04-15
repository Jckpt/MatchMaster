import React from "react";
import Image from "next/image";
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
        <Image
          alt=""
          samesite="Strict"
          className={`scale-115 w-${size / 4} h-${size / 4}`}
          src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`}
          height={size}
          width={size}
        />
      </div>
    </div>
  );
};

export default ChampionIcon;
