"use client";

import DeleteTodo from "./delete-todo";
import EditTodo from "./edit-todo";

export default function Todos({
  allTasks,
}: {
  allTasks: { id: string; task: string }[];
}) {
  return (
    <div className="flex flex-col font-mono px-8 lg:px-0">
      {allTasks.length ? (
        allTasks.map((todo, index) => (
          <div key={todo.id} className="flex gap-3">
            {index + 1}: <span>{todo.task}</span>
            <EditTodo id={todo.id} task={todo.task} />
            <DeleteTodo id={todo.id} />
          </div>
        ))
      ) : (
        <div>No Data Avaliable...</div>
      )}
    </div>
  );
}
