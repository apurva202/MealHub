import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";

const CategoryCard = ({ category }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = category;

  return (
    <Link
      to={`/category/${strCategory.toLowerCase()}`}
      className="group bg-white rounded-2xl p-5 border border-orange-100 shadow-sm hover:scale-105 hover:shadow-lg transition-all duration-300 flex flex-col h-full ease-out"
    >
      <div className="relative w-full aspect-square bg-orange-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={strCategoryThumb}
          alt={strCategory}
          className=" object-contain"
        />
      </div>

      <div className="flex flex-col grow">
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
          {strCategory}
        </h3>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">
          {strCategoryDescription}
        </p>

        <div className="mt-auto pt-4 flex items-center gap-1.5 text-orange-500 group-hover:text-orange-600">
          <span className="text-xs font-bold uppercase tracking-widest">
            View Dishes
          </span>
          <ArrowRight className="w-3 h-3 transform transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
