"use client";
import { CircleX } from "lucide-react";
import { deleteTask } from "../actions";
import EditTodo from "./edit-todo";

export default function Todos({
  allTasks,
}: {
  allTasks: { id: string; task: string }[];
}) {
  return (
    <div className="flex flex-col font-mono">
      {allTasks.length ? (
        allTasks.map((todo, index) => (
          <div key={todo.id} className="flex gap-3">
            {index + 1}: <span>{todo.task}</span>
            <CircleX
              className="py-1 bg-black rounded-lg text-gray-400"
              onClick={() => deleteTask(todo.id)}
            ></CircleX>
            <EditTodo id={todo.id} task={todo.task} />
          </div>
        ))
      ) : (
        <div>No Data Avaliable...</div>
      )}
    </div>
  );
}
