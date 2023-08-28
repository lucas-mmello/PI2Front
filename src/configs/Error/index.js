import { useEffect } from "react"; //está sendo utilizado, favor não remover
const redirectToError = (navigate, errorCode, errorMessage) => {
  navigate(`/error/${errorCode}/${encodeURIComponent(errorMessage)}`);
};

export const errorHandlers = {
  handleUnauthorized: (navigate) => {
    return () => {
      redirectToError(navigate, "401", "Acesso não autorizado.");
    };
  },
  handlePermissionDenied: (navigate) => {
    return () => {
      redirectToError(
        navigate,
        "403",
        "Sem permissão para acessar este recurso."
      );
    };
  },
  // ...other error handlers
};
