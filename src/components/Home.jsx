import React from "react";
import FilterButtons from "./FilterButtons";
import Favourites from "./Favourites";
import Properties from "./Properties";
import SearchBar from "./SearchBar";
{
  /* Component is a javascript function*/
}

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 mb-4">
          <Favourites />
        </div>
        <div className="col-md-9 mb-4 d-flex justify-content-end">
          <Properties />
        </div>
      </div>
    </div>
  );
};

export default Home;
