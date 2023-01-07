export const getChampionName = async (championId) => {
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
  const result = await response.json();
  const championName = result.data.championQuery[0].flatData.slug;
  return championName;
};
