import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import "../resources/css/global.css";
import { Textfit } from "react-textfit";
import ReactGA from "react-ga";

const Header = () => {
  const handleClickLogo = (e) => {
    window.location.href = "/";
  };
  useEffect(() => {
    ReactGA.initialize("284114663");
  }, []);

  return (
    <div>
      <Textfit
        className="textfit"
        mode="single"
        max="273"
        onClick={handleClickLogo}
      >
        tendsummer
      </Textfit>
      <Marquee className="Header-marquee-container" speed="60" gradient={false}>
        <h2 className="Header-marquee">
          Be the hero you want to be. Play as the legend you are. Be the hero
          you want to be. Play as the legend you are. Be the hero you want to
          be. Play as the legend you are. Be the hero you want to be. Play as
          the legend you are. Be the hero you want to be. Play as the legend you
          are. Be the hero you want to be. Play as the legend you are. Be the
          hero you want to be. Play as the legend you are. Be the hero you want
          to be. Play as the legend you are.
        </h2>
      </Marquee>
    </div>
  );
};

export default Header;
