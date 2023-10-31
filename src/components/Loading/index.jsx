import styles from "./styles.module.scss";
export default function Loading() {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.spinnerContainer}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
