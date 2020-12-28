import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import { VscCode } from "react-icons/vsc";

function HeroSection({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
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
            <div className="home__hero-text-wrapper">
              <h1 className={lightText ? "heading" : "heading dark"}>
                {headline}
              </h1>
              {/* <div className="background-wrapper">
                <VscCode className="background-icon" />
              </div> */}

              <p
                className={
                  lightTextDesc
                    ? "home__hero-subtitle"
                    : "home__hero-subtitle dark"
                }
              >
                {description}
              </p>
              <Link to="/github">
                <Button buttonSize="btn--wide" buttonColor="black">
                  {buttonLabel}
                </Button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="home__hero-img-wrapper">
              <img src={img} alt={alt} className="home__hero-img"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
