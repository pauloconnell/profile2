import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from './about.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

/* the main page for the about route of this app */
const About = function () {

  const flyers = useRef(null);                                                           // elements that will 'fly in' on page load

  const location = useLocation();                                                       // page change triggers 'location' change (location is actually where we came from )
  // like this:
  //   {
  //   pathname: "/dashboard",
  //   search: "?sort=asc",
  //   hash: "#top",
  //   state: { from: "/login" },
  //   key: "abc123"
  // }


  useEffect(() => {

    if (flyers.current) {
      const [fly1, fly2] = flyers.current.children;
      let delay1 = setTimeout(() => {
        fly1.classList.add(styles.active);                                                // adding active class triggers 'fly in'
        fly1.classList.add("backgroundBlue");
      }, 1000);
      let delay2 = setTimeout(() => {                                                   // 2nd element flys in
        fly2.classList.add(styles.active);
        fly2.classList.add("backgroundBlue");
      }, 2900)
      return () => {
        clearTimeout(delay2);                                                         // Cleanup the timeouts on component unmount to ensure no memory leaks
        clearTimeout(delay1);
      };
    }
  }, [location]);

  useEffect(() => {
    console.log("location.hash", location.hash)
    if (location.hash === "#certifications") {
      setTimeout(() => {
        const element = document.getElementById('certifications');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

    } else {
      console.log("scrolling to top")
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }



  }, [location]);

  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: false

    });
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <div className="textAlign">

      <section
        className="title lineHeight width70"
        style={{ fontSize: "initial", minHeight: "100vh" }}
      >

        <h2 data-aos="slide-down" className="bigH2 text backgroundBlue">Hi, I am Paul O’Connell, a passionate Full Stack Web (M.E.R.N.) Software Developer.</h2>
        <div className={`${styles.meImage} mt-3`}><img src="https://res.cloudinary.com/pollie/image/upload/v1728088299/Capture_rsvvf2.png" alt="This is me" /></div>
        <section ref={flyers}>
          <div className={`${styles.fly1} text-start p-3 mt-5`}>
            <p className={`${styles.left} `} >I have a proven track record building and deploying scalable apps with React (Next.js, Redux) and Vue (Nuxt.js, Pinia). <br />
            </p>
          </div>
          <div className={`${styles.fly2} text-start p-3 my-5`}>
            <p className={`${styles.right}`}>
             I thrive on solving complex problems and crafting elegant, pixel‑perfect, user‑friendly interfaces for responsive, data‑driven applications.<br />

            </p>




            {/* <p>Focused on developing software using both front-end and
            back-end technologies to deploy scaleable cloud based modern web
            applications, API's, databases, and web sites.

            , url('/profile2/images/LLE.jpg')
          </p> */}
          </div>
        </section>
      </section>
      <section className={`${styles.fullPageBackground} mt-5`} style={{ backgroundImage: "url('/profile2/images/LLE.jpg')" }}>
        <section className="h2 text-center readEasy my-5 ">
          <div className="my-5 bgSolid width70 rounded p-3" style={{ maxWidth: "315px" }}><u>Certifications</u>
          </div>
        </section>
                         <hr />

        <section >
          <div className="readEasy title">OpenJS Certifications</div>
          <div className="readEasy">Linux Foundation NODE.JS</div>
            <div title="Linux Foundation OpenJS Cert" data-iframe-width="150" data-iframe-height="270" data-share-badge-id="8da2df80-ffca-4abd-b636-af85692e39c1" data-share-badge-host="https://www.credly.com"></div>
        </section>
              <hr />
        <section id="certifications" className="readEasy big lineHeight mx-auto my-5 p-4 hoverDark bgSolid"  >
          <u className="title">FULLSTACK M.E.R.N. CERTIFICATION:</u>
          <br />
          <br />
          The MERN Stack is: MongoDB, Express(server) React, Node.js
          <br /> 1800 Hours Certification awarded after completion of 6+
          Certifications:
          <br />
          <div className="mt-3" >
            <ul className={`mx-auto ${styles.mernCert}`} style={{ maxWidth: '500px' }} >
              <li>Responsive Web Design Certification</li>
              <li>JavaScript Algorithms and Data Structures Certification </li>
              <li>Front End Development Libraries Certification </li>
              <li>Data Visualization with D3 Certification </li>
              <li>Back End Development and APIs Certification </li>
              <li>Quality Assurance and Information Security Certification </li>

            </ul>
          </div>
        </section>
        <br /> <br />
        <br />
        <br />
        <section className="center p-4">
          <ul className="readEasy inlineBlock">
            <br />
            <li data-aos="zoom-in">
              <br />
              <div className=" card h-100 widthCard">
                <div className="card-header  big py-3">


                  Responsive Web Design Certification
                </div>

                <code className="card-body">
                  HTML5, CSS, Applied Visual Design, Applied Accessibility,
                  Responsive Web Design Principles, CSS FlexBox, CSS Grid, and
                  e-forms
                </code>
                <div className="card-footer">
                  <a href="https://www.freecodecamp.org/certification/fccd9e19c59/responsive-web-design" target="_blank"
                    rel="noreferrer">
                    View Certificate
                  </a>
                  <div className="my-3">
                    *** Also completed Legacy Front End Certification:<br />
                    <a href="https://www.freecodecamp.org/certification/fccd9e19c59/legacy-front-end" target="_blank"
                      rel="noreferrer">
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <hr></hr>

            <li data-aos="zoom-in">
              <div className="card widthCard">
                <div className="card-header big py-3">
                  JavaScript Algorithms and Data Structures Certification
                </div>

                <code className="card-body">
                  JavaScript data structures are explored. Then creating
                  algorithms to manipulate strings, factorialize numbers, and
                  solve problems. Also touches on OOP and FP(functional
                  programming).
                </code>
                <div className="card-footer">
                  <a href="https://www.freecodecamp.org/certification/fccd9e19c59/javascript-algorithms-and-data-structures" target="_blank"
                    rel="noreferrer">
                    View Certificate
                  </a>
                </div>
              </div>
            </li>
            <hr></hr>
            <li data-aos="zoom-in">
              <div className="card widthCard">
                <div className="card-header big py-3">
                  Front End Development Libraries Certification
                </div>

                <code className="card-body">
                  Bootstrap, jQuery Sass, React and Redux. Building modern
                  responsive component based web applications capable of scaling
                  up.
                </code>
                <div className="card-footer">
                  <a href="https://www.freecodecamp.org/certification/fccd9e19c59/front-end-libraries" target="_blank"
                    rel="noreferrer">
                    View Certificate
                  </a>
                </div>
              </div>
            </li>
            <hr></hr>
            <li data-aos="zoom-in">
              <div className=" card widthCard">
                <div className="card-header big py-3">Data Visualization Certification</div>

                <code className="card-body">
                  Using data to create different charts, graphs, hover elements,
                  and other ingredients to create dynamic and attractive data
                  visualizations.
                </code>
                <div className="card-footer">
                  <a href="https://www.freecodecamp.org/certification/fccd9e19c59/data-visualization" target="_blank"
                    rel="noreferrer">
                    View Certificate
                  </a>
                </div>
              </div>
            </li>
            <hr></hr>
            <li data-aos="zoom-in">
              <div className="card widthCard">
                <div className="card-header big py-3">
                  Back End Development and APIs Certification
                </div>

                <code className="card-body">
                  Back end with Node.js and npm (Node Package Manager). Also
                  building web applications with the Express framework, build APIs
                  and microservices with MongoDB and the Mongoose library.
                </code>
                <div className="card-footer">
                  <a href="https://www.freecodecamp.org/certification/fccd9e19c59/apis-and-microservices" target="_blank"
                    rel="noreferrer">
                    View Certificate
                  </a>
                </div>
              </div>
            </li>
            <hr></hr>
            <li data-aos="zoom-in">
              <div className=" card widthCard">
                <div className="card-header big py-3">Quality Assurance Certification</div>

                <code className="card-body justify-left">
                  Advanced Node.js, Authentication with Passport, Social
                  Authentication, Template Engine allows server-side variable
                  rendering with Pug, and Testing with Chai.
                </code>

                <div className="card-footer">
                  <a
                    className="margin"
                    href="https://www.freecodecamp.org/certification/fccd9e19c59/quality-assurance-v7" target="_blank"
                    rel="noreferrer"
                  >
                    View Certificate
                  </a>
                  <div className="my-3">
                    *** Also completed Legacy Information Security and Quality Assurance Certification:<br />
                    <a href="https://www.freecodecamp.org/certification/fccd9e19c59/information-security-and-quality-assurance" target="_blank"
                      rel="noreferrer">
                      View Certificate
                    </a>
                  </div>

                  <br />

                </div>
              </div>
            </li>

            <li data-aos="zoom-in">
              <div className="card">
                <div className=" card-header big py-3 ">Full Stack M.E.R.N. Certification</div>

                <code className={`card-body mx-auto ${styles.mernCert}`}>
                  <u>M</u>ongoDB <br />
                  <u>E</u>xpress.js<br />
                  <u>R</u>eact<br />
                  <u>N</u>ode.js<br />
                </code>
                <div className="card-footer"> Awarded upon sucessful completion of the above certifications</div>

                <a href="https://www.freecodecamp.org/certification/fccd9e19c59/full-stack" target="_blank" rel="noreferrer">
                  View Full Stack Certificate
                </a>
              </div>

            </li>
          </ul>



        </section>
      </section>
      <div className=" my-5">
        <span className="readEasy title">
          Full Stack M.E.R.N. Certification: 1800 hours
        </span>


      </div>




    </div>
  );
};

export default About;