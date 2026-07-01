import { formatDate } from "./Help";

export default function CurrentWeather({ data }) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div style={{ flex: "1 1 280px" }}>
      <h1
        style={{
          color: "#fff",
          fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
          fontWeight: "475",
          margin: 0,
          lineHeight: 1.1,
          textShadow: "0 2px 20px rgba(0,0,0,0.25)",
        }}
      >
        
        {data.name}, {data.sys.country}
      </h1>

      <p
        style={{
          color: "rgba(255,255,255,0.72)",
          fontSize: "1rem",
          margin: "6px 0 30px",
          fontWeight: 400,
        }}
      >
        {formatDate(data.dt)}
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img
          src={iconUrl}
          width="110"
          height="110"
          alt={data.weather[0].description}
          style={{
            filter: "brightness(1.15) drop-shadow(0 4px 18px rgba(255,255,255,0.35))",
          }}
        />
        <div>
          <div
            style={{
              color: "#fff",
              fontSize: "clamp(4rem, 8vw, 6rem)",
              fontWeight: "200",
              lineHeight: 1,
              textShadow: "0 2px 30px rgba(0,0,0,0.2)",
            }}
          >
            {Math.round(data.main.temp)}°
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "1.05rem",
              textTransform: "capitalize",
              marginTop: "4px",
            }}
          >
            {data.weather[0].description}
          </div>
        </div>
      </div>
    </div>
  );
}
