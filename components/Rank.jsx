import React from "react";
import { summonerData } from "../utils/gameData";
const Rank = async ({ username, server }) => {
  const {
    data: {
      lol: {
        player: {
          queuesStats: { items },
        },
      },
    },
  } = await summonerData(username, server);
  return (
    <div className="card w-full mb-4 bg-base-200 backdrop-blur-sm bg-opacity-50 shadow-xl">
      <div className="card-body">
        {items === null ? "Unranked" : <RankText item={items[0]} />}
      </div>
    </div>
  );
};
const RankText = async ({ item }) => {
  return (
    <>
      <h2 className="card-title">
        {item.rank.tier} {item.rank.division}
      </h2>
      <p>queue: {item.queue}</p>
      <p>{item.lp} LP</p>
      <p>
        {item.wins}W {item.losses}L {(item.winrate * 100).toFixed(2)}% winrate
      </p>
      <p>Games count: {item.gamesCount}</p>
    </>
  );
};
export default Rank;
