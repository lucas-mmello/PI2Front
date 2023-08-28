import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import { errorHandlers } from "../../../configs/Error";
export default function Private() {
  const isAuthenticated = sessionStorage.getItem("user");

  // Funções para lidar com os erros

  if (!isAuthenticated) {
    return errorHandlers.handleUnauthorized();
  }
  const location = useLocation();

  // Verifica se a URL é exatamente "/private"
  if (location.pathname === "/private" && isAuthenticated) {
    return <Navigate to="/private/search" />;
  }

  return <Outlet />;
}
