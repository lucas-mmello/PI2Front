import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Error = () => {
  const [RedirectToHome, setRedirectToHome] = useState(false);
  const [RedirectToLogin, setRedirectToLogin] = useState(false);

  const params = useParams();
  const errorCode = params.errorCode || "404";
  const message = params.errorMessage
    ? decodeURIComponent(params.errorMessage)
    : "Não encontrado!";

  if (RedirectToHome) {
    return <Navigate replace to={{ pathname: "/" }} />;
  }
  if (RedirectToLogin) {
    return <Navigate replace to={{ pathname: "/login" }} />;
  }

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorTitle}>Error {errorCode}</h1>
        <p className={styles.errorDescription}>{message}</p>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={(e) => setRedirectToHome(true)}
          >
            Home
          </button>
          <button
            className={styles.button}
            onClick={(e) => setRedirectToLogin(true)}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
