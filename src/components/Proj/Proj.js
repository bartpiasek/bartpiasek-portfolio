import React from "react";
import Button from "../Button/Button";
import "./Proj.css";
import { SiReact } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function Proj() {
  return (
    <IconContext.Provider value={{ color: "#000000", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">My TOP 3 Projects</h1>
          <div className="pricing__container">
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <SiReact className="icon" />
                </div>
                <h3>Tytuł projektu</h3>
                <p>description</p>
                <ul className="pricing__container-features">
                  <li>asdf</li>
                  <li>asdf</li>
                  <li>asdf</li>
                </ul>
                {/* <Button buttonSize="btn--wide" buttonColor="primary">
                  GitHub repo
                </Button> */}
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo-dark">
                <div className="icon">
                  <SiReact />
                </div>
                <h3>Tytuł projektu</h3>
                <p>description</p>
                <ul className="pricing__container-features-dark">
                  <li>asdf</li>
                  <li>asdf</li>
                  <li>asdf</li>
                </ul>
                {/* <Button buttonSize="btn--wide" buttonColor="primary">
                  GitHub repo
                </Button> */}
              </div>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <div className="pricing__container-cardInfo">
                <div className="icon">
                  <SiReact />
                </div>
                <h3>Tytuł projektu</h3>
                <p>description</p>
                <ul className="pricing__container-features">
                  <li>asdf</li>
                  <li>asdf</li>
                  <li>asdf</li>
                </ul>
                {/* <Button buttonSize="btn--wide" buttonColor="primary">
                  GitHub repo
                </Button> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Proj;
