import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import ProjectCardGrid from "./ProjectCardGrid/ProjectCardGrid";
import { MyProjectsOne } from "./Data";

function MyProjects() {
  return (
    <div>
      {/* <HeroSection {...MyProjectsOne} /> */}
      <ProjectCardGrid />
    </div>
  );
}

export default MyProjects;
