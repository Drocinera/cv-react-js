import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/realisation">Créations</Link>
          </li>
          <li>
            <Link to="/service">Mes services</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Me contacter</Link>
          </li>
          <li>
            <Link to="/mention-legal">Mentions légal</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;