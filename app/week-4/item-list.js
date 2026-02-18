"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="space-y-6">

      {/* Sorting Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-lg shadow ${
            sortBy === "name"
              ? "bg-purple-600 text-white"
              : "bg-purple-200 text-purple-900 dark:bg-purple-800 dark:text-purple-100"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-lg shadow ${
            sortBy === "category"
              ? "bg-purple-600 text-white"
              : "bg-purple-200 text-purple-900 dark:bg-purple-800 dark:text-purple-100"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {/* Items */}
      <ul className="space-y-4">
        {sortedItems.map(item => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>

    </div>
  );
}
