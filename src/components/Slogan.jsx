import React from "react";
import styles from "../styles/Slogan.module.css";
import FilterButtons from "./FilterButtons";

const Slogan = () => {
  return (
    <div className="position-relative w-100" style={{ height: "60vh" }}>
      <img
        src="Home2.jpg"
        alt="slog"
        className="img-fluid position-absolute top-0 start-50 translate-middle-x w-75 h-100 object-fit-cover"
      />
      <div className={styles.slogan}>"Trust Us to Find Your Safe Haven."</div>

      <div
        className="position-absolute start-50 translate-middle-x d-flex gap-3"
        style={{ top: "65%" }}
      >
        <button className="btn btn-light p-2">For Rent</button>
        <button className="btn btn-light p-2">To Sale</button>
      </div>
    </div>
  );
};

export default Slogan;
