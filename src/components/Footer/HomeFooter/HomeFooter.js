import React from "react";
import "./HomeFooter.css";
import { Link } from "react-router-dom";
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiDjango,
  SiMysql,
  SiAdobeillustrator,
  SiPostman,
  SiVisualstudiocode,
} from "react-icons/si";

function HomeFooter() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <SiJavascript />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Github"
            >
              <SiReact />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <SiPython />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <SiDjango />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <SiMysql />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <SiPostman />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <SiVisualstudiocode />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <SiAdobeillustrator />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeFooter;
