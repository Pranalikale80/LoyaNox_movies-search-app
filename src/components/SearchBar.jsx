import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query);
    }
  };

  return (
    <div className="flex justify-center mb-8">
  <div className="flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-4 py-2 w-[400px]">

    <input
      type="text"
      placeholder="Search movies..."
      className="bg-transparent outline-none flex-1 text-white placeholder-gray-300"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />

    <button onClick={handleSearch}>
      <Search className="text-white cursor-pointer" />
    </button>

  </div>
</div>
  );
};

export default SearchBar;