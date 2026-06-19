import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [val, setVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = val.trim();
    if (city) { onSearch(city); setVal(""); }
  };

  return (
    <form onSubmit={handleSubmit} style={{ flex: 1, display: "flex", justifyContent: "center" }}>
      <div
        style={{
          background: "rgba(255,255,255,0.88)",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          padding: "10px 22px",
          gap: "10px",
          width: "100%",
          boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Search city..."
          style={{
            border: "none",
            background: "transparent",
            outline: "none",
            fontSize: "0.9rem",
            color: "#333",
            flex: 1,
            fontFamily: "inherit",
          }}
        />
      </div>
    </form>
  );
}
