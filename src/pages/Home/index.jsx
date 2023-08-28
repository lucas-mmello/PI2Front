import Carousel from "../../components/Carousel";
import "../../styles/home.scss";
import image1 from "../../assets/images/teste.png";
import icon from "../../assets/icon/logo.png"; // Importe o useNavigate
import { errorHandlers } from "../../configs/Error"; // Importe o módulo de manipuladores de erro
import { useState } from "react";

export default function Home() {
  // Funções para lidar com os erros
  const [handleUnauthorized, setHandleUnauthorized] = useState(false);

  if (handleUnauthorized) {
    return errorHandlers.handleUnauthorized();
  }

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
          <button onClick={(e) => setHandleUnauthorized(true)}>
            Erro de Acesso Não Autorizado
          </button>
        </div>
      </div>
    </>
  );
}
