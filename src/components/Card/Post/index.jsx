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
          <a
            data-bs-toggle="modal"
            data-bs-target={idModalEd}
            onClick={onEdit}
            className={`${styles.button} mx-2`}
          >
            <span>
              <i className={`bi bi-pencil ${styles.icon}`}></i>
            </span>
          </a>
        )}
        {onDelete && (
          <a
            data-bs-toggle="modal"
            data-bs-target={idModalDel}
            onClick={onDelete}
            className={` mx-2 ${styles.button} ${styles.redButton}`}
          >
            <span>
              <i className={`bi bi-trash3 ${styles.icon}`}></i>
            </span>
          </a>
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
