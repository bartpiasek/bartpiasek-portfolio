import React from "react";
import classes from "./Toolbar.css";
import NaviItems from "../Nav/NaviItems";

const toolbar = (props) => (
  <div className={classes.Toolbar}>
    <nav className={classes.DesktopOnly}>
      <h3>BART PIASEK</h3>
      <NaviItems />
    </nav>
  </div>
);

export default toolbar;
