import "../../../styles/stylesPage.scss";
import { useEffect, useState } from "react";
import CustomModal from "../../../components/CustomModal";
import TattooStyles from "../../../components/Card/TattooStyles";
import svgImage from "../../../assets/images/Tattoo.svg";
import NoContent from "../../../components/NoContent";
import EstiloEstudioService from "../../../services/estiloEstudios";
import EstiloService from "../../../services/estilos";
import CookiesService from "../../../services/cookies";

export default function StylesPage() {
  const [formIncluir, setFormIncluir] = useState(false);
  const [estilosEstudio, setEstilosEstudio] = useState("");
  const [estilos, setEstilos] = useState("");
  const [estilosDisponiveis, setEstilosDisponiveis] = useState("");

  const cookie = CookiesService.getCookie("userdata");
  const id = cookie ? cookie.id : "";

  const ListarEstilosDoEstudio = async () => {
    try {
      const req = await EstiloEstudioService.listarEstilosDoEstudio(id);
      setEstilosEstudio(req.data);
    } catch (error) {
      console.log(`Erro ao listar estilos do estudio: ${error}`);
    }
  };

  const ListarEstilos = async () => {
    try {
      const req = await EstiloService.listarEstilos();
      setEstilos(req.data);
    } catch (error) {
      console.log(`Erro ao listar estilos: ${error}`);
    }
  };

  const RemoverEstiloDoEstudio = async () => {
    try {
      await EstiloEstudioService.removerEstiloDoEstudio(
        idEstiloEstudio
      );
      ListarEstilosDoEstudio();
      ListarEstilosDisponiveis();
    } catch (error) {
      console.log(`Erro ao remover estilo do estudio: ${error}`);
    }
  };

  const ListarEstilosDisponiveis = async () => {
    try {
      const req = await EstiloEstudioService.listarEstilosDisponiveis(id);
      setEstilosDisponiveis(req.data);
    } catch (error) {
      console.log(`Erro ao listar estilos disponíveis: ${error}`);
    }
  };

  const AdicionarEstiloEstudio = async (idEstilo) => {
    try {
      const req = await EstiloEstudioService.adicionarEstiloEstudio({
        idEstudio: id,
        idEstilo: idEstilo,
      });
      ListarEstilosDoEstudio();
      ListarEstilosDisponiveis();
    } catch (error) {
      console.log(`Erro ao adicionar estilo ao estudio: ${error}`);
    }
  };

  const getNomeEstiloPorId = (idEstilo) => {
    const estilo = estilos
      ? estilos.find((item) => item.idEstilo === idEstilo)
      : "";
    return estilo ? estilo.nome : "";
  };

  const [isModalRemoverOpen, setIsModalRemoverOpen] = useState(false);
  const [isModaladicionarOpen, setIsModalAdicionarOpen] = useState(false);
  const [idEstiloEstudio, setidEstiloEstudio] = useState("");
  const [idEstilo, setIdEstilo] = useState("");

  const handleOpenModal = (tipoModal, idEstiloEstudio, idEstilo) => {
    if (tipoModal === 1) {
      setIsModalRemoverOpen(true);
      setidEstiloEstudio(idEstiloEstudio);
    } else {
      setIsModalAdicionarOpen(true);
      setIdEstilo(idEstilo);
    }
  };

  const handleCancel = (tipoModal) => {
    if (tipoModal === 1) {
      setIsModalRemoverOpen(false);
    } else {
      setIsModalAdicionarOpen(false);
    }
  };

  const handleConfirm = (tipoModal) => {
    if (tipoModal === 1) {
      RemoverEstiloDoEstudio();
      setIsModalRemoverOpen(false);
    } else {
      AdicionarEstiloEstudio(idEstilo);
      setIsModalAdicionarOpen(false);
    }
  };

  useEffect(() => {
    ListarEstilos();
    ListarEstilosDoEstudio();
    ListarEstilosDisponiveis();
  }, []);

  return (
    <>
      {!formIncluir && (
        <div className="d-flex justify-content-center align-itens-center mt-5">
          <button
            className="btn btn-info btn-custom"
            onClick={() => setFormIncluir(true)}
          >
            <i className="bi bi-brush pe-2"></i>Novo Estilo
          </button>
        </div>
      )}

      {formIncluir && (
        <>
          <div
            className="stylesPage"
            data-aos={formIncluir ? "fade-up" : ""}
            data-aos-duration={formIncluir ? "1700" : ""}
            data-aos-once={formIncluir ? "true" : ""}
          >
            <h2 className="text-center mb-3">Estilos Disponíveis</h2>
            <div className="d-flex align-itens-center justify-content-center my-3">
              <button
                className="btn btn-danger btn-custom"
                onClick={() => setFormIncluir(false)}
              >
                <i className="bi bi-brush pe-2"></i>Fechar
              </button>
            </div>

            {estilosDisponiveis.length !== 0 && (
              <div className="row styleContainer">
                {estilosDisponiveis.map((item) => (
                  <div key={`${item.idEstilo}a`} className="col styleCol">
                    <TattooStyles
                      image={svgImage}
                      description={item.nome}
                      onAdd={() => handleOpenModal(0, null, item.idEstilo)}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          {estilosDisponiveis.length === 0 && (
            <NoContent
              title="Sem estilos para adicionar"
              message="Parece que seu estúdio já adicionou todos os estilos disponíveis"
              additionalMessage="Verifique se seu estúdio trabalha com todos os estilos escolhidos"
            />
          )}
        </>
      )}

      <div className="stylesPage">
        <h1 className="text-center mt-2 mb-4">Estilos do Estudio</h1>
        {estilosEstudio.length !== 0 && (
          <div className="row styleContainer">
            {estilosEstudio.map((item) => (
              <div key={item.idEstiloEstudio} className="col styleCol">
                <TattooStyles
                  image={svgImage}
                  description={getNomeEstiloPorId(item.idEstilo)}
                  onDelete={() => handleOpenModal(1, item.idEstiloEstudio)}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      {estilosEstudio.length === 0 && (
        <NoContent
          title="Sem estilos no momento"
          message="Adicione estilos de tatuagem para o seu estúdio"
          additionalMessage="Escolha de acordo com os estilos que o seu estúdio trabalha"
        />
      )}

      {isModalRemoverOpen && (
        <CustomModal
          message="Você tem certeza que deseja remover?"
          onCancel={() => handleCancel(1)}
          onConfirm={() => handleConfirm(1)}
        />
      )}
      {isModaladicionarOpen && (
        <CustomModal
          message="Você tem certeza que deseja adicionar?"
          onCancel={() => handleCancel(0)}
          onConfirm={() => handleConfirm(0)}
        />
      )}
    </>
  );
}
