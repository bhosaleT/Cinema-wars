import React from "react";
import Popular from "./Popular";
import Header from "./Header";
import Home from './Home';
import { BrowserRouter, Route} from "react-router-dom";

export default class App extends React.Component {
  render() {
    const heading = "Cinema Wars";
    return (
      <BrowserRouter>
        <div>
          <Header heading={heading} />
          <Route path="/popular" component={Popular} />
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}
