import Api from "./api";

const CidadeEstadoService = {
  listarEstados: () => Api.get("/api/Estados"),
  listarCidades: (id) => Api.get(`/api/Cidades/${id}`),
};

export default CidadeEstadoService;
