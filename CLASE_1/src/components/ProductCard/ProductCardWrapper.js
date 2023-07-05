import React from "react";

const ProductCardWrapper = ({ children, className }) => {
  return (
    <div
      style={{
        color: "white",
        backgroundColor: "black",
        width: "300px",
        borderRadius: "16px",
      }}
    >
      {children}
    </div>
  );
};

export default ProductCardWrapper;
