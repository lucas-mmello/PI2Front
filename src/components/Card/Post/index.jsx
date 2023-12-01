import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function Post(props) {
  const { image, description, onEdit, onDelete, idModalEd, idModalDel } = props;

  return (
    <div className={`card ${styles.cardPost} h-100 d-flex flex-column`}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          className={`card-img-top ${styles.image}`}
          alt="Imagem do Post"
        />
      </div>
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
      <div className="card-body">
        {onEdit && (
          <button
            data-bs-toggle="modal"
            data-bs-target={idModalEd}
            onClick={onEdit}
            className={`card-link ${styles.button}`}
          >
            <span>
              <i className={`bi bi-pencil ${styles.icon}`}></i>
            </span>
          </button>
        )}
        {onDelete && (
          <button
            data-bs-toggle="modal"
            data-bs-target={idModalDel}
            onClick={onDelete}
            className={`card-link ${styles.button}`}
          >
            <span>
              <i className={`bi bi-trash3 ${styles.icon}`}></i>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

Post.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onEdit: PropTypes.func, // Função para editar um post
  onDelete: PropTypes.func, // Função para excluir um post
};
