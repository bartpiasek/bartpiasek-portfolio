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
  imgStart,
}) {
  return (
    <div>
      <div className={lightBg ? "home__hero-section" : "home__section darkBg"}>
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-text-wrapper">
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headlineTwo}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark"
                  }
                >
                  {descriptionTwo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LearningSteps;