import React from "react";

const MentionLegal = () => {
    return (
        <main className="mentionLegalContainer">
          <h1 className="text-center">Mentions Légal du site</h1>
          <div className="accordion" id="acclassNamecordione">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Editeur du site
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <strong>P.Théo</strong> 
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Hébergeur du site
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <strong>CodeSandbox</strong> 
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Crédits des images
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
                <div className="accordion-body">
                  <strong>Toutes les images utilisés appartiennent a leur créateur respectif sur Pixabay :</strong> <a href="https://pixabay.com/fr/">https://pixabay.com/fr/</a>
                  <p><strong>Les logos Code et Globe sont disponible sur FontAwesome :</strong> <a href="https://fontawesome.com">https://fontawesome.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
    };
    
    export default MentionLegal;
/*L’éditeur du site
● L’hébergeur du site
● Les crédits, avec un lien vers le site de Pixabay pour les images.
La présentation est réalisée en utilisant le composant accordéon de Bootstrap.
Cette page ne doit pas être indexée par les moteurs de recherche*/