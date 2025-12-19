import { useState } from "react";

export const SearchBar = ({ onSearch, loading }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSumbit} className="search-form">
      <input
        type="text"
        value={inputValue}
        placeholder="Enter city name"
        disabled={loading}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};
