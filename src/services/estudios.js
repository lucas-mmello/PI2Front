import Api from "./api";

const EstudioService = {
  register: (params) => Api.post("/estudios/register", params),
  login: async (params) => {
    const response = await Api.post("/estudios/login", params);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", response.data.token);
  },
};

export default EstudioService;
