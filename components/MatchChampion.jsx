import React from "react";
import Image from "next/image";
import { getChampionName } from "../utils/getChampionName";
const MatchChampion = async ({ matchResult, championId }) => {
  const slug = await getChampionName(championId);
  return (
    <div className="avatar">
      <div
        className={`w-12 h-12 rounded-full border-2 ${
          matchResult === "WON" ? "border-blue-500" : "border-red-500"
        } mr-2`}
      >
        <Image
          alt=""
          samesite="Strict"
          className="scale-115"
          src={`https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${slug}.png`}
          height={48}
          width={48}
        />
      </div>
    </div>
  );
};

export default MatchChampion;
