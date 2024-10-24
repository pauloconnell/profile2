
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import UnorderedList from '../UnorderedList';
import MyWork from '../links/MyWork';
import { RowCard } from '../rowCards/RowCard';


/* the main page for the index route of this app */
const WebApps = function () {

  const location = useLocation();
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [location])

  return (
    <div className="bgSolid" >
<MyWork />

      <h2 className=" my-3 textAlign">
        <span className="bigH2 text textBlue">Web Applications</span>
      </h2>
      <h3 className="mb-5 py-3 mx-auto backgroundBlue w-75 text-center text">
        <span className="">
          Modern responsive custom Web Applications. <br />
          Built using either pure JavaScript, HTML, CSS, or React / Vue3 with Nuxt 3.
        </span>
      </h3>

      <section className="container-fluid width90">

        {/* 
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
        */}

        {/* <div className="row mx-1 justify-content-center">
          <section className="col-12 col-sm-5 my-1 px-0 link">
            <a
              className="link d-block"
              title="Peer to Peer e-commerce platform"
              href="https://www.knowitalls.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-align">
                <span className="title text inlineBlock">
                  <strong><u>www.KnowItAlls.com</u></strong> <br />
                  Peer to Peer e-commerce platform built with Vue 3 Nuxt and Azure
                </span>


                <img
                  className="responsive mt-1"
                  src="https://res.cloudinary.com/pollie/image/upload/v1726776409/homepage_flzeh0.png"
                  alt="www.knowitalls.com"
                />
              </div>
            </a>
          </section>

          <div className="col-sm-auto"></div>

          testCenter https://codepen.io/p_ollie/full/qJjVgR
 */}



        <RowCard link1="https://www.knowitalls.com" header1="www.knowitalls.com" title1="Peer to Peer e-commerce platform"
          imgSrc1="https://res.cloudinary.com/pollie/image/upload/v1726776409/homepage_flzeh0.png" imgAlt1="www.knowitalls.com" footer1="Peer to Peer e-commerce platform built with Vue 3 Nuxt and Azure"
          link2="/#/WebApps" header2="Test Center" title2="Delivers specific information for every item on sales floor and organizes similar models to increase sales conversions"
          imgSrc2="https://res.cloudinary.com/pollie/image/upload/v1610401628/Test_Center_ue5srv.png" imgAlt2="Test Center app screenshot" footer2="Product Knowledge App used in multiple Retail store locations" />

{/* 
        <RowCard link1="/#/WebApps" header1="Test Center" title1="Delivers specific information for every item on sales floor and organizes similar models to increase sales conversions"
          imgSrc1="https://res.cloudinary.com/pollie/image/upload/v1610401628/Test_Center_ue5srv.png" imgAlt1="Test Center app screenshot" footer1="Product Knowledge App for retail stores"
          header2="Tic Tac Toe with AI Player" link2="https://cdpn.io/p_ollie/debug/xyRRyq/yPAJjKXXWKQA" title2="Tic Tac Toe with AI Player" imgSrc2="https://res.cloudinary.com/pollie/image/upload/v1590523056/ticTacToe_gduhcm.jpg" imgAlt2="tic-tac-toe game" footer2="Play against the computer" /> 
          */}


<RowCard link1="https://mrproconstruction.glitch.me/" header1="M.R.Pro Construction" title1="Landing page for construction company"
          imgSrc1="https://res.cloudinary.com/pollie/image/upload/v1672192690/Logo_zpv0kl.png" imgAlt1="M.R. PRO Construction" footer1="Landing page for construction company"
          link2="https://codepen.io/p_ollie/full/ZEzNJWo" header2="React Drum Machine" title2=" Drum Machine built with React"
          imgSrc2="https://res.cloudinary.com/pollie/image/upload/v1590166330/Drum_Machien_ithb8w.jpg" imgAlt2="Drum Machine img screenshot" footer2=" Drum Machine built with React" />


{/* 
        <div className="row mx-1 justify-content-center">
     

          <section className="col-12 col-sm-5 my-1 px-0 link">
            <a
              className="link d-block"
              href="https://mrproconstruction.glitch.me/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-align">
                <span className="title text inlineBlock">
                  <strong><u>M.R.Pro Construction</u></strong> <br />
                  Landing page for construction company

                </span>

                <img
                  className="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1672192690/Logo_zpv0kl.png"
                  alt="M.R. PRO Construction"
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
                  <strong><u>React Drum Machine</u></strong><br />
                  Drum Machine built with React
                </span>

                <img
                  className="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1590166330/Drum_Machien_ithb8w.jpg"
                  alt="Drum Machine img loading"
                />
              </div>
            </a>
          </section>
        </div> */}


<RowCard link1="https://codepen.io/p_ollie/full/VMVeQw" header1="Wiki Search via API" title1="App that searches Wikipedia via API and displays several results"
          imgSrc1="https://res.cloudinary.com/pollie/image/upload/v1598909611/Wiki_search_avfb5n.png" imgAlt1="wiki search app" footer1="Search for articles on Wikipedia via API"
          link2="https://codepen.io/p_ollie/full/ayJXyZ" header2="Web Developer Profile (old)" title2="Profile developed with pure HTML and CSS"
          imgSrc2="https://res.cloudinary.com/pollie/image/upload/v1631908054/profile_v31u4b.png" imgAlt2="Web Developer profile image" footer2="Original Profile built with HTML and CSS" />


{/* 
        <div className="row mx-1 justify-content-center">
          <section className="col-12 col-sm-5 my-1 px-0 link">
            <a
              className="link d-block"
              href="https://codepen.io/p_ollie/full/VMVeQw"
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-align">
                <span className="title text inlineBlock">
                  <strong><u>Wiki Search via API</u> </strong><br />

                  Search for articles on Wikipedia via API
                </span>

                <img
                  className="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1598909611/Wiki_search_avfb5n.png"
                  alt="wiki search"
                />
              </div>
            </a>
          </section>
          <div className="col-sm-auto"></div>

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
                  <strong><u>Web Developer Profile (old)</u> </strong><br />
                  Original Profile built with HTML and CSS
                </span>

                <img
                  className="responsive  mt-md-3 "
                  src="https://res.cloudinary.com/pollie/image/upload/v1631908054/profile_v31u4b.png"
                  alt="Web Developer"
                />
              </div>
            </a>
          </section>

        </div> */}
        {/* 
      <div className="row mx-1 justify-content-center">
        <section className="col-12 col-sm-5 py-1 px-0 link">

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
*/}


      </section>
      <MyWork />
    </div>
  );
};

export default WebApps;