"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createTask } from "../actions";
import { useActionState } from "react";

export default function AddTodo() {
  const [state, action, pending] = useActionState(async () => {
    const formData = new FormData(document.querySelector("form")!);
    await createTask(formData);
  }, undefined);

  return (
    <form action={action}>
      <label className="text-3xl font-semibold mr-4">Create a Todo</label>
      <Input
        className="my-2 border lg:w-[20rem] placeholder:text-gray-700 bg-white"
        type="text"
        placeholder="Task Name..."
        name="task"
      ></Input>
      <Button disabled={pending}>{!pending ? "Save" : "Saving..."}</Button>
    </form>
  );
}
