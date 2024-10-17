import React from "react";
//import { Link } from "react-router-dom";
//import UnorderedList from "./UnorderedList";
//import Footer from "./Footer";
import MyWork from "../links/MyWork";

const DataVisualization2 = function () {
  return (
    <div className="bgSolid">
 
      
      <h2 className=" my-3 textAlign ">
        <span className="text textBlue bigH2">
          Data Visualization D3
        </span>
      </h2>
      <h3 className="py-3 textAlign backgroundBlue w-75 mx-auto text">
        <span className="">
          API driven data displayed in browser using D3 library on SVG canvas
        </span>
      </h3>
    <section className="width90">
      <div className="row mx-1 justify-content-center">
        <div className=" col-12 col-sm-5 text-center my-5 py-1 px-0 link">
          <a
            className="link d-block h-100"
            href="https://d3-challenge-4.pauloconnell.repl.co/"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" card h-100">
              <div className="card-header title text">
                <strong>Population Education by Location</strong>
              </div>
              <div className="card-body d-flex align-items-center my-3 ">
                <img
                  className="img-fluid "
                  src="https://res.cloudinary.com/pollie/image/upload/v1598897252/d3_US_Education_cq6fpz.png"
                  alt="D3 Data Visualization"
                />
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  *Data from the US Census Bureau
                </small>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-auto"></div>
        <div className="col-12 col-sm-5 text-center py-1 my-5 px-0 link">
          <a
            className="link  d-block h-100"
            href="https://d3-challenge-2-New.pauloconnell.repl.co"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" card h-100">
              <div className="card-header title text">
                <strong>Doping in Biking</strong>
              </div>
              <div className=" card-body  d-flex my-3">
                <img
                  className="img-fluid justify-content-center object-fit-contain "
                  src="https://res.cloudinary.com/pollie/image/upload/v1622334690/d3_doping_in_biking_mtl8lk.png"
                  alt="D3 Data Visualization"
                />
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  *Data from FreeCodeCamp
                </small>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="row  mx-1 justify-content-center">
        <div className="col-12 col-sm-5 text-center my-5 py-1 px-0 link">
          <a
            className="link pos-one d-block h-100"
            href="https://d3-Challenge-3.pauloconnell.repl.co"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" card h-100">
              <div className="card-header title text">
                <strong>Global Temperature History </strong>
              </div>
              <br />
              <div className="card-body my-auto align-items-center my-3">
                <img
                  className="img-fluid"
                  src="https://res.cloudinary.com/pollie/image/upload/v1598905005/d3_global_warming_250years_reknwq.png"
                  alt="D3 Data Visualization"
                />
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  *Data from the Global Temperature API
                </small>
              </div>
            </div>
          </a>
        </div>
        <div className="col-sm-auto"></div>
        <div className="col-12 col-sm-5 text-center my-5 py-1 px-0 link">

        
          <a
            className="link pos-two d-block h-100"
            href="https://codepen.io/p_ollie/full/GRZjQJJ"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card h-100">
              <div className="card-headertitle text">
                <strong>Historical US GDP </strong>
              </div>
              <br />
              <div className="card-body d-flex align-items-center my-3">
                <img
                  className="img-fluid "
                  src="https://res.cloudinary.com/pollie/image/upload/v1622334021/d3_Us_GDP_nushwx.png"
                  alt="D3 Data Visualization"
                />
              </div>
              <div className="card-footer">
                <small className="text-muted">
                  *Data from the US Census Bureau
                </small>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    </div>
  );
};

export default DataVisualization2;