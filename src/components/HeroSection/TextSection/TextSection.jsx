import { Description } from "./Description/Description";
import { IntroText } from "./IntroText/IntroText";
import { MainTitle } from "./MainTitle/MainTitle";

import styles from "./TextSection.module.css";

export function TextSection() {
  return (
    <section>
      <IntroText />
      <MainTitle />
      <Description />
    </section>
  );
}
