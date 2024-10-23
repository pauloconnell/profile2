import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../nav/Navbar";
//import styles from "../App.css";
/* the main page for the index route of this app */

const Header = function () {
    return (
  
  
      <header className="textAlign mb-3">
        <Navbar />
        <h1 className="text" id="name">
          Paul O'Connell
        </h1>

        <h2 className="pb-2 pt-4">
          <span className="readEasy">Full Stack Software Developer</span>
        </h2>

        {/* <!--
             
               potential future update:  links use bootstrap navBar 
            
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light "
          
        >
          <div className="container-fluid">
       
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">Paul O'Connell</span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active col link border aria-current page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link col link border" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle col link border"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link col link border"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        --> */}
      </header>
    );
  }

  export default Header;
