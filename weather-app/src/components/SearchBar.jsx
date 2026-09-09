import { useState } from "react";

function SearchBar({ setCity }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (!search.trim()) return;

    setCity(search.trim());
    setSearch("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex justify-center gap-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter city name..."
        className="w-72 rounded-xl px-5 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-yellow-400"
      />

      <button
        onClick={handleSearch}
        className="rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-yellow-500"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
