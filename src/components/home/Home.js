


import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './home.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

//import UnorderedList from '../UnorderedList';
//import MyWork from '../links/MyWork';

//import DynamicData from './DynamicData';
//import styles from '../App.css';
//import ReactTooltip from 'react-tooltip';





/* the main page for the index route of this app */

function Home() {


  const [hovering, setHovering] = useState(false);
  const [highlightFE, setHighlightFE] = useState(true);
  const [highlightBE, setHighlightBE] = useState(false);
  const [visible, setVisible] = useState({

    //Front End
    react: false,
    vue: false,
    htmlCss: false,
    javascript: false,
    typescript: false,
    nodeExpress: false,
    testingFE: false,
    bootstrap: false,
    jquery: false,
    dotnet: false,

    //BackEnd
    node: false,
    mongo: false,
    aws: false,
    express: false,
    d3: false,
    passport: false,
    auth0: false,
    pug: false,
    testingBE: false,
    nuxt: false,
    //experience
    dev: false,
    git: false,
    azure: false,
    api: false,
    testingExperience: false,
    seo: false,
    performance: false,
    design: false,
    abTesting: false,
    meetings: false,
    cms: false,
    ssr: false,
    details: false,


  });

  const isThrottled = useRef(false);
  const homeTop = useRef(null);
  const observeElement = useRef(null);
  const observeElement2 = useRef(null);                                 // removed class ${styles.observeElement} to turn off effect for debugging
  const location = useLocation();
  const [isMounted, setIsMounted] = useState(false);

  // initially renders with blacked out background and fades in
  useEffect(() => {

    const element = homeTop.current;                                      // this is ref to main div on page
    if (element) {
      setIsMounted(true);
      element.classList.add(styles.transparent);                          // this creates the effect of being black background on page load, then transition to image background

    }
    // Cleanup function to remove the class
    return () => {
      // console.log("hometop", element, homeTop.current)
      if (element) {
        //console.log(element.classList)
        element.classList.remove(styles.transparent);

        //console.log(element.classList)
      }
    };
  }, [location, isMounted]);                                             // Dependency array includes location




  //   // Component mounted, set up intersection observer to flip links on initial view
  //   useEffect(() => {
  //     setIsMounted(true);

  //     const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //         // console.log("observer triggered ", entry.target)
  //         if (entry.isIntersecting && entry.intersectionRatio === 1) {
  //           //  setTimeout(() => {
  //           entry.target.classList.add(styles.visibleNow);
  //           observer.unobserve(entry.target);
  //           console.log("observed and remove element", entry.target)
  //           //entry.target.classList.remove(styles.visibleNow)
  //           //     }, 300);


  //         } //else {
  //         //   //   setTimeout(()=>{
  //         //   entry.target.classList.remove(styles.visibleNow);
  //         //   //   },300);
  //         // }
  //       });
  //     }, {
  //       root: null,
  //       rootMargin: '-5% 0px -5% 0px',
  //       threshold: 1
  //     });

  //     const items = [[], []];
  //    // setTimeout(() => {


  //     if (observeElement2.current) {
  //       const listItems2 = Array.from(observeElement2.current.querySelectorAll('li'));
  //       items[1] = listItems2;
  //       console.log("l2 = ", items[1])
  //       items[1]?.forEach((item) => observer.observe(item));
  //     }
  //   //},400);


  //  // setTimeout(() => {
  //     if (observeElement.current) {
  //       const listItems1 = Array.from(observeElement.current.querySelectorAll('li'));
  //       items[0] = listItems1;
  //       console.log("l1 = ", items[0])
  //       items[0]?.forEach((item) => observer.observe(item));
  //     }

  //  // },400);

  //     return () => {                                                              // unmount
  //       if (items[0].length > 0 ){  //this element may be gone when this runs -> observeElement.current) {

  //         console.log("Unmounting items[0]:", items[0]);
  //         items[0]?.forEach((item) => observer.unobserve(item));
  //       }
  //       if (items[1].length > 0 ){ // this element may be gone when this runs -> observeElement2.current) {

  //         console.log("Unmounting items[1]:", items[1]);
  //         items[1]?.forEach((item) => observer.unobserve(item));
  //       }
  //       observer.disconnect();

  //     };
  //   }, []);                                                                   // Empty dependency array ensures it runs once on mount


  useEffect(() => {
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });              // Scroll to top of the page
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: false, // Optional: animate only once
      offset: 30
    });
  }, []);

  const toggleVisibility = (key) => {
    setVisible((prevState) => ({                                              // toggle visibility for selected key of visible ref
      ...prevState,
      [key]: !prevState[key],
    }));
  };


  const handleClickFE = () => {


    setHighlightFE(true);
    setHighlightBE(false);



  }

  const handleClickBE = () => {

    setHighlightFE(false);
    setHighlightBE(true);

  }

  // this shows/hides details on home page PROFILE
  const handleHoverIn = () => {

    if (!hovering) setHovering(true);

    //document.getElementById("showOnHover").classList.delete("hidden");
    //document.getElementById("showOnHover").classList.add("show");
  }

  const handleHoverOut = () => {
    if (window.innerWidth > 920 && hovering) {
      setHovering(false);                                               // tablets and smaller screens should not have hover fade-in effect
    }

  }

  const hoveringRef = useRef(hovering);                                 // pattern to set up use effect to add event listener once on load -> useRef so useEffect doesn't get stale 'hovering' state


  useEffect(() => {
    if (window.innerWidth < 920) {
      if (!hoveringRef) setHovering(true);                                                    // tablets and smaller screens should not have hover fade-in effect - just always shows content 
    }
  }, [])


  useEffect(() => {
    hoveringRef.current = hovering;
  }, [hovering]);

  const handleScroll = () => {                                      // make 'hidden' details section appear if user scrolls down past 1350px

    if (!isThrottled.current) {
      // console.log("caught scroll, ", window.scrollY)
      if (window.scrollY > 1250) {

        if (!hoveringRef.current) setHovering(true);

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
    <div className={`textAlign mt-3 ${styles.backgroundFixed}`}>

      <section ref={homeTop} className={` ${styles.homeTop} mb-4`}>
        <div className="w-75 readEasy word  mx-auto mt-5 pt-5 mb-3 ">

          <div className={`lineHeight wordSpace mt-5 mx-auto greyBackground ${styles.homeMainText}`}>
            Senior Front-End Developer | Certified Full Stack<br />
            Building scalable, tested systems with React, Next.js, Vue, Nuxt & TypeScript<br />
            Node.js, Express, MongoDB & DevOps, CI/CD expertise


          </div>
          <div className={` mt-5 pt-5 ${styles.textShadowBlack}`}>
            {/* <div className={`${styles.hidden}`}>Coming Soon: <b>Profile V2</b> </div> */}
            <i>    Currently working as a <span data-testid="SnFE" className="hot">Senior Front End Software Engineer</span> @
            </i>
          </div>



        </div>

        <div

          onMouseEnter={handleHoverIn}
          onMouseLeave={handleHoverOut}
          className={`py-4 wordSpace ${styles.knowitalls} ${styles.zoomer} `}
         

        >
          <a href="https://www.knowitalls.com" alt="knowitalls.com" target="_blank"
            rel="noreferrer" title="Click to see my work on: www.knowitalls.com" >
            {/* <span className="p-1 textShadowWhite">See My Work:</span> <br /> */}
            <b className=" link"  style={{ padding: hovering ? '20px' : '16px', transition: 'padding .5s ease' }}>www.knowitalls.com</b></a>
          <br />

        </div>


        <div className={styles.arrow} >
          <svg className="scroll-arrow" width="30" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="45"></line>
            <polyline points="19 38 12 45 5 38"></polyline>
          </svg>
        </div>
      </section>

      {/* <div className="backgroundV2">
            <div style={{ fontSize: "150px"}}>V1 </div>
            V2 Coming soon...<br/><br/>
             |<br/>
             V<br/>
        </div> */}

      <section data-aos="flip-left" className={` ${styles.hero}   readEasy lineHeight wordSpace p-1 ms-1 ms-md-3  ms-lg-5  rounded mt-5 ${styles.heroCustomMargin}`}>
        <p className="m-1">Focused on developing pixel-perfect responsive software with today's top Full Stack Frameworks.
        </p>
      </section>


      <section className={` ${styles.heroRight} readEasy lineHeight wordSpace p-1 me-3 rounded mt-5 mx-xxl-auto`}>
        <div className={`${styles.overlay}`}>
          <p data-aos="flip-right">
            "I <strong> love </strong> building state-of-the-art,  data-rich, intuitive software,<br /> solving complex problems, debugging issues,  and upgrading or maintaining legacy codebases."
          </p>
        </div>
      </section>

      <section className=" width90  mt-5 pt-5">

        <div className="fade-in-info "
          onMouseEnter={handleHoverIn}
          onMouseLeave={handleHoverOut}
          style={{ minHeight: "420px", opacity: hovering ? 1 : 0, transition: 'opacity 2.5s ease' }}>

          <div className="width90 wordSpace container-fluid" style={{ minHeight: "300px" }}>


            <h3 className=" m-auto my-3 marginTop">
              <p data-aos="zoom-in" className="title inlineBlock text hot fs-2">
                Certified M.E.R.N. Full Stack Software Developer
              </p>
            </h3>

            <h4 className="title text-center fs-2">Technologies used include:</h4>
            <div className={`mb-5 ${styles.mainTech}`} >

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="tech icon" title="AWS" />
              <img src="https://www.svgrepo.com/show/349297/auth0.svg" alt="tech icon" title="Auth0 authentication by Okta" />


              <img className={` ${styles.enlarge}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg" alt="tech icon" title="Azure" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg" alt="tech icon" title="Axios" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" alt="tech icon" title="Bootstrap" />

              <img className={` ${styles.enlarge}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cosmosdb/cosmosdb-original-wordmark.svg" alt="tech icon" title="CosmoDB" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="tech icon" title="C#" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" alt="tech icon" title="CSS" />


              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/d3js/d3js-original.svg" alt="tech icon" title="D3.js Data Visualization" />


              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="tech icon" title="Express.js  Server side JS" />
              <img src="https://avatars.githubusercontent.com/u/5912469?s=200&v=4" title="Exceptionless system monitoring and Error logging" alt="tech icon" />



              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="tech icon" title="Figma Designs" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" alt="tech icon" title="Git" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" alt="tech icon" title=" GitHub" />


              <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Tag_manager_logo.png" alt="tech icon" title="Google Tag Manager" />


              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" alt="tech icon" title="HTML 5" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" alt="tech icon" title="Java EE" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="tech icon" title="JavaScript" />


              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" alt="tech icon" title="Jest Unit Testing" />


              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original-wordmark.svg" alt="tech icon" title="oldSchool jQuery" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" alt="tech icon" title="JSON" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/lodash/lodash-original.svg" alt="tech icon" title="lodash" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg" alt="tech icon" title="Markdown" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg" alt="tech icon" title="Mocha Testing" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="tech icon" title="MongoDB" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original-wordmark.svg" alt="tech icon" title="Mongoose" />

              <img className={` ${styles.enlarge}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" alt="tech icon" title="Next.js" />



              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="tech icon" title="Node.js" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" alt="tech icon" title="NPM" />

              <img className={` ${styles.enlarge}`} src={`/profile2/nuxtLogo.svg`} alt="tech icon" title="Nuxt 3" />
              <img src={`/profile2/images/openAI.png`} style={{ width: "85px" }} alt="tech icon" title="OpenAI API" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" alt="tech icon" title="OAuth authentication protocol" />
              <img src="https://www.passportjs.org/images/logo.svg" alt="tech icon" title="passport.js authentication" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" alt="tech icon" title="PhotoShop" />
              <img src={`${process.env.PUBLIC_URL}/pinia.svg`} alt="tech icon" title="Pinia State Management for Vue 3" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" alt="tech icon" title="Playwright testing" />

              <img className={` ${styles.enlarge}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg" alt="tech icon" title="Postman API testing" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="tech icon" title="React" />

              <img src={`${process.env.PUBLIC_URL}/redux.svg`} alt="tech icon" title="Redux state management for React" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="tech icon" title="Sass CSS" />

              <img className={` ${styles.enlarge}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original-wordmark.svg" alt="tech icon" title="Sentry error logging" />

              <img className={` ${styles.enlarge}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sketch/sketch-original-wordmark.svg" alt="tech icon" title="Sketch designs" />

              <img className={` ${styles.enlarge}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original-wordmark.svg" alt="tech icon" title="Swagger API Documentation/testing" />

              <img src={`${process.env.PUBLIC_URL}/images/threeJS.png`} alt="tech icon" title="Three.js" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="tech icon" title="Typescript" />

              <img src={`${process.env.PUBLIC_URL}/images/vite.jpg`} alt="Vite icon" title="Vite super fast build tool" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" alt="tech icon" title="Vue 3" />

              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg" alt="tech icon" title="Vuetify component library" />

              <img className={` ${styles.enlarge}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original-wordmark.svg" alt="tech icon" title="Webpack module bundler" />

            </div>
            <div className="row ">
              <div className="text-center title fs-2">Tech Stack:</div>
            </div>
            <div className="row">
              <span
                className="col fs-3 link"
                style={{
                  color: highlightFE ? "black" : "dodgerBlue",
                  backgroundColor: highlightFE ? "dodgerBlue" : "black",
                }}

                onClick={handleClickFE}
                title="Click to see FrontEnd details"
              >
                FrontEnd
              </span>
              <span
                className="col fs-3 link"
                style={{
                  color: highlightBE ? "black" : "dodgerBlue",
                  backgroundColor: highlightBE ? "dodgerBlue" : "black",
                }}
                onClick={handleClickBE}
                title="Click to see BackEnd details"
              >
                BackEnd
              </span>
            </div>
            <br />
            <div ref={observeElement2} className={` row text-start`}>

              <div
                id="fe"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  //: " normal",
                  display: highlightFE ? "block" : "none",
                }}
              >
                Master of modern web development with expertise in React, Vue 3, Nuxt 3, HTML, CSS, and JavaScript/TypeScript, delivering dynamic and responsive user experiences.
                <div className='text-center my-5'>
                  <Link to="/About#certifications">Certifications</Link>
                </div>





                <div className="text-center">
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <button data-aos="zoom-in" className="link" onClick={() => toggleVisibility('react')} title={visible.react ? "Click to Hide" : "Click to see details"}>
                        React, Redux & Next
                      </button>
                      {visible.react && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Expert in building dynamic, responsive, data-rich websites, applications, and user interfaces using React, Next.js, and Redux for state management as well as the  Context API for efficient, simple, reactive state sharing. Skilled at implementing complex UI components, optimizing performance, and ensuring maintainable, scalable codebases. Proficient with React hooks and custom hooks, including middleware implementations.
                        </p>
                      )}
                    </li>
                    <li>
                      <button data-aos="zoom-in" className="link" onClick={() => toggleVisibility('vue')} title={visible.vue ? "Click to Hide" : "Click to see details"}>
                        Vue3, Pinia & Nuxt3
                      </button>
                      {visible.vue && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Expert in building scalable, maintainable applications with Vue 3 and Nuxt 3, leveraging Pinia for modern, efficient state management. Skilled at designing reusable components, optimizing performance, and ensuring responsive, pixel‑perfect interfaces. Proficient in composables, dynamic routing, and SSR/CSR hybrids to deliver fast, SEO‑friendly user experiences.
                        </p>
                      )}
                    </li>
                    <li>
                      <button data-aos="zoom-in" className="link" onClick={() => toggleVisibility('htmlCss')} title={visible.htmlCss ? "Click to Hide" : "Click to see details"}>
                        HTML/CSS
                      </button>
                      {visible.htmlCss && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Expert in crafting semantic, accessible HTML and responsive layouts with modern CSS frameworks including Bootstrap, Tailwind, and Sass. Skilled at building pixel‑perfect, cross‑browser interfaces, optimizing performance, and enforcing design system consistency. Proficient in modular CSS architecture, responsive grid systems, and accessibility standards to deliver clean, maintainable front‑end code.                           </p>
                      )}
                    </li>
                    <li>
                      <button data-aos="zoom-in" className="link" onClick={() => toggleVisibility('javascript')} title={visible.javascript ? "Click to Hide" : "Click to see details"}>
                        JavaScript
                      </button>
                      {visible.javascript && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Expert in modern JavaScript (ES6+) with deep experience in functional programming, object‑oriented design, and modular architecture. Skilled at building dynamic, data‑driven applications, optimizing performance, and enforcing maintainable coding standards. Proficient in advanced concepts including closures, async/await, and event‑driven programming to deliver responsive, scalable solutions.
                        </p>
                      )}
                    </li>
                    <li>
                      <button data-aos="zoom-in" className="link" onClick={() => toggleVisibility('typescript')} title={visible.typescript ? "Click to Hide" : "Click to see details"}>
                        TypeScript
                      </button>
                      {visible.typescript && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Implemented robust, type‑safe applications with TypeScript, deployed in live production environments to ensure reliability and scalability. Skilled at leveraging TypeScript’s advanced type system, generics, and interfaces to enforce defensive programming practices and maintainable codebases. Proficient in integrating TypeScript across modern frameworks (React, Vue, Node.js) to deliver consistent, error‑resistant solutions.
                        </p>
                      )}
                    </li>
                    <li>
                      <button data-aos="zoom-in" className="link" onClick={() => toggleVisibility('nodeExpress')} title={visible.nodeExpress ? "Click to Hide" : "Click to see details"}>
                        Node.js and NPM
                      </button>
                      {visible.nodeExpress && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Experienced in building scalable front‑end architectures with Node.js and npm tooling for dependency management, versioning, and streamlined workflows. Skilled at architecting single‑page applications (SPA) and hybrid SSR/CSR solutions to balance performance, SEO, and dynamic content delivery. Proficient in modular build systems, code splitting, and release management to ensure maintainable, production‑ready deployments.
                        </p>
                      )}
                    </li>
                    <li>
                      <button data-aos="zoom-in" className="link" onClick={() => toggleVisibility('testingFE')} title={visible.testingFE ? "Click to Hide" : "Click to see details"}>
                        Test-Driven Development (TDD)
                      </button>
                      {visible.testingFE && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Implemented TDD practices using Jest and Mocha to write and maintain comprehensive unit tests
                        </p>
                      )}
                    </li>
                    <li>
                      <button data-aos="zoom-in" className="link" onClick={() => toggleVisibility('testingFE')} title={visible.testingFE ? "Click to Hide" : "Click to see details"}>
                        Automated Testing
                      </button>
                      {visible.testingFE && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Developed and executed automated tests with Playwright and Testim, ensuring thorough end-to-end testing and robust application performance
                        </p>
                      )}
                    </li>
                    <li>
                      <button data-aos="zoom-in" className="link" onClick={() => toggleVisibility('bootstrap')} title={visible.bootstrap ? "Click to Hide" : "Click to see details"}>
                        Bootstrap
                      </button>
                      {visible.bootstrap && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Utilized Bootstrap for rapid development of responsive, mobile‑first designs. Skilled at leveraging its grid system and components to accelerate prototyping while ensuring cross‑browser consistency and scalable front‑end layouts.
                        </p>
                      )}
                    </li>
                    <li>
                      <button data-aos="zoom-in" className="link" onClick={() => toggleVisibility('jquery')} title={visible.jquery ? "Click to Hide" : "Click to see details"}>
                        jQuery
                      </button>
                      {visible.jquery && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Enhanced interactivity and animations in basic applications using jQuery, streamlining DOM manipulation and event handling to improve user experience in lightweight and legacy projects.
                        </p>
                      )}
                    </li>
                    <li>
                      <button data-aos="zoom-in" className="link" onClick={() => toggleVisibility('dotnet')} title={visible.dotnet ? "Click to Hide" : "Click to see details"}>
                        .NET Experience
                      </button>
                      {visible.dotnet && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Experience building front‑end for an e‑commerce platform using Razor Pages, Razor Components, and C#, delivering responsive, maintainable interfaces within the .NET ecosystem. Skilled at leveraging server‑rendered views and component‑based architecture to streamline development workflows and ensure scalable, production‑ready applications.
                        </p>
                      )}
                    </li>
                  </ul>
                </div>











              </div>



              <br />
              <div
                id="be"
                style={{
                  color: "black",
                  fontWeight: highlightBE
                    ? "bold"
                    : " normal",
                  display: highlightBE ? "block" : "none",
                }}
              >
                Seasoned backend developer proficient in Node.js, Express, MongoDB, AWS, and automated testing, delivering robust, scalable, and secure server-side solutions.
                <div className='text-center my-5'> <Link to="/About#certifications">Certifications</Link></div>

                <div className="text-center">
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <button className="link" onClick={() => toggleVisibility('node')} title={visible.node ? "Click to Hide" : "Click to see details"}>
                        Node.js
                      </button>
                      {visible.node && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Built scalable network applications with Node.js, leveraging its event‑driven model to efficiently handle high concurrency and deliver responsive server performance.
                        </p>
                      )}
                    </li>
                    <li>
                      <button className="link" onClick={() => toggleVisibility('mongo')} title={visible.mongo ? "Click to Hide" : "Click to see details"}>
                        MongoDB & Mongoose
                      </button>
                      {visible.mongo && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Implemented flexible data solutions with MongoDB and schema‑based models with Mongoose to ensure efficient, maintainable data management.
                        </p>
                      )}
                    </li>
                    <li>
                      <button className="link" onClick={() => toggleVisibility('aws')} title={visible.aws ? "Click to Hide" : "Click to see details"}>
                        AWS Deployment
                      </button>
                      {visible.aws && (
                        <p className="text-start p-1 backgroundDarkBlue rounded ">
                          Deployed applications on AWS using EC2 and S3, creating robust, scalable server environments with reliable cloud infrastructure and optimized resource management.
                        </p>
                      )}
                    </li>
                    <li>
                      <button className="link" onClick={() => toggleVisibility('express')} title={visible.express ? "Click to Hide" : "Click to see details"}>
                        Express.js
                      </button>
                      {visible.express && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Built servers and RESTful APIs with Express.js, implementing secure routing and middleware to deliver efficient request processing and reliable back‑end workflows.
                        </p>
                      )}
                    </li>
                    <li>
                      <button className="link" onClick={() => toggleVisibility('d3')} title={visible.d3 ? "Click to Hide" : "Click to see details"}>
                        D3.js
                      </button>
                      {visible.d3 && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Created interactive data visualizations with D3.js, transforming complex datasets into insightful, dynamic representations that enhance user understanding and engagement.
                        </p>
                      )}
                    </li>
                    <li>
                      <button className="link" onClick={() => toggleVisibility('passport')} title={visible.passport ? "Click to Hide" : "Click to see details"}>
                        Auth0: Authentication and Authorization
                      </button>
                      {visible.passport && (

                        <p className="text-start p-1 backgroundDarkBlue rounded">

                          Configured authentication flows with Auth0 in production environments, leveraging its identity‑as‑a‑service platform to simplify user management, enforce security standards, and support scalable applications.
                          <br />
                          Integrated bearer token handling to protect API requests, providing authenticated users with secure and reliable access control.
                        </p>


                      )}
                    </li>
                    <button className="link" onClick={() => toggleVisibility('auth0')} title={visible.auth0 ? "Click to Hide" : "Click to see details"}>
                      Passport, OAuth:
                    </button>
                    {visible.auth0 && (
                      <p className="text-start p-1 backgroundDarkBlue rounded">
                        Implemented authentication with Passport.js, integrating OAuth strategies for third‑party logins such as Facebook and GitHub. Gained hands‑on experience with secure token exchange, and session management to protect application workflows.
                      </p>
                    )}
                    <li>


                    </li>
                    <li>
                      <button className="link" onClick={() => toggleVisibility('pug')} title={visible.pug ? "Click to Hide" : "Click to see details"}>
                        Pug (Jade) Template Engine
                      </button>
                      {visible.pug && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Used Pug for server-side templating, creating maintainable and dynamic HTML templates.
                        </p>
                      )}
                    </li>
                    <li>
                      <button className="link" onClick={() => toggleVisibility('testingBE')} title={visible.testingBE ? "Click to Hide" : "Click to see details"}>
                        Testing with Jest, Mocha, Chai, Playwright, and Testim
                      </button>
                      {visible.testingBE && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Ensured code reliability with unit and integration testing using Jest, Mocha, and Chai, and created automated tests with Playwright and Testim to validate robust application performance.
                        </p>
                      )}
                    </li>

                    <li>
                      <button className="link" onClick={() => toggleVisibility('nuxt')} title={visible.nuxt ? "Click to Hide" : "Click to see details"}>
                        Nuxt 3 and Vue 3 for Hybrid SSR
                      </button>
                      {visible.nuxt && (
                        <p className="text-start p-1 backgroundDarkBlue rounded">
                          Architected and refactored pages to run on the server side with Nuxt 3 and Vue 3, implementing hybrid SSR/CSR architectures that enhanced performance, scalability, SEO, and long‑term maintainability.
                        </p>
                      )}
                    </li>
                  </ul>
                </div>







              </div>
            </div>
            <br />
          </div>
        </div>
      </section>









      <hr></hr>
      <br></br>



      <section data-testid="reference" className={` ${styles.reference} lineHeight wordSpace p-1 mx-auto rounded width90`}>
        <img src="/profile2/images/quote-50.png" className={`${styles.quoteImg}`} alt="quote icon" title="reference1" />
        <p data-aos="slide-up" className={`${styles.quote} py-5 px-3 mx-3`}>"His ability to troubleshoot and problem solve were very valuable across my team. Paul proved himself a strong team player with a strong work ethic. I confidently recommend Paul for future roles where he has the opportunity and expectation of improving whatever he focuses on."
          <br />
          <span className={styles.quoteAuthor}> John - Senior Manager</span>


        </p>
        <div className='d-flex justify-content-end'>
          <img src="/profile2/images/quote-50.png" alt="quote icon" title="reference1" />
        </div>
      </section>

      <br></br>




      <section className={styles.experience}>
        <div>


          <hr></hr>
          <br></br>

          <div className="row" >

            <div data-aos="zoom-in" className="my-3 title fs-2" style={{ color: "black", textShadow: '1px 1px 3px white' }}>Experience:</div>
            <ul ref={observeElement} className={` width90`} style={{ textAlign: "center", listStyleType: "none" }}>
              <li>
                <button data-aos="slide-left" className="link" onClick={() => toggleVisibility('dev')} title={visible.dev ? "Click to Hide" : "Click to see details"}>
                  Software Developer
                </button>
                {visible.dev && (
                  <p className="text-start p-1 backgroundDarkBlue rounded">
                    Proficient in developing responsive, pixel-perfect, user-friendly websites and web applications using HTML, CSS, JavaScript, Vue 3 w/ Nuxt, React w/ Next, as well as server-side development with Node.js and Express.js.
                  </p>
                )}
              </li>
              <li>
                <button data-aos="slide-right" className="link" onClick={() => toggleVisibility('git')} title={visible.git ? "Click to Hide" : "Click to see details"}>
                  Version Control and Git Branching Strategies
                </button>
                {visible.git && (
                  <p className="text-start p-1 backgroundDarkBlue rounded">
                    Proficient in version control and code management, including feature branching, hotfixes, release branches, managing pull requests, conducting thorough code reviews, and deploying changes in production environments using Git, GitHub, and Azure.
                  </p>
                )}
              </li>
              <li>
                <button data-aos="slide-left" className="link" onClick={() => toggleVisibility('azure')} title={visible.azure ? "Click to Hide" : "Click to see details"}>
                  Azure DevOps
                </button>
                {visible.azure && (
                  <p className="text-start p-1 backgroundDarkBlue rounded">
                    Extensive experience with Azure DevOps for sprint planning, facilitating daily standups, and leveraging Azure Kanban boards to track and manage workflow efficiently.
                  </p>
                )}
              </li>
              <li>
                <button data-aos="slide-right" className="link" onClick={() => toggleVisibility('api')} title={visible.api ? "Click to Hide" : "Click to see details"}>
                  API Integration
                </button>
                {visible.api && (
                  <p className="text-start p-1 backgroundDarkBlue rounded">
                    Delivering data-rich content with reactive data, collaborating effectively with backend teams, and utilizing Postman and Swagger to develop and test robust API connections.
                  </p>
                )}
              </li>
              <li>
                <button data-aos="slide-left" className="link" onClick={() => toggleVisibility('design')} title={visible.design ? "Click to Hide" : "Click to see details"}>
                  Design Collaboration
                </button>
                {visible.design && (
                  <p className="text-start p-1 backgroundDarkBlue rounded">
                    Developing pixel perfect code from both rough wireframes as well as collaborating closely with the design team using Sketch and Figma to ensure a seamless and visually appealing user experience.
                  </p>
                )}
              </li>
              <li>
                <button data-aos="slide-right" className="link" onClick={() => toggleVisibility('seo')} title={visible.seo ? "Click to Hide" : "Click to see details"}>
                  SEO, GTM, Google Analytics
                </button>
                {visible.seo && (
                  <p className="text-start p-1 backgroundDarkBlue rounded">
                    Setting up Google Tag Manager (GTM) and interfacing with Google Analytics, implementing dynamic SEO tags, and monitoring traffic as well as 'a/b' testing results.
                  </p>
                )}
              </li>
              <li>
                <button data-aos="slide-right" className="link" onClick={() => toggleVisibility('performance')} title={visible.seo ? "Click to Hide" : "Click to see details"}>
                  Performance Optimization and Code Splitting
                </button>
                {visible.performance && (
                  <p className="text-start p-1 backgroundDarkBlue rounded">
                    Optimizing website performance to significantly improve loading times using Code Spliting, Image Optimization, Caching, CDN, Lazy Hydration, Dynamic Imorts, Build tools and Hybrid SSR.
                  </p>
                )}
              </li>
              <li>
                <button data-aos="slide-left" className="link" onClick={() => toggleVisibility('abTesting')} title={visible.abTesting ? "Click to Hide" : "Click to see details"}>
                  Marketing Collaboration
                </button>
                {visible.abTesting && (
                  <p className="text-start p-1 backgroundDarkBlue rounded">
                    Assisting the Marketing team with A/B testing using Google Analytics to optimize campaign performance and enhance user engagement.
                  </p>
                )}
              </li>
              <li>
                <button data-aos="slide-right" className="link" onClick={() => toggleVisibility('meetings')} title={visible.meetings ? "Click to Hide" : "Click to see details"}>
                  Meeting Contributions
                </button>
                {visible.meetings && (
                  <p className="text-start p-1 backgroundDarkBlue rounded">
                    Championing the management of the Kanban board and backlog, I regularly share my screen during daily scrum meetings. I make valuable contributions to weekly meetings with the development team, design team, managers, C-suite executives, and clients by providing insightful feedback and innovative solutions.
                  </p>
                )}
              </li>
              <li>
                <button data-aos="slide-left" className="link" onClick={() => toggleVisibility('testingExperience')} title={visible.testingExperience ? "Click to Hide" : "Click to see details"}>
                  Testing and monitoring
                </button>
                {visible.testingExperience && (
                  <p className="text-start p-1 backgroundDarkBlue rounded">
                    Utilizing Test-Driven Development (TDD) with Jest unit tests, implementing automated nightly and CI/CD testing using Testim, and integrating Exceptionless for comprehensive monitoring and alerting.
                  </p>
                )}
              </li>
              <li>
                <button data-aos="slide-right" className="link" onClick={() => toggleVisibility('cms')} title={visible.cms ? "Click to Hide" : "Click to see details"}>
                  Content Management System (CMS)
                </button>
                {visible.cms && (
                  <p className="text-start p-1 backgroundDarkBlue rounded">
                    Implemented and improved an in-house built CMS, as well as integrating and using 'Contentful' headless CMS for more advanced features.  Enabling stakeholders to make content changes quickly and independently, without requiring the involvement of the development team.
                  </p>
                )}
              </li>
              <li>
                <button data-aos="slide-left" className="link" onClick={() => toggleVisibility('ssr')} title={visible.ssr ? "Click to Hide" : "Click to see details"}>
                  Hybrid Server Side Rendering (SSR)
                </button>
                {visible.ssr && (
                  <p className="text-start p-1 backgroundDarkBlue rounded">
                    <b className='textShadow'>Hybrid SSR:</b> Lightning fast - select public pages initially render on the server, then the rest of app seamlessly loads, shares state, and runs super fast as normal SPA.  Literally the best of both worlds.
                  </p>
                )}
              </li>
            </ul>
          </div>


          <br />
          {/* <div className="row"
                style={{
                  color: highlightBE ? "white" : "black",
                  fontWeight: highlightBE
                    ? "bold"
                    : " normal",
                  display: highlightBE ? "block" : "none",
                }}
              >
                <div><strong className={styles.colorBlack}>Current project:</strong> 
                  </div>Utilizing Node.js with Vue 3 and Nuxt 3, leveraging
                  <div> <b className="textShadow">hybrid SSR </b> 
                  </div>capabilities.<br />
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
              </div> */}
          <br />
          <div className="text-center mb-2"
            style={{
              color: "black",
              fontWeight: "bold"
              //     : " normal",
              //   display: highlightFE ? "block" : "none",
            }}
          >
            Recently completed a major refactor the single-page application (SPA) www.knowitalls.com into a
            <div> <b className={styles.textShadowRed}>hybrid Server-Side Rendered (SSR) app</b> with <b className={styles.textShadowRed}>custom SEO meta tags</b> <br></br>

            </div>
            on dynamic routes, integrating data from both a database and a CMS into the SEO meta tags.
          </div>



          <div className="row"
          // style={{
          //   color: highlightFE ? "white" : "black",
          //   fontWeight: highlightFE
          //     ? "bold"
          //     : " normal",
          //   display: highlightFE ? "block" : "none",
          // }}
          >

            <div className={`py-4 wordSpace ${styles.knowitalls} `}  >
              <a className="link p-3" href="https://www.knowitalls.com" alt="knowitalls.com" target="_blank"
                rel="noreferrer" title="Click to see my work at: www.knowitalls.com" >www.knowitalls.com</a>


            </div>
          </div>
          <div className="row my-2">

            <div className="text-center">
              <button className="link" onClick={() => toggleVisibility('details')} title="Click to see details">
                {visible.details ? 'Hide details' : 'Click for Technology details:'}
              </button>

            </div>


          </div>
          <ul className={`py-4 readEasy width90 mx-auto ${styles.hidden} ${visible.details ? `${styles.transition}` : styles.shrink}`} style={{ textAlign: "left", listStyleType: "none", maxWidth: "700px", maxHeight: "auto" }}>
            <li>
              Payment integration with <b className="textShadow">Stripe</b>
            </li>
            <hr />
            <li>
              Video integration with <b className="textShadow"> WhereBy</b>
            </li>
            <hr />
            <li>
              Authentication and API access tokens through <b className="textShadow">Auth0</b>
            </li>
            <hr />
            <li>
              24/7 Error monitoring by  <b className="textShadow">Exceptionless</b>
            </li>

            <hr />
            <li>
              Custom Error handling using SSR friendly 'toasts' <b className="textShadow">Notivue</b>
            </li>

            <hr />
            <li>
              State Management with <b className="textShadow">Pinia</b> reactive data store
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
            <li>
              <b className='textShadow'>Hybrid SSR:</b> Lightning fast - select public pages initially render on the server, then the rest of app seamlessly loads, shares state, and runs super fast as normal SPA.  Literally the best of both worlds.
            </li>
            <div className="my-2">
              <div className="text-center">
                <button className="link" onClick={() => toggleVisibility('details')} title="Click to see details">
                  Hide details
                </button>
              </div>
            </div>
          </ul>



          <div className='text-center'>

            <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/mEfSlxcx5RCD/quote">Quote</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
            <p>Site custom built by <strong>Paul OConnell</strong> with <b>React</b></p>
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






      </section>





    </div>


  );
}

export default Home;