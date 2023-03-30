import React, { useState } from "react";
import Video from "../../videos/video11.mp4";
import Image from "../../images/herobackground.jpg";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

import "./HeroSectionStyles.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="hero-container">
      <div className="hero-bg">
        {/* <video
          className="video-bg"
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        /> */}
        <img
        className="video-bg"
        src={Image}
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-h1">Hi, I am Yawar</h1>
        <p className="hero-p">I design and develop websites</p>
        {/* <div className="hero-button-wrapper">
          <button
            className="button"
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started{" "}
            {hover ? (
              <MdArrowForward className="arrow-forward" />
            ) : (
              <MdKeyboardArrowRight className="arrow-right" />
            )}
          </button>
        </div> */}

        <div className="hero-icons-wrapper">
        <a
            className="social-icon-link"
            href="https://github.com/yawarkhan44"
            target="_blank"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            className="social-icon-link"
            href="https://www.linkedin.com/in/imyk/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default HeroSection;
