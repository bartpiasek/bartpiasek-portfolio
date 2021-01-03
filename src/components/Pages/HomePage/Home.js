import React from "react";
import HomeFooter from "../../Footer/HomeFooter/HomeFooter";
import HeroSection from "../../HeroSection/HeroSection";
import { homeObjOne, homeObjThree } from "./Data";

function Home() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <HomeFooter />
      {/* add my top 3 project */}
      <HeroSection {...homeObjThree} />
    </div>
  );
}

export default Home;
