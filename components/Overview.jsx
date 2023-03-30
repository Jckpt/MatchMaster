import React from "react";
import { getMatchHistory, getUserData } from "../utils/matchHistory";
import Match from "./Match";
import MostPlayed from "./MostPlayed";
import Rank from "./Rank";
import Profile from "./Profile";
import NoMatches from "./NoMatches";
import LoadMore from "./LoadMore";

const Overview = async ({ username, server }) => {
  const siema = await getMatchHistory(username, server);
  const matches = siema.matchesHistory;

  console.log("%c Oh my heavens! ", "background: #222; color: #bada55");
  console.log(matches);
  //const matchHistory = data.data.lol.player.matchesHistory.matches[0].subject;
  return (
    <div className="flex flex-col w-full h-full">
      <Profile username={username} server={server} />
      <div className="w-full flex flex-col lg:flex-row h-full">
        <div className="flex flex-col justify-start w-full lg:w-2/5 lg:h-full lg:mr-4">
          <Rank username={username} server={server} />
          <MostPlayed username={username} server={server} />
        </div>
        <div className="lg:w-3/5">
          {matches !== null ? (
            <div>
              {matches.map((match, i) => (
                <Match key={i} match={match} />
              ))}
              <LoadMore username={username} server={server} />
            </div>
          ) : (
            <NoMatches />
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
