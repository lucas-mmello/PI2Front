import styles from "./styles.module.scss";
export default function CustomModal({
  title,
  message,
  bgCustom,
  btnCancelMessage,
  btnConfirmMessage,
  onCancel,
  onConfirm,
}) {
  return (
    <div className={styles.modal}>
      <div
        className={`${styles.modalContent} ${bgCustom ? styles.customBg : ""}`}
      >
        <p className={`text-center mb-2 ${styles.title}`}>{title}</p>
        <p>{message}</p>
        <div className={styles.buttons}>
          {onCancel && (
            <button className="btn btn-danger mx-2" onClick={onCancel}>
              {btnCancelMessage ?? "Cancelar"}
            </button>
          )}
          {onConfirm && (
            <button className="btn btn-success mx-2" onClick={onConfirm}>
              {btnConfirmMessage ?? "Confirmar"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
