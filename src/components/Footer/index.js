import "./FooterStyles.scss";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-links-container">
            <div className="footer-links-wrapper">
              <div className="footer-link-items">
                <h1 className="footer-link-title">Home</h1>
                <Link className="footer-link" to="/signin">
                  Our Company
                </Link>
                <Link className="footer-link" to="/signin">
                  Brand
                </Link>
                <Link className="footer-link" to="/signin">
                  Blog
                </Link>
                <Link className="footer-link" to="/signin">
                  Careers
                </Link>
                <Link className="footer-link" to="/signin">
                  Help
                </Link>
              </div>

              <div className="footer-link-items">
                <h1 className="footer-link-title">Developers</h1>
                <Link className="footer-link" to="/signin">
                  Forums
                </Link>
                <Link className="footer-link" to="/signin">
                  Projects
                </Link>
                <Link className="footer-link" to="/signin">
                  Open Source
                </Link>
              </div>
            </div>
            <div className="footer-links-wrapper">
              <div className="footer-link-items">
                <h1 className="footer-link-title">Legal</h1>
                <Link className="footer-link" to="/signin">
                  Terms and Conditions
                </Link>
                <Link className="footer-link" to="/signin">
                  Privacy Policy
                </Link>
                <Link className="footer-link" to="/signin">
                  Terms of Use
                </Link>
              </div>
              <div className="footer-link-items">
                <h1 className="footer-link-title">Resources</h1>
                <Link className="footer-link" to="/signin">
                  Learn Platform
                </Link>
                <Link className="footer-link" to="/signin">
                  Community
                </Link>
                <Link className="footer-link" to="/signin">
                  Documentation
                </Link>
                <Link className="footer-link" to="/signin">
                  FAQ
                </Link>
                <Link className="footer-link" to="/signin">
                  Services Status
                </Link>
              </div>
            </div>
          </div>
          <section className="social-media">
            <div className="social-media-wrapper">
              <Link className="social-logo" to="/" onClick={toggleHome}>
                Home
              </Link>
              <small className="website-rights">
                Company @ {new Date().getFullYear()} All rights reserved
              </small>
              <div className="social-icons">
                <a
                  className="social-icon-link"
                  href="/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  className="social-icon-link"
                  href="/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  className="social-icon-link"
                  href="/"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </a>
                <a
                  className="social-icon-link"
                  href="/"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  className="social-icon-link"
                  href="/"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Footer;
