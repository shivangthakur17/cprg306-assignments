"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn: login, logout } = useUserAuth();

  // Added handlers (REQUIRED FIX)
  const handleLogin = async () => {
    try {
      await login();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  //  NOT LOGGED IN
  if (!user) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-purple-50 dark:bg-black text-purple-900 dark:text-purple-200">
        
        <h1 className="text-3xl font-bold mb-6">
          Week 9 Login
        </h1>

        <button
          onClick={handleLogin}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-400 to-purple-600 text-white shadow-lg hover:scale-[1.05] hover:from-purple-600 hover:to-purple-800 transition-all duration-200"
        >
          Login with GitHub
        </button>

      </main>
    );
  }

  //  LOGGED IN
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-purple-50 dark:bg-black text-purple-900 dark:text-purple-200 space-y-6">

      <h1 className="text-3xl font-bold">Welcome</h1>

      <p className="text-lg">{user.displayName}</p>
      <p className="text-sm opacity-80">{user.email}</p>

      <img
        src={user.photoURL}
        alt="profile"
        className="w-20 h-20 rounded-full shadow"
      />

      <div className="flex flex-col items-center gap-4">

        {/*  LOGOUT BUTTON */}
        <button
          onClick={handleLogout}
          className="px-6 py-2 rounded-lg border border-red-400 text-red-400 bg-transparent hover:bg-red-400 hover:text-white transition"
        >
          Logout
        </button>

        {/* 🟣 SHOPPING LIST BUTTON */}
        <Link
          href="/week-9/shopping-list"
          className="px-6 py-3 rounded-lg border border-purple-400 text-purple-400 bg-purple-100/20 dark:bg-purple-900/30 backdrop-blur-sm shadow-md hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 hover:text-white hover:scale-[1.03] transition-all duration-200"
        >
          Go to Shopping List
        </Link>

      </div>

    </main>
  );
}