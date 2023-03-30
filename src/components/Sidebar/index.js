import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

import "./SidebarStyles.scss";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <aside
        className={
          isOpen ? "sidebar-container active" : "sidebar-container inactive"
        }
        onClick={toggle}
      >
        <div className="icon" onClick={toggle}>
          <FaTimes className="close-icon" />
        </div>
        <div className="sidebar-wrapper">
          <ul className="sidebar-menu">
            <LinkS className="sidebar-link" to="about" onClick={toggle}>
              About
            </LinkS>
            <LinkS className="sidebar-link" to="contact" onClick={toggle}>
              Contact
            </LinkS>
            {/* <LinkS className="sidebar-link" to="services" onClick={toggle}>
              Services
            </LinkS> */}
          </ul>
          <div className="sidebar-button-wrapper">
            {/* <LinkR className="sidebar-route" to="signin">
              Login / Sign Up
            </LinkR> */}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
