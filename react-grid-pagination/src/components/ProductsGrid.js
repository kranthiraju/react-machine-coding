import React from "react";

const ProductItemCard = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.thumbnail} width="150px" />
      <p>{product.title}</p>
    </div>
  );
};

const ProductsGrid = ({ productsData }) => {
  return (
    <div className="product-grid">
      {productsData?.map((product, index) => (
        <ProductItemCard product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductsGrid;
