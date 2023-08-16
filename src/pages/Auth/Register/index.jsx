import Estudio from "./Estudio";
import User from "./User";
import { useState } from "react";

export default function Register() {
  const [escolhaRegister, setEscolhaRegister] = useState(true);
  return (
    <>
      <h1 className="danger">Register</h1>
      {escolhaRegister ? <User /> : <Estudio />}
      <button
        className=""
        onClick={(e) =>
          escolhaRegister ? setEscolhaRegister(false) : setEscolhaRegister(true)
        }
      >
        Teste
      </button>
    </>
  );
}
