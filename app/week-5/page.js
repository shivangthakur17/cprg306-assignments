import NewItem from "./NewItem";

export default function Page() {
  return (
    <main
      className="
        min-h-screen
        bg-purple-50 text-purple-900
        dark:bg-black dark:text-purple-200
        p-6
      "
    >
      <h1 className="text-3xl font-bold mb-6 text-center">
        Add New Item
      </h1>

      <div className="mx-auto w-full md:w-2/5">
        <NewItem />
      </div>
    </main>
  );
}
