import React from "react";

import PropTypes from "prop-types";

const ProductInfo = ({ name, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

ProductInfo.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
};

export default ProductInfo;
