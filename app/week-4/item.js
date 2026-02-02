export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-white p-4 rounded-lg shadow border">
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize text-sm text-gray-600">
        Category: {category}
      </p>
    </li>
  );
}
