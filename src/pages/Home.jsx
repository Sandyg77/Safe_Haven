import React, { useState, useEffect } from "react";
import Properties from "../components/Properties";
import Favourites from "../components/Favourites";
import Navbar from "../components/Navbar";
import Slogan from "../components/Slogan";
import Footer from "../components/Footer";
import AdvancedSearch from "../components/AdvancedSearch";
import "./../Index.css";
// Home component to manage state and render the other components
const Home = () => {
  var initialState = JSON.parse(localStorage.getItem("favourites")) ?? []; // Nullish coalescing operator
  const [favourites, setFavourites] = useState(initialState); // State to hold all favourite properties

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

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
      <div className="container pt-4 body">
        <Slogan />
        <br /> <br />
        <div className="row justify-content-around">
          <div className="col-lg-4 col-sm-12">
            <Favourites favourites={favourites} setFavourites={setFavourites} />{" "}
            {/* Pass favourites list to Favourites component */}
          </div>
          <div className="col-lg-8 col-sm-12">
            <Properties
              onAddToFavourites={addToFavourites}
              favourites={favourites}
              setFavourites={setFavourites}
            />{" "}
            {/* Pass addToFavourites function to Properties */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
