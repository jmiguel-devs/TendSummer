import React, { useState, useRef } from "react";
import "../resources/css/howtodonate.css";

const HowToDonate = () => {
  const crossDonateRef = useRef();

  const donateTextObj = {
    0: (
      <p>
        Si has llegado hasta aquí es porque eres una buena persona ❤️ y quieres
        ayudar a la <b>fundación Juegaterapia</b>. Puedes hacerlo donando la
        cantidad que consideres en{" "}
        <a href="https://streamlabs.com/zheroa/tip" target="_blank">
          PayPal
        </a>{" "}
        o enviando una consola, tablet o videojuegos a Juegaterapia (condiciones{" "}
        <a
          href="https://www.juegaterapia.org/envia-tu-consola-2/"
          target="_blank"
        >
          aquí
        </a>
        )
      </p>
    ),
    1: (
      <p>
        ¡Eh, eh, eh! ¿Qué haces? ¿Le has dado al botón de cerrar la pestaña de
        donación? 😨 No nos rompas el coraçao 💔 y se bueno donando{" "}
        <a href="https://streamlabs.com/zheroa/tip" target="_blank">
          aquí
        </a>
      </p>
    ),
    2: (
      <p>
        Ah... asi que, es verdad... le has dado al botón de cerrar... 🤔
        <br />
        Tendremos que hacer algo al respecto...
      </p>
    ),
    3: (
      <p>
        Gracias por haber llegado hasta aquí 💜 y por interesarte en nuestro
        proyecto 🤗 Si quieres y puedes donar, o simplemente si apoyas nuestro
        torneo y esta causa benéfica... gracias 💜
      </p>
    ),
  };
  const [counter, setCounter] = useState(1);
  const [donateText, setDonateText] = useState(donateTextObj[0]);

  const handleCloseIcon = (e) => {
    if (counter < 4) {
      let x = Math.round((Math.random() * (90 - 10) + 10) * 100) / 100;
      let y = Math.round((Math.random() * (60 - 20) + 20) * 100) / 100;
      crossDonateRef.current.style.top = y + "%";
      crossDonateRef.current.style.left = x + "%";
      console.log(crossDonateRef.current);
      setCounter(counter + 1);
      setDonateText(donateTextObj[counter]);
    } else {
      window.location.href = "https://streamlabs.com/zheroa/tip";
    }
  };

  return (
    <div className="HTD-wrapper">
      <div ref={crossDonateRef} className="HTD-container">
        <div className="HTD-title">
          <h4>Como donar</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19.341"
            height="19.341"
            viewBox="0 0 19.341 19.341"
            className="HTD-close-icon"
            onClick={handleCloseIcon}
          >
            <path
              id="Icon_metro-cross"
              data-name="Icon metro-cross"
              d="M21.736,17.466h0L15.868,11.6l5.867-5.868h0a.606.606,0,0,0,0-.855L18.964,2.1a.606.606,0,0,0-.855,0h0L12.241,7.972,6.374,2.1h0a.606.606,0,0,0-.855,0L2.747,4.876a.606.606,0,0,0,0,.855h0L8.615,11.6,2.747,17.466h0a.606.606,0,0,0,0,.855l2.772,2.772a.606.606,0,0,0,.855,0h0l5.867-5.868,5.867,5.868h0a.606.606,0,0,0,.855,0l2.772-2.772a.606.606,0,0,0,0-.855Z"
              transform="translate(-2.571 -1.928)"
              fill="#f6f5ec"
            />
          </svg>
        </div>
        {donateText}
      </div>
    </div>
  );
};

export default HowToDonate;
