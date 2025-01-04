import React from "react";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import FilterButtons from "./FilterButtons";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div>
        <img src="logo.png" alt="logo" className={styles.logo} />
      </div>
      <h1 className={styles.siteName}>Safe Haven</h1>
    </nav>
  );
};

export default Navbar;
