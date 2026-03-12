import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavs = localStorage.getItem("mealHub_favorites");
    return savedFavs ? JSON.parse(savedFavs) : [];
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    localStorage.setItem("mealHub_favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggleFavorite(meal) {
    setFavorites((prev) => {
      if (prev.some((fav) => fav.idMeal === meal.idMeal)) {
        return prev.filter((fav) => fav.idMeal !== meal.idMeal);
      } else {
        return [...prev, meal];
      }
    });
  }

  return (
    <div className="bg-orange-50 min-h-screen">
      <Navbar />
      <Outlet context={{ favorites, toggleFavorite }} />
    </div>
  );
};

export default Layout;
