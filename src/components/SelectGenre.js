import React from "react";
import PropTypes from "prop-types";

function SelectGenre(props) {

  var gameGenres = [
    { id: 28, name: "Action" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 18, name: "Drama" },
    { id: 27, name: "Horror" },
    { id: 10749, name: "Romance" },
    { id: 36, name: "History" },
    { id: 10751, name: "Family" }
  ];

  return (
    <div className="container">
    <ul className="genre-list">
      {gameGenres.map(index => {
        return (
          <li
            style={
              index.id === props.selectedGenre
                ? { background: "#d3d3d3" }
                : null
            }
            onClick={props.onSelect.bind(null, index.id)}
            key={index.name}
          >
            {index.name}
          </li>
        );
      })}
    </ul>
    </div>
  );
}
// Proptypes check
SelectGenre.propTypes = {
  selectedGenre: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default SelectGenre;
