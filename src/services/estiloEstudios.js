import Api from "./api";

const EstiloEstudioService = {
  listarEstilosDoEstudio: (id) => Api.get(`/api/EstiloEstudio/${id}`),
  removerEstiloDoEstudio: (id) => Api.delete(`/api/EstiloEstudio/${id}`),
};

export default EstiloEstudioService;
