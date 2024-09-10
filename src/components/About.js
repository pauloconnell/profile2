const React = require("react");
const Link = require("react-router-dom").Link;
const MyWork = require("./links/MyWork");

/* the main page for the about route of this app */
const About = function () {
  return (
    <div className="textAlign">
      <p>
        <div
          className="readable title text lineHeight width90"
          style={{ fontSize: "initial" }}
        >
          <b>
            Skilled in all aspects of software development, client relations,
            collaboration, project and team management.
            <br />
            Focused on developing and testing software using both front-end and
            back-end technologies to deploy scaleable cloud based modern web
            applications, API's, databases, and web sites.
          </b>
        </div>
      </p>
      <div className="readEasy big lineHeight width80 mx-auto my-5 p-4 hoverDark">
        <u className="title">FULLSTACK M.E.R.N. CERTIFICATION:</u>
        <br />
        <br />
        The MERN Stack is: MongoDB, Express(server) React, Node.js
        <br /> 1800 Hours Certification awarded after completion of 6
        Certifications:
        <br />
        <ul className="textAlign">
          <li>Quality Assurance and Information Security Certification </li>
          <li>Data Visualization with D3 Certification </li>
          <li>APIs and MicroServices Certification </li>
          <li>JavaScript Algorithms and Data Structures Certification </li>
          <li>Front End Development Libraries Certification </li>
          <li>Responsive Web Design Certification</li>
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

              <a href="https://www.freecodecamp.org/certification/fccd9e19c59/responsive-web-design">
                View Certificate
              </a>
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

              <a href="https://www.freecodecamp.org/certification/fccd9e19c59/javascript-algorithms-and-data-structures">
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

              <a href="https://www.freecodecamp.org/certification/fccd9e19c59/front-end-libraries">
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

              <a href="https://www.freecodecamp.org/certification/fccd9e19c59/data-visualization">
                View Certificate
              </a>
            </div>
          </li>
          <hr></hr>
          <li>
            <div className="hoverDark">
              <div className="big py-3">
                APIs and MicroServices Certification
              </div>

              <code>
                Back end with Node.js and npm (Node Package Manager). Also
                building web applications with the Express framework, build APIs
                and microservices with MongoDB and the Mongoose library.
              </code>

              <a href="https://www.freecodecamp.org/certification/fccd9e19c59/apis-and-microservices">
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
            </div>

            <a
              className="margin"
              href="https://www.freecodecamp.org/certification/fccd9e19c59/quality-assurance-v7"
            >
              View Certificate
            </a>
            <a
              className="margin"
              href="https://www.freecodecamp.org/certification/fccd9e19c59/information-security-and-quality-assurance"
            >
              View Certificate
            </a>
          </li>
        </ul>
        <hr></hr>

        <div className=" my-5">
          <span className="readEasy title">
            Full Stack Certification: 1800 hours
          </span>
        </div>

        <MyWork />
      </div>
    </div>
  );
};

export default About;