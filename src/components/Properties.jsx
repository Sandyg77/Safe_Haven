import { Card } from "react-bootstrap";
import propertyData from "../data/properties.json";
import styles from "../styles/Properties.module.css";
import { Link } from "react-router-dom";

const Properties = ({ onAddToFavourites }) => {
  // Accessing the properties array from the JSON data
  const properties = propertyData.properties;

  // Handling the start of drag event and set property data to be transferred
  const handleDragStart = (e, property) => {
    e.dataTransfer.setData("property", JSON.stringify(property)); // Pass property as JSON
  };

  // Handling the button add to favourites
  const handleAddToFavourites = (property) => {
    onAddToFavourites(property); // Add the property to favourites
  };

  return (
    <Card className={styles.cardContainer}>
      <Card.Header className={styles.cardHeader}>
        Available Properties 🏡
      </Card.Header>
      <Card.Body>
        {/* Checks whether data is available before rendering */}
        {properties &&
          properties.map((property) => (
            <Card
              className={`${styles.card} mt-2`}
              key={property.id}
              draggable
              onDragStart={(e) => handleDragStart(e, property)} // Attach the function drag handler to the entire property card
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
                <p>Location: {property.location}</p>
                <p>
                  Added: {property.added.day} {property.added.month}{" "}
                  {property.added.year}
                </p>
                <button
                  className="btn btn-dark mt-3"
                  onClick={() => handleAddToFavourites(property)} // Manually add property to favourites
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
      </Card.Body>
    </Card>
  );
};

export default Properties;
