import { Card } from "react-bootstrap";

const Favourites = ({ favourites, setFavourites }) => {
  // Handling drop event
  const handleDrop = (e) => {
    e.preventDefault(); // prevents the defauult handling of drop event
    const property = JSON.parse(e.dataTransfer.getData("property")); // To retrieve the dropped property data

    // Checking for duplicates
    if (!favourites.find((fav) => fav.id === property.id)) {
      setFavourites([...favourites, property]); // Adds the property to favourites
    }
  };

  // Preventing default drag over
  const handleDragOver = (e) => e.preventDefault();

  // Handle removal of a property
  const handleRemove = (propertyId) => {
    setFavourites(favourites.filter((fav) => fav.id !== propertyId));
  };

  return (
    <Card style={{ width: "25rem", height: "245rem" }}>
      <Card.Header>Favourites 💖</Card.Header>
      <Card.Body
        onDrop={handleDrop} // Trigger handleDrop when an item is dropped
        onDragOver={handleDragOver} // Allow dragging over component
        className="border p-5"
      >
        {favourites.length === 0 ? (
          <p>Drag properties here to add to favourites.</p>
        ) : (
          favourites.map((property) => (
            <div key={property.id} className="mb-3">
              <img
                src={property.picture}
                alt={`Property ${property.id}`}
                className="img-fluid w-50 me-3"
              />
              <span>
                {property.type} - ${property.price}
              </span>
              <button
                className="btn btn-danger btn-sm ms-2 mt-5"
                onClick={() => handleRemove(property.id)} // Button to remove property from favourites
              >
                Remove
              </button>
            </div>
          ))
        )}
      </Card.Body>
    </Card>
  );
};

export default Favourites;
