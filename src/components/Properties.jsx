import { Card } from "react-bootstrap";
import propertyData from "../data/properties.json";

const Properties = () => {
  // Accessing the properties array from the JSON data
  const properties = propertyData.properties;

  return (
    <Card style={{ width: "50rem" }}>
      <Card.Header>Available Properties 🏡</Card.Header>
      <Card.Body>
        <br />
        {/* Checks whether data is available before rendering - && */}
        {properties &&
          properties.map((property) => {
            return (
              <div className="box" key={property.id}>
                <p>
                  <br />
                  <strong>Type: {property.type}</strong>
                </p>
                <p>Price: ${property.price}</p>
                <p>Location: {property.location}</p>
                <p>
                  Added: {property.added.day} {property.added.month}{" "}
                  {property.added.year}
                </p>
                <img
                  src={property.picture}
                  alt={`Property ${property.id}`}
                  className="img-fluid"
                />{" "}
                {/* bootstrap class used to make image responsivw */}
                <button className="btn btn-dark">Add to Favourites</button>
              </div>
            );
          })}
      </Card.Body>
    </Card>
  );
};

export default Properties;
