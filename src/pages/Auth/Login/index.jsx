import Estudio from "./Estudio";
import User from "./User";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import "../../../styles/login.scss";
import CookiesService from "../../../services/cookies";

export default function Login() {
  const [escolhaLogin, setEscolhaLogin] = useState(true);
  const isAuthenticated = CookiesService.getCookie("userdata");

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h3 className="danger py-4 d-flex justify-content-center align-items-center">
        {escolhaLogin
          ? "Faça seu Login como Usuário"
          : "Faça seu Login como Estudio"}
      </h3>
      {escolhaLogin ? <User /> : <Estudio />}

      <div className="d-flex justify-content-center align-items-center my-4 pb-4">
        <div
          className="btn-group "
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            checked={escolhaLogin === true}
            onClick={(e) => setEscolhaLogin(true)}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            Usuario
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
            checked={escolhaLogin === false}
            onClick={(e) => setEscolhaLogin(false)}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            Estudio
          </label>
        </div>
      </div>
    </>
  );
}
