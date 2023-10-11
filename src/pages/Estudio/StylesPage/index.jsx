import { Form } from "react-router-dom";
import "../../../styles/stylesPage.scss";
import { useState } from "react";
import CustomModal from "../../../components/CustomModal";
import TattooStyles from "../../../components/Card/TattooStyles";
import svgImage from "../../../assets/images/Tattoo.svg";

export default function StylesPage() {
  const [formIncluir, setFormIncluir] = useState(false);
  const data = [
    { id: 1, name: "Estilo 1" },
    { id: 2, name: "Estilo 2" },
    { id: 3, name: "Estilo 3" },
  ];

  const [isModalRemoverOpen, setIsModalRemoverOpen] = useState(false);
  const [isModaladicionarOpen, setIsModalAdicionarOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleOpenModal = (itemId, tipoModal) => {
    if (tipoModal === 1) {
      setIsModalRemoverOpen(true);
    } else {
      setIsModalAdicionarOpen(true);
    }
    setSelectedItemId(itemId); // Salva o ID do item selecionado
  };

  const handleCancel = (tipoModal) => {
    if (tipoModal === 1) {
      setIsModalRemoverOpen(false);
    } else {
      setIsModalAdicionarOpen(false);
    }
  };

  const handleConfirm = (itemId, tipoModal) => {
    console.log("Confirmação recebida para o item com ID:", itemId);
    if (tipoModal === 1) {
      setIsModalRemoverOpen(false);
    } else {
      setIsModalAdicionarOpen(false);
    }
  };

  return (
    <>
      {!formIncluir && (
        <div className="d-flex justify-content-center align-itens-center mt-5">
          <button className="btn btn-info" onClick={() => setFormIncluir(true)}>
            <i className="bi bi-brush pe-2"></i>Novo Estilo
          </button>
        </div>
      )}

      {formIncluir && (
        <div
          className="profilePage"
          data-aos={formIncluir ? "fade-up" : ""}
          data-aos-duration={formIncluir ? "1700" : ""}
          data-aos-once={formIncluir ? "true" : ""}
        >
          <div className="d-flex align-itens-center justify-content-center my-3">
            <button
              className="btn btn-danger "
              onClick={() => setFormIncluir(false)}
            >
              Fechar
            </button>
          </div>

          <div className="row postContainer">
            {data.map((item) => (
              <div key={item.id} className="col postCol">
                <TattooStyles
                  image={svgImage}
                  description={item.name}
                  onAdd={() => handleOpenModal(item.id, 0)}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="profilePage">
        <h1 className="text-center mt-2 mb-4">Estilos do Estudio</h1>
        <div className="row postContainer">
          {data.map((item) => (
            <div key={item.id} className="col postCol">
              <TattooStyles
                image={svgImage}
                description={item.name}
                onDelete={() => handleOpenModal(item.id, 1)}
              />
            </div>
          ))}
        </div>
      </div>

      {isModalRemoverOpen && (
        <CustomModal
          message="Você tem certeza que deseja remover?"
          onCancel={() => handleCancel(1)}
          onConfirm={() => handleConfirm(selectedItemId, 1)}
        />
      )}
      {isModaladicionarOpen && (
        <CustomModal
          message="Você tem certeza que deseja adicionar?"
          onCancel={() => handleCancel(0)}
          onConfirm={() => handleConfirm(selectedItemId, 0)}
        />
      )}
    </>
  );
}
