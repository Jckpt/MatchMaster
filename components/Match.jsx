import React from "react";
import Participants from "./Participants";
import Summoners from "./Summoners";
import { getMatchResult } from "../utils/getMatchResult";
import Runes from "./Runes";
import MatchChampion from "./MatchChampion";
import ItemsGrid from "./ItemsGrid";
import Stats from "./Stats";
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
      build: {
        spells,
        perks: { style, subStyle, IDs },
      },
    },
  },
}) => {
  const matchResult = getMatchResult(team, teams[0]);
  return (
    <div
      className={`card shadow-xl bg-gradient-to-tr mb-3 w-full ${
        matchResult === "WON" ? "from-blue-900" : "from-red-900"
      }
      to-base-100
      `}
    >
      <div className="card-body pt-7 pb-7 md:p-2">
        <div className="flex items-center justify-around">
          <div className="flex flex-row items-center">
            <MatchChampion matchResult={matchResult} championId={championId} />
            <div className="flex flex-col">
              {spells.map((spell, i) => (
                <Summoners spell={spell} key={i} />
              ))}
            </div>
            <Runes IDs={IDs} subStyle={subStyle} />
          </div>
          <Stats kda={kda} cs={cs} />
          <ItemsGrid finalBuild={finalBuild} />
          <Participants participants={participants} />
        </div>
      </div>
    </div>
  );
};

export default Match;
