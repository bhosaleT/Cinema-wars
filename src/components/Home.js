import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <h1>CINEMA WARS</h1>
        <p>
          Pit your favourite movies against each other to find out which one's
          better once and for all.. after you are done playing with that
          checkout the discover section to see a curated list of new movies.
        </p>
        <Link className="button" to="/arena">
          Arena
        </Link>
      </div>
    );
  }
}
