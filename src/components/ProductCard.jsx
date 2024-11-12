import React from "react";

function ProductCard({ name, type, price, desc, imgURL }) {
  return (
    <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-56 h-[380px] mx-2 flex flex-col">
      <div className="relative w-full h-3/4">
        <img
          src={imgURL}
          alt={name}
          className="w-full h-40 object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-between mt-3 flex-grow">
        <div className="overflow-hidden">
          <h3 className="text-sm font-extrabold">{name}</h3>
          <p className="text-xs text-gray-600">{type}</p>
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{desc}</p>
        </div>
        <div className="mt-2">
          <p className="text-sm font-semibold text-blue-500">${price}</p>
        </div>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition font-extrabold">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
