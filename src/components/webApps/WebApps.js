
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import UnorderedList from '../UnorderedList';
import MyWork from '../links/MyWork';
import { RowCard } from '../rowCards/RowCard';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles


/* the main page for the index route of this app */
const WebApps = function () {

  const location = useLocation();
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [location])


  useEffect(() => { AOS.init({ 
    duration: 1300, 
    once: false,
    offset: 30 
     
    }); }, []);

  return (
    <div className="bgSolid" >
<MyWork />

      <h2 className=" my-3 textAlign">
        <span className="bigH2 text textBlue">Web Applications</span>
      </h2>
      <h3 data-aos="zoom-in" className="mb-5 py-3 mx-auto backgroundBlue width90 text-center text">
        <span className="">
          Modern responsive custom Web Applications. <br />
          Built using either pure JavaScript, HTML, CSS, or React / Vue3 with Nuxt 3.
        </span>
      </h3>

      <section className="container-fluid width90" >

        {/* 
        <section className="col-12 col-sm-5 my-1 px-0 link">
          <a
            className="link d-block"
            title="Detects GeoLocation then hits weather forcast API to display weather in your area"
            href="https://codepen.io/p_ollie/full/QqGGXB"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" text-align">
              <span className="title text inlineBlock">
                <strong>API Local Weather Detector</strong>
              </span>

              <img
                className="responsive mt-1"
                src="https://res.cloudinary.com/pollie/image/upload/v1616001698/weather_f6qfif.png"
                alt="API Weather detector"
              />
            </div>
          </a>
        </section>
        */}

        {/* <div className="row mx-1 justify-content-center">
          <section className="col-12 col-sm-5 my-1 px-0 link">
            <a
              className="link d-block"
              title="Peer to Peer e-commerce platform"
              href="https://www.knowitalls.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-align">
                <span className="title text inlineBlock">
                  <strong><u>www.KnowItAlls.com</u></strong> <br />
                  Peer to Peer e-commerce platform built with Vue 3 Nuxt and Azure
                </span>


                <img
                  className="responsive mt-1"
                  src="https://res.cloudinary.com/pollie/image/upload/v1726776409/homepage_flzeh0.png"
                  alt="www.knowitalls.com"
                />
              </div>
            </a>
          </section>

          <div className="col-sm-auto"></div>

          testCenter https://codepen.io/p_ollie/full/qJjVgR
 */}



        <RowCard link1="https://www.knowitalls.com" header1="www.knowitalls.com" title1="Peer to Peer e-commerce platform"
          imgSrc1="https://res.cloudinary.com/pollie/image/upload/v1726776409/homepage_flzeh0.png" imgAlt1="www.knowitalls.com" footer1="Peer to Peer e-commerce platform built with Vue 3 Nuxt and Azure"
          link2="https://www.knowitalls.com/p/brian" header2="Dynamic Profile Pages" title2="Profile page: research knowitall's bio, links, videos and availability"
          imgSrc2="/profile2/images/profile.png" imgAlt2="CEO's Profile page screenshot" footer2="Dynamic profile page renders data from database based on URL" />

<RowCard link1="https://www.knowitalls.com/c/personal-trainer" header1="Category Pages - CMS Driven" title1="Category pages: Renders Category specific content from CMS based on URL"
          imgSrc1="/profile2/images/category.png" imgAlt1="CMS driven Category Pages" footer1="Dynamic page renders content from CMS based on URL"
          link2="https://knowitalls.com" header2="Form Validation" title2="Custom validation responds reactively to 'live' user input and standard vee-validate w/ Yup Library (validates on 'submit') "
          imgSrc2="/profile2/images/validation.png" imgAlt2="Form validation image" footer2="Utilizing custom reactive validation (regex checks live user input) along with VeeValidate and the Yup Library" />


          
<RowCard link1="https://www.knowitalls.com/" header1="Authentication with Auth0" title1="Authentication with Auth0"
          imgSrc1="https://res.cloudinary.com/pollie/image/upload/v1726776409/homepage_flzeh0.png" imgAlt1="Authentication with Auth0" footer1="Using custom form for user signup, and standard navBar login/logout with Auth0 login window."
          link2="https://knowitalls.com/p/brian" header2="Streamlined User Signup" title2="Streamlined User Signup"
          imgSrc2="/profile2/images/auth0SignUp.png" imgAlt2="Inline user signup" footer2="Quick and easy for new users to sign up.  Allows user to browse and select Knowitall, then ensure availability match before signing up." />




<RowCard link1="https://www.knowitalls.com/p/brian" header1="Integrated Custom Booking Calendar" title1="Research page owner, select time to meet, and sign up for Knowitalls"
          imgSrc1="/profile2/images/booking.png" imgAlt1="Profile Booking screenshot" footer1="Integrated Custom Booking interface with in-line user sign-up."
          header2="Integrated Calendar Availability Setting" link2={null} dataUrl2="https://www.knowitalls.com/admin/account-settings"  title2="In house Availability Calendar Setting" imgSrc2="/profile2/images/availability.png" imgAlt2="Availability settings Page" footer2="Easy and intuitive 'Click and Drag' availability setting interface."  /> 


<RowCard link1={null} dataUrl1="https://www.knowitalls.com/admin/inbox" header1="Authenticated Chat Messaging" title1="Custom chat messaging - only authenticated users with active booking request can contact Knowitalls expert."
          imgSrc1="/profile2/images/chatMessaging.png" imgAlt1="Chat messaging screenshot" footer1="Custom Chat Message Inbox also allows management of requested sessions and booked sessions - based on Client/User"
          header2="Custom Third-Party Integrations for Payments and Video Conferencing" link2={null} dataUrl2="https://www.knowitalls.com/admin/payments"  title2="Custom Third-Party Integrations for Payments and Video Conferencing" imgSrc2="/profile2/images/custom3rdParty.png" imgAlt2="Availability settings Page" footer2="Custom Third-Party Integrations for Payments and Video Conferencing"  /> 


{/*  
        <RowCard link1="https://www.knowitalls.com/p/brian" header1="Integrated Custom Booking" title1="Research page owner, select time to meet, and sign up for Knowitalls"
          imgSrc1="/profile2/booking.png" imgAlt1="Profile Booking screenshot" footer1="Integrated Custom Booking interface for video conferencing transaction."
          header2="Tic Tac Toe with AI Player" link2="https://cdpn.io/p_ollie/debug/xyRRyq/yPAJjKXXWKQA" title2="Tic Tac Toe with AI Player" imgSrc2="https://res.cloudinary.com/pollie/image/upload/v1590523056/ticTacToe_gduhcm.jpg" imgAlt2="tic-tac-toe game" footer2="Play against the computer" />  */}




{/* https://pauloconnell.github.io/testCenter/ */}

<RowCard dataUrl1="https://pauloconnell.github.io/testCenter/" link1={null} header1="Test Center 2017-2020" title1="Delivers specific information for every item on sales floor and organizes similar models to increase sales conversions"
          imgSrc1="/profile2/images/testCenter.png" imgAlt1="Test Center app screenshot" footer1="Product Knowledge App used in multiple Retail Store Locations"
          link2="https://mrproconstruction.glitch.me/" header2="M.R.Pro Construction" title2="Landing page for Construction Company"
          imgSrc2="/profile2/images/MRPro.PNG" imgAlt2="M.R. PRO Construction" footer2="Landing page for construction company" />

{/* 

<RowCard link1="https://codepen.io/p_ollie/full/VMVeQw" header1="Wiki Search via API" title1="App that searches Wikipedia via API and displays several results"
          imgSrc1="https://res.cloudinary.com/pollie/image/upload/v1598909611/Wiki_search_avfb5n.png" imgAlt1="wiki search app" footer1="Search for articles on Wikipedia via API"
          link2="https://codepen.io/p_ollie/full/ayJXyZ" header2="Web Developer Profile (old)" title2="Profile developed with pure HTML and CSS"
          imgSrc2="https://res.cloudinary.com/pollie/image/upload/v1631908054/profile_v31u4b.png" imgAlt2="Web Developer profile image" footer2="Original Profile built with HTML and CSS" /> */}


{/* 
        <div className="row mx-1 justify-content-center">
          <section className="col-12 col-sm-5 my-1 px-0 link">
            <a
              className="link d-block"
              href="https://codepen.io/p_ollie/full/VMVeQw"
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-align">
                <span className="title text inlineBlock">
                  <strong><u>Wiki Search via API</u> </strong><br />

                  Search for articles on Wikipedia via API
                </span>

                <img
                  className="responsive"
                  src="https://res.cloudinary.com/pollie/image/upload/v1598909611/Wiki_search_avfb5n.png"
                  alt="wiki search"
                />
              </div>
            </a>
          </section>
          <div className="col-sm-auto"></div>

          <section className="col-12 col-sm-5 my-1 px-0 link">
            <a
              className="link d-block"
              title="Profile developed with pure HTML and CSS"
              href="https://codepen.io/p_ollie/full/ayJXyZ"
              target="_blank"
              rel="noreferrer"
            >
              <div className=" text-align">
                <span className="title text inlineBlock">
                  <strong><u>Web Developer Profile (old)</u> </strong><br />
                  Original Profile built with HTML and CSS
                </span>

                <img
                  className="responsive  mt-md-3 "
                  src="https://res.cloudinary.com/pollie/image/upload/v1631908054/profile_v31u4b.png"
                  alt="Web Developer"
                />
              </div>
            </a>
          </section>

        </div> */}
        {/* 
      <div className="row mx-1 justify-content-center">
        <section className="col-12 col-sm-5 py-1 px-0 link">

          <a
            className=" link d-block"
            href="https://codepen.io/p_ollie/full/RLrxPr"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" text-align">
              <span className="title text inlineBlock">
                <strong>
                  <u>API Quote Generator</u>
                </strong>
                <br />
              </span>

              <br />
              <img
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1598905735/API_quote_machien_cmbxot.png"
                alt="API Quote Generator"
              />
            </div>
          </a>
        </section>

        <div className="col-sm-auto"></div>
        <section className="col-12 col-sm-5 my-1 px-0 link">
          <a
            className="link d-block"
            href="https://ianbunburydogschool.glitch.me"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" text-align ">
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
                className="responsive"
                src="https://res.cloudinary.com/pollie/image/upload/v1615410052/profileBunbury_pcfb8t.png"
                alt="Ian Bunbury Dog School"
              />
            </div>
          </a>
        </section>
      </div>
*/}


      </section>
      <MyWork />
    </div>
  );
};

export default WebApps;