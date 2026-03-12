import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loader2, SearchX } from "lucide-react";
import MealCard from "../components/MealCard";

const SearchResults = () => {
  const { searchTerm } = useParams();

  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`,
        );
        setMeals(response.data.meals || []);
      } finally {
        setLoading(false);
      }
    };

    if (searchTerm) {
      fetchSearchResults();
    }
  }, [searchTerm]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-orange-50 flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
        <p className="text-orange-900/60 font-medium">
          Searching for recipes...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-orange-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
            Search Results for "
            <span className="text-orange-500">{searchTerm}</span>"
          </h1>
          <p className="text-gray-500 mt-2">
            Found {meals.length} {meals.length === 1 ? "recipe" : "recipes"}
          </p>
        </div>

        {meals.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {meals.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-orange-100 shadow-sm max-w-2xl mx-auto mt-12">
            <div className="bg-orange-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <SearchX className="w-12 h-12 text-orange-300" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              No exact matches
            </h2>
            <p className="text-gray-500">
              We couldn't find any meals matching "{searchTerm}". Try searching
              for something else like "Chicken" or "Pasta"!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
