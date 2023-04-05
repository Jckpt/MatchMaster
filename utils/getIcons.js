import { cache } from "react";
import { BASE_URL } from "./baseURL";
export const getChampionName = cache(async (championId) => {
  const query = `query ($filter:String!){
    championQuery: queryChampionsV1Contents(filter:$filter){
      flatData{
      slug
      }
    }
  }`;
  const response = await fetch(
    "https://app.mobalytics.gg/api/league/gql/static/v1",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          filter: `data/riotId/iv eq ${championId}`,
        },
      }),
    }
  );
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const result = await response.json();
  const championName = result.data.championQuery[0].flatData.slug;
  return championName;
});
export const getChampionIcon = async (championId) => {
  const response = await fetch(`${BASE_URL}/api/champion/${championId}`);
  const data = await response.json();
  console.log(data);
  return data.champion.id;
};
export const getVersion = async () => {
  const response = await fetch(`${BASE_URL}/api/version`);
  const data = await response.json();
  return data.version;
};
