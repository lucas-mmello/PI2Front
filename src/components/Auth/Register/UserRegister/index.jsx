import styles from "./styles.module.scss";
import { Form, Link } from "react-router-dom";
import { useState } from "react";

export default function UserRegister(props) {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Verifica se a senha atende aos requisitos
    if (!validatePassword(loginData.password)) {
      setPasswordError(
        "A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
      );
      return;
    }

    props.onSubmit(registerData);
    clearFormInputs();
    setPasswordError(""); // Limpa o erro de senha
  };

  const handleInputChange = (event, key) => {
    setRegisterData({ ...registerData, [key]: event.target.value });
  };

  const clearFormInputs = () => {
    setRegisterData({
      name: "",
      email: "",
      password: "",
    });
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  return (
    <div className={`${styles.teste}`}>
      <Form className={`${styles.form}`} onSubmit={handleFormSubmit}>
        <div className={`${styles.divlogo}`}>
          <i className={`bi bi-person-circle ${styles.logo}`}></i>
          <i className={`bi bi-plus-circle ${styles.add}`}></i>
        </div>

        <div className={`${styles.divinp}`}>
          <label htmlFor="Name" className="form-label">
            Nome
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              id="Name"
              className="form-control"
              placeholder="Nome..."
              name="name" // adiciona o atributo name para identificar o campo
              value={registerData.name} // conecta o valor ao estado registerData
              onChange={(e) => handleInputChange(e, "name")}
            />
          </div>
        </div>

        <div className={`${styles.divinp}`}>
          <label htmlFor="Email" className="form-label">
            Email
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-envelope"></i>
            </span>
            <input
              type="email"
              id="Email"
              className="form-control"
              placeholder="user@user.com"
              name="email" // adiciona o atributo name para identificar o campo
              value={registerData.email} // conecta o valor ao estado registerData
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
              className={`form-control ${passwordError ? "is-invalid" : ""}`} // Adiciona a classe is-invalid se houver erro de senha
              placeholder="••••••••"
              name="password"
              value={registerData.password}
              onChange={(e) => handleInputChange(e, "password")}
            />
            {passwordError && (
              <div className="invalid-feedback">{passwordError}</div>
            )}{" "}
            {/* Mostra a mensagem de erro */}
          </div>
        </div>

        <div className={`${styles.divinp}`}>
          <label htmlFor="Nascimento" className="form-label">
            Data de Nascimento
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-calendar4"></i>
            </span>
            <input
              type="date"
              id="Nascimento"
              className="form-control"
              name="nascimento" // adiciona o atributo name para identificar o campo
              value={registerData.nascimento} // conecta o valor ao estado registerData
              onChange={(e) => handleInputChange(e, "nascimento")}
            />
          </div>
        </div>

        <div className={`${styles.divinp}`}>
          <label htmlFor="Cep" className="form-label">
            CEP
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-mailbox"></i>
            </span>
            <input
              type="text"
              id="Cep"
              className="form-control"
              placeholder="Cep..."
              name="cep" // adiciona o atributo name para identificar o campo
              value={registerData.cep} // conecta o valor ao estado registerData
              onChange={(e) => handleInputChange(e, "cep")}
            />
          </div>
        </div>

        <div className={`${styles.divinp}`}>
          <label htmlFor="Cidade" className="form-label">
            Cidade
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-building"></i>
            </span>
            <input
              type="text"
              disabled
              id="Cidade"
              className="form-control"
              name="cidade" // adiciona o atributo name para identificar o campo
              value={registerData.cidade} // conecta o valor ao estado registerData
              onChange={(e) => handleInputChange(e, "cidade")}
            />
          </div>
        </div>

        <div className={`${styles.divinp}`}>
          <label htmlFor="Cep" className="form-label">
            Estado
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-map"></i>
            </span>
            <input
              type="text"
              disabled
              id="Estado"
              className="form-control"
              name="estado" // adiciona o atributo name para identificar o campo
              value={registerData.estado} // conecta o valor ao estado registerData
              onChange={(e) => handleInputChange(e, "estado")}
            />
          </div>
        </div>

        <div className={`${styles.submit}`}>
          <button
            type="submit"
            className={`btn btn-outline-success px-5 ${styles.btnSubmit}`}
          >
            Registrar
          </button>
        </div>
        <div className={`${styles.divinp} my-3`}>
          <Link to="/Login" className="text-body ">
            Já possui conta? Faça o seu login aqui!
          </Link>
        </div>
      </Form>
    </div>
  );
}
