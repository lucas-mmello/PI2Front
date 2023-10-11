import styles from "./styles.module.scss";
export default function CustomModal({
  message,
  btnCancelMessage,
  btnConfirmMessage,
  onCancel,
  onConfirm,
}) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        <div className={styles.buttons}>
          {onCancel && (
            <button className="btn btn-danger mx-2" onClick={onCancel}>
              {"Cancelar" || btnCancelMessage}
            </button>
          )}
          {onConfirm && (
            <button className="btn btn-success mx-2" onClick={onConfirm}>
              {"Confirmar" || btnConfirmMessage}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
