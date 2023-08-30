import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Post(props) {
  return (
    <div className={`card ${styles.cardPost} h-100`}>
      <img src={props.image} className="card-img-top" alt="Imagem do Post" />
      <div className="card-body">
        <p className="card-text">{props.description}</p>
      </div>
      <div className="card-body">
        <Link to={props.editar} className="card-link">
          <span>
            <i className={`bi bi-pencil ${styles.icon}`}></i>
          </span>
        </Link>
        <Link to={props.excluir} className="card-link">
          <span>
            <i className={`bi bi-trash3 ${styles.icon}`}></i>
          </span>
        </Link>
      </div>
    </div>
  );
}
