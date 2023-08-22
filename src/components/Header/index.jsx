import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
export default function Header() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.nav}`}>
      <div className="container-fluid">
        <a className={`${styles.projectName}`} href="#">
          InkSearch
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex justify-content-between align-items-start w-100">
            <ul className="navbar-nav">
              <li className={`nav-item ${styles.li}`}>
                <Link to="/" className="text-light nav-link">
                  Home
                </Link>
              </li>
              <li className={`nav-item ${styles.li}`}>
                <Link to="" className="text-light nav-link">
                  Outra
                </Link>
              </li>
              <li className={`nav-item ${styles.li}`}>
                <Link to="/" className="text-light nav-link">
                  Outra
                </Link>
              </li>
            </ul>
          </div>
          <div className={`my-2 my-lg-0 ${styles.buttons}`}>
            <button
              className="btn btn-outline-secondary  my-2 my-sm-0"
              type="submit"
            >
              <Link to="/Login" className="text-light nav-link">
                Login
              </Link>
            </button>
            <button
              className="btn btn-outline-secondary  my-2 my-sm-0 mx-2"
              type="submit"
            >
              <Link to="/Register" className="text-light nav-link">
                Register
              </Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
