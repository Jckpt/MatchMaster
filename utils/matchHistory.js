export const getUserData = async (summonerName, server) => {
  summonerName = decodeURIComponent(summonerName);
  const res = await fetch(
    "https://app.mobalytics.gg/api/lol/graphql/v1/query",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en_us",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-moba-client": "mobalytics-web",
        "x-moba-proxy-gql-ops-name": "LolProfilePageSummonerOverviewQuery",
      },
      SameSite: "None",
      referrer: `https://app.mobalytics.gg/lol/profile/${server}/${summonerName}/overview`,
      referrerPolicy: "strict-origin-when-cross-origin",
      body: `{"operationName":
      "LolProfilePageSummonerOverviewQuery",
      "variables":{
        "top":10,
      "withMatchParticipantDetailed":false,
      "summonerName":"${summonerName}",
      "region":"${server.toUpperCase()}",
      "cChampionId":null,
      "cQueue":null,
      "cRolename":null,
      "cSeasonId":null,
      "skip":0},
      "extensions":{
        "persistedQuery":{
          "version":1,
          "sha256Hash":"b40d1611a6d63e0750102f3860585d87fda084d15f083b1948e45056522ed724"}}}`,
      method: "POST",
      mode: "cors",
      credentials: "include",
    }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
