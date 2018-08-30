import React from "react";
import Popular from "./Popular";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  render() {
    const heading = "Cinema Wars";
    return (
      <BrowserRouter>
        <div>
          <Header heading={heading} />
          <Route path="/popular" component={Popular} />
        </div>
      </BrowserRouter>
    );
  }
}
