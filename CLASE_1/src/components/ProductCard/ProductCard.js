import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import PropTypes from "prop-types";
import ProductCardWrapper from "./ProductCardWrapper";

const ProductCard = ({ imageSrc, name, description }) => {
  return (
    <ProductCardWrapper className={"product-card-red"}>
      <ProductImage src={imageSrc} />
      <ProductInfo name={name} description={description} />
    </ProductCardWrapper>
  );
};

ProductCard.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

export default ProductCard;
