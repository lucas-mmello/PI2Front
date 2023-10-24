import Estudio from "../../components/Card/Estudio";
import "../../styles/search.scss";
import { useState, useEffect, useMemo } from "react";
import CustomModal from "../../components/CustomModal";
import NoContent from "../../components/NoContent";
import CidadeEstadoService from "../../services/cidadeEstados";
import EstiloService from "../../services/estilos";
import EstiloEstudioService from "../../services/estiloEstudios";

export default function Search() {
  const [selectedEstado, setSelectedEstado] = useState("");
  const [selectedCidade, setSelectedCidade] = useState("");
  const [selectedEstilo, setSelectedEstilo] = useState("");
  const [filterModal, setFilterModal] = useState(false);
  const [cidades, setCidades] = useState("");
  const [estados, setEstados] = useState("");
  const [estilos, setEsilos] = useState("");

  const fetchData = async () => {
    try {
      // Fazer a requisição à sua API
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    // Chamar a função de busca quando o componente for montado
    fetchData();
  }, []); // O array vazio [] garante que o useEffect só é chamado uma vez (ao montar o componente)

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "estado") {
      setSelectedEstado(value);
      // Limpa a cidade se o estado for alterado
      setSelectedCidade("");
      setCidades("");
      if (value) {
        listaCidades(value);
      }
    } else if (name === "cidade") {
      setSelectedCidade(value);
    } else if (name === "estilo") {
      setSelectedEstilo(value);
    }
  };

  const removeFilters = () => {
    setSelectedEstado("");
    setSelectedCidade("");
    setSelectedEstilo("");
  };

  const estudiosData = [
    {
      id: 3,
      name: "Estúdio 1",
      cep: "12345-678",
      state: "Estado 1",
      city: "Cidade 1",
      street: "Rua 1",
    },
    {
      id: 5,
      name: "Estúdio 2",
      cep: "98765-432",
      state: "Estado 2",
      city: "Cidade 2",
      street: "Rua 2",
    },
    // ... outros objetos de estúdio
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [didSearch, setDidSearch] = useState(false);
  const [estilosEstudio, setEstilosEstudio] = useState("");

  const handleOpenModal = (itemId) => {
    setSelectedItemId(itemId);
    setIsModalOpen(true);
    ListarEstilosDoEstudio(itemId);
  };

  const listaEstados = async () => {
    if (estados !== "") return;

    try {
      const req = await CidadeEstadoService.listarEstados();
      setEstados(req.data);
    } catch (error) {
      console.log(`Erro ao listar estados: ${error}`);
    }
  };

  const listaEstilos = async () => {
    if (estilos !== "") return;

    try {
      const req = await EstiloService.listarEstilos();
      setEsilos(req.data);
    } catch (error) {
      console.log(`Erro ao listar estilos: ${error}`);
    }
  };

  const listaCidades = async (estado) => {
    if (estado === "") {
      return;
    }

    try {
      const req = await CidadeEstadoService.listarCidades(estado);
      setCidades(req.data);
    } catch (error) {
      console.log(`Erro ao listar cidades: ${error}`);
    }
  };

  const openFilterModal = () => {
    setFilterModal(true);
    listaEstados();
  };

  const closeFilterModal = () => {
    setFilterModal(false);
  };

  const search = () => {
    if (!didSearch) {
      setDidSearch(true);
    }
    //resto da implementação da api

    //no final remove os filtros
    removeFilters();
  };

  const filtro = () => {
    //aqui vai a lógica dos filtros
    if (selectedEstado !== "" && selectedCidade === "") {
      return;
    }
    console.log(`Estado selecionado: ${selectedEstado}
    Cidade selecionada: ${selectedCidade}
    Estilo selecionado: ${selectedEstilo}`);
    // Chame a função existente passando os valores selecionados
    // Substitua essa chamada pela sua função real
    //aplicarFiltros(estadoSelecionado, cidadeSelecionada, estiloSelecionado);
    closeFilterModal();
  };

  const ListarEstilosDoEstudio = async (id) => {
    try {
      const req = await EstiloEstudioService.listarEstilosDoEstudio(id);
      setEstilosEstudio(req.data);
    } catch (error) {
      console.log(`Erro ao listar estilos do estudio: ${error}`);
    }
  };

  const getNomeEstiloPorId = (idEstilo) => {
    const estilo = estilos.find((item) => item.idEstilo === idEstilo);
    return estilo ? estilo.nome : "";
  };

  const message = useMemo(() => {
    if (estilosEstudio) {
      if (Array.isArray(estilosEstudio) && estilosEstudio.length !== 0) {
        const estudio = estilosEstudio.map((estilo) => {
          return getNomeEstiloPorId(estilo.idEstilo);
        });
        console.log(estudio);
        // Retorne o resultado para renderização
        return estudio.join(", ");
      } else {
        // Se estilosEstudio não for um array, retorne uma mensagem padrão ou o que for apropriado
        return "Estudio sem estilos";
      }
    } else {
      // Estilos ainda estão sendo buscados
      return "Carregando estilos...";
    }
  }, [estilosEstudio]);

  const handleConfirm = () => {
    console.log("Confirmação recebida para o item com ID:", selectedItemId);
    setIsModalOpen(false);
  };

  useEffect(() => {
    listaEstilos();
  }, []);

  return (
    <div>
      <h2>Buscar Estúdios</h2>
      <div className="search-bar">
        <div className="input-group mb-3 search-group">
          <input
            type="text"
            autoComplete="off"
            className="form-control inp-search"
            onKeyDown={(e) => {
              e.key === "Enter" ? search() : "";
            }}
          />
          <span className="input-group-text" onClick={search}>
            <i className="bi bi-search icon"></i>
          </span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={openFilterModal}
          >
            Filtros
          </button>
        </div>
      </div>

      {filterModal && (
        <div>
          <div
            className="modal-backdrop fade show"
            onClick={closeFilterModal}
          ></div>
          <div
            className="modal show"
            style={{ display: "block" }}
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="filtersModalLabel">
                    Filtros
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeFilterModal}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {/* Select de Estado */}
                  <select
                    className="form-select my-2"
                    aria-label="Selecione o estado"
                    value={selectedEstado}
                    onChange={handleChange}
                    name="estado"
                  >
                    <option value="">Selecione o estado</option>
                    {estados &&
                      estados.map((estado) => (
                        <option key={estado.idEstado} value={estado.idEstado}>
                          {estado.nome}
                        </option>
                      ))}
                  </select>

                  {/* Select de Cidade */}
                  {selectedEstado && (
                    <>
                      <select
                        className="form-select my-2"
                        aria-label="Selecione a cidade"
                        value={selectedCidade}
                        onChange={handleChange}
                        name="cidade"
                      >
                        <option value="">Selecione a cidade</option>
                        {cidades &&
                          cidades.map((cidade) => (
                            <option
                              key={cidade.idCidade}
                              value={cidade.idCidade}
                            >
                              {cidade.nome}
                            </option>
                          ))}
                      </select>
                    </>
                  )}

                  {/* Select de Estilos */}
                  <select
                    className="form-select my-2"
                    aria-label="Selecione o estilo"
                    value={selectedEstilo}
                    onChange={handleChange}
                    name="estilo"
                  >
                    <option value="">Selecione o estilo</option>
                    {estilos &&
                      estilos.map((estilo) => (
                        <option key={estilo.idEstilo} value={estilo.idEstilo}>
                          {estilo.nome}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeFilterModal}
                  >
                    Fechar
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={filtro}
                  >
                    Aplicar Filtros
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {didSearch ? (
        <>
          {estudiosData.length !== 0 ? (
            <div className="estudios">
              <h3>Resultados da Busca</h3>
              {estudiosData.map((estudio) => (
                <Estudio
                  key={estudio.id}
                  id={estudio.id}
                  name={estudio.name}
                  cep={estudio.cep}
                  state={estudio.state}
                  city={estudio.city}
                  street={estudio.street}
                  stylesClick={() => handleOpenModal(estudio.id)}
                />
              ))}
            </div>
          ) : (
            <NoContent
              title="Sem estúdios compatíveis com a busca"
              message="Que tal refazer sua busca ou utilizar outros filtros?"
              additionalMessage="Verifique se escreveu corretamente o nome do estúdio"
            />
          )}
        </>
      ) : (
        <NoContent
          icon="search"
          title="Faça uma busca"
          message="Pesquise pelo nome do estúdio e os filtros desejados"
          additionalMessage="Os estúdios irão aparecer aqui se os dados forem compatíveis"
        />
      )}

      {isModalOpen && (
        <CustomModal
          title="Estilos do Estúdio"
          btnConfirmMessage="Ok"
          onConfirm={handleConfirm}
          message={message}
          bgCustom={true}
        />
      )}
    </div>
  );
}
