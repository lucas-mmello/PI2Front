import Api from "./api";
import CookiesService from "./cookies";

const cookie = CookiesService.getCookie("userdata");
const token = cookie ? cookie.jwt : "";

const EstudioService = {
  register: (params) => Api.post("/estudios/register", params),
  login: async (params) => {
    const response = await Api.post("/estudios/login", params);
    CookiesService.createCookie(
      "userdata",
      userName,
      permission,
      email,
      jwtToken
    ); // usar aqui ao inves do de baixo
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", response.data.token);
  },
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
};

export default EstudioService;
