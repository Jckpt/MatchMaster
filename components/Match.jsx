"use client";
import React from "react";
import Participants from "./Participants";
import ItemsGrid from "./ItemsGrid";
import ChampionAttributes from "./ChampionAttributes";
import Stats from "./Stats";
import MatchHeader from "./MatchHeader";
import MatchDetails from "./MatchDetails";
import { useState } from "react";
import useSWR from "swr";
import { getSearchParams, getMatchResult } from "../utils/utilsFrontend";
import { fetcher } from "../utils/utilsFrontend";

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
  const [showDetails, setShowDetails] = useState(false);
  const showDetailsHandler = () => {
    setShowDetails((showDetails) => !showDetails);
  };
  const searchParams = getSearchParams(participants);
  const {
    data: championNames,
    error,
    isLoading,
  } = useSWR(`/api/champion/${championId}?${searchParams}`, fetcher, {
    revalidateOnFocus: false,
  });
  return (
    <>
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
            showDetailsHandler={showDetailsHandler}
          />
          <div className="flex items-center justify-around">
            <ChampionAttributes
              matchResult={matchResult}
              championId={championId}
              spells={spells}
              IDs={IDs}
              subStyle={subStyle}
              size={24}
              championObject={championNames?.subject}
            />
            <Stats kda={kda} cs={cs} />
            <ItemsGrid
              finalBuild={finalBuild}
              matchResult={matchResult}
              size={32}
            />
            <Participants
              participants={participants}
              server={server}
              championNames={championNames}
            />
          </div>
        </div>
      </div>
      {championNames === undefined ? null : (
        <MatchDetails
          showDetails={showDetails}
          matchResult={matchResult}
          participants={participants}
          championNames={championNames}
          teams={teams}
          server={server}
        />
      )}
    </>
  );
};

export default Match;
