import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RowCard } from '../rowCards/RowCard';
import MyWork  from '../links/MyWork';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

/* Refactored Feb 2023 */
const FullStack = function () {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  },[location]);

  useEffect(() => { AOS.init({ 
    duration: 1300, 
    once: false,
    offset: 20 
     
    }); }, []);

  return (
    <div className="bgSolid ">

      <MyWork />
      
        <h2 className=" my-3 textAlign ">
          <span className="bigH2 text textBlue ">
            Full Stack MERN Applications
          </span>
        </h2>

        <h3 data-aos="zoom-in" className="mb-5 py-3 mx-auto backgroundBlue width90 text-center text">

          Deployed in the cloud using:
          <br />
          React, Express, MongoDB, Mongoose, Node.js, API MicroServices

          HTML, JavaScript, CSS, Bootstrap, GitHub, AWS
        </h3>



     

      <section className="width90">

        <RowCard dataUrl1="https://authentication-pug.glitch.me/" link1={null} header1="Encrypted Authentication Using Passport and MongoDB" title1="This app encrypts login details, stores users details on
                  database, and allows secure login with Passport.js"
          imgSrc1="https://res.cloudinary.com/pollie/image/upload/v1610815824/Authenticate-Pug_awfw7d.png" imgAlt1="Full Stack app with encrypted secure login image " footer1="This app encrypts login details, stores users details on
                  database, and allows secure login with Passport.js"
                  dataUrl2="https://messageboard-anon.glitch.me/" link2={null} header2="Anonymous Message Board Web App" title2="This App allows anonymous users to set password protected content on 'boards' stored on MongoDB"
          imgSrc2="https://res.cloudinary.com/pollie/image/upload/v1610571643/messageBoard_km9wul.png" imgAlt2="Full Stack Message Board" footer2="This App allows anonymous users to set password protected content on each 'board' on MongoDB "
          
          />



       {/* repl repo inactive "https://QA-5-american-british-english-translator.pauloconnell.repl.co" 
       Upgraded node and DB, so it's working, but still needs major CSS update: "https://messageboard-anon.glitch.me/"
       Removing these
       // dataUrl2="https://QA-5-american-british-english-translator.pauloconnell.repl.co" link2={null} header2="Slang Translation App" title2="This app converts from British spelling/slang to US and Vise-Versa"
          // imgSrc2="https://res.cloudinary.com/pollie/image/upload/v1610564580/translate_yjhf3p.png" imgAlt2="translator app image" footer2="This app converts from British spelling/slang to US and Vise-Versa" 
       */}


        <RowCard dataUrl1="https://825f669b-dc9a-4bff-8630-5cbc22ac4b31-00-3ks6dkftqw91c.riker.replit.dev/" link1={null} header1="Sudoku Solver Game" title1="This app implements Sudoku logic and solves any board using recursion"
          imgSrc1="https://res.cloudinary.com/pollie/image/upload/v1610747577/suduko_e2wjgi.png" imgAlt1="Full Stack Sudoku Solver" footer1="This app implements Sudoku logic and solves any board using recursion"
          dataUrl2="https://exercisetrackerapi.glitch.me" link2={null} header2="Exercise Tracker App" title2="This app creates an API to Querry database results for users
                  results. The app creates unique userId for each user to log
                  exercises and track on the database via API Querries."
          imgSrc2="https://res.cloudinary.com/pollie/image/upload/v1606166908/xTracker_nm1gfn.png" imgAlt2="Full Stack Exercise tracker Web App image" footer2="Full Stack Exercise tracker Web App stores each user's exercises in MongoDB" />


        {/* replit repo inactive too "https://qa-4-suduko-solver.pauloconnell.repl.co/" 
        "https://stock-price-checker-paul.glitch.me/" npm needs update
        */}
        {/* <a href="https://825f669b-dc9a-4bff-8630-5cbc22ac4b31-00-3ks6dkftqw91c.riker.replit.dev/"> testing Sudoku Link</a> 

        <RowCard dataUrl1="https://825f669b-dc9a-4bff-8630-5cbc22ac4b31-00-3ks6dkftqw91c.riker.replit.dev/" link1={null} header1="Sudoku Solver Game" title1="This app implements Sudoku logic and solves any board using recursion"
          imgSrc1="https://res.cloudinary.com/pollie/image/upload/v1610747577/suduko_e2wjgi.png" imgAlt1="Full Stack Sudoku Solver" footer1="This app implements Sudoku logic and solves any board using recursion"
          dataUrl2="https://stock-price-checker-paul.glitch.me/" link2={null} header2="API Stock Price Checker" title2="This app takes user input, hits API to get stock price, hits Database to store likes for each stock from unique IP addresses, and shows comparision of likes."
          imgSrc2="https://res.cloudinary.com/pollie/image/upload/v1610734887/StockPriceChecker_h0yedt.png" imgAlt2="API Stock Price Checker app image" footer2="Full Stack Suduko Solver" />

        
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
      </div> */}


        {/* 
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
      </div> */}


        {/* 
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
      </div> */}

      </section>
      <MyWork />
    </div>
  );
};

export default FullStack;