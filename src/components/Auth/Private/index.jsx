import { Outlet, Navigate, useLocation } from "react-router-dom";
export default function Private() {
  const isAuthenticated = sessionStorage.getItem("user");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  const location = useLocation();

  // Verifica se a URL é exatamente "/private"
  if (location.pathname === "/private") {
    return <Navigate to="/private/search" />;
  }

  return <Outlet />;
}
