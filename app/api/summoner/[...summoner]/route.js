import { NextResponse } from "next/server";
import { getServer, getRegion } from "../../../../utils/summonerLocation";
import {
  getPlayerMatches,
  getSummonerPUUID,
  getMatchDetails,
} from "../../../../utils/summonerFunctions";
export async function GET(request, { params }) {
  const rawServer = params.summoner[0];
  const server = getServer(rawServer);
  const region = getRegion(server);
  const summonerName = params.summoner[1];
  console.log(server, summonerName);
  const puuid = await getSummonerPUUID(server, summonerName);
  console.log(puuid);
  const matches = await getPlayerMatches(region, puuid, 0, 10);
  const match = await getMatchDetails(region, matches[0]);
  return NextResponse.json({ match });
}
