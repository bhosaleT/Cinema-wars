import React from "react";
import Popular from "./Popular";
import Header from "./Header";
import Home from "./Home";
import Arena from "./Arena";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Results from "./Results";

export default class App extends React.Component {
  render() {
    const heading = "Cinema Wars";
    return (
      <BrowserRouter>
        <div>
          <Header heading={heading} />
          <Switch>
            <Route
              path={process.env.PUBLIC_URL + "/popular"}
              component={Popular}
            />
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/arena"}
              component={Arena}
            />
            <Route
              path={process.env.PUBLIC_URL + "/arena/results"}
              component={Results}
            />
            <Route
              render={() => {
                return (
                  <div className="fourofour">
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
        </div>
      </BrowserRouter>
    );
  }
}
