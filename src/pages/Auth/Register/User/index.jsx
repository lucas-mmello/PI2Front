import UserRegister from "../../../../components/Auth/Register/UserRegister";
import styles from "./styles.module.scss";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import UserService from "../../../../services/users";
import { ToastContainer, toast } from "react-toastify";

export default function User() {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [loadRegister, setLoadRegister] = useState(false);
  const handleUserRegister = async (formData) => {
    try {
      const user = {
        nome: formData.name,
        email: formData.email,
        senha: formData.password,
        dataNasc: formData.nascimento,
        cep: formData.cep,
        idCidade: formData.cidade,
      };
      await UserService.register(user);
      setRedirectToLogin(true);
    } catch (error) {
      toast.error("Erro ao registrar!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      console.log(`Erro: ${error}`);
      setLoadRegister(false);
    }
  };

  if (redirectToLogin) {
    return <Navigate replace to={{ pathname: "/Login" }} />;
  }

  return (
    <>
      <UserRegister onSubmit={handleUserRegister} isLoading={loadRegister} />
      <ToastContainer />
    </>
  );
}
