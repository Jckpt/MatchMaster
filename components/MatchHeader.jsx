import React from "react";
import { prasedDuration, timeAgo } from "../utils/matchFunctions";
const MatchHeader = ({ duration, queue, startedAt, matchResult }) => {
  const timeAgoDate = timeAgo(startedAt);
  const matchDuration = prasedDuration(duration);
  return (
    <>
      <div className="flex flex-row pr-1 pl-1 justify-between">
        <div>
          <span className="pr-2">{queue}</span>
          <span className="pr-2">{timeAgoDate}</span>
          <span className="pr-2">{matchDuration}</span>
        </div>
        <div>Match details</div>
      </div>
      <div
        className={`w-full h-1 rounded-md ${
          matchResult === "WON" ? "bg-blue-400" : "bg-red-400"
        }`}
      ></div>
    </>
  );
};

export default MatchHeader;