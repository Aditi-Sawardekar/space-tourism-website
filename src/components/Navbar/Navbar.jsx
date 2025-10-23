import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "/assets/shared/logo.svg";
import hamburgerIcon from "/assets/shared/icon-hamburger.svg";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>

      <img
        src={hamburgerIcon}
        alt="Open navigation menu"
        className={styles.logo}
      />

      <ul>
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
      </ul>
    </nav>
  );
}
