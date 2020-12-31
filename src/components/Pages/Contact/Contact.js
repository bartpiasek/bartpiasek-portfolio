import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import { Contact } from "./Data";

function ContactMe() {
  return (
    <div>
      <HeroSection {...Contact} />
    </div>
  );
}

export default ContactMe;
