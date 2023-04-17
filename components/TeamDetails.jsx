import React from "react";
import ChampionAttributes from "./ChampionAttributes";
import Stats from "./Stats";
import ItemsRow from "./ItemsRow";
import { getHighestDamageDealt } from "../utils/utilsFrontend";
import Link from "next/link";
const TeamDetails = ({ team, matchResult, championNames, server }) => {
  const highestDamageDealt = getHighestDamageDealt(team);
  return (
    <div>
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
          <div
            key={i}
            className="flex flex-row items-center justify-between m-2"
          >
            <div className="flex flex-row items-center justify-between">
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
                className="pl-2 flex flex-row w-20 text-xs hover:text-white"
              >
                {summonerName}
              </Link>
            </div>
            <div className="text-xs">
              <Stats kda={kda} cs={cs} />
            </div>
            <progress
              className="progress w-28"
              value={damageDealt}
              max={highestDamageDealt}
            ></progress>
            <ItemsRow
              matchResult={matchResult}
              finalBuild={finalBuild}
              size={24}
            />
          </div>
        )
      )}
    </div>
  );
};

export default TeamDetails;
