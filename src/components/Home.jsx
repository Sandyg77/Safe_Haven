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
      <div className="row align-items-center mb-4">
        <div className="col-md-6">
          <SearchBar />
        </div>
        <div className="col-md-6 text-end">
          <FilterButtons />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <Favourites />
        </div>
        <div className="col-md-6 mb-4">
          <Properties />
        </div>
      </div>
    </div>
  );
};

export default Home;
