import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import Proj from "../../Proj/Proj";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <Proj />
      <HeroSection {...homeObjThree} />
    </div>
  );
}

export default Home;
