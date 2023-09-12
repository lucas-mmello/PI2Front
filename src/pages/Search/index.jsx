import Estudio from "../../components/Card/Estudio";
import "../../styles/search.scss";
import { useState } from "react";

export default function Search() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value); // Atualiza o estado com a opção selecionada
  };

  const estudiosData = [
    {
      id: 1,
      name: "Estúdio 1",
      cep: "12345-678",
      state: "Estado 1",
      city: "Cidade 1",
      street: "Rua 1",
    },
    {
      id: 2,
      name: "Estúdio 2",
      cep: "98765-432",
      state: "Estado 2",
      city: "Cidade 2",
      street: "Rua 2",
    },
    // ... outros objetos de estúdio
  ];

  return (
    <div>
      <h2>Buscar Estúdios</h2>
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
            <i className="bi bi-search icon"></i>
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
              <select
                className="form-select my-2"
                aria-label="Default select example"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="">Estado</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className="form-select my-2"
                aria-label="Default select example"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="">Cidade</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <select
                className="form-select"
                aria-label="Default select example"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="">Estilos de Tatuagem</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
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

      <div className="estudios">
        <h3>Resultados da Busca</h3>
        {estudiosData.map((estudio) => (
          <Estudio
            key={estudio.id}
            id={estudio.id}
            name={estudio.name}
            cep={estudio.cep}
            state={estudio.state}
            city={estudio.city}
            street={estudio.street}
          />
        ))}
      </div>
    </div>
  );
}