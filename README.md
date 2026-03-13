# 🍲 MealHub

MealHub is a modern React recipe explorer that allows users to browse meal categories, view recipes, search for meals, and save favorites.
It uses **TheMealDB API** to fetch real meal data and is built with **React, React Router, Axios, and Tailwind CSS**.

---

## 🚀 Features

* 🔎 **Search Recipes**

  * Search any meal using the navbar search bar.

* 📂 **Browse Categories**

  * Explore meals organized into categories.

* 🍽 **Meal Details**

  * View ingredients, measurements, instructions, and a YouTube tutorial.

* ❤️ **Favorites System**

  * Save meals to favorites.
  * Stored in **localStorage** so favorites persist after refresh.

* 📱 **Responsive UI**

  * Fully responsive layout for mobile, tablet, and desktop.

* ⚡ **Fast Navigation**

  * Powered by **React Router DOM** for smooth client-side routing.

---

## 🛠 Tech Stack

* **React**
* **React Router DOM**
* **Axios**
* **Tailwind CSS**
* **Lucide React Icons**
* **TheMealDB API**

---

## 📡 API Used

This project uses the free recipe API:
```
https://www.themealdb.com/api.php
```

Endpoints used:

* Categories

```
https://www.themealdb.com/api/json/v1/1/categories.php
```

* Meals by Category

```
https://www.themealdb.com/api/json/v1/1/filter.php?c={category}
```

* Meal Details

```
https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}
```

* Search Meals

```
https://www.themealdb.com/api/json/v1/1/search.php?s={name}
```

---

## 📁 Project Structure

```
src
│
├── assets
│
├── components
│   ├── CategoryCard.jsx
│   ├── MealCard.jsx
│   └── Navbar.jsx
│
├── layout
│   └── Layout.jsx
│
├── pages
│   ├── Categories.jsx
│   ├── CategoryMeals.jsx
│   ├── Favorites.jsx
│   ├── MealDetails.jsx
│   └── SearchResults.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧭 Application Routes

| Route                   | Description                |
| ----------------------- | -------------------------- |
| `/`                     | View all categories        |
| `/categories/:category` | Meals in selected category |
| `/meals/:meal`          | Meal details               |
| `/favorites`            | Saved favorite meals       |
| `/search/:searchTerm`   | Search results             |

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/mealhub.git
```

Go into the project directory:

```bash
cd mealhub
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## 💾 Favorites Storage

Favorites are saved using **localStorage**:

```javascript
localStorage.setItem("mealHub_favorites", JSON.stringify(favorites));
```

This allows favorites to persist between sessions.

---


## 👨‍💻 Author

**Apurva Patil**
