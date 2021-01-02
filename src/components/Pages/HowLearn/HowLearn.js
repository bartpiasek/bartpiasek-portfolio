import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import { HowLearn } from "./Data";
import LearningLine from "./LearningLine/LearningLine";
import GithubActivity from "./GithubActivity/GithubActivity";

function HowILearn() {
  return (
    <div>
      <HeroSection {...HowLearn} />
      <LearningLine />
      <GithubActivity />
    </div>
  );
}

export default HowILearn;
