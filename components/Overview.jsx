import React from "react";
import { getData } from "../utils/matchHistory";
import Match from "./Match";
import MostPlayed from "./MostPlayed";
import Rank from "./Rank";
import Profile from "./Profile";
import NoMatches from "./NoMatches";
const Overview = async ({ username, server }) => {
  const data = await getData(username, server);
  const matches = data.data.lol.player.matchesHistory.matches;
  //const matchHistory = data.data.lol.player.matchesHistory.matches[0].subject;
  const championIcon =
    "http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Aatrox.png";
  return (
    <div className="flex flex-col w-full h-full">
      <Profile />
      <div className="w-full flex flex-col lg:flex-row h-full">
        <div className="flex flex-col justify-start w-full lg:w-2/5 lg:h-full lg:mr-6">
          <Rank />
          <MostPlayed />
        </div>
        <div className="lg:w-3/5">
          {matches !== null ? (
            matches.map((match, i) => (
              <Match
                key={i}
                kda={match.subject.kda}
                champion={championIcon}
                build={match.subject.finalBuild}
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
