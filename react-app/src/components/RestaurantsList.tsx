import Restaurant from '../types/restaurants';

import MenuList from './MenuList';

type RestaurantsListProps = {
    restaurants: Restaurant[];
    onAddToCart: (restaurant: Restaurant) => void;
}

export default function RestaurantsList({
  restaurants, onAddToCart,
}: RestaurantsListProps) {
  return (
    <>
      {restaurants.map((restaurant) => (
        <tr key={restaurant.id}>
          <td>{restaurant.name}</td>
          <td>{restaurant.category}</td>
          <MenuList menu={restaurant.menu} onAddToCart={onAddToCart} />
        </tr>
      ))}
    </>
  );
}
