import React from "react";
import "./MainHeader.css";

function MainHeaderTxt({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  headlineTwo,
  description,
  descriptionTwo,
  buttonLabel,
  img,
  alt,
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
          <hr />
        </div>
      </div>
    </div>
  );
}

export default MainHeaderTxt;
