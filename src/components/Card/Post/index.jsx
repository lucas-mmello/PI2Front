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
          Editar
        </Link>
        <Link to={props.excluir} className="card-link">
          Excluir
        </Link>
      </div>
    </div>
  );
}
