import React from "react";
import { summonerData } from "../utils/gameData";
const Rank = async ({ username, server }) => {
  const {
    data: {
      lol: {
        player: {
          queuesStats: {
            items: [
              {
                rank: { tier, division },
                queue,
                lp,
                wins,
                winrate,
                gamesCount,
                losses,
              },
            ],
          },
        },
      },
    },
  } = await summonerData(username, server);
  return (
    <div className="card w-full mb-4 bg-base-200 backdrop-blur-sm bg-opacity-50 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {tier} {division}
        </h2>
        <p>queue: {queue}</p>
        <p>{lp} LP</p>
        <p>
          {wins}W {losses}L {(winrate * 100).toFixed(2)}% winrate
        </p>
        <p>Games count: {gamesCount}</p>
      </div>
    </div>
  );
};

export default Rank;
