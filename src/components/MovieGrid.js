import React from "react";
import PropTypes from "prop-types";

function MovieGrid(props) {
  return (
    <ul className="discover-list">
      {props.movies.map((movie, index) => {
        return (
          <li key={movie.title} className="discover-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={"Avatar for " + movie.title}
                  className="poster"
                />
              </li>
              <li>
                <p className="movie-title">{movie.title}</p>
              </li>
              <li className="movie-points">{movie.vote_average} Points</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

MovieGrid.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieGrid;
