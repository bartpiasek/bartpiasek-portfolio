import React from "react";
import "./LearningPath.css";
import { IconContext } from "react-icons/lib";

function LearningPath() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">My Projects</h1>
          <div className="pricing__container">
            <h1>asdf</h1>
          </div>
        </div>
      </div>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <div className="pricing__container">
            <h1>asdf</h1>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default LearningPath;
