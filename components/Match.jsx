"use client";
import React from "react";
import Participants from "./Participants";
import { getMatchResult } from "../utils/getMatchResult";
import ItemsGrid from "./ItemsGrid";
import ChampionAttributes from "./ChampionAttributes";
import Stats from "./Stats";
import MatchHeader from "./MatchHeader";
import MatchDetails from "./MatchDetails";
import { useState } from "react";
import useSWR from "swr";
import { BASE_URL } from "../utils/baseURL";
const fetcher = (path) => fetch(`${BASE_URL}${path}`).then((res) => res.json());

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
  const [showDetails, setShowDetails] = useState(true);
  const showDetailsHandler = () => {
    setShowDetails((showDetails) => !showDetails);
  };
  const participantsChampionIds = participants.map(
    (participant) => participant.championId
  );
  const searchParamsParticipants = new URLSearchParams({
    championIds: participantsChampionIds.join(","),
  });
  const searchStringParticipants = searchParamsParticipants.toString();
  const {
    data: championNames,
    error,
    isLoading,
  } = useSWR(
    `/api/champion/${championId}?${searchStringParticipants}`,
    fetcher
  );
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
              championNames={championNames}
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
      <MatchDetails
        showDetails={showDetails}
        matchResult={matchResult}
        participants={participants}
      />
    </>
  );
};

export default Match;
