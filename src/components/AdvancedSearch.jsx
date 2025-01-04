import React, { useState } from "react";
import { Card, Button } from "react-bootstrap"; // Added Card and Button from Bootstrap

const AdvancedSearch = ({ onSearch }) => {
  const [criteria, setCriteria] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    maxBedrooms: "",
    dateAdded: "",
    postcode: "",
  });

  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Parse numerical values for validation
    const parsedCriteria = {
      ...criteria,
      minPrice: criteria.minPrice ? parseFloat(criteria.minPrice) : null,
      maxPrice: criteria.maxPrice ? parseFloat(criteria.maxPrice) : null,
      minBedrooms: criteria.minBedrooms
        ? parseInt(criteria.minBedrooms, 10)
        : null,
      maxBedrooms: criteria.maxBedrooms
        ? parseInt(criteria.maxBedrooms, 10)
        : null,
      dateAdded: criteria.dateAdded ? new Date(criteria.dateAdded) : null,
    };

    // Validate ranges
    if (
      (parsedCriteria.minPrice &&
        parsedCriteria.maxPrice &&
        parsedCriteria.minPrice > parsedCriteria.maxPrice) ||
      (parsedCriteria.minBedrooms &&
        parsedCriteria.maxBedrooms &&
        parsedCriteria.minBedrooms > parsedCriteria.maxBedrooms)
    ) {
      alert("Minimum values cannot be greater than maximum values.");
      return;
    }

    onSearch(parsedCriteria);
  };

  return (
    <div
      style={{ textAlign: "center", marginBottom: "10px", marginTop: "30px" }}
    >
      {/* Centered Toggle Button */}
      <Button
        variant="dark"
        onClick={() => setShowForm((prev) => !prev)}
        className="mb-3"
      >
        {showForm ? "Hide Advanced Search" : "Show Advanced Search"}
      </Button>

      {/* Form inside a Card */}
      {showForm && (
        <Card
          className="mx-auto"
          style={{ maxWidth: "500px", padding: "10px" }}
        >
          <Card.Body>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Type:</label>
                <input
                  type="text"
                  name="type"
                  className="form-control"
                  value={criteria.type}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Min Price:</label>
                <input
                  type="number"
                  name="minPrice"
                  className="form-control"
                  value={criteria.minPrice}
                  min="0"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Max Price:</label>
                <input
                  type="number"
                  name="maxPrice"
                  className="form-control"
                  value={criteria.maxPrice}
                  min="0"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Min Bedrooms:</label>
                <input
                  type="number"
                  name="minBedrooms"
                  className="form-control"
                  value={criteria.minBedrooms}
                  min="0"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Max Bedrooms:</label>
                <input
                  type="number"
                  name="maxBedrooms"
                  className="form-control"
                  value={criteria.maxBedrooms}
                  min="0"
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-">
                <label className="form-label">Date Added:</label>
                <input
                  type="date"
                  name="dateAdded"
                  className="form-control"
                  min="2022-01-01"
                  max="2024-12-31"
                  value={criteria.dateAdded}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Postcode:</label>
                <input
                  type="text"
                  name="postcode"
                  className="form-control"
                  value={criteria.postcode}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Button type="submit" variant="dark">
                  Search
                </Button>
              </div>
            </form>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default AdvancedSearch;
