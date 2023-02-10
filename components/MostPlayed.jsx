import React from "react";
import Image from "next/image";
import { summonerData } from "../utils/gameData";
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
        <p>
          {mostPlayedChampions.map(
            ({ championId, kda, csm, wins, looses, kp }, i) => (
              <p key={i}>
                {championId} {wins}W {looses}L {kda.k.toFixed(1)}/
                {kda.d.toFixed(1)}/{kda.a.toFixed(1)} {csm.toFixed(1)} CS/M{" "}
                {kp.toFixed(1)}
              </p>
            )
          )}
        </p>
      </div>
    </div>
  );
};

export default MostPlayed;
