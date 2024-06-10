import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
export default function FoodDetails({ foodId }) {
  //   console.log(`foodId from props: ${foodId}`);
  const [food, setFood] = useState({});
  const [IsLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "c10160ce1ada4012b02a69ada55e0089";
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
        <h1 className={styles.recipeName}> {food.title} </h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            {" "}
            <strong> {food.readyInMinutes} Minutes </strong>
          </span>
          <span>
            {" "}
            <strong>Serves {food.servings} </strong>
          </span>
          <span>
            <strong>{food.vegetarian ? "vegetarian" : "Non-Vegetarian"}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "Vegan" : ""}</strong>
          </span>
          {/* <span>{food.pricePerServing / 100} per Serving </span> */}
        </div>
        <div>
          {" "}
          $
          <span>
            <strong>{food.pricePerServing / 100} per Serving </strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        {food.extendedIngredients.map((item) => (
          <div>
            {" "}
            <img
              src={
                `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
              }
              alt=""
            />
            <h3> {item.name}</h3>
            <h3>
              {" "}
              {item.amount} {item.unit}
            </h3>
          </div>
        ))}
        <h2> Instructions </h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {IsLoading ? (
              <p>Loading...</p>
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
