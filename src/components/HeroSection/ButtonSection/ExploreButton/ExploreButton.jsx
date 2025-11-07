import styles from "./ExploreButton.module.css";

export function ExploreButton({ label, onClick }) {
  return (
    <button
      className={`${styles.exploreButton} text-preset-4`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
