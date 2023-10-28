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
        senha: formData.password,
      };
      console.log(user);
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
      console.log(req);
      //para fins de testes, depois deve ser ajustado
      setRedirectToHome(true);
    } catch (error) {
      alert(`Erro ao logar cliente: ${error}`);
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
      />
    </>
  );
}
