import React from "react";

export function ArticleBlog (props) {
  return(
    <p>{props.blog}</p>
  );
}

const Blog = () => {
    return (
        <main className="blog-container p-3">
          <article>
            <h1 className="text-center">MES ARTICLES</h1>
            <a href="#blogArticle1">
            <div className="card mb-3 border-primary mb-3 text-bg-danger mb-3" style={{maxWidth: "90em"}}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/images/blog/coder.jpg" className="img-fluid rounded-start" alt="ligne de code"/>
                    </div>
                      <div className="col-md-8" id="blogArticle1">
                        <div className="card-body ">
                          <h5 className="card-title"><ArticleBlog blog="Les bases pour apprendre à coder"/></h5>
                          <p className="card-text">Nunc pulvinar arcu id tellus convallis, id vehicula libero congue. Integer eu ex vitae nunc scelerisque cursus. 
                          Nam erat nisi, commodo vel ipsum feugiat, tincidunt tincidunt dolor. Aliquam porta diam a lacinia pharetra. Vivamus et orci est. 
                          Donec mattis eleifend elit, at gravida justo euismod vel. Donec ullamcorper magna quis erat pellentesque pretium. Nullam posuere commodo nisl, in bibendum urna sollicitudin et.
                           Aenean id augue nisl. Morbi enim odio, accumsan vitae risus vitae, volutpat interdum odio. In mollis felis eu mi pulvinar dapibus. Etiam iaculis augue in ullamcorper pharetra.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </a>
                  <a href="#blogArticle2">
                  <div className="card mb-3 border-secondary mb-3 text-bg-dark mb-3" style={{maxWidth: "90em"}}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="/images/blog/croissance.jpg" className="img-fluid rounded-start" alt="croissance d'une plante"/>
                          </div>
                            <div className="col-md-8" id="blogArticle2">
                              <div className="card-body">
                                <h5 className="card-title"><ArticleBlog blog="Gérer la croissance de son site web"/></h5>
                                <p className="card-text">Maecenas in odio in magna hendrerit cursus non in purus. Suspendisse molestie blandit tellus, eu dapibus ipsum fringilla non. Donec mollis velit eget accumsan finibus.
                                 In hac habitasse platea dictumst. Mauris rhoncus neque vel justo laoreet, at feugiat quam tempus. Praesent a facilisis metus. 
                                 In in porta ex. Nullam vel arcu ut elit ultricies volutpat. Nunc justo lacus, fringilla quis porta vitae, molestie feugiat ante. 
                                 Maecenas blandit nulla vel neque maximus, sit amet porttitor tortor aliquet. </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        </a>
                        <a href="#blogArticle3">
                        <div className="card mb-3 border-success mb-3 text-bg-info mb-3" style={{maxWidth: "90em"}}>
                          <div className="row g-0">
                            <div className="col-md-4">
                              <img src="/images/blog/google.jpg" className="img-fluid rounded-start" alt="un pc avec google"/>
                            </div>
                              <div className="col-md-8" id="blogArticle3">
                                <div className="card-body">
                                  <h5 className="card-title"><ArticleBlog blog="Bien intégrer son site sur le web"/></h5>
                                  <p className="card-text">Suspendisse potenti. Donec in mattis tortor. Nullam viverra risus non tellus pellentesque fringilla.
                                   Aliquam sit amet sem quis ante pulvinar dignissim. Praesent scelerisque vulputate orci, vel sagittis enim euismod a. 
                                  Quisque vitae sagittis tellus. Etiam mollis mollis ante quis vehicula.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          </a>
                          <a href="#blogArticle4">
                          <div className="card mb-3 border-danger mb-3 text-bg-success mb-3" style={{maxWidth: "90em"}}>
                            <div className="row g-0" id="blogArticle4">
                              <div className="col-md-4">
                                <img src="/images/blog/screens.jpg" className="img-fluid rounded-start" alt="plusieurs écran multimédia"/>
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h5 className="card-title">Optimiser son site pour différent appareils</h5>
                                  <p className="card-text">Suspendisse potenti. Donec in mattis tortor. Nullam viverra risus non tellus pellentesque fringilla. Aliquam sit amet sem quis ante pulvinar dignissim.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          </a>
                          <a href="#blogArticle5">
                          <div className="card mb-3 border-info mb-3 text-bg-secondary mb-3" style={{maxWidth: "90em"}}>
                            <div className="row g-0" id="blogArticle5">
                              <div className="col-md-4">
                                <img src="/images/blog/seo.jpg" className="img-fluid rounded-start" alt="nombreux mots en lien avec le SEO"/>
                              </div>
                                <div className="col-md-8">
                                  <div className="card-body">
                                    <h5 className="card-title">Optimisation pour les recherches internet</h5>
                                    <p className="card-text">Vestibulum lobortis dapibus fermentum. Aenean dolor est, varius sed efficitur aliquet, egestas vitae mauris. Vivamus iaculis, ante at posuere viverra, ligula purus tristique nisl, ut iaculis magna ex quis libero.
                                     Cras in nisl quis elit porta hendrerit non vel justo. Praesent dictum, felis sit amet tempor blandit, dui elit pulvinar enim, tempus fermentum augue est molestie diam. 
                                     Pellentesque ligula dolor, volutpat sit amet velit a, varius porta orci. Proin facilisis, nisl non vulputate ornare, tellus nunc egestas nibh, molestie feugiat dolor nulla sed quam. Integer tellus arcu, blandit sagittis tempus vel, varius at urna.
                                      Pellentesque a augue dui. Curabitur hendrerit facilisis libero eget vestibulum. Nunc et quam tortor. Quisque faucibus imperdiet maximus. Sed scelerisque felis sed massa tristique ultrices.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </a>
                            <a href="#blogArticle6">
                            <div className="card mb-3 border-dark mb-3 text-bg-primary mb-3s" style={{maxWidth: "90em"}}>
                              <div className="row g-0" id="blogArticle6">
                                <div className="col-md-4">
                                  <img src="/images/blog/technos.png" className="img-fluid rounded-start" alt="plusieurs technologies en lien avec le developpement"/>
                                </div>
                                <div className="col-md-8">
                                  <div className="card-body">
                                    <h5 className="card-title">Effectuer ses propres formations technologiques</h5>
                                    <p className="card-text">Sed id hendrerit leo. Aenean quis elit eget mi tempus egestas. Praesent rutrum urna sed scelerisque vulputate. 
                                    Praesent semper fringilla erat, ut placerat purus auctor a. Proin pellentesque tortor ac metus facilisis molestie. Phasellus ultrices lorem at enim mattis ullamcorper. 
                                    Donec venenatis velit est, et tincidunt nisl pretium quis. Ut congue vulputate est, at tempor nunc lacinia nec. Suspendisse pellentesque feugiat dolor in faucibus. Donec eget nisl nec orci scelerisque finibus. 
                                    Vestibulum rutrum finibus pretium. Aenean sit amet tortor vel neque aliquam ultricies. Vestibulum sit amet rhoncus arcu, ac euismod lectus. Pellentesque vel dictum sem. Etiam bibendum magna at neque iaculis pretium. 
                                    Sed molestie mauris vel arcu vehicula auctor.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </a>
                          </article>
                        </main>
                      );

                    };
    
    export default Blog;

