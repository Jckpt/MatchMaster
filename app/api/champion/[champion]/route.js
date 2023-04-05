import { NextResponse } from "next/server";
import {
  getLatestVersion,
  championKeyMap,
  getChampion,
} from "../../../../utils/gameData";
export async function GET(request, { params }) {
  const championId = params.champion;
  const version = await getLatestVersion();
  const championKeys = await championKeyMap(version);
  const champion = getChampion(championKeys, championId);
  return NextResponse.json({ champion });
}
