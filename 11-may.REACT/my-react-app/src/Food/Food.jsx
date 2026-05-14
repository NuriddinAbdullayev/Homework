import { useEffect, useState } from "react";
import "./Food.css";

function Food() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  return (
    <div className="food-container">
      <h1 className="food-title">Recipes</h1>

      <div className="food-grid">
        {meals.map((meal) => (
          <div className="food-card" key={meal.idMeal}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="food-image"
            />

            <h2 className="food-name">
              {meal.strMeal}
            </h2>

            <p className="food-area">
              {meal.strArea}
            </p>

            <p className="food-category">
              {meal.strCategory}
            </p>

            <button className="food-btn">
              Show Recipe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;