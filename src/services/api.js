import axios from "axios";

const Api = axios.create({ baseURL: "https://localhost:44325" });

export default Api;
