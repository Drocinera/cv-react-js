import React from "react";

const Service = () => {
    return (
        <main className="service-container">
          <div className="service row justify-content-evenly">
            <h1 className="text-center">OFFRES</h1>
              <p className=" text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non efficitur turpis, sed hendrerit ligula. Sed molestie orci a dapibus varius. Suspendisse mattis dictum nulla, ac placerat enim posuere vestibulum.
               Quisque consequat non elit at tincidunt. Integer tincidunt enim a aliquam lobortis. Suspendisse sit amet blandit odio. Proin eu arcu ex.</p>
               <div className="card ms-3 p-2 col-1 text-bg-info mb-3" style={{width: "18rem"}}>
                <img src="/images/code-solid.svg" className=" card-img-top" alt="Début ligne de code"/>
                  <div className="iconeService card-body">
                    <h5 className="card-title"><i className="icone fa-solid fa-code"></i> Création de site vitrine/professionelle/e-commerce <i className="icone fa-solid fa-code"></i></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu nunc tempor, malesuada nisi sit.</p>
                    <a href="#" className="btn btn-primary">en savoir plus</a>
                </div>
              </div>
              <div className=" card ms-3 p-2 col-6 text-bg-info mb-3" style={{width: "18rem"}}>
                <img src="/images/globe-solid.svg" className="card-img-top" alt="Début ligne de code"/>
                  <div className="iconeService card-body">
                    <h5 className="card-title"><i className="icone fa-solid fa-globe"></i> Réorganisation de votre site web <i className="icone fa-solid fa-globe"></i></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu nunc tempor, malesuada nisi sit.</p>
                    <a href="#" className="btn btn-primary">en savoir plus</a>
                </div>
              </div>
              <div className=" card ms-3 p-2 text-bg-info mb-3 " style={{width: "18rem"}}>
                <img src="/images/contact-bg.jpg" className="card-img-top" alt="Début ligne de code"/>
                  <div className="iconeService card-body">
                    <h5 className="card-title"><i className=" icone fa-solid fa-envelope"></i> Demander conseil <i className="icone fa-solid fa-envelope"></i></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu nunc tempor, malesuada nisi sit.</p>
                    <a href="/contact" className="btn btn-primary">en savoir plus</a>
                </div>
              </div>
          </div>
        </main>
      );
    };
    
    export default Service;
