import React from "react";
import { Link} from "react-router-dom";
import { Article } from "./Realisation.jsx";
import { ArticleBlog } from "./Blog.jsx";


const Footer = () => {
    return (
<footer className="footer-container text-center text-lg-start text-muted pt-1">
  <section>
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="mb-4 text-uppercase">Contact</h6>
              <p><i className="fas fa-solid fa-user me-3"></i> John Doe</p>

              <p><i className="fas fa-home me-3"></i> Some-where, place 42, World</p>

              <p><i className="fas fa-envelope me-3"></i> johndoe@mail.com</p>

              <p><i className="fas fa-phone me-3"></i> + 10 00 00 00 42</p>

              <p className="me-2"><a href="https://github.com/github-john-doe?tab=stars" rel="nofollow" target="blank" ><i className="fa-brands fa-github"></i></a>
                 <a href="https://twitter.com/?lang=fr" rel="nofollow" target="blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                 <a href="https://www.linkedin.com/homes" rel="nofollow" target="blank"><i className="fa-brands fa-linkedin"></i></a></p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="mb-4 text-uppercase">Pages</h6>
            <p><Link to="/">Acceuil</Link></p>
            <p><Link to="/service">Service</Link></p>
            <p><Link to="/contact">contact</Link></p>
            <p><Link to="/mention-legal">Mention-Légal</Link></p> 
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="mb-4 text-uppercase">Dernières Réalisations</h6>
          <p className="text-decoration-underline"><Link to="/Realisation#article1"><Article article="Espace bien-être"/></Link></p>
          <p className="text-decoration-underline"><Link to="/Realisation#article2"><Article article="Fresh Food"/></Link></p>

  
        </div>
   
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="mb-4 text-uppercase">Blog</h6>
            <p className="text-decoration-underline"><Link to="/Blog#blogArticle1"><ArticleBlog blog="Les bases pour apprendre à coder"/></Link></p>
            <p className="text-decoration-underline"><Link to="/Blog#blogArticle2"><ArticleBlog blog="Gérer la croissance de son site web"/></Link></p>
            <p className="text-decoration-underline"><Link to="/Blog#blogArticle3"><ArticleBlog blog="Bien intégrer son site sur le web"/></Link></p>

        </div>
      </div>
    </div>
  </section>


  <div className="text-center p-4">
    © 2024 Copyright: P.Théo
    <p><a href="#Top" className="scrollToTop">Retour en haut</a></p>
  </div>

</footer>
    )
}

export default Footer

/*La 3e
colonne reprend les liens vers les dernières réalisations.
o La 4e
colonne reprend les liens vers les derniers articles de blog.
● Il reprend en plus une ligne de copyright et un lien pour remonter en haut de la page.
Ce dernier lien n'apparaît pas lorsque l’utilisateur est positionné en haut de la page,
mais doit apparaître lors du défilement (utiliser la librairie Vanilla JS).
*/

//Ne pas oublier de mettre image de fond a mentionLegal, Blog, Mes realisation (ou couleur de fond) 