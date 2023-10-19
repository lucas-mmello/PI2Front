import EstudioRegister from "../../../../components/Auth/Register/EstudioRegister";
import styles from "./styles.module.scss";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import EstudioService from "../../../../services/estudios";

export default function Estudio() {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const handleEstudioRegister = async (formData) => {
    try {
      // await EstudioService.Register(formData); comentei pq ainda não tem a api pronta

      setRedirectToLogin(true);
    } catch (error) {
      alert(`Erro: ${error}`);
    }
  };

  if (redirectToLogin) {
    return <Navigate replace to={{ pathname: "/Login" }} />;
  }

  return (
    <>
      <EstudioRegister onSubmit={handleEstudioRegister} />
    </>
  );
}
