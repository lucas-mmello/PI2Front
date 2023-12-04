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
            className={`${styles.button} ${styles.editButton}`}
          >
            <svg
              className={styles.icon}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              {/* ... seu código SVG ... */}
            </svg>
          </a>
        )}
        {onDelete && (
          <button
            data-bs-toggle="modal"
            data-bs-target={idModalDel}
            onClick={onDelete}
            className={` ${styles.button} ${styles.redButton} ${styles.deleteButton}`}
          >
            <svg
              className={styles.icon}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              {/* ... seu código SVG ... */}
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
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};
