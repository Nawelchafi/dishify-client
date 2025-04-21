import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../src/Dishify_logo.png"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    <nav className="nav-container">
      <section className="logo">
        <img src={logo} alt="logo-disihify" />
      </section>
      <div style={{ display: "flex ", gap: "10px" ,  }}>
        <Link to="/login" className="hamburger" style={{ textDecoration: "none" }} ><i className="ri-user-fill ">
        </i></Link>
        {/* Hamburger Button */}

        <i className={` ${isMenuOpen ? "ri-close-large-line hamburger" : "ri-menu-line hamburger"}`} onClick={toggleMenu}></i>
      </div>

      <section className={`links ${isMenuOpen ? "open" : ""}`}>
        <Link to="/">
          Home
        </Link>
        <Link to="/recipies" >
          Recipies
        </Link>
        <Link to="/about" >
          About
        </Link>
        <Link to="/FAQ" >
          FAQ
        </Link>
        <div className="registration">
          <Link className="register" to="/register" >
            register
          </Link>
          <Link className="login" to="/login">
            Login
          </Link>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;