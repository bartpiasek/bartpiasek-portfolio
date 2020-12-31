import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import { AboutMeObjOne } from "./Data";

function AboutMe() {
  return (
    <div>
      <HeroSection {...AboutMeObjOne} />
    </div>
  );
}

export default AboutMe;
