import { BASE_URL } from "./baseURL";

export const fetcher = (path) =>
  fetch(`${BASE_URL}${path}`).then((res) => res.json());

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

export const getSearchParams = (participants) => {
  const championIds = participants.map((participant) => participant.championId);
  const searchParams = new URLSearchParams({
    championIds: championIds.join(","),
  });
  return searchParams.toString();
};

export const getKdaColor = (KDA) => {
  if (KDA < 3.0) {
    return "";
  } else if (KDA < 4.0) {
    return "text-blue-400";
  } else if (KDA < 5.0) {
    return "text-blue-600";
  } else {
    return "text-orange-500";
  }
};

export const getWrColor = (WR) => {
  if (WR < 50) {
    return "";
  } else if (WR < 55) {
    return "text-blue-400";
  } else if (WR < 60) {
    return "text-blue-600";
  } else {
    return "text-orange-500";
  }
};

export const getMatchResult = (summonerTeam, redTeam) => {
  if (summonerTeam === "RED" && redTeam.result === "WON") {
    return "WON";
  }
  return "LOST";
};

export function timeAgo(timestamp) {
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;

  const current = new Date().getTime();
  const elapsed = current - timestamp;

  if (elapsed < msPerMinute) {
    const seconds = Math.round(elapsed / 1000);
    return `${seconds}s ago`;
  } else if (elapsed < msPerHour) {
    const minutes = Math.round(elapsed / msPerMinute);
    return `${minutes}m ago`;
  } else if (elapsed < msPerDay) {
    const hours = Math.round(elapsed / msPerHour);
    return `${hours}h ago`;
  } else if (elapsed < msPerMonth) {
    const days = Math.round(elapsed / msPerDay);
    return `${days}d ago`;
  } else if (elapsed < msPerYear) {
    const months = Math.round(elapsed / msPerMonth);
    return months === 1 ? "month ago" : `${months} months ago`;
  } else {
    const years = Math.round(elapsed / msPerYear);
    return `${years}y ago`;
  }
}

export function prasedDuration(duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  const matchDuration = `${paddedMinutes}m ${paddedSeconds}s`;
  return matchDuration;
}
