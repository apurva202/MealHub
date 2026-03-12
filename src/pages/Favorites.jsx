import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowLeft, ChefHat } from "lucide-react";
import MealCard from "../components/MealCard";

const Favorites = () => {
  // DUMMY DATA: Simulating what you will eventually pull from LocalStorage
  const [favorites, setFavorites] = useState([
    {
      idMeal: "52772",
      strMeal: "Teriyaki Chicken Casserole",
      strMealThumb: "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    },
    {
      idMeal: "52871",
      strMeal: "Yaki Udon",
      strMealThumb: "https://www.themealdb.com/images/media/meals/wrstkv1608686063.jpg",
    },
    {
      idMeal: "52959",
      strMeal: "Baked salmon with fennel & tomatoes",
      strMealThumb: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
    },
    {
      idMeal: "52802",
      strMeal: "Fish pie",
      strMealThumb: "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
    }
  ]);

  return (
    <div className="w-full min-h-screen bg-orange-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-3">
            <div className="bg-rose-100 p-3 rounded-2xl">
              <Heart className="w-8 h-8 text-rose-500" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                Your <span className="text-rose-500">Favorites</span>
              </h1>
              <p className="text-gray-500 mt-1">
                You have saved {favorites.length} delicious recipes.
              </p>
            </div>
          </div>
        </div>

        {/* Conditional Rendering: Grid vs Empty State */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {favorites.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        ) : (
          /* Empty State (For later when you hook up real state) */
          <div className="bg-white rounded-3xl p-12 text-center border border-orange-100 shadow-sm max-w-2xl mx-auto mt-12">
            <div className="bg-orange-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <ChefHat className="w-12 h-12 text-orange-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">No favorites yet!</h2>
            <p className="text-gray-500 mb-8 max-w-md mx-auto">
              Looks like you haven't saved any meals. Browse our categories and click the heart icon on any dish you'd like to try later.
            </p>
            <Link 
              to="/" 
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition-colors inline-block"
            >
              Explore Recipes
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default Favorites;