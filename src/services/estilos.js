import Api from "./api";

const EstiloService = {
  listarEstilos: () => Api.get("/api/Estilos"),
};

export default EstiloService;
