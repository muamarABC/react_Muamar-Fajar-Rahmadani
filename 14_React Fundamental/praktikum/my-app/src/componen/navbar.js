import React from "react-bootstrap"

export default function navbar() {
    return(<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow -lg fixed top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        FajarJaya
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
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse text-right" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#layanan">
              Layanan
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </>
  )
}