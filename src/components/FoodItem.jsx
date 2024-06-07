export default function FoodItem({ food }) {
  return (
    <div>
      <img src={food.image} alt="" />
      <h1 key={food.id}>{food.title}</h1>
    </div>
  );
}
