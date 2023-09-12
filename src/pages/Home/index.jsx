import React, { useState } from "react";
import Carousel from "../../components/Carousel";
import "../../styles/home.scss";
import image1 from "../../assets/images/teste.png";
import icon from "../../assets/images/carrosel2.jpg";
import tatuador from "../../assets/images/Tatuador.jpg";
import cliente from "../../assets/images/Clientes.jpg";
import { errorHandlers } from "../../configs/Error";

export default function Home() {
  const [handleUnauthorized, setHandleUnauthorized] = useState(false);

  if (handleUnauthorized) {
    return errorHandlers.handleUnauthorized();
  }

  return (
    <div className="home">
      <div className="div-carousel">
        <Carousel
          image1={image1}
          image2={icon}
          image3="https://static.vecteezy.com/ti/fotos-gratis/p3/2268491-fundo-de-praia-vazio-gratis-foto.jpg"
          alt="teste"
        />
      </div>
      <div className="section d-flex" id="clienteDiv">
        <div className="col-md-6 text-left align-items-center">
          <h1>Clientes</h1>
          <p>
            Ache o Tatuador perfeito para você na sua cidade com o InkSearch em
            minutos
          </p>
        </div>
        <div className="col-md-6">
          <img
            src={tatuador}
            alt="Imagem à Direita 1"
            id="img"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="section d-flex mb-4" id="tatooDiv">
        <div className="col-md-6">
          <img src={cliente} alt="Imagem à Esquerda 2" className="img-fluid" />
        </div>
        <div className="col-md-6 text-right align-items-center">
          <h1>Estudios</h1>
          <p>
            Expanda sua rede de clientes e monte seu catálogo de trabalhos
            rapidamente
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="buttons">
            <button onClick={(e) => setHandleUnauthorized(true)}>
              Erro de Acesso Não Autorizado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
