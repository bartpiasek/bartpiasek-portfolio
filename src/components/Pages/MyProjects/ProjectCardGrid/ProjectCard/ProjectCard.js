import React from "react";
import { SiReact } from "react-icons/si";
import { Link } from "react-router-dom";

function ProjectCard() {
  return (
    <Link to="/sign-up" className="pricing__container-card">
      <div className="pricing__container-cardInfo">
        <div className="icon">
          <SiReact className="icon" />
        </div>
        <h3>fh</h3>
        <p>description</p>
        <ul className="pricing__container-features">
          <li>asdf</li>
          <li>asdf</li>
          <li>asdf</li>
        </ul>
      </div>
    </Link>
  );
}
export default ProjectCard;
