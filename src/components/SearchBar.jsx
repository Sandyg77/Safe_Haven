import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Import FontAwesome search icon

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Call onSearch when search is performed
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Search properties by type or postcode..."
        value={searchTerm}
        onChange={handleInputChange}
        className="form-control"
      />
      <span
        className="input-group-text"
        onClick={handleSearch}
        style={{ cursor: "pointer" }}
      >
        <FaSearch />
      </span>
    </div>
  );
};

export default SearchBar;
