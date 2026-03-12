import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Heart, ExternalLink } from "lucide-react";

const MealCard = ({ meal }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const navigate = useNavigate();

  const toggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <Link
      to = {`/meals/${meal.idMeal}`}
      className="group relative bg-white rounded-3xl p-4 border border-orange-100 shadow-sm hover:shadow-orange-200/50 hover:scale-[1.03] hover:-translate-y-1 flex flex-col h-full cursor-pointer transition-transform duration-300 ease-out"
    >
      <div className="relative w-full aspect-square mb-4 bg-orange-50 rounded-2xl overflow-hidden">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        <button
          onClick={toggleFavorite}
          className={`absolute top-3 right-3 p-2.5 rounded-full cursor-pointer z-20 shadow-md active:scale-75 transition-all
            ${
              isFavorited
                ? "bg-rose-500 text-white"
                : "bg-white/95 text-gray-400 hover:text-rose-500"
            }`}
        >
          <Heart
            className="w-4 h-4"
            fill={isFavorited ? "currentColor" : "none"}
          />
        </button>
      </div>

      <div className="flex flex-col grow px-1">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
          {meal.strMeal}
        </h3>

        <div className="mt-2 flex items-center gap-1.5 text-orange-500">
          <span className="text-[10px] font-black uppercase tracking-widest">
            View Details
          </span>
          <ExternalLink className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
};

export default MealCard;
