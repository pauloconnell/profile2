const React = require("react");
const Link = require("react-router-dom").Link;
const MyWork = require("./links/MyWork");

/* the main page for the about route of this app */
const Contact = function () {
  return (
    <div>
      <div className="textAlign">
        <div className="vertSpace">
          <span className="title text readable">Contact Me:</span>
        </div>
        <section
          className="row justify-content-center"
          style={{ minHeight: "60vh" }}
        >
          <div className="col-10 col-sm-5 col-md-3 pt-3  animationContact link">
            <a
              className="link contactCard"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/paul-o-connell-604"
              title="LinkedIn"
            >
              <img src="https://res.cloudinary.com/pollie/image/upload/c_thumb,h_102,w_131/v1622842617/linked-inLogo_arbzyw.webp" />
              <br />
              <span class="text-break">
                www.linkedin.com/in/paul-o-connell-604
              </span>
            </a>
          </div>
          <div className="col-auto"></div>
          <div className="col-10 col-sm-5 col-md-3 pt-3 animationContact link">
            <a
              className="link contactCard"
              target="_blank"
              href="https://github.com/pauloconnell"
              rel="noopener noreferrer"
              title="GitHub Repos"
            >
              <img src="https://res.cloudinary.com/pollie/image/upload/c_thumb,g_face,w_118/v1622847396/GitHub-Mark_hnhn3m.png" />
              <br />
              <span class="text-break">https://github.com/pauloconnell</span>
            </a>
          </div>
          <div className="col-auto"></div>
          <div className=" col-10 me-4 me-sm-0 col-sm-5 col-md-3 pt-3 animationContact link">
            <a
              className="link contactCard mb-4 mb-sm-1 mt-sm-5 pt-4"
              href="mailto:p_ollie@hotmail.com?Subject=FromProfile"
              target="_blank"
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

module.exports = Contact;