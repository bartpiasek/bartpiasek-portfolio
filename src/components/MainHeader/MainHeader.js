import React from "react";
import Button from "../Button/Button";
import "./MainHeader.css";
import { SiReact } from "react-icons/si";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";

function MainHeader() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">My Projects</h1>
          <div className="pricing__container">
            <h1>asdf</h1>
            <h1>asdf</h1>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default MainHeader;
