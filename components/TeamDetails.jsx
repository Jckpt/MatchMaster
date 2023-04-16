import React from "react";
import ChampionAttributes from "./ChampionAttributes";
import Stats from "./Stats";
import ItemsRow from "./ItemsRow";
const TeamDetails = ({ team, matchResult, championNames }) => {
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
              <div className="pl-2 flex flex-row w-20">{summonerName}</div>
            </div>
            <Stats kda={kda} cs={cs} />
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
