import React from "react";

const Service = () => {
    return (
        <main className="service-container">
          <div className="service row justify-content-evenly">
            <h1 className="text-center">Offres</h1>
              <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non efficitur turpis, sed hendrerit ligula. Sed molestie orci a dapibus varius. Suspendisse mattis dictum nulla, ac placerat enim posuere vestibulum.
               Quisque consequat non elit at tincidunt. Integer tincidunt enim a aliquam lobortis. Suspendisse sit amet blandit odio. Proin eu arcu ex.</p>
               <div className="card ms-3 p-2 col-1" style={{width: "18rem"}}>
                <img src="/images/code-solid.svg" class="card-img-top" alt="Début ligne de code"/>
                  <div class="card-body">
                    <h5 className="card-title">Création de site vitrine/professionelle/e-commerce</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu nunc tempor, malesuada nisi sit.</p>
                    <a href="#" class="btn btn-primary">en savoir plus</a>
                </div>
              </div>
              <div className="card ms-3 p-2 col-6" style={{width: "18rem"}}>
                <img src="/images/globe-solid.svg" class="card-img-top" alt="Début ligne de code"/>
                  <div class="card-body">
                    <h5 className="card-title">Réorganisation de votre site web</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu nunc tempor, malesuada nisi sit.</p>
                    <a href="#" class="btn btn-primary">en savoir plus</a>
                </div>
              </div>
              <div className="card ms-3 p-2 " style={{width: "18rem"}}>
                <img src="/images/contact-bg.jpg" class="card-img-top" alt="Début ligne de code"/>
                  <div class="card-body">
                    <h5 className="card-title">Demander conseil</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu nunc tempor, malesuada nisi sit.</p>
                    <a href="/contact" class="btn btn-primary">en savoir plus</a>
                </div>
              </div>
          </div>
        </main>
      );
    };
    
    export default Service;