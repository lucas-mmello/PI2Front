import Api from "./api";
import CookiesService from "./cookies";

const cookie = CookiesService.getCookie("userdata");
const token = cookie ? cookie.jwt : "";

const CidadeEstadoService = {
  listarEstados: () =>
    Api.get("/api/Estados", {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
  listarCidades: (id) =>
    Api.get(`/api/Cidades/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
  selecionarCidade: (nome) =>
    Api.get(`/api/Cidades/cidade/${nome}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
};

export default CidadeEstadoService;
