import React from "react";
import { Link} from "react-router-dom";

const Nav = () => {
  return (
    <header>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img src="/images/apple-touch-icon.png" alt="Bootstrap" title="CV Logo" width="30" height="24"/>
        </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="nav justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
          <li class="nav-item">
            <Link class="nav-link "to="/">Acceuil</Link>
          </li>
        <li class="nav-item">
          <Link class="nav-link" to="/service">Mes Services</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/blog">Blog</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">contactez-moi</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/mention-legal">Mes Réalisations</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/realisation">Mention-légal</Link>
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



