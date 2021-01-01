import React from "react";
import "./ProjectCardGrid.css";
import { IconContext } from "react-icons/lib";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectOne from "./ProjectCard/ProjectCardData";

function ProjectCardGrid() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">My Projects</h1>
          <div className="pricing__container">
            <ProjectCard {...ProjectOne} />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <div className="pricing__container">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default ProjectCardGrid;
