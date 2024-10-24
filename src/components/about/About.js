import React, { useEffect, useRef } from "react" ;
import { useLocation }  from "react-router-dom";
import styles from './about.module.css';
import MyWork from '../links/MyWork';

/* the main page for the about route of this app */
const About = function () {

  const flyers= useRef(null);                                                           // elements that will fly in on page load

  const location = useLocation();
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
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  }, [location]);

  return (
    <div className="textAlign">

      <div
        className="title lineHeight width70"
        style={{ fontSize: "initial" }}
      >

        <h2 className="bigH2 text backgroundBlue">Hi, I am Paul O’Connell, a passionate Full Stack Web (M.E.R.N.) Software Developer.</h2>
        <div className={`${styles.meImage} mt-3`}><img src="https://res.cloudinary.com/pollie/image/upload/v1728088299/Capture_rsvvf2.png" alt="This is me" /></div>
        <section ref={flyers}>
          <div className={`${styles.fly1} text-start p-3 mt-5`}>
            <p className={`${styles.left} `} >I have a proven track record of developing and deploying scalable web applications in today's top Full Stack frameworks: React (Next.js and Redux) and Vue (Nuxt.js and Pinia). <br />
            </p>
          </div>
          <div className={`${styles.fly2} text-start p-3 my-5`}>
            <p className={`${styles.right}`}>
              I thrive on solving complex problems and turning ideas into elegant, user-friendly interfaces that drive reactive data in responsive, pixel-perfect applications.<br />
              
            </p>



            
            {/* <p>Focused on developing software using both front-end and
            back-end technologies to deploy scaleable cloud based modern web
            applications, API's, databases, and web sites.
          </p> */}
          </div>
        </section>
      </div>
      
      <div id="certifications" className="readEasy big lineHeight width80 mx-auto my-5 p-4 hoverDark">
        <u className="title">FULLSTACK M.E.R.N. CERTIFICATION:</u>
        <br />
        <br />
        The MERN Stack is: MongoDB, Express(server) React, Node.js
        <br /> 1800 Hours Certification awarded after completion of 6+
        Certifications:
        <br />
        <ul className="textAlign">
          <li>Responsive Web Design Certification</li>
          <li>JavaScript Algorithms and Data Structures Certification </li>
          <li>Front End Development Libraries Certification </li>
          <li>Data Visualization with D3 Certification </li>
          <li>Back End Development and APIs Certification </li>
          <li>Quality Assurance and Information Security Certification </li>





        </ul>
      </div>
      <br /> <br />
      <br />
      <br />
      <div className="center width80 p-4">
        <ul className="readEasy inlineBlock">
          <br />
          <li>
            <br />
            <div className="hoverDark">
              <div className="big py-3">
                Responsive Web Design Certification
              </div>

              <code>
                HTML5, CSS, Applied Visual Design, Applied Accessibility,
                Responsive Web Design Principles, CSS FlexBox, CSS Grid, and
                e-forms
              </code>

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
          </li>

          <hr></hr>

          <li>
            <div className="hoverDark">
              <div className="big py-3">
                JavaScript Algorithms and Data Structures Certification
              </div>

              <code>
                JavaScript data structures are explored. Then creating
                algorithms to manipulate strings, factorialize numbers, and
                solve problems. Also touches on OOP and FP(functional
                programming).
              </code>

              <a href="https://www.freecodecamp.org/certification/fccd9e19c59/javascript-algorithms-and-data-structures" target="_blank"
            rel="noreferrer">
                View Certificate
              </a>
            </div>
          </li>
          <hr></hr>
          <li>
            <div className="hoverDark">
              <div className="big py-3">
                Front End Development Libraries Certification
              </div>

              <code>
                Bootstrap, jQuery Sass, React and Redux. Building modern
                responsive component based web applications capable of scaling
                up.
              </code>

              <a href="https://www.freecodecamp.org/certification/fccd9e19c59/front-end-libraries" target="_blank"
            rel="noreferrer">
                View Certificate
              </a>
            </div>
          </li>
          <hr></hr>
          <li>
            <div className=" hoverDark">
              <div className="big py-3">Data Visualization Certification</div>

              <code>
                Using data to create different charts, graphs, hover elements,
                and other ingredients to create dynamic and attractive data
                visualizations.
              </code>

              <a href="https://www.freecodecamp.org/certification/fccd9e19c59/data-visualization" target="_blank"
            rel="noreferrer">
                View Certificate
              </a>
            </div>
          </li>
          <hr></hr>
          <li>
            <div className="hoverDark">
              <div className="big py-3">
                Back End Development and APIs Certification
              </div>

              <code>
                Back end with Node.js and npm (Node Package Manager). Also
                building web applications with the Express framework, build APIs
                and microservices with MongoDB and the Mongoose library.
              </code>

              <a href="https://www.freecodecamp.org/certification/fccd9e19c59/apis-and-microservices" target="_blank"
            rel="noreferrer">
                View Certificate
              </a>
            </div>
          </li>
          <hr></hr>
          <li>
            <div className=" hoverDark">
              <div className="big py-3">Quality Assurance Certification</div>

              <code>
                Advanced Node.js, Authentication with Passport, Social
                Authentication, Template Engine allows server-side variable
                rendering with Pug, and Testing with Chai.
              </code>
            

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
            <br/>
          
            </div>
          </li>

          <li>
          <div className=" hoverDark">
              <div className="big py-3">Full Stack M.E.R.N. Certification</div>

              <code>
                MongoDB
                Express.js
                React
                Node.js
              </code>
              <div> Awarded upon completion of above certifications</div>

              <a href="https://www.freecodecamp.org/certification/fccd9e19c59/full-stack" target="_blank" rel="noreferrer">
              View Full Stack Certificate
          </a>
          </div>

          </li>
        </ul>
        <hr></hr>



        <div className=" my-5">
          <span className="readEasy title">
            Full Stack M.E.R.N. Certification: 1800 hours
          </span>

       
        </div>

       
      
      </div>
    </div>
  );
};

export default About;