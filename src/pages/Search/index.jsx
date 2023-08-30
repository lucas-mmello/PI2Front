import "../../styles/search.scss";

export default function Search() {
  return (
    <div>
      <div className="search-bar">
        <div className="input-group mb-3 search-group">
          <input
            type="text"
            className="form-control inp-search"
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <span className="input-group-text" onClick={null}>
            <i class="bi bi-search icon"></i>
          </span>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#filtersModal"
          >
            Filtros
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="filtersModal"
        tabIndex="-1"
        aria-labelledby="filtersModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="filtersModalLabel">
                Filtros
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* Conteúdo do modal de filtros */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button type="button" className="btn btn-primary">
                Aplicar Filtros
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resto da página */}
    </div>
  );
}
