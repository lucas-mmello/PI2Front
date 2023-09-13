import { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import ViaCEPService from "../../../../services/cep";

export default function ModalAccount({
  mode,
  heading,
  userData,
  onSave,
  onDelete,
  idModal,
  show,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [userId, setUserId] = useState("");

  // Função para buscar informações do CEP
  const fetchCEPInfo = async () => {
    if (cep.length !== 8) {
      console.error("O CEP deve conter exatamente 8 caracteres.");
      return;
    }
    try {
      const info = await ViaCEPService.getCEP(cep);
      // Preencha os campos com as informações do CEP
      setCidade(info.localidade);
      setEstado(info.uf);
    } catch (error) {
      console.error("Erro ao buscar informações do CEP", error);
    }
  };

  // Chamado quando o CEP é alterado
  useEffect(() => {
    if (cep) {
      fetchCEPInfo();
    }
  }, [cep]);

  useEffect(() => {
    if (userData) {
      setName(userData.name || "");
      setEmail(userData.email || "");
      setPassword(userData.password || "");
      setCep(userData.cep || "");
      setCidade(userData.cidade || "");
      setEstado(userData.estado || "");
      setBirthDate(userData.birthDate || "");
      setUserId(userData.id || "");
    }
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "edit") {
      const userData = {
        name,
        email,
        password,
        cep,
        cidade,
        estado,
        birthDate,
        id: userId,
      };

      if (mode === "edit") {
        onSave(userData);
      }
    } else if (mode === "delete") {
      onDelete(userId);
    }

    setName("");
    setEmail("");
    setPassword("");
    setCep("");
    setCidade("");
    setEstado("");
    setBirthDate("");
    setUserId("");
  };

  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      id={idModal}
      tabIndex="-1"
      aria-labelledby="userModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="userModalLabel">
              {heading}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Form onSubmit={handleSubmit}>
              {mode !== "delete" && (
                <>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-person px-2"></i>Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-envelope px-2"></i>Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-key px-2"></i>Senha
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-calendar px-2"></i>Data de Nascimento
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      value={birthDate}
                      onChange={(e) => setBirthDate(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-pin-map px-2"></i>CEP
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      maxLength={8}
                      onBlur={fetchCEPInfo} // Busca informações do CEP ao perder o foco
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-building px-2"></i>Cidade
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={cidade}
                      disabled
                      onChange={(e) => setCidade(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-map px-2"></i>Estado
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={estado}
                      disabled
                      onChange={(e) => setEstado(e.target.value)}
                    />
                  </div>
                </>
              )}
              {mode === "delete" && (
                <p>Tem certeza que deseja excluir sua conta?</p>
              )}
              <input type="hidden" name="userId" value={userId} />
              <button
                type="submit"
                className={
                  mode !== "delete" ? "btn btn-success" : "btn btn-danger"
                }
                data-bs-dismiss="modal"
              >
                {mode === "delete" ? "Deletar" : "Salvar"}
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
