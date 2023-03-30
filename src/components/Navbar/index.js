
import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

import "./NavbarStyles.scss";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <nav className={scrollNav ? "navbar opaque" : "navbar transparent"}>
        <div className="navbar-container">
          <LinkR className="nav-logo" to="/" onClick={toggleHome}>
            Home
          </LinkR>
          <div className="mobile-icon" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <LinkS
                className="nav-link-s"
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {" "}
                About
              </LinkS>
            </li>
            <li className="nav-item">
              <LinkS
                className="nav-link-s"
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {" "}
                Contact
              </LinkS>
            </li>
            {/* <li className="nav-item">
              <LinkS
                className="nav-link-s"
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {" "}
                Services
              </LinkS>
            </li> */}
          </ul>
          <div className="nav-button">
            {/* <LinkR className="nav-button-link" to="/signin">
              Login / Sign Up
            </LinkR> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
