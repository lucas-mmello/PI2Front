import Profile from "../../../components/Profile";
import Post from "../../../components/Card/Post";
import "../../../styles/profile.scss";
import logo from "../../../assets/icon/logo.png";
import icon from "../../../assets/icon/favicon-32x32.png";
import { useState, useEffect } from "react";
import ModalPost from "../../../components/ModalPost";
import NoContent from "../../../components/NoContent";
import PostService from "../../../services/posts";
import CidadeEstadoService from "../../../services/cidadeEstados";

export default function ProfilePage() {
  const [selectedPost, setSelectedPost] = useState("");
  const [postsList, setPostsList] = useState("");

  const postsData = [
    {
      id: 1,
      image: logo,
      description: "Descrição do post 1",
      editar: "/private/estudioPrivate/profile/editPost/1",
      excluir: "/private/estudioPrivate/profile/deletePost/1",
    },
    {
      id: 2,
      image: "url_da_imagem_2",
      description: "Descrição do post 2",
      editar: "/private/estudioPrivate/profile/editPost/2",
      excluir: "/private/estudioPrivate/profile/deletePost/2",
    },
    {
      id: 3,
      image: icon,
      description: "Descrição do post 1",
      editar: "/private/estudioPrivate/profile/editPost/3",
      excluir: "/private/estudioPrivate/profile/deletePost/3",
    },
    {
      id: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/900px-Instagram_logo_2022.svg.png?20220518162235",
      description: "Descrição do post 4",
      editar: "/private/estudioPrivate/profile/editPost/4",
      excluir: "/private/estudioPrivate/profile/deletePost/4",
    },
    // ... outros objetos
  ];

  const studioInfo = {
    name: "Nome do Estúdio",
    address: "Endereço do Estúdio",
    city: "Cidade",
    state: "Estado",
    cnpj: "123456789",
    phone: "123-456-7890",
    cellphone: "987-654-3210",
  };

  async function ListarEstados() {
    try {
      const response = await CidadeEstadoService.Estados();
      console.log(response);
    } catch (error) {
      console.log("Erro ao listar os estados:", error);
    }
  }

  // fetch("https://localhost:44325/api/Estados")
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));

  // ListarEstados();

  async function ListarPosts() {
    try {
      const response = await PostService.listarPostagens(5);
      console.log(response.data);
      setPostsList(response.data);
    } catch (error) {
      console.log("Erro ao listar os posts:", error);
    }
  }

  const handleCreatePost = async (postData) => {
    // Lógica para criar um novo post com os dados fornecidos
    try {
      const req = await PostService.criarPost({
        legenda: postData.legenda,
        foto: postData.foto,
        idEstudio: postData.idEstudio,
      });
      console.log(req);
      ListarPosts();
    } catch (error) {
      console.log("Erro ao criar o post:", error);
    }
  };

  const handleEditPost = async (postId, postData) => {
    // Lógica para editar um post existente com os dados fornecidos

    try {
      const req = await PostService.alterarPost(postId, {
        idPostagem: postData.idPostagem,
        legenda: postData.legenda,
        foto: postData.foto,
      });
      console.log(req);
      ListarPosts();
    } catch (error) {
      console.log("Erro ao alterar o post:", error);
    }
  };

  const handleDeletePost = async (postId) => {
    // Lógica para excluir um post com o ID fornecido
    try {
      const req = await PostService.excluirPost(postId);
      console.log(req);
      ListarPosts();
    } catch (error) {
      console.log("Erro ao excluir o post:", error);
    }
  };

  useEffect(() => {
    ListarPosts();
  }, []);

  return (
    <>
      <Profile studioInfo={studioInfo} ownProfile={true} />
      <div className="profilePage">
        <div className="div-button">
          <button
            className="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#postModal"
          >
            <i className="bi bi-plus-circle pe-2"></i>Criar Post
          </button>
        </div>
        {postsList.length !== 0 && (
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
          estudioId={5}
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
    </>
  );
}
