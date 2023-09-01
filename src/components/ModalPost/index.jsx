import { useState } from "react";
import { Form } from "react-router-dom";

export default function ModalPost({
  mode,
  heading,
  postId,
  onSave,
  onDelete,
  idModal,
  show,
}) {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "create" || mode === "edit") {
      const postData = {
        caption,
        image,
        id: postId,
      };

      if (mode === "create") {
        onSave(postData);
      } else if (mode === "edit") {
        onSave(postData);
      }
    } else if (mode === "delete") {
      onDelete(postId);
    }

    // Limpe os campos após o envio do formulário
    setCaption("");
    setImage(null);
  };

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
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Imagem</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                </>
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
