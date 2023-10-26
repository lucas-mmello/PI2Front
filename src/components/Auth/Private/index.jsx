import { Outlet, Navigate, useLocation } from "react-router-dom";
import { errorHandlers } from "../../../configs/Error";
import CookiesService from "../../../services/cookies";
export default function Private() {
  const isAuthenticated = CookiesService.getCookie("userdata");
  const location = useLocation();

  // Funções para lidar com os erros

  if (location.pathname === "/private/account" && !isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (!isAuthenticated) {
    return errorHandlers.handleUnauthorized();
  }

  // Verifica se a URL é exatamente "/private"
  if (location.pathname === "/private" && isAuthenticated) {
    return <Navigate to="/private/search" />;
  }

  return <Outlet />;
}
