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
    return seconds === 1 ? "1s ago" : `${seconds}s ago`;
  } else if (elapsed < msPerHour) {
    const minutes = Math.round(elapsed / msPerMinute);
    return minutes === 1 ? "1m ago" : `${minutes}m ago`;
  } else if (elapsed < msPerDay) {
    const hours = Math.round(elapsed / msPerHour);
    return hours === 1 ? "1h ago" : `${hours}h ago`;
  } else if (elapsed < msPerMonth) {
    const days = Math.round(elapsed / msPerDay);
    return days === 1 ? "1d ago" : `${days}d ago`;
  } else if (elapsed < msPerYear) {
    const months = Math.round(elapsed / msPerMonth);
    return months === 1 ? "1m ago" : `${months}m ago`;
  } else {
    const years = Math.round(elapsed / msPerYear);
    return years === 1 ? "1y ago" : `${years}y ago`;
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
