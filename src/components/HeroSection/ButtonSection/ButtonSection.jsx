import { useNavigate } from "react-router-dom";
import { ExploreButton } from "./ExploreButton/ExploreButton";

import styles from "./ButtonSection.module.css";

export function ButtonSection() {
  const navigate = useNavigate();

  return (
    <section className={styles.buttonSection}>
      <ExploreButton label="Explore" onClick={() => navigate("/destination")} />
    </section>
  );
}
