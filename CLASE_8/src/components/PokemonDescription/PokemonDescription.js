import PropTypes from "prop-types";
import React, { Component } from "react";

export default class PokemonDescription extends Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      weight: PropTypes.number,
      type: PropTypes.arrayOf(PropTypes.string),
    }),
    date: PropTypes.string,
  };

  static defaultProps = {
    data: {
      name: "",
      weight: 0,
      type: [],
    },
    date: "",
  };
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data: { name, weight, type },
      date,
    } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>{weight}</p>
        <p>{type.join(", ")}</p>
        <h1>{date}</h1>
      </div>
    );
  }
}
