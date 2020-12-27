import React from "react";
import classes from "./NaviItem.css";

const naviItem = (props) => (
  <li className={classes.NaviItem}>
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>
);

export default naviItem;
