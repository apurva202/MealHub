import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, Loader2 } from "lucide-react";
import MealCard from "../components/MealCard";

const CategoryMeals = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
        );
        setMeals(response.data.meals);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div className="w-full min-h-screen bg-orange-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto mb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-black text-gray-900 capitalize tracking-tight">
          {category} <span className="text-orange-500">Collection</span>
        </h1>
        <div className="h-1.5 w-20 bg-orange-500 mt-3 rounded-full"></div>
      </div>

      {loading ? (
        <div className="flex flex-col justify-center items-center h-64 gap-4">
          <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
          <p className="text-orange-900/60 font-medium italic">
            Fetching the best {category} dishes...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryMeals;
