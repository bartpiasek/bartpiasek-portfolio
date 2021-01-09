import React from "react";
import HomeFooter from "../../Footer/HomeFooter/HomeFooter";
import HeroSection from "../../HeroSection/HeroSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <HomeFooter />
      {/* add my top 3 project */}
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </div>
  );
}

export default Home;
