import React from "react";
import ProductCard from "./ProductCard";
import productList from "./productList";

function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-4 p-5">
      {productList.map((product) => (
        <ProductCard
          key={product.productId}
          prodId={product.productId}
          name={product.name}
          type={product.type}
          price={product.price}
          desc={product.description}
          imgURL={product.imageURL}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
