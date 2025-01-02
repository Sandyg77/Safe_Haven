import React, { useState } from "react";
import Properties from "./Properties";
import Favourites from "./Favourites";

// Home component to manage state and render the other components
const Home = () => {
  const [favourites, setFavourites] = useState([]); // State to hold all favourite properties

  // Function to add a property to the favourites list
  const addToFavourites = (property) => {
    if (!favourites.find((fav) => fav.id === property.id)) {
      setFavourites([...favourites, property]); // Add property to favourites if not already added
    }
  };

  return (
    <div className="container mt-4 ">
      <div className="row">
        <div className="col-md-3 mb-4">
          <Favourites favourites={favourites} setFavourites={setFavourites} />{" "}
          {/* Pass favourites list to Favourites component */}
        </div>
        <div className="col-md-9 mb-4 position-relative">
          <Properties onAddToFavourites={addToFavourites} />{" "}
          {/* Pass addToFavourites function to Properties */}
        </div>
      </div>
    </div>
  );
};

export default Home;
