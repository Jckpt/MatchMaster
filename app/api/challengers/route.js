import { NextResponse } from "next/server";
import { getChallengers } from "../../../utils/summonerFunctions";
export async function GET(request, { params }) {
  const challengers = await getChallengers("euw1");
  return NextResponse.json({ challengers });
}
