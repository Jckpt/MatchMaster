import { NextResponse } from "next/server";
import { getLatestVersion } from "../../../utils/gameData";
export async function GET(request, { params }) {
  const version = await getLatestVersion();
  return NextResponse.json({ version });
}
