import React from "react";
import { prasedDuration, timeAgo } from "../utils/matchFunctions";
const MatchHeader = ({ duration, queue, startedAt, matchResult }) => {
  const timeAgoDate = timeAgo(startedAt);
  const matchDuration = prasedDuration(duration);
  return (
    <div
      className={`flex flex-row pr-1 pl-1 justify-between border-b-4 ${
        matchResult === "WON" ? "border-blue-900" : "border-red-900"
      }`}
    >
      <div>
        <span className="pr-2">{queue}</span>
        <span className="pr-2">{timeAgoDate}</span>
        <span className="pr-2">{matchDuration}</span>
      </div>
      <div>Match details</div>
    </div>
  );
};

export default MatchHeader;
