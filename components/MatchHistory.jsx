import React from "react";
import { getData } from "../utils/matchHistory";
import Match from "./Match";
const MatchHistory = async ({ username, server }) => {
  const data = await getData(username, server);
  const matches = data.data.lol.player.matchesHistory.matches;
  //const matchHistory = data.data.lol.player.matchesHistory.matches[0].subject;
  const championIcon =
    "http://ddragon.leagueoflegends.com/cdn/12.23.1/img/champion/Aatrox.png";
  return (
    <>
      {matches.map((match, i) => (
        <Match
          key={i}
          kda={match.subject.kda}
          champion={championIcon}
          build={match.subject.finalBuild}
        />
      ))}
    </>
  );
};

export default MatchHistory;
