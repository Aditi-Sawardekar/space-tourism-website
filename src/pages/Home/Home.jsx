import { HeroSection } from "../../components/HeroSection/HeroSection";

import styles from "./Home.module.css";

export function Home() {
  return (
    <main className={styles.homePage}>
      <HeroSection />
    </main>
  );
}
