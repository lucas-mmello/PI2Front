import React from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";

const Error = () => {
  const params = useParams();
  const errorCode = params.errorCode || "404";
  const message = params.errorMessage
    ? decodeURIComponent(params.errorMessage)
    : "Não encontrado!";

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorTitle}>Error {errorCode}</h1>
        <p className={styles.errorDescription}>{message}</p>
      </div>
    </div>
  );
};

export default Error;
