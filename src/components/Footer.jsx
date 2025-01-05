import React from "react";
import styles from "../styles/Footer.module.css";
import { FaFacebook, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* About Us */}
        <div className={styles.section}>
          <h3>About Us</h3>
          <p>
            SafeHaven is dedicated to providing innovative solutions to keep
            families and individuals safe through cutting-edge technology.
          </p>
        </div>

        {/* Contact Us */}
        <div className={styles.section}>
          <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:safehaven@ac.uk" className={styles.link}>
              safehaven@ac.uk
            </a>
          </p>
          <p>Phone: +44 123 456 7890</p>
        </div>

        {/* Follow us  */}
        <div className={styles.section}>
          <h3>Follow Us</h3>
          <p>
            Facebook <FaFacebook /> <br />
            Twitter <FaTwitterSquare /> <br />
            Instagram <FaInstagram />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
