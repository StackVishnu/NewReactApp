import { useFavorites } from "../../contexts/favouritecontext";

function Counter() {
  const { favorites } = useFavorites();
  return <div>Count:{favorites.length}</div>;
}
export default Counter;
