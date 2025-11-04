import { ButtonSection } from "./ButtonSection/ButtonSection";
import { TextSection } from "./TextSection/TextSection";

import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <>
      <main>
        <TextSection />
        <ButtonSection />
      </main>
    </>
  );
}
