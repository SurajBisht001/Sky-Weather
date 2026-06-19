import { formatTime, mpsToMph } from "./Help";

export default function WeatherStats({ data }) {
  const stats = [
    { label: "High",    val: `${Math.round(data.main.temp_max)}°` },
    { label: "Wind",    val: `${mpsToMph(data.wind.speed)}mph`    },
    { label: "Sunrise", val: formatTime(data.sys.sunrise, data.timezone) },
    { label: "Low",     val: `${Math.round(data.main.temp_min)}°` },
    { label: "Rain",    val: `${data.main.humidity}%`              },
    { label: "Sunset",  val: formatTime(data.sys.sunset,  data.timezone) },
  ];

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        padding: "26px 30px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px 18px",
        alignSelf: "center",
        minWidth: "290px",
      }}
    >
      {stats.map(({ label, val }) => (
        <div key={label} style={{ textAlign: "center" }}>
          <div
            style={{
              color: "rgba(255,255,255,0.92)",
              fontSize: "1.55rem",
              fontWeight: "600",
              lineHeight: 1,
            }}
          >
            {val}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.7rem",
              marginTop: "6px",
              letterSpacing: "0.04em",
            }}
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}