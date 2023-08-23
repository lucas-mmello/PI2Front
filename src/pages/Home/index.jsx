import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderLogged from "../../components/HeaderLogged";
import "../../styles/home.scss";
import image1 from "../../assets/images/teste.png";

export default function Home() {
  const user = sessionStorage.getItem("user"); // Aqui ele irá armazenar se o user está logado
  return (
    <>
      {
        user === null ? (
          <Header />
        ) : (
          <HeaderLogged />
        ) /* Verifica se o user está logado */
      }
      <div className="home">
        {/* <h1 className="danger">Teste</h1> */}
        <div className="div-carousel">
          <Carousel
            image1={image1}
            image2="https://cdn-icons-png.flaticon.com/512/896/896866.png"
            image3="https://static.vecteezy.com/ti/fotos-gratis/p3/2268491-fundo-de-praia-vazio-gratis-foto.jpg"
            alt="teste"
          />
        </div>

        <div className="div-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
