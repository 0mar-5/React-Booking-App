import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSearchResults } from "../../store/searchSlice";

function SearchBar({ width, isCollapsed }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("EG");

  const handleSearch = () => {
    if (!query || !country) return;
    console.log(query, country);
    dispatch(fetchSearchResults({ query, country })).then(() => {
      navigate("/search-results");
    });
  };
  return (
    <div
      className={`${width}
    absolute top-[88%] left-1/2 -translate-x-1/2
    flex flex-col sm:flex-row flex-wrap
    items-center gap-4
    bg-white shadow-md rounded-lg
    transition-all duration-400
    px-4 py-3`}
    >
      {/* Search */}
      <div className="flex flex-col w-full sm:w-auto flex-1 min-w-[140px]">
        <label className="text-xs text-gray-400 uppercase font-semibold">
          Search
        </label>
        <input
          type="text"
          placeholder="Hotel"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="mt-1 bg-gray-100 rounded-lg px-4 py-2 text-gray-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>

      {/* Country */}
      <div className="flex flex-col w-full sm:w-auto flex-1 min-w-[140px]">
        <label className="text-xs text-gray-400 uppercase font-semibold">
          Country
        </label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="mt-1 bg-gray-100 rounded-lg px-4 py-2 text-gray-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        >
          <option value="EG">Egypt</option>
          <option value="MA">Morocco</option>
          <option value="GR">Greece</option>
          <option value="US">United States</option>
        </select>
      </div>

      {/* Check-in */}
      <div className="flex flex-col w-full sm:w-auto flex-1 min-w-[140px]">
        <label className="text-xs text-gray-400 uppercase font-semibold">
          Check-In
        </label>
        <input
          type="date"
          className="mt-1 bg-gray-100 rounded-lg px-4 py-2 text-gray-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
      </div>
      {/* Check-Out */}
      {isCollapsed && (
        <div className="flex flex-col w-full sm:w-auto flex-1 min-w-[140px]">
          <label className="text-xs text-gray-400 uppercase font-semibold">
            Check-Out
          </label>
          <input
            type="date"
            className="mt-1 bg-gray-100 rounded-lg px-4 py-2 text-gray-800 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-2 sm:mt-6 sm:ml-auto">
        <button className="text-sm font-semibold text-gray-800 hover:underline whitespace-nowrap">
          Clear Filters
        </button>
        <button
          onClick={handleSearch}
          className="bg-red-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
