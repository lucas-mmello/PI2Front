import Api from "./api";
import CookiesService from "./cookies";

const cookie = CookiesService.getCookie("userdata");
const token = cookie ? cookie.jwt : "";

const UserService = {
  register: (params) => Api.post("/api/Clientes/", params),
  login: async (params) =>
    await Api.post(
      `/api/Clientes/login?email=${params.email}&senha=${params.senha}`
    ),

  // "/api/Clientes/login", {
  //   query: { email: params.email, senha: params.senha },
  // }

  selecionarUser: (id) =>
    Api.get(`/api/Clientes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
  editarUser: (id, params) =>
    Api.put(`/api/Clientes/${id}`, params, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
  excluirUser: async (id) => {
    await Api.delete(`/api/Clientes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    });
    CookiesService.deleteCookie("userdata");
  },
};

export default UserService;
