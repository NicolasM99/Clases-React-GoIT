import React from "react";
import PropTypes from "prop-types";

const colorDict = {
  primary: "red",
  secondary: "green",
};

const Header = ({ variant, color = "primary", children }) => {
  if (!children) return null;
  if (variant === "h2")
    return (
      <h2 style={{ fontSize: "72pt", color: colorDict[color] }}>{children}</h2>
    );
  if (variant === "h3")
    return (
      <h3 style={{ fontSize: "48pt", color: colorDict[color] }}>{children}</h3>
    );
  if (variant === "h4")
    return (
      <h4 style={{ fontSize: "36pt", color: colorDict[color] }}>{children}</h4>
    );
  if (variant === "h5")
    return (
      <h5 style={{ fontSize: "24pt", color: colorDict[color] }}>{children}</h5>
    );
  return (
    <h1 style={{ fontSize: "96pt", color: colorDict[color] }}>{children}</h1>
  );
};

Header.propTypes = {
  variant: PropTypes.oneOf(["h2", "h3", "h4", "h5"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node,
};

export default Header;
