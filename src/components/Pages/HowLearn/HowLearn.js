import React from "react";
import { HowLearn } from "./Data";
import { StepFour, StepOne, StepOTwo, StepThree } from "./Steps/Data";
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
      <LearningSteps {...StepFour} />
      <GithubActivity />
    </div>
  );
}

export default HowILearn;
