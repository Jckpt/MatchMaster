import { NextResponse } from "next/server";
import {
  getLatestVersion,
  championKeyMap,
  getChampion,
} from "../../../../utils/gameData";
export async function GET(request, { params }) {
  const championId = params.champion;
  const { searchParams } = new URL(request.url);
  let championIds = [];
  if (searchParams.get("championIds") !== null)
    championIds = searchParams.get("championIds").split(",");
  const version = await getLatestVersion();
  const championKeys = await championKeyMap(version);

  const subject = getChampion(championKeys, championId);
  const mapChampionIds = championIds.map((id) => {
    return getChampion(championKeys, id);
  });
  return NextResponse.json({ subject: subject, participants: mapChampionIds });
}
