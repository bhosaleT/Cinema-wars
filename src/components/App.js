import React from "react";
import Popular from "./Popular";
import Header from './Header';

export default class App extends React.Component {
  render() {
    const heading = "Cinema Wars";
    return (
      <div>
      <Header heading ={heading}  />
        <Popular />
      </div>
    );
  }
}
