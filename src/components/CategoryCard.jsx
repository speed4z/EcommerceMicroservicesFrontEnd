import React from "react";

function CategoryCard({ title, imgURL }) {
  return (
    <div className="p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-36 h-52 mx-2">
      <div className="relative w-full h-3/4">
        {" "}
        {/* 3/4 for image, 1/4 for text */}
        <img
          src={imgURL}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-md font-extrabold text-center">{title}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;
