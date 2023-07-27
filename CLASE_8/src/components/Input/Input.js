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
    value: "",
    checked: false,
    readOnly: false,
  };

  static propTypes = {
    onChange: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.number,
    ]),
    checked: PropTypes.bool,
    readOnly: PropTypes.bool,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //   const { label } = this.props;
  //   console.log(label, " fue renderizado");
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { label } = this.props;
  //   console.log(label, " fue actualizado");
  // }

  shouldComponentUpdate(nextProps) {
    const { value, type, checked, readOnly } = this.props;
    if (readOnly !== nextProps.readOnly) return true;
    if (type === "checkbox" || type === "radio") {
      if (checked === nextProps.checked) return false;
      // console.log("VALOR: ", value);
      // console.log("SIGUIENTES PROPS:", nextProps);
      return true;
    }
    if (value === nextProps.value) return false;
    // console.log("VALOR: ", value);
    // console.log("SIGUIENTES PROPS:", nextProps);
    return true;
  }

  // componentWillUnmount() {
  //   const { label } = this.props;
  //   console.log(label, "FUE DESMONTADO !!!!!");
  // }

  render() {
    const { disabled, label, id, type, readOnly, value } = this.props;
    const checkInput = type === "checkbox" || type === "radio";
    if (readOnly)
      return (
        <p>
          {label}: {value}
        </p>
      );
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
