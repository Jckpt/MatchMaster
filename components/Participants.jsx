import React from "react";
import { getChampionName } from "../utils/getChampionName";
import Image from "next/image";
const Participants = async ({ participants }) => {
  return (
    <div>
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
  const slug = await getChampionName(championId);
  return (
    <div>
      <div className="avatar">
        <div className="w-6 h-6 rounded">
          <Image
            alt=""
            samesite="Strict"
            src={`https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${slug}.png`}
            height={48}
            width={48}
          />
        </div>
      </div>
      {summonerName}
    </div>
  );
};

export default Participants;
