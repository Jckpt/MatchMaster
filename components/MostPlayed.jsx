import React from "react";
import { summonerData } from "../utils/gameData";
import { getChampionName } from "../utils/getChampionName";
import Image from "next/image";
import { getKdaColor, getWrColor } from "../utils/getColor";
const MostPlayed = async ({ username, server }) => {
  const {
    data: {
      lol: {
        player: {
          championsStats: { items: mostPlayedChampions },
        },
      },
    },
  } = await summonerData(username, server);
  return (
    <div className="card w-full mb-4 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">Most played</h2>
        {mostPlayedChampions.map(
          ({ championId, kda, csm, wins, looses, kp }, i) => (
            <PlayedChampion
              championId={championId}
              kda={kda}
              csm={csm}
              wins={wins}
              looses={looses}
              kp={kp}
              key={i}
            />
          )
        )}
      </div>
    </div>
  );
};

const PlayedChampion = async ({ championId, kda, csm, wins, looses, kp }) => {
  const slug = await getChampionName(championId);
  const KDA = ((kda.k + kda.a) / kda.d).toFixed(2);
  const KdaColor = getKdaColor(KDA);
  const WR = ((wins / (wins + looses)) * 100).toFixed(0);
  const WrColor = getWrColor(WR);
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center">
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <Image
              alt=""
              samesite="Strict"
              className="scale-115"
              src={`https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${slug}.png`}
              height={40}
              width={40}
            />
          </div>
        </div>
        <div className="pl-2">
          <div className="capitalize">{slug}</div>
          <div className="text-xs">{csm.toFixed(1)} CS/M</div>
        </div>
      </div>

      <div className="flex flex-col text-center">
        <div className={`font-bold ${KdaColor}`}>{KDA} KDA</div>
        <div className="font-light text-xs">
          {kda.k.toFixed(1)}/{kda.d.toFixed(1)}/{kda.a.toFixed(1)}
        </div>
      </div>
      <div className="text-right">
        <div className={`${WrColor}`}> {WR}%</div>
        <div className="text-xs">{wins + looses} Played</div>
      </div>
    </div>
  );
};

export default MostPlayed;
