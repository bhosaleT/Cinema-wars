import React from "react";
import queryString from "query-string";
import api from "../utils/api";

export default class Results extends React.Component {
  componentDidMount() {
    var movies = queryString.parse(this.props.location.search);

    api
      .battle([movies.movieOneName, movies.movieTwoName])
      .then(function(results) {
        console.log(results);
      });
  }

  render() {
    return <div>battle</div>;
  }
}
