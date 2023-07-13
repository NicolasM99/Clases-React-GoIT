import React from "react";
import css from "./Button.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

const Button = ({ variant = "button", children, disabled, elevated, type }) => {
  const classNames = clsx(css[variant], {
    [css.isDisabled]: disabled,
    [css.isElevated]: elevated,
  });
  return (
    <button type={type} className={classNames}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
  children: PropTypes.node,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
  disabled: PropTypes.bool,
  elevated: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
