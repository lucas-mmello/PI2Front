import styles from "./styles.module.scss";

export default function NoContent({ title, message, additionalMessage, icon }) {
  return (
    <div className={styles.noContent}>
      <div className={styles.iconContainer}>
        <i
          className={`${
            icon === "search" ? "bi bi-search" : "bi bi-file-earmark-x"
          } ${styles.smileIcon}`}
        ></i>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.message}>{message}</p>
        <p className={styles.additionalMessage}>{additionalMessage}</p>
      </div>
    </div>
  );
}
