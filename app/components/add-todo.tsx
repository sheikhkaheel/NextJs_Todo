"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createTask } from "../actions";
import { ChangeEvent, useActionState, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function AddTodo() {
  const [state, action, pending] = useActionState(async () => {
    const formData = new FormData(document.querySelector("form")!);
    const result = await createTask(formData);
    return result; // return the result to allow awaiting it in handleSubmition
  }, undefined);

  const { toast } = useToast();

  const handleSubmition = async () => {
    action();

    toast({
      title: "SUCCESS",
      description: "Task Added Successfully",
    });

    if (!state?.success) {
      toast({
        title: "Error",
        description: "Some Error Occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <form action={handleSubmition}>
      <label className="text-3xl font-semibold mr-4">Create a Todo</label>
      <Input
        className="my-2 border text-black lg:w-[20rem] placeholder:text-gray-700 bg-white"
        type="text"
        placeholder="Task Name..."
        name="task"
      ></Input>
      <Button variant="default" disabled={pending}>
        {!pending ? "Save" : "Saving..."}
      </Button>
    </form>
  );
}
