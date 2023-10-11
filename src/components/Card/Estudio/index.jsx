import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Estudio({
  name,
  cep,
  state,
  city,
  street,
  id,
  stylesClick,
}) {
  return (
    <div className={styles["studio-card"]}>
      <div className={styles["studio-info"]}>
        <h2 className={styles["studio-name"]}>{name}</h2>
        <p className={styles["studio-location"]}>
          {`${street}, ${city}, ${state}, ${cep}`}
        </p>
      </div>

      <div className={styles["div-btn"]}>
        <button className={`${styles.btn} ${styles["btn-primary"]}`}>
          <Link className={styles.link} to={`/private/estudio/${id}`}>
            <i className="bi bi-eye pe-1"></i>Ver Estúdio
          </Link>
        </button>
        <button
          className={`${styles.btn} ${styles["btn-primary"]}`}
          onClick={stylesClick}
        >
          <span className={styles.link}>
            <i className="bi bi-brush pe-1"></i>Ver Estilos
          </span>
        </button>
      </div>
    </div>
  );
}
