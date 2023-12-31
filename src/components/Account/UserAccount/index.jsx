import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ModalAccount from "./ModalAccount";
import UserService from "../../../services/users";
import { Navigate } from "react-router-dom";
import CookiesService from "../../../services/cookies";
import { ToastContainer, toast } from "react-toastify";

export default function UserAccount() {
  const [userData, setUserData] = useState({});
  const cookie = CookiesService.getCookie("userdata");
  const id = cookie ? cookie.id : "";
  const [RedirectToHome, setRedirectToHome] = useState(false);

  const SelecionarUser = async () => {
    try {
      const req = await UserService.selecionarUser(id);
      setUserData(req.data);
    } catch (error) {
      console.log(`Erro ao selecionar o usuario: ${error}`);
    }
  };

  useEffect(() => {
    // Simule a recuperação dos dados do usuário ao carregar a página
    SelecionarUser();
  }, []);

  const EditarUser = async (data) => {
    try {
      const req = await UserService.editarUser(id, data);
      SelecionarUser();
    } catch (error) {
      toast.error("Erro ao editar conta!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(`Erro ao editar o usuario: ${error}`);
    }
  };

  const ExcluirUser = async () => {
    try {
      const req = await UserService.excluirUser(id);
      setRedirectToHome(true);
    } catch (error) {
      console.log(`Erro ao excluir o usuario: ${error}`);
    }
  };

  const handleEdit = (userData) => {
    // Implemente aqui a lógica para salvar as informações editadas
    // Você pode enviar uma solicitação para o servidor com os dados atualizados
    // e atualizar o estado quando a resposta do servidor chegar
    EditarUser(userData);
  };

  const handleDelete = (userId) => {
    // Implemente aqui a lógica para excluir a conta do usuário
    // Você pode enviar uma solicitação para o servidor para excluir a conta
    // e redirecionar o usuário para a página de login ou alguma outra página apropriada
    ExcluirUser();
  };

  if (RedirectToHome && location.pathname !== "/") {
    window.location.reload();
  }

  return (
    <div className={styles.accountDiv}>
      <h1 className="pt-3">Conta do Usuário</h1>
      <div className={`card p-3 my-3 ${styles.accountCard}`}>
        <div className="card-body">
          <h2 className="card-title">Informações do Usuário</h2>
          <p className="card-text">
            <i className="bi bi-person px-2"></i>Nome: {userData.nome}
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
            {userData.dataNascimento}
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
      <ToastContainer />
    </div>
  );
}
