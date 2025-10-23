import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import styles from "./NavLayout.module.css";
import bgImageHome from "/assets/home/background-home-mobile.jpg";

export function NavLayout() {
  return (
    <div
      className={styles.layout}
      style={{ backgroundImage: `url(${bgImageHome})` }}
    >
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
