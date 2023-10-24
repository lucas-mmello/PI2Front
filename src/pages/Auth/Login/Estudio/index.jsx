import Login from "../../../../components/Auth/Login";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import CookiesService from "../../../../services/cookies";

export default function Estudio() {
  const [RedirectToHome, setRedirectToHome] = useState(false);
  const handleEstudioLogin = async (formData) => {
    try {
      const estudio = {
        email: formData.email,
        password: formData.password,
      };
      sessionStorage.setItem("user", JSON.stringify(estudio));
      sessionStorage.setItem("permission", "1");

      // await EstudioService.login(estudio); comentei pq ainda não tem a api pronta

      //para fins de testes, depois deve ser ajustado
      const emailParts = formData.email.split("@");
      const userName = emailParts[0];
      const email = formData.email;
      const permission = "1"; // Permissão como string "2"
      const jwtToken = "seu_token_jwt_teste"; // Substitua pelo seu token JWT
      const id = 5;

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
        placeholderLogin={"estudio@example.com"}
        onSubmit={handleEstudioLogin}
      />
    </>
  );
}
