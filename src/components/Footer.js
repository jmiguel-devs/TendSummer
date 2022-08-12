import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "../resources/css/global.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className="Footer-get-in-touch-container">
          <a
            className="Footer-get-in-touch"
            href="mailto:jmiguel.jorgem@gmail.com?subject=Hola!%20Tengo%20una%20duda%20:)"
          >
            get in touch
          </a>
        </Col>
      </Row>
      <Row className="Footer-links-row">
        <Col xs={12} md={3} className="Footer-links-col">
          <a href="/">
            <h5 className="Footer-logo-footer">
              tend
              <br />
              summer
            </h5>
          </a>
        </Col>
        <Col xs={12} md={3} className="Footer-links-col">
          <a href="/league-of-legends">League of Legends</a>
          <a href="/valorant">Valorant</a>
        </Col>
        <Col xs={12} md={3} className="Footer-links-col">
          <a href="/donar">Hacer una donación</a>
        </Col>
        <Col xs={12} md={3} className="Footer-links-col">
          <a href="https://www.instagram.com/tendsummer/" target="_blank">
            Instagram
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19.944"
              height="19.94"
              viewBox="0 0 19.944 19.94"
            >
              <path
                id="Icon_awesome-instagram"
                data-name="Icon awesome-instagram"
                d="M9.969,7.1a5.112,5.112,0,1,0,5.112,5.112A5.1,5.1,0,0,0,9.969,7.1Zm0,8.436a3.324,3.324,0,1,1,3.324-3.324,3.33,3.33,0,0,1-3.324,3.324Zm6.514-8.645a1.192,1.192,0,1,1-1.192-1.192A1.19,1.19,0,0,1,16.483,6.886ZM19.869,8.1a5.9,5.9,0,0,0-1.611-4.178A5.94,5.94,0,0,0,14.08,2.308c-1.646-.093-6.581-.093-8.227,0A5.931,5.931,0,0,0,1.675,3.914,5.92,5.92,0,0,0,.065,8.092c-.093,1.646-.093,6.581,0,8.227A5.9,5.9,0,0,0,1.675,20.5a5.947,5.947,0,0,0,4.178,1.611c1.646.093,6.581.093,8.227,0A5.9,5.9,0,0,0,18.258,20.5a5.94,5.94,0,0,0,1.611-4.178c.093-1.646.093-6.576,0-8.222Zm-2.127,9.989a3.365,3.365,0,0,1-1.9,1.9c-1.313.521-4.427.4-5.878.4s-4.57.116-5.878-.4a3.365,3.365,0,0,1-1.9-1.9c-.521-1.313-.4-4.427-.4-5.878s-.116-4.57.4-5.878a3.365,3.365,0,0,1,1.9-1.9c1.313-.521,4.427-.4,5.878-.4s4.57-.116,5.878.4a3.365,3.365,0,0,1,1.9,1.9c.521,1.313.4,4.427.4,5.878S18.263,16.777,17.742,18.085Z"
                transform="translate(0.005 -2.238)"
                fill="#f6f5ec"
              />
            </svg>
          </a>
          <a href="https://twitter.com/Tendsummer" target="_blank">
            Twitter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24.504"
              height="19.94"
              viewBox="0 0 24.504 19.94"
            >
              <path
                id="Icon_ionic-logo-twitter"
                data-name="Icon ionic-logo-twitter"
                d="M25.918,6.863a10.164,10.164,0,0,1-2.887.794,5.045,5.045,0,0,0,2.212-2.783,9.99,9.99,0,0,1-3.194,1.22,5.026,5.026,0,0,0-8.7,3.438,4.922,4.922,0,0,0,.13,1.148A14.247,14.247,0,0,1,3.116,5.419a5.037,5.037,0,0,0,1.563,6.719,4.91,4.91,0,0,1-2.285-.628v.062a5.032,5.032,0,0,0,4.035,4.933,5.061,5.061,0,0,1-1.324.177,4.743,4.743,0,0,1-.945-.093,5.035,5.035,0,0,0,4.7,3.495,10.08,10.08,0,0,1-6.247,2.155,10.19,10.19,0,0,1-1.2-.073,14.052,14.052,0,0,0,7.7,2.274A14.219,14.219,0,0,0,23.425,10.119c0-.218-.005-.436-.016-.649A10.234,10.234,0,0,0,25.918,6.863Z"
                transform="translate(-1.413 -4.5)"
                fill="#f6f5ec"
              />
            </svg>
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="firma">
          <small>
            Web developed with ❤️ by{" "}
            <a
              href="https://twitter.com/JMiguel36"
              target="_blank"
              rel="noreferrer"
            >
              https://jmiguel
            </a>
          </small>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
