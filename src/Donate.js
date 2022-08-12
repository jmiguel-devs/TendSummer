import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import illu3 from "./resources/img/illu-3.png";
import illu1 from "./resources/img/illu-1.png";
import HowToDonate from "./components/HowToDonate";
import PayPal from "./resources/img/PayPal-Logo.png";
import Juegaterapia from "./resources/img/juegaterapia.png";
import Cursor from "./components/Cursor.jsx";

//Algunos estilos de Donate.js se encuentran en howtodonate.css -- Sorry :(

const Donate = () => {
  return (
    <div>
      <Cursor></Cursor>
      <div className="App-inner">
        <Header></Header>
        <div className="wrapper-illu">
          <img className="illu-3" src={illu3} />
          <img className="illu-1" src={illu1} />
        </div>
        <HowToDonate></HowToDonate>
        <div className="container-logos">
          <a
            target="_blank"
            href="https://www.juegaterapia.org/envia-tu-consola-2/"
          >
            <img className="logo-donate" src={Juegaterapia} />
          </a>
          <a target="_blank" href="https://streamlabs.com/zheroa/tip">
            <img className="logo-donate" src={PayPal} />
          </a>
        </div>
      </div>
      <div className="App-inner-black">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Donate;
