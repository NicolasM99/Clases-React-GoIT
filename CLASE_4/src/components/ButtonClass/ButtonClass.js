import React, { Component } from "react";
import css from "../Button/Button.module.css";
import clsx from "clsx";
import PropTypes from "prop-types";

class ButtonClass extends Component {
  static propTypes = {
    variant: PropTypes.oneOf(["primary", "secondary", "outline"]),
    children: PropTypes.node,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
    disabled: PropTypes.bool,
    elevated: PropTypes.bool,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    variant: "primary",
  };

  render() {
    const { variant, children, disabled, elevated, onClick } = this.props;
    const classNames = clsx(css[variant], {
      [css.isDisabled]: disabled,
      [css.isElevated]: elevated,
    });
    return (
      <button onClick={onClick} className={classNames}>
        {children}
      </button>
    );
  }
}

export default ButtonClass;
