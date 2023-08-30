import Profile from "../../../components/Profile";
import Post from "../../../components/Card/Post";
import "../../../styles/profile.scss";
import logo from "../../../assets/icon/logo.png";
import icon from "../../../assets/icon/favicon-32x32.png";
import { Link } from "react-router-dom";

export default function ProfilePage() {
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

  return (
    <>
      <Profile studioInfo={studioInfo} />
      <div className="profilePage">
        <div className="div-button">
          <button className="btn btn-info">
            <Link
              to="/private/estudioPrivate/createPost"
              className="criar-text"
            >
              Criar Post
            </Link>
          </button>
        </div>
        <div className="row postContainer">
          {postsData.map((post) => (
            <div key={post.id} className="col postCol">
              <Post
                image={post.image}
                description={post.description}
                editar={post.editar}
                excluir={post.excluir}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
