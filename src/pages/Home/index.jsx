import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderLogged from "../../components/HeaderLogged";
import "../../styles/home.scss";

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
            image1="https://blog.portoseguro.com.br/wordpress/wp-content/uploads/2022/12/praia-paradisiaca-na-bahia-2048x1357.jpg"
            image2="https://img.freepik.com/fotos-gratis/praia-tropical_74190-188.jpg"
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
