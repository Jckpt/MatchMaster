import { getQueueName, parsedParticipant, teamColor } from "./riotPraser";
export const getSummonerPUUID = async (server, summonerName) => {
  const res = await fetch(
    `https://${server}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`,
    {
      headers: {
        "X-Riot-Token": process.env.RIOT_KEY,
      },
    }
  );
  const data = await res.json();
  return data.puuid;
};
export const getPlayerMatches = async (region, puuid, start, count) => {
  const res = await fetch(
    `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}`,
    {
      headers: {
        "X-Riot-Token": process.env.RIOT_KEY,
      },
    }
  );
  return await res.json();
};
export const getMatchDetails = async (region, matchId, puuid) => {
  const res = await fetch(
    `https://${region}.api.riotgames.com/lol/match/v5/matches/${matchId}`,
    {
      headers: {
        "X-Riot-Token": process.env.RIOT_KEY,
      },
    }
  );
  let data = await res.json();
  return data;
};
export const getMatchOverwiew = async (region, matchId, puuid) => {
  const res = await fetch(
    `https://${region}.api.riotgames.com/lol/match/v5/matches/${matchId}`,
    {
      headers: {
        "X-Riot-Token": process.env.RIOT_KEY,
      },
    }
  );
  const rawData = await res.json();
  // get subject role,region,summonerName,championId,championLevel,team

  const data = {
    matchId: rawData.info.gameId,
    startedAt: rawData.info.gameStartTimestamp,
    duration: rawData.info.gameDuration,

    queue: getQueueName(rawData.info.queueId),
    teams: rawData.info.teams.map((team) => {
      return {
        teamId: teamColor(team.teamId),
        result: team.win ? "WON" : "LOST",
      };
    }),
    // return subject that uses parsedParticipant function
    subject: parsedParticipant(
      rawData.info.participants.find(
        (participant) => participant.puuid === puuid
      )
    ),
    participants: rawData.info.participants.map((participant) => {
      return parsedParticipant(participant);
    }),
  };
  return data;
};
export async function getChallengers(server) {
  const response = await fetch(
    `https://${server}.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5`,
    {
      headers: {
        "X-Riot-Token": process.env.RIOT_KEY,
      },
    }
  );
  const data = await response.json();
  const challengers = data.entries.slice(0, 10).map((challenger) => {
    return challenger.summonerName;
  });
  return challengers;
}
