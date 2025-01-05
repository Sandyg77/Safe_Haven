import React from "react";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div>
        <Link to="/">
          <img src="../public/logo.png" alt="logo" className={styles.logo} />
        </Link>
      </div>
      <h1 className={styles.siteName}>Safe Haven</h1>
    </nav>
  );
};

export default Navbar;
