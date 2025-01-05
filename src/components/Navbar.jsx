import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div>
        <img src="Safe.png" alt="logo" className={styles.logo} />
      </div>
      <h1 className={styles.siteName}>Safe Haven</h1>
    </nav>
  );
};

export default Navbar;
