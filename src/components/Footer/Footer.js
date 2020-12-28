import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">BART_PIASEK © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
