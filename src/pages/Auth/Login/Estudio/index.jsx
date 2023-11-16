import Login from "../../../../components/Auth/Login";
import { useState } from "react";
import CookiesService from "../../../../services/cookies";
import EstudioService from "../../../../services/estudios";
import { ToastContainer, toast } from "react-toastify";

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
      toast.error("Erro ao logar!", {
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
      <ToastContainer />
    </>
  );
}
