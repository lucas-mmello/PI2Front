import { useState, useEffect } from "react";
import { Form } from "react-router-dom";

export default function ModalAccount({
  mode,
  heading,
  estudioData,
  onSave,
  onDelete,
  idModal,
  show,
}) {
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [rua, setRua] = useState("");
  const [NumResidencia, setNumResidencia] = useState("");
  const [Telefone, setTelefone] = useState("");
  const [Celular, setCelular] = useState("");
  const [idEstudio, setIdEstudio] = useState("");

  // Verificar se estudioData está definido antes de definir os valores iniciais
  useEffect(() => {
    if (estudioData) {
      setName(estudioData.name || "");
      setCnpj(estudioData.cnpj || "");
      setEmail(estudioData.email || "");
      setPassword(estudioData.password || "");
      setCep(estudioData.cep || "");
      setCidade(estudioData.cidade || "");
      setEstado(estudioData.estado || "");
      setRua(estudioData.rua || "");
      setNumResidencia(estudioData.NumResidencia || "");
      setTelefone(estudioData.Telefone || "");
      setCelular(estudioData.Celular || "");
      setIdEstudio(estudioData.id || "");
    }
  }, [estudioData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "edit") {
      const estudioData = {
        name,
        cnpj,
        email,
        password,
        cep,
        cidade,
        estado,
        rua,
        NumResidencia,
        Telefone,
        Celular,
        id: idEstudio,
      };

      if (mode === "edit") {
        onSave(estudioData);
      }
    } else if (mode === "delete") {
      console.log(idEstudio);
      onDelete(idEstudio);
    }

    // Limpe os campos após o envio do formulário
    setName("");
    setCnpj("");
    setEmail("");
    setPassword("");
    setCep("");
    setCidade("");
    setEstado("");
    setRua("");
    setNumResidencia("");
    setTelefone("");
    setCelular("");
    setIdEstudio("");
  };

  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      id={idModal}
      tabIndex="-1"
      aria-labelledby="estudioModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="estudioModalLabel">
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
                      <i className="bi bi-person-vcard px-2"></i> Nome do
                      Estúdio
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
                      <i className="bi bi-card-list px-2"></i> CNPJ
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={cnpj}
                      onChange={(e) => setCnpj(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-envelope px-2"></i> Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-key px-2"></i> Senha
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
                      <i className="bi bi-pin-map px-2"></i> CEP
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-building px-2"></i> Cidade
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-map px-2"></i> Estado
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-signpost px-2"></i> Rua
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={rua}
                      onChange={(e) => setRua(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-123 px-2"></i> Número Residencial
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={NumResidencia}
                      onChange={(e) => setNumResidencia(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-telephone px-2"></i> Telefone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={Telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      <i className="bi bi-phone px-2"></i> Celular
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={Celular}
                      onChange={(e) => setCelular(e.target.value)}
                    />
                  </div>
                </>
              )}
              {mode === "delete" && (
                <p>Tem certeza que deseja excluir sua conta?</p>
              )}
              <input type="hidden" name="idEstudio" value={idEstudio} />
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
