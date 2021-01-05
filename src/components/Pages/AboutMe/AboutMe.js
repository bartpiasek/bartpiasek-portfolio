import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import LearningSteps from "../HowLearn/Steps/LearningSteps";
import { AboutMeObjOne, AboutMeObjTwo } from "./Data";

function AboutMe() {
  return (
    <div>
      <HeroSection {...AboutMeObjOne} />
      <LearningSteps {...AboutMeObjTwo} />
    </div>
  );
}

export default AboutMe;
