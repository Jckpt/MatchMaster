import { NextResponse } from "next/server";
import {
  getLatestVersion,
  itemKeyMap,
  getItem,
} from "../../../../utils/gameData";
export async function GET(request, { params }) {
  const championId = params.item;
  const version = await getLatestVersion();
  const itemKeys = await itemKeyMap(version);
  const item = getItem(itemKeys, championId);

  return NextResponse.json({ item });
}
