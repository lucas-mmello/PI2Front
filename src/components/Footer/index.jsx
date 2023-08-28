import styles from "./styles.module.scss";
import logo from "../../assets/icon/logo.png";
export default function Footer() {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center p-2  ">
        <div className="col-md-4 px-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <img src={logo} height={64} width={66} />
          </a>
          <span className="mb-3 mb-md-0 text-body">&copy; 2023 InkSearch</span>
        </div>

        <ul className="nav col-md-4 justify-content-end px-4 list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-info" href="#">
              <i className={`bi bi-twitter ${styles.social}`}></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-danger" href="#">
              <i className={`bi bi-instagram ${styles.social}`}></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-light" href="#">
              <i className={`bi bi-facebook ${styles.social}`}></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
