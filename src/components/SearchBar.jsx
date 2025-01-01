import React, { useState } from "react";

const SearchBar = () => {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  return (
    <div className="container my-4">
      {/* Search bar */}
      <div className="row mb-3">
        <div className="col-12 col-md-8 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search properties by type..."
          />
        </div>
      </div>

      {/* Advanced search button */}
      <div className="row text-center mb-3">
        <div className="col-12">
          <button className="btn btn-dark" onClick={toggleAdvancedSearch}>
            {showAdvancedSearch
              ? "Hide Advanced Search"
              : "Show Advanced Search"}
          </button>
        </div>
      </div>

      {/* Advanced search dropdown */}
      {showAdvancedSearch && (
        <div className="row">
          <div className="col-12 col-md-8 mx-auto p-3 border rounded">
            <h5>Advanced Search Options</h5>
            <div className="form-group mb-3">
              <label>Price Range:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter price range..."
              />
            </div>
            <div className="form-group mb-3">
              <label>Location:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter location..."
              />
            </div>
            <div className="form-group mb-3">
              <label>Number of Bedrooms:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter number of bedrooms..."
              />
            </div>
            <button className="btn btn-dark">Search</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
