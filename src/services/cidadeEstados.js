import Api from "./api";

const CidadeEstadoService = {
  listarEstados: () => Api.get("/api/Estados"),
  listarCidades: (id) => Api.get(`/api/Cidades/${id}`),
  selecionarCidade: (nome) => Api.get(`/api/Cidades/cidade/${nome}`),
};

export default CidadeEstadoService;
