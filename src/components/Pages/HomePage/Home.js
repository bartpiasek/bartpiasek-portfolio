import React from "react";
import HomeFooter from "../../Footer/HomeFooter/HomeFooter";
import HeroSection from "../../HeroSection/HeroSection";
import TextSection from "../../TextSection/TextSection";
import { homeObjOne, TextOne } from "./Data";

function Home() {
  return (
    <div>
      <HeroSection {...homeObjOne} />
      <HomeFooter />
      <TextSection {...TextOne} />
    </div>
  );
}

export default Home;
