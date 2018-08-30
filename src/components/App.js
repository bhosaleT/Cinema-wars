import React from "react";
import Popular from "./Popular";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import Arena from "./Arena";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  render() {
    const heading = "Cinema Wars";
    return (
      <BrowserRouter>
        <div>
          <Header heading={heading} />
          <Switch>
            <Route path="/popular" component={Popular} />
            <Route exact path="/" component={Home} />
            <Route exact path="/arena" component={Arena} />
            <Route
              render={() => {
                return (
                  <div className="fourofour" >
                    <iframe
                      src="https://giphy.com/embed/NTXqH1bUCfHBS"
                      width="480"
                      height="322"
                      frameBorder="0"
                      class="giphy-embed"
                      allowFullScreen
                    />
                    <p>
                      <a href="https://giphy.com/gifs/404-NTXqH1bUCfHBS">
                        via GIPHY
                      </a>
                    </p>
                  </div>
                );
              }}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
