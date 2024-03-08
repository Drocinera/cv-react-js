import React from "react";
import Profile from "./GithubProfile.jsx";

const Home = () => {
    return (
        <main>
          <div>
            <div className="home-container">
              <h1 className="text-center p-4">JOHN DOE</h1>
                <h2 className="text-center p-4">Freelance Développeur Web</h2>
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <a href="#aPropos" className="buttonLink">En savoir plus sur moi</a>
                  </div>
            </div>
               <section id="aPropos" className="aPropos mb-3 pt-2">
                    <div className="text-center">
                      <img src="/images/about.jpg" alt="John Doe" className="pb-2"/>
                        <p className="About">
                          Je suis <strong>John doe</strong>. Comme nous le savons tous, l'identité de John Doe est inconnue. Je voulais juste contribuer sans être connu.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et lectus vel purus sodales sodales. Sed ut mauris et ante varius sagittis. Curabitur et lectus tortor. 
                          Mauris purus libero, aliquet non faucibus ac, vehicula ac lectus. In pharetra, nulla sed euismod cursus, eros ipsum dignissim ipsum, nec sodales mi lacus at nibh. 
                          In magna nisl, consectetur id magna ut, interdum molestie ligula. 
                          Nullam egestas porta felis, eu viverra lectus commodo id. 
                          Sed consectetur enim lacus, eu commodo nulla sodales vitae. Fusce id molestie ex. Proin libero dui, consequat quis blandit in, lobortis vel libero. Donec nec ultrices justo, ac porttitor velit.
                           Nunc vestibulum iaculis velit, sit amet volutpat risus congue vel. Maecenas congue sapien in vehicula sollicitudin.
                        </p>
                        <div className="progressBar">
                          <h3 className="text-center">Mes compétences</h3>
                            <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                              <p className="text-uppercase">HTML:</p>
                              <div className="progress-bar bg-success" style={{width:"100%"}}>100%</div>
                            </div>
                              <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                              <p className="text-uppercase">CSS:</p>
                              <div className="progress-bar bg-info text-dark" style={{width:"100%"}}>100%</div>
                            </div>
                              <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                              <p className="text-uppercase">JavaScript:</p>
                              <div className="progress-bar bg-warning text-dark" style={{width:"100%"}}>100%</div>
                            </div>
                              <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                              <p className="">React:</p>
                              <div className="progress-bar bg-danger" style={{width:"100%"}}>100%</div>
                            </div>
                      </div>
                    </div>
                    <div className="accordion" id="accordionGithub">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Profil Github
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionGithub">
                          <div className="accordion-body">
                            <Profile/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </main>
            );
          };
    
    export default Home;
