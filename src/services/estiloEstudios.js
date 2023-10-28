import Api from "./api";
import CookiesService from "./cookies";

const cookie = CookiesService.getCookie("userdata");
const token = cookie ? cookie.jwt : "";

const EstiloEstudioService = {
  listarEstilosDoEstudio: (id) =>
    Api.get(`/api/EstiloEstudio/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
  removerEstiloDoEstudio: (id) =>
    Api.delete(`/api/EstiloEstudio/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
  listarEstilosDisponiveis: (id) =>
    Api.get(`/api/EstiloEstudio/estilos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
  adicionarEstiloEstudio: (params) =>
    Api.post(`/api/EstiloEstudio`, params, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
};

export default EstiloEstudioService;
