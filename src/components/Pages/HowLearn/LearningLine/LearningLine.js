import React from "react";
import "./LearningLine.css";

function LearningLine() {
  return (
    <div class="timeline">
      <ul>
        <li>
          <div class="content">
            <h3>Event 1</h3>
            <p>Event 1 Description</p>
          </div>
          <div class="point"></div>
          <div class="date">
            <h4>January 2020</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Event 2</h3>
            <p>Event 2 Description</p>
          </div>
          <div class="point"></div>
          <div class="date">
            <h4>July 2019</h4>
          </div>
        </li>
        <li>
          <div class="content">
            <h3>Event 3</h3>
            <p>Event 3 Description</p>
          </div>
          <div class="point"></div>
          <div class="date">
            <h4>March 2019</h4>
          </div>
        </li>
        ...
      </ul>
    </div>
  );
}
export default LearningLine;
