"use server";

import { getTasks } from "./actions";
import { unstable_cache } from "next/cache";
import Todos from "./components/list-of-todo";
import AddTodo from "./components/add-todo";

const tasks = unstable_cache(async () => await getTasks(), ["task"], {
  revalidate: 3600,
  tags: ["task"],
});

export default async function Home() {
  const allTasks = await tasks();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full m-0">
      <div className="mb-8">
        <AddTodo />
      </div>
      <h1 className="mb-4 font-semibold text-3xl">List of Todo</h1>
      <Todos allTasks={allTasks} />
    </div>
  );
}
