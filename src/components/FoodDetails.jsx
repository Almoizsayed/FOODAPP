import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  //   console.log(`foodId from props: ${foodId}`);
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "c10160ce1ada4012b02a69ada55e0089";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      {" "}
      Food Details {foodId} {food.title}
      <img src={food.image} alt="" />
    </div>
  );
}
