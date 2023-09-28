import Estudio from "./Estudio";
import User from "./User";
import { useState } from "react";
import "../../../styles/register.scss";
import { Navigate } from "react-router-dom";
import CookiesService from "../../../services/cookies";

export default function Register() {
  const [escolhaRegister, setEscolhaRegister] = useState(true);

  const isAuthenticated = CookiesService.getCookie("userdata");

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h3 className="danger pt-4 d-flex justify-content-center align-items-center">
        {escolhaRegister
          ? "Faça seu Registro como Usuário"
          : "Faça seu Registro como Estudio"}
      </h3>

      <div className="d-flex justify-content-center align-items-center py-4">
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
            checked={escolhaRegister === true}
            onClick={(e) => setEscolhaRegister(true)}
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
            checked={escolhaRegister === false}
            onClick={(e) => setEscolhaRegister(false)}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            Estudio
          </label>
        </div>
      </div>
      <div className="pb-4">{escolhaRegister ? <User /> : <Estudio />}</div>
    </>
  );
}
