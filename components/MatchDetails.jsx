import React from "react";
import TeamDetails from "./TeamDetails";
import { getMatchResult } from "../utils/utilsFrontend";
const MatchDetails = ({
  showDetails,
  participants,
  championNames: { participants: championNames },
  teams,
  server,
}) => {
  const redTeam = participants.filter(
    (participant) => participant.team === "RED"
  );
  const blueTeam = participants.filter(
    (participant) => participant.team === "BLUE"
  );
  const blueTeamResult = getMatchResult("BLUE", teams[0]);
  const redTeamResult = getMatchResult("RED", teams[0]);
  return (
    <div
      className={`card shadow-xl backdrop-blur-sm bg-opacity-50 mb-3 w-full text-stone-300 ${
        showDetails ? "flex" : "hidden"
      }`}
    >
      <TeamDetails
        team={blueTeam}
        matchResult={blueTeamResult}
        championNames={championNames}
        server={server}
      />
      <span className="mt-2"></span>
      <TeamDetails
        team={redTeam}
        matchResult={redTeamResult}
        championNames={championNames.slice(5)}
        server={server}
      />
    </div>
  );
};
//42height
export default MatchDetails;
