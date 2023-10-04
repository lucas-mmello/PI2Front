import { Form } from "react-router-dom";
import "../../../styles/stylesPage.scss";
import { useState } from "react";
import CustomModal from "../../../components/CustomModal";

export default function StylesPage() {
  const [formIncluir, setFormIncluir] = useState(false);
  const data = [
    { id: 1, name: "Estilo 1" },
    { id: 2, name: "Estilo 2" },
    { id: 3, name: "Estilo 3" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleOpenModal = (itemId) => {
    setIsModalOpen(true);
    setSelectedItemId(itemId); // Salva o ID do item selecionado
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = (itemId) => {
    console.log("Confirmação recebida para o item com ID:", itemId);
    setIsModalOpen(false);
  };

  return (
    <>
      <h1 className="text-center mt-4">Estilos do Estudio</h1>
      {!formIncluir && (
        <div className="d-flex justify-content-center align-itens-center my-4">
          <button className="btn btn-info" onClick={() => setFormIncluir(true)}>
            <i className="bi bi-brush pe-2"></i>Novo Estilo
          </button>
        </div>
      )}

      {formIncluir && (
        <Form
          className="form-incluir"
          data-aos={formIncluir ? "fade-up" : ""}
          data-aos-duration={formIncluir ? "1700" : ""}
          data-aos-once={formIncluir ? "true" : ""}
        >
          <h3 className="p-2">Incluir novo Estilo</h3>
          <select className="form-select">
            {data.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <button
            className="btn btn-success my-3 "
            type="submit"
            onClick={() => setFormIncluir(false)}
          >
            Adicionar
          </button>
        </Form>
      )}

      <div className="div-table my-5">
        <table className="table-custom">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome do Estilo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button
                    value={item.id}
                    onClick={() => handleOpenModal(item.id)}
                    className="btn btn-danger"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <CustomModal
          message="Você tem certeza que deseja excluir?"
          onCancel={() => handleCancel()}
          onConfirm={() => handleConfirm(selectedItemId)}
        />
      )}
    </>
  );
}
