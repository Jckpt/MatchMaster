import React from "react";
import Image from "next/image";
import { summonerData } from "../utils/gameData";
import DamageBar from "./DamageBar";
const getQueueName = (queue) => {
  switch (queue) {
    case "RANKED_SOLO":
      return "Ranked Solo";
    case "RANKED_FLEX":
      return "Ranked Flex";
    case "NORMAL_DRAFT":
      return "Normal";
    default:
      return "Unranked";
  }
};
const getRankImgName = (tier, division) => {
  let tierName = tier.toLowerCase();
  let divisionName = division.toLowerCase();
  if (tierName === "unranked" || tierName === undefined) return "unranked";
  return `${tierName}_${divisionName}`;
};

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
    <>
      {items === null ? null : (
        <div className="card w-full mb-4 bg-base-200 backdrop-blur-sm bg-opacity-50 shadow-xl">
          <div className="card-body flex-col justify-center">
            {items.map((item, i) => {
              return <RankText key={i} item={item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};
const RankText = async ({ item }) => {
  const queue = getQueueName(item.queue);
  const rankImgName = getRankImgName(item.rank.tier, item.rank.division);
  return (
    <div className="flex flex-row m-2">
      <Image
        src={`https://cdn.mobalytics.gg/assets/lol/images/rank-icon/helm/${rankImgName}.png`}
        alt="rank"
        width={80}
        height={80}
      />
      <div className="flex flex-col">
        <span className="capitalize">{queue}</span>
        <span className="capitalize">
          <span className="text-stone-50">{item.rank.tier.toLowerCase()}</span>
          <span className="ml-2">{item.lp} LP</span>
        </span>
        <span className="capitalize flex justify-between">
          <div>
            <span className="text-stone-200">{item.wins}</span>W
            <span className="text-stone-200 ml-1">{item.losses}</span>L
          </div>
          <div>
            <span className="text-stone-50 mr-1">
              {(item.winrate * 100).toFixed(1)}%
            </span>
          </div>
        </span>
        <div className={`rounded-full w-40 h-1 bg-red-500 flex`}>
          <div
            style={{
              width: `${(item.wins / item.gamesCount) * 100}%`,
            }}
            className={`h-full rounded-full bg-blue-500`}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Rank;
