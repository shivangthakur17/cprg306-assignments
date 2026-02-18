import NewItem from "./NewItem";

export default function Page() {
  return (
    <main
      className="
        min-h-screen
        bg-black text-purple-200
        p-6
      "
    >
      <h1 className="text-3xl font-bold mb-8 text-center">
        Shopping List
      </h1>

      <div className="mx-auto w-full md:w-2/5">
        <NewItem />
      </div>
    </main>
  );
}
