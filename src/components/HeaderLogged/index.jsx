import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import { useState } from "react";

export default function HeaderLogged() {
  const [RedirectToHome, setRedirectToHome] = useState(false);

  const user = sessionStorage.getItem("user");
  let name = "";

  if (user) {
    const parsedUser = JSON.parse(user);
    name = parsedUser.email;
  }

  const LogOut = () => {
    sessionStorage.removeItem("user");
    setRedirectToHome(true);
  };

  if (RedirectToHome && location.pathname !== "/") {
    return <Navigate replace to={{ pathname: "/" }} />;
  } else if (RedirectToHome && location.pathname === "/") {
    window.location.reload();
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.nav}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
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
            <ul className="navbar-nav my-2">
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

            <div className={`my-2 my-lg-2 mx-3 dropstart`}>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <button
                    className="btn btn-dark dropdown-toggle text-light"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {name}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-lg-start dropdown-menu-dark">
                    <li>
                      <Link to="" className="text-light nav-link dropdown-item">
                        Account
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="text-light nav-link dropdown-item">
                        Something
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="text-light nav-link dropdown-item"
                        onClick={LogOut}
                      >
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
