import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return <div className="header">
      <p>{props.heading}</p>
      <ul className="nav">
        <li>
          <NavLink className="nav-link" activeClassName="active" exact to={process.env.PUBLIC_URL + "/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" activeClassName="active" to={process.env.PUBLIC_URL + "/arena"}>
            Arena
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" activeClassName="active" to={process.env.PUBLIC_URL + "/popular"}>
            Discover
          </NavLink>
        </li>
      </ul>
    </div>;
}

export default Header;
