import React from "react";
import PropTypes from "prop-types";

export default class MovieInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviename: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState(() => {
      return {
        moviename: value
      };
    });
  }
  handleSubmit(event) {
      console.log(this.state.moviename)
      event.preventDefault();
      this.props.onSubmit(
          this.props.id,
          this.state.moviename
      )
  }
  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form-header" htmlFor="moviename">
          {this.props.label}
        </label>
        <input
          id="moviename"
          type="text"
          placeholder="Enter movie name"
          autoComplete="off"
          value={this.state.moviename}
          onChange={this.handleChange}
        />
        <button
          className="button-form"
          type="submit"
          disabled={!this.state.moviename}
        >
        Submit </button>
      </form>
    );
  }
}

MovieInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};
