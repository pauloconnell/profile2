
import React from "react";
import { Link } from "react-router-dom";



export const Navbar = function () {
  return (


    <nav className="flexContainer text-center me-1">
      <Link className="col link border bgSolid my-1 " to="/" title="Homepage">
        Home
      </Link>

      <Link className="col link border bgSolid my-1" to="/about" title="About Me">
        About Me
      </Link>

      <Link className="col link border bgSolid my-1" to="/webApps" title="My Work Examples">
        My Work
      </Link>

      <Link className="col link border bgSolid my-1" to="/contact" title="Contact Me">
        Contact Me
      </Link>
    </nav>

  )
};