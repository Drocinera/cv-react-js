import React from "react";

export function Article (props) {
  return(
    <p>{props.article}</p>
  );
}

function Description (props) {
  return(
    <p>{props.description}</p>
  );
}

const Realisation = () => {
    return (
        <main className="realisation-container">
          <h1 className="text-center">MES REALISATIONS </h1>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col" id="article1">
                  <div className="card border-success mb-3 text-bg-info mb-3">
                    <img src="/images/portfolio/espace-bien-etre.jpg" className="card-img-top" alt="site web de l'espace bien être"/>
                    <div className="card-body">
                      <h5 className="card-title"><Article article="Espace bien-être"/></h5>
                      <p className="card-text"><Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam sem, tincidunt ut eros sit amet."/></p>
                      <a href="#article1" className="btn btn-primary">visiter le site</a>
                    </div>
                  </div>
               </div>
               <div className="col" id="article2">
                <div className="card border-danger mb-3 text-bg-warning mb-3">
                  <img src="/images/portfolio/fresh-food.jpg" className="card-img-top" alt="Site web du restaurant 'fresh food'"/>
                    <div className="card-body">
                      <h5 className="card-title"><Article article="Fresh Food"/></h5>
                      <p className="card-text"><Description description="Lorem ipsum dolor sit amet"/></p>
                      <a href="#article2" className="btn btn-primary">Visiter le site</a>
                    </div>
                  </div>
                </div>
                <div className="col" id="article3">
                  <div className="card border-dark mb-3 text-bg-success mb-3">
                    <img src="/images/portfolio/restaurant-japonais.jpg" className="card-img-top" alt="Site web du restaurant japonais"/>
                      <div className="card-body">
                        <h5 className="card-title">Restaurant-japonais</h5>
                        <p className="card-text">Vestibulum congue dignissim erat ac pulvinar. Donec ac diam elementum.</p>
                        <a href="#article3" className="btn btn-primary">visiter le site</a>
                      </div>
                  </div>
                </div>
              </div>
        </main>
      );
    };
    
    export default Realisation;


