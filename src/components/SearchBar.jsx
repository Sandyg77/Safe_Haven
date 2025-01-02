import React, { useState } from "react";
import { DateTimePicker, NumberPicker } from "react-widgets";
import "react-widgets/styles.css";

const SearchBar = () => {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);

  // States for each search criteria
  const [type, setType] = useState("");
  const [price, setPrice] = useState([0, 10000000]); // Min max prices
  const [bedrooms, setBedrooms] = useState([1, 7]);
  const [date, setDate] = useState(null);
  const [postcode, setPostcode] = useState("");

  const toggleAdvancedSearch = () => {
    setShowAdvancedSearch(!showAdvancedSearch);
  };

  return (
    <div className="container my-4">
      {/* Search bar */}
      <div className="row mb-3">
        <div className="col-12 col-md-3 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search properties by type..."
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
      </div>

      {/* Advanced search button */}
      <div className="row text-center mb-3">
        <div className="col-12">
          <button className="btn btn-dark" onClick={toggleAdvancedSearch}>
            {showAdvancedSearch
              ? "Hide Advanced Search"
              : "Show Advanced Search"}{" "}
            {/*Using ternary operator*/}
          </button>
        </div>
      </div>

      {/* Advanced search dropdown */}
      {showAdvancedSearch && (
        <div className="row">
          <div className="col-12 col-md-8 mx-auto p-3 border rounded">
            <h5>Advanced Search Options</h5>

            {/*Price Range */}
            <div className="form-group mb-3">
              <label>Price Range:</label>
              <input
                min={0}
                max={10000000}
                value={price}
                onChange={setPrice}
                className="form-control"
              />
              <div>
                <span>Min: ${price[0]}</span> - <span>Max: ${price[1]}</span>
              </div>
            </div>

            {/*Postcode Area */}
            <div className="form-group mb-3">
              <label>Postcode Area:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter postcode area..."
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              />
            </div>

            {/*Number of Bedrooms*/}
            <div className="form-group mb-3">
              <label>Number of Bedrooms:</label>
              <NumberPicker
                min={1}
                max={10}
                value={bedrooms}
                onChange={setBedrooms}
                className="form-control"
              />
              <div>
                <span>Min: {bedrooms[0]}</span> -{" "}
                <span>Max: {bedrooms[1]}</span>
              </div>

              {/* Date Added */}
              <div className="form-group mb-3">
                <label>After Date:</label>
                <DateTimePicker
                  value={date}
                  onChange={setDate}
                  time={false}
                  className="form-control"
                  placeholder="Select Date"
                />
              </div>
            </div>
            <button className="btn btn-dark">Search</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
