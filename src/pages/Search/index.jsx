import Estudio from "../../components/Card/Estudio";
import "../../styles/search.scss";
import { useState } from "react";
import CustomModal from "../../components/CustomModal";
import NoContent from "../../components/NoContent";

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
      styles: ["estilo 1", "outro", "teste"],
    },
    {
      id: 2,
      name: "Estúdio 2",
      cep: "98765-432",
      state: "Estado 2",
      city: "Cidade 2",
      street: "Rua 2",
      styles: ["estilo 2", "outrom", "testem"],
    },
    // ... outros objetos de estúdio
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [didSearch, setDidSearch] = useState(false);

  const handleOpenModal = (itemId) => {
    setSelectedItemId(itemId);
    setIsModalOpen(true);
  };

  const search = () => {
    if (!didSearch) {
      setDidSearch(true);
    }
    //resto da implementação da api
  };

  const message = (itemId) => {
    // Find the estudio with the given itemId
    const estudio = estudiosData.find((item) => item.id === itemId);

    // Return the styles of the found estudio, or an empty string if not found
    return estudio
      ? estudio.styles
          .map((style) => style.charAt(0).toUpperCase() + style.slice(1))
          .join(", ")
      : "";
  };

  const handleConfirm = (itemId) => {
    console.log("Confirmação recebida para o item com ID:", itemId);
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>Buscar Estúdios</h2>
      <div className="search-bar">
        <div className="input-group mb-3 search-group">
          <input
            type="text"
            autoComplete="off"
            className="form-control inp-search"
            onKeyDown={(e) => {
              e.key === "Enter" ? search() : "";
            }}
          />
          <span className="input-group-text" onClick={search}>
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
      {didSearch ? (
        <>
          {estudiosData.length !== 0 ? (
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
                  stylesClick={() => handleOpenModal(estudio.id)}
                />
              ))}
            </div>
          ) : (
            <NoContent
              icon="search"
              title="Sem estudios compatíveis com a busca"
              message="Que tal refazer sua busca ou utilizar outros filtros?"
              additionalMessage="Verifique se escreveu corretamente o nome do estúdio"
            />
          )}
        </>
      ) : (
        <NoContent
          icon="search"
          title="Faça uma busca"
          message="Pesquise pelo nome do estudio e os filtros desejados"
          additionalMessage="Os estudios irão aparecer aqui se os dados forem compatíveis"
        />
      )}

      {isModalOpen && (
        <CustomModal
          title="Estilos do Estudio"
          btnConfirmMessage="Ok"
          onConfirm={() => handleConfirm()}
          message={message(selectedItemId)}
          bgCustom={true}
        />
      )}
    </div>
  );
}
