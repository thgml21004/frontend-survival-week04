import React from 'react';

import Restaurant from '../types/restaurants';

import RestaurantsList from './RestaurantsList';

type RestaurantsTableProps = {
    restaurants: Restaurant[];
    onAddToCart: (restaurant: Restaurant) => void;
}

export default function RestaurantsTable({
  restaurants,
  onAddToCart,
}: RestaurantsTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        <RestaurantsList restaurants={restaurants} onAddToCart={onAddToCart} />
      </tbody>
    </table>
  );
}
