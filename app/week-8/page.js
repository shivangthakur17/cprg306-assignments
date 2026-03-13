"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";

export default function Page() {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {

    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^\w\s]/gi, "");

    setSelectedItemName(cleanedName);
  }

  return (
    <main className="min-h-screen bg-purple-50 text-purple-900 dark:bg-black dark:text-purple-200 p-6">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping List
      </h1>

      <div className="mx-auto w-full lg:w-4/5 flex flex-col lg:flex-row gap-10">

        <div className="lg:w-1/2 space-y-8">

          <NewItem onAddItem={handleAddItem} />

          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
          />

        </div>

        <div className="lg:w-1/2 p-6 rounded-lg shadow bg-white dark:bg-purple-900">

          <MealIdeas ingredient={selectedItemName} />

        </div>

      </div>

    </main>
  );
}