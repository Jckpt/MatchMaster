import React from "react";
import ChampionAttributes from "./ChampionAttributes";
import Stats from "./Stats";
import ItemsRow from "./ItemsRow";
import {
  getHighestDamageDealt,
  getHighestDamageTaken,
} from "../utils/utilsFrontend";
import Link from "next/link";
import DamageBar from "./DamageBar";
import ItemsGrid from "./ItemsGrid";
const TeamDetails = ({ team, matchResult, championNames, server }) => {
  const highestDamageDealt = getHighestDamageDealt(team);
  const highestDamageTaken = getHighestDamageTaken(team);
  const teamColor = team[0].team;
  return (
    <div className="overflow-x-scroll md:overflow-x-auto">
      <table className="table w-full">
        <thead className="text-center">
          <tr>
            <th
              className={`border-none w-48 bg-opacity-30 ${
                matchResult === "WON" ? "bg-blue-500" : "bg-red-600"
              }`}
            >
              {matchResult} ({teamColor} Team)
            </th>
            <th
              className={`border-none bg-opacity-30 ${
                matchResult === "WON" ? "bg-blue-500" : "bg-red-600"
              }`}
            >
              Stats
            </th>
            <th
              className={`border-none bg-opacity-30 hidden md:table-cell ${
                matchResult === "WON" ? "bg-blue-500" : "bg-red-600"
              }`}
            >
              Damage
            </th>
            <th
              className={`border-none bg-opacity-30 w-3 ${
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
                tagLine,
                finalBuild,
                championId,
                damageTaken,
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
                  className={`flex flex-row items-center p-2 md:p-0 md:pl-2 w-48 border-none bg-opacity-50 ${
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
                    href={`/${server}/${encodeURIComponent(
                      summonerName + "#" + tagLine
                    )}`}
                    className="flex flex-row text-xs pl-2 hover:text-white"
                  >
                    {summonerName}
                  </Link>
                </th>
                <th
                  className={`text-xs p-0 border-none w-28 bg-opacity-50 ${
                    matchResult === "WON" ? "bg-blue-500" : "bg-red-500"
                  }`}
                >
                  <Stats kda={kda} cs={cs} />
                </th>
                <th
                  className={`p-0 border-none bg-opacity-50 hidden md:table-cell ${
                    matchResult === "WON" ? "bg-blue-500" : "bg-red-500"
                  }`}
                >
                  <div
                    className="flex justify-center tooltip"
                    data-tip={`Damage dealt: ${damageDealt}`}
                  >
                    <DamageBar
                      damage={damageDealt}
                      highestDamage={highestDamageDealt}
                      accent={matchResult}
                    />
                  </div>
                  <div
                    className="flex justify-center tooltip mt-1.5"
                    data-tip={`Damage taken: ${damageTaken}`}
                  >
                    <DamageBar
                      damage={damageTaken}
                      highestDamage={highestDamageTaken}
                    />
                  </div>
                </th>
                <th
                  className={`p-0 border-none bg-opacity-50 w-48 ${
                    matchResult === "WON" ? "bg-blue-500" : "bg-red-500"
                  }`}
                >
                  <div className="hidden md:table-cell">
                    <ItemsRow
                      finalBuild={finalBuild}
                      size={24}
                      matchResult={matchResult}
                    />
                  </div>
                  <div className="md:hidden p-2">
                    <ItemsGrid
                      finalBuild={finalBuild}
                      matchResult={matchResult}
                      size={24}
                    />
                  </div>
                </th>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TeamDetails;
