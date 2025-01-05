import { Card } from "react-bootstrap";

// Fav card child component
const FavProperty = ({ onRemove, prop, onHandleDrag }) => {
  return (
    <Card
      key={prop.id}
      className="mb-3"
      draggable
      onDragStart={(e) => onHandleDrag(e, prop)} // Handles the start of dragging event
    >
      <div className="row justify-content-center">
        <div className="col-6">
          <img
            src={prop.picture}
            alt={`Property ${prop.id}`}
            className="img-fluid"
            style={{
              minHeight: "100%",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
          />
        </div>
        <div className="col-6">
          <div className="row">
            <span>
              <b>{prop.type}</b> - ${prop.price}
            </span>
          </div>
          <div
            className="row d-flex justify-content-end" // A flexbox row that aligns its content to the right
          >
            <button
              className="btn btn-danger btn-sm align-self-end mt-5 mb-1 me-3"
              style={{ maxWidth: "50%" }}
              onClick={() => onRemove(prop.id)} // Button to remove property from favourites
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FavProperty;
