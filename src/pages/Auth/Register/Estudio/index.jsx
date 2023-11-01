import EstudioRegister from "../../../../components/Auth/Register/EstudioRegister";
import styles from "./styles.module.scss";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import EstudioService from "../../../../services/estudios";

export default function Estudio() {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [loadRegister, setLoadRegister] = useState(false);
  const handleEstudioRegister = async (formData) => {
    try {
      setLoadRegister(true);
      const estudio = {
        nome: formData.name,
        email: formData.email,
        senha: formData.password,
        Cnpj: formData.cnpj,
        cep: formData.cep,
        idCidade: formData.cidade,
        rua: formData.rua,
        numResidencia: formData.residencia,
        telefone: formData.telefone,
        celular: formData.celular,
      };
      await EstudioService.register(estudio);
      setRedirectToLogin(true);
    } catch (error) {
      console.log(`Erro: ${error}`);
      setLoadRegister(false);
    }
  };

  if (redirectToLogin) {
    return <Navigate replace to={{ pathname: "/Login" }} />;
  }

  return (
    <>
      <EstudioRegister
        onSubmit={handleEstudioRegister}
        isLoading={loadRegister}
      />
    </>
  );
}
