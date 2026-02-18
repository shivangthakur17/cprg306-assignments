"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category
    };

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-lg shadow bg-white text-purple-900 dark:bg-purple-900 dark:text-purple-100 space-y-6"
    >
      <div className="space-y-2">
        <label className="font-semibold">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 rounded-md border border-purple-300 bg-purple-100 dark:bg-purple-700 dark:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="font-semibold">Quantity</label>
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-3 rounded-md border border-purple-300 bg-purple-100 dark:bg-purple-700 dark:border-purple-500 text-purple-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <div className="space-y-2">
          <label className="font-semibold">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 rounded-md border border-purple-300 bg-purple-100 dark:bg-purple-700 dark:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-md font-bold text-lg bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg hover:scale-[1.02] hover:from-purple-600 hover:to-purple-800 transition-all duration-200"
      >
        + Add Item
      </button>
    </form>
  );
}
