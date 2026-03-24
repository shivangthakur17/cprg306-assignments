"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";

import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";

export default function Page() {
  const { user, loading, logout } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  // 🔐 Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push("/week-9");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-purple-50 dark:bg-black">
        <p className="text-purple-600 dark:text-purple-300 animate-pulse">
          Checking authentication...
        </p>
      </main>
    );
  }

  if (!user) return null;

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

  const handleLogout = async () => {
    await logout();
    router.push("/week-9");
  };

  return (
    <main className="min-h-screen bg-purple-50 text-purple-900 dark:bg-black dark:text-purple-200 p-6">

      {/* HEADER */}
      <header className="flex justify-between items-center mb-6 border-b pb-4 border-purple-300 dark:border-purple-700">

        <h1 className="text-3xl font-bold">
          Shopping List
        </h1>

        <div className="flex gap-3">

          {/* PROFILE BUTTON */}
          <button
            onClick={() => router.push("/week-9/profile")}
            className="
              px-4 py-2 rounded-lg
              bg-purple-400 text-white
              hover:bg-purple-600
              transition
            "
          >
            Profile
          </button>

          {/* LOGOUT BUTTON (UPDATED STYLE) */}
          <button
            onClick={handleLogout}
            className="
              px-4 py-2 rounded-lg
              border border-red-400 text-red-400
              bg-transparent
              hover:bg-red-400 hover:text-white
              transition
            "
          >
            Logout
          </button>

        </div>

      </header>

      {/* CONTENT */}
      <section className="mx-auto w-full lg:w-4/5 flex flex-col lg:flex-row gap-10">

        {/* LEFT SIDE */}
        <div className="lg:w-1/2 space-y-8">

          <NewItem onAddItem={handleAddItem} />

          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 p-6 rounded-lg shadow bg-white dark:bg-purple-900 border border-purple-200 dark:border-purple-700">
          <MealIdeas ingredient={selectedItemName} />
        </div>

      </section>

    </main>
  );
}