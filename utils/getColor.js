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
