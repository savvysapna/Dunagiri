import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <section className="navbar">
        <div className="navbarMain">
          <nav className="navigation">
            <div className="logo">
              <img src="./images/logo.png" alt="" srcset="" />
            </div>
            <span>
              <a href="">About us</a>
            </span>
            <span>
              <a href="">Accomodations </a>
            </span>
            <span>
              <a href="">Retreats</a>
            </span>
            <span>
              <a href="">Activities</a>
            </span>
            <span>
              <a href="">Gallery</a>
            </span>
            <span>
              <a href="">Blog</a>
            </span>
            <span>
              <a href="">Contact Us</a>
            </span>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
