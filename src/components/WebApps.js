
import React from 'react';
import { Link } from 'react-router-dom';
import UnorderedList from './UnorderedList';
import MyWork from './links/MyWork';



/* the main page for the index route of this app */
const WebApps = function () {
  return (
    <div className="container-fluid">
      <MyWork />

      <h2 className=" my-3 textAlign">
        <span className="readEasy title text text-dark">Web Applications</span>
      </h2>
      <h3 className="mb-5 pt-3 textAlign">
        <span className="readEasy">
          Modern responsive custom Web Applications <br />
          built using javaScript and React, deployed in the cloud.
        </span>
      </h3>

      <div className="row mx-1 justify-content-center">
        <section className="col-12 col-sm-5 my-1 px-0 link">
          <a
            className="link d-block"
            title="Detects GeoLocation then hits weather forcast API to display weather in your area"
            href="https://codepen.io/p_ollie/full/QqGGXB"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" text-align">
              <span className="title text inlineBlock">
                <strong>API Local Weather Detector</strong>
              </span>

              <img
                className="responsive mt-1"
                src="https://res.cloudinary.com/pollie/image/upload/v1616001698/weather_f6qfif.png"
                alt="API Weather detector"
              />
            </div>
          </a>
        </section>
        <div className="col-sm-auto"></div>
        <section className="col-12 col-sm-5 my-1 px-0 link">
          <a
            className="link d-block"
            href="https://codepen.io/p_ollie/full/ZEzNJWo"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" text-align">
              <span className="title text inlineBlock">
                <strong>React Drum Machine</strong>
              </span>

              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1590166330/Drum_Machien_ithb8w.jpg"
                alt="Drum Machine img loading"
              />
            </div>
          </a>
        </section>
      </div>

      <div className="row mx-1 justify-content-center">
        <section className="col-12 col-sm-5 my-1 px-0 link">
          <a
            className="link d-block"
            href="https://cdpn.io/p_ollie/debug/xyRRyq/yPAJjKXXWKQA"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-align">
              <span className="title text inlineBlock">
                <strong>Tic Tac Toe with AI Player</strong>
              </span>

              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1590523056/ticTacToe_gduhcm.jpg"
                alt="tic-tac-toe game"
              />
            </div>
          </a>
        </section>
        <div className="col-sm-auto"></div>
        <section className="col-12 col-sm-5 my-1 px-0 link">
          <a
            className=" link d-block"
            href="https://codepen.io/p_ollie/full/RLrxPr"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" text-align">
              <span className="title text inlineBlock">
                <strong>
                  <u>API Quote Generator</u>
                </strong>
                <br />
              </span>

              <br />
              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1598905735/API_quote_machien_cmbxot.png"
                alt="API Quote Generator"
              />
            </div>
          </a>
        </section>
      </div>
      <div className="row mx-1 justify-content-center">
        <section className="col-12 col-sm-5 py-1 px-0 link">
          <a
            className="link d-block"
            title="Delivers specific information for every item on sales floor and organizes similar models to increase sales conversions"
            href="https://codepen.io/p_ollie/full/qJjVgR"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" text-align">
              <span className="title inlineBlock text">
                <strong>
                  <u>Test Center</u>
                  <div>Product Knowledge App</div>
                </strong>
              </span>
            </div>
            <div className="my-3">
              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1610401628/Test_Center_ue5srv.png"
              />
            </div>
          </a>
        </section>

        <div className="col-sm-auto"></div>
        <section className="col-12 col-sm-5 my-1 px-0 link">
          <a
            className="link d-block"
            href="https://ianbunburydogschool.glitch.me"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" text-align ">
              <span className="title inlineBlock text">
                <strong>
                  <u>
                    {" "}
                    Ian Bunbury
                    <br />
                    Dog Training
                  </u>
                </strong>
              </span>

              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1615410052/profileBunbury_pcfb8t.png"
                alt="Ian Bunbury Dog School"
              />
            </div>
          </a>
        </section>
      </div>

      <div className="row mx-1 justify-content-center">
        <section className="col-12 col-sm-5 my-1 px-0 link">
          <a
            className="link d-block"
            title="Profile developed with pure HTML and CSS"
            href="https://codepen.io/p_ollie/full/ayJXyZ"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" text-align">
              <span className="title text inlineBlock">
                <strong>Web Developer Profile </strong>
              </span>

              <img
                className="responsive  mt-md-3 "
                src="https://res.cloudinary.com/pollie/image/upload/v1631908054/profile_v31u4b.png"
                alt="Web Developer"
              />
            </div>
          </a>
        </section>
        <div className="col-sm-auto"></div>
        <section className="col-12 col-sm-5 my-1 px-0 link">
          <a
            className="link d-block"
            href="https://codepen.io/p_ollie/full/VMVeQw"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-align">
              <span className="title text inlineBlock">
                <strong>Wiki Search via API</strong>
              </span>

              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1598909611/Wiki_search_avfb5n.png"
                alt="wiki search"
              />
            </div>
          </a>
        </section>
      </div>

      <div className="my-3">
        <MyWork />
      </div>
    </div>
  );
};

export default WebApps;