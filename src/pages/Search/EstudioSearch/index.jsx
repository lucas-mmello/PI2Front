import Profile from "../../../components/Profile";
import Post from "../../../components/Card/Post";
import "../../../styles/profile.scss";
import logo from "../../../assets/icon/logo.png";
import icon from "../../../assets/icon/favicon-32x32.png";
import svgTeste from "../../../assets/images/Tattoo.svg";
import NoContent from "../../../components/NoContent";

export default function EstudioSearch() {
  const postsData = [
    {
      id: 1,
      image: logo,
      description: "Descrição do post 1",
    },
    {
      id: 2,
      image: svgTeste,
      description: "Descrição do post 2",
    },
    {
      id: 3,
      image: icon,
      description: "Descrição do post 1",
    },
    {
      id: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/900px-Instagram_logo_2022.svg.png?20220518162235",
      description: "Descrição do post 4",
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

      {postsData.length !== 0 ? (
        <div className="profilePage">
          <div className="row postContainer">
            {postsData.map((post) => (
              <div key={post.id} className="col postCol">
                <Post image={post.image} description={post.description} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <NoContent
          title="Não há posts no momento"
          message="Que tal criar algo incrível para compartilhar com todos?"
          additionalMessage="Que tal explorar outros perfis de estúdios?"
        />
      )}
    </>
  );
}
