import { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import PostService from "../../services/posts";

export default function ModalPost({
  mode,
  heading,
  postId,
  onSave,
  onDelete,
  idModal,
  show,
  estudioId,
}) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [imageLink, setImageLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "create" || mode === "edit") {
      const postData = {
        legenda: caption,
      };

      if (image) {
        //enquanto não tiver como armazenar imagem, vai por link
        setImage(
          "https://static3.tcdn.com.br/img/img_prod/460977/teste_100485_1_cbc226c7d23a19c784fb4752ffe61337.png"
        );
        postData.foto = image;
      } else if (mode === "edit" && imageLink) {
        // Use imageLink if image is null in Edit mode
        postData.foto = imageLink;
        postData.idPostagem = postId;
      }
      if (mode === "create") {
        postData.idEstudio = estudioId;
        onSave(postData);
      } else if (mode === "edit") {
        onSave(postId, postData);
      }
    } else if (mode === "delete") {
      onDelete(postId);
    }

    // Limpe os campos após o envio do formulário
    setCaption("");
    setImage(null);
  };

  useEffect(() => {
    // Chamar SelecionarPost quando o componente é montado
    if (mode === "edit" && postId) {
      async function fetchData() {
        try {
          const response = await PostService.selecionarPost(postId);
          setCaption(response.data.legenda);
          setImageLink(response.data.foto);
        } catch (error) {
          console.log("Erro ao selecionar o post:", error);
        }
      }
      fetchData();
    }
  }, [mode, postId]);

  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      id={idModal}
      tabIndex="-1"
      aria-labelledby="postModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="postModalLabel">
              {heading}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Form onSubmit={handleSubmit}>
              {mode !== "delete" && (
                <>
                  <div className="mb-3">
                    <label className="form-label">Legenda</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter caption"
                      required
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Imagem</label>
                    {mode === "create" && (
                      <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                        required
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    )}
                    {mode === "edit" && (
                      <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    )}
                  </div>
                </>
              )}
              {mode === "delete" && (
                <div>
                  <p>Tem certeza que deseja excluir este post?</p>
                </div>
              )}
              {mode !== "create" && (
                <input type="hidden" name="postId" value={postId} />
              )}
              <button
                type="submit"
                className={
                  mode !== "delete" ? "btn btn-success" : "btn btn-danger"
                }
                data-bs-dismiss="modal"
              >
                {mode === "delete" ? "Delete" : "Save"}
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
