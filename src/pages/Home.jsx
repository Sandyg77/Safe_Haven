import React, { useState } from "react";
import Properties from "../components/Properties";
import Favourites from "../components/Favourites";
import Navbar from "../components/Navbar";
import Slogan from "../components/Slogan";
import Footer from "../components/Footer";

// Home component to manage state and render the other components
const Home = () => {
  const [favourites, setFavourites] = useState([]); // State to hold all favourite properties

  // Function to add a property to the favourites list
  const addToFavourites = (property) => {
    if (!favourites.find((fav) => fav.id === property.id)) {
      setFavourites([...favourites, property]); // Spread operator is used
    }
  };

  return (
    <div>
      {" "}
      <Navbar />
      <div className="container mt-4">
        <Slogan />
        <br /> <br />
        <div className="row">
          <div className="col-md-2 mb-4">
            <Favourites favourites={favourites} setFavourites={setFavourites} />{" "}
            {/* Pass favourites list to Favourites component */}
          </div>
          <div className="col-md-9 mb-4">
            <Properties onAddToFavourites={addToFavourites} />{" "}
            {/* Pass addToFavourites function to Properties */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
