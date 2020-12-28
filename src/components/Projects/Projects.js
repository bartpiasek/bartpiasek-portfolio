import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Pricing from "../../Pricing";

function Projects() {
  return (
    <div>
      <Projects />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </div>
  );
}

export default Projects;
