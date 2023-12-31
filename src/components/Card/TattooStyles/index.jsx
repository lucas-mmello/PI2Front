import PropTypes from "prop-types";
import styles from "./styles.module.scss";

export default function TattooStyles(props) {
  const { image, description, onAdd, onDelete } = props;

  return (
    <div className={`card ${styles.cardPost} h-100`}>
      <img src={image} className="card-img-top " alt="Imagem do Post" />
      <div className="card-body">
        <p className="h5">
          {description
            ? description.charAt(0).toUpperCase() + description.slice(1)
            : ""}
        </p>
      </div>
      <div className="card-body">
        {onAdd && (
          <button onClick={onAdd} className={`card-link px-2 btn btn-success`}>
            <i className="bi bi-plus-circle pe-2"></i>Adicionar
          </button>
        )}
        {onDelete && (
          <button
            onClick={onDelete}
            className={`card-link px-2 btn btn-danger`}
          >
            <i className="bi bi-trash3 pe-2"></i>Remover
          </button>
        )}
      </div>
    </div>
  );
}

TattooStyles.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onAdd: PropTypes.func, // Função para editar um post
  onDelete: PropTypes.func, // Função para excluir um post
};
