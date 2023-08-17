import Estudio from "./Estudio";
import User from "./User";
import { useState } from "react";
import "../../../styles/login.scss";

export default function Login() {
  const [escolhaLogin, setEscolhaLogin] = useState(true);
  return (
    <div className="login-div">
      <h3 className="danger d-flex justify-content-center align-items-center">
        {escolhaLogin
          ? "Faça seu Login como Usuário"
          : "Faça seu Login como Estudio"}
      </h3>
      {escolhaLogin ? <User /> : <Estudio />}
      <div className="d-flex justify-content-center align-items-center my-4">
        <button
          className="btn btn-outline-primary"
          onClick={(e) =>
            escolhaLogin ? setEscolhaLogin(false) : setEscolhaLogin(true)
          }
        >
          {escolhaLogin ? "Login Estudio" : "Login User"}
        </button>
      </div>
    </div>
  );
}
