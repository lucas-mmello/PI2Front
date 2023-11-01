import Login from "../../../../components/Auth/Login";
import { useState } from "react";
import CookiesService from "../../../../services/cookies";
import EstudioService from "../../../../services/estudios";

export default function Estudio() {
  const [RedirectToHome, setRedirectToHome] = useState(false);
  const [loadLogin, setLoadLogin] = useState(false);

  const handleEstudioLogin = async (formData) => {
    try {
      setLoadLogin(true);
      const estudioData = {
        email: formData.email,
        senha: formData.password,
      };
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
      setRedirectToHome(true);
    } catch (error) {
      console.log(`Erro: ${error}`);
      setLoadLogin(false);
    }
  };

  if (RedirectToHome) {
    window.location.reload();
  }

  return (
    <>
      <Login
        placeholderLogin={"estudio@example.com"}
        onSubmit={handleEstudioLogin}
        isLoading={loadLogin}
      />
    </>
  );
}
