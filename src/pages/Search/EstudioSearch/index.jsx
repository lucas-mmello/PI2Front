import Profile from "../../../components/Profile";
import Post from "../../../components/Card/Post";
import "../../../styles/profile.scss";
import NoContent from "../../../components/NoContent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EstudioService from "../../../services/estudios";
import PostService from "../../../services/posts";

export default function EstudioSearch() {
  const { id } = useParams();
  const [studioInfo, setStudioInfo] = useState("");
  const [postsList, setPostsList] = useState("");

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

  useEffect(() => {
    // Esta função será executada sempre que 'id' mudar
    SelecionarEstudio();
    ListarPosts();
  }, [id]);

  return (
    <>
      <Profile studioInfo={studioInfo} />

      {postsList.length !== 0 ? (
        <div className="profilePage">
          <div className="row postContainer">
            {postsList.map((post) => (
              <div key={post.idPostagem} className="col postCol">
                <Post image={post.foto} description={post.legenda} />
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
