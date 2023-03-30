import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const getMoreMatches = async (
  skip,
  summonerName,
  server,
  withMatchParticipantDetailed
) => {
  summonerName = decodeURIComponent(summonerName);
  useSWR(
    ("https://app.mobalytics.gg/api/lol/graphql/v1/query",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en_us",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-moba-client": "mobalytics-web",
        "x-moba-proxy-gql-ops-name": "LolProfilePageMoreMatchesQuery",
      },
      referrer: "https://app.mobalytics.gg/lol/profile/euw/forsen/overview",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: `{"operationName":"LolProfilePageMoreMatchesQuery","variables":{"top":10,"withMatchParticipantDetailed":false,"skip":${skip},"summonerName":"${summonerName}","region":"${server}","cChampionId":null,"cQueue":null,"cRolename":null,"cSeasonId":null},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"5d9837cdf73ae22d321095e4420e9594ba0275c5ffe236bc45662b12cb6cccae"}}}`,
      method: "POST",
      mode: "cors",
      credentials: "include",
    }),
    fetcher
  );
  return {
    data,
    isLoading,
    isError: error,
  };
};
