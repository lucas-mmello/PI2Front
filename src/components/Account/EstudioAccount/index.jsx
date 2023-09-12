import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ModalAccount from "./ModalAccount";

export default function EstudioAccount() {
  const [studioData, setStudioData] = useState({});

  useEffect(() => {
    // Simule a recuperação dos dados do estúdio ao carregar a página
    setStudioData({
      id: 1,
      cnpj: "1234567890",
      name: "Nome do Estúdio",
      email: "estudio@email.com",
      password: "Te1ste@teste",
      cep: "12345-678",
      cidade: "Cidade",
      estado: "Estado",
      rua: "Rua da Amostra",
      NumResidencia: "123",
      Telefone: "(12) 3456-7890",
      Celular: "(12) 9876-54321",
      // ... outras informações do estúdio
    });
  }, []);

  const handleEdit = (estudioData) => {
    // Implemente aqui a lógica para salvar as informações editadas
    // Você pode enviar uma solicitação para o servidor com os dados atualizados
    // e atualizar o estado quando a resposta do servidor chegar
    console.log("Dados do Estúdio Editados:", estudioData);
    setStudioData(estudioData);
  };

  const handleDelete = (estudioId) => {
    // Implemente aqui a lógica para excluir a conta do estúdio
    // Você pode enviar uma solicitação para o servidor para excluir a conta
    // e redirecionar o usuário para a página de login ou alguma outra página apropriada
    console.log("Conta do Estúdio Excluída, ID:", estudioId);
  };

  return (
    <div className={styles.accountDiv}>
      <h1 className="pt-3">Conta do Estúdio</h1>
      <div className="card p-3 my-3">
        <div className="card-body">
          <h2 className="card-title">Informações do Estúdio</h2>
          <p className="card-text">CNPJ: {studioData.cnpj}</p>
          <p className="card-text">Nome: {studioData.name}</p>
          <p className="card-text">Email: {studioData.email}</p>
          <p className="card-text">Senha: *****</p>
          <p className="card-text">CEP: {studioData.cep}</p>
          <p className="card-text">Cidade: {studioData.cidade}</p>
          <p className="card-text">Estado: {studioData.estado}</p>
          <p className="card-text">Rua: {studioData.rua}</p>
          <p className="card-text">
            Número Residencial: {studioData.NumResidencia}
          </p>
          <p className="card-text">Telefone: {studioData.Telefone}</p>
          <p className="card-text">Celular: {studioData.Celular}</p>
          {/* Adicione mais informações do estúdio aqui */}
          <button
            className="btn btn-primary mx-1 my-1"
            data-bs-toggle="modal"
            data-bs-target="#alterarModal"
          >
            Editar Informações
          </button>
          <button
            className="btn btn-danger mx-1 my-1"
            data-bs-toggle="modal"
            data-bs-target="#excluirModal"
          >
            Excluir Conta
          </button>
        </div>
      </div>

      {/* Modal para edição de informações */}
      <ModalAccount
        idModal="alterarModal"
        mode="edit"
        heading="Editar Informações"
        estudioData={studioData}
        onSave={handleEdit}
      />
      {/* Modal para exclusão da conta */}
      <ModalAccount
        idModal="excluirModal"
        mode="delete"
        heading="Excluir Conta"
        estudioData={studioData}
        onDelete={handleDelete}
      />
    </div>
  );
}