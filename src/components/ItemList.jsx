import Item from "./Item";

export default function ItemList({ food, IsLoading }) {
  return (
    <div>
      {" "}
      {IsLoading ? (
        <p>Loading </p>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
      {}{" "}
    </div>
  );
}
