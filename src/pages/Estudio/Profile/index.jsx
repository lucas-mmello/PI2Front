import Profile from "../../../components/Profile";
import Post from "../../../components/Card/Post";
import "../../../styles/profile.scss";
import logo from "../../../assets/icon/logo.png";
import icon from "../../../assets/icon/favicon-32x32.png";
import { useState } from "react";
import ModalPost from "../../../components/ModalPost";

export default function ProfilePage() {
  const [selectedPost, setSelectedPost] = useState("");

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

  const handleCreatePost = (postData) => {
    // Lógica para criar um novo post com os dados fornecidos
    console.log("Creating post with data:", postData);
  };

  const handleEditPost = (postData) => {
    // Lógica para editar um post existente com os dados fornecidos
    console.log("Editing post with data:", postData);
  };

  const handleDeletePost = (postId) => {
    // Lógica para excluir um post com o ID fornecido
    console.log("Deleting post with ID:", postId);
  };

  return (
    <>
      <Profile studioInfo={studioInfo} />
      <div className="profilePage">
        <div className="div-button">
          <button
            className="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#postModal"
          >
            Criar Post
          </button>
        </div>
        <div className="row postContainer">
          {postsData.map((post) => (
            <div key={post.id} className="col postCol">
              <Post
                image={post.image}
                description={post.description}
                onEdit={() => {
                  setSelectedPost(post.id);
                }}
                onDelete={() => {
                  setSelectedPost(post.id);
                }}
                idModalEd="#editModal"
                idModalDel="#deleteModal"
              />
            </div>
          ))}
        </div>

        <ModalPost
          idModal="postModal"
          mode="create"
          heading="Create Post"
          onSave={handleCreatePost}
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
    </>
  );
}
