import React, { useState, useEffect } from "react";
import Properties from "../components/Properties";
import Favourites from "../components/Favourites";
import Navbar from "../components/Navbar";
import Slogan from "../components/Slogan";
import Footer from "../components/Footer";

// Home component to render the other child components
const Home = () => {
  // Initialize state for favourites using localStorage data or an empty array
  var initialState = JSON.parse(localStorage.getItem("favourites")) ?? []; // Nullish coalescing operator
  const [favourites, setFavourites] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]); // Dependency array ensures this runs only when favourites change

  const addToFavourites = (property) => {
    if (!favourites.find((fav) => fav.id === property.id)) {
      setFavourites([...favourites, property]); // Add property to favourites using Spread operator
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
            {/*Pass favourites and setFavourites as props to Favourites component */}
          </div>
          <div className="col-lg-8 col-sm-12">
            <Properties
              onAddToFavourites={addToFavourites}
              favourites={favourites}
              setFavourites={setFavourites}
            />{" "}
            {/* Pass the addToFavourites function and state props to Properties */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
