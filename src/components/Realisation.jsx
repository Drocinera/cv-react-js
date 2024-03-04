import React from "react";

const Realisation = () => {
    return (
        <main className="realisation-container">
          <h1 className="text-center">Mes réalisations </h1>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Praesent fringilla mattis tellus a tincidunt. Maecenas mauris nisl, commodo id tristique a, eleifend at velit.</p>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card border-success mb-3 text-bg-info mb-3">
                <img src="/images/portfolio/espace-bien-etre.jpg" class="card-img-top" alt="site web de l'espace bien être"/>
                  <div class="card-body">
                    <h5 class="card-title">Espace bien-être</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam diam sem, tincidunt ut eros sit amet.</p>
                    <a href="#" class="btn btn-primary">visiter le site</a>
                  </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-info mb-3  text-bg-dark mb-3">
                <img src="/images/portfolio/fresh-food.jpg" class="card-img-top" alt="Site web du restaurant 'fresh food'"/>
                  <div class="card-body">
                    <h5 class="card-title">Fresh Food</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet.</p>
                    <a href="#" class="btn btn-primary">Visiter le site</a>
                  </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-dark mb-3 text-bg-success mb-3">
                <img src="/images/portfolio/restaurant-japonais.jpg" class="card-img-top" alt="Site web du restaurant japonais"/>
                  <div class="card-body">
                    <h5 class="card-title">Restaurant-japonais</h5>
                    <p class="card-text">Vestibulum congue dignissim erat ac pulvinar. Donec ac diam elementum.</p>
                    <a href="#" class="btn btn-primary">visiter le site</a>
                  </div>
               </div>
            </div>
         </div>
        </main>
      );
    };
    
    export default Realisation;
