import React from "react";
import Runes from "./Runes";
import ChampionIcon from "./ChampionIcon";
import Summoners from "./Summoners";
const ChampionAttributes = ({
  matchResult,
  championId,
  spells,
  IDs,
  subStyle,
  size,
  championObject,
}) => {
  const championIconSize = size * 2;
  return (
    <div className="flex flex-row items-center">
      <ChampionIcon
        matchResult={matchResult}
        championId={championId}
        size={championIconSize}
        championObject={championObject}
      />
      <div className="flex flex-col">
        {spells?.map((spell, i) => (
          <Summoners spell={spell} key={i} size={size} />
        ))}
      </div>
      {/* <Runes IDs={IDs} subStyle={subStyle} size={size} /> */}
    </div>
  );
};

export default ChampionAttributes;
