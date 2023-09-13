import axios from "axios";

const ViaCEPService = {
  // Método para consultar um CEP na API do ViaCEP
  getCEP: async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      return response.data;
    } catch (error) {
      // Lida com erros, por exemplo, CEP não encontrado
      console.error("Erro ao consultar o CEP:", error);
      throw error;
    }
  },
};

export default ViaCEPService;
