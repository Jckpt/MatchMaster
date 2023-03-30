import { NextResponse } from "next/server";
import { getServer, getRegion } from "../../../../utils/summonerLocation";
import {
  getPlayerMatches,
  getSummonerPUUID,
  getMatchDetails,
  getMatchOverwiew,
} from "../../../../utils/summonerFunctions";
export async function GET(request, { params }) {
  const rawServer = params.summoner[0];
  const server = getServer(rawServer);
  const region = getRegion(server);
  const summonerName = params.summoner[1];
  const puuid = await getSummonerPUUID(server, summonerName);
  const matches = await getPlayerMatches(region, puuid, 0, 10);
  //loop through matches and get match details using map
  const matchesHistory = await Promise.all(
    matches.map(async (match) => {
      const matchDetail = await getMatchOverwiew(region, match, puuid);
      return matchDetail;
    })
  );
  return NextResponse.json({ matchesHistory });
}
