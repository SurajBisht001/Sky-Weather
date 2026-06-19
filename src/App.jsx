import Background      from "./Bg";
import SearchBar       from "./SearchBar.jsx";
import CurrentWeather  from "./Weather";
import WeatherStats    from "./WeatherStats.jsx";
import ForecastStrip   from "./Forecast";
import { useWeather }  from "./UseWeather";

export default function App() {
  const { weather, forecast, loading, error, fetchAll } = useWeather("New York");

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      <Background />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          padding: "24px 36px 24px",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: "30px", flexWrap: "wrap", gap: "16px" }}>
          <span
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.68rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              flexShrink: 0,
            }}
          >
            Weather App
          </span>

          <SearchBar onSearch={fetchAll} />

          <div style={{ width: "90px", flexShrink: 0 }} />
        </div>

        {loading && (
          <div
            style={{
              color: "rgba(255,255,255,0.6)",
              textAlign: "center",
              marginTop: "80px",
              fontSize: "1rem",
              letterSpacing: "0.12em",
            }}
          >
            Loading weather…
          </div>
        )}

        {error && !loading && (
          <div
            style={{
              color: "#ff9999",
              textAlign: "center",
              marginTop: "80px",
              fontSize: "1rem",
              maxWidth: "520px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.5,
            }}
          >
            <strong>⚠ Unable to load weather:</strong> {error}
          </div>
        )}

        {weather && !loading && (
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "24px",
                flex: 1,
                flexWrap: "wrap",
              }}
            >
              <CurrentWeather data={weather} />

              <WeatherStats data={weather} />
            </div>

            <ForecastStrip list={forecast} />
          </div>
        )}
      </div>
    </div>
  );
}
