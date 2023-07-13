import React from "react";

import PropTypes from "prop-types";

const ProductImage = ({ src }) => {
  return src ? (
    <img style={{ width: "100px" }} src={src} alt="product-card" />
  ) : null;
};

ProductImage.propTypes = {
  src: PropTypes.string,
};

export default ProductImage;
