


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UnorderedList from './UnorderedList';
import MyWork from './links/MyWork';
import DynamicData from './DynamicData';
import styles from '../App.css';
//import ReactTooltip from 'react-tooltip';




const dependenciesArray = [
  "express - middleware for the node server",
  "react - for generating the views of the app",
  "react-dom - powers the rendering of elements to the DOM, with React",
  "webpack - for bundling all the javascript",
  "webpack-cli - command line support for webpack",
  "jsx-loader - allows webpack to load jsx files",
  "react-router-dom - handles routing!",
  "css-loader - allows webpack to load css files",
  "bootstrap 5 - classic CSS library",
];

const componentsMade = [
  "Profile- which is the view you are seeing now",
  'UnorderedList - which takes an array of "items" and returns a <ul> element with <li>, elements of each of those items within it',
  "About -About Me",
];

/* the main page for the index route of this app */

function Home() {

  const [showThis, setShowThis] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [highlightFE, setHighlightFE] = useState(true);
  const [highlightBE, setHighlightBE] = useState(false);




  // const handleClick = () => {
  //   setShowThis: !showThis;

  // }

  const handleHoverFE = () => {


    setHighlightFE(true);
    setHighlightBE(false);



  }

  const handleHoverBE = () => {

    setHighlightFE(false);
    setHighlightBE(true);

  }

  // this shows/hides details on home page PROFILE
  const handleHoverIn = () => {

    setHovering(true);

    //document.getElementById("showOnHover").classList.delete("hidden");
    //document.getElementById("showOnHover").classList.add("show");
  }

  const handleHoverOut = () => {
    setHovering(false);
  }

  // componentDidMount() {
  //   window.scrollTo(0, 0);
  // }
  useEffect(() => {
    //console.log('Component did mount');
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="textAlign my-3">
      <div className="">
        <div className="width90 readEasy word    m-auto my-3 animate">
          <i>
            <div className="lineHeight wordSpace ">
              Coming Soon: React Profile V2 Oct 2024 <br/>
              Keen problem solver experienced in all aspects of Software
              Development, specializing in Web Technologies.
            </div>
            <div className="fade-in-info ">
              Currently working as Front End Software Developer
              for a green field start up where we are building a peer-to-peer
              e-commerce platform. <br/>   </div><a href="https://www.knowitalls.com" alt="knowitalls.com"  target="_blank"
              rel="noreferrer" >www.knowitalls.com</a>
          
          </i>
        </div>
        {/* <div className="backgroundV2">
            <div style={{ fontSize: "150px"}}>V1 </div>
            V2 Coming soon...<br/><br/>
             |<br/>
             V<br/>
        </div> */}
        <div className=" width90 fade-in-info">
          <div className=" m-auto my-3 marginTop">
            <p className="title inlineBlock text">
              Certified M.E.R.N. Full Stack Software Developer
            </p>
          </div>
          <div
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            style={{ minHeight: "420px" }}
          >
            <div className=" width90 ">
              <div className="wordSpace" style={{ minHeight: "300px" }}>
                <div className="container-fluid">
                  <div className="row ">
                    <div className="text-center fs-2">Tech Stack:</div>
                  </div>
                  <div className="row">
                    <span
                      className="col fs-3 link"
                      style={{
                        color: highlightFE ? "blue" : "black",
                      }}
                      onClick={handleHoverFE}
                    >
                      FrontEnd
                    </span>
                    <span
                      className="col fs-3 link"
                      style={{
                        color: highlightBE ? "white" : "black",
                      }}
                      onClick={handleHoverBE}
                    >
                      BackEnd
                    </span>
                  </div>
                  <br />
                  <div className="row ">
                    <span className="text-center">
                      <span
                        id="fe"
                        style={{
                          color: highlightFE ? "white" : "black",
                          fontWeight:highlightFE
                            ? "bold"
                            : " normal",
                          display: highlightFE ? "block" : "none",
                        }}
                      >
                       Certifications: React, HTML, CSS, JavaScript, Bootstrap, jQuery, Vue3, Nuxt3, TypeScript, Node.js, Express, automated testing (Jest, Mocha, PlayWright, TestIms). Specialized in JavaScript/TypeScript, with experience in .NET (RazorPages, RazorComponents, C#).
                      </span>
                      <br />
                      <span
                        id="be"
                        style={{
                          color: highlightBE ? "white" : "black",
                          fontWeight: highlightBE
                            ? "bold"
                            : " normal",
                          display: highlightBE ? "block" : "none",
                        }}
                      >
                        Back End Certifications include:  Node, MongoDB, Mongoose, DataBases
                        deployed on AWS, Express Server, D3, Passport, OAuth,
                        Pug(Jade) template engine, testing w/ Jest Mocha Chai
                        PlayWright and TestIms. 
                        Recently refactored multiple pages for hybrid SSR to get great SEO results with Nuxt 3 and Vue 3.
                      </span>
                      <br />
                      <span
                        style={{
                          color: highlightFE ? "white" : "black",
                          fontWeight: highlightFE
                            ? "bold"
                            : " normal",
                          display: highlightFE ? "block" : "none",
                        }}
                      >
                        Experience:
                        <ul style={{ textAlign: "left" }}>

                          <li>Proficient in Git branching strategies, including feature branching, hotfixes, release branches, managing pull requests, conducting code reviews, and landing changes in production environments.</li>
                          <li>Extensive use of Azure DevOps for sprint planning, daily standups, and using Azure Kanban boards.</li>
                          <li>Interfacing with backend teams using Postman and Swagger for building and testing API connections.</li>
                          <li>Collaborating with design team through Sketch and Figma</li>
                          <li>Assisting the marketing team with a b testing using Google Analytics and GTM.</li>
                          <li>Positive Contributions to daily and weekly meetings </li>
                        </ul>
                      </span>
                      <br />
                      <span
                        style={{
                          color: highlightBE ? "white" : "black",
                          fontWeight: highlightBE
                            ? "bold"
                            : " normal",
                          display: highlightBE ? "block" : "none",
                        }}
                      >
                        Current project: Using Node.js, Nuxt 3 gives full-stack features like amazing hybrid SSR.
                        Using:  .Net, Azure Pipelines, CosmoDB, exceptionless and Testims.
                      
                        <span
                          style={{
                            color: highlightFE ? "blue" : "black",
                            fontWeight: highlightFE
                              ? "bold"
                              : " normal",
                            display: highlightFE
                              ? "block"
                              : "none",
                          }}
                        >
                          &nbsp; Azure devops.
                        </span>
                      </span>
                      <br />
                      <span
                        style={{
                          color: highlightFE ? "white" : "black",
                          fontWeight: highlightFE
                            ? "bold"
                            : " normal",
                          display: highlightFE ? "block" : "none",
                        }}
                      >
                        Currently adding cutting edge features like hybrid SSR to our fully built out
                        peer to peer e-commerce platform. 
                        </span>

                      <div style={{
                        color: highlightFE ? "white" : "black",
                        fontWeight: highlightFE
                          ? "bold"
                          : " normal",
                        display: highlightFE ? "block" : "none",
                      }}>
                        <br /> 
                        <div style={{background: 'black', borderRadius:'8px'}} > <a href="https://www.knowitalls.com" alt="knowitalls.com" target="_blank"
                          rel="noreferrer" >www.knowitalls.com</a>
                          <br />
                        utilizes:
                        </div>
                        <ul style={{ textAlign: "left" }}>
                          <li>
                            Payment integration with <b>Stripe</b>
                          </li>
                          <li>
                          Video integration with <b> WhereBy</b>
                          </li>
                          <li>
                          Chat messaging - <b>built in house</b>
                          </li>
                          <li>
                          2 sided booking calander - <b>built in house</b>
                          </li>
                          <li>
                           <b> Auth0</b> authentication to guard secure pages
                          </li>
                          <li>
                          <b>Access Tokens</b> in request Headers to secure relevant API calls
                          </li>
                        </ul>
                        </div>
                      {/**
                        <span
                          style={{
                            color: this.state.highlightBE ? "white" : "black",
                            fontWeight: this.state.highlightBE
                              ? "bold"
                              : " normal",
                            display: this.state.highlightBE ? "block" : "none",
                          }}
                        ></span>

                        <span
                          style={{
                            color: this.state.highlightFE ? "blue" : "black",
                            fontWeight: this.state.highlightFE
                              ? "bold"
                              : " normal",
                            display: this.state.highlightFE ? "block" : "none",
                          }}
                        >


                          Pinia state management.
                        </span>
                        **/}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p
          title="Click any of the options below:"
          className="title readEasy inlineBlock width marginTop"
        >
          See My work:
        </p>
      </div>

      <MyWork className="mb-3" />
{/* 
     <DynamicData data="isHere" />
*/}


      <div className="textAlign">
        <span className="inlineBlock">
          <button
            title="Click button to show details"
            type="button"
            className="btn btn-success my-3"
            onClick={(e) => setShowThis(!showThis)}
          >
            about this app
          </button>
          <br />

          {showThis ? (
            <div className="expandingReadable">
              This profile app was built by Paul O'Connell using React and
              node.js <br />
              It uses a few dependencies, including React router and:
              <UnorderedList items={dependenciesArray} />
            </div>
          ) : (
            <span className="expandingReadable fade-in-info">
              `Click above button to show details about this app.`
            </span>
          )}
        </span>
      </div>
    </div>
  );
}

export default Home;