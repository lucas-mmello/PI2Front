import Estudio from "./Estudio";
import User from "./User";
import { useState } from "react";

export default function Login() {
  const [escolhaLogin, setEscolhaLogin] = useState(true);
  return (
    <>
      <h1 className="danger">Login</h1>
      {escolhaLogin ? <User /> : <Estudio />}
      <button
        className=""
        onClick={(e) =>
          escolhaLogin ? setEscolhaLogin(false) : setEscolhaLogin(true)
        }
      >
        Teste
      </button>
    </>
  );
}
