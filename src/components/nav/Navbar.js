
import React from "react";
import { Link } from "react-router-dom";



export const Navbar = function () {
  return (


    <nav className="flexContainer text-center">
      <Link className="col link border bgSolid my-1 " to="/">
        Home
      </Link>

      <Link className="col link border bgSolid my-1" to="/about">
        About Me
      </Link>

      <Link className="col link border bgSolid my-1" to="/Contact">
        Contact Me
      </Link>
    </nav>

  )
};