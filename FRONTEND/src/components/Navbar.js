import React, { useState } from "react";
import Logo from "../assests/logo.png";
import Logo from 
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        {/* Bars icon as a button */}
        <i className="fa-solid fa-bars barsIcon" onClick={toggleSidebar}></i>
        <img src={Logo} alt="Logo" className="logo" />
        <div className="title">Code Optimizer</div>
      </div>

      <div className="rightSide">
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* Sidebar */}
      {openSidebar && (
        <div className="sidebar">
          <div className="sidebarContent">
            <button className="closeButton" onClick={toggleSidebar}>
              ✖
            </button>
            <Link to="/" onClick={toggleSidebar}>
              Day 3
            </Link>
            <Link to="/about" onClick={toggleSidebar}>
              Day 2
            </Link>
            <Link to="/services" onClick={toggleSidebar}>
              Day 1
            </Link>
            <Link to="/contact" onClick={toggleSidebar}>
              Last Month
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
