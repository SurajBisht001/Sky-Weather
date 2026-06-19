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
    <form className="search-bar-form" onSubmit={handleSubmit}>
      <div className="search-bar">
        <svg className="search-bar__icon" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2.5" strokeLinecap="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>

        <input
          className="search-bar__input"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Search city..."
        />
      </div>
    </form>
  );
}
