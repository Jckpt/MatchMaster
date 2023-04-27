import React from "react";
import MostPlayed from "./MostPlayed";
import Rank from "./Rank";
import Profile from "./Profile";
import AllMatches from "./AllMatches";

const Overview = async ({ username, server }) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full flex flex-col lg:flex-row h-full">
        <div className="flex flex-col justify-start w-full lg:w-2/5 lg:h-full lg:mr-4">
          <Profile username={username} server={server} />
          <Rank username={username} server={server} />
          <MostPlayed username={username} server={server} />
        </div>
        <AllMatches username={username} server={server} />
      </div>
    </div>
  );
};

export default Overview;
