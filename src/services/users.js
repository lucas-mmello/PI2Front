import Api from "./api";
import CookiesService from "./cookies";

const UserService = {
  register: (params) => Api.post("/users/register", params),
  login: async (params) => {
    const response = await Api.post("/users/login", params);
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
  selecionarUser: (id) => Api.get(`/api/Clientes/${id}`),
  editarUser: (id, params) => Api.put(`/api/Clientes/${id}`, params),
  excluirUser: async (id) => {
    await Api.delete(`/api/Clientes/${id}`);
    CookiesService.deleteCookie("userdata");
  },
};

export default UserService;
