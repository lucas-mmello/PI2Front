import styles from "./styles.module.scss";
export default function CustomModal({ message, onCancel, onConfirm }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        <div className={styles.buttons}>
          <button className="btn btn-danger mx-2" onClick={onCancel}>
            Cancelar
          </button>
          <button className="btn btn-success mx-2" onClick={onConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
