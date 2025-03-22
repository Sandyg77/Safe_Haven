import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { DatePicker, NumberPicker, Combobox } from "react-widgets";
import "react-widgets/styles.css";

const AdvancedSearch = ({ onSearch }) => {
  // State to manage search criteria
  const [criteria, setCriteria] = useState({
    type: "",
    minPrice: null,
    maxPrice: null,
    minBedrooms: null,
    maxBedrooms: null,
    dateAdded: null,
    postcode: "",
  });

  const [showForm, setShowForm] = useState(false); // State to toggle form visibility

  // Handle form submission and validation
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (criteria.minPrice &&
        criteria.maxPrice &&
        criteria.minPrice > criteria.maxPrice) ||
      (criteria.minBedrooms &&
        criteria.maxBedrooms &&
        criteria.minBedrooms > criteria.maxBedrooms)
    ) {
      alert("Minimum values cannot be greater than maximum values.");
      return;
    }

    onSearch(criteria);
  };

  return (
    <div
      style={{ textAlign: "center", marginBottom: "10px", marginTop: "30px" }}
    >
      <Button
        variant="dark"
        onClick={() => setShowForm((prev) => !prev)}
        className="mb-3"
      >
        {showForm ? "Hide Advanced Search" : "Show Advanced Search"}
      </Button>

      {showForm && (
        <Card
          className="mx-auto"
          style={{ maxWidth: "500px", padding: "10px" }}
        >
          <Card.Body>
            <form
              onSubmit={handleSubmit}
              id="advancedSearch"
              name="advancedSearch"
            >
              <div className="mb-3">
                <label for="advancedSearch">Type:</label>
                <Combobox
                  data={["House", "Flat", "Bungalow", "Detached Bungalow"]}
                  value={criteria.type} // Set selected value
                  onChange={(value) =>
                    setCriteria((prev) => ({ ...prev, type: value }))
                  }
                  placeholder="Select a property type..."
                  id="type"
                  name="type"
                />
              </div>
              <div className="mb-3">
                <label>Min Price:</label>
                <NumberPicker
                  placeholder="Select min price..."
                  value={criteria.minPrice}
                  onChange={(value) =>
                    setCriteria((prev) => ({ ...prev, minPrice: value }))
                  }
                  min={0}
                />
              </div>
              <div className="mb-3">
                <label>Max Price:</label>
                <NumberPicker
                  placeholder="Select max price..."
                  value={criteria.maxPrice}
                  onChange={(value) =>
                    setCriteria((prev) => ({ ...prev, maxPrice: value }))
                  }
                  min={0}
                />
              </div>
              <div className="mb-3">
                <label>Min Bedrooms:</label>
                <NumberPicker
                  placeholder="Select min bedrooms..."
                  value={criteria.minBedrooms}
                  onChange={(value) =>
                    setCriteria((prev) => ({ ...prev, minBedrooms: value }))
                  }
                  min={0}
                />
              </div>
              <div className="mb-3">
                <label>Max Bedrooms:</label>
                <NumberPicker
                  placeholder="Select max bedrooms..."
                  value={criteria.maxBedrooms}
                  onChange={(value) =>
                    setCriteria((prev) => ({ ...prev, maxBedrooms: value }))
                  }
                  min={0}
                />
              </div>
              <div className="mb-3">
                <label>Date Added:</label>
                <DatePicker
                  value={criteria.dateAdded}
                  onChange={(value) =>
                    setCriteria((prev) => ({ ...prev, dateAdded: value }))
                  }
                  placeholder="Select a date..."
                />
              </div>
              <div className="mb-3">
                <label for="postcode">Postcode:</label>
                <input
                  type="text"
                  name="postcode"
                  id="postcode"
                  placeholder="Select postcode..."
                  className="form-control" // bootstrap class
                  value={criteria.postcode}
                  onChange={(e) =>
                    setCriteria((prev) => ({
                      ...prev,
                      postcode: e.target.value,
                    }))
                  }
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
