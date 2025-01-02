import { Card } from "react-bootstrap";
import propertyData from "../data/properties.json";
import styles from "../styles/Properties.module.css";

const Properties = () => {
  // Accessing the properties array from the JSON data
  const properties = propertyData.properties;

  return (
    <Card style={{ width: "40rem" }}>
      <Card.Header>Available Properties 🏡</Card.Header>
      <Card.Body>
        <br />
        {/* Checks whether data is available before rendering - && */}
        {properties &&
          properties.map((property) => {
            return (
              <Card
                className={`${styles["card-hover"]} mt-2 mb-4 ms-1 me-3 p-4`}
                key={property.id}
              >
                <div>
                  <div className="d-flex">
                    <img
                      src={property.picture}
                      alt={`Property ${property.id}`}
                      className="img-fluid w-50"
                    />
                  </div>
                  <br />
                  <p>
                    <strong>Type: {property.type}</strong>
                  </p>
                  <p>Price: ${property.price}</p>
                  <p>Location: {property.location}</p>
                  <p>
                    Added: {property.added.day} {property.added.month}{" "}
                    {property.added.year}
                  </p>
                  <button className="btn btn-dark mt-3">
                    Add to Favourites
                  </button>
                  <button className="btn btn-dark mt-3 ms-3">
                    View Details
                  </button>
                </div>
              </Card>
            );
          })}
      </Card.Body>
    </Card>
  );
};

export default Properties;
