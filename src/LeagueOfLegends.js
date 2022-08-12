import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import "./resources/css/tournaments.css";
import "bootstrap/dist/css/bootstrap.min.css";
import illu3 from "./resources/img/illu-3.png";
import illu1 from "./resources/img/illu-1.png";
import { Container, Row, Col, Table, Tabs, Tab } from "react-bootstrap";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Cursor from "./components/Cursor.jsx";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";

const LeagueOfLegends = () => {
  const [players, setPlayers] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [lenPlayers, setLenPlayers] = useState(0);

  useEffect(() => {
    axios
      .get(
        "https://tendsummer-a40e0-default-rtdb.europe-west1.firebasedatabase.app/players.json"
      )
      .then((response) => {
        setPlayers(response.data);
        setLenPlayers(response.data.lol.length);
      });
  }, []);

  const options = {
    nav: false,
    autoplay: true,
    margin: 10,
    autoplayTimeout: 5000,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      420: {
        items: 3,
      },
    },
  };

  const owlSlides = [];
  for (let i = 0; i < lenPlayers; i++) {
    owlSlides.push(
      <div key={`slide-${i}`}>
        <div
          className="bg-image"
          style={{ backgroundImage: `url(${players.lol[i].image})` }}
        ></div>
        <div className="metadata">
          <h3 className="username">{players.lol[i].username}</h3>
          <a
            href={`https://www.twitch.tv/${players.lol[i].username}`}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30.094"
              height="31.5"
              viewBox="0 0 30.094 31.5"
            >
              <path
                id="Icon_awesome-twitch"
                data-name="Icon awesome-twitch"
                d="M2.82,2.25.7,7.657v22.1H8.227V33.75h4.233l3.994-3.994H22.57L30.8,21.53V2.25ZM27.977,20.116l-4.7,4.7H15.75l-3.994,3.994V24.82H5.407V5.07h22.57V20.116Zm-4.7-9.64V18.7h-2.82v-8.22Zm-7.523,0V18.7H12.93v-8.22Z"
                transform="translate(-0.703 -2.25)"
                fill="#f6f5ec"
              />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Cursor></Cursor>
      <div className="App-inner">
        <Header></Header>
        <div className="wrapper-illu">
          <img className="illu-3" src={illu3} />
          <img className="illu-1" src={illu1} />
        </div>
        <div className="tabs-elo">
          <Tabs
            defaultActiveKey="elo-alto"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="elo" title="ELO" disabled></Tab>
            <Tab eventKey="elo-alto" title="HIGH">
              <iframe
                src="https://challonge.com/es/ir6l41or/module"
                width="100%"
                height="500"
                frameborder="0"
                scrolling="auto"
                allowtransparency="true"
              ></iframe>
            </Tab>
            <Tab eventKey="elo-bajo" title="LOW">
              <iframe
                src="https://challonge.com/es/uulv1qq7/module"
                width="100%"
                height="500"
                frameborder="0"
                scrolling="auto"
                allowtransparency="true"
              ></iframe>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="App-inner-black">
        <Container>
          <Row>
            <Col className="col-title">
              <h2 className="title-white">Horario</h2>
              <hr className="hr-divisor hr-left" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Table responsive className="table-horario">
                <thead>
                  <tr>
                    <th></th>
                    <th>Viernes 3</th>
                    <th>Sábado 4</th>
                    <th>Domingo 5</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="tr-yellow">
                    <td>
                      <p className="td-bold">Manana</p>
                    </td>
                    <td className="td-light"></td>
                    <td className="td-light"></td>
                    <td className="td-light"></td>
                  </tr>
                  <tr>
                    <td>
                      <p className="td-bold">10:30 - 11:00</p>
                    </td>
                    <td>
                      <p className="td-light">&#8212;</p>
                    </td>
                    <td>
                      <p className="td-light">Charlando</p>
                    </td>
                    <td>
                      <p className="td-light">Charlando</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="td-bold">11:00 - 14:00</p>
                    </td>
                    <td>
                      <p className="td-light">&#8212;</p>
                    </td>
                    <td>
                      <p className="td-light">Partidos</p>
                    </td>
                    <td>
                      <p className="td-light">Partidos</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="td-bold">14:00 - 14:30</p>
                    </td>
                    <td>
                      <p className="td-light">&#8212;</p>
                    </td>
                    <td>
                      <p className="td-light">Charlando</p>
                    </td>
                    <td>
                      <p className="td-light">Charlando</p>
                    </td>
                  </tr>
                  <tr className="tr-yellow">
                    <td>
                      <p className="td-bold">Tarde</p>
                    </td>
                    <td className="td-light"></td>
                    <td className="td-light"></td>
                    <td className="td-light"></td>
                  </tr>
                  <tr>
                    <td>
                      <p className="td-bold">16:00 - 17:00</p>
                    </td>
                    <td>
                      <p className="td-light">Presentación</p>
                    </td>
                    <td>
                      <p className="td-light">&#8212;</p>
                    </td>
                    <td>
                      <p className="td-light">&#8212;</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="td-bold">16:30 - 17:00</p>
                    </td>
                    <td>
                      <p className="td-light">Charlando</p>
                    </td>
                    <td>
                      <p className="td-light">Charlando</p>
                    </td>
                    <td>
                      <p className="td-light">Charlando</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="td-bold">17:00 - 20:00</p>
                    </td>
                    <td>
                      <p className="td-light">Partidos</p>
                    </td>
                    <td>
                      <p className="td-light">Partidos</p>
                    </td>
                    <td>
                      <p className="td-light">Partidos</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p className="td-bold">20:00 - 20:30</p>
                    </td>
                    <td>
                      <p className="td-light">Charlando</p>
                    </td>
                    <td>
                      <p className="td-light">Charlando</p>
                    </td>
                    <td>
                      <p className="td-light">Charlando</p>
                    </td>
                  </tr>
                  <tr className="tr-yellow">
                    <td>
                      <p className="td-bold">Noche</p>
                    </td>
                    <td className="td-light"></td>
                    <td className="td-light"></td>
                    <td className="td-light"></td>
                  </tr>
                  <tr>
                    <td>
                      <p className="td-bold">22:00</p>
                    </td>
                    <td>
                      <p className="td-light">&#8212;</p>
                    </td>
                    <td>
                      <p className="td-light">Arams de la Muerte</p>
                    </td>
                    <td>
                      <p className="td-light">Concierto</p>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col className="col-title">
              <hr className="hr-divisor hr-right" />
              <h2 className="title-white">Participantes</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3}>
              <div className="what-do-play">
                <h3>
                  what do
                  <br />
                  you play for?
                </h3>
              </div>
            </Col>
            <Col xs={12} md={9} className="partipantes-col">
              <OwlCarousel options={options}>{owlSlides}</OwlCarousel>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default LeagueOfLegends;
