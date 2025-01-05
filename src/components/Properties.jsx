import React, { useState } from "react";
import { Card } from "react-bootstrap";
import propertyData from "../data/properties.json";
import styles from "../styles/Properties.module.css";
import { Link } from "react-router-dom";
import AdvancedSearch from "./AdvancedSearch";
import SearchBar from "./SearchBar";

const Properties = ({ onAddToFavourites, favourites, setFavourites }) => {
  // State to manage filtered properties
  const [filteredProperties, setFilteredProperties] = useState(
    propertyData.properties
  );

  // Handle the drop event for removing properties from favourites
  const handleDrop = (e) => {
    e.preventDefault();
    const removedProp = JSON.parse(e.dataTransfer.getData("removeProperty")); // To retrieve the dropped property data
    if (favourites.length > 0) {
      // Update favourites by removing the dropped property
      setFavourites(
        favourites.filter(function (prop) {
          return prop.id !== removedProp.id;
        })
      );
    }
  };

  // Handling the start of drag event and set property data to be transferred
  const handleDragStart = (e, property) => {
    e.dataTransfer.setData("property", JSON.stringify(property)); // Pass property as JSON
  };

  // Handle adding a property to favourites
  const handleAddToFavourites = (property) => {
    onAddToFavourites(property); // Add the property to favourites
  };

  const handleDragOver = (e) => e.preventDefault();

  // Handle advanced search filtering based on criteria
  const handleSearch = (criteria) => {
    const filtered = propertyData.properties.filter((property) => {
      // Check if the property's type matches the type in the criteria.
      const matchesType = criteria.type
        ? property.type.toLowerCase().includes(criteria.type.toLowerCase())
        : true;
      const matchesPrice =
        (!criteria.minPrice || property.price >= criteria.minPrice) &&
        (!criteria.maxPrice || property.price <= criteria.maxPrice);
      const matchesBedrooms =
        (!criteria.minBedrooms || property.bedrooms >= criteria.minBedrooms) &&
        (!criteria.maxBedrooms || property.bedrooms <= criteria.maxBedrooms);
      const matchesDate = criteria.dateAdded
        ? new Date(property.added.year, 0, 1) <= criteria.dateAdded
        : true;
      const matchesPostcode = criteria.postcode
        ? property.location
            .toLowerCase() // Convert to lowercase for case-insensitive comparison
            .includes(criteria.postcode.toLowerCase())
        : true;

      // Combine all criteria using logical AND to ensure the property matches all conditions.
      return (
        matchesType &&
        matchesPrice &&
        matchesBedrooms &&
        matchesDate &&
        matchesPostcode
      );
    });

    setFilteredProperties(filtered);
  };

  // Handle the search term from the SearchBar (by type or postcode)
  const handleSimpleSearch = (searchTerm) => {
    const filtered = propertyData.properties.filter((property) => {
      const matchesType =
        searchTerm &&
        property.type.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPostcode =
        searchTerm &&
        property.postcode.toLowerCase().includes(searchTerm.toLowerCase());

      // Combine both criteria: matches by type or matches by postcode
      return matchesType || matchesPostcode;
    });

    setFilteredProperties(filtered);
  };

  return (
    <div onDrop={handleDrop} onDragOver={handleDragOver}>
      {/* Search Components */}
      <SearchBar onSearch={handleSimpleSearch} />
      <AdvancedSearch onSearch={handleSearch} />
      <h1 style={{ marginBottom: "60px" }}>
        <strong>Available Properties</strong>
      </h1>
      <div
        className="container"
        style={{ maxHeight: "600px", overflowY: "scroll", marginTop: "-30px" }}
      >
        <div className="row justify-content-start mt-5">
          {/* Checks whether data is available before rendering */}
          {filteredProperties &&
            filteredProperties.map((property) => (
              <Card
                className={`${styles.card} col-xl-5 col-md-12 me-3 mb-3`}
                key={property.id}
                draggable
                onDragStart={(e) => handleDragStart(e, property)}
              >
                <div className={styles.cardContent}>
                  <img
                    src={property.picture}
                    alt={`Property ${property.id}`}
                    className={styles.propertyImage}
                  />
                  <p>
                    <strong>Type: {property.type}</strong>
                  </p>
                  <p>Price: ${property.price}</p>
                  <p style={{ minHeight: "50px" }}>
                    Location: {property.location}
                  </p>
                  <p style={{ minHeight: "50px" }}>
                    Added: {property.added.day} {property.added.month}{" "}
                    {property.added.year}
                  </p>
                  <button
                    className="btn btn-dark mt-3"
                    onClick={() => handleAddToFavourites(property)}
                  >
                    Add to Favourites
                  </button>
                  <Link
                    to={`/property/${property.id}`}
                    className="btn btn-dark mt-3 ms-3"
                  >
                    View Details
                  </Link>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
