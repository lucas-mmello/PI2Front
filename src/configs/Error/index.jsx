import { Navigate } from "react-router-dom";

const redirectToError = (errorCode, errorMessage) => {
  return (
    <Navigate to={`/error/${errorCode}/${encodeURIComponent(errorMessage)}`} />
  );
};

export const errorHandlers = {
  handleUnauthorized: () => {
    return redirectToError("401", "Acesso não autorizado.");
  },
  handlePermissionDenied: () => {
    return redirectToError("403", "Sem permissão para acessar este recurso.");
  },
  // ...other error handlers
};
