import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "src/components/Nav.jsx";
import Home from "./Pages/Home.jsx";
import Realisation from "./Pages/Realisation.jsx";
import Service from "./Pages/Service.jsx";
import Blog from "./Pages/Blog.jsx";
import Contact from "./Pages/Contact.jsx";
import MentionLegal from "./Pages/MentionLegal.jsx";
import './App.css';


function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realisation" element={<Realisation/>} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mention-legal" element={<MentionLegal/>} />
        </Routes>
    </div>
  );
}

export default App;



/*Le header :
● Le header est présent sur toutes les pages.
● Il reprend le logo à gauche et la navigation vers les pages à droite. Sur mobile et
tablette, la navigation s’affiche sous forme d’icône de « hamburger ».
● L’élément actif doit pouvoir être affiché dans une autre couleur ou nuance. La classe
« active » peut être ajoutée dans le HTML ou en utilisant du code JavaScript.
● Le texte des hyperliens est affiché en majuscule, en utilisant des règles CSS ou une
classe Bootstrap.

Le footer :
● Le footer est identique sur toutes les pages.
● Il contient 4 colonnes de largeur égale :
o La 1re avec le nom du développeur, son adresse, son numéro de téléphone et
les icônes vers ses réseaux professionnels (Github, Twitter et LinkedIn). Les
icônes doivent être cliquables et mener vers les comptes que John Doe possède
Page 5 sur 6
sur les différents réseaux. Les liens doivent s’ouvrir dans une nouvelle fenêtre et
ne doivent pas être suivis pour le SEO.
o La 2e
colonne reprend les liens vers les différentes pages, à l’exception des
réalisations et des articles de blog.
o La 3e
colonne reprend les liens vers les dernières réalisations.
o La 4e
colonne reprend les liens vers les derniers articles de blog.
● Il reprend en plus une ligne de copyright et un lien pour remonter en haut de la page.
Ce dernier lien n'apparaît pas lorsque l’utilisateur est positionné en haut de la page,
mais doit apparaître lors du défilement (utiliser la librairie Vanilla JS).*/