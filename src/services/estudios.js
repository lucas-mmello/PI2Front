import Api from "./api";
import CookiesService from "./cookies";

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
};

export default EstudioService;
