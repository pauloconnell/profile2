


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import UnorderedList from '../UnorderedList';
import MyWork from '../links/MyWork';
//import DynamicData from './DynamicData';
//import styles from '../App.css';
//import ReactTooltip from 'react-tooltip';




const dependenciesArray = [
  "suspense - allows for lazy loading of components",
  "gh-pages - builds and deploys app to gitHub Pages",
  "react - for generating the views of the app",
  "react-dom - powers the rendering of elements to the DOM, with React",
  "webpack - for bundling all the javascript",
  "react-router-dom - handles routing and ",
  "bootstrap 5 - classic CSS library",
];

// const componentsMade = [
//   "Profile- which is the view you are seeing now",
//   'UnorderedList - which takes an array of "items" and returns a <ul> element with <li>, elements of each of those items within it',
//   "About -About Me",
// ];

/* the main page for the index route of this app */

function Home() {

  const [showThis, setShowThis] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [highlightFE, setHighlightFE] = useState(true);
  const [highlightBE, setHighlightBE] = useState(false);
  const [visible, setVisible] = useState({
    dev: false,
    git: false,
    azure: false,
    api: false,
    seo: false,
    design: false,
    abTesting: false,
    meetings: false,
    details: false,
  });
  
  const isThrottled = useRef(false);

  const observeElement = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visibleNow');
        
        } else {
          entry.target.classList.remove('visibleNow');
        }
      });
    });

    if (observeElement.current) {
      const items = observeElement.current.querySelectorAll('li');
      items.forEach((item) => observer.observe(item));
    }
  

    return () => {
      if (observeElement.current) {
        const items = observeElement.current.querySelectorAll('li');
        items.forEach((item) => observer.unobserve(item));
      }
      
    };
  }, []);


  const toggleVisibility = (key) => {
    setVisible((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

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


  const handleScroll = () => {                                      // make 'hidden' details section appear if user scrolls down past 350px
    
    if (!isThrottled.current) {
      console.log("caught scroll, ",window.scrollY)
      if (window.scrollY > 100) { 
       // console.log("are we ever here?")
        setHovering(true);
      } else {
        
      }
      isThrottled.current = true;
      setTimeout(() => {
        isThrottled.current = false;
      }, 1000); // 0.5 seconds timeout
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {                                                // cleanup fn() on unMount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);                                                       // empty array makes it only run once when mounted



  // useEffect(() => {
  //   //console.log('Component did mount');
  //   window.scrollTo(0, 0);
  // }, []);


  return (
    <div className="textAlign my-3">
      <div className="">
        <div className="width70 readEasy word  m-auto my-3 animate">
          
            <div className="lineHeight wordSpace ">
             
              Keen problem solver experienced in all aspects of Software
              Development, specializing in Web Technologies.
            </div>
            <div className=" mt-3 my-3">
            <div className="hidden">Coming Soon: <b>Profile V2</b> </div>
          <i>    Currently working as a Senior Front End Software Engineer. 
            <br/>Building out a green field peer-to-peer
              e-commerce platform: <br />  </i>
               </div>
           

          
        </div>
    
          <div

            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            className="py-4 mx-auto wordSpace zoomer"
            style={{
              width: "300px",
              borderRadius: '8px',
              transition: 'background 2.5s'
            }}
          >
            <a href="https://www.knowitalls.com" alt="knowitalls.com" target="_blank"
              rel="noreferrer" title="Click to see my work on: www.knowitalls.com" >
              {/* <span className="p-1 textShadowWhite">See My Work:</span> <br /> */}
              <b className="p-1 link">www.knowitalls.com</b></a>
            <br />

          </div>
      
        {/* <div className="backgroundV2">
            <div style={{ fontSize: "150px"}}>V1 </div>
            V2 Coming soon...<br/><br/>
             |<br/>
             V<br/>
        </div> */}
        <div className=" width70  mt-3">
          <h3 className=" m-auto my-3 marginTop">
            <p className="title inlineBlock text">
              Certified M.E.R.N. Full Stack Software Developer
            </p>
          </h3>
          <div className="fade-in-info "
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
            style={{ minHeight: "420px", opacity: hovering ? 1 : 0, transition: 'opacity 2.5s ease' }}> 
            <div className=" width70 ">
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
                      title="Click to see FrontEnd details"
                    >
                      FrontEnd
                    </span>
                    <span
                      className="col fs-3 link"
                      style={{
                        color: highlightBE ? "white" : "black",
                      }}
                      onClick={handleHoverBE}
                      title="Click to see BackEnd details"
                    >
                      BackEnd
                    </span>
                  </div>
                  <br />
                  <div className="row ">
                    <div className="text-start">
                      <div
                        id="fe"
                        style={{
                          color: highlightFE ? "white" : "black",
                          fontWeight:highlightFE
                            ? "bold"
                            : " normal",
                          display: highlightFE ? "block" : "none",
                        }}
                      >
                       <Link to="/About#certifications">Certifications</Link>: React, HTML, CSS, JavaScript, Bootstrap, jQuery, Vue3, Nuxt3, TypeScript, Node.js, Express, automated testing (Jest, Mocha, PlayWright, TestIms). 
                       <br/>
                       Specialized in JavaScript/TypeScript, with experience in .NET (RazorPages, RazorComponents, C#).
                      </div>
                      <br />
                      <div
                        id="be"
                        style={{
                          color: highlightBE ? "white" : "black",
                          fontWeight: highlightBE
                            ? "bold"
                            : " normal",
                          display: highlightBE ? "block" : "none",
                        }}
                      >
                        Back End <Link to="/About#certifications">Certifications</Link> include:  Node, MongoDB, Mongoose, DataBases
                        deployed on AWS, Express Server, D3, Passport, OAuth,
                        Pug(Jade) template engine, testing w/ Jest Mocha Chai
                        PlayWright and TestIms. 
                        Recently refactored multiple pages for hybrid SSR to get great SEO results with Nuxt 3 and Vue 3.
                      </div>
                      <br />
                      <div
                        style={{
                          color: highlightFE ? "white" : "black",
                          fontWeight: highlightFE
                            ? "bold"
                            : " normal",
                          display: highlightFE ? "block" : "none",
                        }}
                      >
                        Experience:
                        <ul ref={observeElement} className="observe-element" style={{ textAlign: "center", listStyleType: "none" }}>
                        <li>
                            <button className="link" onClick={() => toggleVisibility('dev')} title="Click to see details">
                              Software Developer
                            </button>
                            {visible.dev && (
                              <p className="text-start">
                                Proficient in Development of responsive, pixel perfect, user friendly websites and web applications.
                              </p>
                            )}
                          </li>
                          <li>
                            <button className="link" onClick={() => toggleVisibility('git')} title="Click to see details">
                              Version Control and Git Branching Strategies
                            </button>
                            {visible.git && (
                              <p className="text-start">
                                Proficient in feature branching, hotfixes, release branches, managing pull requests, conducting code reviews, and landing changes in production environments.
                              </p>
                            )}
                          </li>
                          <li>
                            <button className="link" onClick={() => toggleVisibility('azure')} title="Click to see details">
                              Azure DevOps
                            </button>
                            {visible.azure && (
                              <p className="text-start">
                                Extensive use of Azure DevOps for sprint planning, daily standups, and utilizing Azure Kanban boards.
                              </p>
                            )}
                          </li>
                          <li>
                            <button className="link" onClick={() => toggleVisibility('api')} title="Click to see details">
                              API Integration
                            </button>
                            {visible.api && (
                              <p className="text-start">
                                Delivering data rich content with reactive data, Interfacing with backend teams using Postman and Swagger to build out API connections.
                              </p>
                            )}
                          </li>
                          <li>
                            <button className="link" onClick={() => toggleVisibility('design')} title="Click to see details">
                              Design Collaboration
                            </button>
                            {visible.design && (
                              <p className="text-start">
                               Developing pixel perfect code from both rough wireframes as well as collaborating closely with the design team using Sketch and Figma to ensure a seamless and visually appealing user experience.
                              </p>
                            )}
                          </li>
                          <li>
                            <button className="link" onClick={() => toggleVisibility('seo')} title="Click to see details">
                              SEO, GTM, Google Analytics, and Performance Optimization
                            </button>
                            {visible.seo && (
                              <p className="text-start">
                                Set up GTM and interface with Google Analytics, Dynamic SEO tags and optimizing website performance and loading times.
                              </p>
                            )}
                          </li>
                          <li>
                            <button className="link" onClick={() => toggleVisibility('abTesting')} title="Click to see details">
                              Marketing Collaboration
                            </button>
                            {visible.abTesting && (
                              <p className="text-start">
                                Assisting the Marketing team with A/B testing using Google Analytics.
                              </p>
                            )}
                          </li>
                          <li>
                            <button className="link" onClick={() => toggleVisibility('meetings')} title="Click to see details">
                              Meeting Contributions
                            </button>
                            {visible.meetings && (
                              <p className="text-start">
                                Making positive contributions to daily and weekly meetings with the dev team, design team, managers, C-suite executives, and clients, by providing valuable insights, feedback, and solutions.
                              </p>
                            )}
                          </li>
                        </ul>
                      </div>
                      <br />
                      <div
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
                      
                        <div
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
                        </div>
                      </div>
                      <br />
                      <div
                        style={{
                          color: highlightFE ? "white" : "black",
                          fontWeight: highlightFE
                            ? "bold"
                            : " normal",
                          display: highlightFE ? "block" : "none",
                        }}
                      >
                        Currently adding cutting edge features like <b className="textShadow">hybrid SSR </b> to our fully built out
                        peer to peer e-commerce platform. 
                        </div>

                      <div  style={{
                        color: highlightFE ? "white" : "black",
                        fontWeight: highlightFE
                          ? "bold"
                          : " normal",
                        display: highlightFE ? "block" : "none",
                      }}>
                        <br /> 
                        <div className="py-4 text-center" style={{background: 'black', borderRadius:'8px'}} > <a className="link p-1" href="https://www.knowitalls.com" alt="knowitalls.com" target="_blank"
                          rel="noreferrer" title="Click to see my work at: www.knowitalls.com" >www.knowitalls.com</a>
                          
                       
                        </div>
                        <div className="my-2">
                          <div className="text-center">
                            <button className="link" onClick={() => toggleVisibility('details')} title="Click to see details">
                              Details of Technologies used:
                            </button>
                          </div>
                        </div>

                            {visible.details && (
                             
                            
                        <ul className="pt-4" style={{ textAlign: "left", listStyleType: "none" }}>
                          <li>
                            Payment integration with <b className="textShadow">Stripe</b>
                          </li>
                          <hr />
                          <li>
                          Video integration with <b className="textShadow"> WhereBy</b>
                          </li>
                          <hr />
                          <li>
                          Chat messaging - <b className="textShadow">built in house</b>
                          </li>
                          <hr />
                          <li>
                          2 sided booking calander - <b className="textShadow">built in house</b>
                          </li>
                          <hr />
                          <li>
                           <b className="textShadow"> Auth0</b> authentication to guard secure pages
                          </li>
                          <hr />
                          <li>
                          <b className="textShadow">Access Tokens</b> in request Headers to secure relevant API calls
                          </li>
                          <hr />
                          <li>
                          API Error handling with <b className="textShadow">Toast</b>s
                          </li>
                          <hr />
                          <li>
                          <b className="textShadow">Exceptionless</b> error monitoring and logging
                          </li>
                          <hr />
                          <li>
                          <b className="textShadow">Testims</b> automated nightly and CI/CD testing
                          </li>
                        </ul>
                        )}

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
                    </div>
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
              It has some neat features, including :
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