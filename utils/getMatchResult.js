export const getMatchResult = (summonerTeam, redTeam) => {
  if (summonerTeam === "RED" && redTeam.result === "WON") {
    return "WON";
  }
  return "LOST";
};
