import React from "react";
import ChampionAttributes from "./ChampionAttributes";
import Stats from "./Stats";
import ItemsRow from "./ItemsRow";
import { getHighestDamageDealt } from "../utils/utilsFrontend";
import Link from "next/link";
const TeamDetails = ({ team, matchResult, championNames, server }) => {
  const highestDamageDealt = getHighestDamageDealt(team);
  const teamColor = team[0].team;
  return (
    <>
      <table className="table w-full">
        <thead className="text-center">
          <tr>
            <th
              className={`border-none backdrop-blur-sm w-64 bg-opacity-30 ${
                matchResult === "WON" ? "bg-blue-500" : "bg-red-600"
              }`}
            >
              {matchResult} ({teamColor} Team)
            </th>
            <th
              className={`border-none backdrop-blur-sm bg-opacity-30 ${
                matchResult === "WON" ? "bg-blue-500" : "bg-red-600"
              }`}
            >
              Stats
            </th>
            <th
              className={`border-none backdrop-blur-sm bg-opacity-30 ${
                matchResult === "WON" ? "bg-blue-500" : "bg-red-600"
              }`}
            >
              Damage Dealt
            </th>
            <th
              className={`border-none backdrop-blur-sm bg-opacity-30 ${
                matchResult === "WON" ? "bg-blue-500" : "bg-red-600"
              }`}
            >
              Items
            </th>
          </tr>
        </thead>
        <tbody className="">
          {team.map(
            (
              {
                team,
                kda,
                summonerName,
                finalBuild,
                championId,
                damageDealt,
                cs,
                build: {
                  spells,
                  perks: { style, subStyle, IDs },
                },
              },
              i
            ) => (
              <tr key={i} className="">
                <th
                  className={`flex flex-row items-center p-0 pl-2 w-64 border-none backdrop-blur-sm bg-opacity-50 ${
                    matchResult === "WON" ? "bg-blue-500" : "bg-red-500"
                  }`}
                >
                  <ChampionAttributes
                    matchResult={matchResult}
                    spells={spells}
                    IDs={IDs}
                    subStyle={subStyle}
                    size={18}
                    championObject={championNames[i]}
                  />
                  <Link
                    href={`/${server}/${summonerName}`}
                    className="flex flex-row text-xs pl-2 hover:text-white"
                  >
                    {summonerName}
                  </Link>
                </th>
                <th
                  className={`text-xs p-0 border-none backdrop-blur-sm bg-opacity-50 ${
                    matchResult === "WON" ? "bg-blue-500" : "bg-red-500"
                  }`}
                >
                  <Stats kda={kda} cs={cs} />
                </th>
                <th
                  className={`p-0 border-none backdrop-blur-sm bg-opacity-50 ${
                    matchResult === "WON" ? "bg-blue-500" : "bg-red-500"
                  }`}
                >
                  <div
                    className="flex justify-center tooltip"
                    data-tip={`Damage dealt: ${damageDealt}`}
                  >
                    <progress
                      className="progress w-28"
                      value={damageDealt}
                      max={highestDamageDealt}
                    ></progress>
                  </div>
                </th>
                <th
                  className={`p-0 border-none backdrop-blur-sm bg-opacity-50 ${
                    matchResult === "WON" ? "bg-blue-500" : "bg-red-500"
                  }`}
                >
                  <ItemsRow
                    matchResult={matchResult}
                    finalBuild={finalBuild}
                    size={24}
                  />
                </th>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default TeamDetails;
