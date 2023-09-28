import { Outlet, Navigate, useLocation } from "react-router-dom";
import { errorHandlers } from "../../../../configs/Error";
import CookiesService from "../../../../services/cookies";
export default function EstudioPrivate() {
  const userData = CookiesService.getCookie("userdata");
  const isPermited = userData.permission;

  // Funções para lidar com os erros

  if (isPermited !== "1") {
    return errorHandlers.handlePermissionDenied();
  }
  const location = useLocation();

  // Verifica se a URL é exatamente "/estudioPrivate"
  if (location.pathname === "/private/estudioPrivate" && isPermited === "1") {
    return <Navigate to="/private/estudioPrivate/profile" />;
  }

  return <Outlet />;
}
