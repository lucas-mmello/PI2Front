import styles from "./styles.module.scss";
import { Form, Link } from "react-router-dom";
import { useState } from "react";

export default function Login(props) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(loginData);
    clearFormInputs();
  };

  const handleInputChange = (event, key) => {
    setLoginData({ ...loginData, [key]: event.target.value });
  };

  const clearFormInputs = () => {
    setLoginData({
      email: "",
      password: "",
    });
  };

  return (
    <div className={``}>
      <Form className={`${styles.form}`} onSubmit={handleFormSubmit}>
        <div className={`${styles.divlogo}`}>
          <i className={`bi bi-person-circle ${styles.logo}`}></i>
        </div>

        <div className={`${styles.divinp}`}>
          <label htmlFor="Login" className="form-label">
            Login
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-envelope"></i>
            </span>
            <input
              type="text"
              id="Login"
              className="form-control"
              placeholder={props.placeholderLogin}
              name="email" // adiciona o atributo name para identificar o campo
              value={loginData.email} // conecta o valor ao estado loginData
              onChange={(e) => handleInputChange(e, "email")}
            />
          </div>
        </div>
        <div className={`${styles.divinp}`}>
          <label htmlFor="Senha" className="form-label">
            Senha
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-key"></i>
            </span>
            <input
              type="password"
              id="Senha"
              className="form-control"
              placeholder="••••••••"
              name="password"
              value={loginData.password}
              onChange={(e) => handleInputChange(e, "password")}
            />
          </div>
        </div>
        <div className={`${styles.submit}`}>
          <button
            type="submit"
            className={`btn btn-outline-success px-5 ${styles.btnSubmit}`}
          >
            Entrar
          </button>
        </div>
        <div className={`${styles.divinp} my-3`}>
          <Link to="/Register" className="text-body ">
            Não tem conta? Faça o seu registro aqui!
          </Link>
        </div>
      </Form>
    </div>
  );
}
