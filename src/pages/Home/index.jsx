import Carousel from "../../components/Carousel";
import "../../styles/home.scss";
import image1 from "../../assets/images/teste.png";
import icon from "../../assets/icon/logo.png";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate
import { errorHandlers } from "../../configs/Error"; // Importe o módulo de manipuladores de erro

export default function Home() {
  const navigate = useNavigate(); // Obtenha o objeto navigate

  // Funções para lidar com os erros
  const handleUnauthorized = errorHandlers.handleUnauthorized(navigate);
  const handlePermissionDenied = errorHandlers.handlePermissionDenied(navigate);

  return (
    <>
      <div className="home">
        <div className="div-carousel">
          <Carousel
            image1={image1}
            image2={icon}
            image3="https://static.vecteezy.com/ti/fotos-gratis/p3/2268491-fundo-de-praia-vazio-gratis-foto.jpg"
            alt="teste"
          />
        </div>
        <div className="buttons">
          <button onClick={handleUnauthorized}>
            Erro de Acesso Não Autorizado
          </button>
          <button onClick={handlePermissionDenied}>
            Erro de Permissão Negada
          </button>
        </div>
      </div>
    </>
  );
}
