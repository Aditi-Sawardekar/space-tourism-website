import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "/assets/shared/logo.svg";
import hamburgerIcon from "/assets/shared/icon-hamburger.svg";
import closeIcon from "/assets/shared/icon-close.svg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  document.body.style.overflow = isOpen ? "hidden" : "auto";

  return (
    <nav className={styles.navbar}>
      <section className={styles.iconSection}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </Link>

        <button
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen(!isOpen)}
          className={styles.menuToggleButton}
        >
          <img
            src={isOpen ? closeIcon : hamburgerIcon}
            alt=""
            className={styles.menuToggleIcon}
          />
        </button>
      </section>

      <ol
        start={0}
        className={`${styles.menuSection} ${isOpen ? styles.menuOpen : ""}`}
      >
        <li className={`text-preset-8 ${styles.navItem}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li className={`text-preset-8 ${styles.navItem}`}>
          <NavLink
            to="/destination"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Destination
          </NavLink>
        </li>
        <li className={`text-preset-8 ${styles.navItem}`}>
          <NavLink
            to="/crew"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Crew
          </NavLink>
        </li>
        <li className={`text-preset-8 ${styles.navItem}`}>
          <NavLink
            to="/technology"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Technology
          </NavLink>
        </li>
      </ol>
    </nav>
  );
}
