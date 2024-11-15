import { Menu } from '../types/restaurants';

interface Order {
    orderId: string;
    items: Menu[];
}

interface FoodCartProps {
    cart: Menu[];
    setCart: (cart: Menu[]) => void;
    addOrder: (cart: Menu[]) => void;
}

export default function FoodCart({
  cart, setCart, addOrder,
}: FoodCartProps) {
  // 총 합계
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // 주문 처리
  const handleOrder = () => {
    if (cart.length === 0) {
      alert('장바구니가 비어 있습니다.');
      return;
    }

    const orderId = `${Date.now()}`;

    const newOrder: Order = { orderId, items: cart };
    addOrder(newOrder);

    // 장바구니 초기화
    setCart([]);
  };
  return (
    <div>
      <h2>주문 목록</h2>
      {cart.length === 0 ? (
        <p>장바구니가 비어 있음</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={item.id}>
              {item.name}
              (
              {item.price.toLocaleString()}
              원)
              <button onClick={() => setCart(cart.filter((_, i) => i !== index))}>
                취소
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleOrder}>
        합계:
        {totalPrice.toLocaleString()}
        원 주문
      </button>
    </div>
  );
}
