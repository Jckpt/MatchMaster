import React from "react";
import Image from "next/image";
const Participants = ({ participants }) => {
  return (
    <div className="grid grid-flow-col grid-rows-5">
      {participants?.map(
        ({ championId, summonerName, team, championImg }, i) => (
          <Summoner
            championId={championId}
            summonerName={summonerName}
            championImg={championImg}
            team={team}
            key={i}
          />
        )
      )}
    </div>
  );
};

const Summoner = ({ summonerName, team, championImg }) => {
  return (
    <div className="pr-1 hidden md:flex flex-row">
      <div className="avatar">
        <div className="w-6 h-6 rounded">
          <Image
            alt=""
            samesite="Strict"
            className="scale-115"
            src={championImg}
            height={48}
            width={48}
          />
        </div>
      </div>
      <div className="pl-1">
        {summonerName.length > 5
          ? `${summonerName.substring(0, 5).trim()}...`
          : summonerName}
      </div>
    </div>
  );
};

export default Participants;
