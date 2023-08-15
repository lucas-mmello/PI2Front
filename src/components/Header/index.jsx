import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" className="text-body nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="" className="text-body nav-link">
                Outra
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" className="text-body nav-link">
                Outra
              </Link>
            </li>
          </ul>
        </div>
        <div class="my-2 my-lg-0">
          <button class="btn btn-outline-secondary  my-2 my-sm-0" type="submit">
            <Link to="/Login" className="text-body nav-link">
              Login
            </Link>
          </button>
          <button
            class="btn btn-outline-secondary  my-2 my-sm-0 mx-2"
            type="submit"
          >
            <Link to="/Register" className="text-body nav-link">
              Register
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
