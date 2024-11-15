import React, { useState } from 'react';

import { useLocalStorage } from 'usehooks-ts';

import Restaurants from './types/restaurants';

import RestaurantsTable from './components/RestaurantsTable';
import ButtonList from './components/ButtonList';
import SearchBox from './components/SearchBox';
import FoodCart from './components/FoodCart';
import Receipt from './components/Receipt';


interface Order {
    orderId: string;
    items: Restaurants[];
}

export default function App({ restaurants }: {
    restaurants: Restaurants[];
}) {
  const [filterMenu, setFilterMenu] = React.useState(restaurants);
  const [filterText, setFilterText] = useState<string>('');
    // 'cart' 키로 localStorage와 동기화되는 상태를 생성합니다.
    const [cart, setCart] = useLocalStorage<Restaurants[]>('cart', []);
    const [orders, setOrders] = useState<Order[]>([]);



  // eslint-disable-next-line max-len
  const filteredRestaurants = filterMenu.filter((restaurant) => restaurant.name.includes(filterText));

  const addToCart = (item: Restaurants) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const addOrder = (order: Order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <div>
      <h1>푸드코드 키오스크</h1>
      <FoodCart cart={cart} setCart={setCart} addOrder={addOrder} />
      <SearchBox
        placeholder="식당 이름"
        filterText={filterText}
        setFilterText={setFilterText}
      />
      <ButtonList
        setFilterMenu={setFilterMenu}
        restaurants={restaurants}
      />
      <RestaurantsTable restaurants={filteredRestaurants} onAddToCart={addToCart} />
      <h2>[영수증 나오는 곳]</h2>
      <Receipt orders={orders} />
    </div>
  );
}
