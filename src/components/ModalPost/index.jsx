import { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import PostService from "../../services/posts";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase";
import ImageConfig from "../../configs/Image";

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

  const imageUpload = async () => {
    const file = image;
    if (!file) return;
    const fileName = ImageConfig.imageName(estudioId, file.name);
    const storageRef = ref(storage, `images/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    try {
      await uploadTask;
      const url = await getDownloadURL(uploadTask.snapshot.ref);
      return url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "create" || mode === "edit") {
      const postData = {
        legenda: caption,
      };
      if (mode === "create") {
        const url = await imageUpload();
        console.log(url);
        postData.foto = url;
        postData.idEstudio = estudioId;
        onSave(postData);
      } else if (mode === "edit") {
        postData.idPostagem = postId;
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
                  {mode === "create" && (
                    <div className="mb-3">
                      <label className="form-label">Imagem</label>

                      <input
                        type="file"
                        accept="image/*"
                        className="form-control"
                        required
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                  )}
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
