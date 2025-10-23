import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "/assets/shared/logo.svg";
import hamburgerIcon from "/assets/shared/icon-hamburger.svg";
import closeIcon from "/assets/shared/icon-close.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <section className={styles.iconSection}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>

        <img
          src={isOpen ? closeIcon : hamburgerIcon}
          alt="Open navigation menu"
          className={styles.menuToggleIcon}
          onClick={() => setIsOpen(!isOpen)}
        />
      </section>
      <ol
        start={0}
        className={`${styles.menuSection} ${isOpen ? styles.menuOpen : ""}`}
      >
        <li className={`text-preset-8 ${styles.navbar}`}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={`text-preset-8 ${styles.navbar}`}>
          <Link to="/destination" className={styles.navLink}>
            Destination
          </Link>
        </li>
        <li className={`text-preset-8 ${styles.navbar}`}>
          <Link to="/crew" className={styles.navLink}>
            Crew
          </Link>
        </li>
        <li className={`text-preset-8 ${styles.navbar}`}>
          <Link to="/technology" className={styles.navLink}>
            Technology
          </Link>
        </li>
      </ol>
    </nav>
  );
}
