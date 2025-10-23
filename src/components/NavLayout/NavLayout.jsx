import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import styles from "./NavLayout.module.css";
import bgImageHome from "/assets/home/background-home-desktop.jpg";

export function NavLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
