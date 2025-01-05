import { Card } from "react-bootstrap";
import FavProperty from "./FavProperty";
import { FaTrashCan } from "react-icons/fa6";

const Favourites = ({ favourites, setFavourites }) => {
  // Handling drop event
  const handleDrop = (e) => {
    e.preventDefault();
    const property = JSON.parse(e.dataTransfer.getData("property")); // To retrieve the dropped property data

    // Checking for duplicates
    if (!favourites.find((fav) => fav.id === property.id)) {
      setFavourites([...favourites, property]); // Adds the property to favourites
    }
  };

  const handleDragStart = (e, property) => {
    console.log("Start", e);
    console.log("Start", property);
    e.dataTransfer.setData("removeProperty", JSON.stringify(property)); // Pass property as JSON
  };

  const handleDragOver = (e) => e.preventDefault();

  // Handle removal of a property
  const handleRemove = (propertyId) => {
    setFavourites(favourites.filter((fav) => fav.id !== propertyId));
  };

  // Clear all icon function
  const clearAll = () => {
    setFavourites([]); // Reset favourites to an empty array
  };

  return (
    <Card
      style={{
        width: "auto",
        maxHeight: "800px",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      <div className="row">
        <h3 className="col-6 ps-3">
          <b>Favourites</b>
        </h3>{" "}
        <div className="col-6 d-flex flex-row-reverse">
          <FaTrashCan
            onClick={clearAll}
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              color: "#031b4c",
              marginRight: "10px",
              marginTop: "10px",
            }}
            title="Clear All"
          />
        </div>
      </div>
      <Card.Body
        onDrop={handleDrop} // Trigger handleDrop when an item is dropped
        onDragOver={handleDragOver} // Allow dragging over component
        className="border p-5"
      >
        {favourites.length === 0 ? (
          <p>Drag properties here to add to favourites.</p>
        ) : (
          favourites.map((property) => (
            <FavProperty
              onRemove={handleRemove}
              prop={property} // Passes the property data to FavProperty
              onHandleDrag={handleDragStart}
            />
          ))
        )}
      </Card.Body>
    </Card>
  );
};

export default Favourites;
