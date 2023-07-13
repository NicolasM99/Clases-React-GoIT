import React, { Component } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import css from "./Input.module.css";

class Input extends Component {
  static defaultProps = {
    onChange: () => {},
    type: "text",
    name: "",
    placeholder: "",
    disabled: false,
    label: "",
    id: "",
  };

  static propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { disabled, label, id, type } = this.props;
    const checkInput = type === "checkbox" || type === "radio";
    return (
      <div
        style={{
          display: "flex",
          flexDirection: checkInput ? "row-reverse" : "column",
          alignItems: checkInput ? "center" : "flex-start",
          gap: checkInput ? "8px" : "0",
          textAlign: "e",
        }}
      >
        {label && (
          <label
            htmlFor={id}
            style={{
              textAlign: "left",
              fontSize: checkInput ? "12px" : "8px",
            }}
          >
            {label}
          </label>
        )}
        <input
          className={clsx(css.input, { [css.disabled]: disabled })}
          {...this.props}
        />
      </div>
    );
  }
}

export default Input;
