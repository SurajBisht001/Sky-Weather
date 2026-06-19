export function formatTime(unix, tzOffset) {
  const d = new Date((unix + tzOffset) * 1000);
  const h = d.getUTCHours().toString().padStart(2, "0");
  const m = d.getUTCMinutes().toString().padStart(2, "0");
  return `${h}:${m}`;
}

export function formatDate(unix) {
  return new Date(unix * 1000).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export function mpsToMph(mps) {
  return (mps * 2.237).toFixed(1);
}

export function pad2(n) {
  return n.toString().padStart(2, "0");
}

export function formatForecastItem(unix) {
  const d = new Date(unix * 1000);
  return {
    date: `${pad2(d.getUTCDate())}.${pad2(d.getUTCMonth() + 1)}`,
    time: `${pad2(d.getUTCHours())}:${pad2(d.getUTCMinutes())}`,
  };
}

export default formatForecastItem