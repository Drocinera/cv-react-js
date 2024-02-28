import React from "react";

const Home = () => {
    return (
        <main>
          <div>
            <div className="home-container">
              <h1 className="text-center p-4">John Doe</h1>
                <h2 className="text-center p-4">Freelance Développeur Web</h2>
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <a href="#aPropos" className="buttonLink">En savoir plus sur moi</a>
                  </div>
              </div>
               <section id="aPropos">
                    <div className="text-center">
                      <img src="/images/about.jpg" alt="Photo de John Doe" />
                        <p>
                          Je suis John doe. Comme nous le savons tous, l'identité de John Doe est inconnue. Je voulais juste contribuer sans être connu.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et lectus vel purus sodales sodales. Sed ut mauris et ante varius sagittis. Curabitur et lectus tortor. 
                          Mauris purus libero, aliquet non faucibus ac, vehicula ac lectus. In pharetra, nulla sed euismod cursus, eros ipsum dignissim ipsum, nec sodales mi lacus at nibh. 
                          In magna nisl, consectetur id magna ut, interdum molestie ligula. 
                          Nullam egestas porta felis, eu viverra lectus commodo id. 
                          Sed consectetur enim lacus, eu commodo nulla sodales vitae. Fusce id molestie ex. Proin libero dui, consequat quis blandit in, lobortis vel libero. Donec nec ultrices justo, ac porttitor velit.
                           Nunc vestibulum iaculis velit, sit amet volutpat risus congue vel. Maecenas congue sapien in vehicula sollicitudin.
                        </p>
                        <div className="progressBar">
                          <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-success" style={{width:"100%"}}>HTML : 100%</div>
                          </div>
                          <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-info text-dark" style={{width:"100%"}}>CSS : 100%</div>
                          </div>
                          <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-warning text-dark" style={{width:"100%"}}>JavaScript: 100%</div>
                          </div>
                          <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-danger" style={{width:"100%"}}>React: 100%</div>
                          </div>

                        </div>
                    </div>
                  </section>
                </div>
              </main>
            );
          };
    
    export default Home;
/*Une image de fond en pleine page, des balises <h1> et <h2>, un bouton « En savoir
plus » avec un lien vers la section « À propos ». Au-dessus de l’image d’arrière-plan doit
se superposer un fond de couleur noire, avec une transparence de 0.3.
Page 4 sur 6
● Une section « À propos » avec une présentation de John Doe, sa photo et ses
compétences affichées sous forme de progress bars Bootstrap.*/

/*Rajouter des mots devant les barre de progression, gerer la tranparance et mettre fond pour section*/



