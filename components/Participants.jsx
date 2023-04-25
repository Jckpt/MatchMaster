import React from "react";
import { getChampionIcon } from "../utils/utilsFrontend";
import Link from "next/link";
import Image from "next/image";
const Participants = ({ participants, server, championNames }) => {
  return (
    <div className="grid grid-flow-col grid-rows-5 h-[125px]">
      {participants?.map(({ summonerName, team }, i) => (
        <Summoner
          summonerName={summonerName}
          team={team}
          key={i}
          server={server}
          championNames={championNames}
          i={i}
        />
      ))}
    </div>
  );
};

const Summoner = ({ summonerName, team, server, championNames, i }) => {
  const [championName, version] = getChampionIcon(
    championNames?.participants[i]
  );
  return (
    <Link
      className="pr-1 hidden md:flex flex-row hover:text-white"
      href={`/${server}/${summonerName}`}
    >
      <div className="avatar">
        <div className="w-6 h-6 rounded">
          {championName === undefined ? null : (
            <Image
              alt=""
              samesite="Strict"
              className="scale-115"
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championName}.png`}
              height={24}
              width={24}
            />
          )}
        </div>
      </div>
      <div className="pl-1">
        {summonerName.length > 5
          ? `${summonerName.substring(0, 5).trim()}...`
          : summonerName}
      </div>
    </Link>
  );
};

export default Participants;
