import React from "react";
import { HowLearn } from "./Data";
import { StepOne, StepOTwo, StepThree } from "./Steps/Data";
import MainHeader from "../../MainHeader/MainHeader";
import GithubActivity from "./GithubActivity/GithubActivity";
import LearningSteps from "./Steps/LearningSteps";

function HowILearn() {
  return (
    <div>
      <MainHeader {...HowLearn} />
      <LearningSteps {...StepOne} />
      <LearningSteps {...StepOTwo} />
      <LearningSteps {...StepThree} />
      <GithubActivity />
    </div>
  );
}

export default HowILearn;
