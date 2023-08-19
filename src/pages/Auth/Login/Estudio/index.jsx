import Login from "../../../../components/Auth/Login";
import { Navigate } from "react-router-dom";
import { useState } from "react";

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
