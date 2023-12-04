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
            className={`${styles.button}`}
          >
            <svg
              className={styles.icon}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"
              />
            </svg>
          </a>
        )}
        {onDelete && (
          <button
            data-bs-toggle="modal"
            data-bs-target={idModalDel}
            onClick={onDelete}
            className={` ${styles.button} ${styles.redButton}`}
          >
            <svg
              className={styles.icon}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
              />
            </svg>
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
