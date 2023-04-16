import React from "react";
import TeamDetails from "./TeamDetails";
const MatchDetails = ({
  showDetails,
  matchResult,
  participants,
  championNames: { participants: championNames },
}) => {
  const redTeam = participants.filter(
    (participant) => participant.team === "RED"
  );
  const blueTeam = participants.filter(
    (participant) => participant.team === "BLUE"
  );
  return (
    <div
      className={`card shadow-xl overflow-x-scroll md:overflow-auto backdrop-blur-sm bg-opacity-50 bg-base-200 mb-3 w-full ${
        showDetails ? "flex" : "hidden"
      }`}
    >
      <TeamDetails
        team={blueTeam}
        matchResult={matchResult}
        championNames={championNames}
      />
      <TeamDetails
        team={redTeam}
        matchResult={matchResult}
        championNames={championNames.slice(5)}
      />
    </div>
  );
};
//42height
export default MatchDetails;
