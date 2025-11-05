import { ExploreButton } from "./ExploreButton/ExploreButton";

import styles from "./ButtonSection.module.css";

export function ButtonSection() {
  return (
    <section className={styles.buttonSection}>
      <ExploreButton />
    </section>
  );
}
