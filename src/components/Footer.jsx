import React from "react";
import { Link} from "react-router-dom";


const Footer = () => {
    return (
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  <section>
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="mb-4 text-uppercase">Contact</h6>
              <p><i className="fas fa-solid fa-user me-3"></i> John Doe</p>

              <p><i className="fas fa-home me-3"></i> Some-where, place 42, World</p>

              <p><i className="fas fa-envelope me-3"></i> johndoe@mail.com</p>

              <p><i className="fas fa-phone me-3"></i> + 10 00 00 00 42</p>

              <p className="me-2"><a href="https://github.com/github-john-doe?tab=stars" target="blank" ><i className="fa-brands fa-github"></i></a>
                 <a href="https://twitter.com/?lang=fr" target="blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                 <a href="https://www.linkedin.com/homes" target="blank"><i className="fa-brands fa-linkedin"></i></a></p>
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="mb-4 text-uppercase">Pages</h6>
            <p><Link to="/">Acceuil</Link></p>
            <p><Link to="/service">Service</Link></p>
            <p><Link to="/contact">contact</Link></p>
            <p><Link to="/mention-legal">Mention-Légal</Link></p> 
        </div>

        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="mb-4 text-uppercase">Réalisations</h6>
          <p>Les deux liens des dernières réalisations (utilisé hooks ou composants)</p>

  
        </div>
   
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="mb-4 text-uppercase">Blog</h6>
            <p>Les trois liens des dernières réalisations (utilisé hooks ou composants)</p>

        </div>
      </div>
    </div>
  </section>


  <div className="text-center p-4">
    © 2024 Copyright: P.Théo
    <p><a href="#" className="scrollToTop">Retour en haut</a></p>
  </div>

</footer>
    )
}

export default Footer
