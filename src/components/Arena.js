import React from "react";
import api from "../utils/api";
import MovieInput from "./MovieInput";

class Arena extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieOneName: "",
      movieTwoName: "",
      movieOneImage: null,
      movieTwoImage: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(id, moviename) {
    console.log(moviename);
    api.searchMovies(moviename).then(movie => {
      const imageUrl = movie.poster_path;
      const movieName = movie.title;

      this.setState(() => {
        var newState = {};
        newState[id + "Name"] = movieName;
        newState[id + "Image"] = `https://image.tmdb.org/t/p/w300${imageUrl}`;
        return newState;
      });
      console.log(this.state.movieOneImage, this.state.movieOneName);
        console.log(this.state.movieTwoImage, this.state.movieTwoName);

    });
  }
  render() {
    const movieOneName = this.state.movieOneName;
    const movieTwoName = this.state.movieTwoName;
    return (
      <div>
        <div className="form-container">
          {!movieOneName && (
            <MovieInput
              id="movieOne"
              label="Movie One"
              onSubmit={this.handleSubmit}
            />
          )}
          {!movieTwoName && (
            <MovieInput
              id="movieTwo"
              label="Movie Two"
              onSubmit={this.handleSubmit}
            />
          )}
        </div>
      </div>
    );
  }
}
export default Arena;
