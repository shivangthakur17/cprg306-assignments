import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {

  // Group items by category
  const groupedItems = itemsData.reduce((groups, item) => {
    const category = item.category;

    if (!groups[category]) {
      groups[category] = [];
    }

    groups[category].push(item);
    return groups;
  }, {});

  return (
    <div className="space-y-10">
      {Object.entries(groupedItems).map(([category, categoryItems]) => (
        <div key={category}>
          <h2 className="text-xl font-bold mb-4 capitalize">
            {category}
          </h2>

          <ul className="space-y-4">
            {categoryItems.map(item => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
