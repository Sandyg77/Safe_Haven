import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      <div>
        <img src="logo.png" alt="logo" className={styles.logo} />
      </div>
      <h1 className={styles.siteName}>Safe Haven</h1>
      <div>
        <input type="text" placeholder="Search properties by type..." />
        <button>For rent</button>
        <button>To sale</button>
      </div>
    </nav>
  );
};

export default Navbar;
