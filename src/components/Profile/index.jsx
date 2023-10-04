import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function Profile({ studioInfo }) {
  return (
    <div className={styles.header}>
      <div className={styles.studioInfo}>
        <h2>{studioInfo.name}</h2>
        <p>{studioInfo.address}</p>
        <p>
          {studioInfo.city}, {studioInfo.state}
        </p>
        <p>CNPJ: {studioInfo.cnpj}</p>
      </div>
      <div className={styles.contactInfo}>
        <p>Telefone: {studioInfo.phone}</p>
        <p>Celular: {studioInfo.cellphone}</p>
        <button className="btn btn-info">
          <Link to="/private/estudioPrivate/styles" className={styles.link}>
            <i className="bi bi-brush pe-2"></i> Ver Estilos
          </Link>
        </button>
      </div>
    </div>
  );
}
