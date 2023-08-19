import Login from "../../../../components/Auth/Login";
import { Navigate, json } from "react-router-dom";
import { useState } from "react";
import UserService from "../../../../services/users";

export default function User() {
  const [RedirectToHome, setRedirectToHome] = useState(false);

  const handleUserLogin = async (formData) => {
    try {
      const user = {
        email: formData.email,
        password: formData.password,
      };
      sessionStorage.setItem("user", JSON.stringify(user));

      // await UserService.login(user); comentei pq ainda não tem a api pronta
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
