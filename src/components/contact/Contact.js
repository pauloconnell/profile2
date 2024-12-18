import React, { useEffect } from "react" ;
//import Link  from "react-router-dom";
import styles from './contact.module.css';
import MyWork from '../links/MyWork';

/* the main page for the about route of this app */
const Contact = function () {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className={styles.backgroundFixed}>
      <div className="textAlign">
        <div className="vertSpace">
          <h2 className="text bigH2">Contact Me:</h2>
        </div>
        <section
          className={`row justify-content-center ${styles.contactMe}`}
         
        >
          <div className={`col-12 col-md-5 col-lg-4 pt-3  ${styles.animationContact} link`}>
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
          <div className={`col-12 col-md-5 col-lg-4 pt-3 ${styles.animationContact} link`}>
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
          <div className={` col-12 col-md-5 col-lg-4 pt-3 ${styles.animationContact} link `} >
            <a
              className="link contactCard "
              href="mailto:p_ollie@hotmail.com?Subject=Contact%20Me%20from%20Profile%20link&body=Hello%20Paul,%0D%0A%0D%0AI%20am%20reaching%20out%20to%20you%20regarding..."
              target="_blank"
              rel="noreferrer"
              title="p_ollie@hotmail.com"
            >
              Click here to Email Me
            </a>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default Contact;