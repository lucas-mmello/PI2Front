import styles from "./styles.module.scss";
import { Form, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ViaCEPService from "../../../../services/cep";

export default function EstudioRegister(props) {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    cnpj: "",
    cep: "",
    rua: "",
    residencia: "",
    cidade: "",
    estado: "",
    celular: "",
    telefone: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [cepData, setCepData] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Verifica se a senha atende aos requisitos
    if (!validatePassword(registerData.password)) {
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
      cnpj: "",
      cep: "",
      rua: "",
      residencia: "",
      cidade: "",
      estado: "",
      celular: "",
      telefone: "",
    });
    setCepData(null);
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const fetchCEPData = async () => {
    const { cep } = registerData;
    if (cep.length === 8) {
      try {
        const data = await ViaCEPService.getCEP(cep);
        setCepData(data);

        setRegisterData({
          ...registerData,
          rua: data.logradouro,
          cidade: data.localidade,
          estado: data.uf,
        });
      } catch (error) {
        console.error("Erro ao consultar o CEP:", error);
        setCepData(null);
        setRegisterData({
          ...registerData,
          rua: "",
          cidade: "",
          estado: "",
        });
      }
    }
  };

  useEffect(() => {
    fetchCEPData();
  }, [registerData.cep]);

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
              name="name"
              value={registerData.name}
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
              name="email"
              value={registerData.email}
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
              className={`form-control ${passwordError ? "is-invalid" : ""}`}
              placeholder="••••••••"
              name="password"
              value={registerData.password}
              onChange={(e) => handleInputChange(e, "password")}
            />
            {passwordError && (
              <div className="invalid-feedback">{passwordError}</div>
            )}
          </div>
        </div>

        <div className={`${styles.divinp}`}>
          <label htmlFor="Cnpj" className="form-label">
            CNPJ
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-briefcase"></i>
            </span>
            <input
              type="text"
              id="Cnpj"
              className="form-control"
              placeholder="Cnpj..."
              name="cnpj"
              value={registerData.cnpj}
              onChange={(e) => handleInputChange(e, "cnpj")}
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
              name="cep"
              value={registerData.cep}
              onChange={(e) => handleInputChange(e, "cep")}
              maxLength={8}
            />
          </div>
        </div>

        <div className={`${styles.divinp}`}>
          <label htmlFor="Rua" className="form-label">
            Rua
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-signpost"></i>
            </span>
            <input
              type="text"
              id="Rua"
              className="form-control"
              disabled
              name="rua"
              value={registerData.rua}
              onChange={(e) => handleInputChange(e, "rua")}
            />
          </div>
        </div>

        <div className={`${styles.divinp}`}>
          <label htmlFor="Residencia" className="form-label">
            Numero da Residencia
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-123"></i>
            </span>
            <input
              type="text"
              id="Residencia"
              className="form-control"
              name="residencia"
              value={registerData.residencia}
              onChange={(e) => handleInputChange(e, "residencia")}
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
              name="cidade"
              value={registerData.cidade}
              onChange={(e) => handleInputChange(e, "cidade")}
            />
          </div>
        </div>

        <div className={`${styles.divinp}`}>
          <label htmlFor="Estado" className="form-label">
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
              name="estado"
              value={registerData.estado}
              onChange={(e) => handleInputChange(e, "estado")}
            />
          </div>
        </div>

        <div className={`${styles.divinp}`}>
          <label htmlFor="Celular" className="form-label">
            Celular
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-phone"></i>
            </span>
            <input
              type="text"
              id="Celular"
              className="form-control"
              name="celular"
              value={registerData.celular}
              onChange={(e) => handleInputChange(e, "celular")}
            />
          </div>
        </div>

        <div className={`${styles.divinp}`}>
          <label htmlFor="Telefone" className="form-label">
            Telefone
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-telephone"></i>
            </span>
            <input
              type="text"
              id="Telefone"
              className="form-control"
              name="telefone"
              value={registerData.telefone}
              onChange={(e) => handleInputChange(e, "telefone")}
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
