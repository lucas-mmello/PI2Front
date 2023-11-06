import axios from "axios";

const Api = axios.create({
  baseURL: "https://inksearchpi2.azurewebsites.net",
});

export default Api;
