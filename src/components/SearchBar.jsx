import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState(""); // State to track the search term entered by the user

  // Function to update the searchTerm state whenever the input value changes
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to trigger the search action by calling the `onSearch` prop
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
