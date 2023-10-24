import Api from "./api";

const PostService = {
  listarPostagens: (id) => Api.get(`/api/Postagems/${id}`),
  selecionarPost: (id) => Api.get(`/api/Postagems/post/${id}`),
  alterarPost: (id, params) => Api.put(`/api/Postagems/${id}`, params),
  criarPost: (params) => Api.post(`/api/Postagems`, params),
  excluirPost: (id) => Api.delete(`/api/Postagems/${id}`),
};

export default PostService;
