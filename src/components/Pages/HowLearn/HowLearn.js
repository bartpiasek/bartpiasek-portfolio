import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import { HowLearn } from "./Data";
import LearningPath from "./LearningPath/LearningPath";
import GithubActivity from "./GithubActivity/GithubActivity";

function HowILearn() {
  return (
    <div>
      <LearningPath />
      <GithubActivity />
    </div>
  );
}

export default HowILearn;
