import React from "react";
import { Link } from "react-router-dom";
import { Search, Heart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-orange-50/80 backdrop-blur-md border-b border-orange-200/50 shadow-sm transition-all px-7">
      <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-y-4">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight flex items-center gap-2 text-orange-900 hover:text-orange-600 transition-colors duration-300"
          >
            <span className="text-3xl drop-shadow-sm">🍲</span>
            <span>MealHub</span>
          </Link>
        </div>

        <div className="order-last md:order-0 w-full md:w-auto md:flex-1 max-w-lg mx-auto md:mx-4">
          <div className="flex items-center bg-white/70 rounded-full border border-orange-200/60 overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-orange-400 focus-within:bg-white transition-all hover:bg-white/90">
            <input
              type="text"
              placeholder="Search meals..."
              className="w-full bg-transparent px-5 py-2.5 text-sm text-orange-900 placeholder-gray-600 focus:outline-none"
            />
            <button
              type="button"
              className="bg-orange-400 cursor-pointer hover:bg-orange-500 text-white px-6 py-2.5 flex items-center justify-center transition-all duration-300"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <Link
            to="/favorites"
            className="group flex items-center gap-2 font-semibold text-orange-800 hover:text-orange-600 transition-colors duration-300 px-4 py-2 rounded-full hover:bg-orange-200/30"
          >
            <Heart className="w-5 h-5 text-orange-500" fill="currentColor" />
            <span className="hidden sm:inline ">Favorites</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
