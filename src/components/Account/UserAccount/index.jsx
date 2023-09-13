import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ModalAccount from "./ModalAccount";

export default function UserAccount() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // Simule a recuperação dos dados do usuário ao carregar a página
    setUserData({
      id: 1,
      name: "Nome do Usuário",
      email: "usuario@email.com",
      password: "MinhaSenhaSegura",
      cep: "54321-678",
      cidade: "Outra Cidade",
      estado: "Outro Estado",
      birthDate: "1990-01-01",
      // ... outras informações do usuário
    });
  }, []);

  const handleEdit = (userData) => {
    // Implemente aqui a lógica para salvar as informações editadas
    // Você pode enviar uma solicitação para o servidor com os dados atualizados
    // e atualizar o estado quando a resposta do servidor chegar
    console.log("Dados do Usuário Editados:", userData);
    setUserData(userData);
  };

  const handleDelete = (userId) => {
    // Implemente aqui a lógica para excluir a conta do usuário
    // Você pode enviar uma solicitação para o servidor para excluir a conta
    // e redirecionar o usuário para a página de login ou alguma outra página apropriada
    console.log("Conta do Usuário Excluída, ID:", userId);
  };

  return (
    <div className={styles.accountDiv}>
      <h1 className="pt-3">Conta do Usuário</h1>
      <div className="card p-3 my-3">
        <div className="card-body">
          <h2 className="card-title">Informações do Usuário</h2>
          <p className="card-text">
            <i className="bi bi-person px-2"></i>Nome: {userData.name}
          </p>
          <p className="card-text">
            <i className="bi bi-envelope px-2"></i>Email: {userData.email}
          </p>
          <p className="card-text">
            <i className="bi bi-key px-2"></i>Senha: *****
          </p>
          <p className="card-text">
            <i className="bi bi-pin-map px-2"></i>CEP: {userData.cep}
          </p>
          <p className="card-text">
            <i className="bi bi-building px-2"></i>Cidade: {userData.cidade}
          </p>
          <p className="card-text">
            <i className="bi bi-map px-2"></i>Estado: {userData.estado}
          </p>
          <p className="card-text">
            <i className="bi bi-calendar px-2"></i>Data de Nascimento:{" "}
            {userData.birthDate}
          </p>
          {/* Adicione mais informações do usuário aqui */}
          <button
            className="btn btn-primary mx-1 my-1"
            data-bs-toggle="modal"
            data-bs-target="#alterarModal"
          >
            <i className="bi bi-pencil pe-2"></i>Editar Informações
          </button>
          <button
            className="btn btn-danger mx-1 my-1"
            data-bs-toggle="modal"
            data-bs-target="#excluirModal"
          >
            <i className="bi bi-trash3 pe-2"></i>Excluir Conta
          </button>
        </div>
      </div>

      {/* Modal para edição de informações */}
      <ModalAccount
        idModal="alterarModal"
        mode="edit"
        heading="Editar Informações"
        userData={userData}
        onSave={handleEdit}
      />
      {/* Modal para exclusão da conta */}
      <ModalAccount
        idModal="excluirModal"
        mode="delete"
        heading="Excluir Conta"
        userData={userData}
        onDelete={handleDelete}
      />
    </div>
  );
}
