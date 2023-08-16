import Header from "../../components/Header";
import HeaderLogged from "../../components/HeaderLogged";

export default function Home() {
  const user = 1; // Aqui ele irá armazenar se o user está logado
  return (
    <>
      {
        user === 1 ? (
          <Header />
        ) : (
          <HeaderLogged />
        ) /* Verifica se o user está logado */
      }
      <h1 className="danger">Teste</h1>
    </>
  );
}
