import React from "react";
import SelectGenre from "./SelectGenre";
import MovieGrid from "./MovieGrid";
import api from "../utils/api";
import Loading from './Loading';

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
  // This function updates state.
  updateGenre(genre) {
    this.setState(() => {
      return {
        selectedGenre: genre,
        movies: null
      };
    });

    /* // calling the fetch request on api.js which will return movies data and we will use the movies data to generate movie grid */

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
        {/* check if the movies state is null if not then render the MovieGrid component */}
        {!this.state.movies ? (
         <Loading />
        ) : (
          <MovieGrid movies={this.state.movies} />
        )}
      </div>
    );
  }
}
