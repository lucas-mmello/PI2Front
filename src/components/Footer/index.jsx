import styles from "./styles.module.scss";
export default function Footer() {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center p-4 my-4 ">
        <div className="col-md-4 px-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <i className="bi bi-brush-fill "></i>
          </a>
          <span className="mb-3 mb-md-0 text-body">
            &copy; 2023 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end px-4 list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-ligth" href="#">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-danger" href="#">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-light" href="#">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
