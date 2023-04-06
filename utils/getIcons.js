import { BASE_URL } from "./baseURL";
export const getChampionIcon = (champion) => {
  return [champion?.id, champion?.version];
};
export const getVersion = async () => {
  const response = await fetch(`${BASE_URL}/api/version`);
  const data = await response.json();
  return data.version;
};
export const getChampionIconServer = async (championId) => {
  const response = await fetch(`${BASE_URL}/api/champion/${championId}`);
  const data = await response.json();
  return [data.champion.id, data.champion.version];
};
