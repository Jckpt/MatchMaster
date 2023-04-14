import React from "react";

const MatchDetails = ({ showDetails, matchResult, participants }) => {
  const redTeam = participants.filter(
    (participant) => participant.team === "RED"
  );
  const blueTeam = participants.filter(
    (participant) => participant.team === "BLUE"
  );
  return (
    <div
      className={`card shadow-xl backdrop-blur-sm bg-opacity-50 bg-base-200 mb-3 w-full ${
        showDetails ? "flex" : "hidden"
      }`}
    >
      <div>siema</div>
      <div>
        {redTeam.map((participant) => (
          <div>{participant.summonerName}</div>
        ))}
      </div>
      <div>
        {blueTeam.map((participant) => (
          <div>{participant.summonerName}</div>
        ))}
      </div>
    </div>
  );
};
//42height
export default MatchDetails;
