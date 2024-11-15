import { Menu } from '../types/restaurants';

interface Order {
    orderId: string;
    items: Menu[];
}

interface ReceiptProps {
    orders: Order[];
}

export default function Receipt({ orders }: ReceiptProps) {
  return (
    <div>
      <h1>영수증</h1>
      {orders.length === 0 ? (
        <p>주문 내역이 없습니다.</p>
      ) : (
        <ul>
          {orders.map((order) => {
            const totalAmount = order.items.reduce(
              (total, item) => total + item.price,
              0,
            );

            return (
              <li key={order.orderId}>
                <p>
                  주문 번호:
                  {order.orderId}
                </p>
                <p>주문 내역:</p>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name}
                      {' '}
                      (
                      {item.price.toLocaleString()}
                      )
                      원
                    </li>
                  ))}
                </ul>
                <p>
                  주문 합계:
                  {' '}
                  {totalAmount.toLocaleString()}
                  원
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
