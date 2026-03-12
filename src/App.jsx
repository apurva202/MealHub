import React from 'react'
import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom'
import Categories from './pages/Categories'
import CategoryMeals from './pages/CategoryMeals'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Categories />} />
          <Route path='categories/:category' element={<CategoryMeals />} />
        </Route>
      </Routes>
    </>
  )
}

export default App