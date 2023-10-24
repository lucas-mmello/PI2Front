import Api from "./api";

const EstiloEstudioService = {
  listarEstilosDoEstudio: (id) => Api.get(`/api/EstiloEstudio/${id}`),
  removerEstiloDoEstudio: (idEstilo, idEstudio) =>
    Api.delete(`/api/EstiloEstudio/${idEstilo}/${idEstudio}`),
};

export default EstiloEstudioService;
