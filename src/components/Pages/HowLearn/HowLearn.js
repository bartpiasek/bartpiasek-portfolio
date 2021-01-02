import React from "react";
import { HowLearn } from "./Data";
import MainHeader from "../../MainHeader/MainHeader";
import GithubActivity from "./GithubActivity/GithubActivity";

function HowILearn() {
  return (
    <div>
      <MainHeader {...HowLearn} />
      <GithubActivity />
    </div>
  );
}

export default HowILearn;
