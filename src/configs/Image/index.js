import { v4 as uuidv4 } from "uuid";

const ImageConfig = {
  imageName: (estudioId, fileName) => {
    // Use o UUID (v4) para gerar uma parte aleatória do nome
    const uniquePart = uuidv4();

    // Combine o estudioId, o fileName e a parte única
    const uniqueName = `${estudioId}_${fileName}_${uniquePart}`;

    // Remova espaços e caracteres especiais (opcional)
    const sanitizedName = uniqueName.replace(/[^\w\s.-]/gi, "");

    // Retorne o nome de imagem único
    return sanitizedName;
  },
};

export default ImageConfig;
