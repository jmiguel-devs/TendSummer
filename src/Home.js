import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import illu3 from "./resources/img/illu-3.png";
import illu1 from "./resources/img/illu-1.png";
import { Container, Row, Col } from "react-bootstrap";
import CircleType from "circletype";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Cursor from "./components/Cursor.jsx";
import Vesper from "./resources/img/vesper.png";
import Market from "./resources/img/market.png";
import Sonilustra from "./resources/img/Sonilustra.png";
import { Link } from "react-router-dom";

const Home = () => {
  const circleInstance = useRef();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [nameMautic, setNameMautic] = useState([]);
  const [emailMautic, setEmailMautic] = useState([]);
  const [tallaMautic, setTallaMautic] = useState([]);

  const handleNameChange = (e) => {
    setNameMautic(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailMautic(e.target.value);
  };

  const handleTallaChange = (e) => {
    setTallaMautic(e.target.value);
  };

  useEffect(() => {
    new CircleType(circleInstance.current).radius(0);
  }, []);

  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }
  const shopImages = importAll(
    require.context("./resources/img/shop", false, /\.(png|jpe?g|svg)$/)
  );

  const slides = [];
  for (let i = 0; i < 3; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li">
        <img
          src={shopImages[`${i}.jpg`].default}
          className="img-tienda"
          style={{ listStyle: "none" }}
          alt={`Slide ${i}`}
        />
      </SwiperSlide>
    );
  }

  return (
    <div>
      <Cursor></Cursor>
      <div className="App-inner">
        <Header></Header>
        <div className="lineBorder"></div>
        <div className="wrapper-illu">
          <img className="illu-3" src={illu3} alt="" srcset="" />
          <img className="illu-1" src={illu1} alt="" srcset="" />
        </div>
        <iframe
          src="https://player.twitch.tv/?channel=achochumacho&amp;parent=tendsummer.es"
          frameborder="0"
          allowfullscreen="true"
          scrolling="no"
          height="378"
          width="75%"
          className="twitch"
        ></iframe>
        <Container>
          <Row className="ver-clasificatorio-container">
            <Col>
              <h3 className="ver-clasificatorio">
                <span>VER</span>
                <br />
                clasificatorio
              </h3>
              <div className="logos-riot-clasificar">
                <a className="val" href="/valorant">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150.429"
                    height="99.519"
                    viewBox="0 0 150.429 99.519"
                    className="valorant-logo"
                  >
                    <g id="ff4655ff" transform="translate(0 -4.136)">
                      <path
                        id="Trazado_48"
                        data-name="Trazado 48"
                        d="M244.047,4.214c.461-.275.755.281,1,.573q24.012,30.039,48.041,60.064a.481.481,0,0,1-.364.829q-11.5.013-22.994,0a2.01,2.01,0,0,1-1.579-.777Q256.227,50,244.3,35.095a2.114,2.114,0,0,1-.49-1.443q0-14.4,0-28.8C243.814,4.625,243.806,4.332,244.047,4.214Z"
                        transform="translate(-208.339 -0.003)"
                      />
                      <path
                        id="Trazado_49"
                        data-name="Trazado 49"
                        d="M565.518,4.164a.492.492,0,0,1,.64.522q.017,14.405.006,28.811a2.245,2.245,0,0,1-.451,1.535q-3.625,4.535-7.252,9.067a2.056,2.056,0,0,1-1.721.78c-7.613-.007-15.228,0-22.841-.006a.482.482,0,0,1-.374-.829Q549.361,24.23,565.212,4.425A.789.789,0,0,1,565.518,4.164Z"
                        transform="translate(-455.775)"
                      />
                      <path
                        id="Trazado_50"
                        data-name="Trazado 50"
                        d="M338.772,539.949a10.8,10.8,0,1,1-8.278,6.41,10.833,10.833,0,0,1,8.278-6.41m.583,3.637a6.983,6.983,0,0,0-5.268,4.149,7.287,7.287,0,0,0,.5,6.716,6.929,6.929,0,0,0,4.717,3.19,6.794,6.794,0,0,0,5.569-1.578,7.234,7.234,0,0,0-.329-11.156A6.785,6.785,0,0,0,339.355,543.587Z"
                        transform="translate(-281.667 -457.754)"
                      />
                      <path
                        id="Trazado_51"
                        data-name="Trazado 51"
                        d="M0,543.347a14.637,14.637,0,0,1,2.769-.116c.327.045.825-.124,1.01.246a12.125,12.125,0,0,1,.029,1.455q0,6.353,0,12.707,5.569-6.959,11.13-13.925a1.069,1.069,0,0,1,.781-.461c1.065-.047,2.131.006,3.2-.02a1.863,1.863,0,0,1,1.181.2c-1.241,1.635-2.556,3.214-3.828,4.826q-5.718,7.158-11.438,14.313a8.376,8.376,0,0,1-.871,1.027c-.333.275-.8.189-1.2.211-.921-.032-1.848.049-2.764-.064Z"
                        transform="translate(0 -460.655)"
                      />
                      <path
                        id="Trazado_52"
                        data-name="Trazado 52"
                        d="M85.861,544.163a2.1,2.1,0,0,1,1.712-.848c.823,0,1.648-.015,2.472.007.284-.031.442.263.406.513v19.511c.038.25-.115.556-.406.524q-1.53.017-3.06,0a1.118,1.118,0,0,1-.879-.534q-2.645-3.322-5.3-6.636-2.693,3.354-5.371,6.72a1.033,1.033,0,0,1-.8.448c-1.168.026-2.338-.006-3.508.013-.287-.019-.646.073-.823-.226,5.153-6.521,10.376-12.989,15.551-19.492M82.956,553.6c1.21,1.506,2.4,3.025,3.623,4.522q.013-4.528,0-9.055Q84.763,551.326,82.956,553.6Z"
                        transform="translate(-60.081 -460.732)"
                      />
                      <path
                        id="Trazado_53"
                        data-name="Trazado 53"
                        d="M240.478,543.826c-.028-.23.1-.512.364-.506,1.026-.025,2.056-.015,3.083,0a.426.426,0,0,1,.431.528q.009,8.175,0,16.351c2.852.01,5.7-.007,8.553.007a.241.241,0,0,1,.2.422c-.742.956-1.509,1.894-2.264,2.843a1.108,1.108,0,0,1-.988.406c-3.006-.01-6.013.012-9.019-.01-.276.012-.391-.288-.365-.519Q240.478,553.586,240.478,543.826Z"
                        transform="translate(-205.488 -460.727)"
                      />
                      <path
                        id="Trazado_54"
                        data-name="Trazado 54"
                        d="M501.6,543.837a.424.424,0,0,1,.479-.522q7.8-.009,15.587,0c.24-.033.524.116.5.39.016,1.408,0,2.818.006,4.226a1.229,1.229,0,0,1-.354.879c-1.5,1.855-2.975,3.729-4.48,5.581-.074.131-.321.3-.134.455,2.272,2.857,4.564,5.7,6.833,8.56.164.137.167.463-.1.455-1.347.029-2.7.015-4.043.007-.528.007-.826-.483-1.119-.844q-3.129-3.926-6.268-7.843c-.156-.192-.394-.47-.177-.707,1.971-2.5,3.979-4.979,5.961-7.475-2.934-.013-5.87.025-8.8-.019-.052,5.5,0,11-.028,16.5a.384.384,0,0,1-.461.391c-1.018,0-2.037.016-3.055-.007-.271,0-.38-.3-.345-.527Q501.6,553.587,501.6,543.837Z"
                        transform="translate(-428.618 -460.73)"
                      />
                      <path
                        id="Trazado_55"
                        data-name="Trazado 55"
                        d="M651.114,543.85a.42.42,0,0,1,.418-.528c.97-.017,1.944-.007,2.915,0a1.074,1.074,0,0,1,.93.444q7.274,9.1,14.546,18.2c.418.56.918,1.064,1.28,1.664l-.14.227c-1.176.06-2.355,0-3.532.026-.464.007-1.026.047-1.333-.378-1.821-2.259-3.625-4.533-5.438-6.8q-2.693,3.352-5.371,6.717a1.042,1.042,0,0,1-.8.451c-1.015.015-2.031.01-3.045,0a.42.42,0,0,1-.431-.53q0-9.746,0-19.494m3.871,5.224q-.007,4.526,0,9.051,1.816-2.261,3.621-4.529C657.4,552.09,656.2,550.573,654.985,549.074Z"
                        transform="translate(-556.379 -460.733)"
                      />
                      <path
                        id="Trazado_56"
                        data-name="Trazado 56"
                        d="M768.64,543.848c-.031-.225.07-.519.336-.525.967-.039,1.936-.006,2.9-.016a1.12,1.12,0,0,1,1,.413q5.6,6.988,11.184,13.984,0-6.933,0-13.868a.426.426,0,0,1,.468-.527c1.024,0,2.048-.023,3.071.013.262.01.356.3.327.525v19.484c.031.221-.067.521-.332.525-1.017.029-2.037.009-3.054.01a1.02,1.02,0,0,1-.852-.415q-5.591-6.981-11.172-13.971c0,2.728.007,5.457,0,8.185.071.243-.275.451-.422.23-1.071-1.3-2.105-2.629-3.161-3.94a1.272,1.272,0,0,1-.294-.943C768.642,549.958,768.634,546.9,768.64,543.848Z"
                        transform="translate(-656.808 -460.725)"
                      />
                      <path
                        id="Trazado_57"
                        data-name="Trazado 57"
                        d="M919.573,543.7c-.031-.265.252-.418.483-.387,4.271-.007,8.543,0,12.814,0a1.1,1.1,0,0,1,.982.409c.757.943,1.521,1.883,2.264,2.837a.247.247,0,0,1-.2.434c-2.233.017-4.468,0-6.7.007-.01,5.447.013,10.894.012,16.341a.421.421,0,0,1-.418.53c-1.02.009-2.041.013-3.06,0a.36.36,0,0,1-.384-.387c-.036-5.494,0-10.989-.031-16.482-1.762,0-3.525.006-5.286,0-.234.028-.514-.134-.477-.4Q919.551,545.152,919.573,543.7Z"
                        transform="translate(-785.778 -460.732)"
                      />
                    </g>
                  </svg>
                </a>
                <a className="lol" href="/league-of-legends">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="167.799"
                    height="64.161"
                    viewBox="0 0 167.799 64.161"
                    className="lol-logo"
                  >
                    <g
                      id="League_of_Legends_2019_vector"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Trazado_58"
                        data-name="Trazado 58"
                        d="M534.961,133.99c-2.853-.727-5.314-1.342-5.314-3.692,0-1.846,1.4-3.02,3.636-3.02a4.185,4.185,0,0,1,4.363,3.356l5.593-2.685c-1.51-3.692-5.146-5.929-9.788-5.929-6.041,0-10.236,3.692-10.236,8.949,0,6.432,4.642,7.663,8.781,8.726,2.909.727,5.37,1.4,5.37,3.8,0,2.014-1.622,3.3-4.083,3.3a5.041,5.041,0,0,1-5.09-3.356l-5.593,2.685c1.566,3.692,5.537,5.929,10.459,5.929,6.544,0,10.739-3.636,10.739-9.341,0-6.488-4.922-7.719-8.837-8.726Z"
                        transform="translate(-376.447 -87.895)"
                      />
                      <path
                        id="Trazado_59"
                        data-name="Trazado 59"
                        d="M579.4,29.019v2.964h-4.754v2.8h4.139L578,37.633h-3.356v4.419H571.4V29.019Z"
                        transform="translate(-411.6 -20.903)"
                      />
                      <path
                        id="Trazado_60"
                        data-name="Trazado 60"
                        d="M524.624,31.607a3.636,3.636,0,1,1-3.636,3.636A3.628,3.628,0,0,1,524.624,31.607Zm0,10.4a6.8,6.8,0,1,0-6.824-6.824A6.8,6.8,0,0,0,524.624,42.011Z"
                        transform="translate(-372.99 -20.471)"
                      />
                      <path
                        id="Trazado_61"
                        data-name="Trazado 61"
                        d="M325.4,151.649h6.041V132.576l13.7,19.073h6.32V122.62h-6.1v19.353L331.831,122.62H324l1.4,2.853Z"
                        transform="translate(-233.389 -88.327)"
                      />
                      <path
                        id="Trazado_62"
                        data-name="Trazado 62"
                        d="M449.875,140.43a8.652,8.652,0,0,1-4.531,4.586,8.561,8.561,0,0,1-3.356.671H438.52V128.349h3.468a8.561,8.561,0,0,1,3.356.671,8.287,8.287,0,0,1,4.531,4.587,9.007,9.007,0,0,1,0,6.824Zm-2.014-16.78a18.625,18.625,0,0,0-5.761-1.231h-9.9v29.029h9.9a15.284,15.284,0,0,0,10.515-4.139,13.817,13.817,0,0,0,3.188-4.586,14.24,14.24,0,0,0-3.188-16A15.8,15.8,0,0,0,447.861,123.651Z"
                        transform="translate(-311.329 -88.183)"
                      />
                      <path
                        id="Trazado_63"
                        data-name="Trazado 63"
                        d="M93.883,151.649H76.6V122.62H93.883v5.649H82.92v5.873H92.932l-1.51,5.481h-8.5V146l10.963.056Z"
                        transform="translate(-55.178 -88.327)"
                      />
                      <path
                        id="Trazado_64"
                        data-name="Trazado 64"
                        d="M263.465,128.269h10.963V122.62H257.2v29.029h17.227v-5.593L263.465,146v-6.376h8.5l1.51-5.481H263.465Z"
                        transform="translate(-185.27 -88.327)"
                      />
                      <path
                        id="Trazado_65"
                        data-name="Trazado 65"
                        d="M355.965,22.951a13.844,13.844,0,0,1-.783-4.978l.112-17.9h6.265L361.5,17.694a7.278,7.278,0,0,0,1.342,4.642,5.521,5.521,0,0,0,7.887.112l.112-.112a6.973,6.973,0,0,0,1.4-4.642L372.3.019h6.376l-.112,18.066a15.187,15.187,0,0,1-.783,4.978,11.687,11.687,0,0,1-2.349,3.8,10.049,10.049,0,0,1-3.692,2.405,14.516,14.516,0,0,1-9.844-.056,9.539,9.539,0,0,1-3.636-2.461,10.5,10.5,0,0,1-2.293-3.8Z"
                        transform="translate(-255.845 -0.014)"
                      />
                      <path
                        id="Trazado_66"
                        data-name="Trazado 66"
                        d="M242.575,20.7a14.671,14.671,0,0,1,.056-11.634,14.821,14.821,0,0,1,3.3-4.754A14.683,14.683,0,0,1,250.8,1.124,14.175,14.175,0,0,1,256.726.005a15.628,15.628,0,0,1,7.887,2.014,13.218,13.218,0,0,1,5.258,5.537l-5.705,2.685A8.032,8.032,0,0,0,261.144,7a8.864,8.864,0,0,0-4.475-1.119,9.116,9.116,0,0,0-3.468.671,8.164,8.164,0,0,0-2.8,1.958,9.026,9.026,0,0,0-1.9,2.909,9.459,9.459,0,0,0-.056,7.1,9,9,0,0,0,4.7,4.922,7.672,7.672,0,0,0,3.524.727,8.471,8.471,0,0,0,5.034-1.51,6.929,6.929,0,0,0,2.685-4.027H254.041l2.573-5.258h14.431c.056,1.119,0,3.524-.056,4.027a16.566,16.566,0,0,1-1.007,3.971,13.633,13.633,0,0,1-7.607,7.551,15.3,15.3,0,0,1-16.556-3.412,15.529,15.529,0,0,1-3.244-4.81Z"
                        transform="translate(-173.889 0)"
                      />
                      <path
                        id="Trazado_67"
                        data-name="Trazado 67"
                        d="M1.454,26.34V3.239L0,.219H7.719V23.655H19.3L17.675,29.36H0Z"
                        transform="translate(0 -0.158)"
                      />
                      <path
                        id="Trazado_68"
                        data-name="Trazado 68"
                        d="M1.454,148.341v-23.1L0,122.22H7.719v23.436H19.3l-1.622,5.705H0Z"
                        transform="translate(0 -88.039)"
                      />
                      <path
                        id="Trazado_69"
                        data-name="Trazado 69"
                        d="M93.883,29.649H76.6V.62H93.883V6.269H82.92v5.873H92.932l-1.51,5.481h-8.5v6.32L93.883,24Z"
                        transform="translate(-55.178 -0.446)"
                      />
                      <path
                        id="Trazado_70"
                        data-name="Trazado 70"
                        d="M466.427,29.649H449.2V.62h17.283V6.269H455.52v5.873h10.012l-1.51,5.481h-8.5v6.32L466.483,24v5.649Z"
                        transform="translate(-323.575 -0.446)"
                      />
                      <path
                        id="Trazado_71"
                        data-name="Trazado 71"
                        d="M160.143,8.385l3.636,9.788h-7.439Zm-8.11,20.975,2.181-5.649h11.634l2.237,5.649h6.544L162.939.219H153.99l1.9,3.8L145.6,29.36Z"
                        transform="translate(-104.881 -0.158)"
                      />
                      <path
                        id="Trazado_72"
                        data-name="Trazado 72"
                        d="M154.531,151.661a15.572,15.572,0,0,0,3.244.336,14.622,14.622,0,0,0,5.761-1.063,13.633,13.633,0,0,0,7.607-7.551,16.564,16.564,0,0,0,1.007-3.971,33,33,0,0,0,.056-4.083H157.776v.056l-2.573,5.258h10.292a6.93,6.93,0,0,1-2.685,4.027,8.7,8.7,0,0,1-6.6,1.342l-1.286-.336c-.224-.056-.392-.168-.615-.224a8.826,8.826,0,0,1-4.7-4.922,9.6,9.6,0,0,1,.056-7.159,10.056,10.056,0,0,1,1.9-2.909,8.237,8.237,0,0,1,2.853-1.9,9.327,9.327,0,0,1,3.468-.671,8.331,8.331,0,0,1,4.475,1.119,8.033,8.033,0,0,1,3.02,3.244l5.705-2.685a12.885,12.885,0,0,0-5.258-5.537,16.064,16.064,0,0,0-7.887-2.014,15.087,15.087,0,0,0-10.8,4.363,14.771,14.771,0,0,0-3.356,16.388,15.022,15.022,0,0,0,7.439,7.831A12.8,12.8,0,0,0,154.531,151.661Z"
                        transform="translate(-102.738 -87.891)"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="description-text">
              <p>
                EndSummer nació en el año 2020 con la finalidad de dar fin a un
                verano atípico marcado por la pandemia de Covid-19 que azotó el
                mundo. Quisimos organizar un evento que uniese a la gente a
                través de sus pantallas para olvidar durante unos días todo lo
                que esta enfermedad nos había quitado.
              </p>
              <p className="text-indent-p">
                Un año después, en 2021, volvemos a reunirnos de nuevo para
                disfrutar juntos del mundo de los videojuegos. Para recordar
                todo aquello que perdimos por esta enfermedad que cada vez está
                más cerca de ver su fin, pero con la que aún debemos tener
                cuidado. Además, esta será la primera edición, esperamos que de
                muchas, en la que se organizará el evento con un fin benéfico.
                Queremos ayudar a <b>Juegaterapia</b> y para hablar de ellos y
                de su maravilloso proyecto, consultad el apartado Juegaterapia.
                Nos vemos en las redes Summers.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="App-inner-black">
        <Container>
          <Row>
            <Col className="col-title">
              <h2 className="title-white">Juegaterapia</h2>
              <hr className="hr-divisor hr-left" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <p>
                Nos fascina el mundo de los videojuegos y todo lo que tenga que
                ver con ello. Por eso, queríamos dedicar este primer benéfico a
                una fundación que tuviese relación con nuestra pasión. Entonces,
                encontramos Juegaterapia. Juegaterapia nació en 2010 de la mano
                de Mónica Esteban, la maravillosa fundadora de esta fundación
                que se dedica a otorgar consolas, tablets y videojuegos a los
                niños hospitalizados de todo el país. Además, están construyendo
                jardines para jugar en las azoteas de los hospitales.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <p>
                Su labor es demasiado grande como para resumirla en unas líneas
                pero puedes conocer más haciendo click
                <a href="https://www.juegaterapia.org/" target="_blank">
                  aquí
                </a>
                . Puedes contribuir de muchas formas:
                <ul>
                  <li>
                    Enviando las consolas, tablets o juegos que ya no quieras a
                    la fundación a través de la empresa Envialia.
                  </li>
                  <li>
                    Comprando productos oficiales o packs de regalo para los
                    niños en la web de Juegaterapia.
                  </li>
                  <li>
                    Donando al enlace a la cuenta de Juegaterapia que
                    facilitaremos durante el torneo.
                  </li>
                </ul>
                Cualquier donación o forma de contribuir será bienvenida y nos
                ayudará a hacer sonreír a muchas familias con niños
                hospitalizados.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="circle-text-container">
                <a href="/donar" ref={circleInstance} id="circle-text-btn">
                  donar &#9679; donar &#9679; donar &#9679; donar &#9679;
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-title">
              <hr className="hr-divisor hr-right" />
              <h2 className="title-white">Tienda</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p style={{ marginBottom: "3em" }}>
                Este año queríamos hacer algo especial para el primer
                aniversario. Hablamos con la maravillosa artista Sonia (
                <a href="https://www.instagram.com/sonilustra/" target="_blank">
                  @Sonilustra
                </a>
                en Instagram) y le encargamos un diseño cargado de magia y
                belleza para el evento. Una camiseta será sorteada durante el
                evento entre todos los donantes. Esta edición va destinada, como
                puede leerse en el apartado superior, a la fundación
                Juegaterapia. Por ello, este diseño está dedicado a todos esos
                niños valientes, los superhéroes que salvarán el mundo el día de
                mañana.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Swiper
                id="thumbs"
                className="swiper-component"
                spaceBetween={5}
                breakpoints={{
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 1,
                    autoplay: {
                      delay: 3000,
                    },
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 3,
                  },
                }}
                onSwiper={setThumbsSwiper}
              >
                {slides}
              </Swiper>
            </Col>
          </Row>
          <Row className="form-section">
            <Col xs={12} md={6}>
              <div className="comprar-container">
                <h3>¿Quieres hacerte con tu camiseta?</h3>
                <p>
                  Para poder adquirir tu camiseta y contribuir a la causa, solo
                  tienes que rellenar el formulario que aparece a la derecha.
                  Nosotros nos podremos en contacto contigo para formalizar el
                  pedido.
                  <br />
                  <br /> Muchas gracias por tu interés y tu colaboración. Toda
                  ayuda es bienvenida.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div
                id="mauticform_wrapper_tendsummer2021"
                class="mauticform_wrapper"
              >
                <form
                  autocomplete="false"
                  role="form"
                  method="post"
                  action="http://mautic.amelezza.com/form/submit?formId=2"
                  id="mauticform_tendsummer2021"
                  data-mautic-form="tendsummer2021"
                  enctype="multipart/form-data"
                >
                  <div
                    class="mauticform-error"
                    id="mauticform_tendsummer2021_error"
                  ></div>
                  <div
                    class="mauticform-message"
                    id="mauticform_tendsummer2021_message"
                  ></div>
                  <div class="mauticform-innerform">
                    <div
                      class="mauticform-page-wrapper mauticform-page-1"
                      data-mautic-form-page="1"
                    >
                      <div
                        id="mauticform_tendsummer2021_nombre"
                        data-validate="nombre"
                        data-validation-type="text"
                        class="mauticform-row mauticform-text mauticform-field-1 mauticform-required"
                      >
                        <label
                          id="mauticform_label_tendsummer2021_nombre"
                          for="mauticform_input_tendsummer2021_nombre"
                          class="mauticform-label"
                        >
                          Nombre
                        </label>
                        <input
                          id="mauticform_input_tendsummer2021_nombre"
                          name="mauticform[nombre]"
                          value={nameMautic}
                          class="mauticform-input"
                          type="text"
                          onChange={handleNameChange}
                        />
                        <span
                          class="mauticform-errormsg"
                          style={{ display: "none" }}
                        >
                          Campo obligatorio
                        </span>
                      </div>

                      <div
                        id="mauticform_tendsummer2021_correo_electronico"
                        data-validate="correo_electronico"
                        data-validation-type="email"
                        class="mauticform-row mauticform-email mauticform-field-2 mauticform-required"
                      >
                        <label
                          id="mauticform_label_tendsummer2021_correo_electronico"
                          for="mauticform_input_tendsummer2021_correo_electronico"
                          class="mauticform-label"
                        >
                          Correo Electrónico
                        </label>
                        <input
                          id="mauticform_input_tendsummer2021_correo_electronico"
                          name="mauticform[correo_electronico]"
                          value={emailMautic}
                          class="mauticform-input"
                          type="email"
                          onChange={handleEmailChange}
                        />
                        <span
                          class="mauticform-errormsg"
                          style={{ display: "none" }}
                        >
                          Campo obligatorio
                        </span>
                      </div>

                      <div
                        id="mauticform_tendsummer2021_talla"
                        data-validate="talla"
                        data-validation-type="select"
                        class="mauticform-row mauticform-select mauticform-field-3 mauticform-required"
                      >
                        <label
                          id="mauticform_label_tendsummer2021_talla"
                          for="mauticform_input_tendsummer2021_talla"
                          class="mauticform-label"
                        >
                          Talla
                        </label>
                        <select
                          id="mauticform_input_tendsummer2021_talla"
                          name="mauticform[talla]"
                          value={tallaMautic}
                          class="mauticform-selectbox"
                          onChange={handleTallaChange}
                        >
                          <option value=""></option>{" "}
                          <option value="S">S</option>{" "}
                          <option value="M">M</option>{" "}
                          <option value="L">L</option>{" "}
                          <option value="XL">XL</option>{" "}
                          <option value="XXL">XXL</option>
                        </select>
                        <span
                          class="mauticform-errormsg"
                          style={{ display: "none" }}
                        >
                          Campo obligatorio
                        </span>
                      </div>

                      <div
                        id="mauticform_tendsummer2021_submit"
                        class="mauticform-row mauticform-button-wrapper mauticform-field-4"
                      >
                        <button
                          type="submit"
                          name="mauticform[submit]"
                          id="mauticform_input_tendsummer2021_submit"
                          value=""
                          class="mauticform-button btn btn-default"
                        >
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>

                  <input
                    type="hidden"
                    name="mauticform[formId]"
                    id="mauticform_tendsummer2021_id"
                    value="2"
                  />
                  <input
                    type="hidden"
                    name="mauticform[return]"
                    id="mauticform_tendsummer2021_return"
                    value=""
                  />
                  <input
                    type="hidden"
                    name="mauticform[formName]"
                    id="mauticform_tendsummer2021_name"
                    value="tendsummer2021"
                  />
                </form>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="col-title">
              <h2 className="title-white">Patrocinadores</h2>
              <hr className="hr-divisor hr-left" />
            </Col>
          </Row>
          <Row style={{ marginBottom: "3em" }}>
            <Col>
              <div className="container-logos">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/vespergamingvg/"
                >
                  <img
                    className="logo-donate"
                    alt="Vesper Gaming"
                    src={Vesper}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/marketbowin/"
                >
                  <img
                    className="logo-donate"
                    src={Market}
                    alt="Market Bowin"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  alt="Sonilustra"
                  href="https://www.instagram.com/sonilustra/"
                >
                  <img className="logo-donate" src={Sonilustra} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
