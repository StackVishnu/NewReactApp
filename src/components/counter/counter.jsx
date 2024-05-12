import { useFavorites } from "../../contexts/favouritecontext";

function Counter() {
  const { favorites } = useFavorites();
  return favorites.length;
}

export default Counter;
