import Menu from '../types/restaurants';

type MenuListProps = {
    menu : Menu[];
    onAddToCart: () => void;
}

export default function MenuList({
  menu, onAddToCart,
}:MenuListProps) {
  return (
    <td>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name}
            (
            {item.price}
            원)
            <button onClick={() => onAddToCart(item)}>선택</button>
          </li>
        ))}
      </ul>
    </td>
  );
}
