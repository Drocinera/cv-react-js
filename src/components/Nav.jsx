import React from "react";
import { Link} from "react-router-dom";

const Nav = () => {
  return (
    <header className="header-containeur">
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/images/apple-touch-icon.png" alt="Bootstrap" title="CV Logo" width="30" height="24"/>
        </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="nav justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline text-uppercase">
          <li className="nav-item">
            <Link className="nav-link "to="/">Acceuil</Link>
          </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">Mes Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">contactez-moi</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mention-legal">Mes Réalisations</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/realisation">Mention-légal</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  );
};

export default Nav;

//Lien actif a changer de couleur//



