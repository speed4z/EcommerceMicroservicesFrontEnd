import React from "react";

function ProductCard({ prodId, name, type, price, desc, imgURL }) {
  return (
    <div className="p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-36 h-72 mx-2">
      <div className="relative w-full h-3/4">
        {/* Image for product */}
        <img
          src={imgURL}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="mt-3">
        {/* Product name */}
        <h3 className="text-sm font-extrabold text-center">{name}</h3>

        {/* Product type */}
        <p className="text-xs text-center text-gray-600">{type}</p>

        {/* Product description */}
        <p className="text-xs text-center text-gray-500 mt-1">{desc}</p>

        {/* Product price */}
        <p className="text-sm font-semibold text-center text-blue-500 mt-2">
          ${price}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
