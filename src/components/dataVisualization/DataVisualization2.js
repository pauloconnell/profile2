import React, {  useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
//import { Link } from "react-router-dom";
//import UnorderedList from "./UnorderedList";
//import Footer from "./Footer";
import MyWork from "../links/MyWork";
import { RowCard } from '../rowCards/RowCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const DataVisualization2 = function () {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  
  useEffect(() => { AOS.init({ 
    duration: 1300, 
    once: false,
    offset: 20 
     
    }); }, []);

  return (
    <div className="bgSolid">
      <MyWork />
      
      <h2 className=" my-3 textAlign ">
        <span className="bigH2 text textBlue ">
          Data Visualization D3
        </span>
      </h2>
      <h3 data-aos="zoom-in" className="py-3 textAlign backgroundBlue width90 mx-auto text">
        <span className="">
          API driven data displayed in browser using D3 library on SVG canvas
        </span>
      </h3>


      <section className="width90">
      <RowCard link1="https://d3-challenge-4.pauloconnell.repl.co/" header1="Population Education by Location" title1="Population Education by Location"
          imgSrc1="https://res.cloudinary.com/pollie/image/upload/v1598897252/d3_US_Education_cq6fpz.png" imgAlt1="D3 Data Visualization" footer1="*Data from the US Census Bureau"
          link2="https://d3-challenge-2-New.pauloconnell.repl.co" header2="Doping in Biking" title2="Doping in Biking"
          imgSrc2="https://res.cloudinary.com/pollie/image/upload/v1622334690/d3_doping_in_biking_mtl8lk.png" imgAlt2="D3 Data Visualization" footer2=" *Data from FCC" />

<RowCard link1="https://d3-Challenge-3.pauloconnell.repl.co" header1="Global Temperature History" title1="Global Temperature History"
          imgSrc1="https://res.cloudinary.com/pollie/image/upload/v1598905005/d3_global_warming_250years_reknwq.png" imgAlt1="D3 Data Visualization" footer1=" *Data from the Global Temperature API"
          link2="https://codepen.io/p_ollie/full/GRZjQJJ" header2="Historical US GDP" title2="Historical US GDP "
          imgSrc2="https://res.cloudinary.com/pollie/image/upload/v1622334021/d3_Us_GDP_nushwx.png" imgAlt2="D3 Data Visualization" footer2="  *Data from the US Census Bureau" />


          


  
    </section>
    <MyWork />
    </div>
  );
};

export default DataVisualization2;