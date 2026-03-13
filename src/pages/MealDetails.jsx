import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, Youtube, Utensils, Globe, Loader2, ExternalLink } from "lucide-react";

const MealDetails = () => {
  const { meal: mealId } = useParams();
  const navigate = useNavigate();

  const [mealData, setMealData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`,
        );
        setMealData(response.data.meals[0]);
      } finally {
        setLoading(false);
      }
    };

    fetchMealDetails();
  }, []);

  const extractIngredients = (meal) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({
          id: i,
          name: ingredient,
          measure: measure || "",
        });
      }
    }
    return ingredients;
  };

  if (loading) {
    return (
      <div className="w-full pt-50 bg-orange-50 flex items-center justify-center">
        <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
      </div>
    );
  }

  if (!mealData) {
    return (
      <div className="min-h-screen text-center py-20">Meal not found!</div>
    );
  }

  const ingredientsList = extractIngredients(mealData);

  return (
    <div className="w-full min-h-screen bg-orange-50 py-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="bg-white rounded-3xl shadow-sm border border-orange-100 overflow-hidden">
          <div className="w-full h-64 md:h-96 flex items-center justify-center pt-6 relative">
            <img
              src={mealData.strMealThumb}
              alt={mealData.strMeal}
              className="max-h-full rounded-2xl shadow-md"
            />
          </div>

          <div className="p-6 md:p-10">
            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                {mealData.strMeal}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1.5 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm font-bold">
                  <Utensils className="w-4 h-4" />
                  {mealData.strCategory}
                </span>
                <span className="flex items-center gap-1.5 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-sm font-bold">
                  <Globe className="w-4 h-4" />
                  {mealData.strArea}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              <div className="md:col-span-1 bg-orange-50/50 p-6 rounded-2xl border border-orange-100 h-fit">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  Ingredients
                </h2>
                <ul className="space-y-3">
                  {ingredientsList.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center text-sm border-b border-orange-200/50 pb-2 last:border-0"
                    >
                      <span className="font-semibold text-gray-800 capitalize">
                        {item.name}
                      </span>
                      <span className="text-gray-500 text-right">
                        {item.measure}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Instructions
                </h2>
                <div className="text-gray-600 space-y-4 leading-relaxed text-justify">
                  {mealData.strInstructions
                    .split("\n")
                    .map((paragraph, index) => {
                      if (paragraph.trim().length > 0) {
                        return <p key={index}>{paragraph}</p>;
                      }
                      return null;
                    })}
                </div>

                {mealData.strYoutube && (
                 <div className="mt-7 pt-5 border-t border-orange-100/50">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Youtube className="w-7 h-7 text-rose-500" />
                      Video Tutorial
                    </h3>
                    
                    <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm border border-orange-200 bg-black">
                      <iframe
                        className="w-full h-full"
                        src={mealData.strYoutube.replace("watch?v=", "embed/")}
                        title={`${mealData.strMeal} Video Tutorial`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-sm px-1">
                      <p className="text-gray-500">Video private or unavailable?</p>
                      <a 
                        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(mealData.strMeal + " recipe")}`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-rose-500 hover:text-rose-600 font-semibold flex items-center gap-1 transition-colors"
                      >
                        Search for another tutorial <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
