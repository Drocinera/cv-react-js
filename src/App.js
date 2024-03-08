import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Realisation from "./components/Realisation.jsx";
import Service from "./components/Service.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";
import MentionLegal from "./components/MentionLegal.jsx";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import './Style.css';



function App() {
  return (
    <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realisation" element={<Realisation/>} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mention-legal" element={<MentionLegal/>} />
          
        </Routes>

        <Footer />
    </div>
  );
}

export default App;
