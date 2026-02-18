"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [mode, setMode] = useState("name");

  // ---------- GROUP MODE ----------
  if (mode === "group") {
    const grouped = {};

    items.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });

    return (
      <div className="space-y-6">

        <div className="flex gap-3">
          <button onClick={() => setMode("name")} className="px-4 py-2 rounded-lg bg-purple-200 dark:bg-purple-800">
            Sort by Name
          </button>
          <button onClick={() => setMode("category")} className="px-4 py-2 rounded-lg bg-purple-200 dark:bg-purple-800">
            Sort by Category
          </button>
          <button className="px-4 py-2 rounded-lg bg-purple-600 text-white">
            Group by Category
          </button>
        </div>

        {Object.keys(grouped).sort().map(category => (
          <div key={category}>
            <h2 className="text-xl font-bold mb-4 capitalize">
              {category}
            </h2>

            <ul className="space-y-4">
              {grouped[category]
                .sort((a,b)=>a.name.localeCompare(b.name))
                .map(item => (
                  <Item key={item.id} {...item} />
                ))
              }
            </ul>
          </div>
        ))}
      </div>
    );
  }

  // ---------- NORMAL SORT ----------
  const sortedItems = [...items].sort((a, b) => {
    if (mode === "name") return a.name.localeCompare(b.name);
    if (mode === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div className="space-y-6">

      <div className="flex gap-3">
        <button
          onClick={() => setMode("name")}
          className={`px-4 py-2 rounded-lg shadow ${
            mode === "name"
              ? "bg-purple-600 text-white"
              : "bg-purple-200 dark:bg-purple-800"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setMode("category")}
          className={`px-4 py-2 rounded-lg shadow ${
            mode === "category"
              ? "bg-purple-600 text-white"
              : "bg-purple-200 dark:bg-purple-800"
          }`}
        >
          Sort by Category
        </button>

        <button
          onClick={() => setMode("group")}
          className="px-4 py-2 rounded-lg shadow bg-purple-200 dark:bg-purple-800"
        >
          Group by Category
        </button>
      </div>

      <ul className="space-y-4">
        {sortedItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
