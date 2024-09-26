// components/CategoryGrid.jsx

import React from "react";

const CategoryGrid = ({ categories, onClick }) => (
  <div className="grid grid-cols-2 gap-4 mt-5">
    {categories.map((category) => (
      <div
        key={category._id}
        className="card cursor-pointer"
        onClick={() => onClick(category._id)}
      >
        <img src={category.image} alt={category.name} className="rounded-xl" />
        <h2>{category.name}</h2>
      </div>
    ))}
  </div>
);

export default CategoryGrid;
