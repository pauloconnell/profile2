import React from "react" ;
//import Link  from "react-router-dom";
import './contact.css';
import MyWork from '../links/MyWork';

/* the main page for the about route of this app */
const Contact = function () {
  return (
    <div className="backgroundFixed">
      <div className="textAlign">
        <div className="vertSpace">
          <h2 className="text bigH2">Contact Me:</h2>
        </div>
        <section
          className="row justify-content-center contactMe"
         
        >
          <div className="col-12 col-md-5 col-lg-4 pt-3  animationContact link">
            <a
              className="link contactCard"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/paul-o-connell-604"
              title="LinkedIn"
            >
              <img src="https://res.cloudinary.com/pollie/image/upload/c_thumb,h_102,w_131/v1622842617/linked-inLogo_arbzyw.webp" alt="linkedIn"/>
              <br />
              <span className="text-break">
                www.linkedin.com/in/paul-o-connell-604
              </span>
            </a>
          </div>
          {/* <div className="col-auto"></div> */}
          <div className="col-12 col-md-5 col-lg-4 pt-3 animationContact link">
            <a
              className="link contactCard"
              target="_blank"
              href="https://github.com/pauloconnell"
              rel="noopener noreferrer"
              title="GitHub Repos"
            >
              <img src="https://res.cloudinary.com/pollie/image/upload/c_thumb,g_face,w_118/v1622847396/GitHub-Mark_hnhn3m.png"  alt="myImage" height="101px"/>
              <br />
              <span className="text-break">https://github.com/pauloconnell</span>
            </a>
          </div>
          {/* <div className="col-auto"></div> */}
          <div className=" col-12 col-md-5 col-lg-4 pt-3 animationContact link align-middle" >
            <a
              className="link contactCard mb-4 mb-sm-1 "
              href="mailto:p_ollie@hotmail.com?Subject=Contact%20Me%20from%20Profile%20link&body=Hello%20Paul,%0D%0A%0D%0AI%20am%20reaching%20out%20to%20you%20regarding..."
              target="_blank"
              rel="noreferrer"
              title="p_ollie@hotmail.com"
            >
              Click here to Email Me
            </a>
          </div>
        </section>
        <div style={{ width: "100%", height: 100 }}>
          <MyWork className="mt-auto" />
        </div>
      </div>
    </div>
  );
};

export default Contact;