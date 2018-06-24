import React from "react";
import "./NavTabs.css"
const NavTabs = props => (
  <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href = "/" > Clicky Game </a>
      </li>
      <li className="nav-item">
        {props.answers}
      </li>
      <li className="nav-item">
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default NavTabs;
