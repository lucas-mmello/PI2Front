import Api from "./api";
import CookiesService from "./cookies";

const cookie = CookiesService.getCookie("userdata");
const token = cookie ? cookie.jwt : "";

const PostService = {
  listarPostagens: (id) =>
    Api.get(`/api/Postagems/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
  selecionarPost: (id) =>
    Api.get(`/api/Postagems/post/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
  alterarPost: (id, params) =>
    Api.put(`/api/Postagems/${id}`, params, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
  criarPost: (params) =>
    Api.post(`/api/Postagems`, params, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
  excluirPost: (id) =>
    Api.delete(`/api/Postagems/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
};

export default PostService;
