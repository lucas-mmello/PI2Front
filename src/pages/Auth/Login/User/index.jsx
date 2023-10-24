import Login from "../../../../components/Auth/Login";
import { Navigate, json } from "react-router-dom";
import { useState } from "react";
import UserService from "../../../../services/users";
import CookiesService from "../../../../services/cookies";

export default function User() {
  const [RedirectToHome, setRedirectToHome] = useState(false);

  const handleUserLogin = async (formData) => {
    try {
      const user = {
        email: formData.email,
        password: formData.password,
      };

      // await UserService.login(user); comentei pq ainda não tem a api pronta

      //para fins de testes, depois deve ser ajustado
      const emailParts = formData.email.split("@");
      const userName = emailParts[0];
      const email = formData.email;
      const permission = "2"; // Permissão como string "2"
      const jwtToken = "seu_token_jwt_teste"; // Substitua pelo seu token JWT
      const id = 0;

      // Adicionando ao cookie "userdata"
      CookiesService.createCookie(
        "userdata",
        userName,
        permission,
        email,
        jwtToken,
        id
      );
      setRedirectToHome(true);
    } catch (error) {
      alert(`Erro: ${error}`);
    }
  };

  if (RedirectToHome) {
    return <Navigate replace to={{ pathname: "/" }} />;
  }

  return (
    <>
      <Login
        placeholderLogin={"usuario@example.com"}
        onSubmit={handleUserLogin}
      />
    </>
  );
}
