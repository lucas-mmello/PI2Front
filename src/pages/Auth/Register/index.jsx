import Estudio from "./Estudio";
import User from "./User";
import { useState } from "react";

export default function Register() {
  const [escolhaRegister, setEscolhaRegister] = useState(true);
  return (
    <>
      {escolhaRegister ? <User /> : <Estudio />}
      <button
        className="btn btn-outline-primary"
        onClick={(e) =>
          escolhaRegister ? setEscolhaRegister(false) : setEscolhaRegister(true)
        }
      >
        {escolhaRegister ? "Register Estudio" : "Register User"}
      </button>
    </>
  );
}
