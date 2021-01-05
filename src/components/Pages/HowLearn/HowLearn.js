import React from "react";
import { HowLearn } from "./Data";
import { StepFour, StepOne, StepOTwo, StepThree } from "./Steps/Data";
import MainHeader from "../../MainHeader/MainHeader";
import GithubActivity from "./GithubActivity/GithubActivity";
import LearningSteps from "./Steps/LearningSteps";
import ProjectCardGrid from "../MyProjects/ProjectCardGrid/ProjectCardGrid";

function HowILearn() {
  return (
    <div>
      <MainHeader {...HowLearn} />
      {/* <ProjectCardGrid /> */}
      <LearningSteps {...StepOne} />
      <LearningSteps {...StepOTwo} />
      <LearningSteps {...StepThree} />
      <LearningSteps {...StepFour} />
      <GithubActivity />
    </div>
  );
}

export default HowILearn;
