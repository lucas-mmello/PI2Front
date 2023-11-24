import axios from "axios";

const Api = axios.create({
  baseURL: "https://inksearchprojetoi2.azurewebsites.net",
});

export default Api;
