import React from "react";
import "./LearningSteps.css";
import { SiReact } from "react-icons/si";

function LearningSteps({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  headlineTwo,
  description,
  descriptionTwo,
  img,
  alt,
  imgStart,
}) {
  return (
    <div className="steps__card">
      <div className="pricing__section">
        {/* <div className="pricing__container-cardInfo"> */}
        <h3>{headline}</h3>
        <hr className="horizontal-line" />
        <p>{description}</p>
        <ul className="pricing__container-features">
          <p>{descriptionTwo}</p>
        </ul>
      </div>
    </div>
  );
}
export default LearningSteps;
