import React from "react";
import { summonerData } from "../utils/gameData";
import Image from "next/image";
import {
  getKdaColor,
  getWrColor,
  getChampionIconServer,
} from "../utils/utilsFrontend";
import { notFound } from "next/navigation";
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
  if (mostPlayedChampions === null) notFound();
  return (
    <div className="card w-full mb-4 bg-base-200 backdrop-blur-sm bg-opacity-50 shadow-xl">
      <div className="card-body">
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
  const [cId, version, cName] = await getChampionIconServer(championId);
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
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${cId}.png`}
              height={40}
              width={40}
            />
          </div>
        </div>
        <div className="pl-2">
          <div className="capitalize text-stone-200">{cName}</div>
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
