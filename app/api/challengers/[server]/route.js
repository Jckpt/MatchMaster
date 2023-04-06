import { NextResponse } from "next/server";
import { getServer } from "../../../../utils/summonerLocation";
import { getChallengers } from "../../../../utils/summonerFunctions";
export async function GET(request, { params }) {
  const rawServer = params.server;
  const server = getServer(rawServer);
  const challengers = await getChallengers(server);
  return NextResponse.json({ challengers });
}
