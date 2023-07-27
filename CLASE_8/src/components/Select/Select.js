import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Select extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.shape({ label: PropTypes.string, value: PropTypes.any })
    ),
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    options: [],
    label: "Select an option...",
    name: "",
    value: "",
    onChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { label, name, value, options, onChange } = this.props;
    return (
      <label>
        {label}
        <select name={name} value={value} onChange={onChange}>
          <option value="" disabled>
            ...
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  }
}
