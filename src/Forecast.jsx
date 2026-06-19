import { formatForecastItem } from "./Help";
import "./Forecast.css";

function ForecastCard({ item }) {
  const { date, time } = formatForecastItem(item.dt);
  const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.22)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "14px",
        padding: "12px 14px",
        minWidth: "86px",
        maxWidth: "86px",
        textAlign: "center",
        flexShrink: 0,
      }}
    >
      <div style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.66rem" }}>{date}</div>
      <div style={{ color: "rgba(255,255,255,0.58)", fontSize: "0.66rem", marginBottom: "6px" }}>{time}</div>

      <img
        src={iconUrl}
        width="44"
        height="44"
        alt={item.weather[0].description}
        style={{ filter: "brightness(1.1)" }}
      />

      <div
        style={{
          color: "#fff",
          fontSize: "1.12rem",
          fontWeight: "600",
          marginTop: "4px",
        }}
      >
        {Math.round(item.main.temp)}°
      </div>
    </div>
  );
}

export default function ForecastStrip({ list }) {
  if (!list.length) return null;

  return (
    <div style={{ marginTop: "36px" }}>
      <h3
        style={{
          color: "rgba(255,255,255,0.78)",
          fontSize: "1.5rem",
          fontWeight: "550",
          marginBottom: "14px",
          letterSpacing: "0.04em",
        }}
      >
        Forecast
      </h3>

      <div
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          paddingBottom: "8px",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(255,255,255,0.18) transparent",
        }}
      >
        {list.slice(0, 12).map((item) => {
  console.log(item.dt);

  return (
    <ForecastCard
      key={item.dt}
      item={item}
    />
  );
})}
      </div>
    </div>
  );
}