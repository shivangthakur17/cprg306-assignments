import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center
      bg-purple-50 text-purple-900
      dark:bg-black dark:text-purple-200">

      {/* Top-left name */}
      <div className="absolute top-4 left-4 font-semibold size-base text-purple-600 dark:text-purple-300">
        Shivang Thakur
      </div>

      <div className="bg-white dark:bg-purple-950
        p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          CPRG 306 Assignments
        </h1>

        <ul className="space-y-4">
          <li>
            <Link
              href="/week-2"
              className="block text-center p-3 rounded-lg bg-purple-100 text-purple-800 hover:bg-purple-300 hover:text-white dark:bg-purple-800 dark:text-purple-100 dark:hover:bg-purple-300 dark:hover:text-purple-900"
            >
              Week 2
            </Link>
          </li>

          <li>
            <Link
              href="/week-3"
              className="block text-center p-3 rounded-lg bg-purple-200 text-purple-900 hover:bg-purple-300 hover:text-white dark:bg-purple-700 dark:text-purple-100 dark:hover:bg-purple-300 dark:hover:text-purple-900"
            >
              Week 3
            </Link>
          </li>

          <li>
            <Link
              href="/week-4"
              className="block text-center p-3 rounded-lg bg-purple-300 text-purple-900 hover:bg-purple-300 hover:text-white dark:bg-purple-600 dark:text-purple-100 dark:hover:bg-purple-300 dark:hover:text-purple-900"
            >
              Week 4
            </Link>
          </li>

          <li>
            <Link
              href="/week-5"
              className="block text-center p-3 rounded-lg bg-purple-400 text-purple-900 hover:bg-purple-300 hover:text-white dark:bg-purple-500 dark:text-purple-100 dark:hover:bg-purple-300 dark:hover:text-purple-900"
            >
              Week 5
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
