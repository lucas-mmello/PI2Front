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
          <p className="card-text">Nome: {userData.name}</p>
          <p className="card-text">Email: {userData.email}</p>
          <p className="card-text">Senha: *****</p>
          <p className="card-text">CEP: {userData.cep}</p>
          <p className="card-text">Cidade: {userData.cidade}</p>
          <p className="card-text">Estado: {userData.estado}</p>
          <p className="card-text">Data de Nascimento: {userData.birthDate}</p>
          {/* Adicione mais informações do usuário aqui */}
          <button
            className="btn btn-primary mx-1"
            data-bs-toggle="modal"
            data-bs-target="#alterarModal"
          >
            Editar Informações
          </button>
          <button
            className="btn btn-danger mx-1"
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
