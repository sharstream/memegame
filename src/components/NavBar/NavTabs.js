import React from "react";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a href = "/" > Clicky Game </a>
    </li>
    <li className="nav-item">
      You guessed correctly!
    </li>
    <li className="nav-item">
      Score: 0 | Top Score: 0
    </li>
  </ul>
);

export default NavTabs;
