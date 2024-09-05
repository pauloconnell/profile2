const React = require("react");
const Link = require("react-router-dom").Link;
const UnorderedList = require("./UnorderedList");
const Footer = require("./Footer");
const MyWork = require("./links/MyWork");

/* the main page for the index route of this app */
const DynamicData = function () {
  return (
    <div className="container-fluid">
      Get props
      <hr></hr>
      <h2 className=" mb-3 textAlign">
        <span className="readEasy title">Web Applications</span>
      </h2>
      <h3 className="mb-5 textAlign">
        <span className="readEasy">
          Modern responsive custom Web Applications <br />
          built using javaScript and React, deployed in the cloud.
        </span>
      </h3>
      <div className="row mx-1">
        <section className="col-12 col-sm-6 ">
          <a
            className="pos-one link align-middle"
            title="Delivers specific information for every item on sales floor and organizes similar models to increase sales conversions"
            href="https://codepen.io/p_ollie/full/qJjVgR"
            target="_blank"
          >
            <div className=" text-align">
              <span className="title inlineBlock text">
                <strong>
                  <u>Test Center</u>
                  <div>Product Knowledge App</div>
                </strong>
              </span>
            </div>
            <div className="align-middle mt-1 mt-md-3 mt-lg-5">
              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1610401628/Test_Center_ue5srv.png"
              />
            </div>
          </a>
        </section>

        <section className="col-12 col-sm-6  ">
          <a
            className="pos-two link align-middle"
            href="https://ianbunburydogschool.glitch.me"
            target="_blank"
          >
            <div className=" text-align">
              <span className="title inlineBlock text">
                <strong>
                  <u>
                    {" "}
                    Ian Bunbury
                    <br />
                    Dog Training
                  </u>
                </strong>
              </span>

              <img
                className="responsive mt-2 mt-md-0"
                src="https://res.cloudinary.com/pollie/image/upload/v1615410052/profileBunbury_pcfb8t.png"
                alt="Ian Bunbury Dog School"
              />
            </div>
          </a>
        </section>
      </div>
    </div>
  );
};

module.exports = DynamicData;