import React from "react";
import PropTypes from "prop-types";

function Movie(props) {
  return (
    <div>
      <h1
        style={
          props.label === "winner"
            ? {
                background: "#d3d3d3",
                borderRadius: "10px",
                boxShadow: "0 10px 20px #888888"
              }
            : null
        }
        className="movie-header"
      >
        {props.label}
      </h1>
      <div className="movie-result">
        <img
          className="movie-image"
          src={`https://image.tmdb.org/t/p/w300${props.movie.poster_path}`}
          alt={props.movie.title}
        />
        <div className="movie-info">
          <p>
            {props.movie.vote_average}
            /10
          </p>
        </div>
        <div className="overlay">
          <h3 className="overview-heading">Overview</h3>
          <p className="text">"{props.movie.overview}"</p>
          <p className="release-date">{props.movie.release_date}</p>
        </div>
      </div>
      <h3 className="movie-name">{props.movie.title}</h3>
    </div>
  );
}

Movie.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  movie: PropTypes.object.isRequired
};

export default Movie;
