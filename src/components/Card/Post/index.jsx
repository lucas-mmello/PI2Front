import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function Post(props) {
  const { image, description, onEdit, onDelete, idModalEd, idModalDel } = props;

  return (
    <div className={`card ${styles.cardPost} h-100`}>
      <div className={styles.imageContainer}>
        <img src={image} className={`card-img-top`} alt="Imagem do Post" />
      </div>
      <div className={`card-body ${styles.actions}`}>
        <div className={styles["card-text-container"]}>
          <p className={`card-text ${styles["card-text"]}`}>{description}</p>
        </div>
        {onEdit && (
          <button
            data-bs-toggle="modal"
            data-bs-target={idModalEd}
            onClick={onEdit}
            className={`${styles.btn}`}
          >
            <span>
              <i className={`bi bi-pencil pe-2 ${styles.icon}`}></i>Editar
            </span>
          </button>
        )}
        {onDelete && (
          <button>
            <span
              data-bs-toggle="modal"
              data-bs-target={idModalDel}
              onClick={onDelete}
              className={` ${styles.btn} ${styles.redButton}`}
            >
              <i className={`bi bi-trash3 pe-2 ${styles.icon}`}></i>Excluir
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
