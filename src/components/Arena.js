import React from "react";
import api from "../utils/api";
import MovieInput from "./MovieInput";
import MoviePreview from "./MoviePreview";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

class Arena extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieOneName: "",
      movieTwoName: "",
      movieOneScore: null,
      movieTwoScore: null,
      movieOneImage: null,
      movieTwoImage: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, moviename) {
    console.log(moviename);
    api.searchMovies(moviename).then(movie => {
      const imageUrl = movie.poster_path;
      const movieName = movie.title;
      const movieScore = movie.vote_average;

      this.setState(() => {
        var newState = {};
        newState[id + "Name"] = movieName;
        newState[id + "Image"] = `https://image.tmdb.org/t/p/w300${imageUrl}`;
        newState[id + "Score"] = movieScore;
        return newState;
      });
      console.log(this.state.movieOneImage, this.state.movieOneName);
      console.log(this.state.movieTwoImage, this.state.movieTwoName);
      console.log(this.state.movieOneScore, this.state.movieTwoScore);
    });
  }

  handleReset(id) {
    this.setState(() => {
      var newState = {};
      newState[id + "Name"] = "";
      newState[id + "Image"] = null;
      return newState;
    });
  }
  render() {
    const match = this.props.match;
    const movieOneName = this.state.movieOneName;
    const movieTwoName = this.state.movieTwoName;
    const movieOneImage = this.state.movieOneImage;
    const movieTwoImage = this.state.movieTwoImage;
    const movieOneScore = this.state.movieOneScore;
    const movieTwoScore = this.state.movieTwoScore;
    return (
      <div className="arena-container">
        <Popup
          trigger={<button className="trigger-button">Lost?</button>}
          position="right center"
        >
          <div className="popup-message">
            Enter the name of your two favourite movies and hit the battle
            button see the magic happen!
          </div>
        </Popup>
        <div className="form-container">
          {!movieOneName && (
            <MovieInput
              id="movieOne"
              label="Movie One"
              onSubmit={this.handleSubmit}
            />
          )}
          {movieOneImage !== null && (
            <MoviePreview
              movieOneScore={movieOneScore}
              avatar={movieOneImage}
              movieName={movieOneName}
              onReset={this.handleReset}
              id="movieOne"
            />
          )}
          {!movieTwoName && (
            <MovieInput
              id="movieTwo"
              label="Movie Two"
              onSubmit={this.handleSubmit}
            />
          )}
          {movieTwoImage !== null && (
            <MoviePreview
              movieTwoScore={movieTwoScore}
              avatar={movieTwoImage}
              movieName={movieTwoName}
              onReset={this.handleReset}
              id="movieTwo"
            />
          )}
        </div>
        {movieOneImage &&
          movieTwoImage && (
            <Link
              className="button-link"
              to={{
                pathname: match.url + "/results",
                search:
                  "?movieOneName=" +
                  movieOneName +
                  "&movieTwoName=" +
                  movieTwoName
              }}
            >
              Battle
            </Link>
          )}
      </div>
    );
  }
}
export default Arena;
