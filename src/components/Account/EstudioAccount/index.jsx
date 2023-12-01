import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import ModalAccount from "./ModalAccount";
import CookiesService from "../../../services/cookies";
import EstudioService from "../../../services/estudios";
import PostService from "../../../services/posts";
import { storage } from "../../../Firebase";
import { deleteObject, ref } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";

export default function EstudioAccount() {
  const [studioData, setStudioData] = useState({});
  const [RedirectToHome, setRedirectToHome] = useState(false);
  const cookie = CookiesService.getCookie("userdata");
  const id = cookie ? cookie.id : "";

  const SelecionarEstudio = async () => {
    try {
      const req = await EstudioService.selecionarEstudioAccount(id);
      setStudioData(req.data);
    } catch (error) {
      console.log(`Erro ao selecionar o estudio: ${error}`);
    }
  };

  useEffect(() => {
    // Simule a recuperação dos dados do usuário ao carregar a página
    SelecionarEstudio();
  }, []);

  const EditarEstudio = async (data) => {
    try {
      const req = await EstudioService.editarEstudio(id, data);
      SelecionarEstudio();
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
      console.log(`Erro ao editar o estudio: ${error}`);
    }
  };

  const ExcluirEstudio = async () => {
    try {
      const images = await PostService.excluirTodos(id);
      const imgsUrl = images.data;
      console.log(imgsUrl);
      const req = await EstudioService.excluirEstudio(id);
      await imageDelete(imgsUrl);
      console.log(req);
      setRedirectToHome(true);
    } catch (error) {
      console.log(`Erro ao excluir o estudio: ${error}`);
    }
  };

  const imageDelete = async (imagesUrl) => {
    for (const imageUrl of imagesUrl) {
      const storageRef = ref(storage, imageUrl);

      try {
        await deleteObject(storageRef);
        console.log("Imagem excluída com sucesso:", imageUrl);
      } catch (error) {
        console.error("Erro ao excluir a imagem:", imageUrl, error);
      }
    }
  };

  const handleEdit = (estudioData) => {
    // Implemente aqui a lógica para salvar as informações editadas
    // Você pode enviar uma solicitação para o servidor com os dados atualizados
    // e atualizar o estado quando a resposta do servidor chegar
    EditarEstudio(estudioData);
  };

  const handleDelete = (estudioId) => {
    // Implemente aqui a lógica para excluir a conta do estúdio
    // Você pode enviar uma solicitação para o servidor para excluir a conta
    // e redirecionar o usuário para a página de login ou alguma outra página apropriada
    ExcluirEstudio(estudioId);
  };

  if (RedirectToHome && location.pathname !== "/") {
    window.location.reload();
  }

  return (
    <div className={styles.accountDiv}>
      <h1 className="pt-3">Conta do Estúdio</h1>
      <div className={`card p-3 my-3 ${styles.accountCard}`}>
        <div className="card-body">
          <h2 className="card-title">Informações do Estúdio</h2>
          <p className="card-text">
            <i className="bi bi-person-vcard px-2"></i>CNPJ: {studioData.cnpj}
          </p>
          <p className="card-text">
            <i className="bi bi-brush px-2"></i>Nome: {studioData.nome}
          </p>
          <p className="card-text">
            <i className="bi bi-envelope px-2"></i>Email: {studioData.email}
          </p>
          <p className="card-text">
            <i className="bi bi-key px-2"></i>Senha: *****
          </p>
          <p className="card-text">
            <i className="bi bi-pin-map px-2"></i>CEP: {studioData.cep}
          </p>
          <p className="card-text">
            <i className="bi bi-building px-2"></i>Cidade: {studioData.cidade}
          </p>
          <p className="card-text">
            <i className="bi bi-map px-2"></i>Estado: {studioData.estado}
          </p>
          <p className="card-text">
            <i className="bi bi-signpost px-2"></i>Rua: {studioData.rua}
          </p>
          <p className="card-text">
            <i className="bi bi-123 px-2"></i>Número Residencial:{" "}
            {studioData.numResidencia}
          </p>
          <p className="card-text">
            <i className="bi bi-telephone px-2"></i>Telefone:{" "}
            {studioData.telefone}
          </p>
          <p className="card-text">
            <i className="bi bi-phone px-2"></i>Celular: {studioData.celular}
          </p>
          {/* Adicione mais informações do estúdio aqui */}
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
      <ToastContainer />
    </div>
  );
}
