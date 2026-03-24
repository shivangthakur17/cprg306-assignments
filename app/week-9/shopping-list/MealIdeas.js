"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();

  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {

  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    if (!ingredient) return;

    try {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (

    <div className="space-y-4">

      <h2 className="text-2xl font-bold">
        Meal Ideas
      </h2>

      {ingredient && (
        <p className="italic">
          Ingredient: {ingredient}
        </p>
      )}

      <ul className="space-y-2">

        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="p-3 rounded-md bg-purple-100 border border-purple-300 dark:bg-purple-800 dark:border-purple-400"
          >
            {meal.strMeal}
          </li>
        ))}

      </ul>

    </div>

  );
}