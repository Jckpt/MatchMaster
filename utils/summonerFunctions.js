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
export const getMatchDetails = async (region, matchId) => {
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
export const getMatchOverwiew = async (region, matchId) => {
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
