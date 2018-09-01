import React from "react";
import queryString from "query-string";
import api from "../utils/api";
import { Link } from "react-router-dom";
import Movie from "./Movie";

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }
  componentDidMount() {
    var movies = queryString.parse(this.props.location.search);

    api.battle([movies.movieOneName, movies.movieTwoName]).then(results => {
      if (results === null) {
        return this.setState(() => {
          return {
            error: "Looks like there was an error. Check that the movie exists",
            loading: false
          };
        });
      }

      this.setState(() => {
        return {
          error: null,
          winner: results[0],
          loser: results[1],
          loading: false
        };
      });
    });
  }

  render() {
    const error = this.state.error;
    const winner = this.state.winner;
    const loser = this.state.loser;
    const loading = this.state.loading;

    if (loading === true) {
      return <p>Loading</p>;
    }
    if (error) {
      return (
        <div>
          <p>{error}</p>
          <Link to="/battle">Reset</Link>
        </div>
      );
    }

    return (
      <div className="form-container">
        <Movie label="winner" score={winner.vote_average} movie={winner} />
        <Movie label="loser" score={loser.vote_average} movie={loser} />
      </div>
    );
  }
}
