import React from "react";
import PropTypes from "prop-types";

function MovieGrid(props) {
  return (
    <ul className="discover-list">
      {props.movies.map((movie, index) => {
        return (
          <li key={movie.title} className="discover-item">
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
              <li className="movie-points">
                {movie.vote_average}
                /10
              </li>
              <div className="overlay">
                <h3 className="overview-heading">Overview</h3>
                <p className="text">"{movie.overview}"</p>
                <p className="release-date">{movie.release_date}</p>
              </div>
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
