import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderLogged from "./components/HeaderLogged";
import "./styles/app.scss";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "react-toastify/dist/ReactToastify.css";
import CookiesService from "./services/cookies";

export default function App() {
  AOS.init();
  const user = CookiesService.getCookie("userdata"); // Aqui ele irá armazenar se o user está logado
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
