import { BASE_URL } from "./baseURL";
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
