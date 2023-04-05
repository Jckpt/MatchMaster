import React from "react";
import { getChampionIcon, getVersion } from "../utils/getIcons";
import Image from "next/image";
const Participants = async ({ participants }) => {
  return (
    <div className="grid grid-flow-col grid-rows-5">
      {participants?.map(({ championId, summonerName, team }, i) => (
        <Summoner
          championId={championId}
          summonerName={summonerName}
          team={team}
          key={i}
        />
      ))}
    </div>
  );
};

const Summoner = async ({ championId, summonerName, team }) => {
  const img = await getChampionIcon(championId);
  const version = await getVersion();
  return (
    <div className="pr-1 hidden md:flex flex-row">
      <div className="avatar">
        <div className="w-6 h-6 rounded">
          <Image
            alt=""
            samesite="Strict"
            className="scale-115"
            src={`http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${img}.png`}
            height={48}
            width={48}
          />
        </div>
      </div>
      <div className="pl-1">{summonerName.substring(0, 5).trim()}...</div>
    </div>
  );
};

export default Participants;
