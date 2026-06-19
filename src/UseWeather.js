
import { useState, useEffect } from "react";

const API_KEY = "6ccccfd5c30f20544bfebabc999fe6ce";
const BASE    = "https://api.openweathermap.org/data/2.5";

export function useWeather(defaultCity = "New York") {
  const [weather,  setWeather]  = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState("");

  async function fetchAll(city) {
    setLoading(true);
    setError("");
    try {
      const q      = encodeURIComponent(city);
      const params = `appid=${API_KEY}&units=metric`;

      const [wRes, fRes] = await Promise.all([
        fetch(`${BASE}/weather?q=${q}&${params}`),
        fetch(`${BASE}/forecast?q=${q}&${params}`),
      ]);

      const w = await wRes.json();
      const f = await fRes.json();

      if (!wRes.ok) {
        throw new Error(w.message || "City not found");
      }

      if (!fRes.ok) {
        throw new Error(f.message || "Forecast data unavailable");
      }

      setWeather(w);
      setForecast(f.list ?? []);
    } catch (e) {
      const message = e?.message || "Unable to load weather. Please try again.";
      setError(message);
      setWeather(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { fetchAll(defaultCity); }, []); // eslint-disable-line

  return { weather, forecast, loading, error, fetchAll };
}