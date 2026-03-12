import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CategoryCard = ({ category }) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = category;

  return (
    <Link
      to={`/categories/${strCategory.toLowerCase()}`}
      // Added 'md:hover' so scaling/shadow changes only happen on larger screens
      // Added 'active:scale-95' to give mobile users a "pressed" feel instead of a "stuck" hover
      className="group bg-white rounded-2xl p-5 border border-orange-100 shadow-sm transition-all duration-300 flex flex-col h-full ease-out md:hover:scale-105 md:hover:shadow-lg active:scale-95 active:bg-orange-50"
    >
      <div className="relative w-full aspect-square bg-orange-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={strCategoryThumb}
          alt={strCategory}
          className="w-4/5 h-4/5 object-contain"
        />
      </div>

      <div className="flex flex-col grow">
        {/* Only apply text color change on devices that support hover */}
        <h3 className="text-lg font-bold text-gray-800 md:group-hover:text-orange-600 transition-colors">
          {strCategory}
        </h3>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">
          {strCategoryDescription}
        </p>

        {/* Changed 'opacity-0' to 'hidden md:flex' or just keep it visible but only animate on desktop */}
        <div className="mt-auto pt-4 flex items-center gap-1.5 text-orange-500">
          <span className="text-xs font-bold uppercase tracking-widest">
            View Dishes
          </span>
          <ArrowRight className="w-3 h-3 transform md:group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;