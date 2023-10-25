import Api from "./api";

const EstiloEstudioService = {
  listarEstilosDoEstudio: (id) => Api.get(`/api/EstiloEstudio/${id}`),
  removerEstiloDoEstudio: (id) => Api.delete(`/api/EstiloEstudio/${id}`),
  listarEstilosDisponiveis: (id) => Api.get(`/api/EstiloEstudio/estilos/${id}`),
  adicionarEstiloEstudio: (params) => Api.post(`/api/EstiloEstudio`, params),
};

export default EstiloEstudioService;
