import React from "react";
import { Link} from "react-router-dom";


const Footer = () => {
    return (
<footer class="text-center text-lg-start bg-body-tertiary text-muted">
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="fw-bold mb-4 text-uppercase">Contact</h6>
              <p><i class="fas fa-solid fa-user me-3"></i> John Doe</p>

              <p><i class="fas fa-home me-3"></i> Some-where, place 42, World</p>

              <p><i class="fas fa-envelope me-3"></i> johndoe@mail.com</p>

              <p><i class="fas fa-phone me-3"></i> + 10 00 00 00 42</p>

              <p class="me-2"><a href="https://github.com/github-john-doe?tab=stars" target="blank" ><i class="fa-brands fa-github"></i></a>
                 <a href="https://twitter.com/?lang=fr" target="blank"><i class="fa-brands fa-square-x-twitter"></i></a>
                 <a href="https://www.linkedin.com/homes" target="blank"><i class="fa-brands fa-linkedin"></i></a></p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="fw-bold mb-4 text-uppercase">Pages</h6>
            <p><Link to="/">Acceuil</Link></p>
            <p><Link to="/service">Service</Link></p>
            <p><Link to="/contact">contact</Link></p>
            <p><Link to="/mention-legal">Mention-Légal</Link></p> 
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="fw-bold mb-4 text-uppercase">Réalisations</h6>
          <p>Les deux liens des dernières réalisations (utilisé hooks ou composants)</p>

  
        </div>
   
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="fw-bold mb-4 text-uppercase">Blog</h6>
            <p>Les trois liens des dernières réalisations (utilisé hooks ou composants)</p>

        </div>
      </div>
    </div>
  </section>


  <div class="text-center p-4">
    © 2024 Copyright: P.Théo
    <a href="#" id="scrollToTop">Retour en haut</a>
  </div>

</footer>
    )
}

export default Footer
