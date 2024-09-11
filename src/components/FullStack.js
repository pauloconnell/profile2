import React from "react";
//import { Link } from "react-router-dom";
//import UnorderedList from "./UnorderedList";
//import Footer from "./Footer";
import MyWork from "./links/MyWork";


/* Refactored Feb 2023 */
const FullStack = function () {
  return (
    <div>
      <MyWork />

      <div>
        <h2 className=" my-3 textAlign">
          <span className="readEasy title text text-dark">
            Full Stack MERN Applications
          </span>
        </h2>

        <h3 className="readEasy inlineBlock pt-3">
          Deployed in the cloud using:
          <br />
          React, Express, MongoDB, Mongoose, Node.js, API MicroServices
        </h3>

        <h4 className="readEasy">
          HTML, JavaScript, Css, Bootstrap, jQuerry, GitHub
        </h4>
      </div>

      <div className="row mx-1 justify-content-center">
        <section className="col-12 col-sm-5 text-center py-1 px-0 link">
          <a
            className="link  d-block"
            href="https://qa-4-suduko-solver.pauloconnell.repl.co/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className=" "
              title="This app implements suduko logic and solves any board using recursion"
            >
              <span className="title text">
                <strong>Suduko Solver Game</strong>
              </span>
              <br />
              <div className="d-flex align-items-start my-3">
                <img
                  className="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1610747577/suduko_e2wjgi.png"
                  alt="Full Stack Suduko Solver"
                />
              </div>
            </div>
          </a>
        </section>
        <div className="col-sm-auto"></div >
        <section className="col-12 col-sm-5 text-center py-1 px-0 link">
          <a
            className="link  d-block"
            href="https://stock-price-checker-paul.glitch.me/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className=""
              title="This app takes user input, hits API to get stock price, hits Database to store likes for each stock from unique IP addresses, and shows comparision of likes."
            >
              <span className="title text">
                <strong>API Stock Price Checker</strong>
              </span>
              <br />
              <div className="d-flex align-items-center my-3">
                <img
                  className="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1610734887/StockPriceChecker_h0yedt.png"
                  alt="Full Stack Web App"
                />
              </div>
            </div>
          </a>
        </section>
      </div>

      <div className="row mx-1 justify-content-center">
        <section className="col-12 col-sm-5 text-center py-1 px-0 link">
          <a
            className=" link d-block"
            href="https://messageboard-anon.glitch.me/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="">
              <span className="title text">
                <strong>Anonymous Message Board Web App</strong>
              </span>
              <br />
              <div
                className="my-3"
                title="This App allows anonymous users to set password protected content on database 'boards'"
              >
                <img
                  className="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1610571643/messageBoard_km9wul.png"
                  alt="Full Stack Message Board"
                />
              </div>
            </div>
          </a>
        </section>
        <div className="col-sm-auto"></div>
        <section className="col-12 col-sm-5 text-center py-1 px-0 link">
          <a
            className=" link d-block"
            href="https://exercisetrackerapi.glitch.me"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className=" "
              title="This app creates an API to Querry database results for users
                  results. The app creates unique userId for each user to log
                  exercises and track on the database via API Querries."
            >
              <span className="title text">
                <strong>Exercise Tracker App</strong>
              </span>
              <br />
              <div className="d-flex align-items-center my-3">
                <img
                  className="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1606166908/xTracker_nm1gfn.png"
                  alt="Full Stack Web App"
                />
              </div>
            </div>
          </a>
        </section>
      </div>

      <div className="row mx-1 justify-content-center">
        <section className="col-12 col-sm-5 text-center py-1 px-0 link">
          <a
            className="link  d-block "
            href="https://QA-5-american-british-english-translator.pauloconnell.repl.co"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className=""
              title="This app converts from British spelling/slang to US and Vise-Versa"
            >
              <span className="title text">
                <strong>Slang Translation App</strong>
              </span>
              <br />
              <div className="d-flex align-items-start my-3">
                <img
                  className="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1610564580/translate_yjhf3p.png"
                  alt="translator app image"
                />
              </div>
            </div>
          </a>
        </section>
        <div className="col-sm-auto"></div>
        <section className="col-12 col-sm-5 text-center py-1 px-0 link">
          <a
            className="link  d-block "
            href="https://authentication-pug.glitch.me/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className=" "
              title="This app encrypts login details, stores users details on
                  database, and allows secure login with Passport.js"
            >
              <span className="title text">
                <strong>
                  Encrypted Authentication Using Passport and MongoDB
                </strong>
              </span>
              <br />
              <div className="d-flex align-items-center my-3">
                <img
                  className="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1610815824/Authenticate-Pug_awfw7d.png"
                  alt="Full Stack Web App"
                />
              </div>
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

export default FullStack;