import React from "react";
import ItemIcon from "./ItemIcon";
import { getItems } from "../utils/itemFunctions";
import { getGameData } from "../utils/gameData";
import { getChampionName } from "../utils/getChampionName";
const Match = async ({
  match: {
    subject: { kda, finalBuild, championId },
  },
  username,
  server,
}) => {
  const [items, trinket] = getItems(finalBuild);
  const gameData = await getGameData(username, server);
  const slug = getChampionName(gameData, championId);
  return (
    <div className="card bg-base-100 shadow-xl mb-3 w-full">
      <div className="card-body">
        <div>
          KDA {kda.k}/{kda.d}/{kda.a}
        </div>
        <div className="flex items-center ">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full mr-3">
              <img
                alt=""
                samesite="None"
                src={`https://cdn.mobalytics.gg/assets/lol/images/dd/champions/icons/${slug}.png`}
              />
            </div>
          </div>
          <div className="grid-cols-3 grid gap-1 w-40">
            {items.map((item, i) => (
              <div className="avatar" key={i}>
                <div className="w-12 h-12 rounded">
                  <ItemIcon item={item} />
                </div>
              </div>
            ))}
          </div>
          <div className="avatar">
            <div className="w-12 h-12 rounded mr-3">
              <ItemIcon item={trinket} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Match;
