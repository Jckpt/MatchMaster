export const getServer = (rawServer) => {
  switch (rawServer.toLowerCase()) {
    case "euw":
      return "euw1";
    case "eune":
      return "eun1";
    case "na":
      return "na1";
    case "kr":
      return "kr";
    case "jp":
      return "jp1";
    case "br":
      return "br1";
    case "la1":
      return "la1";
    case "la2":
      return "la2";
    case "oc":
      return "oc1";
    case "tr":
      return "tr1";
    case "ru":
      return "ru";
    default:
      return "euw1";
  }
};
export const getRegion = (server) => {
  switch (server) {
    case "euw1":
      return "europe";
    case "eun1":
      return "europe";
    case "tr1":
      return "europe";
    case "ru":
      return "europe";
    case "kr":
      return "asia";
    case "jp1":
      return "asia";
    case "na1":
      return "americas";
    case "br1":
      return "americas";
    case "la1":
      return "americas";
    case "la2":
      return "americas";
    case "oc1":
      return "americas";
    default:
      return "europe";
  }
};
