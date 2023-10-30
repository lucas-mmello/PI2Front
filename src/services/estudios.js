import Api from "./api";
import CookiesService from "./cookies";

const cookie = CookiesService.getCookie("userdata");
const token = cookie ? cookie.jwt : "";

const EstudioService = {
  register: async (params) => {
    const req = await Api.post("/api/Estudios", params);
    console.log(req);
  },
  login: async (params) =>
    await Api.post(
      `/api/Estudios/login?email=${params.email}&senha=${params.senha}`
    ),
  search: async (nome, query) => {
    return await Api.get(`/api/Estudios/procura/${nome}`, {
      params: { idCidade: query.idCidade, idEstilo: query.idEstilo },
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    });
  },

  selecionarEstudio: (id) =>
    Api.get(`/api/Estudios/estudio/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
  selecionarEstudioAccount: (id) =>
    Api.get(`/api/Estudios/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
  editarEstudio: (id, params) =>
    Api.put(`/api/Estudios/${id}`, params, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
  excluirEstudio: async (id) => {
    await Api.delete(`/api/Estudios/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    });
    CookiesService.deleteCookie("userdata");
  },
};

export default EstudioService;
