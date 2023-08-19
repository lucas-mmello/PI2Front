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
        <h1 className="danger">Teste</h1>
      </div>
    </>
  );
}
