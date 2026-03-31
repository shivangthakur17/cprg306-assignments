"use client";

import { useUserAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const { user, loading } = useUserAuth();
  const router = useRouter();

  // loading state
  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-purple-50 dark:bg-black">
        <p className="text-purple-600 dark:text-purple-300 animate-pulse">
          Loading profile...
        </p>
      </main>
    );
  }

  // protect route
  if (!user) {
    router.push("/week-9");
    return null;
  }

  return (
    <main className="min-h-screen bg-purple-50 dark:bg-black text-purple-900 dark:text-purple-200 p-6 flex justify-center">

      <div className="w-full max-w-md p-6 rounded-lg shadow bg-white dark:bg-purple-900 border border-purple-200 dark:border-purple-700 space-y-4">

        <h1 className="text-2xl font-bold text-center">
          Profile
        </h1>

        <img
          src={user.photoURL}
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto shadow"
        />

        <p><strong>Name:</strong> {user.displayName || "N/A"}</p>
        <p><strong>Email:</strong> {user.email}</p>

        <p className="text-xs opacity-70 break-all">
          <strong>UID:</strong> {user.uid}
        </p>

        <button
          onClick={() => router.push("/week-9/shopping-list")}
          className="w-full py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-700 transition"
        >
          Back to Shopping List
        </button>

      </div>

    </main>
  );
}