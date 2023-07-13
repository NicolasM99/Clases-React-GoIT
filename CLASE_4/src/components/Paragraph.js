import React from "react";

import PropTypes from "prop-types";

const Paragraph = ({ children, title }) => {
  return (
    <div className="paragraph">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

Paragraph.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Paragraph;
