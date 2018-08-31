import React from "react";
import PropTypes from "prop-types";

function MoviePreview(props) {
  return (
    <div className="movie-preview">
      <div className="discover-item">
        <img
          className="poster"
          src={props.avatar}
          alt={`Avatar for ${props.movieName}`}
        />
        <h2 className="movie-title">{props.movieName}</h2>
      </div>
      <button className="reset" onClick={props.onReset.bind(null, props.id)}>
        Reset
      </button>
    </div>
  );
}

MoviePreview.propTypes = {
  avatar: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default MoviePreview;
