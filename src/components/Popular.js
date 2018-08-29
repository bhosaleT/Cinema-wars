import React from "react";
import SelectGenre from "./SelectGenre";
import MovieGrid from "./MovieGrid";
import api from "../utils/api";

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: 28,
      movies: null
    };
    this.updateGenre = this.updateGenre.bind(this);
  }
  componentDidMount() {
    this.updateGenre(this.state.selectedGenre);
  }

  updateGenre(genre) {
    console.log(genre);
    this.setState(() => {
      return {
        selectedGenre: genre,
        movies: null
      };
    });

    api.discoverMovies(genre).then(movies => {
      this.setState(() => {
        return {
          movies: movies
        };
      });
    });
  }

  render() {
    return (
      <div>
        <SelectGenre
          selectedGenre={this.state.selectedGenre}
          onSelect={this.updateGenre}
        />
        {!this.state.movies ? (
          <p>LOADING</p>
        ) : (
          <MovieGrid movies={this.state.movies} />
        )}
      </div>
    );
  }
}
