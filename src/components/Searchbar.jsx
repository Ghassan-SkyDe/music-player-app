import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className="focus-whitin:text-gray-600 p-2 text-gray-400"
    >
      <label htmlFor="serach-field" className="sr-only">
        Search all songs
      </label>
      <div className="flex flex-row items-center justify-start">
        <button type="submit">
          <FiSearch className="ml-4 h-5 w-5" />
        </button>
        <input
          type="search"
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 bg-transparent p-4 text-base text-white placeholder-gray-500 focus:outline-none"
        />
      </div>
    </form>
  );
};

export default Searchbar;
