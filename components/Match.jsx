import React from "react";
import Image from "next/image";
import ItemIcon from "./ItemIcon";
import Participants from "./Participants";
import { getItems } from "../utils/itemFunctions";
import { getChampionName } from "../utils/getChampionName";
import Summoners from "./Summoners";
import { getMatchResult } from "../utils/getMatchResult";
const Match = async ({
  match: {
    participants,
    teams,
    subject: {
      team,
      kda,
      finalBuild,
      championId,
      cs,
      build: { spells },
    },
  },
}) => {
  const [items, trinket] = getItems(finalBuild);
  const slug = await getChampionName(championId);
  const matchResult = getMatchResult(team, teams[0]);
  return (
    <div
      className={`card shadow-xl bg-gradient-to-r mb-3 w-full ${
        matchResult === "WON" ? "from-blue-900" : "from-red-900"
      }
      to-base-300
      `}
    >
      <div className="card-body pt-7 pb-7 md:p-2">
        <div className="flex items-center justify-around">
          <div className="flex flex-row items-center">
            <div className="avatar">
              <div
                className={`w-12 h-12 rounded-full border-2 ${
                  matchResult === "WON" ? "border-blue-500" : "border-red-500"
                } mr-2`}
              >
                <Image
                  alt=""
                  samesite="Strict"
                  className="scale-115"
                  src={`https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${slug}.png`}
                  height={48}
                  width={48}
                />
              </div>
            </div>
            <div className="flex flex-col">
              {spells.map((spell, i) => (
                <Summoners spell={spell} key={i} />
              ))}
            </div>
          </div>
          <div>
            {kda.k}/{kda.d}/{kda.a}
          </div>
          <div>{cs} CS</div>
          <div className="flex flex-row items-center gap-1">
            <div className="grid-cols-3 grid gap-1 w-30">
              {items.map((item, i) => (
                <div className="avatar" key={i}>
                  <div className="w-8 h-8 rounded">
                    <ItemIcon item={item} />
                  </div>
                </div>
              ))}
            </div>
            <div className="avatar">
              <div className="w-8 h-8 rounded mr-3">
                <ItemIcon item={trinket} />
              </div>
            </div>
          </div>
          <Participants participants={participants} />
        </div>
      </div>
    </div>
  );
};

export default Match;
