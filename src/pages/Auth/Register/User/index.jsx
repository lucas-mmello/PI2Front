import UserRegister from "../../../../components/Auth/Register/UserRegister";
import styles from "./styles.module.scss";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import UserService from "../../../../services/users";

export default function User() {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const handleUserRegister = async (formData) => {
    try {
      // await UserService.Register(formData); comentei pq ainda não tem a api pronta

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
      <UserRegister onSubmit={handleUserRegister} />
    </>
  );
}
