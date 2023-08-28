import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderLogged from "./components/HeaderLogged";
import "./styles/app.scss";
import { Outlet } from "react-router-dom";

export default function App() {
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
      <Outlet />

      <div className="div-footer">
        <Footer />
      </div>
    </>
  );
}
