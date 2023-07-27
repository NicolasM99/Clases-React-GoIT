import React from "react";

import clsx from "clsx";
import css from "./InputFunction.module.css";
import PropTypes from "prop-types";

const InputFunction = ({
  onChange = () => {},
  type = "text",
  name = "",
  placeholder = "",
  disabled = false,
  label = "",
  id = "",
  value = "",
  checked = false,
  readOnly = false,
  ...restProps
}) => {
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
        onChange={onChange}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        className={clsx(css.input, { [css.disabled]: disabled })}
        {...restProps}
      />
    </div>
  );
};

InputFunction.propTypes = {
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

export default InputFunction;
