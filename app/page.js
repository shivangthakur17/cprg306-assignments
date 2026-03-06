import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center
      bg-purple-50 text-purple-900
      dark:bg-black dark:text-purple-200">

      {/* Top-left name */}
      <div className="absolute top-4 left-4 font-semibold size-base text-purple-800 dark:text-purple-900">
        Shivang Thakur
      </div>

      <div className="bg-white dark:bg-gradient-to-b from-purple-400 to-purple-900 
        p-8 rounded-xl shadow-lg w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          CPRG 306 Assignments
        </h1>

        <ul className="space-y-4">
          <li>
            <Link
              href="/week-2"
              className="block text-center p-3 rounded-lg bg-purple-100 text-purple-800 hover:bg-purple-300 hover:text-white hover:scale-[1.04] transition-all duration-200 hover:shadow-xl  dark:bg-purple-900 dark:text-purple-100 dark:hover:bg-purple-300 dark:hover:text-purple-900"
            >
              Week 2
            </Link>
          </li>

          <li>
            <Link
              href="/week-3"
              className="block text-center p-3 rounded-lg bg-purple-200 text-purple-900 hover:bg-purple-300 hover:text-white hover:scale-[1.04] transition-all duration-200 hover:shadow-xl dark:bg-purple-800 dark:text-purple-100 dark:hover:bg-purple-300 dark:hover:text-purple-900"
            >
              Week 3
            </Link>
          </li>

          <li>
            <Link
              href="/week-4"
              className="block text-center p-3 rounded-lg bg-purple-300 text-purple-900 hover:bg-purple-300 hover:text-white hover:scale-[1.04] transition-all duration-200 hover:shadow-xl dark:bg-purple-700 dark:text-purple-100 dark:hover:bg-purple-300 dark:hover:text-purple-900"
            >
              Week 4
            </Link>
          </li>

          <li>
            <Link
              href="/week-5"
              className="block text-center p-3 rounded-lg bg-purple-400 text-purple-900 hover:bg-purple-300 hover:text-white hover:scale-[1.04] transition-all duration-200 hover:shadow-xl dark:bg-purple-600 dark:text-purple-100 dark:hover:bg-purple-300 dark:hover:text-purple-900"
            >
              Week 5
            </Link>
          </li>

          <li>
            <Link
              href="/week-6"
              className="block text-center p-3 rounded-lg bg-purple-400 text-purple-900 hover:bg-purple-300 hover:text-white hover:scale-[1.04] transition-all duration-200 hover:shadow-xl dark:bg-purple-500 dark:text-purple-100 dark:hover:bg-purple-300 dark:hover:text-purple-900"
            >
              Week 6
            </Link>
          </li>

          <li>
            <Link
              href="/week-7"
              className="block text-center p-3 rounded-lg bg-purple-500 text-purple-900 hover:bg-purple-300 hover:text-white hover:scale-[1.04] transition-all duration-200 hover:shadow-xl dark:bg-purple-400 dark:text-purple-100 dark:hover:bg-purple-300 dark:hover:text-purple-900"
            >
              Week 7
            </Link>
          </li>

          <li>
            <Link
              href="/week-8"
              className="block text-center p-3 rounded-lg bg-purple-500 text-purple-900 hover:bg-purple-300 hover:text-white hover:scale-[1.04] transition-all duration-200 hover:shadow-xl dark:bg-purple-400 dark:text-purple-100 dark:hover:bg-purple-300 dark:hover:text-purple-900"
            >
              Week 8
            </Link>
          </li>

          <li>
            <Link
              href="/week-9"
              className="block text-center p-3 rounded-lg bg-purple-600 text-purple-900 hover:bg-purple-300 hover:text-white hover:scale-[1.04] transition-all duration-200 hover:shadow-xl dark:bg-purple-300 dark:text-purple-100 dark:hover:bg-purple-300 dark:hover:text-purple-900"
            >
              Week 9
            </Link>
          </li>

          <li>
            <Link
              href="/week-10"
              className="block text-center p-3 rounded-lg bg-purple-600 text-purple-900 hover:bg-purple-300 hover:text-white hover:scale-[1.04] transition-all duration-200 hover:shadow-xl dark:bg-purple-300 dark:text-purple-100 dark:hover:bg-purple-300 dark:hover:text-purple-900"
            >
              Week 10
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
