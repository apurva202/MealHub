import React from 'react'
import Layout from './layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Categories from './pages/Categories'
import CategoryMeals from './pages/CategoryMeals'
import MealDetails from './pages/MealDetails'
import Favorites from './pages/Favorites'
import SearchResults from './pages/SearchResults'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Categories />} />
          <Route path='categories/:category' element={<CategoryMeals />} />
          <Route path='meals/:meal' element={<MealDetails />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='search/:searchTerm' element={<SearchResults />} />
        </Route>
      </Routes>
    </>
  )
}

export default App