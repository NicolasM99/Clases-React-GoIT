import React from "react";

export const productCardWrapperStyles = {
  color: "red",
  backgroundColor: "black",
  width: "300px",
  borderRadius: "16px",
};

const ProductCardWrapper = ({ children, className, style }) => {
  const newStyles = { ...productCardWrapperStyles, ...style };
  return <div style={newStyles}>{children}</div>;
};

export default ProductCardWrapper;
