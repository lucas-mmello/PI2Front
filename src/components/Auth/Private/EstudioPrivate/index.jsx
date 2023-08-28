import { Outlet, Navigate, useLocation } from "react-router-dom";
import { errorHandlers } from "../../../../configs/Error";
export default function EstudioPrivate() {
  const isPermited = sessionStorage.getItem("permission");

  // Funções para lidar com os erros

  if (isPermited !== "1") {
    return errorHandlers.handlePermissionDenied();
  }
  const location = useLocation();

  // Verifica se a URL é exatamente "/estudioPrivate"
  if (location.pathname === "/private/estudioPrivate" && isPermited === "1") {
    return <Navigate to="/private/estudioPrivate/post" />;
  }

  return <Outlet />;
}
