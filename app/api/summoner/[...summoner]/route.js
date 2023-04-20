import { NextResponse } from "next/server";
import { getServer, getRegion } from "../../../../utils/summonerLocation";
import {
  getPlayerMatches,
  getSummonerPUUID,
  getMatchDetails,
  getMatchOverwiew,
} from "../../../../utils/summonerFunctions";
export async function GET(request, { params }) {
  const { searchParams } = new URL(request.url);
  const start = searchParams.get("start") || 0;
  const rawServer = params.summoner[0];
  const summonerName = params.summoner[1];
  const server = getServer(rawServer);
  const region = getRegion(server);
  const puuid = await getSummonerPUUID(server, summonerName);
  if (puuid === undefined)
    return NextResponse.json({ matchesHistory: [], status: 404 });
  const matches = await getPlayerMatches(region, puuid, start, 10);
  //loop through matches and get match details using map
  let matchesHistory;
  try {
    matchesHistory = await Promise.all(
      matches.map(async (match) => {
        const matchDetail = await getMatchOverwiew(region, match, puuid);
        return matchDetail;
      })
    );
    return NextResponse.json({ matchesHistory, status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ matchesHistory: [], status: 404 });
  }
}
