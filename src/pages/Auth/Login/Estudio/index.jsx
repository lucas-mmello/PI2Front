import styles from "./styles.module.scss";
import { Form, Link } from "react-router-dom";

export default function Estudio() {
  return (
    <div className={``}>
      <Form className={`${styles.form}`}>
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
              placeholder="estudio@example.com"
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
