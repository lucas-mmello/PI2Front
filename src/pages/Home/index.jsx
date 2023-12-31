import Carousel from "../../components/Carousel";
import "../../styles/home.scss";
import image1 from "../../assets/images/teste.png";
import carrosel2 from "../../assets/images/carrosel2.png";
import carrosel3 from "../../assets/images/carrosel3.jpg";
import tatuador from "../../assets/images/Tatuador.jpg";
import cliente from "../../assets/images/Clientes.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="div-carousel">
        <Carousel
          image1={image1}
          image2={carrosel2}
          image3={carrosel3}
          alt="teste"
        />
      </div>
      <div className="section d-flex" id="clienteDiv">
        <div
          className="col-md-6 text-left align-items-center"
          data-aos="fade-up-right"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <h1>Clientes</h1>
          <p>
            Ache o Tatuador perfeito para você na sua cidade com o InkSearch em
            minutos
          </p>
        </div>
        <div
          className="col-md-6"
          data-aos="fade-down-left"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <img
            src={tatuador}
            alt="Imagem à Direita 1"
            id="img"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="section d-flex mb-4" id="tatooDiv">
        <div
          className="col-md-6"
          data-aos="flip-right"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <img src={cliente} alt="Imagem à Esquerda 2" className="img-fluid" />
        </div>
        <div
          className="col-md-6 text-right align-items-center"
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          data-aos-once="true"
        >
          <h1>Estudios</h1>
          <p>
            Expanda sua rede de clientes e monte seu catálogo de trabalhos
            rapidamente
          </p>
        </div>
      </div>
      <section id="contact">
        <h2
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Entre em contato
        </h2>

        <div className="icons">
          <div
            className="contact-info"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <a href="mailto:support@example.com" className="icon">
              <i className="bi bi-envelope"></i>
            </a>
            <p className="text">support@example.com</p>
          </div>

          <div
            className="contact-info"
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <a href="tel:+15555555555" className="icon">
              <i className="bi bi-phone"></i>
            </a>
            <p className="text">+1 555 555 5555</p>
          </div>
        </div>

        <p data-aos="zoom-in-up" data-aos-duration="1000" data-aos-once="true">
          Horário de funcionamento: 9h às 18h, de segunda a sexta-feira.
        </p>
      </section>
    </div>
  );
}
