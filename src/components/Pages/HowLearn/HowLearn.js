import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import { HowLearn } from "./Data";
import LearningLine from "./LearningLine/LearningLine";

function HowILearn() {
  return (
    <div>
      <HeroSection {...HowLearn} />
      {/* <LearningLine /> */}
    </div>
  );
}

export default HowILearn;
