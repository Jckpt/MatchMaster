"use client";
import React from "react";
import Participants from "./Participants";
import Summoners from "./Summoners";
import { getMatchResult } from "../utils/getMatchResult";
import Runes from "./Runes";
import MatchChampion from "./MatchChampion";
import ItemsGrid from "./ItemsGrid";
import Stats from "./Stats";
import MatchHeader from "./MatchHeader";
const Match = ({
  server,
  match: {
    startedAt,
    duration,
    queue,
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
      className={`card shadow-xl backdrop-blur-sm bg-opacity-50 mb-3 w-full ${
        matchResult === "WON" ? "bg-blue-500" : "bg-red-500"
      }`}
    >
      <div className="card-body pt-2 pb-4 pl-0 pr-0 md:p-2 text-stone-300">
        <MatchHeader
          startedAt={startedAt}
          queue={queue}
          duration={duration}
          matchResult={matchResult}
        />
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
          <ItemsGrid finalBuild={finalBuild} matchResult={matchResult} />
          <Participants participants={participants} server={server} />
        </div>
      </div>
    </div>
  );
};

export default Match;
