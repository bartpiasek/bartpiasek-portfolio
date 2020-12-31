import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import ProjectCard6 from "./ProjectCard6/ProjectCard6";
import { MyProjectsOne } from "./Data";

function MyProjects() {
  return (
    <div>
      <HeroSection {...MyProjectsOne} />
      <ProjectCard6 />
    </div>
  );
}

export default MyProjects;
