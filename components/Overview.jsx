import React from "react";
import { getUserData } from "../utils/matchHistory";
import Match from "./Match";
import MostPlayed from "./MostPlayed";
import Rank from "./Rank";
import Profile from "./Profile";
import NoMatches from "./NoMatches";

const Overview = async ({ username, server }) => {
  const {
    data: {
      lol: {
        player: {
          matchesHistory: { matches },
        },
      },
    },
  } = await getUserData(username, server);

  //const matchHistory = data.data.lol.player.matchesHistory.matches[0].subject;
  return (
    <div className="flex flex-col w-full h-full">
      <Profile />
      <div className="w-full flex flex-col lg:flex-row h-full">
        <div className="flex flex-col justify-start w-full lg:w-2/5 lg:h-full lg:mr-4">
          <Rank />
          <MostPlayed />
        </div>
        <div className="lg:w-3/5">
          {matches !== null ? (
            matches.map((match, i) => (
              <Match
                key={i}
                match={match}
                username={username}
                server={server}
              />
            ))
          ) : (
            <NoMatches />
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
