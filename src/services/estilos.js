import Api from "./api";
import CookiesService from "./cookies";

const cookie = CookiesService.getCookie("userdata");
const token = cookie ? cookie.jwt : "";

const EstiloService = {
  listarEstilos: () =>
    Api.get("/api/Estilos", {
      headers: {
        Authorization: `Bearer ${token}`, // Enviando o token JWT no cabeçalho de autorização
      },
    }),
};

export default EstiloService;
