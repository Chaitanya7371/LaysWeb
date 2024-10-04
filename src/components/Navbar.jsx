import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/images/images";
import "../styles/Navbar.css";
import Dropdown from "../components/Dropdown";


function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img className="nav-logo" src={images.logo} alt="" />
        </Link>
        <div className="nav-center">
          <Dropdown></Dropdown>
          <input type="text" placeholder="Type something to find template" />
        </div>
      </div>

      <div className="nav-right">
        <button>Try this demo now</button>
        <button>Get app free</button>
      </div>
      
    </nav>
    </>
  );
}

export default Navbar;
