import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget";
import {Logo} from "../Logo/index";
import React from "react";

const MainNav = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light nav-color pb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to={`/`}> 
        <Logo/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-around"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-dark hover" to={`/`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark hover"
                to={`/combos`}
              >
                Combos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark hover"
                to={`/productos`}
              >
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark hover"
                to={`/tips`}
              >
                Tips
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark hover"
                to={`/adventure`}
              >
                Aventuras
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget/>
      {/* <button
        type="button"
        className="btn btn-primary carrito m-2"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Carrito 1
      </button> */}
    </nav>
  );
};

export { MainNav };
