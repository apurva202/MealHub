import React from 'react'
import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Categories from './pages/Categories'
import CategoryMeals from './pages/CategoryMeals'
import MealDetails from './pages/MealDetails'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Categories />} />
          <Route path='categories/:category' element={<CategoryMeals />} />
          <Route path='meals/:meal' element={<MealDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App