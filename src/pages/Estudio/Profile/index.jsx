import Profile from "../../../components/Profile";
import Post from "../../../components/Card/Post";
import "../../../styles/profile.scss";
import logo from "../../../assets/icon/logo.png";
import icon from "../../../assets/icon/favicon-32x32.png";

export default function ProfilePage() {
  const postsData = [
    {
      id: 1,
      image: logo,
      description: "Descrição do post 1",
      editar: "/editar/1",
      excluir: "/excluir/1",
    },
    {
      id: 2,
      image: "url_da_imagem_2",
      description: "Descrição do post 2",
      editar: "/editar/2",
      excluir: "/excluir/2",
    },
    {
      id: 3,
      image: icon,
      description: "Descrição do post 1",
      editar: "/editar/1",
      excluir: "/excluir/1",
    },
    {
      id: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/900px-Instagram_logo_2022.svg.png?20220518162235",
      description: "Descrição do post 4",
      editar: "/editar/4",
      excluir: "/excluir/4",
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
