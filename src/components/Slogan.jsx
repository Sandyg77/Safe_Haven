import React from "react";
import styles from "../styles/Slogan.module.css";

const Slogan = () => {
  return (
    <div className="position-relative w-100" style={{ height: "60vh" }}>
      <img
        src="Home2.jpg"
        alt="slog"
        className="img-fluid position-absolute start-50 translate-middle-x h-100 object-fit-cover"
        style={{ minWidth: "100%", borderRadius: "15px" }}
      />
      <div className={styles.slogan}>"Trust Us to Find Your Safe Haven."</div>
    </div>
  );
};

export default Slogan;
