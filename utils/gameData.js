export const getGameData = async (summonerName, server) => {
  summonerName = decodeURIComponent(summonerName);
  const res = await fetch(
    "https://app.mobalytics.gg/api/league/gql/static/v1",
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
        "x-moba-proxy-gql-ops-name": "LolCommonDataQuery",
      },
      referrer: `https://app.mobalytics.gg/lol/profile/${server}/${summonerName}/overview`,
      referrerPolicy: "strict-origin-when-cross-origin",
      body: '{"operationName":"LolCommonDataQuery","variables":{},"query":"query LolCommonDataQuery {\\n  gameState: queryGameStateDataV1Contents {\\n    flatData {\\n      lastChampionAddedDate\\n      currentPatch\\n      lastReleasedChampionSlug\\n      __typename\\n    }\\n    __typename\\n  }\\n  appSettings: queryAppSettingsV1Contents {\\n    flatData {\\n      minDesktopVersion\\n      activeTopBanner {\\n        flatData {\\n          ...LolTopBannerFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      activePromoModal {\\n        flatData {\\n          ...PromoModalFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      activeReleaseNotes {\\n        flatData {\\n          ...ReleaseNotesFragment\\n          __typename\\n        }\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  featureFlags: queryAppSettingsV1Contents {\\n    flatData {\\n      ffExperimentThreeDaysLcPromo\\n      __typename\\n    }\\n    __typename\\n  }\\n  seasons: querySeasonsV1Contents {\\n    flatData {\\n      ...LolSeasonFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  gameItemsChunk1: queryGameItemsV1Contents(top: 200, skip: 0) {\\n    flatData {\\n      ...GameItemCommonFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  gameItemsChunk2: queryGameItemsV1Contents(top: 200, skip: 200) {\\n    flatData {\\n      ...GameItemCommonFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  summonerSpells: querySummonersSpellsV1Contents(top: 200) {\\n    flatData {\\n      ...SummonerSpellCommonFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  perks: queryRunesV1Contents(top: 200) {\\n    flatData {\\n      ...PerkCommonFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  runesMap: queryRunesSlotsV1Contents {\\n    flatData {\\n      ...RunesSlotsFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  champions: queryChampionsV1Contents(top: 200) {\\n    flatData {\\n      ...ChampionCommonFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  bannerPlacements: queryBannerSystemPlacementsV1Contents {\\n    flatData {\\n      ...BannerPlacementsFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n}\\n\\nfragment LolSeasonFragment on SeasonsV1DataFlatDto {\\n  slug\\n  name\\n  __typename\\n}\\n\\nfragment LolTopBannerFragment on TopBannersV1DataFlatDto {\\n  slug\\n  analyticsName\\n  disallowedUsersAttributes\\n  disallowedEnvVars\\n  allowedUserLevels\\n  platform\\n  whiteListUserId {\\n    userId\\n    __typename\\n  }\\n  icon\\n  text\\n  linkText\\n  linkUrl\\n  openLinkInNewTab\\n  background\\n  withCloseButton\\n  __typename\\n}\\n\\nfragment PerkCommonFragment on RunesV1DataFlatDto {\\n  riotId\\n  name\\n  slug\\n  matchResultStatsLabels\\n  __typename\\n}\\n\\nfragment RunesSlotsFragment on RunesSlotsV1DataFlatDto {\\n  key\\n  riotId\\n  name\\n  rows {\\n    perk {\\n      flatData {\\n        riotId\\n        __typename\\n      }\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment PromoModalFragment on PromoOfferModalV1DataFlatDto {\\n  slug\\n  analyticsName\\n  allowedUserLevels\\n  platform\\n  whiteListUserId {\\n    userId\\n    __typename\\n  }\\n  disallowedUsersAttributes\\n  disallowedEnvVars\\n  title\\n  value\\n  subTitle\\n  label\\n  labelBackground\\n  modalBackground\\n  buttonTitle\\n  buttonLink\\n  __typename\\n}\\n\\nfragment ReleaseNotesFragment on ReleaseNotesV1DataFlatDto {\\n  slug\\n  title\\n  subTitle\\n  content\\n  buttonTitle\\n  buttonLink\\n  allowedUserLevels\\n  platform\\n  whiteListUserId {\\n    userId\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ChampionCommonFragment on ChampionsV1DataFlatDto {\\n  slug\\n  riotId\\n  name\\n  title\\n  isInFreeRotation\\n  abilities {\\n    flatData {\\n      ...ChampionAbilityCommonFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  type {\\n    flatData {\\n      ...ChampionTypeFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  difficulty {\\n    flatData {\\n      ...ChampionDifficultyFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  customDifficulty {\\n    flatData {\\n      ...ChampionDifficultyFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment ChampionTypeFragment on ChampionTypeV1DataFlatDto {\\n  slug\\n  name\\n  __typename\\n}\\n\\nfragment ChampionDifficultyFragment on ChampionDifficultyV1DataFlatDto {\\n  slug\\n  name\\n  color\\n  level\\n  __typename\\n}\\n\\nfragment ChampionAbilityCommonFragment on ChampionsAbilitiesV1DataFlatDto {\\n  slug\\n  name\\n  activationKey\\n  __typename\\n}\\n\\nfragment GameItemCommonFragment on GameItemsV1DataFlatDto {\\n  riotId\\n  name\\n  type {\\n    flatData {\\n      slug\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment SummonerSpellCommonFragment on SummonersSpellsV1DataFlatDto {\\n  riotId\\n  slug\\n  name\\n  __typename\\n}\\n\\nfragment BannerPlacementsFragment on BannerSystemPlacementsV1DataFlatDto {\\n  banners {\\n    flatData {\\n      ...BannerConfigFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  takeovers {\\n    flatData {\\n      ...TakeoverConfigFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment BannerConfigFragment on BannerSystemConfigV1DataFlatDto {\\n  location\\n  banners {\\n    banner {\\n      flatData {\\n        ...BannerFragment\\n        __typename\\n      }\\n      __typename\\n    }\\n    minWidth\\n    weight\\n    experimentalGroupName\\n    platform\\n    userStatus\\n    country\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment BannerFragment on BannerSystemBannerV1DataFlatDto {\\n  url\\n  type\\n  title\\n  titleColor\\n  subtitle\\n  subtitleColor\\n  buttonText\\n  buttonColor\\n  buttonTextColor\\n  analyticsSlug\\n  analyticsType\\n  image {\\n    flatData {\\n      ...BannerImageFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  responsiveText {\\n    minWidth\\n    maxWidth\\n    title\\n    description\\n    buttonText\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment BannerImageFragment on BannerSystemBannerImageV1DataFlatDto {\\n  imageSrc\\n  sources {\\n    width\\n    src\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TakeoverConfigFragment on BannerSystemTakeoverConfigV1DataFlatDto {\\n  location\\n  takeovers {\\n    takeover {\\n      flatData {\\n        ...TakeoverFragment\\n        __typename\\n      }\\n      __typename\\n    }\\n    minWidth\\n    weight\\n    experimentalGroupName\\n    platform\\n    userStatus\\n    country\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TakeoverFragment on BannerSystemTakeoverV1DataFlatDto {\\n  url\\n  analyticsSlug\\n  analyticsType\\n  image {\\n    flatData {\\n      ...TakeoverImageFragment\\n      __typename\\n    }\\n    __typename\\n  }\\n  __typename\\n}\\n\\nfragment TakeoverImageFragment on BannerSystemTakeoverImageV1DataFlatDto {\\n  imageSrc\\n  sources {\\n    src\\n    width\\n    __typename\\n  }\\n  __typename\\n}\\n"}',
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

export const matchData = async (summonerName, server, skip) => {
  summonerName = decodeURIComponent(summonerName);
  const res = await fetch(
    "https://app.mobalytics.gg/api/lol/graphql/v1/query",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en_us",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-moba-client": "mobalytics-web",
        "x-moba-proxy-gql-ops-name": "LolProfilePageMoreMatchesQuery",
      },
      referrer: "https://app.mobalytics.gg/lol/profile/euw/thpizzabox/overview",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: `{\"operationName\":\"LolProfilePageMoreMatchesQuery\",\"variables\":{\"top\":10,\"withMatchParticipantDetailed\":false,\"skip\":${skip},\"summonerName\":\"${summonerName}\",\"region\":\"${server}\",\"cChampionId\":null,\"cQueue\":null,\"cRolename\":null,\"cSeasonId\":null},\"extensions\":{\"persistedQuery\":{\"version\":1,\"sha256Hash\":\"5d9837cdf73ae22d321095e4420e9594ba0275c5ffe236bc45662b12cb6cccae\"}}}`,
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
export const summonerData = async (summonerName, server) => {
  summonerName = decodeURIComponent(summonerName);
  const res = await fetch(
    "https://app.mobalytics.gg/api/lol/graphql/v1/query",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en_us",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-moba-client": "mobalytics-web",
        "x-moba-proxy-gql-ops-name": "LolProfilePageSummonerInfoQuery",
      },
      referrer: "https://app.mobalytics.gg/lol/profile/euw/thpizzabox/overview",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: `{"operationName":"LolProfilePageSummonerInfoQuery","variables":{"summonerName":"${summonerName}","region":"${server}","sQueue":null,"sRole":null,"sChampion":null},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"8ad5d73cd5306b9f5b423a0285e4a078976f125e0424b227e5f244af50954da7"}}}`,
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
