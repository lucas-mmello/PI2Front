import Profile from "../../../components/Profile";
import Post from "../../../components/Card/Post";
import "../../../styles/profile.scss";
import { useState, useEffect } from "react";
import ModalPost from "../../../components/ModalPost";
import NoContent from "../../../components/NoContent";
import PostService from "../../../services/posts";
import { storage } from "../../../Firebase";
import { deleteObject, ref } from "firebase/storage";
import EstudioService from "../../../services/estudios";
import CookiesService from "../../../services/cookies";
import { ToastContainer, toast } from "react-toastify";

export default function ProfilePage() {
  const [selectedPost, setSelectedPost] = useState("");
  const [postsList, setPostsList] = useState("");
  const [studioInfo, setStudioInfo] = useState("");

  const cookie = CookiesService.getCookie("userdata");
  const id = cookie ? cookie.id : "";

  async function ListarPosts() {
    try {
      const response = await PostService.listarPostagens(id);
      setPostsList(response.data);
    } catch (error) {
      console.log("Erro ao listar os posts:", error);
    }
  }

  const SelecionarEstudio = async () => {
    try {
      const response = await EstudioService.selecionarEstudio(id);
      setStudioInfo(response.data);
    } catch (error) {
      console.log("Erro ao listar os dados do estudio:", error);
    }
  };

  const handleCreatePost = async (postData) => {
    // Lógica para criar um novo post com os dados fornecidos
    try {
      if (postData.legenda && postData.foto && postData.idEstudio) {
        await PostService.criarPost({
          legenda: postData.legenda,
          foto: postData.foto,
          idEstudio: postData.idEstudio,
        });
        ListarPosts();
      } else {
        console.log("Dados inválidos");
      }
    } catch (error) {
      toast.error("Erro ao criar post!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log("Erro ao criar o post:", error);
    }
  };

  const handleEditPost = async (postId, postData) => {
    // Lógica para editar um post existente com os dados fornecidos

    try {
      await PostService.alterarPost(postId, {
        idPostagem: postData.idPostagem,
        legenda: postData.legenda,
        foto: postData.foto,
      });
      ListarPosts();
    } catch (error) {
      toast.error("Erro ao editar post!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log("Erro ao alterar o post:", error);
    }
  };

  const handleDeletePost = async (postId) => {
    // Lógica para excluir um post com o ID fornecido
    try {
      const req = await PostService.excluirPost(postId);
      imageDelete(req.data);
      ListarPosts();
    } catch (error) {
      toast.error("Erro ao excluir post!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log("Erro ao excluir o post:", error);
    }
  };

  const imageDelete = async (imageUrl) => {
    const storageRef = ref(storage, imageUrl);
    deleteObject(storageRef)
      .then(() => {
        console.log("Imagem excluída com sucesso.");
      })
      .catch((error) => {
        console.error("Erro ao excluir a imagem:", error);
      });
  };

  useEffect(() => {
    SelecionarEstudio();
    ListarPosts();
  }, []);

  return (
    <>
      <Profile studioInfo={studioInfo} ownProfile={true} />
      <div className="profilePage">
        <div className="div-button">
          {/* <button
            className="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#postModal"
          >
            <i className="bi bi-plus-circle pe-2"></i>Criar Post
          </button> */}
          <button className={`botao-circular`}>
            <i className={`bi bi-pencil`}></i>
          </button>
        </div>
        {postsList &&
          postsList.length > 0 && ( // Verifique se postsList não é nulo e tem elementos
            <div className="row postContainer">
              {postsList.map((post) => (
                <div key={post.idPostagem} className="col postCol">
                  <Post
                    image={post.foto}
                    description={post.legenda}
                    onEdit={() => {
                      setSelectedPost(post.idPostagem);
                    }}
                    onDelete={() => {
                      setSelectedPost(post.idPostagem);
                    }}
                    idModalEd="#editModal"
                    idModalDel="#deleteModal"
                  />
                </div>
              ))}
            </div>
          )}

        <ModalPost
          idModal="postModal"
          mode="create"
          heading="Create Post"
          onSave={handleCreatePost}
          estudioId={id}
        />

        <ModalPost
          idModal="editModal"
          mode="edit"
          heading="Edit Post"
          postId={selectedPost}
          onSave={handleEditPost}
        />

        <ModalPost
          idModal="deleteModal"
          mode="delete"
          heading="Delete Post"
          postId={selectedPost}
          onDelete={handleDeletePost}
        />
      </div>
      {postsList.length === 0 && (
        <NoContent
          title="Não há posts no momento"
          message="Que tal criar algo incrível para compartilhar com todos?"
          additionalMessage="Que tal explorar outras funcionalidades do sistema?"
        />
      )}
      <ToastContainer />
    </>
  );
}
