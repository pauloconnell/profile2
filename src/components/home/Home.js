


import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './home.module.css';
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
    testing: false,
    seo: false,
    design: false,
    abTesting: false,
    meetings: false,
    cms: false,
    details: false,
  });

  const isThrottled = useRef(false);
  const homeTop = useRef(null);
  const observeElement = useRef(null);
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);

  // every time this component is reached 
  useEffect(() => {
    setIsMounted(true);
    const element = homeTop.current;
    if (element && isMounted) {
      element.classList.add(styles.transparent);

    }
    // Cleanup function to remove the class
    return () => {
      console.log("hometop", element, homeTop.current)
      if (element) {
        console.log(element.classList)
        element.classList.remove(styles.transparent);
        setIsMounted(false);
        console.log(element.classList)
      }
    };
  }, [location, isMounted]);                                             // Dependency array includes location

  // Component mounted:
  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visibleNow);

        } else {
          entry.target.classList.remove(styles.visibleNow);
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
      console.log("caught scroll, ", window.scrollY)
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
    <div className={`textAlign my-3 ${styles.backgroundFixed}`}>

      <div ref={homeTop} className={`pb-5 ${styles.homeTop}`}>
        <div className="w-75 readEasy word  m-auto my-3 animate">

          <div className={`lineHeight wordSpace mt-3 ${styles.homeMainText}`}>

            Keen problem solver experienced in all aspects of Software
            Development.
            <div className="mt-3">
              Specializing in Web Technologies including Vue 3 w/Nuxt 3 and React w/Next.
            </div>
          </div>
          <div className={` mt-5 py-5 ${styles.textShadowBlack}`}>
            {/* <div className={`${styles.hidden}`}>Coming Soon: <b>Profile V2</b> </div> */}
            <i>    Currently working as a Senior Front End Software Engineer.
              <br />Building out a green field peer-to-peer
              e-commerce platform: <br />  </i>
          </div>



        </div>

        <div

          onMouseEnter={handleHoverIn}
          onMouseLeave={handleHoverOut}
          className={`py-4 wordSpace ${styles.knowitalls} ${styles.zoomer}`}
          style={{
            transition: 'background 2.5s'
          }}
        >
          <a href="https://www.knowitalls.com" alt="knowitalls.com" target="_blank"
            rel="noreferrer" title="Click to see my work on: www.knowitalls.com" >
            {/* <span className="p-1 textShadowWhite">See My Work:</span> <br /> */}
            <b className="p-1 link">www.knowitalls.com</b></a>
          <br />

        </div>
      </div>

      {/* <div className="backgroundV2">
            <div style={{ fontSize: "150px"}}>V1 </div>
            V2 Coming soon...<br/><br/>
             |<br/>
             V<br/>
        </div> */}
      <div className=" width90  mt-5 pt-5">

        <div className="fade-in-info "
          onMouseEnter={handleHoverIn}
          onMouseLeave={handleHoverOut}
          style={{ minHeight: "420px", opacity: hovering ? 1 : 0, transition: 'opacity 2.5s ease' }}>

          <div className="width90 wordSpace" style={{ minHeight: "300px" }}>
            <div className="container-fluid">
              <div className="row">
                <h3 className=" m-auto my-3 marginTop">
                  <p className="title inlineBlock text">
                    Certified M.E.R.N. Full Stack Software Developer
                  </p>
                </h3>
              </div>
              <h4 className = "title text-center">Technologies used include:</h4>
              <div className={`mb-5 ${styles.mainTech}`} >

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"  alt="tech icon" title="AWS"/>
                <img src="https://www.svgrepo.com/show/349297/auth0.svg"  alt="tech icon" title="Auth0 authentication by Okta"/>
                

                <img className={` ${styles.enlarge}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg" alt="tech icon" title="Azure" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" alt="tech icon" title="Axios" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"  alt="tech icon" title="Bootstrap"/>

                <img className={` ${styles.enlarge}`}  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cosmosdb/cosmosdb-original-wordmark.svg"  alt="tech icon" title="CosmoDB"/>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="tech icon" title="C#" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="tech icon" title="CSS" />


                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg" alt="tech icon" title="D3.js Data Visualization" />


                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"  alt="tech icon" title="Express.js  Server side JS"/>
                <img src="https://avatars.githubusercontent.com/u/5912469?s=200&v=4" title="Exceptionless system monitoring and Error logging" alt="tech icon"   />

                

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"  alt="tech icon" title="Figma Designs"/>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" alt="tech icon" title="Git" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="tech icon" title=" GitHub" />

         
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Tag_manager_logo.png" alt="tech icon" title="Google Tag Manager" />
                

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="tech icon" title="HTML 5" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"  alt="tech icon" title="Java EE"/>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"  alt="tech icon" title="JavaScript"/>


                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"  alt="tech icon" title="Jest Unit Testing"/>


                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" alt="tech icon" title="oldSchool jQuery" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg"  alt="tech icon" title="JSON"/>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lodash/lodash-original.svg"  alt="tech icon" title="lodash"/>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg" alt="tech icon" title="Markdown" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg" alt="tech icon" title="Mocha Testing"/>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="tech icon" title="MongoDB" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" alt="tech icon" title="Mongoose" />

                <img className={` ${styles.enlarge}`}  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt="tech icon" title="Next.js" />



                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="tech icon" title="Node.js" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" alt="tech icon" title="NPM" />

                <img className={` ${styles.enlarge}`}  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original-wordmark.svg" alt="tech icon" title="Nuxt 3" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg"  alt="tech icon" title="OAuth authentication protocol"/>
                <img src="https://www.passportjs.org/images/logo.svg"  alt="tech icon" title="passport.js authentication"/>
                
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"  alt="tech icon" title="PhotoShop"/>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" alt="tech icon" title="Playwright testing" />

                <img className={` ${styles.enlarge}`}  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg" alt="tech icon" title="Postman API testing" />

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"  alt="tech icon" title="React"/>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"  alt="tech icon" title="Redux state management"/>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="tech icon" title="Sass CSS" />

                <img className={` ${styles.enlarge}`}  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original-wordmark.svg"  alt="tech icon" title="Sentry error logging"/>

                <img className={` ${styles.enlarge}`}  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original-wordmark.svg" alt="tech icon" title="Sketch designs" />

                <img className={` ${styles.enlarge}`}  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original-wordmark.svg"  alt="tech icon" title="Swagger API Documentation/testing"/>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="tech icon" title="Typescript" />



                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" alt="tech icon" title="Vue 3"/>

                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg" alt="tech icon" title="Vuetify component library" />

                <img className={` ${styles.enlarge}`}  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original-wordmark.svg" alt="tech icon" title="Webpack module bundler" />

              </div>
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
              <div className="row text-start">

                <div
                  id="fe"
                  style={{
                    color: highlightFE ? "white" : "black",
                    fontWeight: highlightFE
                      ? "bold"
                      : " normal",
                    display: highlightFE ? "block" : "none",
                  }}
                >
                  Master of modern web development with expertise in React, Vue 3, Nuxt 3, HTML, CSS, and JavaScript/TypeScript, delivering dynamic and responsive user experiences.
                  <div className='text-center my-2'>
                  <Link to="/About#certifications">Certifications</Link>
                  </div>
                  <div className="mt-4 mb-2">
                    <strong className={styles.colorBlack}>React, Redux & Next:</strong><br/>  Built dynamic, responsive, data-rich websites, applications, and user interfaces using React, Next.js, and Redux for state management and/or Context Provider for efficient simple state sharing.


                  </div>
                  <div className="my-2">
                <strong className={styles.colorBlack}>Vue3, Pinia & Nuxt3:</strong> <br/>Built dynamic, responsive, data-rich websites, applications, and user interfaces using Vue 3, Nuxt 3, and Pinia for state management, and/or  Composables for simple global state as well as reusable logic.
                </div>
                  <div className="my-2">
                  <strong className={styles.colorBlack}>HTML/CSS:</strong><br/> Expert in crafting semantic, accessible HTML and CSS for clean, visually appealing web pages.
                  </div>
                  <div className="my-2">
                  <strong className={styles.colorBlack}>JavaScript:</strong><br/> Strong proficiency in JavaScript for interactive, user-friendly applications.
                </div>
                <div className="my-2">
                <strong className={styles.colorBlack}>TypeScript:</strong><br/> Implemented robust, type-safe code with TypeScript.
                </div>
                <div className="my-2">
                <strong className={styles.colorBlack}>Node.js & Express:</strong><br/> Built scalable, Full Stack applications.
                </div>
                <div className="my-2">
                <strong className={styles.colorBlack}>Automated Testing:</strong> <br/>Ensured code reliability with Jest, Mocha, Playwright, and Testim.
                </div>
                <div className="my-2">
                <strong className={styles.colorBlack}>Bootstrap:</strong> <br/>Utilized Bootstrap for responsive, mobile-first design.
                </div>
                <div className="my-2">
                <strong className={styles.colorBlack}>jQuery:</strong><br/> Enhanced interactivity and animations of basic applications using jQuery.
                </div>
                
              
              
                <div className="my-2">
                <strong className={styles.colorBlack}>.NET Experience:</strong><br/> Familiar with RazorPages, RazorComponents, and C#.
                </div>
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
                 Seasoned backend developer proficient in Node.js, Express, MongoDB, AWS, and automated testing, delivering robust, scalable, and secure server-side solutions.
                 <div className='text-center my-2'> <Link to="/About#certifications">Certifications</Link></div>

                  <div className="mt-3 mb-2">
                    <strong className={styles.colorBlack}>Node.js</strong><br />
                    Built scalable network applications with Node.js, utilizing its event-driven model for handling high concurrency.
                  </div>
                  <div className="my-2">
                    <strong className={styles.colorBlack}>MongoDB & Mongoose</strong><br />
                    Leveraged MongoDB for flexibility and Mongoose for schema-based solutions to efficiently manage data.
                  </div>
                  <div className="my-2">
                    <strong className={styles.colorBlack}>AWS Deployment</strong><br />
                    Deployed apps on AWS using services like EC2 and S3, ensuring robust and scalable server environments.
                  </div>
                  <div className="my-2">
                    <strong className={styles.colorBlack}>Express Server</strong><br />
                    Developed RESTful APIs with Express.js, focusing on secure and efficient routing and middleware.
                  </div>
                  <div className="my-2">
                    <strong className={styles.colorBlack}>
                      D3.js</strong><br />
                    Created interactive data visualizations with D3.js for insightful data representation.
                  </div>
                  <div className="my-2">
                    <strong className={styles.colorBlack}>
                      Passport & OAuth</strong><br />
                    Implemented user authentication with Passport, integrating OAuth for third-party logins.
                  </div>
                  <div className="my-2">
                    <strong className={styles.colorBlack}>
                      Pug (Jade) Template Engine</strong><br />
                    Used Pug for server-side templating, creating maintainable and dynamic HTML templates.
                  </div>
                  <div className="my-2">
                    <strong className={styles.colorBlack}>
                      Testing with Jest, Mocha, Chai, Playwright, and Testim</strong><br />
                    Ensured code reliability with Jest, Mocha, and Chai, and automated tests with Playwright and Testim.
                  </div>
                  <div className="my-2">
                    <strong className={styles.colorBlack}>
                      Nuxt 3 and Vue 3 for Hybrid SSR</strong><br />
                    Refactored pages for hybrid SSR with Nuxt 3 and Vue 3, improving SEO with pre-rendering.

                  </div>
                </div>
              </div>
              <br />

              <div className="row"
                style={{
                  color: highlightFE ? "black" : "black",
                  fontWeight: highlightFE
                    ? "normal"
                    : " normal",

                }}
              >
                <hr></hr>
                <br></br>
                <div className="my-3 title" style={{ color: "black", textShadow: '1px 1px 3px white' }}>Experience:</div>
                <ul ref={observeElement} className={styles.observeElement} style={{ textAlign: "center", listStyleType: "none" }}>
                  <li>
                    <button className="link" onClick={() => toggleVisibility('dev')} title="Click to see details">
                      Software Developer
                    </button>
                    {visible.dev && (
                      <p className="text-start">
                        Proficient in developing responsive, pixel perfect, user friendly websites and web applications using HTML, CSS, JavaScript, Vue 3 w/ Nuxt, as well as React w/ Next.
                      </p>
                    )}
                  </li>
                  <li>
                    <button className="link" onClick={() => toggleVisibility('git')} title="Click to see details">
                      Version Control and Git Branching Strategies
                    </button>
                    {visible.git && (
                      <p className="text-start">
                        Proficient in feature branching, hotfixes, release branches, managing pull requests, conducting code reviews, and deploying changes in production environments using Git, GitHub, and Azure.
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
                        Delivering data-rich content with reactive data, interfacing with backend teams, and using Postman and Swagger to build out API connections.
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
                        Setting up GTM and interfacing with Google Analytics, implementing dynamic SEO tags, and optimizing website performance and loading times.
                      </p>
                    )}
                  </li>
                  <li>
                    <button className="link" onClick={() => toggleVisibility('abTesting')} title="Click to see details">
                      Marketing Collaboration
                    </button>
                    {visible.abTesting && (
                      <p className="text-start">
                        Assisting the Marketing team with A/B testing using Google Analytics to optimize campaign performance and improve user engagement.
                      </p>
                    )}
                  </li>
                  <li>
                    <button className="link" onClick={() => toggleVisibility('meetings')} title="Click to see details">
                      Meeting Contributions
                    </button>
                    {visible.meetings && (
                      <p className="text-start">
                        As the champion managing the Kanban board and backlog, I regularly share my screen for daily scrum, and make positive contributions to weekly meetings with the development team, design team, managers, C-suite executives, and clients by providing valuable insights, feedback, and solutions.
                      </p>
                    )}
                  </li>
                  <li>
                    <button className="link" onClick={() => toggleVisibility('testing')} title="Click to see details">
                      Testing and monitoring
                    </button>
                    {visible.testing && (
                      <p className="text-start">
                        Utilized Test-Driven Development (TDD) with Jest, implemented automated nightly and CI/CD testing using Testim, and integrated Exceptionless for monitoring and alerting.
                      </p>
                    )}
                  </li>
                  <li>
                    <button className="link" onClick={() => toggleVisibility('cms')} title="Click to see details">
                      Content Management System (CMS)
                    </button>
                    {visible.cms && (
                      <p className="text-start">
                        Implemented an in-house built CMS, enabling stakeholders to make simple content changes independently, without requiring the involvement of the development team.
                      </p>
                    )}
                  </li>
                </ul>
              </div>


              <br />
              <div className="row"
                style={{
                  color: highlightBE ? "white" : "black",
                  fontWeight: highlightBE
                    ? "bold"
                    : " normal",
                  display: highlightBE ? "block" : "none",
                }}
              >
                <strong className={styles.colorBlack}>Current project:</strong> Utilizing Node.js with Vue 3 and Nuxt 3, leveraging <b className="textShadow">hybrid SSR </b> capabilities.<br />
                Other Technologies in use include .NET backend with Azure Pipelines, CosmosDB, Exceptionless, and Testim.

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
              <div className="row"
                style={{
                  color: highlightFE ? "white" : "black",
                  fontWeight: highlightFE
                    ? "bold"
                    : " normal",
                  display: highlightFE ? "block" : "none",
                }}
              >
                Currently adding cutting-edge features like <b className="textShadow">hybrid SSR </b> to our full featured
                peer to peer e-commerce platform.
              </div>



              <div className="row" style={{
                color: highlightFE ? "white" : "black",
                fontWeight: highlightFE
                  ? "bold"
                  : " normal",
                display: highlightFE ? "block" : "none",
              }}>
                <br />
                <div className={`py-4 ${styles.knowitalls}`}  > <a className="link p-1" href="https://www.knowitalls.com" alt="knowitalls.com" target="_blank"
                  rel="noreferrer" title="Click to see my work at: www.knowitalls.com" >www.knowitalls.com</a>


                </div>
              </div>
              <div className="row">
                <div className="my-2">
                  <div className="text-center">
                    <button className="link" onClick={() => toggleVisibility('details')} title="Click to see details">
                      Click to see Technologies used:
                    </button>
                  </div>
                </div>


              </div>
              <ul className={`pt-4 readEasy w-75 mx-auto ${styles.hidden} ${visible.details ? `${styles.transition}` : styles.shrink}`} style={{ textAlign: "left", listStyleType: "none" }}>
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



      <p
        title="Click any of the options below:"
        className=" pt-5 mt-5 title readEasy inlineBlock width "
      >
        See My work:
      </p>

    </div>


  );
}

export default Home;