import React from "react";
import CategoryCard from "./CategoryCard";

function CategoryGridLayout({ categories }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-10 gap-5">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          title={category.title}
          imgURL={category.imageUrl}
        />
      ))}
    </div>
  );
}

export default CategoryGridLayout;
