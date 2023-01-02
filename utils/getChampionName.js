export const getChampionName = (gameData, championId) => {
  const championName = gameData.data.champions.find(
    (champion) => champion.flatData.riotId === championId
  ).flatData.slug;
  return championName;
};
