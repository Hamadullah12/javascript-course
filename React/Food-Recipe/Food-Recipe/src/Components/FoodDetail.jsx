import { useEffect, useState } from "react";
import styles from "./foodDetail.module.css";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "b7804eefd6934db1910edc54793d4c1e";
  // const API_KEY = "8a6c34f362d5440b96fc21728ae42576";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes}</strong>
          </span>
          <span>
            <strong> 👩‍👩‍👦‍👦 Serving {food.servings}</strong>
          </span>
          <span>
            <strong>
              {" "}
              {food.veryHealthy ? "🍎 Healthy Food" : "🍕Non-Healthy Food"}
            </strong>
          </span>
        </div>
        <div>
          <strong>
            <span>💲 {food.pricePerServing / 100} per serving</span>
          </strong>
        </div>
        <h2>Ingredient</h2>
        {food.extendedIngredients &&
          food.extendedIngredients.map((item) => (
            <div>
              <img
                src={
                  `https://spoonacular.com/cdn/ingredients_100x100/` +
                  item.image
                }
                alt=""
              />
              <h3> {item.name}</h3>
              <h3>
                {item.amount} {item.unit}
              </h3>
            </div>
          ))}
        <h1>Instructions</h1>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading....</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
