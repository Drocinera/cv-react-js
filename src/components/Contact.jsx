import React from "react";

const Contact = () => {
    return (
        <main className="contact-container p-3">
          <h1 className="contact-titre text-center">Besoin d'information plus précise ? Contactez-moi !</h1>
          <form className="formulaire">
            <div className="mb-3">
              <label for="inputName" className="form-label">Votre nom et prénom</label>
              <input type="name" className="form-control" id="inputName" placeholder="Entrez votre nom et prénom"/>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Adressse Mail</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="exemple@exemple.com"/>
            </div>
            <div>
              <label for="inputTel" className="form-label">Votre numéro de téléphone</label>
              <input type="tel" className="form-control" id="inputTel" placeholder="00 00 00 00 00"/>
            </div>
            <div className="mb-3">
              <label for="inputsujet" className="form-label">Sujet du message</label>
              <input type="sujet" className="form-control" id="inputsujet" placeholder="L'objet de votre message"/>
            </div>
            <div className="mb-3">
              <label for="inputMessage" className="form-label">Message</label>
              <input type="message" className="form-control" id="inputMessage" placeholder="Votre message..."/>
            </div>
            <div className="mb-3 form-check text-light">
              <input type="checkbox" className="form-check-input" id="Check" aria-describedby="infoform"/>
              <label className="form-check-label" for="Check">En cochant la case vous certifié que toute les données du formulaire sont correcte</label>
            <div id="infoform" className="form-text text-light">Aucune information ne sera partagée</div>
            </div>
            <button type="submit" className="btn btn-success">Envoyer</button>
          </form>
          <div className="infoJohn pt-5">
            <h2 className="contact-titre2 text-center text-light">Mes coordonées et information utiles</h2>
              <div>
                <p className="contactAdress text-center text-light"><i className=" fas fa-home me-3"></i> Some-where, place 42, World</p>
                <p className=" contactMail text-center text-light"><i className="fas fa-envelope me-3"></i> johndoe@mail.com</p>
                <p className="contactTel text-center text-light"><i className=" fas fa-phone me-3"></i> + 10 00 00 00 42</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1326093.7540567124!2d-0.3902339928707335!3d49.52176854228527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d640b7ba1381%3A0x1d452ab85c36f80c!2sCentre%20Europ%C3%A9en%20de%20Formation!5e0!3m2!1sfr!2sfr!4v1709557468093!5m2!1sfr!2sfr" className="adressMap rounded mx-auto d-block" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
          </div>
        </main>
      );
    };
    
    export default Contact;

