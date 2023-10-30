import Login from "../../../../components/Auth/Login";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import CookiesService from "../../../../services/cookies";
import EstudioService from "../../../../services/estudios";

export default function Estudio() {
  const [RedirectToHome, setRedirectToHome] = useState(false);
  const handleEstudioLogin = async (formData) => {
    try {
      const estudioData = {
        email: formData.email,
        senha: formData.password,
      };
      console.log(estudioData);
      const req = await EstudioService.login(estudioData);
      const estudio = req.data.estudio;
      const token = req.data.token;
      CookiesService.createCookie(
        "userdata",
        estudio.nome,
        "1",
        estudio.email,
        token,
        estudio.id
      );
      console.log(req);
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
