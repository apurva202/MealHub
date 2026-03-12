import React, { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import axios from "axios";
import { Loader2 } from "lucide-react";

const Categories = () => {
  // // Manual test data following TheMealDB API structure
  // const categoryList = [
  //   {
  //     idCategory: "1",
  //     strCategory: "Beef",
  //     strCategoryThumb: "https://www.themealdb.com/images/category/beef.png",
  //     strCategoryDescription:
  //       "Beef is the culinary name for meat from cattle, particularly skeletal muscle.",
  //   },
  //   {
  //     idCategory: "2",
  //     strCategory: "Chicken",
  //     strCategoryThumb: "https://www.themealdb.com/images/category/chicken.png",
  //     strCategoryDescription:
  //       "Chicken is a type of domesticated fowl, a subspecies of the red junglefowl.",
  //   },
  //   {
  //     idCategory: "3",
  //     strCategory: "Dessert",
  //     strCategoryThumb: "https://www.themealdb.com/images/category/dessert.png",
  //     strCategoryDescription:
  //       "Dessert is a course that concludes a meal, usually consisting of sweet foods.",
  //   },
  //   {
  //     idCategory: "4",
  //     strCategory: "Lamb",
  //     strCategoryThumb: "https://www.themealdb.com/images/category/lamb.png",
  //     strCategoryDescription:
  //       "Lamb, hogget, and mutton are the meat of domestic sheep at different ages.",
  //   },
  //   {
  //     idCategory: "5",
  //     strCategory: "Seafood",
  //     strCategoryThumb: "https://www.themealdb.com/images/category/seafood.png",
  //     strCategoryDescription:
  //       "Seafood is any form of sea life regarded as food by humans.",
  //   },
  //   {
  //     idCategory: "6",
  //     strCategory: "Pasta",
  //     strCategoryThumb: "https://www.themealdb.com/images/category/pasta.png",
  //     strCategoryDescription:
  //       "Pasta is a type of food typically made from an unleavened dough of wheat flour.",
  //   },
  // ];

  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`,
      );
      console.log(response.data.categories);
      setCategoryList(response.data.categories);
      setLoading(false);
    };

    fetchCategories();
  }, []);

  return (
    <div className="w-full min-h-screen bg-orange-50 py-10 pt-8.5 px-4 md:px-8">
      <div className="text-center max-w-xl mx-auto mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight mb-4">
          Explore <span className="text-orange-500">Categories</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Browse through our curated collections and find the perfect recipe for
          your next meal.
        </p>
      </div>

      {loading ? (
        <div className="w-full bg-orange-50 flex pt-15 items-center justify-center">
          <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 max-w-7xl mx-auto">
          {categoryList.map((category) => (
            <CategoryCard key={category.idCategory} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
