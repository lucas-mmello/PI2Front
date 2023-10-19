import styles from "./styles.module.scss";
import { Form, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ViaCEPService from "../../../../services/cep";
import Auth from "../../../../configs/Auth";

export default function UserRegister(props) {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    cep: "", // Adicione um campo para o CEP
    cidade: "", // Adicione um campo para a cidade
    estado: "", // Adicione um campo para o estado
  });
  const [passwordError, setPasswordError] = useState("");
  const [cepData, setCepData] = useState(null); // Para armazenar os dados do CEP

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Verifica se a senha atende aos requisitos
    if (!Auth.validatePassword(registerData.password)) {
      setPasswordError(
        "A senha deve conter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial."
      );
      return;
    }

    // Agora você pode enviar todos os dados (incluindo os dados do CEP) para o seu backend.
    // registerData conterá todos os dados do formulário, incluindo os dados do CEP (cepData).

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
      cep: "", // Certifique-se de limpar o campo CEP
      cidade: "", // Certifique-se de limpar o campo cidade
      estado: "", // Certifique-se de limpar o campo estado
    });
    setCepData(null); // Limpa os dados do CEP
  };

  // Função para buscar os dados do CEP
  const fetchCEPData = async () => {
    const { cep } = registerData;
    if (cep.length === 8) {
      try {
        const data = await ViaCEPService.getCEP(cep);
        setCepData(data);

        // Preencha automaticamente os campos relacionados ao CEP
        setRegisterData({
          ...registerData,
          cidade: data.localidade,
          estado: data.uf,
        });
      } catch (error) {
        console.error("Erro ao consultar o CEP:", error);
        // Lida com o erro, por exemplo, CEP não encontrado
        setCepData(null);
        setRegisterData({
          ...registerData,
          cidade: "",
          estado: "",
        });
      }
    }
  };

  // Use o useEffect para chamar a função fetchCEPData sempre que o CEP mudar
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
              maxLength={8}
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
