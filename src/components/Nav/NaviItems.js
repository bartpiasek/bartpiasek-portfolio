import React from "react";
import NaviItem from "./NaviItem/NaviItem";
import classes from "./NaviItems.css";

const naviItems = (props) => (
  <ul className={classes.NaviItem}>
    <NaviItem link="/" active>
      About me
    </NaviItem>
    <NaviItem link="/" active>
      My Projects
    </NaviItem>
    <NaviItem link="/" active>
      Skills
    </NaviItem>
    <NaviItem link="/" active>
      Resume
    </NaviItem>
    <NaviItem link="/" active>
      Contact
    </NaviItem>
  </ul>
);

export default naviItems;
