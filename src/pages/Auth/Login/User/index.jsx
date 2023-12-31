import Login from "../../../../components/Auth/Login";
import { Navigate, json } from "react-router-dom";
import { useState } from "react";
import UserService from "../../../../services/users";
import CookiesService from "../../../../services/cookies";
import { ToastContainer, toast } from "react-toastify";

export default function User() {
  const [RedirectToHome, setRedirectToHome] = useState(false);
  const [loadLogin, setLoadLogin] = useState(false);

  const handleUserLogin = async (formData) => {
    try {
      setLoadLogin(true);
      const user = {
        email: formData.email,
        senha: formData.password,
      };
      const req = await UserService.login(user);
      const cliente = req.data.cliente;
      const token = req.data.token;
      CookiesService.createCookie(
        "userdata",
        cliente.nome,
        2,
        cliente.email,
        token,
        cliente.id
      );
      //para fins de testes, depois deve ser ajustado
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
      console.log(`Erro ao logar cliente: ${error}`);
      setLoadLogin(false);
    }
  };

  if (RedirectToHome) {
    window.location.reload();
  }

  return (
    <>
      <Login
        placeholderLogin={"usuario@example.com"}
        onSubmit={handleUserLogin}
        isLoading={loadLogin}
      />
      <ToastContainer />
    </>
  );
}
