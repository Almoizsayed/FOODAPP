import { useEffect, useState } from "react";

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
      <div>
        <h1> {food.title} </h1>
        <img src={food.image} alt="" />
        <div>
          <span>
            {" "}
            <strong> {food.readyInMinutes} Minutes </strong>
          </span>
          <span>
            {" "}
            <strong>Serves {food.servings} </strong>
          </span>
          <span>{food.vegetarian ? "vegetarian" : "Non-Vegetarian"}</span>
          <span>{food.vegan ? "Vegan" : ""}</span>
        </div>
        <div>
          {" "}
          $<span>{food.pricePerServing / 100} per Serving </span>
        </div>
      </div>
      <div>
        <h2> Instructions </h2>
        {IsLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}
